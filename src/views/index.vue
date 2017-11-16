<template>
  <div class="index">

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

    <div class="isNotLoggedIn" v-if="isLoggedInUser === false">

      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row style="margin-bottom: 0">
          <el-col :span="4">
            <div class="logo">
              <img src="./../../static/img/Flowz-logo.png" height="40px" style="margin-top: 5px;">
            </div>
          </el-col>
          <el-menu-item index="1" style="float: right; margin-top: 5px;">
              <el-button type="info" @click="loginPage">Login</el-button>
          </el-menu-item>
        </el-row>
      </el-menu>

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
                            <el-button type="primary" size="small" @click="saveFile()" :loading="saveFileLoading" v-if="componentId != 'ProjectStats' && componentId != 'PageStats' && componentId != 'LayoutStats' && componentId != 'PartialStats'">Save</el-button>
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
                      </el-form>
                      <span slot="footer" class="dialog-footer">
                          <el-button @click="newProjectFolderDialog = false">Cancel</el-button>
                          <el-button type="primary" @click="addProjectFolder()" v-loading.fullscreen.lock="fullscreenLoading">Create Project</el-button>
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
                      </el-form>
                      <span slot="footer" class="dialog-footer">
                          <el-button @click="newProjectFolderDialog = false">Cancel</el-button>
                          <el-button type="primary" @click="addProjectFolder()" v-loading.fullscreen.lock="fullscreenLoading">Create Project</el-button>
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
import Emitter from '../mixins/emitter';

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

// Project Stats
import ProjectStats from './ProjectStats'

// Partial Stats
import PartialStats from './PartialStats'

// Layout Stats
import LayoutStats from './LayoutStats'

// Layout Stats
import PageStats from './PageStats'

// New File creation validator
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
  mixins: [Emitter],
  props: {
  },
  data () {
    return {
      autoFolders: true,
      isLoggedInUser: false,
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
      fullscreenLoading: false,
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
      globalConfigData: [],
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
    ProjectStats,
    PartialStats,
    LayoutStats,
    PageStats
  },
  created () {
    if(!this.$session.exists()){
      this.isLoggedInUser = false
    }else{
      this.isLoggedInUser = true;
      this.getData()
    }

    this.$on('saveFileFromChild', this.autoSaveFromGrapes);
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

          for (let i = 0; i < response.data.children.length; i++) {
            response.data.children[i].children = _.remove(response.data.children[i].children, (child) => {
              return !(child.name == 'public' || child.name == '.git')
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
          this.loadingTree = false;
          this.$message({
            showClose: true,
            message: 'Some error while getting tree data',
            type: 'error'
          });
          console.log(e);
        });
    },

    // Get directory listing tree
    getTreeData: function(data) {
      let self = this
      let newData = []
      _.each(data.children, function(el) {
        if (el.type == 'directory') {
          el.children = self.sortTree(el);
        }
        newData.push(el)
      })
      return _.sortBy(newData, [function(o) {
        return o.type;
      }]);
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
      // If Clicked in Partials Folder 
      else if(_.includes(data.path, '/Partials') && !(_.includes(data.path, '/Partials/'))) {
        this.isProjectEditing = false;
        this.isProjectStats = false;
        this.$store.state.fileUrl = data.path;
        this.isSettingsPage = false;
        this.componentId = 'PartialStats';
      }
      // If Clicked in Layouts Folder 
      else if(_.includes(data.path, '/Layout') && !(_.includes(data.path, '/Layout/'))) {
        this.isProjectEditing = false;
        this.isProjectStats = false;
        this.$store.state.fileUrl = data.path;
        this.isSettingsPage = false;
        this.componentId = 'LayoutStats';
      }
      // If Clicked in Pages Folder 
      else if(_.includes(data.path, '/Pages') && !(_.includes(data.path, '/Pages/'))) {
        this.isProjectEditing = false;
        this.isProjectStats = false;
        this.$store.state.fileUrl = data.path;
        this.isSettingsPage = false;
        this.componentId = 'PageStats';
      }
      // Every other clicks
      else {
        this.isProjectStats = false;
        this.isPartialStats = false;
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
    getFileContent: async function(url) {
      url = url.replace(/\\/g, "\/")
      this.btnPreview = false
      this.previewFile = false
      this.loadingContent = true
      this.componentId = null
      let ext = url.split('.').pop();

      this.$store.state.fileUrl = url;
      let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + url);

      this.$store.dispatch('updateContent', {
        text: response.data
      })
      if (response.status == 200 || response.status == 204) {
        switch (ext.toLowerCase()) {
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
            try {
              this.$store.state.content = JSON.parse(response.data)
            } catch (e) {
              if (response.data.trim() == '') {
                this.$store.state.content = {}
              } else {
                this.$store.state.content = response.data
              }
            }
            this.componentId = 'json-viewer'
            break;
          case 'layout':
            this.isGridPreview = false;
            this.isMenuBuilder = false;
            this.isHomePage = false;
            this.isPageCodeEditor = false;

            if (this.isEditOption == true) {
              this.componentId = 'code-mirror'
              this.isEditOption = false
            } else {
              this.componentId = 'GridManager'
            }

            break;
          case 'html':
            this.isGridPreview = false;
            this.isMenuBuilder = false;
            this.isHomePage = false;
            if (this.isEditOption == true) {

              // For preview button only in HTML file of Pages Folder 
              var filePath = url;
              var pathParts = filePath.split('/');
              var parentFolderName = pathParts[pathParts.length - 2];
              if (parentFolderName == 'Pages') {
                this.isPageCodeEditor = true;
              } else {
                this.isPageCodeEditor = false;
              }

              this.componentId = 'code-mirror'
              this.isEditOption = false;
            } else {
              this.isPageCodeEditor = false;
              // For preview button only in HTML file of Pages Folder 
              var filePath = url;
              var pathParts = filePath.split('/');
              var parentFolderName = pathParts[pathParts.length - 2];
              if (parentFolderName == 'Pages') {
                this.isPagesFolder = true;
              } else {
                this.isPagesFolder = false;
              }
              // 

              this.componentId = 'GrapesComponent';
              // this.getConfigFileData();
            }
            break;
          case 'menu':
            this.isGridPreview = false;
            this.isMenuBuilder = true;
            this.isHomePage = false;
            this.isPageCodeEditor = false;
            this.componentId = 'MenuBuilder'
            break;
          default:
            this.isGridPreview = false;
            this.isMenuBuilder = false;
            this.isHomePage = false;
            this.isPageCodeEditor = false;
            this.componentId = 'code-mirror';

            break;
        }
      }
      this.breadcrumbArr = url.replace(this.rootpath, '').split('\\')
      this.loadingContent = false
    },

    // Get particular project's config.json file
    async getConfigFileData(folderUrl) {
      let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      let rawConfigs = JSON.parse(responseConfig.data);
      this.globalConfigData = rawConfigs;
    },

    // Generate Preview of Page
    async generatePreview() {

      // Save File first
      this.saveFile();

      //get header, footer from pagesetting from config.json and then set the value in js file to call the api.

      let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '';
      if(_.includes(configFileUrl, 'Partials')){
          fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'Pages')){
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else {
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      }
      let folderUrl = configFileUrl.replace(fileName, '');
      this.getConfigFileData(folderUrl);

      // let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      // let urlparts = configFileUrl.split("/");
      // let fileNameOrginal = urlparts[urlparts.length - 1];
      // let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      // var folderUrl = configFileUrl.replace(fileName, '');
      // let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      // let rawSettings = JSON.parse(responseConfig.data);

      let self = this;

      setTimeout(async function(){
        for (let i = 0; i < self.globalConfigData[1].pageSettings.length; i++) {
          if (self.globalConfigData[1].pageSettings[i].PageName == (nameF + '.html')) {
            self.form.Layout = self.globalConfigData[1].pageSettings[i].PageLayout
            self.form.partials = self.globalConfigData[1].pageSettings[i].partials
          }
        }

        let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');
        var index = responseMetal.data.search('.source')

        responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)

        var indexPartial = responseMetal.data.search("('handlebars')");

        var partials = '';
        for (var i = 0; i < self.form.partials.length; i++) {
          let key = Object.keys(self.form.partials[i])[0];
          let value = self.form.partials[i]
          let key2 = key;
          key = key.trim();

          console.log('Folder URL: ', folderUrl);

          if (value[key2].match('html')) {
            key = key.split('.')[0]
            var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + key + "/" + value[key2] + "').toString())\n"
          } else if (value[key2].match('hbs')) {
            key = key.split('.')[0]
            var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + key + "/" + value[key2] + "').toString())\n"
          } else {
            var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + key + "/" + value[key2] + ".html').toString())\n"
          }

          partials = partials + temp;

        }

        responseMetal.data = responseMetal.data.substr(0, indexPartial + 15) + partials + responseMetal.data.substr(indexPartial + 15);

        let mainMetal = folderUrl + '/assets/metalsmith.js'

        axios.post(config.baseURL + '/flows-dir-listing', {
          filename: mainMetal,
          text: responseMetal.data,
          type: 'file'
        }).then((response) => {
          self.$message({
            showClose: true,
            message: 'Config Saved!',
            type: 'success'
          });

          // Create temporary preview folder
          let newFolderName = folderUrl + '/Preview';
          return axios.post(config.baseURL + '/flows-dir-listing', {
              foldername: newFolderName,
              type: 'folder'
            })
            .then((res) => {
              console.log(res)
                // Create preview file

              let rawContent = self.$store.state.content;

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
                "<link rel='stylesheet' href='./../main-files/main.css'/>\n" +
                rawContent +
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
                '<script src="./../main-files/main.js"><\/script>\n' +
                '</body>\n</html>';

              if (self.form.Layout == 'Blank') {
                if (newContent.match('---')) {
                  let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
                  newContent = newContent.replace(substr, '')
                } else {
                  newContent = "<html>\n<head>\n" +
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
                    "<link rel='stylesheet' href='./../main-files/main.css'/>\n" +
                    rawContent +
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
                    '<script src="./../main-files/main.js"><\/script>\n' +
                    '</body>\n</html>';
                }

              } else {
                let tempValueLayout = '---\nlayout: ' + self.form.Layout + '.layout\n---\n';

                if (newContent.match('---')) {
                  let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
                  newContent = newContent.replace(substr, tempValueLayout)
                } else {
                  newContent = tempValueLayout + "<html>\n<head>\n" +
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
                    "<link rel='stylesheet' href='./../main-files/main.css'/>\n" +
                    rawContent +
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
                    '<script src="./../main-files/main.js"><\/script>\n' +
                    '</body>\n</html>';
                }

              }

              self.PageLayout = '';
              self.form.Header = '';
              self.form.Footers = '';
              self.form.Sidebar = '';
              self.form.Menu = '';

              let previewFileName = folderUrl + '/Preview/' + nameF + '.html';

              return axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: previewFileName,
                  text: newContent,
                  type: 'file'
                })
                .then((res) => {
                  self.saveFileLoading = false;

                  axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {
                      // revert changes in metalsmith 

                      var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                      return axios.post(config.baseURL + '/flows-dir-listing', {
                          filename: mainMetal,
                          text: metalsmithJSON,
                          type: 'file'
                        })
                        .then((res) => {
                          let previewFile = self.$store.state.fileUrl.replace(/\\/g, "\/");
                          previewFile = folderUrl.replace('/var/www/html', '');

                          window.open(config.ipAddress + previewFile + '/public/' + nameF + '.html');

                          // Delete Preview Folder
                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                            .then((res) => {
                              console.log(res);
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
                      self.$message({
                        showClose: true,
                        message: 'File not saved! Please try again.',
                        type: 'error'
                      });
                      console.log('Error while creating MetalSmith JS file' + err)
                    })

                  self.$message({
                    showClose: true,
                    message: 'File Saved!',
                    type: 'success'
                  });
                })
                .catch((e) => {
                  self.saveFileLoading = false
                  self.$message({
                    showClose: true,
                    message: 'File not saved! Please try again.',
                    type: 'error'
                  });
                  console.log(e)
                })

            })
            .catch((e) => {
              console.log(e)
            })

        })
        .catch((e) => {
          console.log('Error while creating MetalSmith JS file' + e)
          self.$message({
            showClose: true,
            message: 'Cannot save file! Some error occured, try again.',
            type: 'danger'
          });
        })
      },2000);
    },

    // Create new Folder
    addFolder() {
      let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddFolder.foldername;
      return axios.post(config.baseURL + '/flows-dir-listing', {
          foldername: newFolderName,
          type: 'folder'
        })
        .then((res) => {
          var storedTemplates = JSON.parse(localStorage.getItem("listOfTempaltes"));
          storedTemplates.push(this.formAddFolder.foldername)
          localStorage.setItem("listOfTempaltes", JSON.stringify(storedTemplates));

          this.newFolderDialog = false;
          this.addNewFolderLoading = false;

          this.$message({
            showClose: true,
            message: 'Folder Created..',
            type: 'success'
          });

        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: 'Folder creation failed. Try again.',
            type: 'error'
          });
          console.log(e)
        })
    },

    // Create new Website
    addProjectFolder() {

      this.fullscreenLoading = true;

      let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddProjectFolder.projectName;
      return axios.post(config.baseURL + '/flows-dir-listing', {
          foldername: newFolderName,
          type: 'folder'
        })
        .then((res) => {
          this.newProjectFolderDialog = false
          this.addNewProjectFolderLoading = false;

          console.log('ProjectName: ', this.formAddProjectFolder.projectName);
          console.log('Private Token of user: ', this.$session.get('privateToken'));
          console.log('Username: ', this.$session.get('username'));

          // Create repositoroty on GitLab
          axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo=' + this.formAddProjectFolder.projectName + '&privateToken=' + this.$session.get('privateToken') + '&username=' + this.$session.get('username'), {})
            .then((response) => {
              if (response.status == 200 || response.status == 201) {

                localStorage.setItem("folderUrl", newFolderName);
                var folder = localStorage.getItem("folderUrl");

                axios.post(config.baseURL + '/get-directory-list?folderUrl=' + newFolderName, {

                  }).then((response) => {
                    localStorage.setItem("listOfTempaltes", JSON.stringify(response.data));
                  })
                  .catch((e) => {
                    console.log(e)
                  })

                axios.post(config.baseURL + '/get-directory-list?folderUrl=' + newFolderName + '/Templates', {

                  }).then((res) => {
                    localStorage.setItem("Templates", JSON.stringify(res.data));
                    let temp_list = localStorage.getItem("Templates");
                  })
                  .catch((e) => {
                    console.log(e)
                  })

                this.newRepoId = response.data.id;
                this.repoName = response.data.name;

                // Create essential folders
                this.addOtherFolder(newFolderName)

                this.formAddProjectFolder.projectName = null;
              } else {
                console.log(response);
                this.$message({
                  showClose: true,
                  message: 'Some error occured. Please refresh and try again.',
                  type: 'error'
                });
                return;
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
    async addOtherFolder(newFolderName){

      // Create Assets folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/assets',
        type : 'folder'
      })
      .then((res) => {
        console.log('Assets Folder created!'); 
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
      })
      .catch((e)=>{
        console.log("Error from Assests"+res)
      });

      // Create Partials Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : newFolderName+'/Partials',
        type : 'folder'
      })
      .then((res) => {
          console.log('Header Folder created!');
          // Create Headers Folder
          axios.post(config.baseURL+'/flows-dir-listing' , {
            foldername : newFolderName+'/Partials/Header',
            type : 'folder'
          })
          .then((res) => {
              console.log('Header Folder created!');
          })
          .catch((e)=>{
            console.log("Error From Headers"+res)
          });

          // Create menus Folder
          axios.post(config.baseURL+'/flows-dir-listing' , {
            foldername : newFolderName+'/Partials/Menu',
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
            foldername : newFolderName+'/Partials/Footer',
            type : 'folder'
          })
          .then((res) => {
            console.log('Footer Folder created!');
          })
          .catch((e)=>{
            console.log("Error from Footers"+res)
          });

          // Create Templates Folder
          axios.post(config.baseURL+'/flows-dir-listing' , {
            foldername : newFolderName+'/Partials/Templates',
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
            foldername : newFolderName+'/Partials/Sidebar',
            type : 'folder'
          })
          .then((res) => {
            console.log('Sidebar Folder created!');
          })
          .catch((e)=>{
            console.log("Error from pages"+res)
          });


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

      // Create Main-Files Folder
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

      console.log('Now creating essential files...');
      let self = this;
      setTimeout(function(){
        self.createEssentialFiles(newFolderName);
      },1000);
    },

    // Create necessary files for project
    createEssentialFiles(newFolderName) {

      // Create Config.json file
      let newfilename = newFolderName + '/assets/config.json';

      let repoSettings = [{
                            "repoSettings": [{
                              "RepositoryId": this.newRepoId,
                              "RepositoryName": this.repoName
                            }]
                          }, {
                            "projectSettings": [{
                              "RepositoryId": this.newRepoId,
                              "ProjectName": this.repoName,
                              "BrandName": '',
                              "BrandLogoName": '',
                              "ProjectLayout": '',
                              "ProjectHeader": '',
                              "ProjectFooter": '',
                              "ProjectSEOTitle": '',
                              "ProjectSEOKeywords": '',
                              "ProjectSEODescription": ''
                            }, {
                              "GlobalVariables": [],
                              "GlobalCssVariables": [],
                              "EcommerceVariables": []
                            }],
                            "pageSettings": [{
                              "PageName": "index.html",
                              "PageSEOTitle": "",
                              "PageSEOKeywords": "",
                              "PageSEODescription": "",
                              "PageLayout": "default",
                              "partials": [{
                                "Header": "default"
                              }, {
                                "Footer": "default"
                              }]
                            }]
                          }, {
                            "layoutOptions": [{
                              "Header": [{
                                value: 'default',
                                label: 'default'
                              }],
                              "Footer": [{
                                value: 'default',
                                label: 'default'
                              }],
                              "Sidebar": [{
                                value: 'default',
                                label: 'default'
                              }],
                              "Menu": [{
                                value: 'default',
                                label: 'default'
                              }],
                              "Layout": [{
                                value: 'Blank',
                                label: 'Blank',
                                partialsList: [],
                                defaultList: []
                              }, {
                                value: 'default',
                                label: 'default',
                                partialsList: ['Header', 'Footer'],
                                defaultList: []
                              }]
                            }]
                          }];

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

      // Create default.json for menu file
      let defaultMenuJson = newFolderName + '/assets/default.json'
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : defaultMenuJson,
          text : '[{"id":1,"title":"Home","customSelect":"index.html","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0}}]',
          type : 'file'
      })
      .then((res) => {
        console.log('default.json for menu file created!');
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
      let headerFileName = newFolderName + '/Partials/Header/default.html'

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

      // Create demo footer file
      let footerFileName = newFolderName + '/Partials/Footer/default.html'

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
      let sidebar = newFolderName + '/Partials/Sidebar/default.html'
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

      // Create default menu file
      let menu = newFolderName + '/Partials/Menu/default.menu'
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : menu,
          text : '',
          type : 'file'
      })
      .then((res) => {
        console.log('Default Menu file created!');
      })
      .catch((e) => {
          console.log(e)
      });

      // Template
      let template1 = newFolderName + '/Partials/Templates/template1.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/template1.html', {
          
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
      let templateListing2 = newFolderName + '/Partials/Templates/template2.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/template2.html', {
          
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
      let template3 = newFolderName + '/Partials/Templates/template3.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/template3.html', {
          
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
      let template4 = newFolderName + '/Partials/Templates/template4.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/template4.html', {
          
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
      let template5 = newFolderName + '/Partials/Templates/template5.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/template5.html', {
          
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
      let productList = newFolderName + '/Partials/Templates/productList.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/productlist.html', {
          
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
      let landscape = newFolderName + '/Partials/Templates/landscape.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/landscape.html', {
          
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
      let creative = newFolderName + '/Partials/Templates/creative.html';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/Templates/creative.html', {
          
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

      // Product Listing Plugin
      let listingPlugin = newFolderName + '/assets/client-plugins/client-product-listing-plugin.js';
      let pluginJsData = '';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/product-listing-plugin-cleaned.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/product-detail-plugin-cleaned.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/client-slider-plugin.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/popular-product-slider-plugin.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/client-pagination-plugin.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/image-gradient-animation.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/client-navbar-plugin.js', {
          
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

      // Client Global variables Plugin
      let globalVariablesPlugin = newFolderName + '/assets/client-plugins/global-variables-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/global-variables-plugin.js', {
          
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
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/progress-bars.js', {
          
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


      // My Cart Plugin
      let myCartPlugin = newFolderName + '/assets/client-plugins/client-my-cart-plugin.js';
      axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/client-my-cart-plugin.js', {
          
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

          this.fullscreenLoading = false;

          let self = this;
          setTimeout(function(){
            self.$message({
              showClose: true,
              message: 'Project Created!',
              type: 'success'
            });
          },500);

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
      // let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      // let urlparts = configFileUrl.split("/");
      // let fileNameOrginal = urlparts[urlparts.length - 1];
      // let foldername = urlparts[urlparts.length - 1];
      // let fileName = '/' + urlparts[urlparts.length - 1];
      // var folderUrl = configFileUrl.replace(fileName, '');

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length-1];
      let foldername = urlparts[urlparts.length - 2];
      // let fileName = '/' + urlparts[urlparts.length-1];



      let fileName = '';
      if(_.includes(configFileUrl, 'Partials')){
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'Pages')){
          fileName = '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'Layout')){
          fileName = '/' + urlparts[urlparts.length - 1];
      } else {
          fileName = '/' + urlparts[urlparts.length - 1];
      }

      console.log('Folder Name: ', fileName);

      var folderUrl = configFileUrl.replace(fileName, '');

      // this.getConfigFileData(folderUrl);

      let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      let rawConfigs = JSON.parse(responseConfig.data);
      this.globalConfigData = rawConfigs;
      
      this.$refs[formName].validate((valid) => {
          if (valid) {
              this.addNewFileLoading = true
              var name=this.formAddFile.filename;
              // console.log('This currentFile:', this.currentFile.path);
              console.log('Store path:', this.$store.state.fileUrl);
              var newfilename = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/' + this.formAddFile.filename
              return axios.post(config.baseURL + '/flows-dir-listing', {
                  filename : newfilename,
                  text : ' ',
                  type : 'file'
              })
              .then( (res) => {

                  // For ReUse Component
                  let currentFile_path = this.$store.state.fileUrl.replace(/\\/g, "\/").split('/');
                  
                  var last_element = currentFile_path[currentFile_path.length - 1];
                  
                  if (last_element == "Templates") {
                    var Templates = JSON.parse(localStorage.getItem("Templates"));
                    var temp_filename = this.formAddFile.filename;
                    var new_name = temp_filename.replace(".html","")
                    Templates.push(new_name)
                    localStorage.setItem("Templates", JSON.stringify(Templates));
                  }

                  this.newFileDialog = false
                  this.addNewFileLoading = false
                  this.formAddFile.filename = null
                  
                    let temp = {
                        value: name.split('.')[0],
                        label: name.split('.')[0]
                    }
                      let checkValue = false;
                      var namefolder= this.$store.state.fileUrl.replace(/\\/g, "\/").split('/')
                      namefolder=namefolder[namefolder.length - 1 ];
                      console.log(this.globalConfigData);
                      if (this.globalConfigData[2].layoutOptions[0][namefolder]) {
                          for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][namefolder].length; i++) {
                              var obj = this.globalConfigData[2].layoutOptions[0][namefolder][i];
                              if ((obj.label) == name) {
                                  checkValue = true;
                              }
                          }
                          if (checkValue == true) {
                          } else {
                              this.globalConfigData[2].layoutOptions[0][namefolder].push(temp);

                              // saveConfigFile
                              this.saveConfigFile(folderUrl);
                          }

                      } else {
                          this.globalConfigData[2].layoutOptions[0][namefolder] = [];
                          this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                          this.saveConfigFile(folderUrl);
                      }
                      if(namefolder=='Pages'){
                        var PageSettings = {"PageName":name,"PageSEOTitle": "", "PageSEOKeywords": "", "PageSEODescription": "","PageLayout":"default","partials":[{"Header": "default"},{"Footer": "default" }]};
                        this.globalConfigData[1].pageSettings.push((PageSettings))
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

    // Save file with autometalsmith folders from layout and hbs file
    async saveFile() {
      console.log('Saving File');
      this.saveFileLoading = true
      let newContent = this.$store.state.content;
      switch (this.componentId) {
        case 'GrapesComponent':
          this.$refs.contentComponent.getHtml();
          newContent = this.$store.state.content;
          break;
        case 'json-viewer':
          newContent = JSON.stringify(this.$store.state.content);
          break;
        case 'GridManager':
          this.$refs.contentComponent.getHtml();
          newContent = this.$store.state.content;
          break;
        case 'MenuBuilder':
          this.saveJsonFile();
          break;
      }

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let foldername = urlparts[urlparts.length - 2];
      // let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      // var folderUrl = configFileUrl.replace(fileName, '');

      let fileName = '';
      if(_.includes(configFileUrl, 'Partials')){
          fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'Pages')){
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'client-plugins')){
          fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else {
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      }

      let folderUrl = configFileUrl.replace(fileName, '');

      let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      let rawConfigs = JSON.parse(responseConfig.data);
      this.globalConfigData = rawConfigs;

      // this.getConfigFileData(folderUrl);

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename: this.currentFile.path.replace(/\\/g, "\/"),
          text: newContent,
          type: 'file'
        })
        .then(async(res) => {
          this.saveFileLoading = false
          this.$message({
            showClose: true,
            message: 'File Saved!',
            type: 'success'
          });
          var content = this.$store.state.content;
          if (this.currentFile.path.replace(/\\/g, "\/").match('Layout')) {
           
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
            var DefaultParams = [];
            if (result.length > 0) {
              var resultParam = result
              for (let i = 0; i < resultParam.length; i++) {
                var temp;
                temp = resultParam[i].trim()
                result[i] = result[i].trim()
                temp = temp.replace(/&nbsp;/g, ' ')
                temp = temp.replace(/\s+/g, ' ');
                temp = temp.trim();
                temp = temp.split(' ')
                for (let j = 0; j < temp.length; j++) {
                  if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                    if (temp[j + 1] != undefined) {
                      result[i] = temp[0];
                      if (temp[j + 1].indexOf('.') > -1) {
                        let x = temp[j + 1]
                        x = temp[j + 1].split(/'/)[1];
                        let obj = {}
                        obj[temp[0]] = x
                        DefaultParams.push(obj)
                        break;
                      }
                    } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                      result[i] = temp[0];
                      if (temp[j]) {
                        let x = temp[j]
                        x = temp[j].split(/'/)[1];
                        let obj = {}
                        obj[temp[0]] = x
                        DefaultParams.push(obj)
                        break;
                      }
                    }
                  }
                }
              }
              let totalPartial = content.match(/{{>/g).length;
            }

            let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Layout/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.layout'));
            let temp = {
              value: name,
              label: name,
              partialsList: result,
              defaultList: DefaultParams

            }

            let checkValue = false;
            for (var i = 0; i < this.globalConfigData[2].layoutOptions[0].Layout.length; i++) {
              var obj = this.globalConfigData[2].layoutOptions[0].Layout[i];
              if ((obj.label) == name) {
                checkValue = true;
              }
            }
            if (checkValue == true) {
              let currentFileIndex = daex.indexFirst(this.globalConfigData[2].layoutOptions[0].Layout, {
                'label': name
              });
              this.globalConfigData[2].layoutOptions[0].Layout[currentFileIndex].partialsList = result;
              this.globalConfigData[2].layoutOptions[0].Layout[currentFileIndex].defaultList = DefaultParams;
              this.saveConfigFile(folderUrl);
            } else {
              this.globalConfigData[2].layoutOptions[0].Layout.push(temp);

              this.saveConfigFile(folderUrl);
            }
            var foldernameKey = Object.keys(this.globalConfigData[2].layoutOptions[0])
            for (var i = 0; i < result.length; i++) {
              var check = false;
              for (var j = 0; j < foldernameKey.length; j++) {
                if (result[i] == foldernameKey[j]) {
                  check = true
                }
              }
              if (check == false) {
                let newName = result[i]
                let newFolderName = folderUrl + '/Partials/' + result[i];
                axios.post(config.baseURL + '/flows-dir-listing', {
                    foldername: newFolderName,
                    type: 'folder'
                  })
                  .then((res) => {
                    this.newFolderDialog = false
                    this.addNewFolderLoading = false
                    let x = newName

                    this.addNewFileLoading = true

                    let newfilename = newFolderName + '/default.html'
                    axios.post(config.baseURL + '/flows-dir-listing', {
                        filename: newfilename,
                        text: ' ',
                        type: 'file'
                      })
                      .then((res) => {
                        this.newFileDialog = false
                        this.addNewFileLoading = false
                        this.formAddFile.filename = null
                        this.globalConfigData[2].layoutOptions[0][x] = [];
                        let temp = {
                          value: "default",
                          label: "default"
                        }
                        this.globalConfigData[2].layoutOptions[0][x].push(temp)
                        this.saveConfigFile(folderUrl);
                      })
                      .catch((e) => {
                        console.log(e)
                      })
                  })
                  .catch((e) => {
                    console.log(e)
                  })
              }
            }
          } else if (this.currentFile.path.replace(/\\/g, "\/").match('Partials')) {

            let checkValue = false;
            if (fileName.search('hbs') != -1) {
              var content = this.$store.state.content;
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
                  if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
                  var result = this.getFromBetween(sub1, sub2);
                  this.results.push(result);
                  this.removeFromBetween(sub1, sub2);
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

              var resultParam = result
              var DefaultParams = [];
              for (let i = 0; i < resultParam.length; i++) {
                var temp;
                temp = resultParam[i].trim()
                result[i] = result[i].trim()
                temp = temp.replace(/&nbsp;/g, ' ')
                temp = temp.replace(/\s+/g, ' ');
                temp = temp.split(' ')
                for (let j = 0; j < temp.length; j++) {
                  if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                    if (temp[j + 1] != undefined) {
                      result[i] = temp[0];
                      if (temp[j + 1].indexOf('.') > -1) {
                        let x = temp[j + 1]
                        x = temp[j + 1].split(/'/)[1];
                        let obj = {}
                        obj[temp[0]] = x
                        DefaultParams.push(obj)
                        break;
                      }
                    } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                      result[i] = temp[0];
                      if (temp[j]) {
                        let x = temp[j]
                        x = temp[j].split(/'/)[1];
                        let obj = {}
                        obj[temp[0]] = x
                        DefaultParams.push(obj)
                        break;
                      }
                    }
                  }
                }
              }
              /*****
                adding new code for prompt 
              ******/
              var Allfoldername = Object.keys(this.globalConfigData[2].layoutOptions[0])
              for (var i = 0; i < result.length; i++) {
                var check = false;
                for (var j = 0; j < Allfoldername.length; j++) {
                  if (result[i] == Allfoldername[j]) {
                    check = true
                  }
                }
                if (check == false) {
                  this.form.namearray.push(result[i])
                }
              }
              /**
                prompt user here
              **/
              if (this.form.namearray.length > 0) {
                this.dialogFormVisible = true
              } else {
                for (let k = 0; k < result.length; k++) {
                  let ch = false
                  for (let r = 0; r < DefaultParams.length; r++) {
                    if (Object.keys(DefaultParams[r]) == result[k]) {
                      ch = true
                    }
                  }
                  if (ch == false) {
                    let self = this;
                    setTimeout(function() {
                      self.$notify.info({
                        title: 'AutoSet',
                        message: result[k] + " id='default.html'",
                        type: 'warning'
                      });
                    }, 100);

                    let obj = {}
                    obj[result[k]] = 'default.html'
                    DefaultParams.push(obj)

                  }
                }

                let totalPartial = content.match(/{{>/g).length;

                let namefile = fileNameOrginal.split('.')[0];
                let namefolder = foldername;
                let temp = {
                  value: namefile,
                  label: namefile,
                  partialsList: result,
                  defaultList: DefaultParams
                }
                let checkValue = false;
                for (var i = 0; i < Object.keys(this.globalConfigData[2].layoutOptions[0]).length; i++) {
                  var obj = Object.keys(this.globalConfigData[2].layoutOptions[0])[i];
                  if ((obj) == namefolder) {
                    checkValue = true;
                  }
                }
                if (checkValue == true) {
                  let checkFileNamevalue = false;
                  for (let j = 0; j < this.globalConfigData[2].layoutOptions[0][namefolder].length; j++) {
                    if (this.globalConfigData[2].layoutOptions[0][namefolder][j].label == namefile) {
                      checkFileNamevalue = true
                      this.globalConfigData[2].layoutOptions[0][namefolder][j].partialsList = [];
                      this.globalConfigData[2].layoutOptions[0][namefolder][j].defaultList = [];
                      this.globalConfigData[2].layoutOptions[0][namefolder][j].partialsList = result;
                      this.globalConfigData[2].layoutOptions[0][namefolder][j].defaultList = DefaultParams;
                    }
                  }
                  if (checkFileNamevalue != true) {
                    this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                  }
                  this.saveConfigFile(folderUrl);
                } else {
                  console.log('file doesnt exists');
                }
              }

            } else {
              let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf(foldername) + foldername.length + 1, this.currentFile.path.replace(/\\/g, "\/").indexOf('.'));
              let temp = {
                value: name,
                label: name
              }
              let checkValue = false;
              if (this.globalConfigData[2].layoutOptions[0][foldername]) {
                for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][foldername].length; i++) {
                  var obj = this.globalConfigData[2].layoutOptions[0][foldername][i];
                  if ((obj.label) == name) {
                    checkValue = true;
                  }
                }
                if (checkValue == true) {
                  console.log("file already exists")
                } else {
                  this.globalConfigData[2].layoutOptions[0][foldername].push(temp);
                  // saveConfigFile
                  this.saveConfigFile(folderUrl);
                }
              } else {
                this.globalConfigData[2].layoutOptions[0][foldername] = [];
                this.globalConfigData[2].layoutOptions[0][foldername].push(temp)
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

    // Triggered when confirmed for autoSave from grapes component
    async autoSaveFromGrapes(self) {
      let fileUrl = self;
      console.log('Autosave File URL:', fileUrl);
      let configFileUrl = fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let foldername = urlparts[urlparts.length - 2];
      // let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      // var folderUrl = configFileUrl.replace(fileName, '');

      let fileName = '';
      if(_.includes(configFileUrl, 'Partials')){
          fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'Pages')){
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else {
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      }

      let folderUrl = configFileUrl.replace(fileName, '');

      let responseConfig = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      let rawConfigs = JSON.parse(responseConfig.data);
      this.globalConfigData = rawConfigs;

      // this.getConfigFileData(folderUrl);

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename: this.currentFile.path.replace(/\\/g, "\/"),
          text: newContent,
          type: 'file'
        })
        .then((res) => {
          this.saveFileLoading = false
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
      this.form.checked = [];
      this.form.namearray = [];
    },

    // New Partials confirmation dialog
    async dialogFormVisibleAdd() {
      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let foldername = urlparts[urlparts.length - 2];
      
      let fileName = '';
      if(_.includes(configFileUrl, 'Partials')){
          fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else if(_.includes(configFileUrl, 'Pages')){
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      } else {
          fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      }

      var folderUrl = configFileUrl.replace(fileName, '');

      this.getConfigFileData(folderUrl);

      let content = this.$store.state.content;

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
      var resultParam = result
      var DefaultParams = [];
      for (let i = 0; i < resultParam.length; i++) {
          var temp;
          temp = resultParam[i].trim()
          result[i] = result[i].trim()
          temp = temp.replace(/&nbsp;/g, ' ')
          temp = temp.replace(/\s+/g, ' ');
          temp = temp.split(' ')
          for (let j = 0; j < temp.length; j++) {
              if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                  if (temp[j + 1] != undefined) {
                      result[i] = temp[0];
                      if (temp[j + 1].indexOf('.') > -1) {
                          let x = temp[j + 1]
                          x = temp[j + 1].split(/'/)[1];
                          let obj = {}
                          obj[temp[0]] = x
                          DefaultParams.push(obj)
                          break;
                      }
                  } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                      result[i] = temp[0];
                      if (temp[j]) {
                          let x = temp[j]
                          x = temp[j].split(/'/)[1];
                          let obj = {}
                          obj[temp[0]] = x
                          DefaultParams.push(obj)
                          break;
                      }
                  }
              }
              // else if( (temp[j+1]== undefined ))
              // {
              //   //Here there are no parameter at all, So defining it default.
              //   let self = this;
              //   setTimeout(function(){
              //     self.$notify({
              //         title: 'AutoSet ',
              //         message: temp[j]+" id='default.html'",
              //         type:'success'
              //       });  
              //   },100);

              //   let obj = {}
              //   obj[temp[j]] ='default.html' 
              //   DefaultParams.push(obj)
              // }
          }
      }
      for (let k = 0; k < result.length; k++) {
        let ch = false
        for (let r = 0; r < DefaultParams.length; r++) {
          if (Object.keys(DefaultParams[r]) == result[k]) {
            ch = true
          }
        }
        if (ch == false) {
          let self = this;
          setTimeout(function() {
            self.$notify({
              title: 'AutoSet',
              message: result[k] + " id='default.html'",
              type: 'success'
            });
          }, 100);

          let obj = {}
          obj[result[k]] = 'default.html'
          DefaultParams.push(obj)

        }
      }
      if (Object.keys(this.form.checked).length > 0) {
        for (let k = 0; k < Object.keys(this.form.checked).length; k++) {
          let newName = Object.keys(this.form.checked)[k]
          let newFolderName = folderUrl + '/Partials/' + Object.keys(this.form.checked)[k];
          await axios.post(config.baseURL + '/flows-dir-listing', {
              foldername: newFolderName,
              type: 'folder'
            })
            .then(async (res) => {
              this.newFolderDialog = false
              this.addNewFolderLoading = false
              let x = newName
              this.addNewFileLoading = true
              let newfilename = newFolderName + '/default.html'
              await axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: newfilename,
                  text: ' ',
                  type: 'file'
                })
                .then((res) => {
                  this.newFileDialog = false
                  this.addNewFileLoading = false
                  this.formAddFile.filename = null
                  this.globalConfigData[2].layoutOptions[0][x] = [];
                  let temp1 = {
                    value: "default",
                    label: "default"
                  }
                  this.globalConfigData[2].layoutOptions[0][x].push(temp1)
                  /****
                  updating function 
                  ***/
                  let totalPartial = content.match(/{{>/g).length;
                  let namefile = fileNameOrginal.split('.')[0];
                  let namefolder = foldername;
                  let temp = {
                    value: namefile,
                    label: namefile,
                    partialsList: result,
                    defaultList: DefaultParams
                  }
                  let checkValue = false;
                  for (var i = 0; i < Object.keys(this.globalConfigData[2].layoutOptions[0]).length; i++) {
                    var obj = Object.keys(this.globalConfigData[2].layoutOptions[0])[i];
                    // console.log("obj:", obj)
                    if ((obj) == namefolder) {
                      checkValue = true;
                    }
                  }
                  if (checkValue == true) {
                    let checkFileNamevalue = false;
                    for (let j = 0; j < this.globalConfigData[2].layoutOptions[0][namefolder].length; j++) {
                      if (this.globalConfigData[2].layoutOptions[0][namefolder][j].label == namefile) {
                        checkFileNamevalue = true
                        this.globalConfigData[2].layoutOptions[0][namefolder][j].partialsList = [];
                        this.globalConfigData[2].layoutOptions[0][namefolder][j].defaultList = [];
                        this.globalConfigData[2].layoutOptions[0][namefolder][j].partialsList = result;
                        this.globalConfigData[2].layoutOptions[0][namefolder][j].defaultList = DefaultParams;
                      }
                    }
                    if (checkFileNamevalue != true) {
                      this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                    }
                    this.saveConfigFile(folderUrl);
                  } else {
                    this.saveConfigFile(folderUrl);
                  }
                })
                .catch((e) => {
                  console.log(e)
                })
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

    // Save Page settings (Not in use)
    async savePageSettings() {

      let nameF=this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/')+6, this.$store.state.fileUrl.indexOf('.html'));

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length-1];
      let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
      var folderUrl = configFileUrl.replace(fileName, '');

      this.getConfigFileData(folderUrl);

      // let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl+'/assets/config.json');
      // let rawSettings = JSON.parse(response.data);

      let found=false;

      if(this.PageLayout === 'Blank'){
        for (let i=0;i<this.globalConfigData[1].pageSettings.length;i++)
        {
          if(this.globalConfigData[1].pageSettings[i].PageName == nameF)
          {
            this.globalConfigData[1].pageSettings[i].PageHeader='';
            this.globalConfigData[1].pageSettings[i].PageFooter='';
            this.globalConfigData[1].pageSettings[i].PageLayout=this.PageLayout;
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
          this.globalConfigData[1].pageSettings.push(obj);
        }
      } else if(this.PageLayout != 'Blank'){
        if(this.form.Header === 'NOH'){
          for (let i=0;i<this.globalConfigData[1].pageSettings.length;i++)
          {
            if(this.globalConfigData[1].pageSettings[i].PageName == nameF)
            {
              this.globalConfigData[1].pageSettings[i].PageHeader='';
              this.globalConfigData[1].pageSettings[i].PageFooter=this.form.Footer;
              this.globalConfigData[1].pageSettings[i].PageLayout=this.PageLayout;
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
            this.globalConfigData[1].pageSettings.push(obj);
          }
        } 
        else if(this.form.Footer === 'NOF')
        {

          for (let i=0;i<this.globalConfigData[1].pageSettings.length;i++)
          {
            if(this.globalConfigData[1].pageSettings[i].PageName == nameF)
            {
              this.globalConfigData[1].pageSettings[i].PageHeader=this.form.Header;
              this.globalConfigData[1].pageSettings[i].PageFooter='';
              this.globalConfigData[1].pageSettings[i].PageLayout=this.PageLayout;
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
            this.globalConfigData[1].pageSettings.push(obj);
          }
      
        }
        else{
          for (let i=0;i<this.globalConfigData[1].pageSettings.length;i++)
          {
            if(this.globalConfigData[1].pageSettings[i].PageName == nameF)
            {
              this.globalConfigData[1].pageSettings[i].PageHeader=this.form.Header;
              this.globalConfigData[1].pageSettings[i].PageFooter=this.form.Footer;
              this.globalConfigData[1].pageSettings[i].PageLayout=this.PageLayout;
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
            this.globalConfigData[1].pageSettings.push(obj);
          }
        }
        }

      this.saveConfigFile(folderUrl);

      // return axios.post('http://localhost:3030/flows-dir-listing', {
      //       filename : folderUrl+'/assets/config.json',
      //       text : JSON.stringify(rawSettings),
      //       type : 'file'
      //   })
      // .then((res) => {

      //       this.saveFileLoading = false
      //       this.$message({
      //           showClose: true,
      //           message: 'File Saved!',
      //           type: 'success'
      //       });

            
      //   })
      // .catch((e) => {
      //       this.saveFileLoading = false
      //       this.$message({
      //           showClose: true,
      //           message: 'File not saved! Please try again.',
      //           type: 'error'
      //       });
      //       console.log(e)
      //   })
    },

    // Save config File
    saveConfigFile(folderUrl){

      let newJsonName = folderUrl + '/assets/config.json';

      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : newJsonName ,
          text : JSON.stringify(this.globalConfigData),
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
          // this.$message({
          //     showClose: true,
          //     message: 'File not saved! Please try again.',
          //     type: 'error'
          // });
          console.log('Config file not saved. See full log here: ', e)
      })
    },

    // Save Menu's JSON file
    saveJsonFile: function(){
      console.log('Saving menu json file');
        this.saveFileLoading = true
        let newContent = this.$store.state.content;

        this.$refs.contentComponent.getMenuJson();
        newContent = this.$store.state.content;
        
        let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let urlparts = configFileUrl.split("/");
        let fileNameOrginal = urlparts[urlparts.length - 1];
        let fileNameParts = fileNameOrginal.split('.');
        let actualFileNameOnly = fileNameParts[0];
        let fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        var folderUrl = configFileUrl.replace(fileName, '');
        
        let newJsonName = folderUrl + '/assets/'+actualFileNameOnly+'.json';
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

      // Get Config.json file data
      let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = url.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      let folderUrl = url.replace(fileName, '');
      this.getConfigFileData(folderUrl);

      this.$swal({
        title: 'Are you sure?',
        text: 'You want you delete this file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then(() => {
        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + data.path.replace(/\\/g, "/"))
          .then((res) => {
            this.currentFile = null
            this.componentId = 'HomePage';

            let file_path_ = data.path
            let arr_file = file_path_.split('\\')

            var last_element = arr_file[arr_file.length - 1];

            var Templates = JSON.parse(localStorage.getItem("Templates"));

            var new_name = last_element.replace(".html", "")

            Templates = [];
            Templates.pop(new_name)
            localStorage.setItem("Templates", JSON.stringify(Templates));

            if (_.includes(data.path, 'Pages')) {

              // get index of file to be deleted
              let indexOfPageName = _.findIndex(this.globalConfigData[1].pageSettings, function(o) {
                return o.PageName == last_element;
              });

              // Remove item from array
              this.globalConfigData[1].pageSettings.splice(indexOfPageName, 1);

              // save config file
              this.saveConfigFile(folderUrl);

            } else if (_.includes(data.path, 'Layout')) {

              var layoutName = last_element.replace(".layout", "");

              // get index of file to be deleted
              let indexOfLayoutName = _.findIndex(this.globalConfigData[2].layoutOptions[0].Layout, function(o) {
                return o.value == layoutName;
              });

              // Remove item from array
              this.globalConfigData[2].layoutOptions[0].Layout.splice(indexOfLayoutName, 1);

              // save config file
              this.saveConfigFile(folderUrl);
            } else if (_.includes(data.path, 'Header')) {

              var headerName = last_element.replace(".html", "");

              // get index of file to be deleted
              let indexOfHeaderName = _.findIndex(this.globalConfigData[2].layoutOptions[0].Header, function(o) {
                return o.value == headerName;
              });

              // Remove item from array
              this.globalConfigData[2].layoutOptions[0].Header.splice(indexOfHeaderName, 1);

              // save config file
              this.saveConfigFile(folderUrl);
            } else if (_.includes(data.path, 'Footer')) {

              var footerName = last_element.replace(".html", "");

              // get index of file to be deleted
              let indexOfFooterName = _.findIndex(this.globalConfigData[2].layoutOptions[0].Footer, function(o) {
                return o.value == footerName;
              });

              // Remove item from array
              this.globalConfigData[2].layoutOptions[0].Footer.splice(indexOfFooterName, 1);

              // save config file
              this.saveConfigFile(folderUrl);
            } else if (_.includes(data.path, 'Menu')) {

              var menuName = last_element.replace(".menu", "");

              // get index of file to be deleted
              let indexOfMenuName = _.findIndex(this.globalConfigData[2].layoutOptions[0].Menu, function(o) {
                return o.value == menuName;
              });

              // Remove item from array
              this.globalConfigData[2].layoutOptions[0].Menu.splice(indexOfMenuName, 1);

              // save config file
              this.saveConfigFile(folderUrl);
            } else if (_.includes(data.path, 'Sidebar')) {

              var sidebarName = last_element.replace(".html", "");

              // get index of file to be deleted
              let indexOfSidebarName = _.findIndex(ata[2].layoutOptions[0].Sidebar, function(o) {
                return o.value == sidebarName;
              });

              // Remove item from array
              this.globalConfigData[2].layoutOptions[0].Sidebar.splice(indexOfSidebarName, 1);

              // save config file
              this.saveConfigFile(folderUrl);
            } else {
              console.log('Other some file not in config.json');
              // let partialsArray = [];

              // partialsArray.push(Object.keys(this.globalConfigData[2].layoutOptions[0]));

              // console.log('Partials Array:', partialsArray);

              // for (var i = 0; i < partialsArray.length; i++){
              //   var partialNameBreak = last_element.splice('.');
              //   var partialNameOnly = partialNameBreak[0];

              //   console.log('partialNameOnly:', partialNameOnly);

              //   console.log('partialNameOnly data:', this.globalConfigData[2].layoutOptions[0][partialName]);

              //   // get index of file to be deleted
              //   let indexOfPartialName = _.findIndex(this.globalConfigData[2].layoutOptions[0][partialName], function(o) { return o.value == partialNameOnly; });

              //   // Remove item from array
              //   this.globalConfigData[2].layoutOptions[0][partialName].splice(indexOfPartialName, 1);

              //   // save config file
              //   this.saveConfigFile(folderUrl);
              // }
            }

          })
          .catch((e) => {
            console.log(e)
          })
        this.componentId = 'HomePage';
        this.isHomePage = true;
      }).catch((dismiss) => {
        console.log('error', dismiss)
      })
    },

    // Remove Project Folder and Delete GitLab Repository
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
        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + data.path.replace(/\\/g, "/"))
          .then(async(res) => {

            // Delete Repository from GitLab Server
            let response = await axios.get(config.baseURL + '/gitlab-add-repo/' + repositoryId + '?privateToken=' + this.$session.get('privateToken'), {})
              .then((response) => {
                this.$message({
                  showClose: true,
                  message: 'Project successfully deleted..!!',
                  type: 'success'
                });
                setTimeout(function() {
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
        console.log('error', dismiss)
      })
    },

    // If clicked the root folder
    goToHomePage () {
      this.componentId = 'HomePage';
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
                  <el-tooltip content="Add folder" placement="top" >
                      <i class="fa fa-folder-o" style="margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Add file" placement="top" >
                      <i class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Project Settings" placement="top" >
                    <i class="fa fa-cog" style="margin-right: 5px; color: #607C8A" on-click={ () => this.isProjectEditing = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Remove" placement="top" >
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
                <el-tooltip content="Add folder" placement="top" >
                    <i class="fa fa-folder-o" style="margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                </el-tooltip>
                <el-tooltip content="Add file" placement="top" >
                    <i class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                </el-tooltip>
                <el-tooltip content="Remove" placement="top" >
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
                  <el-tooltip content="Remove" placement="top" >
                      <i class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  </el-tooltip>
                  <el-tooltip content="Page Settings" placement="top" >
                    <i class="fa fa-cog" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #607C8A" on-click={ () => this.isPageEditing = true }></i>
                  </el-tooltip>
                  <el-tooltip content="Edit" placement="top" >
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
                  <el-tooltip content="Remove" placement="top" >
                      <i class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  </el-tooltip>
                  <el-tooltip content="Edit" placement="top" >
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
                    <el-tooltip content="Remove" placement="top" >
                        <i class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                    </el-tooltip>
                </span>
            </span>)
        }
        
      }else{
        // Root Folder
        return (<span>
                  <span class="nodelabel" on-click={ () => this.goToHomePage() }>
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
    // cancelEditing() {
    //   this.componentId = 'HomePage';
    //   this.previewGrid = false;
    //   this.isHomePage = true;
    // }

  },

  // events: {
  //   saveFileFromChild: function (){
  //     console.log('File save from child');
  //     // this.saveFile();
  //   },
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*Navigation bar on landing page*/
  .layout-logo{
      width: 140px;
      height: 40px;
      top: 10px;
      text-align: center;
      padding: 2px;
    }
    .layout-logo h4{
      color: #fff !important;
    }

    .loginLink{
      color: #fff;
    }

  .logo{
    padding: 8px 70px;
    cursor: pointer; 
  }
  .loginBtn{
    float: right;
    right: 0;
  }


  .el-menu{
    background-color: #292929;
    /*background-color: rgba(41,41,41,0.6);*/
    box-shadow: 0px 0px 25px;
    border-radius: 0;
    /*opacity: 0.6;*/
    transition: 0.2s all linear;
    /*position: fixed;
    width: 100%;
    top: 0;
    z-index: 0;*/
  }

  .el-menu:hover{
    opacity: 1;
    transition: 0.2s all linear;
  }

  .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover{
    background-color: transparent;
  }

  .welcomeUser{
    color: #eee;
    margin-right: 15px;
    pointer-events: none;
  }

  .btn-dark{
    background-color: #444;
    color: #eee;
    border: 1px solid #333;
    transition: 0.2s all linear;
  }

  .btn-dark:hover{
    background-color: #222;
    transition: 0.2s all linear;
  }

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
      z-index: 15;
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
