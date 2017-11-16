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
                  <el-tree :data="directoryTree" :props="defaultProps" :expand-on-click-node="false" node-key="id" :render-content="renderContent" @node-click="handleNodeClick" highlight-current></el-tree>
                </div>
            </nav>
            <!-- /#sidebar-wrapper -->

            <!-- Page Content -->
            <div id="page-content-wrapper">
                <div class="sideMenuOpener">
                  <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
                      <!-- <span class="hamb-top"></span>
                      <span class="hamb-middle"></span>
                      <span class="hamb-bottom"></span> -->
                      <div class="sideOpener">
                        <i class="fa fa-angle-right text-white"></i>
                        <i class="fa fa-angle-left text-white"></i>
                      </div>
                  </button>
                </div>
                <div class="allComponents">
                  <!-- && componentId != null -->
                  <div class="row" v-if="isHomePage === false && isSettingsPage === false" style="margin-top: 0px;">
                    <!-- <div v-else class="col-md-4"></div> -->
                    <div class="col-md-4 editor-buttons" align="right" v-if="componentId != null">
                        <div style="margin-right:10px; margin: 15px;">
                            <el-button type="info" size="small" @click="generatePreview()" v-if="componentId === 'GrapesComponent' && isPagesFolder === true">Preview</el-button>
                            <el-button type="primary" size="small" @click="goToGrapesEditor()" v-if="isPageCodeEditor">Go to Editor</el-button>
                            <el-button type="primary" size="small" @click="saveFile()" :loading="saveFileLoading" v-if="componentId != 'ProjectStats'">Save</el-button>
                            <!-- <el-button type="danger" @click="cancelEditing()">Cancel</el-button> -->

                            <!-- Partial list dialog -->
                            <el-dialog title="Confirmation" :visible.sync="dialogFormVisible" style="text-align: left">
                              <div v-for='i in form.namearray'>
                               <el-checkbox v-model="form.checked[i]">{{i}}</el-checkbox>
                              </div>

                              <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false, dialogFormVisibleCancel()">Cancel</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false, dialogFormVisibleAdd()">Add</el-button>
                              </span>
                            </el-dialog>

                        </div>
                    </div>

                    <el-dialog title="File name" :visible.sync="newFileDialog">
                        <el-form :model="formAddFile" :rules="rulesFrmFile" ref="formAddFile">
                            <el-form-item prop="filename">
                              <input type="text" style="display: none;" v-model="formAddFile.filename" v-on:keyup.enter="addFile('formAddFile')" name="">
                              <el-input v-model="formAddFile.filename" @keyup.enter.native="addFile('formAddFile')" auto-complete="off" placeholder="FileName.ext"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFileDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFile('formAddFile')" :loading="addNewFileLoading">Create</el-button>
                        </span>
                    </el-dialog>

                    <el-dialog title="Folder name" :visible.sync="newFolderDialog">
                        <el-form :model="formAddFolder">
                            <el-form-item>
                              <input type="text" style="display: none;" v-model="formAddFolder.foldername" v-on:keyup.enter="addFolder" name="">
                              <el-input v-model="formAddFolder.foldername" @keyup.enter.native="addFolder()" auto-complete="off" placeholder="Folder Name"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFolderDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFolder()" :loading="addNewFolderLoading">Create</el-button>
                        </span>
                    </el-dialog>

                    <el-dialog title="Project Name" :visible.sync="newProjectFolderDialog">
                      <el-form :model="formAddProjectFolder">
                        <el-form-item>
                          <input type="text" style="display: none;" v-model="formAddProjectFolder.projectName" v-on:keyup.enter="addProjectFolder" name="">
                          <el-input v-model="formAddProjectFolder.projectName" @keyup.enter.native="addProjectFolder()" auto-complete="off" placeholder="Project Name"></el-input>
                        </el-form-item>

                        <el-form-item>
                          <div class="templateSelection">
                            <strong>Select Template</strong>
                            <ul>
                              <li>
                                  <input type="radio" name="layout" value="template1" id="myCheckbox" checked />
                                  <label for="myCheckbox" class="radio-img imgThumbnail" v-on:click="setTemplate('none')" title="No Template"></label>
                                  <img src="http://placehold.it/250x100/292929?text=BLANK" class="templateThumbnail">
                              </li>
                              <li>
                                  <input type="radio" name="layout" value="template1" id="myCheckbox1" />
                                  <label for="myCheckbox1" class="radio-img imgThumbnail" v-on:click="setTemplate('template1')" title="Coming Soon Layout"></label>
                                  <img src="http://aamaratex.com/wp-content/uploads/2016/04/coming-soon-Website-300x196.jpg" class="templateThumbnail">
                              </li>
                              <li>
                                  <input type="radio" name="layout" value="template2" id="myCheckbox2" />
                                  <label for="myCheckbox2" class="radio-img imgThumbnail" v-on:click="setTemplate('template2')" title="Portfolio Layout"></label>
                                  <img src="https://freetemplates.pro/wp-content/uploads/edd/2016/06/Personal-Portfolio-HTML-Template-1.jpg" class="templateThumbnail">
                              </li>
                              <li>
                                  <input type="radio" name="layout" value="template3" id="myCheckbox3" />
                                  <label for="myCheckbox3" class="radio-img imgThumbnail" v-on:click="setTemplate('template3')" title="Default Layout"></label>
                                  <img src="https://uicookies.com/wp-content/uploads/edd/2016/05/thumb-x-corporation.jpg" class="templateThumbnail">
                              </li>
                            </ul>
                          </div>
                        </el-form-item>
                        <!-- <el-form-item>
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
                        </el-form-item> -->
                      </el-form>
                      <span slot="footer" class="dialog-footer">
                          <el-button @click="newProjectFolderDialog = false">Cancel</el-button>
                          <el-button type="primary" @click="addProjectFolder()" :loading="addNewFolderLoading">Create Project</el-button>
                      </span>
                    </el-dialog>
                  </div>

                  <div v-if="isHomePage === true">
                    <el-dialog title="File name" :visible.sync="newFileDialog">
                        <el-form :model="formAddFile" :rules="rulesFrmFile" ref="formAddFile">
                            <el-form-item prop="filename">
                              <input type="text" style="display: none;" v-model="formAddFile.filename" v-on:keyup.enter="addFile('formAddFile')" name="">
                              <el-input v-model="formAddFile.filename" @keyup.enter.native="addFile('formAddFile')" auto-complete="off" placeholder="FileName.ext"></el-input>
                            </el-form-item>

                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFileDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFile('formAddFile')" :loading="addNewFileLoading">Create</el-button>
                        </span>
                    </el-dialog>
                    <el-dialog title="Folder name" :visible.sync="newFolderDialog">
                        <el-form :model="formAddFolder">
                            <el-form-item>
                              <input type="text" style="display: none;" v-model="formAddFolder.foldername" v-on:keyup.enter="addFolder" name="">
                              <el-input v-model="formAddFolder.foldername" @keyup.enter.native="addFolder()" auto-complete="off" placeholder="Folder Name"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="newFolderDialog = false">Cancel</el-button>
                            <el-button type="primary" @click="addFolder()" :loading="addNewFolderLoading">Create</el-button>
                        </span>
                    </el-dialog>

                    <el-dialog title="Project Name" :visible.sync="newProjectFolderDialog">
                      <el-form :model="formAddProjectFolder">
                        <el-form-item>
                          <input type="text" style="display: none;" v-model="formAddProjectFolder.projectName" v-on:keyup.enter="addProjectFolder" name="">
                          <el-input v-model="formAddProjectFolder.projectName" @keyup.enter.native="addProjectFolder()" auto-complete="off" placeholder="Project Name"></el-input>
                        </el-form-item>

                        <el-form-item>
                          <div class="templateSelection">
                            <strong>Select Template</strong>
                            <ul>
                              <li>
                                  <input type="radio" name="layout" value="template1" id="myCheckbox" checked />
                                  <label for="myCheckbox" class="radio-img imgThumbnail" v-on:click="setTemplate('none')" title="No Template"></label>
                                  <img src="http://placehold.it/250x100/292929?text=BLANK" class="templateThumbnail">
                              </li>
                              <li>
                                  <input type="radio" name="layout" value="template1" id="myCheckbox1" />
                                  <label for="myCheckbox1" class="radio-img imgThumbnail" v-on:click="setTemplate('template1')" title="Coming Soon Layout"></label>
                                  <img src="http://aamaratex.com/wp-content/uploads/2016/04/coming-soon-Website-300x196.jpg" class="templateThumbnail">
                              </li>
                              <li>
                                  <input type="radio" name="layout" value="template2" id="myCheckbox2" />
                                  <label for="myCheckbox2" class="radio-img imgThumbnail" v-on:click="setTemplate('template2')" title="Portfolio Layout"></label>
                                  <img src="https://freetemplates.pro/wp-content/uploads/edd/2016/06/Personal-Portfolio-HTML-Template-1.jpg" class="templateThumbnail">
                              </li>
                              <li>
                                  <input type="radio" name="layout" value="template3" id="myCheckbox3" />
                                  <label for="myCheckbox3" class="radio-img imgThumbnail" v-on:click="setTemplate('template3')" title="Default Layout"></label>
                                  <img src="https://uicookies.com/wp-content/uploads/edd/2016/05/thumb-x-corporation.jpg" class="templateThumbnail">
                              </li>
                            </ul>
                          </div>
                        </el-form-item>
                        <!-- <el-form-item>
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
                        </el-form-item> -->
                      </el-form>
                      <span slot="footer" class="dialog-footer">
                          <el-button @click="newProjectFolderDialog = false">Cancel</el-button>
                          <el-button type="primary" @click="addProjectFolder()" :loading="addNewFolderLoading">Create Project</el-button>
                      </span>
                    </el-dialog>
                  </div>

                  <div v-if="previewGrid" style="width:100%;">
                      <PreviewGrid></PreviewGrid>
                  </div>

                  <div v-if="!previewGrid" style="margin-left: 10px;">
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

var daex = require('json-daex');

const config = require('../config');

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

// Project Settings
import ProjectStats from './ProjectStats'

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
      autoFolders: true,
      isLoggedInUser: false,
      pluginsPath : '/home/software/live_projects/FlowzBuilder/src/assets/plugins',
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
      addNewProjectFolderLoading : false,
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
      isProjectStats: false,
      isPagesFolder: false,
      isPageCodeEditor: false,
      // isLayoutFile: false,
      formAddFile : {
          filename:null
      },
      rulesFrmFile: {
          filename: [
              { validator: checkFileName, trigger: 'blur' }
          ]
      },
      formAddFolder : {
          foldername : null
      },
      formAddProjectFolder : {
          projectName : 'NewWebsite'
      },
      newFileDialog : false,
      newFolderDialog : false,
      newProjectFolderDialog : false,
      value: '',
      newRepoId: '',
      repoName: '',
      layoutSettings: {},
      selectedTemplate: '',
      PageLayout: '',
      form: {
        Header: '',
        Footer: '',
        Layout: '',
        headers: [{ value: 'NOH', label: 'No Header' }],
        footers: [{ value: 'NOF', label: 'No Footer' }],
        layouts: [{ value: 'Blank', label: 'Blank' }],
        namearray: [],
        checked: [],
        partials: ''
      },
      dialogFormVisible: false
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
    ProjectSettings,
    ProjectStats
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
    const app = feathers().configure(socketio(io(config.baseURL)))
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

    // Set template if selected in creating new project
    setTemplate(template) {
      if(template == 'template1'){
        this.selectedTemplate = 'template1';
      } else if( template == 'template2' ){
        this.selectedTemplate = 'template2';
      } else if( template == 'template3' ) {
        this.selectedTemplate = 'template3';
      } else if( template == 'none' ) {
        this.selectedTemplate = '';
      } else {
        this.selectedTemplate = '';
      }
    },

    // Route to login page on Login Button click
    loginPage() {
      this.$router.push('/login')
    },

    // Get directory listing data
    getData() {
      axios.get(config.baseURL + '/flows-dir-listing')
      .then(response => {
          response.data.children = this.getTreeData(response.data);

          for(let i = 0; i<response.data.children.length; i++){
            response.data.children[i].children = _.remove(response.data.children[i].children, (child) => {
              return !( child.name == 'public' || child.name == '.git')
            })
          }

          if (this.directoryTree.length == 0) {
            this.directoryTree = [response.data]
          } else {
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

    // Get directory listing tree
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

    // Sort directory tree
    sortTree : function(data){
        return  _.sortBy(data.children, [function(o) { return o.type; }]);
    },

    // Selecting any node in Listing tree
    handleNodeClick(data) {
      // Store file/folder path
      this.$store.state.fileUrl = data.path;
      // If PageSettings Clicked
      if(this.isPageEditing){
        this.isPageEditing = false;
        this.isProjectEditing = false;
        this.isSettingsPage = true;
        this.componentId = 'PageSettings';
      }
      // If ProjectSettings is clicked
      else if(this.isProjectEditing) {
        this.isProjectEditing = false;
        this.$store.state.fileUrl = data.path;
        this.isSettingsPage = true;
        this.componentId = 'ProjectSettings';
      }
      // If Clicked in ProjectName
      else if(this.isProjectStats) {
        this.isProjectEditing = false;
        this.isProjectStats = false;
        this.$store.state.fileUrl = data.path;
        this.isSettingsPage = false;
        this.componentId = 'ProjectStats';
      }
      // Every other clicks
      else {
        this.isProjectStats = false;
        this.componentId = 'ProjectStats';
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

    // Get File content Locally
    getFileContent: async function (url) {
        url = url.replace(/\\/g, "\/")
        this.btnPreview = false
        this.previewFile = false
        this.loadingContent = true
        this.componentId = null
        let ext = url.split('.').pop();

        this.$store.state.fileUrl = url;
        let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + url);

        this.$store.dispatch('updateContent', { text: response.data })
        if(response.status == 200 || response.status == 204){
            switch(ext.toLowerCase()){
                case 'grid':
                    this.isPageCodeEditor = false;
                    this.isMenuBuilder = false;
                    this.isHomePage = false;
                    this.componentId = 'GridManager'
                    this.isGridPreview = true;
                    break;
                case 'json':
                    this.isPageCodeEditor = false;
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
                    this.isPageCodeEditor = false;

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

                      // For preview button only in HTML file of Pages Folder
                      var filePath = url;
                      var pathParts = filePath.split('/');
                      var parentFolderName = pathParts[pathParts.length-2];
                      if(parentFolderName == 'Pages'){
                        this.isPageCodeEditor = true;
                      } else {
                        this.isPageCodeEditor = false;
                      }

                      this.componentId = 'code-mirror'
                      this.isEditOption=false;
                    } else{
                      this.isPageCodeEditor = false;
                      // For preview button only in HTML file of Pages Folder
                      var filePath = url;
                      var pathParts = filePath.split('/');
                      var parentFolderName = pathParts[pathParts.length-2];
                      if(parentFolderName == 'Pages'){
                        this.isPagesFolder = true;
                      } else {
                        this.isPagesFolder = false;
                      }
                      //

                      this.componentId = 'GrapesComponent';
                      this.getConfigFileData();
                    }
                    break;
                case 'menu':
                    // this.isLayoutFile = false;
                    this.isGridPreview = false;
                    this.isMenuBuilder = true;
                    this.isHomePage = false;
                    this.isPageCodeEditor = false;
                    this.componentId = 'MenuBuilder'
                    break;
                default :
                    // this.isLayoutFile = false;
                    this.isGridPreview = false;
                    this.isMenuBuilder = false;
                    this.isHomePage = false;
                    this.isPageCodeEditor = false;
                    this.componentId = 'code-mirror';

                    break;
            }
        }
        this.breadcrumbArr = url.replace(this.rootpath,'').split('\\')
        this.loadingContent = false
    },

    // Get particular project's config.json file
    async getConfigFileData() {

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      var folderUrl = configFileUrl.replace(fileName, '');
      console.log(this.$store.state.fileUrl.replace(/\\/g, "\/"));

      let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      let rawConfigs = JSON.parse(responseConfig.data);

      this.form.headers = rawConfigs[2].layoutOptions[0].headers;
      this.form.footers = rawConfigs[2].layoutOptions[0].footers;
      this.form.layouts = rawConfigs[2].layoutOptions[0].layouts;
    },

    // Generate Preview of page using MetalSmith
    // async generatePreview() {
    //   console.log(" calling api Get for metalsmith for this page.");

    //   let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

    //   let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //   let urlparts = configFileUrl.split("/");
    //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //   let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //   var folderUrl = configFileUrl.replace(fileName, '');

    //   console.log("page name:" + nameF)
    //   let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //   console.log("response:", responseConfig.data)
    //   let rawSettings = JSON.parse(responseConfig.data);

    //   for (let i = 0; i < rawSettings[1].pageSettings.length; i++) {
    //     if (rawSettings[1].pageSettings[i].PageName == (nameF + '.html')) {
    //       console.log("file found in pageSettings")
    //       this.form.Layout = rawSettings[1].pageSettings[i].PageLayout
    //       this.form.partials = rawSettings[1].pageSettings[i].partials
    //     }
    //   }

    //   let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');
    //   console.log("response of metalsmith", responseMetal.data);
    //   var index = responseMetal.data.search('.source')

    //   responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)

    //   var indexPartial = responseMetal.data.search("('handlebars')");
    //   console.log("form.partialsList:", this.form.partials)

    //   var partials = '';
    //   for (var i = 0; i < this.form.partials.length; i++) {
    //     let key = Object.keys(this.form.partials[i])[0];
    //     console.log("key :", key)
    //     let value = this.form.partials[i]
    //     let key2 = key;
    //     console.log("value:", value[key2])
    //     key = key.trim();
    //     if (value[key2].match('html')) {
    //       console.log("inside html if")
    //       key = key.split('.')[0]
    //       var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + "').toString())\n"
    //     } else if (value[key2].match('hbs')) {
    //       console.log("inside hbs if")
    //       key = key.split('.')[0]
    //       var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + "').toString())\n"
    //     } else {
    //       console.log("inside else")
    //       var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + ".html').toString())\n"
    //     }

    //     partials = partials + temp;

    //   }
    //   console.log("src for metalsmith:", partials);

    //   responseMetal.data = responseMetal.data.substr(0, indexPartial + 15) + partials + responseMetal.data.substr(indexPartial + 15);

    //   console.log("final metalsmith file ready for api call:", responseMetal.data);

    //   let mainMetal = folderUrl + '/assets/metalsmith.js'

    //   axios.post( config.baseURL + '/flows-dir-listing', {
    //     filename: mainMetal,
    //     text: responseMetal.data,
    //     type: 'file'
    //   }).then((response) => {
    //     console.log('successfully created metalsmith file :' + (response.data))
    //     this.$message({
    //       showClose: true,
    //       message: 'MetalSmith Config Saved!',
    //       type: 'success'
    //     });

    //     let newFolderName = folderUrl + '/Preview';
    //     return axios.post(config.baseURL + '/flows-dir-listing', {
    //         foldername: newFolderName,
    //         type: 'folder'
    //       })
    //       .then((res) => {
    //         console.log(res)

    //         let newContent = this.$store.state.content;
    //         if (this.form.Layout == 'Blank') {
    //           if (newContent.match('---')) {
    //             let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
    //             console.log("substr:" + substr)
    //             newContent = newContent.replace(substr, '')
    //           } else {
    //             newContent = this.$store.state.content;
    //           }

    //         } else {
    //           let tempValueLayout = '---\nlayout: ' + this.form.Layout + '.layout\n---\n';

    //           console.log("tempValueLayout:" + tempValueLayout)

    //           if (newContent.match('---')) {
    //             let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
    //             console.log("substr:" + substr)
    //             newContent = newContent.replace(substr, tempValueLayout)
    //           } else {
    //             newContent = tempValueLayout + this.$store.state.content;
    //           }

    //         }

    //         this.PageLayout = '';
    //         this.form.Header = '';
    //         this.form.Footers = '';
    //         this.form.Sidebar = '';
    //         this.form.Menu = '';

    //         let previewFileName = folderUrl + '/Preview/' + nameF + '.html';

    //         return axios.post( config.baseURL + '/flows-dir-listing', {
    //             filename: previewFileName,
    //             text: newContent,
    //             type: 'file'
    //           })
    //           .then((res) => {
    //             this.saveFileLoading = false;

    //             axios.get( config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {
    //                 console.log('successfully  :' + (response))

    //                 var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/MetalsmithOutput')\n.clean(false)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

    //                 return axios.post(config.baseURL + '/flows-dir-listing', {
    //                     filename: mainMetal,
    //                     text: metalsmithJSON,
    //                     type: 'file'
    //                   })
    //                   .then((res) => {
    //                     console.log('Now previewing: ' + this.$store.state.fileUrl.replace(/\\/g, "\/"))
    //                     let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //                     previewFile = folderUrl.replace('/var/www/html', '');
    //                     console.log(previewFile.replace('Pages' + nameF, ''));
    //                     window.open('http://localhost' + previewFile + '/MetalsmithOutput/' + nameF + '.html');

    //                     axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
    //                       .then((res) => {

    //                         console.log(res);

    //                       })
    //                       .catch((e) => {
    //                         console.log(e)
    //                       })

    //                   })
    //                   .catch((e) => {
    //                     console.log(e)
    //                   })

    //               })
    //               .catch((err) => {
    //                 console.log('error while creating metalsmithJSON file' + err)
    //               })

    //             this.$message({
    //               showClose: true,
    //               message: 'File Saved!',
    //               type: 'success'
    //             });
    //           })
    //           .catch((e) => {
    //             this.saveFileLoading = false
    //             this.$message({
    //               showClose: true,
    //               message: 'File not saved! Please try again.',
    //               type: 'error'
    //             });
    //             console.log(e)
    //           })

    //       })
    //       .catch((e) => {
    //         console.log(e)
    //       })

    //   })
    //   .catch((e) => {
    //     console.log('error while creating metalsmithJSON file' + e)
    //     this.$message({
    //       showClose: true,
    //       message: 'Cannot save file! Some error occured, try again.',
    //       type: 'danger'
    //     });
    //   })
    // },

    // async generatePreview () {
    //   console.log(" calling api Get for metalsmith for this page.");

    //   //get header, footer from pagesetting from config.json and then set the value in js file to call the api.

    //   let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

    //   let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //   let urlparts = configFileUrl.split("/");
    //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //   let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //   var folderUrl = configFileUrl.replace(fileName, '');

    //   console.log("page name:" + nameF)
    //   let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //   console.log("response:", responseConfig.data)
    //   let rawSettings = JSON.parse(responseConfig.data);
    //   // console.log("response of pageSettings:", rawSettings[0].pageSettings[0].PageName)

    //   for (let i = 0; i < rawSettings[1].pageSettings.length; i++) {
    //       if (rawSettings[1].pageSettings[i].PageName == (nameF+'.html')) {
    //           console.log("file found in pageSettings")
    //           // this.form.Header = rawSettings[1].pageSettings[i].PageHeader
    //           // this.form.Footer = rawSettings[1].pageSettings[i].PageFooter
    //           this.form.Layout = rawSettings[1].pageSettings[i].PageLayout
    //           this.form.partials = rawSettings[1].pageSettings[i].partials
    //           // this.form.Sidebar = rawSettings[1].pageSettings[i].PageSidebar
    //           // this.form.Menu = rawSettings[1].pageSettings[i].PageMenu
    //       }
    //   }

    //   let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');
    //   console.log("response of metalsmith", responseMetal.data);
    //   var index = responseMetal.data.search('.source')

    //   responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)
    //   // console.log("src for metalsmith", src);

    //   var indexPartial = responseMetal.data.search("('handlebars')");
    //   console.log("form.partialsList:",this.form.partials)

    //   var partials='';
    //   for (var i = 0; i<this.form.partials.length; i++) {
    //     let key=Object.keys(this.form.partials[i])[0];
    //     console.log("key :",key)
    //     let value=this.form.partials[i]
    //     let key2=key;
    //     console.log("value:",value[key2])
    //     key=key.trim();
    //     // key=key.split('.')[0]
    //     if(value[key2].match('html')){
    //       console.log("inside html if")
    //       key=key.split('.')[0]
    //        var temp= "Handlebars.registerPartial('"+key+"', fs.readFileSync('" + folderUrl + "/"+key+"/" + value[key2] + "').toString())\n"
    //     }
    //     else if(value[key2].match('hbs'))
    //     {
    //       console.log("inside hbs if")
    //       key=key.split('.')[0]
    //       var temp= "Handlebars.registerPartial('"+key+"', fs.readFileSync('" + folderUrl + "/"+key+"/" + value[key2] + "').toString())\n"
    //     }
    //     else{
    //       console.log("inside else")
    //       var temp= "Handlebars.registerPartial('"+key+"', fs.readFileSync('" + folderUrl + "/"+key+"/" + value[key2] + ".html').toString())\n"
    //     }

    //     partials=partials+temp;

    //   }
    //   console.log("src for metalsmith:", partials);

    //   responseMetal.data = responseMetal.data.substr(0, indexPartial + 15) + partials + responseMetal.data.substr(indexPartial + 15);

    //   console.log("final metalsmith file ready for api call:", responseMetal.data);

    //   let mainMetal = folderUrl + '/assets/metalsmith.js'

    //   axios.post( config.baseURL + '/flows-dir-listing', {
    //           filename: mainMetal,
    //           text: responseMetal.data,
    //           type: 'file'
    //       }).then((response) => {
    //           console.log('successfully created metalsmith file :' + (response.data))
    //           this.$message({
    //               showClose: true,
    //               message: 'MetalSmith Config Saved!',
    //               type: 'success'
    //           });

    //           // Create temporary preview folder
    //           let newFolderName = folderUrl + '/Preview';
    //           return axios.post(config.baseURL + '/flows-dir-listing', {
    //               foldername : newFolderName,
    //               type : 'folder'
    //           })
    //           .then((res) => {
    //               console.log(res)
    //               // Create preview file





    //               let rawContent = this.$store.state.content;

    //               let newContent = "<html>\n<head>\n"+
    //               "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n"+
                  
    //               "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n"+
    //               "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n"+
    //               "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n"+
    //               "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n"+
    //               "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n"+
    //               "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n"+
    //               '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n'+
    //               "<link rel='stylesheet' href='./../main-files/main.css'/>\n"+
    //               rawContent +
    //               '<script src="./../assets/client-plugins/client1.js"><\/script>\n'+
    //               '<script src="./../main-files/main.js"><\/script>\n'+
    //               '</body>\n</html>';

    //               if (this.form.Layout == 'Blank') {
    //                 if (newContent.match('---')) {
    //                   let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
    //                   console.log("substr:" + substr)
    //                   newContent = newContent.replace(substr, '')
    //                 } else {
    //                   newContent = "<html>\n<head>\n"+
    //                   "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n"+
    //                   "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n"+
    //                   "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n"+
    //                   "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n"+
    //                   "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n"+
    //                   "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n"+
    //                   "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n"+
    //                   "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n"+
    //                   "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n"+
    //                   '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n'+
    //                   '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n'+
    //                   "<link rel='stylesheet' href='./../main-files/main.css'/>\n"+
    //                   rawContent +
    //                   '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client1.js"><\/script>\n'+
    //                   // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //                   '<script src="./../main-files/main.js"><\/script>\n'+
    //                   '</body>\n</html>';
    //                 }

    //               } else {
    //                 let tempValueLayout = '---\nlayout: ' + this.form.Layout + '.layout\n---\n';

    //                 if (newContent.match('---')) {
    //                   let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
    //                   newContent = newContent.replace(substr, tempValueLayout)
    //                 } else {
    //                   newContent = tempValueLayout + "<html>\n<head>\n"+
    //                   "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n"+
    //                   "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n"+
    //                   "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n"+
    //                   "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n"+
    //                   "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n"+
    //                   "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n"+
    //                   "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n"+
    //                   "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n"+
    //                   "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n"+
    //                   '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n'+
    //                   '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n'+
    //                   "<link rel='stylesheet' href='./../main-files/main.css'/>\n"+
    //                   rawContent +
    //                   '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n'+
    //                   '<script src="./../assets/client-plugins/client1.js"><\/script>\n'+
    //                   // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //                   '<script src="./../main-files/main.js"><\/script>\n'+
    //                   '</body>\n</html>';
    //                 }

    //               }

    //               this.PageLayout='';
    //               this.form.Header='';
    //               this.form.Footers='';
    //               this.form.Sidebar='';
    //               this.form.Menu='';

    //               let previewFileName = folderUrl + '/Preview/'+nameF+'.html';

    //                return axios.post( config.baseURL + '/flows-dir-listing', {
    //                     filename : previewFileName,
    //                     text : newContent,
    //                     type : 'file'
    //                 })
    //                 .then((res) => {
    //                     this.saveFileLoading = false;

    //                     axios.get( config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {
    //                       console.log('successfully  :' + (response))
    //                       // revert changes in metalsmith

    //                       var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+folderUrl+"/public')\n.clean(false)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'"+folderUrl+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

    //                       return axios.post(config.baseURL + '/flows-dir-listing', {
    //                               filename: mainMetal,
    //                               text: metalsmithJSON,
    //                               type: 'file'
    //                           })
    //                           .then((res) => {
    //                             console.log('Now previewing: ' + this.$store.state.fileUrl.replace(/\\/g, "\/"))
    //                             let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //                             previewFile = folderUrl.replace('/var/www/html','');
    //                             console.log(previewFile.replace('Pages'+nameF, ''));
    //                             window.open('http://localhost'+previewFile+'/public/'+nameF+'.html');



    //                             // Delete Preview Folder


    //                             axios.delete(config.baseURL + '/flows-dir-listing/0?filename='+folderUrl+'/Preview')
    //                             .then((res) => {

    //                                 console.log(res);



    //                             })
    //                             .catch((e) => {
    //                                 console.log(e)
    //                             })





    //                           })
    //                           .catch((e) => {
    //                               console.log(e)
    //                           })


    //                   })
    //                   .catch((err) => {
    //                       console.log('error while creating metalsmithJSON file' + err)
    //                   })


    //                     this.$message({
    //                         showClose: true,
    //                         message: 'File Saved!',
    //                         type: 'success'
    //                     });
    //                 })
    //                 .catch((e) => {
    //                     this.saveFileLoading = false
    //                     this.$message({
    //                         showClose: true,
    //                         message: 'File not saved! Please try again.',
    //                         type: 'error'
    //                     });
    //                     console.log(e)
    //                 })






    //           })
    //           .catch((e) => {
    //               console.log(e)
    //           })





    //       })
    //       .catch((e) => {
    //           console.log('error while creating metalsmithJSON file' + e)
    //           this.$message({
    //               showClose: true,
    //               message: 'Cannot save file! Some error occured, try again.',
    //               type: 'danger'
    //           });
    //       })
    // },

    async generatePreview() {
        // Save File first
        this.saveFile();
        console.log("done with saveFile")
        //get header, footer from pagesetting from config.json and then set the value in js file to call the api.

        let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

        let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let urlparts = configFileUrl.split("/");
        let fileNameOrginal = urlparts[urlparts.length - 1];
        let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        var folderUrl = configFileUrl.replace(fileName, '');
        let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
        let rawSettings = JSON.parse(responseConfig.data);

        for (let i = 0; i < rawSettings[1].pageSettings.length; i++) {
            if (rawSettings[1].pageSettings[i].PageName == (nameF + '.html')) {
                this.form.Layout = rawSettings[1].pageSettings[i].PageLayout
                this.form.partials = rawSettings[1].pageSettings[i].partials
                // this.form.url = rawSettings[1].pageSettings[i].PageURL
            }
        }
        // console.log("this.form.url:", this.form.url)
        let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');

        var index = responseMetal.data.search('.source')

        responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)
        // if (this.form.url != '') {
        //     var indexPerma = responseMetal.data.search('.clean');
        //     var permalinks = "\n.use(permalinks({ pattern: 'ate' }))"
        //     responseMetal.data = responseMetal.data.substr(0, indexPerma + 13) + permalinks + responseMetal.data.substr(indexPerma + 13)
        // }
        var indexPartial = responseMetal.data.search("('handlebars')");

        var partials = '';
        for (var i = 0; i < this.form.partials.length; i++) {
            let key = Object.keys(this.form.partials[i])[0];
            let value = this.form.partials[i]
            let key2 = key;
            key = key.trim();

            if (value[key2].match('html')) {
                key = key.split('.')[0]
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + "').toString())\n"
            } else if (value[key2].match('hbs')) {
                key = key.split('.')[0]
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + "').toString())\n"
            } else {
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + ".html').toString())\n"
            }

            partials = partials + temp;

        }

        responseMetal.data = responseMetal.data.substr(0, indexPartial + 15) + partials + responseMetal.data.substr(indexPartial + 15);
        // console.log("final metalsmith:",responseMetal.data)
        let mainMetal = folderUrl + '/assets/metalsmith.js'

        axios.post(config.baseURL + '/flows-dir-listing', {
                filename: mainMetal,
                text: responseMetal.data,
                type: 'file'
            }).then(async (response) => {
                this.$message({
                    showClose: true,
                    message: 'Config Saved!',
                    type: 'success'
                });

                // Create temporary preview folder
                let newFolderName = folderUrl + '/Preview';
                return axios.post(config.baseURL + '/flows-dir-listing', {
                        foldername: newFolderName,
                        text:'',
                        type: 'folder'
                    })
                    .then(async (res) => {
                        console.log(res)
                        // Create preview file

                        if(this.form.Layout=='Blank'){
                          await axios.post(config.baseURL + '/flows-dir-listing', {
                          filename: folderUrl+'/Layout/Blank.layout',
                          type: 'file'
                          })
                          .catch((e)=>{
                            console.log("error while blank file creation")
                          })
                        }
                        let layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + this.form.Layout + '.layout');
                        // console.log("layoutdata.data:",layoutdata.data)
                        let newContent = "<html>\n<head>\n" +
                            "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n" +
                            "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n" +
                            "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n" +
                            "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
                            "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n" +
                            "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
                            "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
                            "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n" +
                            "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
                            '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n' +
                            '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n' +
                            "<link rel='stylesheet' href='./../main-files/main.css'/>\n</head><body>\n" +
                            layoutdata.data +
                            '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n' +
                            // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
                            '<script src="./../assets/client-plugins/client1.js"><\/script>\n'+
                            '<script src="./../main-files/main.js"><\/script>\n' +
                            '</body>\n</html>';
                        // console.log("path for layout:",folderUrl + '/Layout/' + this.form.Layout+'.layout')
                        // console.log("layout file:",newContent)
                        axios.post(config.baseURL + '/flows-dir-listing', {
                                filename: folderUrl + '/Layout/' + this.form.Layout + '.layout',
                                text: newContent,
                                type: 'file'
                            })
                            .then(async (res) => {
                                console.log("successfully layout file edited:")
                                let rawContent = this.$store.state.content;
                                if (this.form.Layout == 'Blank') {
                                    if (rawContent.match('---')) {
                                        let substr = rawContent.substr(rawContent.search('---'), rawContent.search('<'))
                                        console.log("substr:" + substr)
                                        rawContent = rawContent.replace(substr, '')
                                    } else {
                                        rawContent = rawContent
                                    }

                                } else {
                                    let tempValueLayout = '---\nlayout: ' +this.form.Layout + '.layout\n---\n';

                                    if (rawContent.match('---')) {
                                        let substr = rawContent.substr(rawContent.search('---'), rawContent.search('<'))
                                        rawContent = rawContent.replace(substr, tempValueLayout)
                                    } else {
                                        rawContent = tempValueLayout + rawContent
                                    }

                                }

                                this.PageLayout = '';
                                this.form.Header = '';
                                this.form.Footers = '';
                                this.form.Sidebar = '';
                                this.form.Menu = '';
                                // this.form.url = ''
                                // console.log("rawContent:",rawContent)
                                let previewFileName = folderUrl + '/Preview/' + nameF + '.html';
                                // console.log("final content:\n",newContent)
                                await axios.post(config.baseURL + '/flows-dir-listing', {
                                        filename: previewFileName,
                                        text: rawContent,
                                        type: 'file'
                                    })
                                    .then(async (res) => {
                                        this.saveFileLoading = false;

                                        await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {
                                                // revert changes in metalsmith 

                                                var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                                                return axios.post(config.baseURL + '/flows-dir-listing', {
                                                        filename: mainMetal,
                                                        text: metalsmithJSON,
                                                        type: 'file'
                                                    })
                                                    .then((res) => {
                                                        let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
                                                        previewFile = folderUrl.replace('/var/www/html', '');

                                                        window.open('http://localhost/' + previewFile + '/public/' + nameF + '.html');

                                                        // Delete Preview Folder
                                                        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                                            .then((res) => {
                                                                console.log(res);

                                                                return axios.post(config.baseURL + '/flows-dir-listing', {
                                                                        filename: folderUrl + '/Layout/' + this.form.Layout + '.layout',
                                                                        text: layoutdata.data,
                                                                        type: 'file'
                                                                    })
                                                                    .then((res) => {
                                                                        console.log("layout file reset")
                                                                        if(this.form.Layout=='Blank'){
                                                                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
                                                                          .catch((e)=>{
                                                                            console.log("error while deleting blank.layout file")
                                                                          })
                                                                        }

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

                                            })
                                            .catch((err) => {
                                                this.$message({
                                                    showClose: true,
                                                    message: 'File not saved! Please try again.',
                                                    type: 'error'
                                                });
                                                console.log('Error while creating MetalSmith JS file' + err)
                                            })

                                        this.$message({
                                            showClose: true,
                                            message: 'File Saved!',
                                            type: 'success'
                                        });
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
                            })
                            .catch((e) => {
                                console.log(e);
                            })
                    })
                    .catch((e) => {
                        console.log(e)
                    })

            })
            .catch((e) => {
                console.log('Error while creating MetalSmith JS file' + e)
                this.$message({
                    showClose: true,
                    message: 'Cannot save file! Some error occured, try again.',
                    type: 'danger'
                });
            })
    },


    // async generatePreview() {
    //     // Save File first
    //     this.saveFile();
    //     console.log("done with saveFile")
    //     //get header, footer from pagesetting from config.json and then set the value in js file to call the api.

    //     let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

    //     let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //     let urlparts = configFileUrl.split("/");
    //     let fileNameOrginal = urlparts[urlparts.length - 1];
    //     let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //     var folderUrl = configFileUrl.replace(fileName, '');
    //     let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //     let rawSettings = JSON.parse(responseConfig.data);

    //     for (let i = 0; i < rawSettings[1].pageSettings.length; i++) {
    //         if (rawSettings[1].pageSettings[i].PageName == (nameF + '.html')) {
    //             this.form.Layout = rawSettings[1].pageSettings[i].PageLayout
    //             this.form.partials = rawSettings[1].pageSettings[i].partials
    //             // this.form.url = rawSettings[1].pageSettings[i].PageURL
    //         }
    //     }
    //     // console.log("this.form.url:", this.form.url)
    //     let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');

    //     var index = responseMetal.data.search('.source')

    //     responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)
    //     // if (this.form.url != '') {
    //     //     var indexPerma = responseMetal.data.search('.clean');
    //     //     var permalinks = "\n.use(permalinks({ pattern: 'ate' }))"
    //     //     responseMetal.data = responseMetal.data.substr(0, indexPerma + 13) + permalinks + responseMetal.data.substr(indexPerma + 13)
    //     // }
    //     var indexPartial = responseMetal.data.search("('handlebars')");

    //     var partials = '';
    //     for (var i = 0; i < this.form.partials.length; i++) {
    //         let key = Object.keys(this.form.partials[i])[0];
    //         let value = this.form.partials[i]
    //         let key2 = key;
    //         key = key.trim();

    //         if (value[key2].match('html')) {
    //             key = key.split('.')[0]
    //             var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + "').toString())\n"
    //         } else if (value[key2].match('hbs')) {
    //             key = key.split('.')[0]
    //             var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + "').toString())\n"
    //         } else {
    //             var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + ".html').toString())\n"
    //         }

    //         partials = partials + temp;

    //     }

    //     responseMetal.data = responseMetal.data.substr(0, indexPartial + 15) + partials + responseMetal.data.substr(indexPartial + 15);
    //     // console.log("final metalsmith:",responseMetal.data)
    //     let mainMetal = folderUrl + '/assets/metalsmith.js'

    //     axios.post(config.baseURL + '/flows-dir-listing', {
    //             filename: mainMetal,
    //             text: responseMetal.data,
    //             type: 'file'
    //         }).then(async (response) => {
    //             this.$message({
    //                 showClose: true,
    //                 message: 'Config Saved!',
    //                 type: 'success'
    //             });

    //             // Create temporary preview folder
    //             let newFolderName = folderUrl + '/Preview';
    //             return axios.post(config.baseURL + '/flows-dir-listing', {
    //                     foldername: newFolderName,
    //                     type: 'folder'
    //                 })
    //                 .then(async (res) => {
    //                     console.log(res)
    //                     // Create preview file


    //                     let layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + this.form.Layout + '.layout');
    //                     // console.log("layoutdata.data:",layoutdata.data)
    //                     let newContent = "<html>\n<head>\n" +
    //                         "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n" +
    //                         "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n" +
    //                         "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n" +
    //                         "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
    //                         "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n" +
    //                         "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
    //                         "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
    //                         "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n" +
    //                         "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
    //                         '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n' +
    //                         '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n' +
    //                         "<link rel='stylesheet' href='./../main-files/main.css'/>\n</head><body>\n" +
    //                         layoutdata.data +
    //                         '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n' +
    //                         '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n' +
    //                         // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //                         '<script src="./../main-files/main.js"><\/script>\n' +
    //                         '</body>\n</html>';
    //                     // console.log("path for layout:",folderUrl + '/Layout/' + this.form.Layout+'.layout')
    //                     // console.log("layout file:",newContent)
    //                     axios.post(config.baseURL + '/flows-dir-listing', {
    //                             filename: folderUrl + '/Layout/' + this.form.Layout + '.layout',
    //                             text: newContent,
    //                             type: 'file'
    //                         })
    //                         .then(async (res) => {
    //                             console.log("successfully layout file edited:")
    //                             let rawContent = this.$store.state.content;
    //                             if (this.form.Layout == 'Blank') {
    //                                 if (rawContent.match('---')) {
    //                                     let substr = rawContent.substr(rawContent.search('---'), rawContent.search('<'))
    //                                     console.log("substr:" + substr)
    //                                     rawContent = rawContent.replace(substr, '')
    //                                 } else {
    //                                     rawContent = rawContent
    //                                 }

    //                             } else {
    //                                 let tempValueLayout = '---\nlayout: ' +this.form.Layout + '.layout\n---\n';

    //                                 if (rawContent.match('---')) {
    //                                     let substr = rawContent.substr(rawContent.search('---'), rawContent.search('<'))
    //                                     rawContent = rawContent.replace(substr, tempValueLayout)
    //                                 } else {
    //                                     rawContent = tempValueLayout + rawContent
    //                                 }

    //                             }

    //                             this.PageLayout = '';
    //                             this.form.Header = '';
    //                             this.form.Footers = '';
    //                             this.form.Sidebar = '';
    //                             this.form.Menu = '';
    //                             // this.form.url = ''
    //                             // console.log("rawContent:",rawContent)
    //                             let previewFileName = folderUrl + '/Preview/' + nameF + '.html';
    //                             // console.log("final content:\n",newContent)
    //                             await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                     filename: previewFileName,
    //                                     text: rawContent,
    //                                     type: 'file'
    //                                 })
    //                                 .then(async (res) => {
    //                                     this.saveFileLoading = false;

    //                                     await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {
    //                                             // revert changes in metalsmith 

    //                                             var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

    //                                             return axios.post(config.baseURL + '/flows-dir-listing', {
    //                                                     filename: mainMetal,
    //                                                     text: metalsmithJSON,
    //                                                     type: 'file'
    //                                                 })
    //                                                 .then((res) => {
    //                                                     let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //                                                     previewFile = folderUrl.replace('/var/www/html', '');

    //                                                     window.open(config.ipAddress + previewFile + '/public/' + nameF + '.html');

    //                                                     // Delete Preview Folder
    //                                                     axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
    //                                                         .then((res) => {
    //                                                             console.log(res);

    //                                                             return axios.post(config.baseURL + '/flows-dir-listing', {
    //                                                                     filename: folderUrl + '/Layout/' + this.form.Layout + '.layout',
    //                                                                     text: layoutdata.data,
    //                                                                     type: 'file'
    //                                                                 })
    //                                                                 .then((res) => {
    //                                                                     console.log("layout file reset")

    //                                                                 })
    //                                                                 .catch((e) => {
    //                                                                     console.log(e)
    //                                                                 })

    //                                                         })
    //                                                         .catch((e) => {
    //                                                             console.log(e)
    //                                                         })

    //                                                 })
    //                                                 .catch((e) => {
    //                                                     console.log(e)
    //                                                 })

    //                                         })
    //                                         .catch((err) => {
    //                                             this.$message({
    //                                                 showClose: true,
    //                                                 message: 'File not saved! Please try again.',
    //                                                 type: 'error'
    //                                             });
    //                                             console.log('Error while creating MetalSmith JS file' + err)
    //                                         })

    //                                     this.$message({
    //                                         showClose: true,
    //                                         message: 'File Saved!',
    //                                         type: 'success'
    //                                     });
    //                                 })
    //                                 .catch((e) => {
    //                                     this.saveFileLoading = false
    //                                     this.$message({
    //                                         showClose: true,
    //                                         message: 'File not saved! Please try again.',
    //                                         type: 'error'
    //                                     });
    //                                     console.log(e)
    //                                 })
    //                         })
    //                         .catch((e) => {
    //                             console.log(e);
    //                         })
    //                 })
    //                 .catch((e) => {
    //                     console.log(e)
    //                 })

    //         })
    //         .catch((e) => {
    //             console.log('Error while creating MetalSmith JS file' + e)
    //             this.$message({
    //                 showClose: true,
    //                 message: 'Cannot save file! Some error occured, try again.',
    //                 type: 'danger'
    //             });
    //         })
    // },

    // Code Before 25-Oct Before Demo
    // async generatePreview() {

    //   console.log("Generating and Previewing Page");

    //   let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

    //   let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //   let urlparts = configFileUrl.split("/");
    //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //   let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //   var folderUrl = configFileUrl.replace(fileName, '');

    //   let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //   let rawSettings = JSON.parse(responseConfig.data);

    //   for (let i = 0; i < rawSettings[1].pageSettings.length; i++) {
    //     if (rawSettings[1].pageSettings[i].PageName == (nameF + '.html')) {
    //       this.form.Layout = rawSettings[1].pageSettings[i].PageLayout
    //       this.form.partials = rawSettings[1].pageSettings[i].partials
    //     }
    //   }

    //   let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');
    //   var index = responseMetal.data.search('.source')

    //   responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)

    //   var indexPartial = responseMetal.data.search("('handlebars')");

    //   var partials = '';
    //   for (var i = 0; i < this.form.partials.length; i++) {
    //     let key = Object.keys(this.form.partials[i])[0];
    //     let value = this.form.partials[i]
    //     let key2 = key;
    //     key = key.trim();
    //     var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/" + key + "/" + value[key2] + ".html').toString())\n"
    //     partials = partials + temp;

    //   }

    //   responseMetal.data = responseMetal.data.substr(0, indexPartial + 15) + partials + responseMetal.data.substr(indexPartial + 15);

    //   let mainMetal = folderUrl + '/assets/metalsmith.js'

    //   axios.post('http://localhost:3030/flows-dir-listing', {
    //       filename: mainMetal,
    //       text: responseMetal.data,
    //       type: 'file'
    //     }).then((response) => {
    //       console.log('successfully created metalsmith file :' + (response.data))
    //       this.$message({
    //         showClose: true,
    //         message: 'MetalSmith Config Saved!',
    //         type: 'success'
    //       });

    //       let newFolderName = folderUrl + '/Preview';
    //       return axios.post(config.baseURL + '/flows-dir-listing', {
    //           foldername: newFolderName,
    //           type: 'folder'
    //         })
    //         .then((res) => {

    //           let rawContent = this.$store.state.content;

    //           let newContent = "<html>\n<head>\n"+
    //           "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n"+
    //           "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n"+
    //           "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n"+
    //           "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n"+
    //           "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n"+
    //           "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n"+
    //           "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n"+
    //           "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n"+
    //           "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n"+
    //           '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n'+
    //           '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n'+
    //           "<link rel='stylesheet' href='./../assets/main.css'/>\n"+
    //           rawContent +
    //           '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n'+
    //           '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n'+
    //           '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //           '<script src="./../assets/main.js"><\/script>\n'+
    //           '</body>\n</html>';

    //           if (this.form.Layout == 'Blank') {
    //             if (newContent.match('---')) {
    //               let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
    //               console.log("substr:" + substr)
    //               newContent = newContent.replace(substr, '')
    //             } else {
    //               newContent = "<html>\n<head>\n"+
    //               "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n"+
    //               "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n"+
    //               "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n"+
    //               "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n"+
    //               "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n"+
    //               "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n"+
    //               "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n"+
    //               "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n"+
    //               "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n"+
    //               '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n'+
    //               '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n'+
    //               "<link rel='stylesheet' href='./../assets/main.css'/>\n"+
    //               rawContent +
    //               '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n'+
    //               '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //               '<script src="./../assets/main.js"><\/script>\n'+
    //               '</body>\n</html>';
    //             }

    //           } else {
    //             let tempValueLayout = '---\nlayout: ' + this.form.Layout + '.layout\n---\n';

    //             if (newContent.match('---')) {
    //               let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
    //               newContent = newContent.replace(substr, tempValueLayout)
    //             } else {
    //               newContent = tempValueLayout + "<html>\n<head>\n"+
    //               "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n"+
    //               "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n"+
    //               "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n"+
    //               "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n"+
    //               "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n"+
    //               "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n"+
    //               "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n"+
    //               "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n"+
    //               "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n"+
    //               '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n'+
    //               '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n'+
    //               "<link rel='stylesheet' href='./../assets/main.css'/>\n"+
    //               rawContent +
    //               '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n'+
    //               '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n'+
    //               '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //               '<script src="./../assets/main.js"><\/script>\n'+
    //               '</body>\n</html>';
    //             }

    //           }

    //           this.PageLayout = '';
    //           this.form.Header = '';
    //           this.form.Footers = '';
    //           this.form.Sidebar = '';
    //           this.form.Menu = '';

    //           let previewFileName = folderUrl + '/Preview/' + nameF + '.html';

    //           return axios.post('http://localhost:3030/flows-dir-listing', {
    //               filename: previewFileName,
    //               text: newContent,
    //               type: 'file'
    //             })
    //             .then((res) => {
    //               this.saveFileLoading = false;

    //               axios.get('http://localhost:3030/metalsmith?path=' + folderUrl, {}).then((response) => {

    //                   var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

    //                   return axios.post(config.baseURL + '/flows-dir-listing', {
    //                       filename: mainMetal,
    //                       text: metalsmithJSON,
    //                       type: 'file'
    //                     })
    //                     .then((res) => {
    //                       console.log('Now previewing: ' + this.$store.state.fileUrl.replace(/\\/g, "\/"))
    //                       let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //                       previewFile = folderUrl.replace('/var/www/html', '');

    //                       window.open('http://localhost' + previewFile + '/public/' + nameF + '.html');

    //                       axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
    //                       .then((res) => {
    //                         console.log(res);
    //                       })
    //                       .catch((e) => {
    //                         console.log(e)
    //                       });

    //                     })
    //                     .catch((e) => {
    //                       console.log(e)
    //                     });

    //                 })
    //                 .catch((err) => {
    //                   console.log('Error while creating metalsmithJSON file' + err)
    //                 });

    //               this.$message({
    //                 showClose: true,
    //                 message: 'File Saved!',
    //                 type: 'success'
    //               });

    //             })
    //             .catch((e) => {

    //               this.saveFileLoading = false
    //               this.$message({
    //                 showClose: true,
    //                 message: 'File not saved! Please try again.',
    //                 type: 'error'
    //               });
    //               console.log(e);

    //             })

    //         })
    //         .catch((e) => {
    //           console.log(e)
    //         })

    //     })
    //     .catch((e) => {
    //       console.log('Error while creating metalsmithJSON file' + e)
    //       this.$message({
    //         showClose: true,
    //         message: 'Cannot save file! Some error occured, try again.',
    //         type: 'danger'
    //       });
    //     })

    // },

    // Create new Folder
    addFolder(){
        let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddFolder.foldername;
        return axios.post(config.baseURL + '/flows-dir-listing', {
            foldername : newFolderName,
            type : 'folder'
        })
        .then((res) => {
            console.log(res);

            var storedTemplates = JSON.parse(localStorage.getItem("listOfTempaltes"));
            storedTemplates.push(this.formAddFolder.foldername)
            localStorage.setItem("listOfTempaltes", JSON.stringify(storedTemplates));

            this.newFolderDialog = false
            this.addNewFolderLoading = false
        })
        .catch((e) => {
            console.log(e)
        })
    },

    // Create new Website
    addProjectFolder(){
        let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddProjectFolder.projectName;
        return axios.post(config.baseURL + '/flows-dir-listing', {
            foldername : newFolderName,
            type : 'folder'
        })
        .then((res) => {
            console.log(res)
            this.newProjectFolderDialog = false
            this.addNewProjectFolderLoading = false

            // Create repositoroty on GitLab
            axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo='+this.formAddProjectFolder.projectName + '&privateToken='+ this.$session.get('privateToken') + '&username=' + this.$session.get('username'), {
            })
            .then((response) => {
              console.log(response);
              if(response.status == 200 || response.status == 201){
                console.log(response.data);

                localStorage.setItem("folderUrl",newFolderName);
                var folder = localStorage.getItem("folderUrl");

                axios.post('http://localhost:3030/get-directory-list?folderUrl='+ newFolderName, {

                }).then((response) => {
                  localStorage.setItem("listOfTempaltes", JSON.stringify(response.data));
                })
                .catch((e) => {
                    console.log(e)
                })

                axios.post('http://localhost:3030/get-directory-list?folderUrl='+ newFolderName + '/Templates', {

                }).then((res) => {
                  localStorage.setItem("Templates", JSON.stringify(res.data));
                  let temp_list = localStorage.getItem("Templates");
                })
                .catch((e) => {
                    console.log(e)
                })

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

                this.formAddProjectFolder.projectName = null;
              } else {
                console.log(response);
                this.$message({
                    showClose: true,
                    message: 'Some error occured. Please refresh and try again.',
                    type: 'error'
                });
              }

            })
            .catch((e) => {
                console.log(e)
            });


        })
        .catch((e) => {
            console.log(e)
        });
    },

    // Create neccessary folders for project
    addOtherFolder(newFolderName){

      console.log('Creating essential folders...')

      // Create Assets folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/assets',
        type : 'folder'
      })
      .then((res) => {
         console.log('Assets Folder created!');
      })
      .catch((e)=>{
        console.log("Error from Assests"+res)
      });

      // Create Assets folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/assets/client-plugins',
        type : 'folder'
      })
      .then((res) => {
         console.log('Client-Plugins Folder created!');
      })
      .catch((e)=>{
        console.log("Error from Client-Plugins"+res)
      });

      // Create Headers Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Header',
        type : 'folder'
      })
      .then((res) => {
          console.log('Header Folder created!');
      })
      .catch((e)=>{
        console.log("Error From Headers"+res)
      });

      // Create Layouts Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Layout',
        type : 'folder'

      })
      .then((res) => {
          console.log('Layout Folder created!');
      })
      .catch((e)=>{
        console.log("Error From Layout"+res)
      });

      // Create menus Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Menu',
        type : 'folder'

      })
      .then((res) => {
        console.log('Menu Folder created!');
      })
      .catch((e)=>{
        console.log("Error from Menu"+res)
      });

      // Create Footers Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Footer',
        type : 'folder'
      })
      .then((res) => {
        console.log('Footer Folder created!');
      })
      .catch((e)=>{
        console.log("Error from Footers"+res)
      });

      // Create Pages Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Pages',
        type : 'folder'
      })
      .then((res) => {
        console.log('Pages Folder created!');
      })
      .catch((e)=>{
        console.log("Error from pages"+res)
      });

      // Create Templates Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Templates',
        type : 'folder'
      })
      .then((res) => {
        console.log('Templates Folder created!');
      })
      .catch((e)=>{
        console.log("Error from pages"+res)
      });

      // Create Sidebars Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Sidebar',
        type : 'folder'
      })
      .then((res) => {
        console.log('Sidebar Folder created!');
      })
      .catch((e)=>{
        console.log("Error from pages"+res)
      });

      // Create Sidebars Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/main-files',
        type : 'folder'
      })
      .then((res) => {
        console.log('main-files Folder created!');
      })
      .catch((e)=>{
        console.log("Error from pages"+res)
      });

      // Create Default header Folder
      // axios.post(config.baseURL+'/flows-dir-listing' , {
      //   foldername : newFolderName+'/Headers/default',
      //   type : 'folder'
      // })
      // .then((res) => {
      //   console.log('Default header Folder created!');
      // })
      // .catch((e)=>{
      //   console.log("Error from pages"+res)
      // });

      console.log('Now creating essential files...');
      this.createEssentialFiles(newFolderName);
    },

    // Create necessary files for project
    createEssentialFiles(newFolderName) {

      // Create Config.json file

      let newfilename = newFolderName + '/assets/config.json';

      let repoSettings = [ { "repoSettings" : [ { "RepositoryId" : this.newRepoId, "RepositoryName" : this.repoName }] }, {"projectSettings":[{ "RepositoryId" : this.newRepoId, "ProjectName": this.repoName, "BrandName": '', "BrandLogoName": '', "ProjectLayout": '',"ProjectHeader":'',"ProjectFooter":'',"ProjectSEOTitle":'',"ProjectSEOKeywords": '',"ProjectSEODescription":''}, { "GlobalVariables": [], "GlobalCssVariables": [] } ],"pageSettings":[{
        "PageName": "index.html",
        "PageSEOTitle": "",
        "PageSEOKeywords": "",
        "PageSEODescription": "",
        "PageLayout": "default",
        "partials": [
          {
            "Header": "default"
          },
          {
            "Footer": "default"
          }
        ]
        }] }, { "layoutOptions": [ { "Header": [{ value: 'default', label: 'default' }], "Footer": [{ value: 'default', label: 'default' }],"Sidebar": [{ value: 'default', label: 'default' }],"Menu": [{ value: 'default', label: 'default' }], "Layout": [{ value: 'Blank', label: 'Blank',partialsList:[], defaultList:[] }, { value: 'default', label: 'default',partialsList:['Header','Footer'], defaultList:[] }] } ] } ];

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : newfilename,
          text : JSON.stringify(repoSettings),
          type : 'file'
      })
      .then((res) => {
       console.log('Config.json file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Create main.css file
      let maincss = newFolderName + '/main-files/main.css'
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : maincss,
          text : '/* Add your custom CSS styles here. It will be automatically included in every page. */\np{margin: 0 !important; padding: 0 !important;}.row{padding: 0 !important; margin: 0 !important;}.column{padding: 0 !important; margin: 0 !important;}',
          type : 'file'
      })
      .then((res) => {
        console.log('Main.css file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Create main.js file
      let mainjs = newFolderName + '/main-files/main.js'
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : mainjs,
          text : '/* Add your custom JavaScript/jQuery functions here. It will be automatically included in every page. */\n$(document).on("click", "smooth-scroll", function(event){event.preventDefault(); $("html, body").animate({scrollTop: $($.attr(this, "href")).offset().top}, 500);});',
          type : 'file'
      })
      .then((res) => {
        console.log('Main.js file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Brand Logo
      let brandLogo = newFolderName + '/assets/brand-logo.png';

      axios.post(config.baseURL + '/flows-dir-listing', {
        filename : brandLogo,
        text : '',
        type : 'file'
      })
      .then((res) => {
        console.log(brandLogo + ' file created');
      })
      .catch((e) => {
          console.log(e)
      })

      // Create index.html file
      let indexLayoutContent = '';
      if(this.selectedTemplate == 'template1'){
        indexLayoutContent = '<!DOCTYPE html><html><title>Coming Soon</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"><style>body,h1{font-family: "Raleway", sans-serif}body, html{height: 100%}.bgimg{background-image: url(\'https:\/\/wallpapercave.com/wp/Fj4g4zO.jpg\'); min-height: 100%; background-position: center; background-size: cover;}</style><body><div class="bgimg w3-display-container w3-animate-opacity w3-text-white"> <div class="w3-display-topleft w3-padding-large w3-xlarge"> Logo </div><div class="w3-display-middle"> <h1 class="w3-jumbo w3-animate-top">COMING SOON</h1> <hr class="w3-border-grey" style="margin:auto;width:40%"> <p class="w3-large w3-center">35 days left</p></div><div class="w3-display-bottomleft w3-padding-large"> Powered by <a href="#" target="_blank">Flowz</a> </div></div></body></html>'
      } else if(this.selectedTemplate == 'template2') {
        indexLayoutContent = '<!DOCTYPE html><html><title>Portfolio</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel=\'stylesheet\' href=\'https://fonts.googleapis.com/css?family=Roboto\'><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>html,body,h1,h2,h3,h4,h5,h6{font-family: "Roboto", sans-serif}</style><body class="w3-light-grey"><div class="w3-content w3-margin-top" style="max-width:1400px;"> <div class="w3-row-padding"> <div class="w3-third"> <div class="w3-white w3-text-grey w3-card-4"> <div class="w3-display-container"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WeLZdFD62GEKO_wITiHKZ8pC43XS6Nakaoq5PfjIqJ6MNx6zHw" style="width:100%" alt="Avatar"> <div class="w3-display-bottomleft w3-container w3-text-black"> <h2 style="color: #009688!important">Jane Doe</h2> </div></div><div class="w3-container"> <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p><p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p><p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p><p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p><hr> <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p><p>Adobe Photoshop</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div></div><p>Photography</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%"> <div class="w3-center w3-text-white">80%</div></div></div><p>Illustrator</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div></div><p>Media</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div></div><br><p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p><p>English</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div></div><p>Spanish</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div></div><p>German</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div></div><br></div></div><br></div><div class="w3-twothird"> <div class="w3-container w3-card-2 w3-white w3-margin-bottom"> <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2> <div class="w3-container"> <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6> <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6> <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br></div></div><div class="w3-container w3-card-2 w3-white"> <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2> <div class="w3-container"> <h5 class="w3-opacity"><b>W3Schools.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6> <p>Web Development! All I need to know in one place</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>London Business School</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6> <p>Master Degree</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>School of Coding</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6> <p>Bachelor Degree</p><br></div></div></div></div></div><footer class="w3-container w3-teal w3-center w3-margin-top"> <p>Find me on social media.</p><i class="fa fa-facebook-official w3-hover-opacity"></i> <i class="fa fa-instagram w3-hover-opacity"></i> <i class="fa fa-snapchat w3-hover-opacity"></i> <i class="fa fa-pinterest-p w3-hover-opacity"></i> <i class="fa fa-twitter w3-hover-opacity"></i> <i class="fa fa-linkedin w3-hover-opacity"></i> <p>Powered by <a href="#" target="_blank">Flowz</a></p></footer></body></html>'
      } else if(this.selectedTemplate == 'template3') {
        indexLayoutContent = '<!DOCTYPE html><html><title>W3.CSS Template</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>body,h1,h2,h3,h4,h5,h6{font-family: "Lato", sans-serif}.w3-bar,h1,button{font-family: "Montserrat", sans-serif}.fa-anchor,.fa-coffee{font-size:200px}</style><body><div class="w3-top"> <div class="w3-bar w3-red w3-card-2 w3-left-align w3-large"> <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a> <a href="#" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 3</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</a> </div><div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 1</a> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 2</a> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 3</a> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 4</a> </div></div><header class="w3-container w3-red w3-center" style="padding:128px 16px"> <h1 class="w3-margin w3-jumbo">START PAGE</h1> <p class="w3-xlarge">Template by w3.css</p><button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button></header><div class="w3-row-padding w3-padding-64 w3-container"> <div class="w3-content"> <div class="w3-twothird"> <h1>Lorem Ipsum</h1> <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5> <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class="w3-third w3-center"> <i class="fa fa-anchor w3-padding-64 w3-text-red"></i> </div></div></div><div class="w3-row-padding w3-light-grey w3-padding-64 w3-container"> <div class="w3-content"> <div class="w3-third w3-center"> <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i> </div><div class="w3-twothird"> <h1>Lorem Ipsum</h1> <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5> <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div><div class="w3-container w3-black w3-center w3-opacity w3-padding-64"> <h1 class="w3-margin w3-xlarge">Quote of the day: live life</h1></div><footer class="w3-container w3-padding-64 w3-center w3-opacity" style="color: red"> <div class="w3-xlarge w3-padding-32"> <i class="fa fa-facebook-official w3-hover-opacity"></i> <i class="fa fa-instagram w3-hover-opacity"></i> <i class="fa fa-snapchat w3-hover-opacity"></i> <i class="fa fa-pinterest-p w3-hover-opacity"></i> <i class="fa fa-twitter w3-hover-opacity"></i> <i class="fa fa-linkedin w3-hover-opacity"></i> </div><p>Powered by <a href="#" target="_blank">Flowz</a></p></footer></body></html>';
      } else {
        indexLayoutContent = '';
      }
      let indexLayout = newFolderName + '/Pages/index.html';

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : indexLayout,
          text : indexLayoutContent,
          type : 'file'
      })
      .then((res) => {
        console.log('Index.html file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Create metalsmith file
      let mainMetal = newFolderName + '/assets/metalsmith.js'

      var metalsmithJSON="var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public')\n.clean(true)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

       axios.post(config.baseURL + '/flows-dir-listing', {
          filename : mainMetal,
          text : metalsmithJSON,
          type : 'file'
      })
      .then((res) => {
        console.log('metalsmith.js file created!');
      })
      .catch((e) => {
          console.log(e)
      });



      // Create demo layout file
      let layoutFileName = newFolderName + '/Layout/default.layout'

      var layoutFileData='<div class="row"><div class="column col-md-12 col-sm-12 col-xs-12"><!--gm-editable-region--><p>{{> Header }}</p><!--/gm-editable-region--></div></div><div class="row"><div class="column col-md-12 col-sm-12 col-xs-12"><!--gm-editable-region--><p>{{{ contents }}}</p><!--/gm-editable-region--></div></div><div class="row"><div class="column col-md-12 col-sm-12 col-xs-12"><!--gm-editable-region--><p>{{> Footer }}</p><!--/gm-editable-region--></div></div>'

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : layoutFileName,
          text : layoutFileData,
          type : 'file'
      })
      .then((res) => {
        console.log('default.layout file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Create demo header file
      let headerFileName = newFolderName + '/Header/default.html'

      var headerFileData='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"/><link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css"/><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="#"> <img src="https://imgur.com/ak2v9y7.png" height="30" alt="image"/> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav13"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="#">Features</a> </li><li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="#">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="#">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="#">Log In</a> </li></ul> <a class="btn btn-white ml-md-3" href="#">Button</a> </div></nav> </div></header>'

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : headerFileName,
          text : headerFileData,
          type : 'file'
      })
      .then((res) => {
        console.log('Header default.html file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Create demo header CSS file
      // let headerCSSFileName = newFolderName + '/Headers/default/default.css'

      // axios.post(config.baseURL + '/flows-dir-listing', {
      //     filename : headerCSSFileName,
      //     text : '/* Add Default Header CSS styles here. */\n',
      //     type : 'file'
      // })
      // .then((res) => {
      //   console.log('Header default.css file created!');
      // })
      // .catch((e) => {
      //     console.log(e)
      // });

      // Create demo header JS file
      // let headerJSFileName = newFolderName + '/Headers/default/default.js'

      // axios.post(config.baseURL + '/flows-dir-listing', {
      //     filename : headerJSFileName,
      //     text : '/* Add Default Header JS scripts here. */',
      //     type : 'file'
      // })
      // .then((res) => {
      //   console.log('Header default.js file created!');
      // })
      // .catch((e) => {
      //     console.log(e)
      // });

      // Create demo footer file
      let footerFileName = newFolderName + '/Footer/default.html'

      var footerFileData='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"/><link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css"/><footer class="fdb-block footer-large bg-dark"> <div class="container"> <div class="row align-items-top text-center text-md-left"> <div class="col-12 col-sm-6 col-md-4"> <h3><strong>Country A</strong></h3> <p>Street Address 52 <br/>Contact Name</p><p>+44 827 312 5002</p><p><a href="#">countrya@amazing.com</a> </p></div><div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0"> <h3><strong>Country B</strong></h3> <p>Street Address 100 <br/>Contact Name</p><p>+13 827 312 5002</p><p><a href="#">countryb@amazing.com</a> </p></div><div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div><div class="row mt-5"> <div class="col text-center" data-highlightable="1">(c) 2017 Flowz. All Rights Reserved</div></div></div></footer>'

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : footerFileName,
          text : footerFileData,
          type : 'file'
      })
      .then((res) => {
        console.log('Footer default.html file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Create default sidebar file file
      let sidebar = newFolderName + '/Sidebar/default.html'
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : sidebar,
          text : '<div id="sidebar" style="display: block; width: 100%; min-height: 20px"> <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"> <style type="text/css">#wrapper{padding-left: 250px; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled{padding-left: 250px;}#sidebar-wrapper{z-index: 1000; position: fixed; left: 250px; width: 250px; height: 100%; margin-left: -250px; overflow-y: auto; background: #000; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled #sidebar-wrapper{width: 250px;}#page-content-wrapper{width: 100%; position: absolute; padding: 15px;}#wrapper.toggled #page-content-wrapper{position: absolute; margin-right: -250px;}/* Sidebar Styles */.sidebar-nav{position: absolute; top: 0; width: 250px; margin: 0; padding: 0; list-style: none; width: 100%;}.sidebar-nav li{text-indent: 20px; line-height: 40px;}.sidebar-nav li a{display: block; text-decoration: none; color: #999999; width: 100%;}.sidebar-nav li a:hover{text-decoration: none; color: #fff; background: rgba(255,255,255,0.2);}.sidebar-nav li a:active,.sidebar-nav li a:focus{text-decoration: none;}.sidebar-nav > .sidebar-brand{height: 65px; font-size: 18px; line-height: 60px;}.sidebar-nav > .sidebar-brand a{color: #999999;}.sidebar-nav > .sidebar-brand a:hover{color: #fff; background: none;}</style><div id="wrapper" class="wrapper"> <div id="sidebar-wrapper" class="sidebar-bg"> <ul class="sidebar-nav"> <li class="sidebar-brand"> <a href="#"> Company Name </a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Dashboard</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Shortcuts</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Overview</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Events</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">About</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Services</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Contact</a> </li></ul> </div></div></div>',
          type : 'file'
      })
      .then((res) => {
        console.log('Default Sidebar file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Product Listing Plugin
      let listingPlugin = newFolderName + '/assets/client-plugins/client-product-listing-plugin.js';
      let pluginJsData = '';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/product-listing-plugin-cleaned.js', {

      })
      .then((response) => {
        pluginJsData = response.data;
        let ProjectName = newFolderName.replace('/var/www/html/websites/', '')
        pluginJsData = pluginJsData.replace('setNameHere', ProjectName);

        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : listingPlugin,
            text : pluginJsData,
            type : 'file'
        })
        .then((res) => {
          console.log(listingPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });


      // Product Detail Plugin
      let productDetailPlugin = newFolderName + '/assets/client-plugins/client-product-detail-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/product-detail-plugin-cleaned.js', {

      })
      .then((res) => {
        let pluginDetailJsData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : productDetailPlugin,
            text : pluginDetailJsData,
            type : 'file'
        })
        .then((res) => {
          console.log(productDetailPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      })


      // Carousel Slider Plugin
      let sliderPlugin = newFolderName + '/assets/client-plugins/client-slider-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/client-slider-plugin.js', {

      })
      .then((res) => {
        let sliderPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : sliderPlugin,
            text : sliderPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(sliderPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      })


      // Popular Product Slider
      let popularSliderPlugin = newFolderName + '/assets/client-plugins/client-popular-product-slider-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/popular-product-slider-plugin.js', {

      })
      .then((res) => {
        let popularSliderPluginData = res.data;
        let ProjectName = newFolderName.replace('/var/www/html/websites/', '')
        popularSliderPluginData = popularSliderPluginData.replace('setNameHere', ProjectName);
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : popularSliderPlugin,
            text : popularSliderPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(popularSliderPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      })


      // Pagination Plugin
      let paginationPlugin = newFolderName + '/assets/client-plugins/client-pagination-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/client-pagination-plugin.js', {

      })
      .then((res) => {
        let paginationPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : paginationPlugin,
            text : paginationPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(paginationPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });


      // Pagination Plugin
      let gradientAnimationPlugin = newFolderName + '/assets/client-plugins/image-gradient-animation.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/image-gradient-animation.js', {

      })
      .then((res) => {
        let gradientAnimationPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : gradientAnimationPlugin,
            text : gradientAnimationPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(gradientAnimationPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });


      // Dynamic menu Navbar Plugin
      let navbarPlugin = newFolderName + '/assets/client-plugins/client-navbar-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/client-navbar-plugin.js', {

      })
      .then((res) => {
        let navbarPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : navbarPlugin,
            text : navbarPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(navbarPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let template1 = newFolderName + '/Templates/template1.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/template1.html', {

      })
      .then((res) => {
        let template1Data = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : template1,
            text : template1Data,
            type : 'file'
        })
        .then((res) => {
          console.log(template1 + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let templateListing2 = newFolderName + '/Templates/template2.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/template2.html', {

      })
      .then((res) => {
        let template2Data = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : templateListing2,
            text : template2Data,
            type : 'file'
        })
        .then((res) => {
          console.log(templateListing2 + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let template3 = newFolderName + '/Templates/template3.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/template3.html', {

      })
      .then((res) => {
        let template3Data = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : template3,
            text : template3Data,
            type : 'file'
        })
        .then((res) => {
          console.log(template3 + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let template4 = newFolderName + '/Templates/template4.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/template4.html', {

      })
      .then((res) => {
        let template4Data = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : template4,
            text : template4Data,
            type : 'file'
        })
        .then((res) => {
          console.log(template4 + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let template5 = newFolderName + '/Templates/template5.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/template5.html', {

      })
      .then((res) => {
        let template5Data = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : template5,
            text : template5Data,
            type : 'file'
        })
        .then((res) => {
          console.log(template5 + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let productList = newFolderName + '/Templates/productList.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/productlist.html', {

      })
      .then((res) => {
        let productListData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : productList,
            text : productListData,
            type : 'file'
        })
        .then((res) => {
          console.log(productList + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let landscape = newFolderName + '/Templates/landscape.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/landscape.html', {

      })
      .then((res) => {
        let landscapeData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : landscape,
            text : landscapeData,
            type : 'file'
        })
        .then((res) => {
          console.log(landscape + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let creative = newFolderName + '/Templates/creative.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/Templates/creative.html', {

      })
      .then((res) => {
        let creativeData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : creative,
            text : creativeData,
            type : 'file'
        })
        .then((res) => {
          console.log(creative + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let globalVariablesPlugin = newFolderName + '/assets/client-plugins/global-variables-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/global-variables-plugin.js', {

      })
      .then((res) => {
        let globalVariablesPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : globalVariablesPlugin,
            text : globalVariablesPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(globalVariablesPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Progress bars plugin
      let progressBarsPlugin = newFolderName + '/assets/client-plugins/progress-bars.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/progress-bars.js', {

      })
      .then((res) => {
        let progressBarsPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : progressBarsPlugin,
            text : progressBarsPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(progressBarsPlugin + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });

      // Client1 file adding
      let ClientJs = newFolderName + '/assets/client-plugins/client1.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/client1.js', {

      })
      .then((res) => {
        let client1Data = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : client1,
            text : client1Data,
            type : 'file'
        })
        .then((res) => {
          console.log(client1 + ' file created');
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      });



      // My Cart Plugin
      let myCartPlugin = newFolderName + '/assets/client-plugins/client-my-cart-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.pluginsPath + '/js/client-my-cart-plugin.js', {

      })
      .then((res) => {
        let myCartPluginData = res.data;
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : myCartPlugin,
            text : myCartPluginData,
            type : 'file'
        })
        .then((res) => {
          console.log(myCartPlugin + ' file created');
          this.$message({
              showClose: true,
              message: 'Project Created!',
              type: 'success'
          });
        })
        .catch((e) => {
            console.log(e)
        })
      })
      .catch((e) => {
          console.log(e)
      })
    },

    // Create new File
    async addFile(formName){
      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let foldername = urlparts[urlparts.length - 1];
      // let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 1];
      var folderUrl = configFileUrl.replace(fileName, '');

      let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');

      this.layoutSettings = JSON.parse(configData.data);
      // console.log("check for hbs")

      console.log("file is being added:")
      this.$refs[formName].validate((valid) => {
          if (valid) {
              this.addNewFileLoading = true
              var name=this.formAddFile.filename;
              var newfilename = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddFile.filename
              return axios.post(config.baseURL + '/flows-dir-listing', {
                  filename : newfilename,
                  text : ' ',
                  type : 'file'
              })
              .then( (res) => {

                  // For ReUse Component
                  let currentFile_path = this.currentFile.path.split('/');

                  var last_element = currentFile_path[currentFile_path.length - 1];

                  if (last_element == "Templates") {
                    var Templates = JSON.parse(localStorage.getItem("Templates"));
                    var temp_filename = this.formAddFile.filename;
                    var new_name = temp_filename.replace(".html","")
                    Templates.push(new_name)
                    localStorage.setItem("Templates", JSON.stringify(Templates));
                  }


                  console.log(res)
                  this.newFileDialog = false
                  this.addNewFileLoading = false
                  this.formAddFile.filename = null

                  // this.saveFile()
                   // let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf(foldername) + foldername.length+1, this.currentFile.path.replace(/\\/g, "\/").indexOf('.'));
                    let temp = {
                        value: name.split('.')[0],
                        label: name.split('.')[0]
                    }
                      let checkValue = false;
                      var namefolder=this.currentFile.path.replace(/\\/g, "\/").split('/')
                      namefolder=namefolder[namefolder.length - 1 ]
                      console.log("foldername:",namefolder)
                      if (this.layoutSettings[2].layoutOptions[0][namefolder]) {
                          console.log("folder already exist in config file;")
                          for (var i = 0; i < this.layoutSettings[2].layoutOptions[0][namefolder].length; i++) {
                              var obj = this.layoutSettings[2].layoutOptions[0][namefolder][i];
                              if ((obj.label) == name) {
                                  checkValue = true;
                              }
                          }
                          if (checkValue == true) {
                              console.log("file already exists in config file;")
                          } else {
                              this.layoutSettings[2].layoutOptions[0][namefolder].push(temp);

                              // saveConfigFile
                              this.saveConfigFile(folderUrl);
                          }

                      } else {
                          // this.layoutSettings[2].layoutOptions[0].put(foldername);
                          this.layoutSettings[2].layoutOptions[0][namefolder] = [];
                          this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                          this.saveConfigFile(folderUrl);
                      }
                      if(namefolder=='Pages'){
                        var PageSettings = {"PageName":name,"PageSEOTitle": "", "PageSEOKeywords": "", "PageSEODescription": "","PageLayout":"default","partials":[{"Header": "default"},{"Footer": "default" }]};
                        this.layoutSettings[1].pageSettings.push((PageSettings))
                        this.saveConfigFile(folderUrl);


                      }


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

    // Backup before metalsmith auto partials
    // addFile(formName){
    //   this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //           this.addNewFileLoading = true
    //           let newfilename = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddFile.filename
    //           return axios.post(config.baseURL + '/flows-dir-listing', {
    //               filename : newfilename,
    //               text : ' ',
    //               type : 'file'
    //           })
    //           .then((res) => {
    //               let currentFile_path = this.currentFile.path.split('/');

    //               var last_element = currentFile_path[currentFile_path.length - 1];

    //               if (last_element == "Templates") {
    //                 var Templates = JSON.parse(localStorage.getItem("Templates"));
    //                 var temp_filename = this.formAddFile.filename;
    //                 var new_name = temp_filename.replace(".html","")
    //                 Templates.push(new_name)
    //                 localStorage.setItem("Templates", JSON.stringify(Templates));
    //               }

    //               console.log(res);
    //               this.newFileDialog = false
    //               this.addNewFileLoading = false
    //               this.formAddFile.filename = null
    //           })
    //           .catch((e) => {
    //               console.log(e)
    //           })
    //       } else {
    //           console.log('error submit!!');
    //           return false;
    //       }
    //   });
    // },

    // Save file with autometalsmith folders from layout and hbs file
    saveFile (){
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
                // this.saveLayoutFile();
                break;
        }

        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : this.currentFile.path.replace(/\\/g, "\/"),
            text : newContent,
            type : 'file'
        })
        .then(async (res) => {
            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'File Saved!',
                type: 'success'
            });
            if (this.currentFile.path.replace(/\\/g, "\/").match('Footer')) {
                let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
                let urlparts = configFileUrl.split("/");
                let fileNameOrginal = urlparts[urlparts.length-1];
                let foldername = urlparts[urlparts.length - 2];
                let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
                var folderUrl = configFileUrl.replace(fileName, '');
                let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');

                this.layoutSettings = JSON.parse(configData.data);
                let checkValue = false;
                  if (fileName.search('hbs') != -1) {
                      console.log("hello from hbs file")
                      var content = this.$store.state.content;
                      // console.log("content of grid",content);
                      var getFromBetween = {
                          results: [],
                          string: "",
                          getFromBetween: function(sub1, sub2) {
                              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                              var SP = this.string.indexOf(sub1) + sub1.length;
                              var string1 = this.string.substr(0, SP);
                              var string2 = this.string.substr(SP);
                              var TP = string1.length + string2.indexOf(sub2);
                              return this.string.substring(SP, TP);
                          },
                          removeFromBetween: function(sub1, sub2) {
                              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                              var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
                              this.string = this.string.replace(removal, "");
                          },
                          getAllResults: function(sub1, sub2) {
                              // first check to see if we do have both substrings
                              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
                              // find one result
                              var result = this.getFromBetween(sub1, sub2);
                              // push it to the results array
                              this.results.push(result);
                              // remove the most recently found one from the string
                              this.removeFromBetween(sub1, sub2);
                              // if there's more substrings
                              if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
                                  this.getAllResults(sub1, sub2);
                              } else return;
                          },
                          get: function(string, sub1, sub2) {
                              this.results = [];
                              this.string = string;
                              this.getAllResults(sub1, sub2);
                              return this.results;
                          }
                      };
                      var result = (getFromBetween.get(content, "{{>", "}}"));
                      console.log(result);
                      var resultParam = result
                      var DefaultParams = [];
                      for (let i = 0; i < resultParam.length; i++) {
                          var temp;
                          temp = resultParam[i].trim()
                          result[i] = result[i].trim()
                          temp = temp.replace(/&nbsp;/g, ' ')
                          temp = temp.replace(/\s+/g, ' ');
                          temp = temp.split(' ')
                          console.log("temp", temp)
                          for (let j = 0; j < temp.length; j++) {
                              console.log("temp[", j, "]:", temp[j])
                              if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                  // console.log("condition check value:",temp[j+1],':-',temp[j+1].search('.'))
                                  if (temp[j + 1] != undefined) {
                                      console.log("!=undefined")
                                      console.log("temp[j]:", temp[j])
                                      console.log("temp[j+1]:", temp[j + 1])
                                      result[i] = temp[0];
                                      if (temp[j + 1].indexOf('.') > -1) {
                                          console.log("inside ")
                                          let x = temp[j + 1]
                                          x = temp[j + 1].split(/'/)[1];
                                          let obj = {}
                                          obj[temp[0]] = x
                                          DefaultParams.push(obj)
                                          break;
                                      }
                                  } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                      console.log("temp[j]:", temp[j])
                                      console.log("temp[j+1]:", temp[j + 1])
                                      result[i] = temp[0];
                                      if (temp[j]) {
                                          console.log("inside ")
                                          let x = temp[j]
                                          x = temp[j].split(/'/)[1];
                                          let obj = {}
                                          obj[temp[0]] = x
                                          DefaultParams.push(obj)
                                          break;
                                      }
                                  }
                              }
                              console.log("temp at end of j loop:", temp)
                          }
                      }
                      console.log("DefaultParams:", DefaultParams);
                      /*****
                        adding new code for prompt
                      ******/
                      // var promptArray=[]
                      var foldernameKey = Object.keys(this.layoutSettings[2].layoutOptions[0])
                      console.log("foldernameKey", foldernameKey)
                      for (var i = 0; i < result.length; i++) {
                          var check = false;
                          for (var j = 0; j < foldernameKey.length; j++) {
                              console.log("result:", result[i])
                              if (result[i] == foldernameKey[j]) {
                                  check = true
                              }
                          }
                          if (check == false) {
                              // this.addNewPartialFolder(result[i].trim())
                              this.form.namearray.push(result[i])
                              // this.form.checked.push(result[i])
                              // this.form.checked.push(result[i])
                              console.log("new partial found:",this.form.namearray)
                          }
                        }
                          /**
                            prompt user here
                          **/

                          console.log("namearray content:",this.form.namearray)
                          if(this.form.namearray.length>0){
                          this.dialogFormVisible=true
                          }
                          else{
                            let totalPartial = content.match(/{{>/g).length;
                          // console.log("totalPartial",totalPartial);
                          console.log('filename:', fileNameOrginal)
                          // console.log('redefined:',fileNameOrginal.split('.')[0])
                          // console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))
                          let namefile = fileNameOrginal.split('.')[0];
                          let namefolder = foldername;
                          console.log("namefile:", namefile.trim())
                          console.log("namefolder:", namefolder.trim())
                          let temp = {
                              value: namefile,
                              label: namefile,
                              partialsList: result,
                              defaultList: DefaultParams
                          }
                          let checkValue = false;
                          for (var i = 0; i < Object.keys(this.layoutSettings[2].layoutOptions[0]).length; i++) {
                              var obj = Object.keys(this.layoutSettings[2].layoutOptions[0])[i];
                              console.log("obj:", obj)
                              if ((obj) == namefolder) {
                                  checkValue = true;
                                  // obj.partialsList=result
                                  console.log("selected obj:", obj)
                                  // let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0],{'label':namefolder});
                              }
                          }
                          if (checkValue == true) {
                              // let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0],{'label':name});
                              // console.log("index of change in existing",namefolder)
                              console.log("content of currentFileIndex", this.layoutSettings[2].layoutOptions[0][namefolder])
                              let checkFileNamevalue = false;
                              for (let j = 0; j < this.layoutSettings[2].layoutOptions[0][namefolder].length; j++) {
                                  if (this.layoutSettings[2].layoutOptions[0][namefolder][j].label == namefile) {
                                      checkFileNamevalue = true
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].partialsList = [];
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].defaultList = [];
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].partialsList = result;
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].defaultList = DefaultParams;
                                  }
                              }
                              if (checkFileNamevalue != true) {
                                  console.log("file not found inside currentFileIndex, hence formed new")
                                  this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                              }
                              // this.layoutSettings[2].layoutOptions[0].layouts[currentFileIndex].value=result.value;
                              // console.log("partials",this.layoutSettings[2].layoutOptions[0][currentFileIndex][].partialsList)
                              console.log("file already exists")
                              this.saveConfigFile(folderUrl);
                          } else {
                              console.log('file doesnt exists');
                              // this.$store.state.LayoutOptions.push(temp);
                              // this.layoutSettings[2].layoutOptions[0][namefolder]=[];
                              // this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                              // saveConfigFile
                              this.saveConfigFile(folderUrl);
                          }
                          }
                          console.log("back from dialog pop up")


                  } else {
                console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))
                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Footer/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
                let temp = {
                    value: name,
                    label: name
                }
                let checkValue = false;
                for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Footer.length; i++) {
                    var obj = this.layoutSettings[2].layoutOptions[0].Footer[i];
                    if ((obj.label) == name) {
                        checkValue = true;
                    }
                }
                if (checkValue == true) {
                    console.log("file already exists")
                } else {
                    console.log('file doesnt exists');
                    // this.$store.state.FooterOptions.push(temp);
                    this.layoutSettings[2].layoutOptions[0].Footer.push(temp);

                    // saveConfigFile
                    this.saveConfigFile(folderUrl);
                }
              }

            } else if (this.currentFile.path.replace(/\\/g, "\/").match('Layout')) {
              let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
              let urlparts = configFileUrl.split("/");
              let fileNameOrginal = urlparts[urlparts.length-1];
              let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
              var folderUrl = configFileUrl.replace(fileName, '');
              let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');

              this.layoutSettings = JSON.parse(configData.data);
              var content=this.$store.state.content;
                // console.log("content of grid",content);
                var getFromBetween = {
                results:[],
                string:"",
                getFromBetween:function (sub1,sub2) {
                    if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                    var SP = this.string.indexOf(sub1)+sub1.length;
                    var string1 = this.string.substr(0,SP);
                    var string2 = this.string.substr(SP);
                    var TP = string1.length + string2.indexOf(sub2);
                    return this.string.substring(SP,TP);
                },
                removeFromBetween:function (sub1,sub2) {
                    if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                    var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
                    this.string = this.string.replace(removal,"");
                },
                getAllResults:function (sub1,sub2) {
                    // first check to see if we do have both substrings
                    if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
                    // find one result
                    var result = this.getFromBetween(sub1,sub2);
                    // push it to the results array
                    this.results.push(result);
                    // remove the most recently found one from the string
                    this.removeFromBetween(sub1,sub2);
                    // if there's more substrings
                    if(this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
                        this.getAllResults(sub1,sub2);
                    }
                    else return;
                },
                get:function (string,sub1,sub2) {
                    this.results = [];
                    this.string = string;
                    this.getAllResults(sub1,sub2);
                    return this.results;
                }
                };
                var result = (getFromBetween.get(content,"{{>","}}"));
                console.log(result);
                var resultParam=result
                var DefaultParams=[];
                for(let i=0;i<resultParam.length;i++){
                  var temp;
                  temp=resultParam[i].trim()
                  result[i]=result[i].trim()
                  temp = temp.replace(/&nbsp;/g, ' ')
                  temp = temp.replace(/\s+/g, ' ');
                  temp=temp.split(' ')
                  console.log("temp",temp)
                  for(let j=0;j<temp.length;j++){
                    console.log("temp[",j,"]:",temp[j])
                    if ((temp[j].indexOf('id')!=-1 || temp[j].indexOf('=')!=-1)  ) {
                      // console.log("condition check value:",temp[j+1],':-',temp[j+1].search('.'))
                      if( temp[j+1]!=undefined){
                       console.log("!=undefined")
                        console.log("temp[j]:",temp[j])
                        console.log("temp[j+1]:",temp[j+1])
                            result[i]=temp[0];
                        if(temp[j+1].indexOf('.')>-1)
                        {
                          console.log("inside ")
                          let x=temp[j+1]
                          x=temp[j+1].split(/'/)[1];
                          let obj={}
                          obj[temp[0]]=x
                          DefaultParams.push(obj)
                          break;
                        }
                      }
                      else if((temp[j].indexOf('.')>-1) && (temp[j+1]==undefined )){
                        console.log("temp[j]:",temp[j])
                        console.log("temp[j+1]:",temp[j+1])
                        result[i]=temp[0];
                        if(temp[j])
                        {
                          console.log("inside ")
                          let x=temp[j]
                          x=temp[j].split(/'/)[1];
                          let obj={}
                          obj[temp[0]]=x
                          DefaultParams.push(obj)
                          break;
                        }
                      }
                    }
                    console.log("temp at end of j loop:",temp)
                  }
                }

                console.log("DefaultParams:",DefaultParams);
                let totalPartial=content.match(/{{>/g).length;
                // console.log("totalPartial",totalPartial);
                // console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))
                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Layout/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.layout'));
                let temp = {
                    value: name,
                    label: name,
                    partialsList: result,
                    defaultList: DefaultParams

                }

                let checkValue = false;
                for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Layout.length; i++) {
                    var obj = this.layoutSettings[2].layoutOptions[0].Layout[i];
                    if ((obj.label) == name) {
                        checkValue = true;
                        // obj.partialsList=result
                    }
                }
                if (checkValue == true) {
                  console.log("name",name)
                    let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0].Layout,{'label':name});
                    console.log("index of change in existing",currentFileIndex)
                    this.layoutSettings[2].layoutOptions[0].Layout[currentFileIndex].partialsList=result;
                    this.layoutSettings[2].layoutOptions[0].Layout[currentFileIndex].defaultList=DefaultParams;
                    // this.layoutSettings[2].layoutOptions[0].layouts[currentFileIndex].value=result.value;
                    console.log("partials",this.layoutSettings[2].layoutOptions[0].Layout[currentFileIndex].partialsList)
                    console.log("file already exists")
                    this.saveConfigFile(folderUrl);
                } else {
                    console.log('file doesnt exists');
                    // this.$store.state.LayoutOptions.push(temp);
                    this.layoutSettings[2].layoutOptions[0].Layout.push(temp);

                    // saveConfigFile
                    this.saveConfigFile(folderUrl);
                }
                var foldernameKey= Object.keys(this.layoutSettings[2].layoutOptions[0])
                console.log("foldernameKey",foldernameKey)
                for(var i=0;i<result.length;i++){
                 var check=false ;
                  for(var j=0;j<foldernameKey.length;j++)
                  { console.log("result:",result[i])
                    if (result[i]==foldernameKey[j]) {
                      check=true
                    }
                  }
                  if (check==false) {
                    // this.addNewPartialFolder(result[i].trim())
                    console.log("calling function to addNewPartialFolder with following name",result[i])
                    let newName=result[i]
                    let newFolderName = folderUrl+ '/' + result[i];
                     axios.post(config.baseURL + '/flows-dir-listing', {
                        foldername : newFolderName,
                        type : 'folder'
                    })
                    .then((res) => {
                        console.log(res)
                        this.newFolderDialog = false
                        this.addNewFolderLoading = false
                        let x=newName
                        console.log("x",x)
                        // this.layoutSettings[2].layoutOptions[0][x]=[];

                        // this.saveConfigFile(folderUrl);
                        this.addNewFileLoading = true

                        let newfilename = newFolderName + '/default.html'
                         axios.post(config.baseURL + '/flows-dir-listing', {
                            filename : newfilename,
                            text : ' ',
                            type : 'file'
                        })
                        .then((res) => {
                            console.log(res)
                            this.newFileDialog = false
                            this.addNewFileLoading = false
                            this.formAddFile.filename = null
                             this.layoutSettings[2].layoutOptions[0][x]=[];
                             let temp = {
                                    value: "default",
                                    label: "default"
                                }
                              this.layoutSettings[2].layoutOptions[0][x].push(temp)
                              this.saveConfigFile(folderUrl);
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                        // this.layoutSettings[2].layoutOptions[0].push(result[i].trim())
                        // this.saveConfigFile(folderUrl);
                    })
                    .catch((e) => {
                        console.log(e)
                    })
                  }
               }
            } else {
                let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
                let urlparts = configFileUrl.split("/");
                let fileNameOrginal = urlparts[urlparts.length - 1];
                let foldername = urlparts[urlparts.length - 2];
                let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
                var folderUrl = configFileUrl.replace(fileName, '');
                let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
                this.layoutSettings = JSON.parse(configData.data);
                console.log("check for hbs")
                let checkValue = false;
                  if (fileName.search('hbs') != -1) {
                      console.log("hello from hbs file")
                      var content = this.$store.state.content;
                      // console.log("content of grid",content);
                      var getFromBetween = {
                          results: [],
                          string: "",
                          getFromBetween: function(sub1, sub2) {
                              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                              var SP = this.string.indexOf(sub1) + sub1.length;
                              var string1 = this.string.substr(0, SP);
                              var string2 = this.string.substr(SP);
                              var TP = string1.length + string2.indexOf(sub2);
                              return this.string.substring(SP, TP);
                          },
                          removeFromBetween: function(sub1, sub2) {
                              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                              var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
                              this.string = this.string.replace(removal, "");
                          },
                          getAllResults: function(sub1, sub2) {
                              // first check to see if we do have both substrings
                              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
                              // find one result
                              var result = this.getFromBetween(sub1, sub2);
                              // push it to the results array
                              this.results.push(result);
                              // remove the most recently found one from the string
                              this.removeFromBetween(sub1, sub2);
                              // if there's more substrings
                              if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
                                  this.getAllResults(sub1, sub2);
                              } else return;
                          },
                          get: function(string, sub1, sub2) {
                              this.results = [];
                              this.string = string;
                              this.getAllResults(sub1, sub2);
                              return this.results;
                          }
                      };
                      var result = (getFromBetween.get(content, "{{>", "}}"));
                      console.log(result);
                      var resultParam = result
                      var DefaultParams = [];
                      for (let i = 0; i < resultParam.length; i++) {
                          var temp;
                          temp = resultParam[i].trim()
                          result[i] = result[i].trim()
                          temp = temp.replace(/&nbsp;/g, ' ')
                          temp = temp.replace(/\s+/g, ' ');
                          temp = temp.split(' ')
                          console.log("temp", temp)
                          for (let j = 0; j < temp.length; j++) {
                              console.log("temp[", j, "]:", temp[j])
                              if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                  // console.log("condition check value:",temp[j+1],':-',temp[j+1].search('.'))
                                  if (temp[j + 1] != undefined) {
                                      console.log("!=undefined")
                                      console.log("temp[j]:", temp[j])
                                      console.log("temp[j+1]:", temp[j + 1])
                                      result[i] = temp[0];
                                      if (temp[j + 1].indexOf('.') > -1) {
                                          console.log("inside ")
                                          let x = temp[j + 1]
                                          x = temp[j + 1].split(/'/)[1];
                                          let obj = {}
                                          obj[temp[0]] = x
                                          DefaultParams.push(obj)
                                          break;
                                      }
                                  } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                      console.log("temp[j]:", temp[j])
                                      console.log("temp[j+1]:", temp[j + 1])
                                      result[i] = temp[0];
                                      if (temp[j]) {
                                          console.log("inside ")
                                          let x = temp[j]
                                          x = temp[j].split(/'/)[1];
                                          let obj = {}
                                          obj[temp[0]] = x
                                          DefaultParams.push(obj)
                                          break;
                                      }
                                  }
                              }
                              console.log("temp at end of j loop:", temp)
                          }
                      }
                      console.log("DefaultParams:", DefaultParams);
                      /*****
                        adding new code for prompt
                      ******/
                      // var promptArray=[]
                      var foldernameKey = Object.keys(this.layoutSettings[2].layoutOptions[0])
                      console.log("foldernameKey", foldernameKey)
                      for (var i = 0; i < result.length; i++) {
                          var check = false;
                          for (var j = 0; j < foldernameKey.length; j++) {
                              console.log("result:", result[i])
                              if (result[i] == foldernameKey[j]) {
                                  check = true
                              }
                          }
                          if (check == false) {
                              // this.addNewPartialFolder(result[i].trim())
                              this.form.namearray.push(result[i])
                              // this.form.checked.push(result[i])
                              // this.form.checked.push(result[i])
                              console.log("new partial found:",this.form.namearray)
                          }
                        }
                          /**
                            prompt user here
                          **/

                          console.log("namearray content:",this.form.namearray)
                          if(this.form.namearray.length>0){
                            console.log('Name array is filled, Inside');
                          this.dialogFormVisible=true
                          }
                          else{
                            let totalPartial = content.match(/{{>/g).length;
                          // console.log("totalPartial",totalPartial);
                          console.log('filename:', fileNameOrginal)
                          // console.log('redefined:',fileNameOrginal.split('.')[0])
                          // console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))
                          let namefile = fileNameOrginal.split('.')[0];
                          let namefolder = foldername;
                          console.log("namefile:", namefile.trim())
                          console.log("namefolder:", namefolder.trim())
                          let temp = {
                              value: namefile,
                              label: namefile,
                              partialsList: result,
                              defaultList: DefaultParams
                          }
                          let checkValue = false;
                          for (var i = 0; i < Object.keys(this.layoutSettings[2].layoutOptions[0]).length; i++) {
                              var obj = Object.keys(this.layoutSettings[2].layoutOptions[0])[i];
                              console.log("obj:", obj)
                              if ((obj) == namefolder) {
                                  checkValue = true;
                                  // obj.partialsList=result
                                  console.log("selected obj:", obj)
                                  // let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0],{'label':namefolder});
                              }
                          }
                          if (checkValue == true) {
                              // let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0],{'label':name});
                              // console.log("index of change in existing",namefolder)
                              console.log("content of currentFileIndex", this.layoutSettings[2].layoutOptions[0][namefolder])
                              let checkFileNamevalue = false;
                              for (let j = 0; j < this.layoutSettings[2].layoutOptions[0][namefolder].length; j++) {
                                  if (this.layoutSettings[2].layoutOptions[0][namefolder][j].label == namefile) {
                                      checkFileNamevalue = true
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].partialsList = [];
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].defaultList = [];
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].partialsList = result;
                                      this.layoutSettings[2].layoutOptions[0][namefolder][j].defaultList = DefaultParams;
                                  }
                              }
                              if (checkFileNamevalue != true) {
                                  console.log("file not found inside currentFileIndex, hence formed new")
                                  this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                              }
                              // this.layoutSettings[2].layoutOptions[0].layouts[currentFileIndex].value=result.value;
                              // console.log("partials",this.layoutSettings[2].layoutOptions[0][currentFileIndex][].partialsList)
                              console.log("file already exists")
                              this.saveConfigFile(folderUrl);
                          } else {
                              console.log('file doesnt exists');
                              // this.$store.state.LayoutOptions.push(temp);
                              // this.layoutSettings[2].layoutOptions[0][namefolder]=[];
                              // this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                              // saveConfigFile
                              this.saveConfigFile(folderUrl);
                          }
                          }
                          console.log("back from dialog pop up")

                  } else {
                    let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf(foldername) + foldername.length+1, this.currentFile.path.replace(/\\/g, "\/").indexOf('.'));
                    let temp = {
                        value: name,
                        label: name
                    }
                      let checkValue = false;
                      if (this.layoutSettings[2].layoutOptions[0][foldername]) {
                          console.log("it already exist in config file;")
                          for (var i = 0; i < this.layoutSettings[2].layoutOptions[0][foldername].length; i++) {
                              var obj = this.layoutSettings[2].layoutOptions[0][foldername][i];
                              if ((obj.label) == name) {
                                  checkValue = true;
                              }
                          }
                          if (checkValue == true) {
                              console.log("file already exists")
                          } else {
                              this.layoutSettings[2].layoutOptions[0][foldername].push(temp);
                              // saveConfigFile
                              this.saveConfigFile(folderUrl);
                          }
                      } else {
                          // this.layoutSettings[2].layoutOptions[0].put(foldername);
                          this.layoutSettings[2].layoutOptions[0][foldername] = [];
                          this.layoutSettings[2].layoutOptions[0][foldername].push(temp)
                          this.saveConfigFile(folderUrl);
                      }
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
                this.form.checked = [];
                this.form.namearray = [];
          },

    // New Partials confirmation dialog
    async dialogFormVisibleAdd() {
      console.log("from add")
      console.log("this.form.checked:", this.form.checked)
      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let foldername = urlparts[urlparts.length - 2];
      let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      var folderUrl = configFileUrl.replace(fileName, '');
      var content = this.$store.state.content;
      let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      var getFromBetween = {
        results: [],
        string: "",
        getFromBetween: function(sub1, sub2) {
          if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
          var SP = this.string.indexOf(sub1) + sub1.length;
          var string1 = this.string.substr(0, SP);
          var string2 = this.string.substr(SP);
          var TP = string1.length + string2.indexOf(sub2);
          return this.string.substring(SP, TP);
        },
        removeFromBetween: function(sub1, sub2) {
          if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
          var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
          this.string = this.string.replace(removal, "");
        },
        getAllResults: function(sub1, sub2) {
          // first check to see if we do have both substrings
          if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
          // find one result
          var result = this.getFromBetween(sub1, sub2);
          // push it to the results array
          this.results.push(result);
          // remove the most recently found one from the string
          this.removeFromBetween(sub1, sub2);
          // if there's more substrings
          if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
            this.getAllResults(sub1, sub2);
          } else return;
        },
        get: function(string, sub1, sub2) {
          this.results = [];
          this.string = string;
          this.getAllResults(sub1, sub2);
          return this.results;
        }
      };
      var result = (getFromBetween.get(content, "{{>", "}}"));
      console.log(result);
      var resultParam = result
      var DefaultParams = [];
      for (let i = 0; i < resultParam.length; i++) {
        var temp;
        temp = resultParam[i].trim()
        result[i] = result[i].trim()
        temp = temp.replace(/&nbsp;/g, ' ')
        temp = temp.replace(/\s+/g, ' ');
        temp = temp.split(' ')
        console.log("temp", temp)
        for (let j = 0; j < temp.length; j++) {
          console.log("temp[", j, "]:", temp[j])
          if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
            // console.log("condition check value:",temp[j+1],':-',temp[j+1].search('.'))
            if (temp[j + 1] != undefined) {
              console.log("!=undefined")
              console.log("temp[j]:", temp[j])
              console.log("temp[j+1]:", temp[j + 1])
              result[i] = temp[0];
              if (temp[j + 1].indexOf('.') > -1) {
                console.log("inside ")
                let x = temp[j + 1]
                x = temp[j + 1].split(/'/)[1];
                let obj = {}
                obj[temp[0]] = x
                DefaultParams.push(obj)
                break;
              }
            } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
              console.log("temp[j]:", temp[j])
              console.log("temp[j+1]:", temp[j + 1])
              result[i] = temp[0];
              if (temp[j]) {
                console.log("inside ")
                let x = temp[j]
                x = temp[j].split(/'/)[1];
                let obj = {}
                obj[temp[0]] = x
                DefaultParams.push(obj)
                break;
              }
            }
          }
          console.log("temp at end of j loop:", temp)
        }
      }
      this.layoutSettings = JSON.parse(configData.data);
      console.log("this.form.checked:", Object.keys(this.form.checked))
      console.log("this.form.checked length:", Object.keys(this.form.checked).length)
        // console.log("inside add")
      if (Object.keys(this.form.checked).length > 0) {
        console.log("namearray found not equal to -1")
        for (let k = 0; k < Object.keys(this.form.checked).length; k++) {
          console.log("calling function to addNewPartialFolder with following name:", Object.keys(this.form.checked)[k])
          let newName = Object.keys(this.form.checked)[k]
          let newFolderName = folderUrl + '/' + Object.keys(this.form.checked)[k];
          axios.post(config.baseURL + '/flows-dir-listing', {
              foldername: newFolderName,
              type: 'folder'
            })
            .then((res) => {
              console.log(res)
              this.newFolderDialog = false
              this.addNewFolderLoading = false
              let x = newName
              console.log("x", x)
                // this.layoutSettings[2].layoutOptions[0][x]=[];
                // this.saveConfigFile(folderUrl);
              this.addNewFileLoading = true
              let newfilename = newFolderName + '/default.html'
              axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: newfilename,
                  text: ' ',
                  type: 'file'
                })
                .then((res) => {
                  console.log(res)
                  this.newFileDialog = false
                  this.addNewFileLoading = false
                  this.formAddFile.filename = null
                  this.layoutSettings[2].layoutOptions[0][x] = [];
                  let temp1 = {
                    value: "default",
                    label: "default"
                  }
                  this.layoutSettings[2].layoutOptions[0][x].push(temp1)
                  this.saveConfigFile(folderUrl);
                  /****
                  updating function
                  ***/
                  let totalPartial = content.match(/{{>/g).length;
                  // console.log("totalPartial",totalPartial);
                  console.log('filename:', fileNameOrginal)
                    // console.log('redefined:',fileNameOrginal.split('.')[0])
                    // console.log("html file saved:" + this.currentFile.path.replace(/\\/g, "\/"))
                  let namefile = fileNameOrginal.split('.')[0];
                  let namefolder = foldername;
                  console.log("namefile:", namefile.trim())
                  console.log("namefolder:", namefolder.trim())
                  let temp = {
                    value: namefile,
                    label: namefile,
                    partialsList: result,
                    defaultList: DefaultParams
                  }
                  let checkValue = false;
                  for (var i = 0; i < Object.keys(this.layoutSettings[2].layoutOptions[0]).length; i++) {
                    var obj = Object.keys(this.layoutSettings[2].layoutOptions[0])[i];
                    console.log("obj:", obj)
                    if ((obj) == namefolder) {
                      checkValue = true;
                      // obj.partialsList=result
                      console.log("selected obj:", obj)
                        // let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0],{'label':namefolder});
                    }
                  }
                  if (checkValue == true) {
                    // let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0],{'label':name});
                    // console.log("index of change in existing",namefolder)
                    console.log("content of currentFileIndex", this.layoutSettings[2].layoutOptions[0][namefolder])
                    let checkFileNamevalue = false;
                    for (let j = 0; j < this.layoutSettings[2].layoutOptions[0][namefolder].length; j++) {
                      if (this.layoutSettings[2].layoutOptions[0][namefolder][j].label == namefile) {
                        checkFileNamevalue = true
                        this.layoutSettings[2].layoutOptions[0][namefolder][j].partialsList = [];
                        this.layoutSettings[2].layoutOptions[0][namefolder][j].defaultList = [];
                        this.layoutSettings[2].layoutOptions[0][namefolder][j].partialsList = result;
                        this.layoutSettings[2].layoutOptions[0][namefolder][j].defaultList = DefaultParams;
                      }
                    }
                    if (checkFileNamevalue != true) {
                      console.log("file not found inside currentFileIndex, hence formed new")
                      this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                    }
                    // this.layoutSettings[2].layoutOptions[0].layouts[currentFileIndex].value=result.value;
                    // console.log("partials",this.layoutSettings[2].layoutOptions[0][currentFileIndex][].partialsList)
                    console.log("file already exists")
                    this.saveConfigFile(folderUrl);
                  } else {
                    console.log('file doesnt exists');
                    // this.$store.state.LayoutOptions.push(temp);
                    // this.layoutSettings[2].layoutOptions[0][namefolder]=[];
                    // this.layoutSettings[2].layoutOptions[0][namefolder].push(temp)
                    // saveConfigFile
                    this.saveConfigFile(folderUrl);
                  }
                })
                .catch((e) => {
                  console.log(e)
                })
                // this.layoutSettings[2].layoutOptions[0].push(result[i].trim())
                // this.saveConfigFile(folderUrl);
            })
            .catch((e) => {
              console.log(e)
            })
        }

        this.form.checked = []
        this.form.namearray = []
      }
      this.form.checked = []
      this.form.namearray = []
    },

    dialogFormVisibleCancel() {
      this.form.namearray = []
    },

    // Backup Before Demo 26 Oct
    // saveFile() {
    //   this.saveFileLoading = true
    //   let newContent = this.$store.state.content;
    //   switch (this.componentId) {
    //     case 'GrapesComponent':
    //       this.$refs.contentComponent.getHtml();
    //       newContent = this.$store.state.content;
    //       break;
    //     case 'json-viewer':
    //       newContent = JSON.stringify(this.$store.state.content);
    //       break;
    //     case 'GridManager':
    //       this.$refs.contentComponent.getHtml();
    //       newContent = this.$store.state.content;
    //       this.saveLayoutFile();
    //       break;
    //   }
    //   axios.post(config.baseURL + '/flows-dir-listing', {
    //     filename: this.currentFile.path.replace(/\\/g, "\/"),
    //     text: newContent,
    //     type: 'file'
    //   }).then(async(res) => {
    //     this.saveFileLoading = false
    //     this.$message({
    //       showClose: true,
    //       message: 'File Saved!',
    //       type: 'success'
    //     });
    //     if (this.currentFile.path.replace(/\\/g, "\/").match('Footer')) {
    //       let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //       let urlparts = configFileUrl.split("/");
    //       let fileNameOrginal = urlparts[urlparts.length - 1];
    //       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //       var folderUrl = configFileUrl.replace(fileName, '');
    //       let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //       this.layoutSettings = JSON.parse(configData.data);
    //       let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Footer/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
    //       let temp = {
    //         value: name,
    //         label: name
    //       }
    //       let checkValue = false;
    //       for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Footer.length; i++) {
    //         var obj = this.layoutSettings[2].layoutOptions[0].Footer[i];
    //         if ((obj.label) == name) {
    //           checkValue = true;
    //         }
    //       }
    //       if (checkValue == true) {
    //         console.log("File already exists")
    //       } else {
    //         console.log('File doesnt exists');
    //         this.layoutSettings[2].layoutOptions[0].Footer.push(temp);
    //         this.saveConfigFile(folderUrl);
    //       }
    //     } else if (this.currentFile.path.replace(/\\/g, "\/").match('Header')) {
    //       let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //       let urlparts = configFileUrl.split("/");
    //       let fileNameOrginal = urlparts[urlparts.length - 1];
    //       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //       var folderUrl = configFileUrl.replace(fileName, '');
    //       let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //       this.layoutSettings = JSON.parse(configData.data);
    //       let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Header/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
    //       let temp = {
    //         value: name,
    //         label: name
    //       }
    //       let checkValue = false;
    //       for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Header.length; i++) {
    //         var obj = this.layoutSettings[2].layoutOptions[0].Header[i];
    //         if ((obj.label) == name) {
    //           checkValue = true;
    //         }
    //       }
    //       if (checkValue == true) {
    //         console.log("file already exists")
    //       } else {
    //         this.layoutSettings[2].layoutOptions[0].Header.push(temp);
    //         this.saveConfigFile(folderUrl);
    //       }
    //     } else if (this.currentFile.path.replace(/\\/g, "\/").match('Sidebar')) {
    //       let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //       let urlparts = configFileUrl.split("/");
    //       let fileNameOrginal = urlparts[urlparts.length - 1];
    //       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //       var folderUrl = configFileUrl.replace(fileName, '');
    //       let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //       this.layoutSettings = JSON.parse(configData.data);
    //       let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Sidebar/') + 8, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
    //       let temp = {
    //         value: name,
    //         label: name
    //       }
    //       let checkValue = false;
    //       for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Sidebar.length; i++) {
    //         var obj = this.layoutSettings[2].layoutOptions[0].Sidebar[i];
    //         if ((obj.label) == name) {
    //           checkValue = true;
    //         }
    //       }
    //       if (checkValue == true) {
    //         console.log("file already exists")
    //       } else {
    //         this.layoutSettings[2].layoutOptions[0].Sidebar.push(temp);
    //         this.saveConfigFile(folderUrl);
    //       }
    //     } else if (this.currentFile.path.replace(/\\/g, "\/").match('Menu')) {
    //       let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //       let urlparts = configFileUrl.split("/");
    //       let fileNameOrginal = urlparts[urlparts.length - 1];
    //       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //       var folderUrl = configFileUrl.replace(fileName, '');
    //       let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //       this.layoutSettings = JSON.parse(configData.data);
    //       let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Menu/') + 5, this.currentFile.path.replace(/\\/g, "\/").indexOf('.html'));
    //       let temp = {
    //         value: name,
    //         label: name
    //       }
    //       let checkValue = false;
    //       for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Menu.length; i++) {
    //         var obj = this.layoutSettings[2].layoutOptions[0].Menu[i];
    //         if ((obj.label) == name) {
    //           checkValue = true;
    //         }
    //       }
    //       if (checkValue == true) {
    //         console.log("file already exists")
    //       } else {
    //         this.layoutSettings[2].layoutOptions[0].Menu.push(temp);
    //         this.saveConfigFile(folderUrl);
    //       }
    //     } else if (this.currentFile.path.replace(/\\/g, "\/").match('Layout')) {
    //       let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //       let urlparts = configFileUrl.split("/");
    //       let fileNameOrginal = urlparts[urlparts.length - 1];
    //       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //       var folderUrl = configFileUrl.replace(fileName, '');
    //       let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //       this.layoutSettings = JSON.parse(configData.data);
    //       var content = this.$store.state.content;
    //       var getFromBetween = {
    //         results: [],
    //         string: "",
    //         getFromBetween: function(sub1, sub2) {
    //           if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
    //           var SP = this.string.indexOf(sub1) + sub1.length;
    //           var string1 = this.string.substr(0, SP);
    //           var string2 = this.string.substr(SP);
    //           var TP = string1.length + string2.indexOf(sub2);
    //           return this.string.substring(SP, TP);
    //         },
    //         removeFromBetween: function(sub1, sub2) {
    //           if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
    //           var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
    //           this.string = this.string.replace(removal, "");
    //         },
    //         getAllResults: function(sub1, sub2) {
    //           if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
    //           var result = this.getFromBetween(sub1, sub2);
    //           this.results.push(result);
    //           this.removeFromBetween(sub1, sub2);
    //           if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
    //             this.getAllResults(sub1, sub2);
    //           } else return;
    //         },
    //         get: function(string, sub1, sub2) {
    //           this.results = [];
    //           this.string = string;
    //           this.getAllResults(sub1, sub2);
    //           return this.results;
    //         }
    //       };
    //       var result = (getFromBetween.get(content, "{{>", "}}"));
    //       var resultParam = result
    //       var DefaultParams = [];
    //       for(let i=0;i<resultParam.length;i++){
    //         var temp;
    //         temp=resultParam[i].trim()
    //         result[i]=result[i].trim();
    //         temp = temp.replace(/&nbsp;/g, ' ')
    //         temp = temp.replace(/\s+/g, ' ');
    //         temp=temp.split(' ')
    //         console.log("temp",temp)
    //         for(let j=0;j<temp.length;j++){
    //           console.log("temp[",j,"]:",temp[j])
    //           if ((temp[j].indexOf('id')!=-1 || temp[j].indexOf('=')!=-1)  ) {
    //             // console.log("condition check value:",temp[j+1],':-',temp[j+1].search('.'))
    //             if( temp[j+1]!=undefined){
    //              console.log("!=undefined")
    //               console.log("temp[j]:",temp[j])
    //               console.log("temp[j+1]:",temp[j+1])
    //                   result[i]=temp[0];
    //               if(temp[j+1].indexOf('.')>-1)
    //               {
    //                 console.log("inside ")
    //                 let x=temp[j+1]
    //                 x=temp[j+1].split(/'/)[1];
    //                 let obj={}
    //                 obj[temp[0]]=x
    //                 DefaultParams.push(obj)
    //                 break;
    //               }
    //             }
    //             else if((temp[j].indexOf('.')>-1) && (temp[j+1]==undefined )){
    //               console.log("temp[j]:",temp[j])
    //               console.log("temp[j+1]:",temp[j+1])
    //               result[i]=temp[0];
    //               if(temp[j])
    //               {
    //                 console.log("inside ")
    //                 let x=temp[j]
    //                 x=temp[j].split(/'/)[1];
    //                 let obj={}
    //                 obj[temp[0]]=x
    //                 DefaultParams.push(obj)
    //                 break;
    //               }
    //             }
    //           }
    //           console.log("temp at end of j loop:",temp)
    //         }
    //       }
    //       console.log("DefaultParams:",DefaultParams)
    //       let totalPartial = content.match(/{{>/g).length;
    //       let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Layout/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.layout'));
    //       let temp = {
    //         value: name,
    //         label: name,
    //         partialsList: result,
    //         defaultList: DefaultParams
    //       }
    //       let checkValue = false;
    //       for (var i = 0; i < this.layoutSettings[2].layoutOptions[0].Layout.length; i++) {
    //         var obj = this.layoutSettings[2].layoutOptions[0].Layout[i];
    //         if ((obj.label) == name) {
    //           checkValue = true;
    //         }
    //       }
    //       if (checkValue == true) {
    //         let currentFileIndex = daex.indexFirst(this.layoutSettings[2].layoutOptions[0].Layout, {
    //           'label': name
    //         });
    //         this.layoutSettings[2].layoutOptions[0].Layout[currentFileIndex].partialsList = result;
    //         this.layoutSettings[2].layoutOptions[0].Layout[currentFileIndex].defaultList = DefaultParams;
    //         this.saveConfigFile(folderUrl);
    //       } else {
    //         this.layoutSettings[2].layoutOptions[0].Layout.push(temp);
    //         this.saveConfigFile(folderUrl);
    //       }
    //       var foldernameKey = Object.keys(this.layoutSettings[2].layoutOptions[0]);
    //       for (var i = 0; i < result.length; i++) {
    //         var check = false;
    //         result[i]=result[i].trim();
    //         for (var j = 0; j < foldernameKey.length; j++) {
    //           if (result[i] == foldernameKey[j]) {
    //             check = true
    //           }
    //         }
    //         if (check == false) {
    //           let newName = result[i]
    //           let newFolderName = folderUrl + '/' + result[i];
    //           axios.post(config.baseURL + '/flows-dir-listing', {
    //             foldername: newFolderName,
    //             type: 'folder'
    //           }).then((res) => {
    //             this.newFolderDialog = false
    //             this.addNewFolderLoading = false
    //             let x = newName
    //             this.addNewFileLoading = true
    //             let newfilename = newFolderName + '/default.html'
    //             axios.post(config.baseURL + '/flows-dir-listing', {
    //               filename: newfilename,
    //               text: ' ',
    //               type: 'file'
    //             }).then((res) => {
    //               this.newFileDialog = false
    //               this.addNewFileLoading = false
    //               this.formAddFile.filename = null
    //               this.layoutSettings[2].layoutOptions[0][x] = [];
    //               let temp = {
    //                 value: "default",
    //                 label: "default"
    //               }
    //               this.layoutSettings[2].layoutOptions[0][x].push(temp)
    //               this.saveConfigFile(folderUrl);
    //             }).catch((e) => {
    //               console.log(e)
    //             })
    //           }).catch((e) => {
    //             console.log(e)
    //           })
    //         }
    //       }
    //     } else {
    //       let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //       let urlparts = configFileUrl.split("/");
    //       let fileNameOrginal = urlparts[urlparts.length - 1];
    //       let foldername = urlparts[urlparts.length - 2];
    //       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //       var folderUrl = configFileUrl.replace(fileName, '');
    //       let configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
    //       this.layoutSettings = JSON.parse(configData.data);
    //       let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf(foldername) + foldername.length + 1, this.currentFile.path.replace(/\\/g, "\/").indexOf('.'));
    //       let temp = {
    //         value: name,
    //         label: name
    //       }
    //       let checkValue = false;
    //       if (this.layoutSettings[2].layoutOptions[0][foldername]) {
    //         for (var i = 0; i < this.layoutSettings[2].layoutOptions[0][foldername].length; i++) {
    //           var obj = this.layoutSettings[2].layoutOptions[0][foldername][i];
    //           if ((obj.label) == name) {
    //             checkValue = true;
    //           }
    //         }
    //         if (checkValue == true) {
    //           console.log("File already exists")
    //         } else {
    //           this.layoutSettings[2].layoutOptions[0][foldername].push(temp);
    //           this.saveConfigFile(folderUrl);
    //         }
    //       } else {
    //         this.layoutSettings[2].layoutOptions[0][foldername] = [];
    //         this.layoutSettings[2].layoutOptions[0][foldername].push(temp)
    //         this.saveConfigFile(folderUrl);
    //       }
    //     }
    //   }).catch((e) => {
    //     this.saveFileLoading = false
    //     this.$message({
    //       showClose: true,
    //       message: 'File not saved! Please try again.',
    //       type: 'error'
    //     });
    //     console.log(e)
    //   })
    // },

    // Save Page settings (Not in use)
    async savePageSettings() {

      // console.log("entered save config of individual page:"+this.$store.state.fileUrl)
      // console.log("Header:"+this.form.Header)
      // console.log("Footer:"+this.form.Footer)
      // console.log("Layouts:"+this.PageLayout)
      let nameF=this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/')+6, this.$store.state.fileUrl.indexOf('.html'));

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length-1];
      let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
      var folderUrl = configFileUrl.replace(fileName, '');

      console.log("page name:"+nameF)
      let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl+'/assets/config.json');
      console.log("response:",response.data)
      let rawSettings = JSON.parse(response.data);
      // console.log("response of pageSettings:", rawSettings[0].pageSettings[0].PageName)

      // for (let i=0;i<rawSettings[0].pageSettings.length;i++)
      // {
      //   if(rawSettings[0].pageSettings[i].PageName == nameF)
      //   {
      //     console.log("file found in pageSettings")
      //     rawSettings[0].pageSettings[0].PageHeader=this.form.Header
      //     rawSettings[0].pageSettings[0].PageFooter=this.form.Footer
      //     rawSettings[0].pageSettings[0].PageLayout=this.PageLayout
      //   }
      // }

      // let pageSettingsFound = inArray( nameF, rawSettings[0].pageSettings[i].PageName );

      // if (pageSettingsFound < 0){
      //   rawSettings[0].pageSettings[0].PageHeader=this.form.Header
      //   rawSettings[0].pageSettings[0].PageFooter=this.form.Footer
      //   rawSettings[0].pageSettings[0].PageLayout=this.PageLayout
      // }

      let found=false;

      if(this.PageLayout === 'Blank'){
        console.log("indside blank:")
        for (let i=0;i<rawSettings[1].pageSettings.length;i++)
        {
          if(rawSettings[1].pageSettings[i].PageName == nameF)
          {
            console.log("file found in pageSettings")
            rawSettings[1].pageSettings[i].PageHeader='';
            rawSettings[1].pageSettings[i].PageFooter='';
            rawSettings[1].pageSettings[i].PageLayout=this.PageLayout;
            found=true;
          }
        }
        if(found==false)
        {
          var obj={
            PageName: nameF,
            PageHeader: '',
            PageFooter: '',
            PageLayout: this.PageLayout
          }
          rawSettings[1].pageSettings.push(obj);
          console.log("final pageSettings :",rawSettings[1].pageSettings)
        }
      } else if(this.PageLayout != 'Blank'){
        console.log("indside !blank:")
        if(this.form.Header === 'NOH'){
          for (let i=0;i<rawSettings[1].pageSettings.length;i++)
          {
            if(rawSettings[1].pageSettings[i].PageName == nameF)
            {
              console.log("file found in pageSettings")
              rawSettings[1].pageSettings[i].PageHeader='';
              rawSettings[1].pageSettings[i].PageFooter=this.form.Footer;
              rawSettings[1].pageSettings[i].PageLayout=this.PageLayout;
              found=true;
            }
          }
          if(found==false)
          {
            var obj={
              PageName: nameF,
              PageHeader: '',
              PageFooter: this.form.Footer,
              PageLayout: this.PageLayout
            }
            rawSettings[1].pageSettings.push(obj);
            console.log("final pageSettings :",rawSettings[1].pageSettings)
          }
        }
        else if(this.form.Footer === 'NOF')
        {

          for (let i=0;i<rawSettings[1].pageSettings.length;i++)
          {
            if(rawSettings[1].pageSettings[i].PageName == nameF)
            {
              console.log("file found in pageSettings")
              rawSettings[1].pageSettings[i].PageHeader=this.form.Header;
              rawSettings[1].pageSettings[i].PageFooter='';
              rawSettings[1].pageSettings[i].PageLayout=this.PageLayout;
              found=true;
            }
          }
          if(found==false)
          {
            var obj={
              PageName: nameF,
              PageHeader: this.form.Header,
              PageFooter: '',
              PageLayout: this.PageLayout
            }
            rawSettings[1].pageSettings.push(obj);
            console.log("final pageSettings :",rawSettings[1].pageSettings)
          }

        }
        else{
          for (let i=0;i<rawSettings[1].pageSettings.length;i++)
          {
            if(rawSettings[1].pageSettings[i].PageName == nameF)
            {
              console.log("file found in pageSettings")
              rawSettings[1].pageSettings[i].PageHeader=this.form.Header;
              rawSettings[1].pageSettings[i].PageFooter=this.form.Footer;
              rawSettings[1].pageSettings[i].PageLayout=this.PageLayout;
              found=true;
            }
          }
          if(found==false)
          {
            var obj={
              PageName: nameF,
              PageHeader: this.form.Header,
              PageFooter: this.form.Footer,
              PageLayout: this.PageLayout
            }
            rawSettings[1].pageSettings.push(obj);
            console.log("final pageSettings :",rawSettings[1].pageSettings)
          }
        }
        }
        // else{
        //   alert("enter the header and footer")
        // }

      //    if(this.form.Footer === 'NOF'&& this.form.Header != 'NOH'){
      //     for (let i=0;i<rawSettings[1].pageSettings.length;i++)
      //     {
      //       if(rawSettings[1].pageSettings[i].PageName == nameF)
      //       {
      //         console.log("file found in pageSettings")
      //         rawSettings[1].pageSettings[i].PageHeader=this.form.Header;
      //         rawSettings[1].pageSettings[i].PageFooter='';
      //         rawSettings[1].pageSettings[i].PageLayout=this.PageLayout;
      //         found=true;
      //       }
      //     }
      //     if(found==false)
      //     {
      //       var obj={
      //         PageName: nameF,
      //         PageHeader: this.form.Header,
      //         PageFooter: '',
      //         PageLayout: this.PageLayout
      //       }
      //       rawSettings[1].pageSettings.push(obj);
      //       console.log("final pageSettings :",rawSettings[1].pageSettings)
      //     }
      //   } else {

      //   }


      // for (let i=0;i<rawSettings[1].pageSettings.length;i++)
      // {
      //   if(rawSettings[1].pageSettings[i].PageName == nameF)
      //   {
      //     console.log("file found in pageSettings")
      //     rawSettings[1].pageSettings[i].PageHeader=this.form.Header
      //     rawSettings[1].pageSettings[i].PageFooter=this.form.Footer
      //     rawSettings[1].pageSettings[i].PageLayout=this.PageLayout
      //     found=true;
      //   }
      // }
      // if(found==false)
      // {
      //   var obj={
      //     PageName: nameF,
      //     PageHeader: this.form.Header,
      //     PageFooter: this.form.Footer,
      //     PageLayout: this.PageLayout
      //   }
      //   rawSettings[1].pageSettings.push(obj);
      //   console.log("final pageSettings :",rawSettings[1].pageSettings)
      // }

      return axios.post('http://localhost:3030/flows-dir-listing', {
            filename : folderUrl+'/assets/config.json',
            text : JSON.stringify(rawSettings),
            type : 'file'
        })
      .then((res) => {

            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'File Saved!',
                type: 'success'
            });

            // let newContent = this.$store.state.content;
            // if (this.PageLayout=='Blank') {
            //   if (newContent.match('---')) {
            //   let substr=newContent.substr(newContent.search('---'), newContent.search('<'))
            //     console.log("substr:"+substr)
            //     newContent=newContent.replace(substr,'')
            //     // console.log("newContent:"+newContent)
            //   }
            //   else{
            //     newContent=this.$store.state.content;
            //   }

            // }
            // else{
            //   let tempValueLayout='---\nlayout: '+this.PageLayout+'.layout\n---\n';

            //   console.log("tempValueLayout:"+tempValueLayout)

            //   if (newContent.match('---')) {
            //     let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
            //     console.log("substr:" + substr)
            //     newContent=newContent.replace(substr,tempValueLayout)
            //   } else{
            //     newContent = tempValueLayout+ this.$store.state.content;
            //   }




            //   // let tempValueLayout='---\nlayout: '+this.PageLayout+'.layout\n---\n'
            //   // console.log("tempValueLayout:"+tempValueLayout)
            //   // // this.$refs.contentComponent.getHtml();
            //   // if (newContent.match('---')) {
            //   // let substr=newContent.substr(newContent.search('---'), newContent.search('<'))
            //   //   console.log("substr:"+substr)
            //   //   newContent=newContent.replace(substr,'')
            //   //    newContent = tempValueLayout+ this.$store.state.content;
            //   //   // console.log("newContent:"+newContent)
            //   // }
            //   // else{
            //   // newContent = tempValueLayout+ this.$store.state.content;
            //   // }
            // }

            // this.PageLayout='';
            // this.form.Header='';
            // this.form.Footers='';

            //  return axios.post('http://localhost:3030/flows-dir-listing', {
            //       filename : this.$store.state.fileUrl,
            //       text : newContent,
            //       type : 'file'
            //   })
            //   .then((res) => {
            //       this.saveFileLoading = false
            //       this.$message({
            //           showClose: true,
            //           message: 'File Saved!',
            //           type: 'success'
            //       });
            //   })
            //   .catch((e) => {
            //       this.saveFileLoading = false
            //       this.$message({
            //           showClose: true,
            //           message: 'File not saved! Please try again.',
            //           type: 'error'
            //       // });
            //       console.log(e)
            //   })

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

    // Save config File
    saveConfigFile(folderUrl){

      let newJsonName = folderUrl + '/assets/config.json';

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : newJsonName ,
          text : JSON.stringify(this.layoutSettings),
          type : 'file'
      })
      .then((res) => {
        this.$message({
            showClose: true,
            message: 'File saved!',
            type: 'success'
        });
      })
      .catch((e) => {
          this.$message({
              showClose: true,
              message: 'File not saved! Please try again.',
              type: 'error'
          });
          console.log(e)
      })
    },

    // Save Menu's JSON file
    saveJsonFile: function(){
        this.saveFileLoading = true
        let newContent = this.$store.state.content;

        this.$refs.contentComponent.getMenuJson();
        newContent = this.$store.state.content;

        let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let urlparts = configFileUrl.split("/");
        let fileNameOrginal = urlparts[urlparts.length - 1];
        let fileNameParts = fileNameOrginal.split('.');
        let actualFileNameOnly = fileNameParts[0];
        let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        var folderUrl = configFileUrl.replace(fileName, '');
        console.log(this.$store.state.fileUrl.replace(/\\/g, "\/"));

        let newJsonName = folderUrl + '/assets/'+actualFileNameOnly+'.json';
        console.log(newJsonName);
        return axios.post(config.baseURL + '/flows-dir-listing', {
            filename : newJsonName ,
            text : newContent,
            type : 'file'
        })
        .then((res) => {
            this.saveFileLoading = false
            this.$message({
                showClose: true,
                message: 'Menu Saved!',
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

    goToGrapesEditor: function(){
      this.componentId = 'GrapesComponent';
      this.isPageCodeEditor = false;
    },

    // Remove File or Folder
    remove(store, data) {
      this.$swal({
      title: 'Are you sure?',
      text: 'You want you delete this file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
      }).then(() => {
          axios.delete(config.baseURL + '/flows-dir-listing/0?filename='+data.path.replace(/\\/g,"/"))
          .then((res) => {
              this.currentFile = null
              this.componentId = 'HomePage';
              console.log(res);

              let file_path_ = data.path
              let arr_file =file_path_.split('\\')

              var last_element = arr_file[arr_file.length - 1];

              var Templates = JSON.parse(localStorage.getItem("Templates"));

              var new_name = last_element.replace(".html","")

              Templates = [];
              Templates.pop(new_name)
              localStorage.setItem("Templates", JSON.stringify(Templates));

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

    async removeProject(store, data) {

      // Get Config File
      let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");

      let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      let rawConfigs = JSON.parse(responseConfig.data);
      let repositoryId = rawConfigs[0].repoSettings[0].RepositoryId;

      this.$swal({
      title: 'Are you sure?',
      text: 'You want you delete this file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
      }).then(() => {
          axios.delete(config.baseURL + '/flows-dir-listing/0?filename='+data.path.replace(/\\/g,"/"))
          .then(async (res) => {

            // Delete Repository from GitLab Server
            let response = await axios.get(config.baseURL + '/gitlab-add-repo/' + repositoryId + '?privateToken='+ this.$session.get('privateToken'), {
            })
            .then((response) => {
                console.log(response.data);
                this.$message({
                    showClose: true,
                    message: 'Project successfully deleted..!!',
                    type: 'success'
                });
                setTimeout(function(){
                  location.reload();
                }, 500);
            })
            .catch((e) => {
                console.log(e)
            });

            this.currentFile = null
            this.componentId = 'HomePage';
            console.log(res);
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

    // Displaying icons in tree nodes
    renderContent(h, { node, data, store }) {

      if(data.type=='directory' && node.label != 'websites'){
        // If node is a website project directory
        if(node.level == 2){
          return (<span>
                <span class="nodelabel" on-click={ () => this.isProjectStats = true }>
                    <i class="fa fa-globe" style="padding: 10px; color: #4A8AF4"></i>
                    <span>{node.label}</span>
                </span>
                <span class="action-button" style="float: right; padding-right: 5px;">
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
                      <i class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.removeProject(store, data) }></i>
                  </el-tooltip>
                </span>
            </span>)
        } else {
          // If it's a simple directory
          return(<span>
              <span class="nodelabel">
                  <i class="fa fa-folder" style="padding: 10px; color: #FFD500"></i>
                  <span>{node.label}</span>
              </span>
              <span class="action-button" style="float: right; padding-right: 5px;">
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
        // var filePath = data.path;
        // var pathParts = filePath.split('/');
        // var parentFolderName = pathParts[pathParts.length-2];

        // If it's a HTML file
        if(data.extension == '.html'){
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
        } else if(data.extension == '.layout'){
          // If it's a LAYOUT file
          return (<span>
              <span class="filelabel">
                  <i class="fa fa-file-text" style="padding: 10px; color: #4A8AF4"></i>
                  <span>{node.label}</span>
              </span>
              <span class="action-button">
                  <el-tooltip content="Remove" placement="top">
                      <i class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  </el-tooltip>
                  <el-tooltip content="Edit" placement="top">
                    <i class="fa fa-pencil" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #4A8AF4" on-click={ () => this.isEditOption = true }></i>
                  </el-tooltip>
              </span>
          </span>)
        } else {
          // All other files
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
        // Root Folder
        return (<span>
                  <span class="nodelabel">
                      <i class="fa fa-list-ul" style="padding: 10px; color: #333"></i>
                      <span>{node.label}</span>
                  </span>
                  <span class="">
                      <el-tooltip content="Create New Website" placement="top">
                          <i class="fa fa-folder-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right:5px;"  on-click={ () => this.newProjectFolderDialog = true }></i>
                      </el-tooltip>
                  </span>
              </span>)
      }
    },

    // Cancel and go back to dashboard
    cancelEditing() {
      this.componentId = 'HomePage';
      this.previewGrid = false;
      this.isHomePage = true;
    }

  },

  events: {
    saveFileFromChild: function (){
      console.log('File save from child');
      this.saveFile();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .clearfix {
    clear: both;
  }

  .header-banner {
      color: rgb(255, 255, 255);
      font-family: Helvetica, serif;
      font-weight: 100;
      background-image: url("/static/building-blocks.jpeg");
      background-attachment: scroll;
      background-position-x: center;
      background-position-y: center;
      background-repeat-x: no-repeat;
      background-repeat-y: no-repeat;
      background-size: cover;
      padding: 186px 0px 348px 0px;
  }

  .container-width {
      width: 90%;
      max-width: 1150px;
      margin-top: 0px;
      margin-right: auto;
      margin-bottom: 0px;
      margin-left: auto;
  }

  .lead-title {
      margin-top: 150px;
      margin-right: 0px;
      margin-bottom: 30px;
      margin-left: 0px;
      font-size: 40px;
  }

  .lead-btn {
      margin-top: 15px;
      padding-top: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      width: 190px;
      min-height: 30px;
      font-size: 20px;
      text-align: center;
      letter-spacing: 3px;
      line-height: 30px;
      background-color: rgb(217, 131, 166);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-delay: initial;
      transition-property: all;
      cursor: pointer;
  }

  .lead-btn:hover {
      background-color: rgb(255, 255, 255);
      color: rgb(76, 17, 78);
  }

  .lead-btn:active {
      background-color: rgb(77, 17, 79);
      color: rgb(255, 255, 255);
  }

  .displayColumn {
      display: table;
  }

  .treeView {
      display: table-cell;
  }

  .mainDisplay {
      min-height: 90vh;
      display: table-cell;
      background-color: #fff;
  }

  .treeViewBlock {}

  .el-tree {
      border: none;
  }


  /*SideBar Styles*/

  .nav .open > a,
  .nav .open > a:hover,
  .nav .open > a:focus {
      background-color: transparent;
  }


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
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
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
      -moz-transition: width .2s ease-in;
      -ms-transition: width .2s ease-in;
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
      -moz-transition: width .2s ease-in;
      -ms-transition: width .2s ease-in;
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
  .sidebar-nav li.open a:focus {
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
      top: 0px;
      z-index: 999;
      display: block;
      width: 32px;
      height: 32px;
      margin-left: 0px;
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
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-transition: all .35s ease-in-out;
  }

  .hamburger.is-closed:hover:before {
      opacity: 1;
      display: block;
      -webkit-transform: translate3d(-100px, 0, 0);
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
      /*box-shadow: 0px 0px 5px #333;*/
      top: 5px;
      -webkit-transition: all .35s ease-in-out;
  }

  .hamburger.is-closed .hamb-middle {
      /*box-shadow: 0px 0px 5px #333;*/
      top: 50%;
      margin-top: -2px;
  }

  .hamburger.is-closed .hamb-bottom {
      /*box-shadow: 0px 0px 5px #333;*/
      bottom: 5px;
      -webkit-transition: all .35s ease-in-out;
  }


  /*.sideMenuOpener{
    background-color: #999;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 9999;
  }*/

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
      -webkit-transition: -webkit-transform .2s cubic-bezier(.73, 1, .28, .08);
  }

  .hamburger.is-open .hamb-middle {
      display: none;
  }

  .hamburger.is-open .hamb-bottom {
      -webkit-transform: rotate(-45deg);
      -webkit-transition: -webkit-transform .2s cubic-bezier(.73, 1, .28, .08);
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
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-transition: all .35s ease-in-out;
  }

  .hamburger.is-open:hover:before {
      opacity: 1;
      display: block;
      -webkit-transform: translate3d(-100px, 0, 0);
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

  .el-tree-node__children {
      width: 100%;
  }

  .gjs-editor {
      min-height: 90vh;
  }

  .jsoneditor-vue div.jsoneditor-tree {
      background-color: #fff;
  }

  .gjs-am-assets-cont {
      height: 373px;
  }

  .dropdown-toggle {
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
  }

  .dropdown-menu {
      right: 0;
      left: auto;
      position: absolute;
  }

  .newWebsite {
      width: 90%;
      margin: 15px;
  }

  .gjs-am-file-uploader>form {
      min-height: 325px !important;
  }


  /*.el-tree-node__expand-icon{
    border: 8px solid transparent;
    border-left-width: 10px;
  }*/


  /*Template selection radio images*/

  .radio-img > input {
      display: none;
  }

  .radio-img > img {
      cursor: pointer;
      border: 2px solid transparent;
  }

  .radio-img > input:checked + img {
      border: 2px solid red;
  }


  /**/

  img {
      margin-top: -220px;
  }

  input[type="radio"] {
      display: none;
  }

  ul li {
      float: left;
      list-style: none;
  }

  label.imgThumbnail {
      height: 170px;
      padding: 10px;
      display: block;
      position: relative;
      margin: 10px;
      cursor: pointer;
  }

  label.imgThumbnail:before {
      background-color: white;
      color: white;
      content: " ";
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      left: -5px;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 28px;
      transition-duration: 0.4s;
      transform: scale(0);
  }

  label.imgThumbnail img {
      height: 100px;
      width: 100px;
      transition-duration: 0.2s;
      transform-origin: 50% 50%;
  }

  :checked + label.imgThumbnail:before {
      content: "✓";
      background-color: green;
      transform: scale(1);
  }

  :checked + label.imgThumbnail img {
      transform: scale(0.9);
      /* box-shadow: 0 0 5px #333; */
      z-index: -1;
  }


  /**/

  .templateThumbnail {
      width: 210px;
      height: 150px;
      padding: 20px
  }


  /*Page grapes editor dropdowns*/

  .el-select-dropdown__item {
      width: 100%;
  }

  .editor-buttons {
      position: fixed;
      bottom: -8px;
      right: 25px;
      z-index: 99999999999;
  }

  @media(max-width: 580px) {
      .editor-buttons {
          position: relative;
          left: 0;
      }
  }


  /*Partials list modal fix*/

  .el-dialog {
      text-align: left !importants;
  }


  /*Show icons on hover in directory tree */

  .el-tree-node:hover > .el-tree-node__content .action-button i {
      display: block;
  }

  .action-button i {
      display: none;
  }


  /*Sidemenu opener*/

  .sideOpener {
      width: 10px;
      height: 100vh;
      background-color: #292929;
      margin-left: -6px;
      display: table;
      transition: 0.2s all linear;
      opacity: 0.6;
  }

  .sideOpener:hover {
      width: 20px;
      transition: 0.2s all linear;
      opacity: 1;
  }

  .sideOpener i {
      display: table-cell;
      vertical-align: middle;
      font-weight: bolder;
      font-size: 18px;
  }


  /*Change angle arrow in open/closed */

  .hamburger.is-closed > .sideOpener > .fa-angle-right {
      display: table-cell;
  }

  .hamburger.is-closed > .sideOpener > .fa-angle-left {
      display: none;
  }

  .hamburger.is-open > .sideOpener > .fa-angle-right {
      display: none;
  }

  .hamburger.is-open > .sideOpener > .fa-angle-left {
      display: table-cell;
  }

</style>
