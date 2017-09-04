<template>
  <div class="index">

    <div class="isNotLoggedIn" v-if="isLoggedInUser === false">
      <header class="header-banner"> 
        <div class="container-width">
          <nav class="navbar">
          </nav>
          <div class="clearfix">
          </div>
          <div class="lead-title">Welcome to Flowz Builder
          </div>
          <div class="lead-btn" @click="loginPage">Try it now
          </div>
        </div>
      </header>
    </div>

    <div class="isLoggedIn" v-else>
          <div id="wrapper">

            <!-- Overlay when sidebar is opened. Currently disabled in CSS -->
            <div class="overlay"></div>
        
            <!-- Sidebar Wrapper -->
            <nav id="sidebar-wrapper" role="navigation">
                <div class="treeViewBlock">
                  <!-- <el-button type="primary" icon="plus" class="newWebsite" @click="newWebsiteDialog = true">Create New Website</el-button>
                  <el-button type="success" icon="plus" class="newWebsite" @click="getGitFileContent()">Get File Content</el-button>
                  <el-button type="info" icon="plus" class="newWebsite" @click="componentId = 'ProjectSettings'">Project Settings</el-button> -->
                  <el-tree :data="directoryTree" :props="defaultProps" :expand-on-click-node="false" node-key="id" :render-content="renderContent" @node-click="handleNodeClick" highlight-current></el-tree>
                </div>
            </nav>
            <!-- /#sidebar-wrapper -->

            <!-- Page Content -->
            <div id="page-content-wrapper">
                <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                </button>
                <div class="allComponents">
                  <div class="row" v-if="isHomePage === false && isSettingsPage === false">
                    <div class="col-md-4"></div>

                    <!-- <div class="col-md-4" style="margin-top: 15px;" align="center" v-if="isLayoutFile">
                      <el-button-group>
                        <el-button type="primary" icon="edit" @click="changeEditor('GrapesComponent')">Grapes Editor</el-button>
                        <el-button type="primary" @click="changeEditor('GridManager')">Grid Manager <i class="el-icon-menu el-icon-right"></i></el-button>
                      </el-button-group>
                    </div>
                    <div class="col-md-4" v-if="!isLayoutFile"></div> -->

                    <div class="col-md-4"></div>

                    <div class="col-md-4" align="right">
                        <div style="margin-right:10px; margin: 15px;">
                            <el-button type="info" @click="previewProductPage()" v-if="!isGridPreview">Preview</el-button>
                            <el-button type="info" @click="previewGridPage()" v-if="isGridPreview && !isPreviewComponent">Preview</el-button>
                            <el-button type="default" @click="backToGrid()" v-if="isPreviewComponent">Back</el-button>
                            <el-button type="primary" @click="saveJsonFile()" :loading="saveFileLoading" v-if="isMenuBuilder">Save</el-button>
                            <el-button type="primary" @click="saveFile()" :loading="saveFileLoading" v-else="isMenuBuilder">Save</el-button>
                            <el-button type="danger" @click="cancelEditing()">Cancel</el-button>
                        </div>
                    </div>

                    <el-dialog title="File name" :visible.sync="newFileDialog">
                        <el-form :model="formAddFile" :rules="rulesFrmFile" ref="formAddFile">
                            <el-form-item prop="filename">
                                <el-input v-model="formAddFile.filename" auto-complete="off" placeholder="FileName.ext"></el-input>
                            </el-form-item>
                             
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFileDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFile('formAddFile')" :loading="addNewFileLoading">Create</el-button>
                        </span>
                    </el-dialog>

                    <el-dialog title="Website Name" :visible.sync="newWebsiteDialog">
                        <el-form :model="formNewWebsite" ref="formNewWebsite">
                            <el-form-item>
                                <el-input v-model="formNewWebsite.websiteName" auto-complete="off" placeholder="Website Name"></el-input>
                            </el-form-item>
                             
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newWebsiteDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="createGitWebsite()" :loading="addNewWebsiteLoading">Create</el-button>
                        </span>
                    </el-dialog>

                    <el-dialog title="Folder name" :visible.sync="newFolderDialog">
                        <el-form :model="formAddFolder">
                            <el-form-item>
                                <el-input v-model="formAddFolder.foldername" auto-complete="off" placeholder="Folder Name"></el-input>
                            </el-form-item>
                            <!-- <el-form-item>    
                              <el-row>
                              <el-col :span='4'>
                                <div style="font-weight: bold;">Template:</div>
                              </el-col>
                              <el-col :span='20'>
                                <el-select name='Select' v-model="value" placeholder="Select">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </el-col>
                              </el-row>
                            </el-form-item> -->
                            <el-form-item>
                              <el-col :span='10'>
                                <div style="font-weight: bold;">Create default files and folders:(Recommended)</div>
                                </el-col>
                                <el-col :span='4'>
                                <el-switch
                                  v-model="autoFolders"
                                  :width=60
                                  on-text="YES"
                                  off-text="NO">
                                </el-switch>
                              </el-col>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFolderDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFolder()" :loading="addNewFolderLoading">Create</el-button>
                        </span>
                    </el-dialog>
                  </div>

                  <div v-if="isHomePage === true">
                    <el-dialog title="File name" :visible.sync="newFileDialog">
                        <el-form :model="formAddFile" :rules="rulesFrmFile" ref="formAddFile">
                            <el-form-item prop="filename">
                                <el-input v-model="formAddFile.filename" auto-complete="off"></el-input>
                            </el-form-item>
                             
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFileDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFile('formAddFile')" :loading="addNewFileLoading">Create</el-button>
                        </span>
                    </el-dialog>
                    <el-dialog title="Website Name" :visible.sync="newWebsiteDialog">
                        <el-form :model="formNewWebsite" ref="formNewWebsite">
                            <el-form-item>
                                <el-input v-model="formNewWebsite.websiteName" auto-complete="off" placeholder="Website Name"></el-input>
                            </el-form-item>
                             
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newWebsiteDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="createGitWebsite()" :loading="addNewWebsiteLoading">Create</el-button>
                        </span>
                    </el-dialog>
                    <el-dialog title="Folder name" :visible.sync="newFolderDialog">
                        <el-form :model="formAddFolder">
                            <el-form-item>
                                <el-input v-model="formAddFolder.foldername" auto-complete="off"></el-input>
                            </el-form-item>
                            <!-- <el-form-item>    
                              <el-row>
                              <el-col :span='4'>
                                <div style="font-weight: bold;">Template:</div>
                              </el-col>
                              <el-col :span='20'>
                                <el-select name='Select' v-model="value" placeholder="Select">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </el-col>
                              </el-row>
                            </el-form-item> -->
                            <el-form-item>
                              <el-col :span='6'>
                                <div style="font-weight: bold;">Create default files and folders:</div>
                                </el-col>
                                <el-col :span='4'>
                                <el-switch
                                  v-model="autoFolders"
                                  :width=60
                                  on-text="YES"
                                  off-text="NO">
                                </el-switch>
                              </el-col>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFolderDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFolder()" :loading="addNewFolderLoading">Create</el-button>
                        </span>
                    </el-dialog>
                  </div>

                  <div v-if="previewGrid" style="width:100%;">
                      <PreviewGrid></PreviewGrid>
                  </div>

                  <div v-if="!previewGrid">
                    <component :is="componentId" ref="contentComponent"></component>
                  </div>
                  
                </div>
            </div>
            <!-- /#page-content-wrapper -->

        </div>
        <!-- /#wrapper -->
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

import axios from 'axios'
import _ from 'lodash'

import HTML from 'vue-html'
Vue.use(HTML)

import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';

// Custom Components

// Home page
import HomePage from './HomePage'

// Code Mirror
import VueCodeMirror from 'vue-codemirror'
import CodeMirror from './CodeMirror'
Vue.use(VueCodeMirror)

// GrapesJS Editor
import GrapesComponent from './GrapesComponent'

// JSON Viewver
import JsonViewer from './JsonViewer'   

// Menu Builder
import MenuBuilder from './MenuBuilder'

// GridManager
import GridManager from './GridManager'

// Grid Preview
import PreviewGrid from './PreviewGrid'

// Page Settings
import PageSettings from './PageSettings'

// Project Settings
import ProjectSettings from './ProjectSettings'

let checkFileName = (rule, value, callback) => {
    console.log('value',/^[a-z0-9_.@()-]+\.[^.]+$/i.test(value))
    if (!value) {
        return callback(new Error('Please enter filename.'));
    }else if(!(/^[a-z0-9_.@()-]+\.[^.]+$/i.test(value))){
        return callback(new Error('Please enter valid filename.'));
    }else{
        return callback();
    }
}

export default {
  name: 'Index',
  props: {
  },
  data () {
    return {
      newWebsiteName: '',
      autoFolders: true,
      isLoggedInUser: false,
      baseURL : 'http://localhost:3030',
      directoryTree: [],
      currentFile : null,
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      rootpath : '',
      componentId: HomePage,
      addNewFileLoading : false,
      addNewFolderLoading : false,
      addNewWebsiteLoading: false,
      loadingTree : true,
      loadingContent : false,
      saveFileLoading : false,
      previewGrid : false,
      btnPreview : false,
      breadcrumbArr : [],
      rootpath : '',
      showLeftMenu : true,
      isMenuBuilder: false,
      isHomePage: true,
      isSettingsPage: false,
      isGridPreview: false,
      isPreviewComponent: false,
      isPageEditing: false,
      isProjectEditing: false,
      // isLayoutFile: false,
      formAddFile : {
          filename:null
      },
      formNewWebsite : {
          websiteName:null
      },
      rulesFrmFile: {
          filename: [
              { validator: checkFileName, trigger: 'blur' }
          ]
      },
      formAddFolder : {
          foldername : null
      },
      newFileDialog : false,
      newFolderDialog : false,
      newWebsiteDialog: false,
      options: [ 
        { value: 'Option1', label: 'Elegent Theme' },
        { value: 'Option2', label: 'Flat Theme' } 
      ],
      value: '',
      newRepoId: '',
      repoName: ''
    }
  },
  components: {
    CodeMirror,
    GrapesComponent,
    JsonViewer,
    MenuBuilder,
    HomePage,
    GridManager,
    PreviewGrid,
    PageSettings,
    ProjectSettings
  },
  created () {
    if(!this.$session.exists()){
      this.isLoggedInUser = false
    }else{
      this.isLoggedInUser = true;
      this.getData()
    }
  },
  mounted () {
    // Sidemenu Toggle
    $(document).ready(function() {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
          isClosed = false;

      trigger.click(function() {
          hamburger_cross();
      });

      function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function() {
          $('#wrapper').toggleClass('toggled');
      });
    });

    // Project Directory Listing
    let self = this
    const app = feathers().configure(socketio(io(this.baseURL)))
    app.service("flows-dir-listing").on("created", (response) => {
        response.path = response.path.replace(/\//g, "\\")
        var s = response.path.replace(this.rootpath, '').split('\\');
        let objCopy = self.directoryTree
        let evalStr = 'self.directoryTree'
        let $eval = eval(evalStr)
        for (var i = 0; i < s.length; i++) {
            let inx = _.findIndex($eval, function(d) {
                return d.name == s[i]
            })
            if (inx >= 0 && $eval[inx]["children"] != undefined) {
                evalStr += '[' + inx + ']["children"]'
                $eval = eval(evalStr)
            }
        }
        let inx = _.findIndex($eval, function(d) {
            return d.name == response.name
        })
        if (inx < 0) {
            $eval.push(response)
        }
    })
    app.service("flows-dir-listing").on("removed", (response) => {
        if (response['errno'] == undefined) {
            var s = response.replace(this.rootpath, '').replace(/\//g, "\\").split('\\');
            console.log(s);
            let objCopy = self.directoryTree
            let evalStr = 'self.directoryTree'
            let $eval = eval(evalStr)
            for (var i = 0; i < s.length; i++) {
                let inx = _.findIndex($eval, function(d) {
                    return d.name == s[i]
                })
                if (inx >= 0 && $eval[inx]["children"] != undefined && $eval[inx].path != response) {
                    if ($eval[inx].children.length > 0) {
                        evalStr += '[' + inx + ']["children"]'
                        $eval = eval(evalStr)
                    }
                }
            }
            let inx = _.findIndex($eval, function(d) {
                return d.path == response
            })
            if (inx >= 0) {
                $eval.splice(inx, 1)
                if (self.currentFile != null) {
                    if (self.currentFile.path == response) {
                        self.$message({
                            showClose: true,
                            message: 'Successfully Deleted!',
                            type: 'error'
                        });
                        self.currentFile = null
                        self.componentId = null
                    }
                }
            }
        }
    });
  },

  methods: {
    loginPage() {
      this.$router.push('/login')
    },
    getData() {
      axios.get(this.baseURL + '/flows-dir-listing')
      .then(response => {
          response.data.children = this.getTreeData(response.data);
          if (this.directoryTree.length == 0) {
            this.directoryTree = [response.data]
          } else {
            console.log(response.data.children)
            this.directoryTree[0].children = response.data.children
          }
          this.loadingTree = false
          this.rootpath = this.directoryTree[0].path.replace(this.directoryTree[0].name, '')
      })
      .catch(e => {
          this.loadingTree = false
          console.log(e);
      });
    },
    getTreeData: function(data){
        let self = this
        let newData = []
        _.each(data.children,function(el){
            if(el.type == 'directory'){
                el.children = self.sortTree(el);
            }
            newData.push(el)
        })
        return _.sortBy(newData, [function(o) { return o.type; }]);
    },
    sortTree : function(data){
        return  _.sortBy(data.children, [function(o) { return o.type; }]);
    },

    createGitWebsite: function(){
      axios.get('http://localhost:3030/repo-service/1?userId=' + this.$session.get('userId') + '&repoName=' + this.formNewWebsite.websiteName, {
      }).then(response => {
        this.formNewWebsite.websiteName = '';
        this.newWebsiteDialog = false;
        if (response.data) {
            console.log(response.data);
            this.newWebsiteDialog = false;
        }
      }).catch(error => {
        this.formNewWebsite.websiteName = '';
        console.log(error);
        this.$notify.error({
          title: 'Error',
          message: error.data,
          offset: 100
        });
        this.newWebsiteDialog = false;
      })
    },

    handleNodeClick(data) {
      if(this.isPageEditing){
        this.isPageEditing = false;
        this.isProjectEditing = false;
        this.isSettingsPage = true;
        this.componentId = 'PageSettings';
      } else if(this.isProjectEditing) {
        this.isProjectEditing = false;
        this.$store.state.fileUrl = data.path;
        this.isSettingsPage = true;
        this.componentId = 'ProjectSettings';
      } else {
        this.componentId = null;
        this.isPageEditing = false;
        this.isProjectEditing = false;
        this.previewGrid = false;
        this.isSettingsPage = false;
        this.currentFile = data;
        if(data.type == "file"){
            this.getFileContent(data.path);
        }
      }
    },

    getGitFileContent: async function(){
      console.log("Getting GIT file content");
      let response = await axios.get('http://localhost:3030/file-service?projectId=9&fileName=README.md&branchName=master&privateToken=' + this.$session.get('privateToken'));

      // Create Base64 Object
      var Base64 = {
          _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function(input) {
              var output = "";
              var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
              var i = 0;
              input = Base64._utf8_encode(input);
              while (i < input.length) {
                  chr1 = input.charCodeAt(i++);
                  chr2 = input.charCodeAt(i++);
                  chr3 = input.charCodeAt(i++);
                  enc1 = chr1 >> 2;
                  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                  enc4 = chr3 & 63;
                  if (isNaN(chr2)) {
                      enc3 = enc4 = 64;
                  } else if (isNaN(chr3)) {
                      enc4 = 64;
                  }
                  output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
              }
              return output;
          },
          decode: function(input) {
              var output = "";
              var chr1, chr2, chr3;
              var enc1, enc2, enc3, enc4;
              var i = 0;
              input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              while (i < input.length) {
                  enc1 = this._keyStr.indexOf(input.charAt(i++));
                  enc2 = this._keyStr.indexOf(input.charAt(i++));
                  enc3 = this._keyStr.indexOf(input.charAt(i++));
                  enc4 = this._keyStr.indexOf(input.charAt(i++));
                  chr1 = (enc1 << 2) | (enc2 >> 4);
                  chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                  chr3 = ((enc3 & 3) << 6) | enc4;
                  output = output + String.fromCharCode(chr1);
                  if (enc3 != 64) {
                      output = output + String.fromCharCode(chr2);
                  }
                  if (enc4 != 64) {
                      output = output + String.fromCharCode(chr3);
                  }
              }
              output = Base64._utf8_decode(output);
              return output;
          },

          _utf8_encode: function(string) {
              string = string.replace(/\r\n/g, "\n");
              var utftext = "";
              for (var n = 0; n < string.length; n++) {
                  var c = string.charCodeAt(n);
                  if (c < 128) {
                      utftext += String.fromCharCode(c);
                  }
                  else if ((c > 127) && (c < 2048)) {
                      utftext += String.fromCharCode((c >> 6) | 192);
                      utftext += String.fromCharCode((c & 63) | 128);
                  }
                  else {
                      utftext += String.fromCharCode((c >> 12) | 224);
                      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                      utftext += String.fromCharCode((c & 63) | 128);
                  }
              }
              return utftext;
          },

          _utf8_decode: function(utftext) {
              var string = "";
              var i = 0;
              var c = 0; 
              var c1 = 0; 
              var c2 = 0;
              while (i < utftext.length) {
                  c = utftext.charCodeAt(i);
                  if (c < 128) {
                      string += String.fromCharCode(c);
                      i++;
                  }
                  else if ((c > 191) && (c < 224)) {
                      c2 = utftext.charCodeAt(i + 1);
                      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                      i += 2;
                  }
                  else {
                      c2 = utftext.charCodeAt(i + 1);
                      c3 = utftext.charCodeAt(i + 2);
                      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                      i += 3;
                  }
              }
              return string;
          }
      }

      // Define the string
      var encryptedData = response.data.content;

      var fileData = Base64.decode(encryptedData);

      console.log("FileData: " + fileData);

      // this.$store.dispatch('updateContent', { text: fileData });
    },

    getFileContent: async function (url) {
        url = url.replace(/\\/g, "\/")
        this.btnPreview = false
        this.previewFile = false
        this.loadingContent = true
        this.componentId = null
        let ext = url.split('.').pop();

        this.$store.state.fileUrl = url;
        let response = await axios.get(this.baseURL + '/flows-dir-listing/0?path=' + url);

        this.$store.dispatch('updateContent', { text: response.data })
        if(response.status == 200 || response.status == 204){
            switch(ext.toLowerCase()){
                case 'grid':
                    this.isMenuBuilder = false;
                    this.isHomePage = false;
                    this.componentId = 'GridManager'
                    this.isGridPreview = true;
                    break;
                case 'json':
                    this.isMenuBuilder = false;
                    this.isHomePage = false;
                    this.isGridPreview = false;
                    // this.isLayoutFile = false;
                    try{
                         this.$store.state.content = JSON.parse(response.data)
                    }catch(e){
                        if(response.data.trim() == ''){
                            this.$store.state.content ={}
                        }else{
                            this.$store.state.content = response.data
                        }
                        
                    } 
                    this.componentId = 'json-viewer'
                    break;
                case 'layout':
                    // this.isLayoutFile = true;
                    this.isGridPreview = false;
                    this.isMenuBuilder = false;
                    this.isHomePage = false;

                    if(this.isEditOption==true){
                      this.componentId = 'code-mirror'
                      this.isEditOption=false
                    } else{ 
                      this.componentId = 'GridManager'
                    }

                    break;
                case 'html':
                    // this.isLayoutFile = true;
                    this.isGridPreview = false;
                    this.isMenuBuilder = false;
                    this.isHomePage = false;
                    if(this.isEditOption==true) {
                      this.componentId = 'code-mirror'
                      this.isEditOption=false
                    } else{ 
                      this.componentId = 'GrapesComponent'
                    }
                    break;
                case 'menu':
                    // this.isLayoutFile = false;
                    this.isGridPreview = false;
                    this.isMenuBuilder = true;
                    this.isHomePage = false;
                    this.componentId = 'MenuBuilder'
                    break;
                default :
                    // this.isLayoutFile = false;
                    this.isGridPreview = false;
                    this.isMenuBuilder = false;
                    this.isHomePage = false;
                    this.componentId = 'code-mirror'
                    break;
            }
        }
        this.breadcrumbArr = url.replace(this.rootpath,'').split('\\')
        this.loadingContent = false
    },

    previewProductPage: function(){
        window.open("http://localhost/websites/");
    },

    previewGridPage: function(){
      switch(this.componentId){
        case 'GridManager':
          this.$refs.contentComponent.getHtml();
          this.previewGrid = true;
          this.isPreviewComponent = true;
          break;
        default :
          this.previewGrid = false;
          this.isPreviewComponent = false;
          break;
      }
    },

    backToGrid: function(){
      this.previewGrid = false;
      this.isPreviewComponent = false;
    },

    addFolder(){
        let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddFolder.foldername;
        return axios.post(this.baseURL + '/flows-dir-listing', {
            foldername : newFolderName,
            type : 'folder'
        })
        .then((res) => {
            console.log(res)
            this.newFolderDialog = false
            this.addNewFolderLoading = false

            // Create repositoroty on GitLab
            axios.get(this.baseURL + '/gitlab-add-repo?nameOfRepo='+this.formAddFolder.foldername + '&privateToken='+ this.$session.get('privateToken') + '&username=' + this.$session.get('username'), {
            })
            .then((response) => {
                console.log(response.data);
                this.newRepoId = response.data.id;
                this.repoName = response.data.name;
                // this.$session.set('newRepoId', response.data.id);
                // this.$session.set('repoName', response.data.name);

                // Create essential folders
                if(this.autoFolders == true)
                {
                  this.autoFolders=false;
                  this.addOtherFolder(newFolderName)
                }
                this.autoFolders=false;

                this.formAddFolder.foldername = null;
            })
            .catch((e) => {
                console.log(e)
            });


        })
        .catch((e) => {
            console.log(e)
        })
    },

    addOtherFolder(newFolderName){

      return axios.post(this.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/assets',
        type : 'folder'
      })
      .then((res) => {
          
          return axios.post(this.baseURL+'/flows-dir-listing' , {
          foldername : newFolderName+'/Headers',
          type : 'folder'

          })
          .then((res) => {
              return axios.post(this.baseURL+'/flows-dir-listing' , {
                foldername : newFolderName+'/Layouts',
                type : 'folder'

              })
              .then((res) => {
                  return axios.post(this.baseURL+'/flows-dir-listing' , {
                    foldername : newFolderName+'/menus',
                    type : 'folder'

                  })
                  .then((res) => {
                    return axios.post(this.baseURL+'/flows-dir-listing' , {
                      foldername : newFolderName+'/Footers',
                      type : 'folder'
                    })
                    .then((res) => {
                      return axios.post(this.baseURL+'/flows-dir-listing' , {
                        foldername : newFolderName+'/Pages',
                        type : 'folder'
                      })
                      .then((res) => {
                        this.createEssentialFiles(newFolderName);
                      })
                      .catch((e)=>{
                        console.log("Error from Menu"+res)
                      })
                    })
                    .catch((e)=>{
                      console.log("Error from Menu"+res)
                    })
                  })
                  .catch((e)=>{
                    console.log("Error from Menu"+res)
                  })
              })
              .catch((e)=>{
                console.log("Error From Layout"+res)
              })
          })
          .catch((e)=>{
            console.log("Error From Grid"+res)
          })
      })
      .catch((e)=>{
        console.log("Error from Assests"+res)
      })
          
    },

    createEssentialFiles(newFolderName) {
      let newfilename = newFolderName + '/assets/config.json'
      let repoSettings = [ { "repoSettings" : [ { "RepositoryId" : this.newRepoId, "RepositoryName" : this.repoName }] }, {"projectSettings":[{ "RepositoryId" : this.newRepoId, "ProjectName": this.repoName,"ProjectLayout": '',"ProjectTheme":'',"ProjectSEOTitle":'',"ProjectSEOKeywords": '',"ProjectSEODescription":''}],"pageSettings":[] } ];
      return axios.post(this.baseURL + '/flows-dir-listing', {
          filename : newfilename,
          text : JSON.stringify(repoSettings),
          type : 'file'
      })
      .then((res) => {
        let maincss = newFolderName + '/assets/main.css'
        return axios.post(this.baseURL + '/flows-dir-listing', {
            filename : maincss,
            text : '/* Add your custom CSS styles here. It will be automatically included in every page. */',
            type : 'file'
        })
        .then((res) => {
          let mainjs = newFolderName + '/assets/main.js'
          return axios.post(this.baseURL + '/flows-dir-listing', {
              filename : mainjs,
              text : '/* Add your custom JavaScript/jQuery functions here. It will be automatically included in every page. */',
              type : 'file'
          })
          .then((res) => {
            
          })
          .catch((e) => {
              console.log(e)
          })
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      })
    },

    addFile(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
              this.addNewFileLoading = true
              let newfilename = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddFile.filename
              return axios.post(this.baseURL + '/flows-dir-listing', {
                  filename : newfilename,
                  text : ' ',
                  type : 'file'
              })
              .then((res) => {
                  console.log(res)
                  this.newFileDialog = false
                  this.addNewFileLoading = false
                  this.formAddFile.filename = null
              })
              .catch((e) => {
                  console.log(e)
              })
          } else {
              console.log('error submit!!');
              return false;
          }
      });
    },

    saveFile: function(){
        this.saveFileLoading = true
        let newContent = this.$store.state.content;
        switch(this.componentId){
            case 'GrapesComponent' :
                this.$refs.contentComponent.getHtml();
                newContent = this.$store.state.content;
                break;
            case 'json-viewer':
                newContent = JSON.stringify(this.$store.state.content);
                break;
            case 'GridManager':
                this.$refs.contentComponent.getHtml();
                newContent = this.$store.state.content;
                this.saveLayoutFile();
                break;
        }
        
        return axios.post(this.baseURL + '/flows-dir-listing', {
            filename : this.currentFile.path.replace(/\\/g, "\/"),
            text : newContent,
            type : 'file'
        })
        .then((res) => {
            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'File Saved!',
                type: 'success'
            });



            if (this.currentFile.path.replace(/\\/g, "\/").match('Footers')) {
                console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))

                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Footers/') + 8, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
                let temp = {
                    value: name,
                    label: name
                }
                let checkValue = false;
                for (var i = 0; i < this.$store.state.FooterOptions.length; i++) {
                    var obj = this.$store.state.FooterOptions[i];
                    if ((obj.label) == name) {
                        checkValue = true;
                    }
                }
                if (checkValue == true) {
                    console.log("file already exists")
                } else {
                    console.log('file doesnt exists');
                    this.$store.state.FooterOptions.push(temp);
                }

            } else if (this.currentFile.path.replace(/\\/g, "\/").match('Headers')) {
                console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))

                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Headers/') + 8, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
                let temp = {
                    value: name,
                    label: name
                }
                let checkValue = false;
                for (var i = 0; i < this.$store.state.HeaderOptions.length; i++) {
                    var obj = this.$store.state.HeaderOptions[i];
                    if ((obj.label) == name) {
                        checkValue = true;
                    }
                }
                if (checkValue == true) {
                    console.log("file already exists")
                } else {
                    console.log('file doesnt exists');
                    this.$store.state.HeaderOptions.push(temp);
                }


            } else if (this.currentFile.path.replace(/\\/g, "\/").match('Layouts')) {
                console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))
                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Layouts/') + 8, this.currentFile.path.replace(/\\/g, "\/").indexOf('.layout'));
                let temp = {
                    value: name,
                    label: name
                }
               
                let checkValue = false;
                for (var i = 0; i < this.$store.state.LayoutOptions.length; i++) {
                    var obj = this.$store.state.LayoutOptions[i];
                    if ((obj.label) == name) {
                        checkValue = true;
                    }
                }
                if (checkValue == true) {
                    console.log("file already exists")
                } else {
                    console.log('file doesnt exists');
                    this.$store.state.LayoutOptions.push(temp);
                }
            }






        })
        .catch((e) => {
            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'File not saved! Please try again.',
                type: 'error'
            });
            console.log(e)
        })
    },

    saveJsonFile: function(){
        this.saveFileLoading = true
        let newContent = this.$store.state.content;
        switch(this.componentId){
            case 'MenuBuilder' :
                this.$refs.contentComponent.getMenuJson();
                newContent = this.$store.state.content;
                break;
        }
        
        let newJsonName = '/var/html/websites/' + this.repoName + '/assets/menu.json';
        console.log(newJsonName);
        return axios.post(this.baseURL + '/flows-dir-listing', {
            filename : newJsonName ,
            text : newContent,
            type : 'file'
        })
        .then((res) => {
            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'File Saved!',
                type: 'success'
            });
            // console.log(res)
        })
        .catch((e) => {
            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'File not saved! Please try again.',
                type: 'error'
            });
            console.log(e)
        })
    },

    saveLayoutFile: function(){
        let newContent = "Hello";
        let file_name = this.currentFile.path.replace(/\\/g, "\/").replace("Grid","Layout").replace(".grid",".layout");
        console.log(file_name)
        return axios.post(this.baseURL + '/flows-dir-listing', {
            filename : file_name,
            text : newContent,
            type : 'file'
        })
    },

    remove(store, data) {
      this.$swal({
      title: 'Are you sure?',
      text: 'You want you delete this file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
      }).then(() => {
          axios.delete(this.baseURL + '/flows-dir-listing/0?filename='+data.path.replace(/\\/g,"/"))
          .then((res) => {
              this.currentFile = null
              this.componentId = null
              console.log(res);

              if (data.path.replace(/\\/g, "/").match('Header')) {
                  let name = data.path.replace(/\\/g, "/").substring(data.path.replace(/\\/g, "/").indexOf('Headers/') + 8, data.path.replace(/\\/g, "/").indexOf('.html'));
                  console.log("name:" + name)
                  for (var i = 0; i < this.$store.state.HeaderOptions.length; i++) {
                      var obj = this.$store.state.HeaderOptions[i];
                      console.log("obj.label:" + obj.label)
                      if ((obj.label) == name) {
                          this.$store.state.HeaderOptions.splice(i, 1);
                      }
                  }
              } else if (data.path.replace(/\\/g, "/").match('Footer')) {
                  let name = data.path.replace(/\\/g, "/").substring(data.path.replace(/\\/g, "/").indexOf('Footers/') + 8, data.path.replace(/\\/g, "/").indexOf('.html'));
                  console.log("name:" + name)
                  for (var i = 0; i < this.$store.state.FooterOptions.length; i++) {
                      var obj = this.$store.state.FooterOptions[i];

                      if ((obj.label) == name) {
                          this.$store.state.FooterOptions.splice(i, 1);
                      }
                  }
              } else if (data.path.replace(/\\/g, "/").match('Layouts')) {
                  let name = data.path.replace(/\\/g, "/").substring(data.path.replace(/\\/g, "/").indexOf('Layouts/') + 8, data.path.replace(/\\/g, "/").indexOf('.layout'));
                  console.log("name:" + name)
                  for (var i = 0; i < this.$store.state.LayoutOptions.length; i++) {
                      var obj = this.$store.state.LayoutOptions[i];

                      if ((obj.label) == name) {
                          this.$store.state.LayoutOptions.splice(i, 1);
                      }
                  }
              }

          })
          .catch((e) => {
              console.log(e)
          })
          this.componentId = 'HomePage';
          this.isHomePage = true;
      }).catch((dismiss) => {
          console.log('error',dismiss)
      })
    },

    renderContent(h, { node, data, store }) {

        if(data.type=='directory' && node.label != 'websites'){
          if(node.level == 2){
            return (<span>
                  <span class="nodelabel">
                      <i class="fa fa-globe" style="padding: 10px; color: #4A8AF4"></i>
                      <span>{node.label}</span>
                  </span>
                  <span class="" style="float: right; padding-right: 5px;">
                    <el-tooltip content="Add folder" placement="top">
                        <i class="fa fa-folder-o" style="margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                    </el-tooltip>
                    <el-tooltip content="Add file" placement="top">
                        <i class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                    </el-tooltip>
                    <el-tooltip content="Project Settings" placement="top">
                      <i class="fa fa-cog" style="margin-right: 5px; color: #607C8A" on-click={ () => this.isProjectEditing = true }></i>
                    </el-tooltip>
                    <el-tooltip content="Remove" placement="top">
                        <i class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.remove(store, data) }></i>
                    </el-tooltip>
                  </span>
              </span>)  
          } else {
            return(<span>
                <span class="nodelabel">
                    <i class="fa fa-folder" style="padding: 10px; color: #FFD500"></i>
                    <span>{node.label}</span>
                </span>
                <span class="" style="float: right; padding-right: 5px;">
                  <el-tooltip content="Add folder" placement="top">
                      <i class="fa fa-folder-o" style="margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Add file" placement="top">
                      <i class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Remove" placement="top">
                      <i class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  </el-tooltip>
                </span>
            </span>)
          }
          
      } else if(data.type=='file'){
        if(data.extension == '.layout' || data.extension == '.html'){
          return (<span>
              <span class="filelabel">
                  <i class="fa fa-file-text" style="padding: 10px; color: #4A8AF4"></i>
                  <span>{node.label}</span>
              </span>
              <span class="action-button">
                  <el-tooltip content="Remove" placement="top">
                      <i class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  </el-tooltip>
                  <el-tooltip content="Page Settings" placement="top">
                    <i class="fa fa-cog" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #607C8A" on-click={ () => this.isPageEditing = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Edit" placement="top">
                    <i class="fa fa-pencil" style="position:absolute; right: 35px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #4A8AF4" on-click={ () => this.isEditOption = true }></i>
                  </el-tooltip>
              </span>
          </span>)
        } else {
          return (<span>
                <span class="filelabel">
                    <i class="fa fa-file-text" style="padding: 10px; color: #4A8AF4"></i>
                    <span>{node.label}</span>
                </span>
                <span class="action-button">
                    <el-tooltip content="Remove" placement="top">
                        <i class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                    </el-tooltip>
                </span>
            </span>)
        }
        
      }else{
        return (<span>
                  <span class="nodelabel">
                      <i class="fa fa-list-ul" style="padding: 10px; color: #333"></i>
                      <span>{node.label}</span>
                  </span>
                  <span class="action-button">
                      <el-tooltip content="Add folder" placement="top">
                          <i class="fa fa-folder-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                      </el-tooltip>
                  </span>
              </span>)
      }
    },

    // <b-dropdown> 
    //   <b-dropdown-item>New Layout File</b-dropdown-item>
    //   <b-dropdown-item>New Menu File</b-dropdown-item>
    //   <b-dropdown-divider></b-dropdown-divider>
    //   <b-dropdown-item>New Folder</b-dropdown-item>
    //   <b-dropdown-item>Delete</b-dropdown-item>
    // </b-dropdown>

    changeEditor (currentEditor) {
      this.saveFile();
      this.componentId = currentEditor;
    },

    cancelEditing() {
      this.componentId = 'HomePage';
      this.previewGrid = false;
      this.isHomePage = true;
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.clearfix{
  clear:both;
}
.header-banner{
  color:rgb(255, 255, 255);
  font-family:Helvetica, serif;
  font-weight:100;
  background-image: url("/static/building-blocks.jpeg");
  background-attachment:scroll;
  background-position-x:center;
  background-position-y:center;
  background-repeat-x:no-repeat;
  background-repeat-y:no-repeat;
  background-size:cover;
  padding:186px 0px 348px 0px;
}
.container-width{
  width:90%;
  max-width:1150px;
  margin-top:0px;
  margin-right:auto;
  margin-bottom:0px;
  margin-left:auto;
}
.lead-title{
  margin-top:150px;
  margin-right:0px;
  margin-bottom:30px;
  margin-left:0px;
  font-size:40px;
}
.lead-btn{
  margin-top:15px;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  width:190px;
  min-height:30px;
  font-size:20px;
  text-align:center;
  letter-spacing:3px;
  line-height:30px;
  background-color:rgb(217, 131, 166);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  transition-duration:0.5s;
  transition-timing-function:ease;
  transition-delay:initial;
  transition-property:all;
  cursor:pointer;
}
.lead-btn:hover{
  background-color:rgb(255, 255, 255);
  color:rgb(76, 17, 78);
}
.lead-btn:active{
  background-color:rgb(77, 17, 79);
  color:rgb(255, 255, 255);
}

.displayColumn{
  display: table;
}

.treeView{
  display: table-cell;
}

.mainDisplay{
  min-height: 90vh;
  display: table-cell;
  background-color: #fff;
}

.treeViewBlock{
}

.el-tree{
  border: none;
}












/*SideBar Styles*/

.nav .open > a, 
.nav .open > a:hover, 
.nav .open > a:focus {background-color: transparent;}

/*-------------------------------*/
/*           Wrappers            */
/*-------------------------------*/

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 320px;
}

#sidebar-wrapper {
    box-shadow: 0px 0px 25px rgba(0,0,0,0.2);
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 0;
    height: 100%;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#sidebar-wrapper::-webkit-scrollbar {
  display: none;
}

#wrapper.toggled #sidebar-wrapper {
    width: 320px;
}

#page-content-wrapper {
    width: 100%;
}

#wrapper.toggled #page-content-wrapper {
    /*position: absolute;*/
    margin-right: -320px;
}

/*-------------------------------*/
/*     Sidebar nav styles        */
/*-------------------------------*/

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 320px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    position: relative; 
    line-height: 20px;
    display: inline-block;
    width: 100%;
}

.sidebar-nav li:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 3px;
    background-color: #1c1c1c;
    -webkit-transition: width .2s ease-in;
      -moz-transition:  width .2s ease-in;
       -ms-transition:  width .2s ease-in;
            transition: width .2s ease-in;

}
.sidebar-nav li:first-child a {
    color: #fff;
    background-color: #1a1a1a;
}
.sidebar-nav li:nth-child(2):before {
    background-color: #ec1b5a;   
}
.sidebar-nav li:nth-child(3):before {
    background-color: #79aefe;   
}
.sidebar-nav li:nth-child(4):before {
    background-color: #314190;   
}
.sidebar-nav li:nth-child(5):before {
    background-color: #279636;   
}
.sidebar-nav li:nth-child(6):before {
    background-color: #7d5d81;   
}
.sidebar-nav li:nth-child(7):before {
    background-color: #ead24c;   
}
.sidebar-nav li:nth-child(8):before {
    background-color: #2d2366;   
}
.sidebar-nav li:nth-child(9):before {
    background-color: #35acdf;   
}
.sidebar-nav li:hover:before,
.sidebar-nav li.open:hover:before {
    width: 100%;
    -webkit-transition: width .2s ease-in;
      -moz-transition:  width .2s ease-in;
       -ms-transition:  width .2s ease-in;
            transition: width .2s ease-in;

}

.sidebar-nav li a {
    display: block;
    color: #ddd;
    text-decoration: none;
    padding: 10px 15px 10px 30px;    
}

.sidebar-nav li a:hover,
.sidebar-nav li a:active,
.sidebar-nav li a:focus,
.sidebar-nav li.open a:hover,
.sidebar-nav li.open a:active,
.sidebar-nav li.open a:focus{
    color: #fff;
    text-decoration: none;
    background-color: transparent;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 20px;
    line-height: 44px;
}
.sidebar-nav .dropdown-menu {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0;
    border: none;
    background-color: #222;
    box-shadow: none;
}

/*-------------------------------*/
/*       Hamburger-Cross         */
/*-------------------------------*/

.hamburger {
  position: fixed;
  top: 20px;  
  z-index: 999;
  display: block;
  width: 32px;
  height: 32px;
  margin-left: 15px;
  background: transparent;
  border: none;
  margin-top: -4px;
}
.hamburger:hover,
.hamburger:focus,
.hamburger:active {
  outline: none;
}
.hamburger.is-closed:before {
  content: '';
  display: block;
  width: 100px;
  font-size: 14px;
  color: #fff;
  line-height: 32px;
  text-align: center;
  opacity: 0;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transition: all .35s ease-in-out;
}
.hamburger.is-closed:hover:before {
  opacity: 1;
  display: block;
  -webkit-transform: translate3d(-100px,0,0);
  -webkit-transition: all .35s ease-in-out;
}

.hamburger.is-closed .hamb-top,
.hamburger.is-closed .hamb-middle,
.hamburger.is-closed .hamb-bottom,
.hamburger.is-open .hamb-top,
.hamburger.is-open .hamb-middle,
.hamburger.is-open .hamb-bottom {
  position: absolute;
  left: 0;
  height: 4px;
  width: 100%;
}
.hamburger.is-closed .hamb-top,
.hamburger.is-closed .hamb-middle,
.hamburger.is-closed .hamb-bottom {
  background-color: #fcfcfc;
}
.hamburger.is-closed .hamb-top { 
  box-shadow: 0px 0px 5px #333;
  top: 5px; 
  -webkit-transition: all .35s ease-in-out;
}
.hamburger.is-closed .hamb-middle {
  box-shadow: 0px 0px 5px #333;
  top: 50%;
  margin-top: -2px;
}
.hamburger.is-closed .hamb-bottom {
  box-shadow: 0px 0px 5px #333;
  bottom: 5px;  
  -webkit-transition: all .35s ease-in-out;
}

.hamburger.is-closed:hover .hamb-top {
  top: 0;
  -webkit-transition: all .35s ease-in-out;
}
.hamburger.is-closed:hover .hamb-bottom {
  bottom: 0;
  -webkit-transition: all .35s ease-in-out;
}
.hamburger.is-open .hamb-top,
.hamburger.is-open .hamb-middle,
.hamburger.is-open .hamb-bottom {
  background-color: #fcfcfc;
}
.hamburger.is-open .hamb-top,
.hamburger.is-open .hamb-bottom {
  top: 50%;
  margin-top: -2px;  
}
.hamburger.is-open .hamb-top { 
  -webkit-transform: rotate(45deg);
  -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);
}
.hamburger.is-open .hamb-middle { display: none; }
.hamburger.is-open .hamb-bottom {
  -webkit-transform: rotate(-45deg);
  -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);
}
.hamburger.is-open:before {
  content: '';
  display: block;
  width: 100px;
  font-size: 14px;
  color: #fff;
  line-height: 32px;
  text-align: center;
  opacity: 0;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transition: all .35s ease-in-out;
}
.hamburger.is-open:hover:before {
  opacity: 1;
  display: block;
  -webkit-transform: translate3d(-100px,0,0);
  -webkit-transition: all .35s ease-in-out;
}

/*-------------------------------*/
/*            Overlay            */
/*-------------------------------*/

/*.overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.6); 
    z-index: 1;
}*/

/*Sidebar Styles ends*/




.el-tree-node__children{
  width: 100%;
}

.gjs-editor{
  min-height: 90vh;
}

.jsoneditor-vue div.jsoneditor-tree{
  background-color: #fff;
}

.gjs-am-assets-cont{
  height: 373px;
}

.dropdown-toggle{
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
}

.dropdown-menu{
  right: 0;
  left: auto;
  position: absolute;
}

.newWebsite{
  width: 90%;
  margin: 15px;
}

.gjs-am-file-uploader>form{
    min-height: 325px !important;
}

/*.el-tree-node__expand-icon{
  border: 8px solid transparent;
  border-left-width: 10px; 
}*/
</style>
