<template>
  <div class="index">

    <div class="main-contents">
      <div id="wrapper" class="toggled">

        <!-- Overlay when sidebar is opened. Currently disabled in CSS -->
        <div class="overlay"></div>
    
        <!-- Sidebar Wrapper -->
        <nav id="sidebar-wrapper" role="navigation">
          <div class="treeViewBlock" style="transform: scaleX(-1);">
            <div v-if="isDataLoading === true" class="tree-data-spinner" style="transform: scaleX(-1);">
              <i class="fa fa-circle-o-notch fa-spin fa-2x"></i>
            </div>
            <el-select v-model="value" @change="changeSubscription()" placeholder="Select Your Subscription" style="transform: scaleX(-1); width: 100%">
            <el-option style="width: 100%"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
            </el-select>
            <el-tree v-loading="treeLoading" element-loading-text="Loading..." v-if='isTreeVisible === true' style="transform: scaleX(-1);" :data="directoryTree" empty-text="Loading..." accordion :props="defaultProps" :expand-on-click-node="false" node-key="id" :render-content="renderContent" @node-click="handleNodeClick" :highlight-current=true></el-tree>
          </div>
        </nav>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
          <div class="sideMenuOpener">
            <button type="button" class="hamburger is-open" data-toggle="offcanvas">
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
            <!-- <div class="row" v-if="isHomePage === false && isSettingsPage === false" style="margin-top: 0px;"> -->
            <div class="row" style="margin-top: 0px;">
              <!-- <div v-else class="col-md-4"></div> -->
              <div class="col-md-4 editor-buttons" align="right" v-if="componentId != null">
                  <div style="margin-right:10px; margin: 15px;">
                      <el-button type="info" size="small" @click="generatePreview();" v-if="componentId === 'GrapesComponent' && isPagesFolder === true">Preview</el-button>
                      <el-button type="primary" size="small" @click="goToGrapesEditor()" v-if="isPageCodeEditor">Go to Editor</el-button>
                      <el-button type="primary" size="small" @click="saveFile('void')" v-if="componentId != 'ProjectSettings' && componentId != 'PageSettings' && componentId != 'ProjectStats' && componentId != 'PageStats' && componentId != 'LayoutStats' && componentId != 'PartialStats'  && componentId != 'Dashboard'">Save</el-button>
                  </div>
              </div>

              <!-- New File Dialog if it's not dashboard page -->
              <el-dialog title="File Name" :visible.sync="newFileDialog" size="tiny" >
                  <el-form :model="formAddFile" :rules="rulesFrmFile" ref="formAddFile">
                      <el-form-item prop="filename">
                        <div class="row">
                          <div class="col-md-10">
                            <input type="text" style="display: none;" v-model="formAddFile.filename" v-on:keyup.enter="addFile('formAddFile')" name="">
                            <el-input :maxlength=20 v-model="formAddFile.filename" @change="updateFileNameLimitCount()" @keyup.enter.native="addFile('formAddFile')" auto-complete="off" placeholder="Enter File Name"></el-input>
                          </div>
                          <div class="col-md-2">
                            <span class="inputLimitStatus"> {{fileLimitCount}}/20</span>    
                          </div>
                        </div>
                      </el-form-item> 
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="addFile('formAddFile')" :loading="addNewFileLoading">Create</el-button>
                      <el-button @click="canceldialog('formAddFile')">Cancel</el-button>
                  </span>
              </el-dialog>

              <!-- New Folder Dialog if it's not dashboard page -->
              <el-dialog title="Folder Name" :visible.sync="newFolderDialog" size="tiny" >
                  <el-form :model="formAddFolder" :rules="rulesFolderName" ref="formAddFolder">
                      <el-form-item prop="foldername">
                        <div class="row">
                          <div class="col-md-10">
                            <input type="text" style="display: none;" v-model="formAddFolder.foldername" v-on:keyup.enter="addFolder('formAddFolder')" name="">
                            <el-input :maxlength=20 v-model="formAddFolder.foldername" @change="updateFolderNameLimitCount()" @keyup.enter.native="addFolder('formAddFolder')" auto-complete="off" placeholder="Enter Folder Name"></el-input>
                          </div>
                          <div class="col-md-2">
                            <span class="inputLimitStatus"> {{folderLimitCount}}/20</span>    
                          </div>
                        </div>
                        
                      </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="addFolder('formAddFolder')" :loading="addNewFolderLoading">Create</el-button>
                      <el-button @click="canceldialogfolder('formAddFolder')">Cancel</el-button>
                  </span>
              </el-dialog>

              <!-- New Website Project Dialog if it's not dashboard page -->
              <el-dialog title="Website Name" :visible.sync="newProjectFolderDialog" @close='canceldialogproject("formAddProjectFolder")'>
                <el-form :model="formAddProjectFolder" :rules="rulesProjectName" ref="formAddProjectFolder">
                  <el-form-item prop="projectName">
                    <div class="row">
                      <div class="col-md-11">
                        <input type="text" style="display: none;" v-model="formAddProjectFolder.projectName" v-on:keyup.enter="checknameexist('formAddProjectFolder')" name="">
                        <el-input :maxlength=20 v-model="formAddProjectFolder.projectName" @change="updateProjectNameLimitCount()" @keyup.enter.native="checknameexist('formAddProjectFolder')" auto-complete="off" placeholder="Website Name"></el-input>    
                      </div>
                      <div class="col-md-1">
                        <span class="inputLimitStatus"> {{projectLimitCount}}/20</span>    
                      </div>
                    </div>
                  </el-form-item>

                  <el-form-item>
                    <div class="templateSelection">
                      <strong>Select Template</strong>
                      <ul>
                        <li>
                            <input type="radio" name="layout" value="template1" id="myCheckbox" checked />
                            <label for="myCheckbox" class="radio-img imgThumbnail" v-on:click="setTemplate('none')" title="No Template"></label>
                            <img src="https://placehold.it/250x100/292929?text=BLANK" class="templateThumbnail">
                        </li>
                        <li>
                            <input type="radio" name="layout" value="template1" id="myCheckbox1" />
                            <label for="myCheckbox1" class="radio-img imgThumbnail" v-on:click="setTemplate('template1')" title="Coming Soon Layout"></label>
                            <img src="https://res.cloudinary.com/flowz/raw/upload/v1519456356/builder/images/tpl1.png" class="templateThumbnail">
                        </li>
                        <li>
                            <input type="radio" name="layout" value="template2" id="myCheckbox2" />
                            <label for="myCheckbox2" class="radio-img imgThumbnail" v-on:click="setTemplate('template2')" title="Portfolio Layout"></label>
                            <img src="https://res.cloudinary.com/flowz/raw/upload/v1519456356/builder/images/tpl2.png" class="templateThumbnail">
                        </li>
                        <li>
                            <input type="radio" name="layout" value="template3" id="myCheckbox3" />
                            <label for="myCheckbox3" class="radio-img imgThumbnail" v-on:click="setTemplate('template3')" title="Default Layout"></label>
                            <img src="https://res.cloudinary.com/flowz/raw/upload/v1519452808/builder/images/tpl4.png" class="templateThumbnail">
                        </li>
                      </ul>
                    </div>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="checknameexist('formAddProjectFolder')" v-loading.fullscreen.lock="fullscreenLoading">Create Website</el-button>
                </span>
              </el-dialog>
            </div>

            <!-- <div v-if="isHomePage === true">
              <el-dialog title="File Name" :visible.sync="newFileDialog" size="tiny" >
                  <el-form :model="formAddFile" :rules="rulesFrmFile" ref="formAddFile">
                      <el-form-item prop="filename">
                        <input type="text" style="display: none;" v-model="formAddFile.filename" v-on:keyup.enter="addFile('formAddFile')" name="">
                        <el-input v-model="formAddFile.filename" @keyup.enter.native="addFile('formAddFile')" auto-complete="off" placeholder="Enter File Name"></el-input>
                      </el-form-item>
                       
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="addFile('formAddFile')" :loading="addNewFileLoading">Create</el-button>
                      <el-button  @click="canceldialog('formAddFile')">Cancel</el-button>
                  </span>
              </el-dialog>

              <el-dialog title="Folder Name" :visible.sync="newFolderDialog" size="tiny" >
                  <el-form :model="formAddFolder" :rules="rulesFolderName" ref="formAddFolder">
                      <el-form-item prop="foldername">
                        <input type="text" style="display: none;" v-model="formAddFolder.foldername" v-on:keyup.enter="addFolder('formAddFolder')" name="">
                        <el-input v-model="formAddFolder.foldername" @keyup.enter.native="addFolder('formAddFolder')" auto-complete="off" placeholder="Enter Folder Name"></el-input>
                      </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="addFolder('formAddFolder')" :loading="addNewFolderLoading">Create</el-button>
                      <el-button @click="canceldialogfolder('formAddFolder')">Cancel</el-button>
                  </span>
              </el-dialog>

              <el-dialog title="Website Name" :visible.sync="newProjectFolderDialog" @close='canceldialogproject("formAddProjectFolder")'>
                <el-form :model="formAddProjectFolder" :rules="rulesProjectName" ref="formAddProjectFolder">
                  <el-form-item prop="projectName">
                    <input type="text" style="display: none;" v-model="formAddProjectFolder.projectName" v-on:keyup.enter="checknameexist('formAddProjectFolder')" name="">
                    <el-input :maxlength=20 v-model="formAddProjectFolder.projectName" @keyup.enter.native="checknameexist('formAddProjectFolder')" auto-complete="off" placeholder="Website Name"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <div class="templateSelection">
                      <strong>Select Template</strong>
                      <ul>
                        <li>
                            <input type="radio" name="layout" value="template1" id="myCheckbox" checked />
                            <label for="myCheckbox" class="radio-img imgThumbnail" v-on:click="setTemplate('none')" title="No Template"></label>
                            <img src="https://placehold.it/250x100/292929?text=BLANK" class="templateThumbnail">
                        </li>
                        <li>
                            <input type="radio" name="layout" value="template1" id="myCheckbox1" />
                            <label for="myCheckbox1" class="radio-img imgThumbnail" v-on:click="setTemplate('template1')" title="Coming Soon Layout"></label>
                            <img src="https://res.cloudinary.com/flowz/raw/upload/v1519456356/builder/images/tpl1.png" class="templateThumbnail">
                        </li>
                        <li>
                            <input type="radio" name="layout" value="template2" id="myCheckbox2" />
                            <label for="myCheckbox2" class="radio-img imgThumbnail" v-on:click="setTemplate('template2')" title="Portfolio Layout"></label>
                            <img src="https://res.cloudinary.com/flowz/raw/upload/v1519456356/builder/images/tpl2.png" class="templateThumbnail">
                        </li>
                        <li>
                            <input type="radio" name="layout" value="template3" id="myCheckbox3" />
                            <label for="myCheckbox3" class="radio-img imgThumbnail" v-on:click="setTemplate('template3')" title="Default Layout"></label>
                            <img src="https://res.cloudinary.com/flowz/raw/upload/v1519452808/builder/images/tpl4.png" class="templateThumbnail">
                        </li>
                      </ul>
                    </div>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="checknameexist('formAddProjectFolder')" v-loading.fullscreen.lock="fullscreenLoading">Create Website</el-button>
                </span>
              </el-dialog>
            </div> -->

            <!-- <div v-if="!previewGrid" style="margin-left: 10px;">
              <component :is="componentId" ref="contentComponent"></component>
            </div> -->

            <div v-if="display = true" style="margin-left: 10px;">
              <!-- <el-tabs  v-model="editableTabsValue"  type="card" :tab-position="tabPosition"  editable @tab-click="tabClicked" @edit="handleTabsEdit">
                <el-tab-pane
                  v-for="(item, index) in editableTabs"
                  :key="item.name"
                  :label="item.title"
                  :name="item.name"> -->
                  <!-- <el-tooltip slot="label" :content="item.filepath"><span>{{item.title}}</span></el-tooltip> -->
                  <!-- <component :is="item.componentId" ref="contentComponent" v-on:updateProjectName="getData"></component> -->                  
                  <component :is="componentId" ref="contentComponent" v-on:updateProjectName="getData"></component>
                <!-- </el-tab-pane>
              </el-tabs> -->
            </div>
            <!-- <div v-if="display == true" style="margin-left: 10px;">
              <component :is="componentId" ref="contentComponent" v-on:updateProjectName="getData"></component>
            </div> -->
            
          </div>
        </div>
        <!-- /#page-content-wrapper -->

      </div>
      <!-- /#wrapper -->
    </div>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>

  import $ from 'jquery'

  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  import axios from 'axios';
  import psl from 'psl';
  import _ from 'lodash';

  import HTML from 'vue-html'
  Vue.use(HTML)


  import feathers from 'feathers/client';
  import socketio from 'feathers-socketio/client';
  import io from 'socket.io-client';

  const uuidv4 = require('uuid/v4');

  var daex = require('json-daex');

  import Cookies from 'js-cookie';

  const config = require('../config');
  import Emitter from '../mixins/emitter';

  // Custom Components

  // Home page
  import Dashboard from './editorDashboard'

  // Code Mirror
  import VueCodeMirror from 'vue-codemirror'
  import CodeMirror from './CodeMirror'
  Vue.use(VueCodeMirror)

  // MonacoEditor
  import MonacoEditorChild from './MonacoEditor'

  // GrapesJS Editor
  import GrapesComponent from './GrapesComponent'

  // JSON Viewver
  import JsonViewer from './JsonViewer'   

  // Menu Builder
  import MenuBuilder from './MenuBuilder'

  // GridManager
  import GridManager from './GridManager'

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

  // Footer Bar
  import SiteFooter from './footer'

  let saveInterval = Cookies.get('saveInterval', {domain: location} );

  // New File creation validator
  let checkFileName = (rule, value, callback) => {
      if (!value) {
          return callback(new Error('Please Enter File Name.'));
      }else if(!(/^[a-z0-9A-Z]+$/i.test(value))){
          return callback(new Error('Please Enter valid File Name. (File name must only contain a-z or A-Z and 0-9. Special characters and spaces are not allowed)'));
      }else{
          return callback();
      }
  }

  // New Folder creation validator
  let checkFolderName = (rule, value, callback) => {
      if (!value) {
          return callback(new Error('Please Enter Folder Name.'));
      }else if(!(/^[a-z0-9A-Z]+$/i.test(value))){
          return callback(new Error('Please Enter valid Folder Name. (Folder name must only contain a-z or A-Z and 0-9. Special characters and spaces are not allowed)'));
      }else{
          return callback();
      }
  }

  // New Project creation validator
  let checkProjectName = (rule, value, callback) => {
      if (!value) {
          return callback(new Error('Please Enter Website Name.'));
      }else if(!(/^[a-z0-9A-Z]+$/i.test(value))){
          return callback(new Error('Please Enter valid Website Name. (Project name must only contain a-z or A-Z and 0-9. Special characters and spaces are not allowed)'));
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
        display: true,
        flag: false,
        // tabPosition: 'bottom',
        // taburl: '',
        // editableTabsValue: '0',
        // editableTabs: [],
        // tabIndex:0,
        options: '',
        value:'',
        autoFolders: true,
        directoryTree: [],
        currentFile : null,
        defaultProps: {
          children: 'children',
          label: 'name',
          websitename: 'websitename'
        },
        rootpath : '',
        backuplayout:'',
        componentId: Dashboard,
        addNewFileLoading : false,
        addNewFolderLoading : false,
        addNewProjectFolderLoading : false,
        loadingContent : false,
        saveFileLoading : false,
        fullscreenLoading: false,
        previewGrid : false,
        btnPreview : false,
        breadcrumbArr : [],
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
        rulesFolderName: {
            foldername: [
                { validator: checkFolderName, trigger: 'blur' }
            ]
        },
        formAddProjectFolder : {
            projectName : ''
        },
        currentProjectName: '',
        rulesProjectName: {
            projectName: [
                { validator: checkProjectName, trigger: 'blur' }
            ]
        },
        projectLimitCount: 0,
        folderLimitCount: 0,
        fileLimitCount: 0,
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
          partials: ''
        },
        dialogFormVisible: false,
        previewLoading: false,
        dialogvalue: true,
        buyNowDialog: false,
        isDataLoading: true,
        isTreeVisible: true,
        treeLoading: false
      }
    },
    components: {
      CodeMirror,
      GrapesComponent,
      JsonViewer,
      MenuBuilder,
      Dashboard,
      GridManager,
      PageSettings,
      ProjectSettings,
      ProjectStats,
      PartialStats,
      LayoutStats,
      PageStats,
      MonacoEditorChild,
      SiteFooter
    },
    created () {

      // Check if login token in cookie exist or not
      if(this.$cookie.get('auth_token')){
        this.getData();
        // Set email Session

        axios.get(config.userDetail, {
          headers: {
            'Authorization' : this.$cookie.get('auth_token')
          }   
        })
        .then(async (res) => {
          this.userDetailId = res.data.data._id;

          // Store Token in Cookie
          let location = psl.parse(window.location.hostname)
          location = location.domain === null ? location.input : location.domain

          Cookies.set('email', res.data.data.email, {domain: location});
          Cookies.set('userDetailId',  this.userDetailId, {domain: location});
          
          localStorage.setItem('userDetailId', this.userDetailId);
          localStorage.setItem('email', res.data.data.email);
          
          await axios.post(config.baseURL+'/save-menu' , {
            foldername :'/var/www/html/websites/'+ this.userDetailId,
            type : 'folder'
          })
          .then((res) => {
            this.getData();
          })
          .catch((err) => {
            this.getData();
          });
          
        })
        .catch((e) => {
          console.log(e)
          this.$message({
              showClose: true,
              message: 'Invalid Token',
              type: 'error'
          });
        })
      } else {
        console.log('Token Not found. Please Login.');
        this.$router.push('/login');
      }

      // if(this.$cookie.get('auth_token')){
      //   this.getData();
      // } else {
      //   this.$router.push('/login');
      // }
    },
    async mounted () {

      //console.log('Index Page: ', Cookies.get('email'));

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

      let socket = config.socketURL;
      // if (process.env.NODE_ENV !== 'development') {
      //   socket = io(config.socketURL);
      // } else {
      //   socket = config.socketURL
      // }
      
      const app = feathers().configure(socketio(io(socket)))
      app.service("flows-dir-listing").on("created", (response) => {
          response.path = response.path.replace(/\//g, "\\")
          var s = response.path.replace(this.rootpath, '').split('\\');

          if(s[5] == Cookies.get('userDetailId')){
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
          }

          // this.getData();
          
      })
      app.service("flows-dir-listing").on("removed", (response) => {
          if (response['errno'] == undefined) {
              var s = response.replace(this.rootpath, '').replace(/\//g, "\\").split('\\');

              if(s[5] == Cookies.get('userDetailId')){
                //console.log(s);
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

                this.getData();
              } else {

              }
          }

          
      });
      let sub_id = [];
        await axios.get(config.userDetail ,{ headers: { 'Authorization': Cookies.get('auth_token') } })
        .then(response => {
          let obj_val = Object.values(response.data.data.package)
          let obj_key = Object.keys(response.data.data.package)
          for (let index = 0; index < obj_val.length; index++) {
            sub_id.push({"value":obj_val[index].subscriptionId, "label":obj_val[index].name})
          }
          this.options = sub_id;

          if(!(Cookies.get('subscriptionId')) || Cookies.get('subscriptionId') == null || Cookies.get('subscriptionId') == undefined || Cookies.get('subscriptionId') == ""){
            this.value = sub_id[0].value;
          } else {
            this.value = Cookies.get('subscriptionId')
          }
          // this.value  = sub_id[0].value;

          let location = psl.parse(window.location.hostname)
          location = location.domain === null ? location.input : location.domain
          Cookies.set('subscriptionId', this.value, {domain: location});

          localStorage.setItem("current_sub_id",this.value)
          // if (localStorage.getItem('current_sub_id') != null || localStorage.getItem('current_sub_id') != undefined) {
          //   this.value = localStorage.getItem('current_sub_id')
          // }
          // else{
          //   this.options = sub_id
          //   this.value  = sub_id[0].value;
          //   localStorage.setItem("current_sub_id",this.value)
                  // }
          //this.getDataOfSubscriptionUser();

           // if(Cookies.get("subscriptionId") && Cookies.get("subscriptionId") != undefined){
           //      this.value = Cookies.get("subscriptionId")
        })
        .catch((err)=>{ console.log('Error:', err); })
    },

    methods: {
      // async getDataOfSubscriptionUser(){
      //   let sub_id = []
      //   await axios.get(config.userDetail ,{ headers: { 'Authorization': Cookies.get('auth_token') } })
      //     .then(response => {
      //       let obj_val = Object.values(response.data.data.package)
      //       let obj_key = Object.keys(response.data.data.package)
      //       for (let index = 0; index < obj_val.length; index++) {
      //         sub_id.push({"value":obj_val[index].subscriptionId, "label":obj_val[index].name})
      //       }
      //       this.options = sub_id

      //        if(!Cookies.get("subscriptionId") || Cookies.get("subscriptionId") == undefined || Cookies.get("subscriptionId") == ""){
      //             this.value = sub_id[0].value;
      //             let location = psl.parse(window.location.hostname);
      //             location = location.domain === null ? location.input : location.domain;

      //             Cookies.set("subscriptionId" , this.value, {domain: location});
      //         }
      //     })
      // },
      updateProjectNameLimitCount(){
        this.projectLimitCount = this.formAddProjectFolder.projectName.length;
      },

      updateFolderNameLimitCount(){
        this.folderLimitCount = this.formAddFolder.foldername.length;
      },

      updateFileNameLimitCount(){
        this.fileLimitCount = this.formAddFile.filename.length;
      },

      changeSubscription(){
        this.fullscreenLoading=true
        // this.editableTabs = []

        axios.get(config.subscriptionApi + 'user-subscription/' + this.value ,{ headers: { 'Authorization': Cookies.get('auth_token') } })
          .then(async response => {
            // let location = psl.parse(window.location.hostname);
            // location = location.domain === null ? location.input : location.domain;

            let location = psl.parse(window.location.hostname)
            location = location.domain === null ? location.input : location.domain
            Cookies.set('subscriptionId', this.value, {domain: location});

            localStorage.setItem("current_sub_id", this.value)
            // Cookies.set('userDetailId', response.data.userId, {domain: location});
            Cookies.set('subscriptionId', this.value, {domain: location});
            //axios.defaults.headers.common['Authorization'] =  Cookies.get('auth_token');
            //axios.defaults.headers.common['subscriptionId'] =  this.value;
            await this.getData();
            this.componentId = 'Dashboard';
            this.fullscreenLoading=false
          }).catch((e)=>{
            //  this.$message({
            //   showClose: true,
            //   duration:0,
            //   message: 'Servers are down please try again later.',
            //   type: 'error'
            // });
            console.log(e)
            this.fullscreenLoading=false;
          })
      },

      canceldialogproject(formAddProjectFolder){
       this.$refs[formAddProjectFolder].resetFields();
        // console.log('cancel')
         this.newProjectFolderDialog = false;
         // this.formAddProjectFolder.projectName=''
      },

      canceldialog(formAddFile){
        this.$refs[formAddFile].resetFields();

        this.newFileDialog = false

        // this.formAddFile.filename=''
      },

      canceldialogfolder(formAddFolder){
        this.$refs[formAddFolder].resetFields();

        this.newFolderDialog = false
        // console.log('&&&&')
        // this.formAddFolder.foldername=''
      },

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

      // Route to GrapesEditor page from code view
      goToGrapesEditor: function(){
        // this.saveFile('void')
        this.componentId = 'GrapesComponent';
        this.isPageCodeEditor = false;
        // this.display = false;
        // let url = this.$store.state.fileUrl;
        // let compId = this.componentId;
        // let newTabName = ++this.tabIndex + '';
        // let tab_file_name = url.substring(url.lastIndexOf('/') + 1).trim();
        // let editableTabValue = this.editableTabsValue
        // let selectedPagePositionFirstArray = checkIfExist(url , this.editableTabs);
        // function checkIfExist(filepath,array) {  // The last one is array
        //     var found = array.some(function (el) {
        //       return el.filepath == url;
        //     });
        //     if (!found)
        //     {
        //       let removedArray =_.reject(array, function(el) { return el.filepath == url; });
        //       array = removedArray  ;
        //       editableTabValue = newTabName;
        //         array.push({
        //           title: tab_file_name,
        //           name: newTabName,
        //           content: newTabName,
        //           componentId : compId,
        //           filepath : url
        //         });

        //     }else{
        //       let removedArray =_.reject(array, function(el) { return el.filepath == url; });
        //       array = removedArray  ;
        //       editableTabValue = newTabName;
        //       array.push({
        //           title: tab_file_name,
        //           name: newTabName,
        //           content: newTabName,
        //           componentId : compId,
        //           filepath : url
        //         });
        //     }
        //     return array
        // }
        // this.editableTabs =  selectedPagePositionFirstArray ;
        // this.editableTabs.reverse();
        // this.editableTabsValue = newTabName;
      },
      
      // If clicked the root folder
      goToHomePage () {
        this.display = true
        this.componentId = 'Dashboard';
      },

      // Get directory listing data
      getData() {
        this.treeLoading = true;
        if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
           axios.get(config.baseURL + '/flows-dir-listing?website=' + Cookies.get('userDetailId') + '&subscriptionId=' + this.value)
          .then(async response => {
            response.data.children = this.getTreeData(response.data);

            // setTimeout(async function(){
              for (let i = 0; i < response.data.children.length; i++) {
                // console.log('--------', response.data.children[i].name)

                // Map folder name and project id
                await axios.get(config.baseURL + '/project-configuration/' + response.data.children[i].name, {
                })
                .then((res) => {
                  // console.log(res);
                  response.data.children[i].websitename = res.data.websiteName;

                  if(response.data.children[i].websitename.length>20){
                    response.data.children[i].websitename=response.data.children[i].websitename.substring(0,20)+'...'
                  }

                  response.data.children[i].children = _.remove(response.data.children[i].children, (child) => {
                    return !(child.name == 'public' || child.name == '.git' || child.name == 'metalsmith.js' || child.name == 'temp' || child.name == 'Preview')
                    // return !(child.name == '.git')
                  })

                  this.treeLoading = false;
                })
                .catch((e) => {
                  console.log('Data Error.');  
                  this.treeLoading = false;
                })

                // let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + response.data.children[i].name);

                // response.data.children[i].websitename = rethinkdbCheck.data.websiteName;
                //  if(response.data.children[i].websitename.length>20){
                //   response.data.children[i].websitename=response.data.children[i].websitename.substring(0,20)+'...'
                // }
                
              }
            // },1000);

            if (this.directoryTree.length == 0) {
              this.directoryTree = [response.data];
              this.treeLoading = false;
            } else {
              this.directoryTree[0].children = response.data.children;
              this.treeLoading = false;
            }

            this.isDataLoading = false;
            // this.isTreeVisible = false;
            this.rootpath = this.directoryTree[0].path.replace(this.directoryTree[0].name, '');

          })
          .catch(e => {
            this.treeLoading = false;
            this.isDataLoading = false;
            this.isTreeVisible = false;
            this.$message({
              showClose: true,
              message: 'Services unreachable. Please try again later.',
              type: 'error'
            });
            console.log(e);
          });
        }else{
          this.treeLoading = false;
          this.newProjectFolderDialog = false;
          this.fullscreenLoading = false;
          this.$session.remove('username');
          localStorage.removeItem('current_sub_id');

          let location = psl.parse(window.location.hostname)
          location = location.domain === null ? location.input : location.domain
          
          Cookies.remove('subscriptionId' ,{domain: location});              
          Cookies.remove('auth_token' ,{domain: location});
          Cookies.remove('email' ,{domain: location});
          Cookies.remove('userDetailId' ,{domain: location}); 
          Cookies.remove('subscriptionId' ,{domain: location}); 
          this.$message({
              message: 'You\'re Logged Out From System. Please login again!',
              type: 'error',
              onClose(){
                window.location = '/login'
              }
            });
        }
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
        // console.log('handle click:',data)
        // console.log('directoryTree',this.directoryTree)
        // this.taburl = this.$store.state.fileUrl;
        this.$store.state.fileUrl = data.path;
        // If PageSettings Clicked
        if (this.isPageEditing) {

          clearInterval(saveInterval);

          //   if(this.componentId != 'ProjectStats' && this.componentId != 'LayoutStats' && this.componentId != 'PageStats' && this.componentId != 'PartialStats'){
          //     this.saveFile('getFileContent')
          //   }

          this.isPageEditing = false;
          this.isProjectEditing = false;
          this.isSettingsPage = true;
          this.componentId = 'PageSettings';

          //   this.display = false;

          let url = data.path;
          let compId = this.componentId;

          //   remove this
          // this.tabIndex = 0
          // this.editableTabs = []
          //////////////////

          //   let newTabName = ++this.tabIndex + '';
          //   let tab_file_name = url.substring(url.lastIndexOf('/') + 1).trim();
          //   let editableTabValue = this.editableTabsValue
          //   let selectedPagePositionFirstArray = checkIfExist(url , this.editableTabs);
          //   function checkIfExist(filepath,array) {  // The last one is array
          //       var found = array.some(function (el) {
          //         return el.filepath == url;
          //       });
          //       if (!found)
          //       {
          //         let removedArray =_.reject(array, function(el) { return el.filepath == url; });
          //         array = removedArray  ;
          //         editableTabValue = newTabName;
          //           array.push({
          //             title: tab_file_name,
          //             name: newTabName,
          //             content: newTabName,
          //             componentId : compId,
          //             filepath : url
          //           });

          //       }else{
          //         let removedArray =_.reject(array, function(el) { return el.filepath == url; });
          //         array = removedArray  ;
          //         editableTabValue = newTabName;
          //         array.push({
          //             title: tab_file_name,
          //             name: newTabName,
          //             content: newTabName,
          //             componentId : compId,
          //             filepath : url
          //           });
          //       }
          //       return array
          //   }

          //   this.editableTabs =  selectedPagePositionFirstArray ;

          //   this.editableTabs.reverse();
          //   this.editableTabsValue = newTabName;
        }
        // If ProjectSettings is clicked 
        else if (this.isProjectEditing) {
          // clearInterval(saveInterval);
          //   if(this.componentId != 'ProjectStats' && this.componentId != 'LayoutStats' && this.componentId != 'PageStats' && this.componentId != 'PartialStats'){
          //     this.saveFile('getFileContent')
          //   }

          this.isProjectEditing = false;
          this.$store.state.fileUrl = data.path;
          this.isSettingsPage = true;
          this.componentId = 'ProjectSettings';

          //   this.display = true;

          // let url = data.path;
          // let compId = this.componentId;

          // let newTabName = ++this.tabIndex + '';
          // let tab_file_name = url.substring(url.lastIndexOf('/') + 1).trim();

          // let editableTabValue = this.editableTabsValue

          // let selectedPagePositionFirstArray = checkIfExist(url , this.editableTabs);
          // function checkIfExist(filepath,array) {  // The last one is array
          //     var found = array.some(function (el) {
          //       return el.filepath == url;
          //     });
          //     if (!found)
          //     {
          //         array.push({
          //           title: tab_file_name,
          //           name: newTabName,
          //           content: newTabName,
          //           componentId : compId,
          //           filepath : url
          //         });

          //     }else{
          //       let removedArray =_.reject(array, function(el) { return el.filepath == url; });
          //       array = removedArray  ;
          //       editableTabValue = newTabName;
          //       array.push({
          //           title: tab_file_name,
          //           name: newTabName,
          //           content: newTabName,
          //           componentId : compId,
          //           filepath : url
          //         });
          //     }
          //     return array
          // }

          // this.editableTabs =  selectedPagePositionFirstArray ;
          // this.editableTabs.reverse();
          // this.editableTabsValue = newTabName;
        }
        // If Clicked in ProjectName 
        else if (this.isProjectStats) {
          // clearInterval(saveInterval);
          this.isProjectEditing = false;
          this.isProjectStats = false;
          this.$store.state.fileUrl = data.path;
          this.isSettingsPage = false;
          this.componentId = 'ProjectStats';
          //   this.display = true;
          localStorage.setItem("folderUrl", data.path);
        }
        // If Clicked in Partials Folder 
        else if ((_.includes(data.path, '/Partials') || (_.includes(data.path, '/Partials/'))) && !(_.includes(data.path, '.partial')) && !(_.includes(data.path, '.menu'))) {
          // clearInterval(saveInterval);
          //console.log('Data Path: ', data.path);

          //   if(this.componentId != 'ProjectStats' && this.componentId != 'LayoutStats' && this.componentId != 'PageStats' && this.componentId != 'PartialStats'){
          //     this.saveFile('getFileContent')
          //   }

          this.isProjectEditing = false;
          this.isProjectStats = false;
          this.$store.state.fileUrl = data.path;
          this.isSettingsPage = false;
          this.componentId = 'PartialStats';
          //   this.display = true;
        }
        // If Clicked in Layouts Folder 
        else if (_.includes(data.path, '/Layout') && !(_.includes(data.path, '/Layout/'))) {
          // clearInterval(saveInterval);

          //   if(this.componentId != 'ProjectStats' && this.componentId != 'LayoutStats' && this.componentId != 'PageStats' && this.componentId != 'PartialStats'){
          //     this.saveFile('getFileContent')
          //   }

          this.isProjectEditing = false;
          this.isProjectStats = false;
          this.$store.state.fileUrl = data.path;
          this.isSettingsPage = false;
          this.componentId = 'LayoutStats';
          //   this.display = true;
        }
        // If Clicked in Pages Folder 
        else if (_.includes(data.path, '/Pages') && !(_.includes(data.path, '/Pages/'))) {

          // clearInterval(saveInterval);
          //   if(this.componentId != 'ProjectStats' && this.componentId != 'LayoutStats' && this.componentId != 'PageStats' && this.componentId != 'PartialStats'){
          //     this.saveFile('getFileContent')        
          //   }

          this.isProjectEditing = false;
          this.isProjectStats = false;
          this.$store.state.fileUrl = data.path;
          this.isSettingsPage = false;
          this.componentId = 'PageStats';
          //   this.display = true;
        }
        // Every other clicks
        else {
          //   this.fullscreenLoading = true;
          //   this.display = true;
          this.isProjectStats = false;
          this.isPartialStats = false;
          this.isPageEditing = false;
          this.isProjectEditing = false;
          this.previewGrid = false;
          this.isSettingsPage = false;
          this.currentFile = data;
          if (data.type == "file") {
            // this.display = false;
            // if(this.flag != true && this.editableTabs.length > 0){
            //   if(this.componentId != 'ProjectStats' && this.componentId != 'LayoutStats' && this.componentId != 'PageStats' && this.componentId != 'PartialStats') {
            //     this.saveFile('getFileContent')
            //   }
            // }
            // this.flag = false;

            // let self = this;
            // setTimeout(async function(){
            this.getFileContent(data.path);
            //   self.fullscreenLoading = false;
            // },50)
          }

          this.fullscreenLoading = false;

        }
      },

      // If Tabs is clicked
    //   tabClicked : async function(targetName, action) {
    //     this.fullscreenLoading = true;
    //     this.saveFile('tabClicked');

    //     let findingValue =  _.filter(this.editableTabs, {name: targetName._props.name});
    //     this.$store.state.fileUrl = findingValue[0].filepath;
    //     this.componentId = targetName.$vnode.componentOptions.children[0].componentOptions.tag
    //     this.flag = true
    //     this.handleNodeClick({path : this.$store.state.fileUrl, type:"file"});
    //     var componentId = this.componentId
    //     let myIndex = _.findIndex(this.$refs.contentComponent, function(o) { return o.$vnode.componentOptions.tag === componentId;});
    //     let newContent
    //     // switch (this.componentId) {
    //     //   case 'GrapesComponent':
    //     //     this.$refs.contentComponent[myIndex].getSavedHtml();
    //     //     newContent = this.$store.state.content;
    //     //     break;
    //     //   case 'json-viewer':
    //     //     newContent = JSON.stringify(this.$store.state.content);
    //     //     break;
    //     //   case 'GridManager':
    //     //     await this.$refs.contentComponent[myIndex].getSavedHtml();
    //     //     newContent = this.$store.state.content;
    //     //     break;
    //     //   case 'MenuBuilder':
    //     //     // this.saveJsonFile('else');
    //     //     break;
    //     //   default:
    //     //       newContent = this.$store.state.content;
    //     // }
    //   },

      // Closing a tab
    //   handleTabsEdit: async function(targetName, action) {
    //     let activeName;
    //     let tabs;

    //     let findingValue =  _.filter(this.editableTabs, {name: targetName});
    //     this.$store.state.fileUrl =findingValue[0].filepath;
    //     // save the content
    //     // this.$refs.contentComponent[0].getHtml();
    //     // let newContent = this.$store.state.content;

    //     if (action === 'remove') {
    //       // this.saveFile('savebutton');
    //       tabs = this.editableTabs;
    //       activeName = this.editableTabsValue;
    //       if (activeName === targetName) {
    //         this.saveFile('void');
    //         tabs.forEach((tab, index) => {
    //           if (tab.name === targetName) {
    //             let nextTab = tabs[index + 1] || tabs[index - 1];
    //             if (nextTab) {
    //               activeName = nextTab.name;
    //               this.$store.state.fileUrl = nextTab.filepath
    //               this.flag = true
    //               this.handleNodeClick({path : this.$store.state.fileUrl, type:"file"});
    //             }
    //           }
    //         });
    //       } else {
    //         // let componentId = findingValue[0].componentId;
    //         // this.componentId = findingValue[0].componentId;
    //         // let myIndex = _.findIndex(this.$refs.contentComponent, function(o) { return o.$vnode.componentOptions.tag === componentId;});
    //         // let newContent
    //         // switch (this.componentId) {
    //         //   case 'GrapesComponent':
    //         //     await this.$refs.contentComponent[myIndex].getSavedHtml();
    //         //     newContent = this.$store.state.content;
    //         //     break;
    //         //   case 'json-viewer':
    //         //     newContent = JSON.stringify(this.$store.state.content);
    //         //     break;
    //         //   case 'GridManager':
    //         //     await this.$refs.contentComponent[myIndex].getSavedHtml();
    //         //     newContent = this.$store.state.content;
    //         //     break;
    //         //   case 'MenuBuilder':
 
    //         //   let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //         //   let tempurlparts = configFileUrl.split("/");
    //         //   let fileName = tempurlparts[0] + '/' + tempurlparts[1] + '/' + tempurlparts[2] + '/' + tempurlparts[3] + '/' + tempurlparts[4] + '/' + tempurlparts[5] + '/' + tempurlparts[6];
    //         //   console.log('fileName', fileName)
    //         //   var folderUrl = fileName
 
    //         //   let urlparts = this.$store.state.fileUrl.split("/");
    //         //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //         //   let fileNameParts = fileNameOrginal.split('.');
    //         //   let actualFileNameOnly = fileNameParts[0];
    //         //   let newJsonName = folderUrl + '/public/assets/'+actualFileNameOnly+'.json';
    //         //   console.log('/var/www/html/websites/59a8e0dd41dc17001aeb1e67/a/public/assets/default.json', newJsonName)
    //         //   let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' +  newJsonName , {
    //         //   });
    //         //   // console.log('response.data', response.data)
    //         //   this.$store.state.content = response.data
    //         //   newContent = this.$store.state.content
    //         //     // this.saveJsonFile('else');
    //         //     break;
    //         //   default:
    //         //       newContent = this.$store.state.content;
    //         // }
    //         // this.taburl = this.$store.state.fileUrl
    //         // this.saveFileData(newContent);
    //       }
    //       this.editableTabsValue = activeName;
    //       this.editableTabs = tabs.filter(tab => tab.name !== targetName);

    //       if(this.editableTabs.length != 0){
    //         // this.$store.state.fileUrl = this.editableTabs[0].filepath
    //         // // console.log('this.$store.state.fileUrl', this.$store.state.fileUrl)
    //         // let componentId = this.editableTabs[0].componentId;
    //         // this.componentId = this.editableTabs[0].componentId;
    //         // let myIndex = _.findIndex(this.$refs.contentComponent, function(o) { return o.$vnode.componentOptions.tag === componentId;});
    //         // let newContent
    //         // switch (this.componentId) {
    //         //   case 'GrapesComponent':
    //         //     await this.$refs.contentComponent[myIndex].getSavedHtml();
    //         //     newContent = this.$store.state.content;
    //         //     break;
    //         //   case 'json-viewer':
    //         //     newContent = JSON.stringify(this.$store.state.content);
    //         //     break;
    //         //   case 'GridManager':
    //         //     await this.$refs.contentComponent[myIndex].getSavedHtml();
    //         //     newContent = this.$store.state.content;
    //         //     break;
    //         //   case 'MenuBuilder':
 
    //         //   let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //         //   let tempurlparts = configFileUrl.split("/");
    //         //   let fileName = tempurlparts[0] + '/' + tempurlparts[1] + '/' + tempurlparts[2] + '/' + tempurlparts[3] + '/' + tempurlparts[4] + '/' + tempurlparts[5] + '/' + tempurlparts[6];
    //         //   console.log('fileName', fileName)
    //         //   var folderUrl = fileName
 
    //         //   let urlparts = this.$store.state.fileUrl.split("/");
    //         //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //         //   let fileNameParts = fileNameOrginal.split('.');
    //         //   let actualFileNameOnly = fileNameParts[0];
    //         //   let newJsonName = folderUrl + '/public/assets/'+actualFileNameOnly+'.json';
    //         //   console.log('/var/www/html/websites/59a8e0dd41dc17001aeb1e67/a/public/assets/default.json', newJsonName)
    //         //   let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' +  newJsonName , {
    //         //   });
    //         //   console.log('response.data', response.data)
    //         //   this.$store.state.content = response.data
    //         //   newContent = this.$store.state.content
    //         //     // this.saveJsonFile('else');
    //         //     break;
    //         //   default:
    //         //       newContent = this.$store.state.content;
    //         // }
    //       } else {
    //         // clearInterval(saveInterval);
    //       }
    //     }
    //   },

      // Get File content Locally
      getFileContent: async function(url) {

        this.fullscreenLoading = true;

        // let configFileUrl = url.replace(/\\/g, "\/");
        // let urlparts = configFileUrl.split("/");
        // let fileNameOrginal = urlparts[urlparts.length - 1];

        url = url.replace(/\\/g, "\/")
        this.btnPreview = false
        this.previewFile = false
        this.loadingContent = true
        this.componentId = null
        let ext = url.split('.').pop();

        this.$store.state.fileUrl = url;
        let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + url).catch((err)=>{ console.log('Error:', err); });

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
              this.fullscreenLoading = false;
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
              this.fullscreenLoading = false;
              break;
            case 'layout':
              this.isGridPreview = false;
              this.isMenuBuilder = false;
              this.isHomePage = false;
              this.isPageCodeEditor = false;

              if (this.isEditOption == true) {
                this.componentId = 'CodeMirror'
                this.isEditOption = false
              } else {
                this.componentId = 'GridManager'
              }
              this.fullscreenLoading = false;
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
                  let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' +  this.$store.state.fileUrl, {
                  }).catch((err)=>{ console.log('Error:', err); });
                  this.$store.state.content = response.data
                } else {
                  this.isPageCodeEditor = false;
                }

                this.componentId = 'MonacoEditorChild'
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
                // console.log('#############', this.componentId)
                // this.getConfigFileData();
              }
              this.fullscreenLoading = false;
              break;
            case 'partial':
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

                this.componentId = 'MonacoEditorChild'
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
              this.fullscreenLoading = false;
              break;
            case 'menu':
              this.isGridPreview = false;
              this.isMenuBuilder = true;
              this.isHomePage = false;
              this.isPageCodeEditor = false;
              this.componentId = 'MenuBuilder';
              this.fullscreenLoading = false;
              break;
            default:
              this.isGridPreview = false;
              this.isMenuBuilder = false;
              this.isHomePage = false;
              this.isPageCodeEditor = false;
              this.componentId = 'MonacoEditorChild';
              this.fullscreenLoading = false;
              break;
          }
        }

        // let compId = this.componentId;

        // let newTabName = ++this.tabIndex + '';
        // let tab_file_name = url.substring(url.lastIndexOf('/') + 1).trim();

        // let editableTabValue = this.editableTabsValue
        // let selectedPagePositionFirstArray = await checkIfExist(url , this.editableTabs);

        // this.fullscreenLoading = false;

        // var self = this
         //  function checkIfExist(filepath,array) {  // The last one is array

         //     var found = array.some(function (el) {
         //       return el.filepath == url;
         //     });

         //     if (!found)
         //     {
         //       let removedArray =_.reject(array, function(el) { return el.filepath == url; });
         //       array = removedArray  ;
         //       editableTabValue = newTabName;
         //         array.push({
         //           title: tab_file_name,
         //           name: newTabName,
         //           content: newTabName,
         //           componentId : compId,
         //           filepath : url
         //         });

         //     }else{
         //       let removedArray =_.reject(array, function(el) { return el.filepath == url; });
         //       array = removedArray  ;
         //       editableTabValue = newTabName;
         //       array.push({
         //           title: tab_file_name,
         //           name: newTabName,
         //           content: newTabName,
         //           componentId : compId,
         //           filepath : url
         //         });
         //     }

             
         //     return array
         // }

         // this.fullscreenLoading = false;
         // this.editableTabs =  selectedPagePositionFirstArray ;
         // this.editableTabs.reverse();
         // this.editableTabsValue = newTabName;
       // if(this.editableTabs[0].title){
       //   // clearInterval(saveInterval);
       //   var title = this.editableTabs[0].title;
       //   saveInterval = setInterval(function(){
       //     self.saveFile('void')
       //    }, 3000);
       // }

        // var self = this;
        // clearInterval(saveInterval);
       
        // saveInterval = setInterval(function(){
        //  self.saveFile('void')
        // }, saveInterval);



        this.breadcrumbArr = url.replace(this.rootpath, '').split('\\')
        this.loadingContent = false
        // this.fullscreenLoading = false
      },

      // Get particular project's config.json file
      async getConfigFileData(folderUrl) {
        let foldername = folderUrl.split('/');
        foldername = foldername[6];

        let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + foldername ).catch((err)=>{ console.log('Error:', err); });
        let rawConfigs = responseConfig.data.configData;
        return this.globalConfigData = rawConfigs;
      },

      // Save config File
      async saveConfigFile(folderUrl){
        // console.log('inside saveConfigFile')
        let foldername = folderUrl.split('/');
        foldername = foldername[6];
        // console.log('folderUrl:',folderUrl)
        // console.log('foldername:',foldername)
        let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + foldername ).catch((err)=>{ console.log('Error:', err); });

        if(rethinkdbCheck.data){
          // console.log('data checked')
          // update existing data
          return await axios.patch(config.baseURL + '/project-configuration/' + foldername, {
            configData: this.globalConfigData
          })
          .then(async (res) => {
            // console.log('successfully patched:')
          })
          .catch((e) => {
              this.$message({
                  showClose: true,
                  message: 'Failed! Please try again.',
                  type: 'error'
              });
              console.log(e)
          });

          } else {
          this.$message({
              showClose: true,
              message: 'Data Error.',
              type: 'error'
          });
        }   
      },

      // Create new Folder
      async addFolder(foldername) {
        if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
          this.$refs[foldername].validate(async (valid) => {
            if (valid) {
              this.folderLimitCount = 0;
              this.newFolderDialog = false;
              this.addNewFolderLoading = false;
              
              let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
              let urlparts = configFileUrl.split("/");
              let fileNameOrginal = urlparts[urlparts.length - 1];
              let fileName = '';
              if (_.includes(configFileUrl, 'Partials')) {
                fileName = '/' + urlparts[urlparts.length - 1];
              }
              let folderUrl = configFileUrl.replace(fileName, '');
              let foldername = folderUrl.split('/');
              foldername = foldername[(foldername.length - 1)];
              // this.getConfigFileData(folderUrl);
              let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + foldername).catch((err)=>{ console.log('Error:', err); });
              let rawConfigs = responseConfig.data.configData;
              let newFolderName = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/' + this.formAddFolder.foldername;
              let checkfilename = false
              for (let i = 0; i < Object.keys(rawConfigs[2].layoutOptions[0]).length; i++) {
                if (Object.keys(rawConfigs[2].layoutOptions[0])[i] == newFolderName.split('/')[newFolderName.split('/').length - 1]) {

                  checkfilename = true
                }
              }
              if (checkfilename == true) {
                //// console.log('file already exists')
                this.addNewFolderLoading = false;
                this.$message({
                  showClose: true,
                  message: 'Folder already exists!!!',
                  type: 'error'
                });
              } else {
                this.$store.state.updateStats = Math.random();
                return axios.post(config.baseURL + '/flows-dir-listing', {
                    foldername: newFolderName,
                    type: 'folder'
                  })
                  .then(async (res) => {

                    // let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
                    // let urlparts = configFileUrl.split("/");
                    // let fileNameOrginal = urlparts[urlparts.length - 1];
                    // let fileName = '';
                    // if(_.includes(configFileUrl, 'Partials')){
                    //     fileName = '/' + urlparts[urlparts.length - 1];
                    // }
                    // let folderUrl = configFileUrl.replace(fileName, '');
                    // let foldername = folderUrl.split('/');
                    // foldername = foldername[(foldername.length - 1)];
                    // // this.getConfigFileData(folderUrl);
                    // let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + Cookies.get('email') + '&websiteName=' + foldername );
                    // let rawConfigs = responseConfig.data.data[0].configData;
                    this.globalConfigData = rawConfigs;

                    
                    if (this.$store.state.fileUrl.replace(/\\/g, "\/").match('/Partials')) {
                      axios.post(config.baseURL + '/flows-dir-listing', {
                          filename: newFolderName + '/default.partial',
                          text: '',
                          type: 'file'
                        })
                        .then((res) => {

                          let checkfolder = false
                          for (let i = 0; i < Object.keys(this.globalConfigData[2].layoutOptions[0]).length; i++) {
                            var temp = Object.keys(this.globalConfigData[2].layoutOptions[0])[i]
                            if (temp == this.formAddFolder.foldername) {
                              //console.log("File already exists");
                              checkfolder = true
                            }
                          }
                          if (checkfolder != true) {
                            //console.log("As, folder not found in config file. We are adding this folder inside config file:")
                            var obj = {
                              value: 'default',
                              label: 'default'
                            }
                            this.globalConfigData[2].layoutOptions[0][this.formAddFolder.foldername] = []
                            this.globalConfigData[2].layoutOptions[0][this.formAddFolder.foldername].push(obj)
                          }
                          this.formAddFolder.foldername=''
                          this.saveConfigFile(folderUrl)

                        }).catch((e) => {
                          console.log(e)
                        })

                    }
                  })
                  .catch((e) => {
                    this.$message({
                      showClose: true,
                      message: 'Folder creation failed. Try again.',
                      type: 'error'
                    });
                    //console.log(e)
                  })
              }

            }
          })
        } else {
          this.newProjectFolderDialog = false;
          this.fullscreenLoading = false;
          this.$session.remove('username');
          localStorage.removeItem('current_sub_id');
          Cookies.remove('subscriptionId' ,{domain: location});
          let location = psl.parse(window.location.hostname)
          location = location.domain === null ? location.input : location.domain

          Cookies.remove('auth_token', {
            domain: location
          });
          Cookies.remove('email', {
            domain: location
          });
          Cookies.remove('userDetailId', {
            domain: location
          });
          Cookies.remove('subscriptionId', {
            domain: location
          });
          this.$message({
              message: 'You\'re Logged Out From System. Please login again!',
              type: 'error',
              onClose(){
                window.location = '/login'
              }
            });
        }
      },

      // Create new File
      async addFile(formName) {
        if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined){
            // let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
          // let urlparts = configFileUrl.split("/");
          // let fileNameOrginal = urlparts[urlparts.length - 1];
          // let foldername = urlparts[urlparts.length - 1];
          // let fileName = '/' + urlparts[urlparts.length - 1];
          // var folderUrl = configFileUrl.replace(fileName, '');


          let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
          let urlparts = configFileUrl.split("/");
          let fileNameOrginal = urlparts[urlparts.length - 1];
          let foldername = urlparts[urlparts.length - 2];
          // let fileName = '/' + urlparts[urlparts.length-1];



          let fileName = '';
          if (_.includes(configFileUrl, 'Partials')) {
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
          } else if (_.includes(configFileUrl, 'Pages')) {
            fileName = '/' + urlparts[urlparts.length - 1];
          } else if (_.includes(configFileUrl, 'Layout')) {
            fileName = '/' + urlparts[urlparts.length - 1];
          } else {
            fileName = '/' + urlparts[urlparts.length - 1];
          }

          var folderUrl = configFileUrl.replace(fileName, '');

          let projectName = folderUrl.split('/');
          projectName = projectName[6];

          // this.getConfigFileData(folderUrl);

          let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + projectName).catch((err)=>{ console.log('Error:', err); });
          let rawConfigs = responseConfig.data.configData;
          this.globalConfigData = rawConfigs;

          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.addNewFileLoading = true;
              var name = this.formAddFile.filename;
              this.fileLimitCount = 0;
              var newfilename = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/' + this.formAddFile.filename
              let checkfilename = false
              if (newfilename.indexOf('Pages') > 0) {
                for (let i = 0; i < rawConfigs[1].pageSettings.length; i++) {
                  if (name == rawConfigs[1].pageSettings[i].PageName.split('.')[0]) {
                    checkfilename = true
                  }
                }
              } else {

                for (let i = 0; i < Object.keys(rawConfigs[2].layoutOptions[0]).length; i++) {
                  if (Object.keys(rawConfigs[2].layoutOptions[0])[i] == newfilename.split('/')[newfilename.split('/').length - 2])
                    for (let p = 0; p < rawConfigs[2].layoutOptions[0][Object.keys(rawConfigs[2].layoutOptions[0])[i]].length; p++) {
                      let namepartial = rawConfigs[2].layoutOptions[0][Object.keys(rawConfigs[2].layoutOptions[0])[i]][p].label
                      if (name == namepartial) {

                        checkfilename = true
                      }
                    }
                }
              }


              if (checkfilename == true) {
                //console.log('file already exists')
                this.addNewFileLoading = false
                this.$message({
                  showClose: true,
                  message: 'File already exists!!!',
                  type: 'error'
                });
              } else {
                if (newfilename.search('/Partials') != -1 && newfilename.search('/Menu') == -1) {
                  this.$store.state.updateStats = Math.random();
                  return axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: newfilename + '.partial',
                      text: ' ',
                      type: 'file'
                    })
                    .then((res) => {
                      this.newFileDialog = false
                      this.addNewFileLoading = false
                      this.formAddFile.filename = null

                      let temp = {
                        value: name,
                        label: name
                      }

                      let checkValue = false;
                      var namefolder = this.$store.state.fileUrl.replace(/\\/g, "\/").split('/')
                      namefolder = namefolder[namefolder.length - 1];

                      if (namefolder != 'Pages') {
                        if (this.globalConfigData[2].layoutOptions[0][namefolder]) {
                          for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][namefolder].length; i++) {
                            var obj = this.globalConfigData[2].layoutOptions[0][namefolder][i];
                            if ((obj.label) == name) {
                              checkValue = true;
                            }
                          }
                          if (checkValue == true) {} else {
                            this.globalConfigData[2].layoutOptions[0][namefolder].push(temp);

                            // saveConfigFile
                            this.saveConfigFile(folderUrl);
                          }

                        } else {
                          this.globalConfigData[2].layoutOptions[0][namefolder] = [];
                          this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                          this.saveConfigFile(folderUrl);
                        }
                      }


                    })
                    .catch((e) => {
                      //console.log(e)
                    })
                } else if (newfilename.search('/Partials') != -1 && newfilename.search('/Menu') != -1) {
                  this.$store.state.updateStats = Math.random();
                  return axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: newfilename + '.menu',
                      text: ' ',
                      type: 'file'
                    })
                    .then((res) => {
                      this.newFileDialog = false
                      this.addNewFileLoading = false
                      this.formAddFile.filename = null;

                      let temp = {
                        value: name,
                        label: name
                      }

                      let checkValue = false;
                      var namefolder = this.$store.state.fileUrl.replace(/\\/g, "\/").split('/')
                      namefolder = namefolder[namefolder.length - 1];

                      if (namefolder != 'Pages') {
                        if (this.globalConfigData[2].layoutOptions[0][namefolder]) {
                          for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][namefolder].length; i++) {
                            var obj = this.globalConfigData[2].layoutOptions[0][namefolder][i];
                            if ((obj.label) == name) {
                              checkValue = true;
                            }
                          }
                          if (checkValue == true) {} else {
                            this.globalConfigData[2].layoutOptions[0][namefolder].push(temp);

                            // saveConfigFile
                            this.saveConfigFile(folderUrl);
                          }

                        } else {
                          this.globalConfigData[2].layoutOptions[0][namefolder] = [];
                          this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                          this.saveConfigFile(folderUrl);
                        }
                      }


                    })
                    .catch((e) => {
                      //console.log(e)
                    })
                } else if (newfilename.search('/Pages') != -1) {
                  this.$store.state.updateStats = Math.random();
                  // this.$store.state.updateStats = 'PageUpdate';
                  return axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: newfilename + '.html',
                      text: ' ',
                      type: 'file'
                    })
                    .then((res) => {


                      this.newFileDialog = false
                      this.addNewFileLoading = false
                      this.formAddFile.filename = null

                      let temp = {
                        value: name,
                        label: name
                      }

                      let checkValue = false;
                      var namefolder = this.$store.state.fileUrl.replace(/\\/g, "\/").split('/')
                      namefolder = namefolder[namefolder.length - 1];

                      if (namefolder == 'Pages') {
                        //// console.log('inside pages')
                        var totpartial = []
                        for (let k = 0; k < this.globalConfigData[2].layoutOptions[0].Layout.length; k++) {
                          if (this.globalConfigData[2].layoutOptions[0].Layout[k].label == 'default') {
                            //console.log('inside default layout');
                            if (this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList.length > 0) {
                              //// console.log('defaultList:',this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList)
                              totpartial = JSON.parse(JSON.stringify(this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList))
                              //// console.log('found some default partial')

                            }
                            //// console.log('totpartial:',totpartial);
                            if (this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList.length > 0) {

                              for (let j = 0; j < this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList.length; j++) {
                                let checklayoutvalue = false;
                                for (let r = 0; r < totpartial.length; r++) {
                                  //// console.log('totpartial[r]:',Object.keys(totpartial[r])[0])
                                  if (Object.keys(totpartial[r])[0] == this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList[j]) {
                                    checklayoutvalue = true;
                                    totpartial[r][Object.keys(totpartial[r])[0]] = totpartial[r][Object.keys(totpartial[r])[0]].split('.')[0]
                                  }
                                }
                                if (checklayoutvalue != true) {
                                  var obj = {}
                                  obj[this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList[j]] = 'default'
                                  totpartial.push(obj);
                                }

                              }
                            }
                          }
                        }

                        var PageSettings = {
                          "PageName": name + '.html',
                          "PageSEOTitle": "",
                          "PageSEOKeywords": "",
                          "PageSEODescription": "",
                          "PageLayout": "default",
                          "PageCss": [],
                          "PageExternalCss": [],
                          "PageExternalJs": [],
                          "PageMetaInfo": [],
                          "PageMetacharset": 'UTF-8',
                          "PageScripts": [],
                          "PageStyles": [],
                          "partials": totpartial
                        };

                        this.globalConfigData[1].pageSettings.push((PageSettings))
                        this.saveConfigFile(folderUrl);
                      }
                    })
                    .catch((e) => {
                      console.log(e)
                    })
                } else if (newfilename.search('/Layout') != -1) {
                  this.$store.state.updateStats = Math.random();
                  return axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: newfilename + '.layout',
                      text: ' ',
                      type: 'file'
                    })
                    .then((res) => {
                      this.newFileDialog = false
                      this.addNewFileLoading = false
                      this.formAddFile.filename = null

                      let temp = {
                        value: name,
                        label: name
                      }

                      let checkValue = false;
                      var namefolder = this.$store.state.fileUrl.replace(/\\/g, "\/").split('/')
                      namefolder = namefolder[namefolder.length - 1];

                      if (namefolder != 'Pages') {
                        if (this.globalConfigData[2].layoutOptions[0][namefolder]) {
                          for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][namefolder].length; i++) {
                            var obj = this.globalConfigData[2].layoutOptions[0][namefolder][i];
                            if ((obj.label) == name) {
                              checkValue = true;
                            }
                          }
                          if (checkValue == true) {} else {
                            this.globalConfigData[2].layoutOptions[0][namefolder].push(temp);

                            // saveConfigFile
                            this.saveConfigFile(folderUrl);
                          }

                        } else {
                          this.globalConfigData[2].layoutOptions[0][namefolder] = [];
                          this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                          this.saveConfigFile(folderUrl);
                        }
                      }


                    })
                    .catch((e) => {
                      //console.log(e)
                    })
                }
              }

            } else {
              // console.log('error submit!!');
              return false;
            }
          });
        // this.form.formName=''
        // this.formAddFile.filename=''
        } else{
            this.newProjectFolderDialog = false;
            this.fullscreenLoading = false;
            this.$session.remove('username');
            localStorage.removeItem('current_sub_id');
            Cookies.remove('subscriptionId' ,{domain: location});
            let location = psl.parse(window.location.hostname)
            location = location.domain === null ? location.input : location.domain
                          
            Cookies.remove('auth_token' ,{domain: location});
            Cookies.remove('email' ,{domain: location});
            Cookies.remove('userDetailId' ,{domain: location}); 
            Cookies.remove('subscriptionId' ,{domain: location}); 
            this.$message({
              message: 'You\'re Logged Out From System. Please login again!',
              type: 'error',
              onClose(){
                window.location = '/login'
              }
            });
          }
      },
      
     // async checknameexist(){
     //  this.fullscreenLoading = true;
     //  this.formAddProjectFolder.projectName = this.formAddProjectFolder.projectName;
     //  this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
     //    var userid=this.folderUrl.split('/')[this.folderUrl.split('/').length-1]
     //    // console.log('userid',userid)
     //    var alldatauser=await axios.get( config.baseURL + '/project-configuration?userId='+userid)
     //    let checkdetail=true
     //    for(let i=0;i<alldatauser.data.data.length;i++){
     //      if( this.formAddProjectFolder.projectName ==alldatauser.data.data[i].websiteName){
     //        checkdetail=false

     //      }
     //    }
     //    if(checkdetail!=false){
     //      // console.log('not same found')
         
     //     this.addProjectFolder()
     //    }
     //    else{
     //      this.fullscreenLoading = false;
     //      this.$message({
     //      showClose: true,
     //      message: 'Same name found.Try again!',
     //      type: 'error'
     //    });
     //    }
     //    // return boolvalue
     //  },

      // Create new Website
      async addProjectFolder(projectName) {
        // console.log('this.value:',this.value)
          if (this.value == '') {
            this.newProjectFolderDialog = false;
              this.fullscreenLoading = false;
               this.$refs[projectName].resetFields();
              this.$message({
                  showClose: true,
                  duration:0,
                  message: 'Subscription not selected.',
                  type: 'error'
              });

          } else {
              if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
                         let token = Cookies.get('auth_token');
                          this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
                          var userid = this.folderUrl.split('/')[this.folderUrl.split('/').length - 1]

                          // this.formAddProjectFolder.projectName = this.formAddProjectFolder.projectName.toLowerCase();

                          // console.log("'subscriptionId': this.value,'authorization': token",  this.value, token)
                          axios.post(config.baseURL + '/project-configuration', {
                                  id: uuidv4().replace(/\-/g, ''),
                                  userEmail: Cookies.get('email'),
                                  websiteName: this.formAddProjectFolder.projectName,
                                  userId: userid,
                                  subscriptionId: this.value
                              }, {
                                  headers: {
                                      'subscriptionId': this.value,
                                      'authorization': token
                                  }
                              })
                              .then((res) => {
                                  // console.log('##############')
                                  let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + res.data.id
                                      // let newFolderName=res.data.id 
                                  return axios.post(config.baseURL + '/flows-dir-listing', {
                                          foldername: newFolderName,
                                          type: 'folder'
                                      }, {
                                          headers: {
                                              'authorization': token
                                          }
                                      })
                                      .then(async(resp) => {
                                          // console.log(resp)
                                          this.newProjectFolderDialog = false
                                          this.addNewProjectFolderLoading = false;

                                          // var response = resp
                                          let gitResponse = await axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo=' + res.data.id + '&userDetailId=' + Cookies.get('userDetailId'), {}).catch((err)=>{ console.log('Error:', err); });

                                          if (!(gitResponse.data.statusCode)) {

                                              localStorage.setItem("folderUrl", newFolderName);
                                              var folder = localStorage.getItem("folderUrl");

                                              this.newRepoId = gitResponse.data.id;
                                              this.repoName = gitResponse.data.name;

                                              this.projectLimitCount = 0;

                                              // Create essential folders
                                              this.addOtherFolder(newFolderName);

                                              // Init ldap for website subscription in ACL
                                              axios.post(config.initLdap, {
                                                      "app": "aaa"
                                                  })
                                                  .then((res) => {
                                                      // console.log(res.data);
                                                  })
                                                  .catch((e) => {
                                                      console.log(e)
                                                  });

                                              await axios.post(config.baseURL + '/register-website-subscriptions', {
                                                      websiteId: this.repoName
                                                  })
                                                  .then((res) => {
                                                      // console.log(res.data);
                                                  })
                                                  .catch((e) => {
                                                      console.log(e)
                                                  });

                                              this.currentProjectName = this.formAddProjectFolder.projectName;

                                              this.formAddProjectFolder.projectName = null;
                                          } else {

                                              localStorage.setItem("folderUrl", newFolderName);
                                              var folder = localStorage.getItem("folderUrl");

                                              this.newRepoId = undefined;
                                              this.repoName = res.data.id;

                                              // Create essential folders
                                              this.addOtherFolder(newFolderName);

                                              // Init ldap for website subscription in ACL
                                              axios.post(config.initLdap, {
                                                      "app": "aaa"
                                                  })
                                                  .then((res) => {
                                                      // console.log(res.data);
                                                  })
                                                  .catch((e) => {
                                                      console.log(e)
                                                  });

                                              await axios.post(config.baseURL + '/register-website-subscription', {
                                                      websiteId: this.repoName
                                                  })
                                                  .then((res) => {
                                                      // console.log(res.data);
                                                  })
                                                  .catch((e) => {
                                                      console.log(e)
                                                  })

                                              this.formAddProjectFolder.projectName = null;

                                              // Delete folder from storage
                                              // axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + newFolderName)
                                              // .then((res) => {
                                              // })
                                              // .catch((e) => {
                                              // })

                                              // return;
                                          }

                                      })
                                      .catch((e) => {
                                          //console.log(e);
                                          // this.componentId = 'buyPage';
                                          this.newProjectFolderDialog = false;
                                          this.fullscreenLoading = false;
                                          this.$refs[projectName].resetFields();
                                          // this.buyNowDialog = true;
                                          console.log(e)
                                      });
                                  // })

                              })
                              .catch((e) => {
                                  console.log(e)
                                  if (e.response.status = 403) {
                                      this.$message({
                                          showClose: true,
                                          message: e.response.data.message,
                                          type: 'error'
                                      });
                                  }
                                  this.newProjectFolderDialog = false;
                                  this.fullscreenLoading = false;
                                  this.$refs[projectName].resetFields();
                              });                  
              } else {
                  this.newProjectFolderDialog = false;
                  this.fullscreenLoading = false;
                   this.$refs[projectName].resetFields();
                  this.$session.remove('username');
                  localStorage.removeItem('current_sub_id');
                  Cookies.remove('subscriptionId' ,{domain: location});
                  let location = psl.parse(window.location.hostname)
                  location = location.domain === null ? location.input : location.domain

                  Cookies.remove('auth_token', {
                      domain: location
                  });
                  Cookies.remove('email', {
                      domain: location
                  });
                  Cookies.remove('userDetailId', {
                      domain: location
                  });
                  Cookies.remove('subscriptionId', {
                      domain: location
                  });
                  this.$message({
                    message: 'You\'re Logged Out From System. Please login again!',
                    type: 'error',
                    onClose(){
                      window.location = '/login'
                    }
                  });
              }
          }
      },

      // Create neccessary folders for project
      async addOtherFolder(newFolderName){

        // Create Public folder
        await axios.post(config.baseURL+'/flows-dir-listing' , {
          foldername : newFolderName+'/public',
          type : 'folder'
        })
        .then(async (res) => {

          // Create Assets folder
          await axios.post(config.baseURL+'/flows-dir-listing' , {
            foldername : newFolderName+'/public/assets',
            type : 'folder'
          })
          .then(async (res) => {
            // Create Assets folder
            await axios.post(config.baseURL+'/flows-dir-listing' , {
              foldername : newFolderName+'/public/assets/client-plugins',
              type : 'folder'
            })
            .then((res) => {
            })
            .catch((e)=>{
              //console.log("Error from Client-Plugins"+res)
            }); 
          })
          .catch((e)=>{
            //console.log("Error from Assests"+res)
          });

          // Create Main-Files Folder
          await axios.post(config.baseURL+'/flows-dir-listing' , {
            foldername : newFolderName+'/public/main-files',
            type : 'folder'
          })
          .then((res) => {
          })
          .catch((e)=>{
            //console.log("Error from pages"+res)
          });

        })
        .catch((e)=>{
          //console.log("Error from Assests"+res)
        });
        //Create Preview Folder
        await axios.post(config.baseURL+'/flows-dir-listing' , {
          foldername : newFolderName+'/public/Preview',
          type : 'folder',
          folderType: 'preview',
          folderBasePath: newFolderName
        }).then(async (res) => {

        }).catch((e)=>{
          console.log(e)
        })
        // Create Partials Folder
        await axios.post(config.baseURL+'/flows-dir-listing' , {
          foldername : newFolderName+'/Partials',
          type : 'folder'
        })
        .then(async (res) => {
            // Create Headers Folder
            await axios.post(config.baseURL+'/flows-dir-listing' , {
              foldername : newFolderName+'/Partials/Header',
              type : 'folder'
            })
            .then((res) => {
            })
            .catch((e)=>{
              //console.log("Error From Headers"+res)
            });

            // Create menus Folder
            await axios.post(config.baseURL+'/flows-dir-listing' , {
              foldername : newFolderName+'/Partials/Menu',
              type : 'folder'

            })
            .then((res) => {
            })
            .catch((e)=>{
              //console.log("Error from Menu"+res)
            });

            // Create Footers Folder
            await axios.post(config.baseURL+'/flows-dir-listing' , {
              foldername : newFolderName+'/Partials/Footer',
              type : 'folder'
            })
            .then((res) => {
            })
            .catch((e)=>{
              //console.log("Error from Footers"+res)
            });

            // Create Templates Folder
            // axios.post(config.baseURL+'/flows-dir-listing' , {
            //   foldername : newFolderName+'/Partials/Templates',
            //   type : 'folder'
            // })
            // .then((res) => {
            ////   console.log('Templates Folder created!');
            // })
            // .catch((e)=>{
            ////   console.log("Error from pages"+res)
            // });

            // Create Sidebars Folder
            await axios.post(config.baseURL+'/flows-dir-listing' , {
              foldername : newFolderName+'/Partials/Sidebar',
              type : 'folder'
            })
            .then((res) => {
            })
            .catch((e)=>{
              //console.log("Error from pages"+res)
            });


        })
        .catch((e)=>{
          //console.log("Error From Headers"+res)
        });

        // Create Layouts Folder
        await axios.post(config.baseURL+'/flows-dir-listing' , {
          foldername : newFolderName+'/Layout',
          type : 'folder'

        })
        .then((res) => {
        })
        .catch((e)=>{
          //console.log("Error From Layout"+res)
        });

        // Create Pages Folder
        await axios.post(config.baseURL+'/flows-dir-listing' , {
          foldername : newFolderName+'/Pages',
          type : 'folder'
        })
        .then((res) => {
          this.createEssentialFiles(newFolderName);
        })
        .catch((e)=>{
          //console.log("Error from pages"+res)
        });

      },

      // Create necessary files for project
      async createEssentialFiles(newFolderName) {

        // Create Config.json file
        // let newfilename = newFolderName + '/assets/config.json';

        let projectRepoName = newFolderName.split('/');
        projectRepoName = projectRepoName[(projectRepoName.length) - 1 ];

        let userid = Cookies.get('userDetailId');

        // Create project-details.json file
        let projectDetails = newFolderName + '/public/assets/project-details.json';
        let projectDetailsData = [{
                                  "projectOwner" : Cookies.get('email'),
                                  "projectID" : projectRepoName,
                                  "UserID":userid,
                                  "BasePath":newFolderName,
                                  "websiteName": this.currentProjectName,
                                  "BaseURL":'http://'+userid+'.'+projectRepoName+'.'+config.domainkey+'/',
                                  "builder_service_api": config.baseURL,
                                  "login_api": config.loginUrl,
                                  "register_api": config.registerUrl,
                                  "user_details_api": config.userDetail,
                                  "social_login_api": 'https://auth.'+config.domainkey+'/auth/',
                                  "domainkey": config.domainkey,
                                  "CrmSettingId":'',
                                  "Projectvid":{"vid":'',"userId":'',"password":'',"esUser":'',"virtualShopName":''}
                                  }];
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : projectDetails,
            text : JSON.stringify(projectDetailsData)
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create main.js file
        let defaultIndex = newFolderName + '/public/index.html'
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : defaultIndex,
            text : '<!DOCTYPE html><html><head><title>Site Unpublished</title><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><style type="text/css">@charset "UTF-8";html, body{width: 100%; height: 100%; margin: 0; padding: 0; background: #f9f9f9; overflow: hidden;}.crazy-cat{display: flex; position: relative; width: 100%; height: 100%; z-index: 1;}.wrapper{display: flex; justify-content: center; align-items: center;}.message{width: 50%; padding: 25px;}.message h1{font-size: 56px; color: #5f5f5f; font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif; font-weight: 100; margin: 40px 0;}.message p{font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 20px; color: #808080; margin: 40px 0; line-height: 28px;}.message a{font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; display: inline-block; background: #c7c7c7; color: #696969; text-align: center; padding: 20px 40px; font-size: 20px; text-decoration: none; border-radius: 6px; transition: 0.3s;}.message a:hover{background: #333; color: #ccc;}.gear{content: ""; font-family: "FontAwesome"; position: absolute; animation: gear 50s infinite linear; transform-origin: center; top: -250px; right: -250px; font-size: 600px; z-index: 0; color: #eaeaea;}@keyframes gear{0%{transform: rotate(0deg);}100%{transform: rotate(360deg);}}@media (max-width: 760px){.message h1{font-size: 36px;}}</style></head><body><div class="crazy-cat"> <div class="wrapper"> <div class="message"> <h1>Site not published yet</h1> <p>We sincerely apologize for the inconvenience. Our site is currently not published, but will return shortly. Thank you for your patience.</p><a href="mailto:' + Cookies.get('email') + '">Contact us</a> </div></div></div><div class="gear"> <i class="fa fa-cog" aria-hidden="true"></i></div></body></html>',
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create main.css file
        let maincss = newFolderName + '/public/main-files/main.css'
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : maincss,
            text : '/* Add your custom CSS styles here. It will be automatically included in every page. */\np{margin: 0 !important; padding: 0 !important;}.row{padding: 0 !important; margin: 0 !important;}.column{padding: 0 !important; margin: 0 !important;}body{font-size:14px !important;}.navbar-nav>li>a{color: #fff;}.navbar-nav>li>a:hover{color: #000;}.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {color: #000;}.rbc.rbc-multilist .rbc-list-container .rbc-list-item{display: block; width: 100%;} .grid{position: relative;}.item{display: block; position: absolute; width: 100%; max-width: 250px; height: auto; margin: 5px; z-index: 1; background: white; color: black; border: 1px solid black}.item.muuri-item-dragging{z-index: 3;}.item.muuri-item-releasing{z-index: 2;}.item.muuri-item-hidden{z-index: 0;}.item-content{position: relative; width: 100%; height: 100%;}',
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create main.js file
        let mainjs = newFolderName + '/public/main-files/main.js'
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : mainjs,
            text : '/* Add your custom JavaScript/jQuery functions here. It will be automatically included in every page. */',
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create default.json for menu file
        let defaultMenuJson = newFolderName + '/public/assets/default.json'
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : defaultMenuJson,
            text : '[{"id":1,"title":"Home","customSelect":"index.html","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0}}]',
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Brand Logo
        let brandLogo = newFolderName + '/public/assets/brand-logo.png';
        
        await axios.post(config.baseURL + '/flows-dir-listing', {
          filename : brandLogo,
          text : '',
          type : 'file'
        })
        .then((res) => {   
        })
        .catch((e) => {
            //console.log(e)
        })

        // Create index.html file
        let indexLayoutContent = '';
        if(this.selectedTemplate == 'template1'){
          indexLayoutContent = '<!DOCTYPE html><html><title>Coming Soon</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"><style>body,h1{font-family: "Raleway", sans-serif}body, html{height: 100%}.bgimg{background-image: url(\'https:\/\/wallpapercave.com/wp/Fj4g4zO.jpg\'); min-height: 100%; background-position: center; background-size: cover;}</style><body><div class="bgimg w3-display-container w3-animate-opacity w3-text-white"> <div class="w3-display-topleft w3-padding-large w3-xlarge"> Logo </div><div class="w3-display-middle"> <h1 class="w3-jumbo w3-animate-top">COMING SOON</h1> <hr class="w3-border-grey" style="margin:auto;width:40%"> <p class="w3-large w3-center">35 days left</p></div><div class="w3-display-bottomleft w3-padding-large"> Powered by <a href="#" target="_blank">Flowz</a> </div></div></body></html>'
        } else if(this.selectedTemplate == 'template2') {
          indexLayoutContent = '<!DOCTYPE html><html><title>Portfolio</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel=\'stylesheet\' href=\'https://fonts.googleapis.com/css?family=Roboto\'><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>html,body,h1,h2,h3,h4,h5,h6{font-family: "Roboto", sans-serif}</style><body class="w3-light-grey"><div class="w3-content w3-margin-top" style="max-width:1400px;"> <div class="w3-row-padding"> <div class="w3-third"> <div class="w3-white w3-text-grey w3-card-4"> <div class="w3-display-container"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WeLZdFD62GEKO_wITiHKZ8pC43XS6Nakaoq5PfjIqJ6MNx6zHw" style="width:100%" alt="Avatar"> <div class="w3-display-bottomleft w3-container w3-text-black"> <h2 style="color: #009688!important">Jane Doe</h2> </div></div><div class="w3-container"> <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p><p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p><p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p><p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p><hr> <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p><p>Adobe Photoshop</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div></div><p>Photography</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%"> <div class="w3-center w3-text-white">80%</div></div></div><p>Illustrator</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div></div><p>Media</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div></div><br><p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p><p>English</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div></div><p>Spanish</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div></div><p>German</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div></div><br></div></div><br></div><div class="w3-twothird"> <div class="w3-container w3-card-2 w3-white w3-margin-bottom"> <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2> <div class="w3-container"> <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6> <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6> <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br></div></div><div class="w3-container w3-card-2 w3-white"> <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2> <div class="w3-container"> <h5 class="w3-opacity"><b>W3Schools.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6> <p>Web Development! All I need to know in one place</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>London Business School</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6> <p>Master Degree</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>School of Coding</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6> <p>Bachelor Degree</p><br></div></div></div></div></div><footer class="w3-container w3-teal w3-center w3-margin-top"> <p>Find me on social media.</p><i class="fa fa-facebook-official w3-hover-opacity"></i> <i class="fa fa-instagram w3-hover-opacity"></i> <i class="fa fa-snapchat w3-hover-opacity"></i> <i class="fa fa-pinterest-p w3-hover-opacity"></i> <i class="fa fa-twitter w3-hover-opacity"></i> <i class="fa fa-linkedin w3-hover-opacity"></i> <p>Powered by <a href="#" target="_blank">Flowz</a></p></footer></body></html>'
        } else if(this.selectedTemplate == 'template3') {
          indexLayoutContent = '<style type="text/css">*{ box-sizing: border-box; } body{ margin:0; } :root{ margin-top:0px; } :root{ margin-top:0px; } .gjs-am-file-uploader > form{ min-height:325px !important; } *{ box-sizing:border-box; } body{ margin-top:0px; margin-right:0px; margin-bottom:0px; margin-left:0px; } #c135800{ padding-top:128px; padding-right:16px; padding-bottom:128px; padding-left:16px; } body, h1, h2, h3, h4, h5, h6{ font-family:Lato, sans-serif; } .w3-bar, h1, button{ font-family:Montserrat, sans-serif; } .fa-anchor{ font-size:200px; } .fa-coffee{ font-size:200px; } .w3-container.w3-padding-64.w3-center.w3-opacity{ color:red; } .fa.fa-anchor.w3-padding-64.w3-text-red.big-icon{ font-size:250px; } .fa.fa-coffee.w3-padding-64.w3-text-red.w3-margin-right.big-icon{ font-size:250px; }</style><title>W3.CSS Template </title> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> <div class="w3-top"> <div class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large" id="navDemo"> <a class="w3-bar-item w3-button w3-padding-large" href="#">Link 1</a> <a class="w3-bar-item w3-button w3-padding-large" href="#">Link 2</a> <a class="w3-bar-item w3-button w3-padding-large" href="#">Link 3</a> <a class="w3-bar-item w3-button w3-padding-large" href="#">Link 4</a> </div> </div> <header class="w3-container w3-red w3-center" id="c135800" > <h1 class="w3-margin w3-jumbo">START PAGE </h1> <p class="w3-xlarge">Template by w3.css </p> <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button> </header> <div class="w3-row-padding w3-padding-64 w3-container"> <div class="w3-content"> <div class="w3-twothird"> <h1>Lorem Ipsum </h1> <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5> <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> <div class="w3-third w3-center"> <i class="fa fa-anchor w3-padding-64 w3-text-red big-icon"> </i> </div> </div> </div> <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container"> <div class="w3-content"> <div class="w3-third w3-center"> <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right big-icon"> </i> </div> <div class="w3-twothird"> <h1>Lorem Ipsum </h1> <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5> <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> </div> </div> <div class="w3-container w3-black w3-center w3-opacity w3-padding-64"> <h1 class="w3-margin w3-xlarge">Quote of the day: live life </h1> </div> <footer class="w3-container w3-padding-64 w3-center w3-opacity"> <div class="w3-xlarge w3-padding-32"> <i class="fa fa-facebook-official w3-hover-opacity"> </i> <i class="fa fa-instagram w3-hover-opacity"> </i> <i class="fa fa-snapchat w3-hover-opacity"> </i> <i class="fa fa-pinterest-p w3-hover-opacity"> </i> <i class="fa fa-twitter w3-hover-opacity"> </i> <i class="fa fa-linkedin w3-hover-opacity"> </i> </div> </footer>';
        } else {
          indexLayoutContent = '';
        }
        let indexLayout = newFolderName + '/Pages/index.html';

        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : indexLayout,
            text : indexLayoutContent,
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create metalsmith file
        let mainMetal = newFolderName + '/public/assets/metalsmithPublish.js';

        let projectName = newFolderName.split('/');
        projectName = projectName[6];

        // let projectUrl = config.ipAddress + '/websites/' + projectName;

        var metalsmithJSON="var Metalsmith=require('"+config.metalpath+"metalsmith');\nvar markdown=require('"+config.metalpath+"metalsmith-markdown');\nvar layouts=require('"+config.metalpath+"metalsmith-layouts');\nvar permalinks=require('"+config.metalpath+"metalsmith-permalinks');\nvar inPlace = require('"+config.metalpath+"metalsmith-in-place')\nvar fs=require('"+config.metalpath+"file-system');\nvar Handlebars=require('"+config.metalpath+"handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : mainMetal,
            text : metalsmithJSON,
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            console.log(e)
        });

        // Create metalsmith file for preview
         mainMetal = newFolderName + '/public/assets/metalsmithPreview.js';

         projectName = newFolderName.split('/');
        projectName = projectName[6];

        // let projectUrl = config.ipAddress + '/websites/' + projectName;

        var metalsmithJSON="var Metalsmith=require('"+config.metalpath+"metalsmith');\nvar markdown=require('"+config.metalpath+"metalsmith-markdown');\nvar layouts=require('"+config.metalpath+"metalsmith-layouts');\nvar permalinks=require('"+config.metalpath+"metalsmith-permalinks');\nvar inPlace = require('"+config.metalpath+"metalsmith-in-place')\nvar fs=require('"+config.metalpath+"file-system');\nvar Handlebars=require('"+config.metalpath+"handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public/Preview')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : mainMetal,
            text : metalsmithJSON,
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            console.log(e)
        });



        //create backup_mainVue file
        var back_main_path= newFolderName + '/public/assets/back_main.js'
        var back_main="import vue from 'vue'\n import ElementUI from 'element-ui'\n import element from 'element-ui/src/locale/lang/en'\n import 'element-ui/lib/theme-chalk/index.css'\n vue.use(ElementUI, { element })\n import @@vuecomponent@@ from './@@vuecomponent@@.vue'\nvue.component('@@vuecomponent@@', @@vuecomponent@@)\n new vue({ el: '#@@vuecomponent@@',\n render: h => h(@@vuecomponent@@)\n })"

        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : back_main_path,
            text : back_main,
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
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
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create demo header file
        let headerFileName = newFolderName + '/Partials/Header/default.partial'

        var headerFileData='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://res.cloudinary.com/flowz/raw/upload/v1515673729/builder/css/flowz_blocks.css" type="text/css"><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="#"> <img src="https://imgur.com/ak2v9y7.png" height="30" alt="image"/> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav13"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="#">Features</a> </li><li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="#">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="#">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="#">Log In</a> </li></ul> <a class="btn btn-white ml-md-3" href="#">Button</a> </div></nav> </div></header>'

        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : headerFileName,
            text : headerFileData,
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create demo footer file
        let footerFileName = newFolderName + '/Partials/Footer/default.partial'

        var footerFileData='<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://res.cloudinary.com/flowz/raw/upload/v1515673729/builder/css/flowz_blocks.css" type="text/css"><footer class="fdb-block footer-large bg-dark"> <div class="container"> <div class="row align-items-top text-center text-md-left"> <div class="col-12 col-sm-6 col-md-4"> <h3><strong>Country A</strong></h3> <p>Street Address 52 <br/>Contact Name</p><p>+44 827 312 5002</p><p><a href="#">countrya@amazing.com</a> </p></div><div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0"> <h3><strong>Country B</strong></h3> <p>Street Address 100 <br/>Contact Name</p><p>+13 827 312 5002</p><p><a href="#">countryb@amazing.com</a> </p></div><div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div><div class="row mt-5"> <div class="col text-center" data-highlightable="1">(c) 2017 Flowz. All Rights Reserved</div></div></div></footer>'

        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : footerFileName,
            text : footerFileData,
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // Create default sidebar file file
        let sidebar = newFolderName + '/Partials/Sidebar/default.partial'
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : sidebar,
            text : '<div id="sidebar" style="display: block; width: 100%; min-height: 20px"><style type="text/css">#wrapper{padding-left: 250px; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled{padding-left: 250px;}#sidebar-wrapper{z-index: 1000; position: fixed; left: 250px; width: 250px; height: 100%; margin-left: -250px; overflow-y: auto; background: #000; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled #sidebar-wrapper{width: 250px;}#page-content-wrapper{width: 100%; position: absolute; padding: 15px;}#wrapper.toggled #page-content-wrapper{position: absolute; margin-right: -250px;}/* Sidebar Styles */.sidebar-nav{position: absolute; top: 0; width: 250px; margin: 0; padding: 0; list-style: none; width: 100%;}.sidebar-nav li{text-indent: 20px; line-height: 40px;}.sidebar-nav li a{display: block; text-decoration: none; color: #999999; width: 100%;}.sidebar-nav li a:hover{text-decoration: none; color: #fff; background: rgba(255,255,255,0.2);}.sidebar-nav li a:active,.sidebar-nav li a:focus{text-decoration: none;}.sidebar-nav > .sidebar-brand{height: 65px; font-size: 18px; line-height: 60px;}.sidebar-nav > .sidebar-brand a{color: #999999;}.sidebar-nav > .sidebar-brand a:hover{color: #fff; background: none;}</style><div id="wrapper" class="wrapper"> <div id="sidebar-wrapper" class="sidebar-bg"> <ul class="sidebar-nav"> <li class="sidebar-brand"> <a href="#"> Company Name </a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Dashboard</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Shortcuts</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Overview</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Events</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">About</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Services</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Contact</a> </li></ul> </div></div></div>',
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });


        // Create default menu file
        let menu = newFolderName + '/Partials/Menu/default.menu'
        await axios.post(config.baseURL + '/flows-dir-listing', {
            filename : menu,
            text : '',
            type : 'file'
        })
        .then((res) => {
        })
        .catch((e) => {
            //console.log(e)
        });

        // // Product Listing Plugin
        // let listingPlugin = newFolderName + '/assets/client-plugins/client-product-listing-plugin.js';
        // let pluginJsData = '';
        // axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/product-listing-plugin-cleaned.js', {
            
        // })
        // .then((response) => {
        //   pluginJsData = response.data;
        //   let ProjectName = newFolderName.replace('/var/www/html/websites/', '')
        //   pluginJsData = pluginJsData.replace('setNameHere', ProjectName);
          
        //   axios.post(config.baseURL + '/flows-dir-listing', {
        //       filename : listingPlugin,
        //       text : pluginJsData,
        //       type : 'file'
        //   })
        //   .then((res) => {
        ////     console.log(listingPlugin + ' file created');
        //   })
        //   .catch((e) => {
        ////       console.log(e)
        //   })
        // })
        // .catch((e) => {
        ////     console.log(e)
        // });

        // Flowz Engine JS
        let flowzBuilderEngine = newFolderName + '/public/assets/client-plugins/flowz-builder-engine.js';
        await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/flowz-builder-engine.js', {
            
        })
        .then(async (res) => {
          let flowzEngineData = res.data;
          await axios.post(config.baseURL + '/flows-dir-listing', {
              filename : flowzBuilderEngine,
              text : flowzEngineData,
              type : 'file'
          })
          .then((res) => {   
          })
          .catch((e) => {
              //console.log(e)
          })
        })
        .catch((e) => {
            //console.log(e)
        });

        // Slider Plugin
        let sliderPluginFileName = newFolderName + '/public/assets/client-plugins/slider-plugin.js';
        await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/client-slider-plugin.js', {
            
        })
        .then(async (res) => {
          let sliderData = res.data;
          await axios.post(config.baseURL + '/flows-dir-listing', {
              filename : sliderPluginFileName,
              text : sliderData,
              type : 'file'
          })
          .then((res) => {  
          })
          .catch((e) => {
              //console.log(e)
          })
        })
        .catch((e) => {
            //console.log(e)
        });

        // Shopping cart js
        let shoppingCartJs = newFolderName + '/public/assets/client-plugins/shopping-cart.js';
        await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/shop_cart.js', {
            
        })
        .then(async (res) => {
          let shoppingCartData = res.data;
          await axios.post(config.baseURL + '/flows-dir-listing', {
              filename : shoppingCartJs,
              text : shoppingCartData,
              type : 'file'
          })
          .then((res) => {   
          })
          .catch((e) => {
              //console.log(e)
          })
        })
        .catch((e) => {
            //console.log(e)
        });

        // Client Global variables Plugin
        let globalVariablesPlugin = newFolderName + '/public/assets/client-plugins/global-variables-plugin.js';
        await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/global-variables-plugin.js', {
            
        })
        .then(async (res) => {
          let globalVariablesPluginData = res.data;
          await axios.post(config.baseURL + '/flows-dir-listing', {
              filename : globalVariablesPlugin,
              text : globalVariablesPluginData,
              type : 'file'
          })
          .then(async (res) => {
            // Push repository changes
            await axios.post(config.baseURL + '/gitlab-add-repo', {
              branchName: 'master',
              commitMessage: 'Initial Push',
              repoName: projectRepoName,
              userDetailId: Cookies.get('userDetailId')
            }).then(async response => {
              if(response.status == 200 || response.status == 201){

                // get Current SHA
                let SHA;
                await axios.get( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+Cookies.get('auth_token'), {
                }).then(response => {
                  console.log('Response commit : ', response);
                  SHA = response.data[0].id;
                  // console.log('SHA: ', SHA);
                }).catch(error => {
                  //console.log("Some error occured: ", error);
                });

                let repoSettings = [{
                                      "repoSettings": [{
                                        "RepositoryId": this.newRepoId,
                                        "RepositoryName": projectRepoName,
                                        "CurrentHeadSHA": SHA,
                                        "CurrentBranch": "master",
                                        "BaseURL":newFolderName
                                      }]
                                    }, {
                                      "projectSettings": [{
                                        "RepositoryId": this.newRepoId,
                                        "ProjectName": projectRepoName,
                                        "BrandName": '',
                                        "BrandLogoName": '!!!No file uploaded!!!',
                                        "ProjectLayout": '',
                                        "ProjectHeader": '',
                                        "ProjectFooter": '',
                                        "ProjectSEOTitle": '',
                                        // "ProjectSEOKeywords": '',
                                        // "ProjectSEODescription": '',
                                        // "ProjectFaviconName": '',
                                        "ProjectVId":{"vid":'',"userId":'',"password":'',"esUser":'',"virtualShopName":''},
                                        "CrmSettingId":''
                                      }, {
                                        "CloudinaryDetails": {
                                          apiKey: '',
                                          apiSecret: '',
                                          cloudName: '',
                                          uploadFolder: '',
                                          uploadPreset: ''
                                        },
                                        "AssetImages": [],
                                        "GlobalVariables": [],
                                        "GlobalUrlVariables": [],
                                        "GlobalCssVariables": [],
                                        "ProjectExternalCss": [],
                                        "ProjectExternalJs": [],
                                        "ProjectMetaInfo": [{
                                        "content":  "width=device-width, initial-scale=1" ,
                                        "name":  "viewport"
                                        },{
                                        "content":  "" ,
                                        "name":  "description"
                                        },
                                        {
                                        "content":  "" ,
                                        "name":  "keywords"
                                        }
                                        ],
                                        "ProjectMetacharset": 'UTF-8',
                                        "ProjectScripts":[],
                                        "ProjectStyles": [],
                                        "AccountPaymentGateways":[],
                                        "WebsiteRoles": [{
                                          "roleName": "guest"
                                        }, {
                                          "roleName": "registered"
                                        }]
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
                                        }],
                                        "PageCss": [],
                                        "PageExternalCss": [],
                                        "PageExternalJs": [],
                                        "PageMetaInfo": [],
                                        "PageMetacharset":'UTF-8',
                                        "PageScripts":[],
                                        "PageStyles": []
                                      }]
                                    }, {
                                      "layoutOptions": [{
                                        "Header": [{
                                          "value": 'default',
                                          "label": 'default'
                                        }],
                                        "Footer": [{
                                          "value": 'default',
                                          "label": 'default'
                                        }],
                                        "Sidebar": [{
                                          "value": 'default',
                                          "label": 'default'
                                        }],
                                        "Menu": [{
                                          "value": 'default',
                                          "label": 'default'
                                        }],
                                        "Layout": [{
                                          "value": 'Blank',
                                          "label": 'Blank',
                                          "partialsList": [],
                                          "defaultList": []
                                        }, {
                                          "value": 'default',
                                          "label": 'default',
                                          "partialsList": ['Header', 'Footer'],
                                          "defaultList": []
                                        }]
                                      }]
                                    }];

                let pluginSettingsData = [{
                                            "id":1,
                                            "children":[
                                               {
                                                  "id":2,
                                                  "children":[

                                                  ],
                                                  "label":"default",
                                                  "isActive": true
                                               }
                                            ],
                                            "label":"Header",
                                            "isActive": true
                                         },
                                         {
                                            "id":3,
                                            "children":[
                                               {
                                                  "id":4,
                                                  "children":[

                                                  ],
                                                  "label":"default",
                                                  "isActive": true
                                               }
                                            ],
                                            "label":"Footer",
                                            "isActive": true
                                         },
                                         {
                                            "id":5,
                                            "children":[
                                               {
                                                  "id":6,
                                                  "children":[

                                                  ],
                                                  "label":"default",
                                                  "isActive": true
                                               }
                                            ],
                                            "label":"Sidebar",
                                            "isActive": true
                                         },
                                         {
                                            "id":7,
                                            "children":[
                                               {
                                                  "id":8,
                                                  "children":[

                                                  ],
                                                  "label":"default",
                                                  "isActive": true
                                               }
                                            ],
                                            "label":"Menu",
                                            "isActive": true
                                         }
                                      ];

                await axios.patch(config.baseURL + '/project-configuration/' + projectRepoName, {
                  configData: repoSettings,
                  pluginsData: pluginSettingsData
                })
                .then((res) => {
                })
                .catch((e) => {
                  this.$message({
                    showClose: true,
                    message: 'Failed! Please try again.',
                    type: 'error'
                  });
                  return;
                  //console.log(e)
                })

                // Create entry in configdata-history table
                await axios.post(config.baseURL + '/configdata-history', {
                    configData: repoSettings,
                    commitSHA: SHA,
                    currentBranch: 'master',
                    websiteName: projectRepoName,
                    userId: Cookies.get('userDetailId')
                })
                .then(function (response) {
                    // console.log('Initial config data saved in configdata-history. ', response);
                })
                .catch(function (error) {
                    console.log(error);
                });


                this.fullscreenLoading = false;
                let self = this;
                setTimeout(function(){
                  self.$message({
                    showClose: true,
                    message: 'Website Created.',
                    type: 'success'
                  });
                },500); 

                setTimeout(function(){
                  // location.reload();
                  self.getData();
                },1000);  
              }
            }).catch(error => {
              //console.log("Some error occured: ", error);
            }) 

            
          })
          .catch((e) => {
              //console.log(e)
          })
        })
        .catch((e) => {
            //console.log(e)
        });
      },

      // Save File
     async saveFile(arg) {
        if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
          this.saveFileLoading = true
          let newContent = this.$store.state.content
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
              this.saveJsonFile('else');
              break;
            default:
              newContent = this.$store.state.content;
          }
          let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
          this.currentFile.path = this.$store.state.fileUrl
          let previousUrl = this.currentFile.path;

          let urlparts = configFileUrl.split("/");
          let fileNameOrginal = urlparts[urlparts.length - 1];
          let foldername = urlparts[urlparts.length - 2];
          let fileName = '';
          if (_.includes(configFileUrl, 'Partials')) {
            fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
          } else if (_.includes(configFileUrl, 'Pages')) {
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
          } else if (_.includes(configFileUrl, 'client-plugins')) {
            fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
          } else {
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
          }
          let folderUrl = configFileUrl.replace(fileName, '');
          let projectName = folderUrl.split('/');
          projectName = projectName[(projectName.length - 1)];
          let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + projectName).catch((err)=>{ console.log('Error:', err); });
          let rawConfigs = responseConfig.data.configData;
          this.globalConfigData = rawConfigs;
          axios.post(config.baseURL + '/flows-dir-listing', {
              filename: previousUrl.replace(/\\/g, "\/"),
              text: newContent,
              type: 'file'
            })
            .then(async (res) => {
              this.saveFileLoading = false
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
              if (this.currentFile.path.replace(/\\/g, "\/").match('/Layout')) {
                // var content = this.$store.state.content;
                var content = '';
                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf('Layout/') + 7, this.currentFile.path.replace(/\\/g, "\/").indexOf('.layout'));

                content = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + name + '.layout').catch((err)=>{ console.log('Error:', err); });
                content = content.data
                var result = (getFromBetween.get(content, "{{>", "}}"));
                var changeresult = JSON.parse(JSON.stringify(result))
                //// console.log("changeresult:",changeresult)

                for (let s = 0; s < changeresult.length; s++) {
                  content = content.replace(changeresult[s], changeresult[s].replace(/&nbsp;/g, '').replace(/\"\s+\b/g, '"').replace(/\'\s+\b/g, "'").replace(/\b\s+\'/g, "'").replace(/\b\s+\"/g, '"').replace(/\s+/g, " ").replace(/\s*$/g, "").replace(/\s*=\s*/g, '='))
                }
                //// console.log('content:',content)
                await axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: folderUrl + '/Layout/' + name + '.layout',
                  text: content,
                  type: 'file'
                }).then(res => {
                  this.$store.state.content = content
                })
                result = (getFromBetween.get(content, "{{>", "}}"));

                var DefaultParams = [];
                if (result.length > 0) {
                  var resultParam = result
                  for (let i = 0; i < resultParam.length; i++) {
                    var temp;
                    temp = resultParam[i].trim()
                    result[i] = result[i].trim()
                    temp = temp.split(' ')
                    //// console.log('temp:',temp)
                    for (let j = 0; j < temp.length; j++) {
                      temp[j] = temp[j].trim();
                      if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                        if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf("'") > -1) {
                          result[i] = temp[0];
                          if (temp[j]) {
                            let x = temp[j]
                            x = temp[j].split("'")[1] + '.partial';
                            let obj = {}
                            obj[temp[0]] = x
                            DefaultParams.push(obj)
                            break;
                          }
                        }
                        if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf('"') > -1) {
                          result[i] = temp[0];
                          if (temp[j]) {
                            let x = temp[j]
                            x = temp[j].split('"')[1] + '.partial';
                            let obj = {}
                            obj[temp[0]] = x
                            DefaultParams.push(obj)
                            break;
                          }
                        }
                      } else {
                        //console.log('error while finding id in layout');
                      }
                    }
                  }


                  //here we are adding new partial added inside layout to all pages who uses this following layout.
                  for (let i = 0; i < result.length; i++) {
                    let checktvalue = false;
                    for (let k = 0; k < DefaultParams.length; k++) {
                      if (result[i] == Object.keys(DefaultParams[k])[0]) {
                        for (let j = 0; j < this.globalConfigData[1].pageSettings.length; j++) {
                          if (this.globalConfigData[1].pageSettings[j].PageLayout == name) {
                            let checkdefaultvalue = false;
                            for (let x = 0; x < this.globalConfigData[1].pageSettings[j].partials.length; x++) {
                              if (Object.keys(this.globalConfigData[1].pageSettings[j].partials[x])[0] == result[i]) {

                                var defaulttemp = JSON.parse(JSON.stringify(DefaultParams[k]))
                                defaulttemp[Object.keys(defaulttemp)[0]] = defaulttemp[Object.keys(defaulttemp)[0]].split('.')[0]
                                this.globalConfigData[1].pageSettings[j].partials[x] = defaulttemp
                                checkdefaultvalue = true;
                              }
                            }
                            if (checkdefaultvalue != true) {
                              var defaulttemp = JSON.parse(JSON.stringify(DefaultParams[k]))
                              defaulttemp[Object.keys(defaulttemp)[0]] = defaulttemp[Object.keys(defaulttemp)[0]].split('.')[0]
                              //// console.log('push for DefaultParams:')
                              this.globalConfigData[1].pageSettings[j].partials.push(defaulttemp)
                            }
                          }
                        }
                        checktvalue = true
                      }
                    }
                    if (checktvalue != true) {
                      // console.log('!true')
                      for (let j = 0; j < this.globalConfigData[1].pageSettings.length; j++) {
                        if (this.globalConfigData[1].pageSettings[j].PageLayout == name) {
                          let doublecheckvalue = false
                          for (let x = 0; x < this.globalConfigData[1].pageSettings[j].partials.length; x++) {
                            if (Object.keys(this.globalConfigData[1].pageSettings[j].partials[x])[0] == result[i]) {
                              var defaulttemp = {}
                              defaulttemp[result[i]] = 'default'
                              doublecheckvalue = true
                              this.globalConfigData[1].pageSettings[j].partials[x] = defaulttemp
                            }
                          }
                          if (doublecheckvalue != true) {
                            var defaulttemp = {}
                            defaulttemp[result[i]] = 'default'
                            this.globalConfigData[1].pageSettings[j].partials.push(defaulttemp)
                          }
                        }
                      }

                    }
                  }
                }
                this.saveConfigFile(folderUrl);
                let temp = {
                  value: name,
                  label: name,
                  partialsList: result,
                  defaultList: DefaultParams

                }
                //Here we are creating new partial which are not present in our partial folder.
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
                  this.globalConfigData[2].layoutOptions[0].Layout[currentFileIndex].defaultList = DefaultParams; //here default are having .partial as extension
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
                      if (DefaultParams.length > 0) {
                        for (let k = 0; k < DefaultParams.length; k++) {
                          if (Object.keys(DefaultParams[k]) == foldernameKey[j]) {
                            let checkdefault = false;
                            for (let a = 0; a < this.globalConfigData[2].layoutOptions[0][foldernameKey[j]].length; a++) {
                              if (this.globalConfigData[2].layoutOptions[0][foldernameKey[j]][a].value == DefaultParams[k][foldernameKey[j]].split('.')[0]) {
                                //console.log('File already exists')
                                checkdefault = true

                              }
                            }
                            if (checkdefault != true) {
                              let newFolderName = folderUrl + '/Partials/';
                              await axios.post(config.baseURL + '/flows-dir-listing', {
                                filename: newFolderName + foldernameKey[j] + "/" + DefaultParams[k][foldernameKey[j]],
                                text: ' ',
                                type: 'file'
                              })
                              .catch((err)=>{ console.log('Error:', err); })

                              let temp1 = {
                                value: DefaultParams[k][foldernameKey[j]].split('.')[0],
                                label: DefaultParams[k][foldernameKey[j]].split('.')[0]
                              }
                              this.globalConfigData[2].layoutOptions[0][foldernameKey[j]].push(temp1)
                              this.saveConfigFile(folderUrl);
                            }
                          }
                        }

                      }
                    }
                  }
                  if (check == false) {
                    // console.log('inside false')
                    let newName = result[i]
                    let newFolderName = folderUrl + '/Partials/' + result[i];
                    axios.post(config.baseURL + '/flows-dir-listing', {
                        foldername: newFolderName,
                        type: 'folder'
                      })
                      .then((res) => {
                        this.newFolderDialog = false
                        this.addNewFolderLoading = false
                        // let x = newName

                        this.addNewFileLoading = true

                        let newfilename = newFolderName + '/default.partial'
                        axios.post(config.baseURL + '/flows-dir-listing', {
                            filename: newfilename,
                            text: ' ',
                            type: 'file'
                          })
                          .then(async (res) => {
                            this.newFileDialog = false
                            this.addNewFileLoading = false
                            this.formAddFile.filename = null
                            this.globalConfigData[2].layoutOptions[0][newName] = [];
                            let temp = {
                              value: "default",
                              label: "default"
                            }
                            // console.log(newName)
                            this.globalConfigData[2].layoutOptions[0][newName].push(temp)
                            await this.saveConfigFile(folderUrl);
                            // console.log(JSON.parse(JSON.stringify( this.globalConfigData[2].layoutOptions[0])))
                            if (DefaultParams.length > 0) {
                              for (let k = 0; k < DefaultParams.length; k++) {
                                if (DefaultParams[k][newName].split('.')[0] != 'default') {
                                  let checkdefault = false;
                                  for (let a = 0; a < this.globalConfigData[2].layoutOptions[0][newName].length; a++) {
                                    if (this.globalConfigData[2].layoutOptions[0][newName][a].value == DefaultParams[k][newName].split('.')[0]) {
                                      //console.log('File already exists')
                                      checkdefault = true

                                    }
                                  }
                                  if (checkdefault != true) {
                                    let newFolderName = folderUrl + '/Partials/';
                                    await axios.post(config.baseURL + '/flows-dir-listing', {
                                      filename: newFolderName + newName + "/" + DefaultParams[k][newName],
                                      text: ' ',
                                      type: 'file'
                                    })
                                    .catch((err)=>{ console.log('Error:', err); })

                                    let temp1 = {
                                      value: DefaultParams[k][newName].split('.')[0],
                                      label: DefaultParams[k][newName].split('.')[0]
                                    }
                                    this.globalConfigData[2].layoutOptions[0][newName].push(temp1)
                                    this.saveConfigFile(folderUrl);
                                  }
                                }
                              }
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
                  //now change pagesetting where ever this layout is being used.

                  // for(let i=0;i<this.globalConfigData[1].pageSettings.length;i++){
                  //   if(this.globalConfigData[1].pageSettings[i].PageLayout==name){
                  //     let currentpageindex=_.findIndex(this.globalConfigData[2].layoutOptions[0].Layout,function(o){
                  //       return o.value==name
                  //     })
                  //     let alllayoutpartiallist=this.globalConfigData[2].layoutOptions[0].Layout[currentpageindex].partialsList
                  //     let allpagepartiallist=this.globalConfigData[1].pageSettings[i].partials
                  //     for(let j=0;j<allpagepartiallist.length;j++){
                  //       let checkvalueindex=_.findIndex(alllayoutpartiallist,function(o){
                  //       return o==Object.keys(allpagepartiallist[j])[0]
                  //     })
                  //       if(checkvalueindex==-1){
                  //         this.globalConfigData[1].pageSettings[i].partials.splice(j,1)
                  //         j=j-1
                  //       }
                  //     }

                  //   }
                  // }

                }
              } else {
                if (fileName.search('.partial') != -1 && fileName.search('/Pages') == -1) {
                  var content = ''
                  content = this.$store.state.content;
                  var result = (getFromBetween.get(content, "{{>", "}}"));
                  var DefaultParams = [];
                  if (result.length > 0) {
                    var resultParam = result
                    for (let i = 0; i < resultParam.length; i++) {
                      var temp;
                      temp = resultParam[i].trim()
                      result[i] = result[i].trim()
                      result[i] = result[i].replace(/&nbsp;/g, '').trim()
                      temp = temp.replace(/&nbsp;/g, '')
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
                    } else {}
                  } else {
                    let namefile = fileNameOrginal.split('.')[0];
                    let namefolder = foldername;
                    let temp = {
                      value: namefile,
                      label: namefile,
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
                          delete this.globalConfigData[2].layoutOptions[0][namefolder][j].partialsList;
                          delete this.globalConfigData[2].layoutOptions[0][namefolder][j].defaultList;
                        }
                      }
                      if (checkFileNamevalue != true) {

                        this.globalConfigData[2].layoutOptions[0][namefolder].push(temp)
                      }
                      this.saveConfigFile(folderUrl);
                    } else {}
                  }
                } else if (fileName.search('/Pages') != -1) {
                  var content1 = ''

                  let name = fileName.split('/')[2];
                  name = name.split('.')[0];
                  content1 = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + name + '.html').catch((err)=>{ console.log('Error:', err); });
                  content1 = content1.data
                  var result1 = [];
                  result1 = (getFromBetween.get(content1, "{{>", "}}"));

                  var DefaultParams = [];
                  if (result1.length >= 0) {
                    var resultParam = result1
                    for (let i = 0; i < resultParam.length; i++) {
                      var temp;
                      temp = resultParam[i].trim()
                      result1[i] = result1[i].trim()
                      result1[i] = result1[i].replace(/&nbsp;/g, '').trim()
                      temp = temp.replace(/&nbsp;/g, '')
                      temp = temp.replace(/\s+/g, ' ');
                      temp = temp.trim();
                      temp = temp.split(' ')
                      for (let j = 0; j < temp.length; j++) {
                        if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                          if (temp[j + 1] != undefined) {
                            result1[i] = temp[0];
                            if (temp[j + 1].indexOf('.') > -1) {
                              let x = temp[j + 1]
                              x = temp[j + 1].split(/'/)[1];
                              let obj = {}
                              obj[temp[0]] = x
                              DefaultParams.push(obj)
                              break;
                            }
                          } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                            result1[i] = temp[0];
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
                    
                    for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
                      let temp = this.globalConfigData[1].pageSettings[i].PageName
                      temp = temp.split('.')[0]

                      if (name == temp) {
                        var partials = this.globalConfigData[1].pageSettings[i].partials;
                        var layoutname = this.globalConfigData[1].pageSettings[i].PageLayout;
                        var indexlayoutname = _.findIndex(this.globalConfigData[2].layoutOptions[0].Layout, function(o) {
                          return o.value == layoutname
                        })
                        //START:-Here we check for default value set for partial used in layout we are using and then that default value are set in result1.
                        for (let c = 0; c < this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].partialsList.length; c++) {
                          var tempPartialsvalue = this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].partialsList[c]
                          var indexdefaultcheck = _.findIndex(this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].defaultList, function(o) {
                            return Object.keys(o)[0] == tempPartialsvalue
                          })
                          var indexresult;
                          if (indexdefaultcheck == -1) {
                            indexresult = _.findIndex(result1, function(o) {
                              return o == tempPartialsvalue
                            })
                            if (indexresult == -1) {
                              result1.push(tempPartialsvalue)
                              var obj = {}
                              obj[tempPartialsvalue] = 'default.partial'
                              DefaultParams.push(obj)
                            }
                          } else {

                            indexresult = _.findIndex(result1, function(o) {
                              return o == tempPartialsvalue
                            })

                            if (indexresult == -1) {

                              result1.push(Object.keys(this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].defaultList[indexdefaultcheck])[0])
                              var obj = {}
                              obj[this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].partialsList[c]] = this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].defaultList[indexdefaultcheck][Object.keys(this.globalConfigData[2].layoutOptions[0].Layout[indexlayoutname].defaultList[indexdefaultcheck])[0]]
                              DefaultParams.push(obj)
                            }
                          }

                        }
                        //END
                        //START:- here we are checkig if partial used have additional inherited partial, so we check and then add them too.
                        for (let k = 0; k < result1.length; k++) {
                          let checkpartial = false
                          for (var r = 0; r < partials.length; r++) {
                            if (Object.keys(partials[r])[0] == result1[k]) {

                              var temp1 = DefaultParams[k][result1[k]]
                              var temp2 = partials[r][result1[k]]
                              if (temp1.split('.')[0] == temp2.split('.')[0]) {
                                checkpartial = true;

                                for (let z = 0; z < this.globalConfigData[2].layoutOptions[0][result1[k]].length; z++) {

                                  if (this.globalConfigData[2].layoutOptions[0][result1[k]][z].value == DefaultParams[k][result1[k]].split('.')[0]) {
                                    if (this.globalConfigData[2].layoutOptions[0][result1[k]][z].defaultList != undefined) {
                                      var defaultListtemp = this.globalConfigData[2].layoutOptions[0][result1[k]][z].defaultList
                                      this.recursivecall(name, partials, defaultListtemp)
                                    }
                                  }
                                }

                              }
                            }

                          }
                          if (checkpartial != true) {
                            var obj = {}
                            obj[result1[k]] = DefaultParams[k][result1[k]].split('.')[0]
                            for (let z = 0; z < this.globalConfigData[2].layoutOptions[0][result1[k]].length; z++) {
                              if (this.globalConfigData[2].layoutOptions[0][result1[k]][z].value == DefaultParams[k][result1[k]].split('.')[0]) {
                                if (this.globalConfigData[2].layoutOptions[0][result1[k]][z].defaultList != undefined) {
                                  var defaultListtemp = this.globalConfigData[2].layoutOptions[0][result1[k]][z].defaultList
                                  this.recursivecall(name, partials, defaultListtemp)
                                }
                              }
                            }
                            this.globalConfigData[1].pageSettings[i].partials.push(obj);
                            r = r - 1;
                          }
                        }
                        //END
                      } else if (name != temp) {}
                    }
                  }
                }
                name = fileName.split('/')[2].split('.')[0];
                this.saveConfigFile(folderUrl);
                let temp = {
                  value: name,
                  label: name
                }
                let checkValue = false;
                if (foldername == 'Pages') {
                  for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
                    let temp = this.globalConfigData[1].pageSettings[i].PageName
                    temp = temp.split('.')[0]
                    if (name == temp) {
                      checkValue = true;
                      if (result1.length <= 0) {
                        var layoutresult = [];
                        var layoutDefault = [];
                        for (let k = 0; k < this.globalConfigData[2].layoutOptions[0].Layout.length; k++) {
                          if (this.globalConfigData[2].layoutOptions[0].Layout[k].value == this.globalConfigData[1].pageSettings[i].PageLayout) {
                            layoutresult = JSON.parse(JSON.stringify(this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList))
                            layoutDefault = JSON.parse(JSON.stringify(this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList))
                          }
                        }
                        var layoutname = this.globalConfigData[1].pageSettings[i].PageLayout
                        for (let v = 0; v < layoutresult.length; v++) {
                          var indexlayoutdefaultpartial = _.findIndex(layoutDefault, function(o) {
                            return Object.keys(o)[0] == layoutresult[v]
                          })

                          if (this.globalConfigData[2].layoutOptions[0][layoutresult[v]] != undefined && indexlayoutdefaultpartial == -1) {
                            var indexlayoutpartial = _.findIndex(this.globalConfigData[2].layoutOptions[0][layoutresult[v]], function(o) {

                              return o.value == 'default'

                            })
                            var tempvalue = this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].partialsList
                            if (tempvalue != undefined) {
                              for (let z = 0; z < tempvalue.length; z++) {
                                var checkalreadylayout = _.findIndex(layoutresult, function(o) {
                                  return o == tempvalue[z]
                                })
                                if (checkalreadylayout == -1) {
                                  var checkdefaultvaluepartial = _.findIndex(this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].defaultList, function(o) {
                                    return Object.keys(o)[0] == tempvalue[z]
                                  })
                                  if (checkdefaultvaluepartial == -1) {
                                    layoutresult.push(tempvalue[z])
                                    var obj = {}
                                    obj[tempvalue[z]] = 'default'
                                    layoutDefault.push(obj)
                                  } else {
                                    layoutresult.push(tempvalue[z])
                                    layoutDefault.push(this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].defaultList[checkdefaultvaluepartial])
                                  }

                                }
                              }
                            }

                          } else if (this.globalConfigData[2].layoutOptions[0][layoutresult[v]] != undefined && indexlayoutdefaultpartial != -1) {
                            var indexlayoutpartial = _.findIndex(this.globalConfigData[2].layoutOptions[0][layoutresult[v]], function(o) {

                              return o.value == layoutDefault[indexlayoutdefaultpartial][layoutresult[v]].split('.')[0]

                            })
                            if (this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].partialsList != undefined) {

                              var tempvalue = this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].partialsList
                              if (tempvalue != undefined) {
                                for (let z = 0; z < tempvalue.length; z++) {
                                  var checkalreadylayout = _.findIndex(layoutresult, function(o) {
                                    return o == tempvalue[z]
                                  })
                                  if (checkalreadylayout == -1) {
                                    var checkdefaultvaluepartial = _.findIndex(this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].defaultList, function(o) {
                                      return Object.keys(o)[0] == tempvalue[z]
                                    })
                                    if (checkdefaultvaluepartial == -1) {
                                      layoutresult.push(tempvalue[z])
                                      var obj = {}
                                      obj[tempvalue[z]] = 'default'
                                      layoutDefault.push(obj)
                                    } else {
                                      layoutresult.push(tempvalue[z])
                                      layoutDefault.push(this.globalConfigData[2].layoutOptions[0][layoutresult[v]][indexlayoutpartial].defaultList[checkdefaultvaluepartial])
                                    }

                                  }
                                }
                              }
                            }

                          }
                        }
                        if (layoutresult.length > 0) {
                          for (let k = 0; k < this.globalConfigData[1].pageSettings[i].partials.length; k++) {
                            let checklayoutp = false
                            for (let j = 0; j < layoutresult.length; j++) {

                              if (Object.keys(this.globalConfigData[1].pageSettings[i].partials[k])[0] == layoutresult[j]) {

                                if (layoutDefault.length > 0) {

                                  for (let x = 0; x < layoutDefault.length; x++) {
                                    if (Object.keys(layoutDefault[x])[0] == layoutresult[j]) {

                                      checklayoutp = true
                                    }
                                  }

                                } else {
                                  if (this.globalConfigData[1].pageSettings[i].partials[k][layoutresult[j]] != '') {
                                    checklayoutp = true
                                  }
                                }

                              } else {
                                if (this.globalConfigData[1].pageSettings[i].partials[k][layoutresult[j]] != '') {
                                  checklayoutp = true
                                }
                              }

                            }
                            if (checklayoutp != true) {
                              this.globalConfigData[1].pageSettings[i].partials.splice(k, 1)
                              k = k - 1
                            }
                          }
                          for (let y = 0; y < layoutresult.length; y++) {
                            let checkdefaultvalue = false
                            for (let k = 0; k < this.globalConfigData[1].pageSettings[i].partials.length; k++) {
                              if (layoutresult[y] == Object.keys(this.globalConfigData[1].pageSettings[i].partials[k])[0]) {
                                checkdefaultvalue = true;
                              }
                            }
                            if (checkdefaultvalue != true) {
                              let checkdefaultvalueinside = false;
                              for (let e = 0; e < layoutDefault.length; e++) {
                                if (Object.keys(layoutDefault[e])[0] == layoutresult[y]) {
                                  checkdefaultvalueinside = true
                                  var obj = {}
                                  obj[layoutresult[y]] = layoutDefault[e][layoutresult[y]].split('.')[0]
                                  this.globalConfigData[1].pageSettings[i].partials.push(obj)
                                }
                              }
                              if (checkdefaultvalueinside != true) {
                                var obj = {}
                                obj[layoutresult[y]] = 'default'
                                this.globalConfigData[1].pageSettings[i].partials.push(obj)
                              }
                            }
                          }
                        }
                      }
                    }
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
        } else {
          this.newProjectFolderDialog = false;
          this.fullscreenLoading = false;
          this.$session.remove('username');
          localStorage.removeItem('current_sub_id');
          Cookies.remove('subscriptionId' ,{domain: location});
          let location = psl.parse(window.location.hostname)
          location = location.domain === null ? location.input : location.domain

          Cookies.remove('auth_token', {
            domain: location
          });
          Cookies.remove('email', {
            domain: location
          });
          Cookies.remove('userDetailId', {
            domain: location
          });
          Cookies.remove('subscriptionId', {
            domain: location
          });
              this.$message({
              message: 'You\'re Logged Out From System. Please login again!',
              type: 'error',
              onClose(){
                window.location = '/login'
              }
            });
        }

      },
      // Ends Save File

      recursivecall(name, partials, defaultListtemp) {
        for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
          let temp = this.globalConfigData[1].pageSettings[i].PageName
          temp = temp.split('.')[0]
          if (name == temp) {
            for (let y = 0; y < defaultListtemp.length; y++) {
              let checkinner = false
              for (let x = 0; x < partials.length; x++) {
                if (Object.keys(partials[x])[0] == Object.keys(defaultListtemp[y])[0]) {
                  if (partials[x][Object.keys(partials[x])[0]] == defaultListtemp[y][Object.keys(defaultListtemp[y])[0]].split('.')[0]) {
                    checkinner = true
                    break;
                  }
                }
                var partemp = defaultListtemp[y]
                if (this.globalConfigData[2].layoutOptions[0][Object.keys(partemp)[0]] != undefined) {
                  for (let k = 0; k < this.globalConfigData[2].layoutOptions[0][Object.keys(partemp)[0]].length; k++) {
                    if (this.globalConfigData[2].layoutOptions[0][Object.keys(partemp)[0]][k].value == partemp[Object.keys(partemp)[0]]) {
                      if (this.globalConfigData[2].layoutOptions[0][Object.keys(partemp)[0]][k].defaultList != undefined) {
                        this.recursivecall(name, partials, this.globalConfigData[2].layoutOptions[0][Object.keys(partemp)[0]][k].defaultList)
                      }
                    }
                  }
                }
              }
              if (checkinner != true) {
                defaultListtemp[y][Object.keys(defaultListtemp[y])[0]] = defaultListtemp[y][Object.keys(defaultListtemp[y])[0]].split('.')[0]

                this.globalConfigData[1].pageSettings[i].partials.push(defaultListtemp[y]);

              }
            }
          }
        }
      },

      async generatePreview() {
          if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
              this.previewLoading = true;
              this.fullscreenLoading = true;
              await this.saveFile('void');

              let nameF = this.$store.state.fileUrl.substring(this.$store.state.fileUrl.indexOf('Pages/') + 6, this.$store.state.fileUrl.indexOf('.html'));

              let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
              let urlparts = configFileUrl.split("/");
              let fileNameOrginal = urlparts[urlparts.length - 1];
              let fileName = '';
              if (_.includes(configFileUrl, 'Partials')) {
                  fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
              } else if (_.includes(configFileUrl, 'Pages')) {
                  fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
              } else {
                  fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
              }
              let folderUrl = configFileUrl.replace(fileName, '');
              await this.getConfigFileData(folderUrl);
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
              let self = this;
              setTimeout(async function() {

                  let externalJs = self.globalConfigData[1].projectSettings[1].ProjectExternalJs;
                  let externalCss = self.globalConfigData[1].projectSettings[1].ProjectExternalCss;
                  let metaInfo = self.globalConfigData[1].projectSettings[1].ProjectMetaInfo;
                  let ProjectMetacharset = self.globalConfigData[1].projectSettings[1].ProjectMetacharset
                  let projectscripts = self.globalConfigData[1].projectSettings[1].ProjectScripts
                  let projectstyles = self.globalConfigData[1].projectSettings[1].ProjectStyles;
                  let projectseotitle = self.globalConfigData[1].projectSettings[0].ProjectSEOTitle;
                  let projectfaviconhref = self.globalConfigData[1].projectSettings[0].BrandLogoName
                  let tophead = '';
                  let endhead = '';
                  let topbody = '';
                  let endbody = '';
                  let pagestyles = [];
                  let favicon = ''
                  let SeoTitle = ''
                  let pageexternalJs = [];
                  let pagescripts = [];
                  let pageexternalCss = [];
                  let pageMetaInfo = [];
                  let pageSeoTitle;
                  let PageMetacharset = '';
                  let PageCss=[];
                  if (projectseotitle != undefined && projectseotitle != '') {
                      SeoTitle = projectseotitle
                  }
                  if (projectfaviconhref != undefined && projectfaviconhref != '' && projectfaviconhref != '!!!No file uploaded!!!') {
                      favicon = '<link rel="icon" type="image/png" href="./../favicon.' + projectfaviconhref.split('.')[1] + '">'
                  }

                  if (ProjectMetacharset != undefined && ProjectMetacharset != '') {
                      tophead = tophead + '<meta charset="' + ProjectMetacharset + '">'
                  }
                  if (metaInfo != undefined && metaInfo.length > 0) {
                      for (let a = 0; a < metaInfo.length; a++) {

                          if ((metaInfo[a].name != '' && metaInfo[a].name.trim().length > 0) && (metaInfo[a].content != '' && metaInfo[a].content.trim().length > 0)) {
                              // console.log('metainfo', a)
                              tophead = tophead + '<meta name="' + metaInfo[a].name + '" content="' + metaInfo[a].content + '">'
                          }
                      }
                  }
                  if (externalJs != undefined && externalJs.length > 0) {
                      for (let a = 0; a < externalJs.length; a++) {
                          if (externalJs[a].linkposition == 'starthead' && externalJs[a].linkurl.trim().length > 0) {
                              tophead = tophead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                          } else if (externalJs[a].linkposition == 'endhead' && externalJs[a].linkurl.trim().length > 0) {
                              endhead = endhead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                          } else if (externalJs[a].linkposition == 'startbody' && externalJs[a].linkurl.trim().length > 0) {
                              topbody = topbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                          } else if (externalJs[a].linkposition == 'endbody' && externalJs[a].linkurl.trim().length > 0) {
                              endbody = endbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                          }
                      }
                  }

                  if (externalCss != undefined && externalCss.length > 0) {
                      for (let a = 0; a < externalCss.length; a++) {
                          if (externalCss[a].linkposition == 'starthead' && externalCss[a].linkurl.trim().length > 0) {
                              tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
                          } else if (externalCss[a].linkposition == 'endhead' && externalCss[a].linkurl.trim().length > 0) {
                              endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
                          } else if (externalCss[a].linkposition == 'startbody' && externalCss[a].linkurl.trim().length > 0) {
                              topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
                          } else if (externalCss[a].linkposition == 'endbody' && externalCss[a].linkurl.trim().length > 0) {
                              endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '"> '
                          }

                      }
                  }
                  if (projectscripts != undefined && projectscripts.length > 0) {
                      for (let a = 0; a < projectscripts.length; a++) {
                          if (projectscripts[a].linkposition == 'starthead' && projectscripts[a].script.trim().length > 0) {
                              tophead = tophead + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                          } else if (projectscripts[a].linkposition == 'endhead' && projectscripts[a].script.trim().length > 0) {
                              endhead = endhead + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                          } else if (projectscripts[a].linkposition == 'startbody' && projectscripts[a].script.trim().length > 0) {
                              topbody = topbody + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                          } else if (projectscripts[a].linkposition == 'endbody' && projectscripts[a].script.trim().length > 0) {
                              endbody = endbody + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                          }
                      }
                  }
                  if (projectstyles != undefined && projectstyles.length > 0) {
                      for (let a = 0; a < projectstyles.length; a++) {
                          if (projectstyles[a].linkposition == 'starthead' && projectstyles[a].style.trim().length > 0) {
                              tophead = tophead + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                          } else if (projectstyles[a].linkposition == 'endhead' && projectstyles[a].style.trim().length > 0) {
                              endhead = endhead + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                          } else if (projectstyles[a].linkposition == 'startbody' && projectstyles[a].style.trim().length > 0) {
                              topbody = topbody + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                          } else if (projectstyles[a].linkposition == 'endbody' && projectstyles[a].style.trim().length > 0) {
                              endbody = endbody + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                          }
                      }
                  }

                  let back_partials = new Array();
                  for (let i = 0; i < self.globalConfigData[1].pageSettings.length; i++) {
                      if (self.globalConfigData[1].pageSettings[i].PageName == (nameF + '.html')) {
                          let tempPartials = self.globalConfigData[1].pageSettings[i].partials;

                          self.form.Layout = self.globalConfigData[1].pageSettings[i].PageLayout

                          self.form.partials = tempPartials
                          back_partials = JSON.parse(JSON.stringify(tempPartials));
                          self.form.vuepartials = self.globalConfigData[1].pageSettings[i].VueComponents
                          pageexternalJs = self.globalConfigData[1].pageSettings[i].PageExternalJs;
                          pageexternalCss = self.globalConfigData[1].pageSettings[i].PageExternalCss;
                          pageMetaInfo = self.globalConfigData[1].pageSettings[i].PageMetaInfo;
                          pageSeoTitle = self.globalConfigData[1].pageSettings[i].PageSEOTitle;
                          PageMetacharset = self.globalConfigData[1].pageSettings[i].PageMetacharset;
                          pagescripts = self.globalConfigData[1].pageSettings[i].PageScripts;
                          pagestyles = self.globalConfigData[1].pageSettings[i].PageStyles;
                          PageCss=self.globalConfigData[1].pageSettings[i].PageCss;

                      }
                  }
                  if (pageSeoTitle != undefined && pageSeoTitle != '') {
                      SeoTitle = pageSeoTitle
                  }
                  // console.log(SeoTitle)
                  if (PageMetacharset != undefined && PageMetacharset != '' && !(ProjectMetacharset != '')) {
                      tophead = tophead + '<meta charset="' + PageMetacharset + '">'
                  }
                  if (pageMetaInfo != undefined && pageMetaInfo.length > 0) {
                      for (let a = 0; a < pageMetaInfo.length; a++) {
                          if ((pageMetaInfo[a].name != '' && pageMetaInfo[a].name.trim().length > 0) && (pageMetaInfo[a].content != '' && pageMetaInfo[a].content.trim().length > 0)) {

                              tophead = tophead + '<meta name="' + pageMetaInfo[a].name + '" content="' + pageMetaInfo[a].content + '">'
                          }
                      }
                  }
                  if (pageexternalJs != undefined && pageexternalJs.length > 0) {
                      for (let a = 0; a < pageexternalJs.length; a++) {
                          if (pageexternalJs[a].linkposition == 'starthead' && pageexternalJs[a].linkurl.trim().length > 0) {
                              tophead = tophead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                          } else if (pageexternalJs[a].linkposition == 'endhead' && pageexternalJs[a].linkurl.trim().length > 0) {
                              endhead = endhead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                          } else if (pageexternalJs[a].linkposition == 'startbody' && pageexternalJs[a].linkurl.trim().length > 0) {
                              topbody = topbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                          } else if (pageexternalJs[a].linkposition == 'endbody' && pageexternalJs[a].linkurl.trim().length > 0) {
                              endbody = endbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                          }
                      }
                  }

                  if (pageexternalCss != undefined && pageexternalCss.length > 0) {
                      for (let a = 0; a < pageexternalCss.length; a++) {
                          if (pageexternalCss[a].linkposition == 'starthead' && pageexternalCss[a].linkurl.trim().length > 0) {
                              tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                          } else if (pageexternalCss[a].linkposition == 'endhead' && pageexternalCss[a].linkurl.trim().length > 0) {
                              endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                          } else if (pageexternalCss[a].linkposition == 'startbody' && pageexternalCss[a].linkurl.trim().length > 0) {
                              topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                          } else if (pageexternalCss[a].linkposition == 'endbody' && pageexternalCss[a].linkurl.trim().length > 0) {
                              endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '"> '
                          }
                      }
                  }
                  if (pagescripts != undefined && pagescripts.length > 0) {
                      for (let a = 0; a < pagescripts.length; a++) {
                          if (pagescripts[a].linkposition == 'starthead' && pagescripts[a].script.trim().length > 0) {
                              tophead = tophead + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                          } else if (pagescripts[a].linkposition == 'endhead' && pagescripts[a].script.trim().length > 0) {
                              endhead = endhead + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                          } else if (pagescripts[a].linkposition == 'startbody' && pagescripts[a].script.trim().length > 0) {
                              topbody = topbody + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                          } else if (pagescripts[a].linkposition == 'endbody' && pagescripts[a].script.trim().length > 0) {
                              endbody = endbody + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                          }
                      }
                  }
                  if (pagestyles != undefined && pagestyles.length > 0) {
                      for (let a = 0; a < pagestyles.length; a++) {
                          if (pagestyles[a].linkposition == 'starthead' && pagestyles[a].style.trim().length > 0) {
                              tophead = tophead + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                          } else if (pagestyles[a].linkposition == 'endhead' && pagestyles[a].style.trim().length > 0) {
                              endhead = endhead + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                          } else if (pagestyles[a].linkposition == 'startbody' && pagestyles[a].style.trim().length > 0) {
                              topbody = topbody + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                          } else if (pagestyles[a].linkposition == 'endbody' && pagestyles[a].style.trim().length > 0) {
                              endbody = endbody + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                          }
                      }
                  }


                  var contentpartials = self.$store.state.content;
                  // if (self.form.vuepartials != undefined && self.form.vuepartials.length > 0) {

                  //   var mainVuefile = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/public/assets/back_main.js');
                  //   mainVuefile = mainVuefile.data

                  //   for (let x = 0; x < self.form.vuepartials.length; x++) {
                  //     let temp = mainVuefile.replace(/@@vuecomponent@@/g, self.form.vuepartials[x].value.split('.')[0])
                  //     temp = temp.replace('./' + self.form.vuepartials[x].value.split('.')[0], folderUrl + '/Partials/' + self.form.vuepartials[x].partialsName + '/' + self.form.vuepartials[x].value.split('.')[0])

                  //     await axios.post(config.baseURL + '/flows-dir-listing', {
                  //         filename: config.pluginsPath + '/public/' + self.form.vuepartials[x].value.split('.')[0] + '.js',
                  //         text: temp,
                  //         type: 'file'
                  //       }).then(async(res) => {
                  //         contentpartials = contentpartials + '<script src="./assets/client-plugins/' + self.form.vuepartials[x].value.split('.')[0] + '.js' + '"><\/script>'

                  //         axios.get(config.baseURL + '/webpack-api?path=' + folderUrl + '/public/assets/client-plugins/' + self.form.vuepartials[x].value.split('.')[0] + '.js', {})
                  //           .then((response) => {

                  //           })
                  //           .catch((e) => {
                  //             //console.log(e)
                  //           })
                  //       })
                  //       .catch((e) => {
                  //         //console.log(e)
                  //       })
                  //   }
                  // }
                  if (self.form.Layout == 'Blank') {
                      await axios.post(config.baseURL + '/flows-dir-listing', {
                              filename: folderUrl + '/Layout/Blank.layout',
                              text: '{{{ contents }}}',
                              type: 'file'
                          })
                          .catch((e) => {
                              console.log("Error while blank file creation")
                          })
                  }

                  let layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + self.form.Layout + '.layout').catch((err)=>{ console.log('Error:', err); });
                  var backlayoutdata = JSON.parse(JSON.stringify(layoutdata));
                  this.backuplayout = backlayoutdata.data;
                  let newFolderName = folderUrl + '/temp';
                  await axios.post(config.baseURL + '/flows-dir-listing', {
                          foldername: newFolderName,
                          type: 'folder'
                      }).then(async(res) => {
                          for (let i = 0; i < back_partials.length; i++) {
                              let responsepartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + Object.keys(back_partials[i]) + '/' + back_partials[i][Object.keys(back_partials[i])] + '.partial').catch((err)=>{ console.log('Error:', err); });
                              responsepartials = responsepartials.data
                              let result = (getFromBetween.get(responsepartials, "{{>", "}}"));
                              var DefaultParams = [];
                              if (result.length > 0) {
                                  var resultParam = result
                                  for (let i = 0; i < resultParam.length; i++) {
                                      var temp;
                                      temp = resultParam[i].trim()
                                      result[i] = result[i].trim()
                                      result[i] = result[i].replace(/&nbsp;/g, '').trim()
                                      temp = temp.replace(/&nbsp;/g, '')
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
                                  for (let j = 0; j < result.length; j++) {
                                      temp1 = '{{> ' + Object.keys(DefaultParams[j])[0] + " id='" + DefaultParams[j][Object.keys(DefaultParams[j])[0]] + "' }}"

                                      temp2 = '{{> ' + Object.keys(DefaultParams[j])[0] + '_' + DefaultParams[j][Object.keys(DefaultParams[j])[0]].split('.')[0] + " id='" + DefaultParams[j][Object.keys(DefaultParams[j])[0]] + "' }}"
                                      responsepartials = responsepartials.split(temp1).join(temp2)
                                  }
                              }
                              await axios.post(config.baseURL + '/flows-dir-listing', {
                                  filename: folderUrl + '/temp/' + Object.keys(back_partials[i]) + '_' + back_partials[i][Object.keys(back_partials[i])] + '.html',
                                  text: responsepartials,
                                  type: 'file'
                              }).catch((e) => {
                                  console.log(e)
                              })
                          }

                          var result = (getFromBetween.get(layoutdata.data, "{{>", "}}"));
                          var changeresult = JSON.parse(JSON.stringify(result))
                          for (let s = 0; s < changeresult.length; s++) {
                              layoutdata.data = layoutdata.data.replace(changeresult[s], changeresult[s].replace(/&nbsp;/g, '').replace(/\"\s+\b/g, '"').replace(/\'\s+\b/g, "'").replace(/\b\s+\'/g, "'").replace(/\b\s+\"/g, '"').replace(/\s+/g, " ").replace(/\s*$/g, "").replace(/\s*=\s*/g, '='))
                          }

                          if (result.length > 0) {
                              var resultParam = result
                              for (let i = 0; i < resultParam.length; i++) {
                                  var temp;
                                  temp = resultParam[i].trim()
                                  result[i] = result[i].trim()

                                  temp = temp.split(' ')
                                  for (let j = 0; j < temp.length; j++) {
                                      temp[j] = temp[j].trim();
                                      if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                          if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf("'") > -1) {
                                              result[i] = temp[0];
                                              if (temp[j]) {
                                                  let x = temp[j]
                                                  x = temp[j].split("'")[1] + '.partial';
                                                  let obj = {}
                                                  obj[temp[0]] = x
                                                  DefaultParams.push(obj)
                                                  break;
                                              }
                                          }
                                          if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf('"') > -1) {
                                              result[i] = temp[0];
                                              if (temp[j]) {
                                                  let x = temp[j]
                                                  x = temp[j].split('"')[1] + '.partial';
                                                  let obj = {}
                                                  obj[temp[0]] = x
                                                  DefaultParams.push(obj)
                                                  break;
                                              }
                                          } else {
                                              //console.log('Error while finding ID in layout');
                                          }
                                      }
                                  }
                              }
                              for (let j = 0; j < result.length; j++) {
                                  for (let i = 0; i < back_partials.length; i++) {
                                      if (Object.keys(back_partials[i])[0] == result[j]) {

                                          temp1 = '{{> ' + Object.keys(back_partials[i])[0] + '}}'
                                          if (layoutdata.data.search(temp1) > 0) {

                                              temp2 = '{{> ' + Object.keys(back_partials[i])[0] + '_' + back_partials[i][Object.keys(back_partials[i])[0]] + '}}'
                                          } else {
                                              var indexdefault = _.findIndex(DefaultParams, function(o) {
                                                  return Object.keys(o)[0] == result[j]
                                              })
                                              temp1 = "{{> " + Object.keys(back_partials[i])[0] + " id='" + DefaultParams[indexdefault][Object.keys(back_partials[i])[0]].split('.')[0] + "'}}"

                                              temp2 = "{{> " + Object.keys(back_partials[i])[0] + '_' + back_partials[i][Object.keys(back_partials[i])[0]] + " id='" + DefaultParams[indexdefault][Object.keys(back_partials[i])[0]].split('.')[0] + "'}}"
                                          }
                                          if (layoutdata.data.split(temp1).join(temp2)) {
                                              layoutdata.data = layoutdata.data.split(temp1).join(temp2)
                                              break;
                                          } else {
                                              //console.log('Replacing in layout file failed')
                                          }
                                      }
                                  }
                              }
                          }

                      })
                      .catch((e) => {
                          console.log(e)
                      })

                  let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/public/assets/metalsmithPreview.js').catch((err)=>{ console.log('Error:', err); });
                  let backupmetalsmith = JSON.parse(JSON.stringify(responseMetal.data))

                  var index = responseMetal.data.search('.source')

                  responseMetal.data = responseMetal.data.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.data.substr(index + 9)
                  var indexPartial = responseMetal.data.search("handlebars");

                  for (var j = 0; j < self.form.partials.length; j++) {
                      var temp1, temp2;
                      temp1 = '{{> ' + Object.keys(self.form.partials[j])[0] + " id='" + self.form.partials[j][Object.keys(self.form.partials[j])[0]] + ".partial' }}"

                      temp2 = '{{> ' + Object.keys(self.form.partials[j])[0] + '_' + self.form.partials[j][Object.keys(self.form.partials[j])[0]] + " id='" + self.form.partials[j][Object.keys(self.form.partials[j])[0]] + ".partial' }}"
                      if (contentpartials.match(temp1)) {

                          contentpartials = contentpartials.split(temp1).join(temp2)
                      }
                      var obj = {}
                      var key = Object.keys(self.form.partials[j])[0] + '_' + self.form.partials[j][Object.keys(self.form.partials[j])[0]]
                      obj[key] = self.form.partials[j][Object.keys(self.form.partials[j])[0]]
                      self.form.partials[j] = []
                      self.form.partials[j] = obj
                  }
                  // self.$store.state.content = contentpartials;
                  var partials = '';
                  for (var i = 0; i < self.form.partials.length; i++) {
                      let key = Object.keys(self.form.partials[i])[0];
                      let value = self.form.partials[i]
                      let key2 = key;
                      key = key.trim();
                      if (value[key2].match('partial')) {
                          key = key.split('.')[0]
                          var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[i])[0] + "_" + value[key2] + "').toString())\n"
                      } else {
                          var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[i])[0] + "_" + value[key2] + ".html').toString())\n"
                      }
                      partials = partials + temp;
                  }
                  responseMetal.data = responseMetal.data.substr(0, indexPartial + 14) + partials + responseMetal.data.substr(indexPartial + 14);
                  self.form.partials = back_partials

                  // console.log("Final metalsmith:", responseMetal.data);

                  var mainMetal = folderUrl + '/public/assets/metalsmithPreview.js'
                  axios.post(config.baseURL + '/save-menu', {
                          filename: mainMetal,
                          text: responseMetal.data,
                          type: 'file'
                      })
                      .then(async(response) => {
                          // console.log('folderUrl:',folderUrl)
                          let newFolderName1 = folderUrl + '/Preview';
                          await axios.post(config.baseURL + '/flows-dir-listing', {
                              foldername: newFolderName1,
                              type: 'folder'
                          }).then(async(res) => {
                              //console.log(res)

                          }).catch((e) => {
                              console.log(e)
                          })

                          let datadivscript = ''
                          let divappstart = ''
                          let divappend = ''
                          let dfscript = ''
                          let indexvuejs=_.findIndex(PageCss,function(o){
                            return o=='VueJs'
                          })

                          // if (contentpartials.indexOf('datafieldgroup') > 0 || contentpartials.indexOf('datafieldtable') > 0) {
                            if(indexvuejs!=-1){
                              datadivscript = "<script type='text/javascript' src='https://cdn.jsdelivr.net/web-animations/latest/web-animations.min.js'><\/script>\n" +
                                  "<script type='text/javascript' src='https://hammerjs.github.io/dist/hammer.min.js'><\/script>\n" +
                                  "<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/muuri/0.5.3/muuri.min.js'><\/script>\n"
                              divappstart = '<div id="app">'
                              divappend = '</div>'
                              dfscript = "<script type='text/javascript' src='https://unpkg.com/vue/dist/vue.js'><\/script>\n" + '<script src="https://unpkg.com/iview/dist/iview.min.js"><\/script>' + '<link rel="stylesheet" href="https://unpkg.com/iview/dist/styles/iview.css">' + "<script type='text/javascript' src=' https://res.cloudinary.com/flowz/raw/upload/v1519124435/builder/js/vuecomponent.js'><\/script>\n"
                          }

                          let newContent = "<html>\n<head>\n" + tophead +
                              "<title>" + SeoTitle + "</title>\n" + favicon + '\n' +
                              '<script src="https://code.jquery.com/jquery-3.3.1.min.js"><\/script>\n' +
                              "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
                              "<link rel='stylesheet' href='./../main-files/main.css'/>\n" +
                              datadivscript +
                              endhead + "\n</head>\n<body>\n" + divappstart + topbody +
                              layoutdata.data +
                              '\n' + divappend +
                              "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
                              "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
                              "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
                              '<script src="./../assets/client-plugins/flowz-builder-engine.js"><\/script>\n' +
                              '<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js"><\/script>\n' +
                              '\n<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
                              endbody + dfscript +
                              '\n</body>\n</html>';

                          axios.post(config.baseURL + '/flows-dir-listing', {
                                  filename: folderUrl + '/Layout/' + self.form.Layout + '_temp.layout',
                                  text: newContent,
                                  type: 'file'
                              })
                              .then(async(res) => {

                                  var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';

                                  if (self.form.Layout == 'Blank') {
                                      rawContent = '---\nlayout: ' + self.form.Layout + '_temp.layout\n---\n' + rawContent

                                  } else {
                                      var tempValueLayout = '---\nlayout: ' + self.form.Layout + '_temp.layout\n---\n';
                                      rawContent = tempValueLayout + rawContent
                                  }
                                  self.PageLayout = JSON.parse(JSON.stringify(self.form.Layout));
                                  var previewFileName = folderUrl + '/Preview/' + nameF + '.hbs';
                                  await axios.post(config.baseURL + '/flows-dir-listing', {
                                          filename: previewFileName,
                                          text: rawContent,
                                          type: 'file'
                                      })
                                      .then(async(res) => {

                                          self.saveFileLoading = false;
                                          // console.log('Metalsmith call FolderUrl: ', folderUrl);
                                          await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {

                                                  axios.post(config.baseURL + '/save-menu', {
                                                          filename: folderUrl + '/public/assets/metalsmithPreview.js',
                                                          text: backupmetalsmith,
                                                          type: 'file'
                                                      })
                                                      .then(async(res) => {
                                                          self.fullscreenLoading = false;
                                                          self.previewLoading = false;

                                                          let previewFile = self.$store.state.fileUrl.replace(/\\/g, "\/");
                                                          previewFile = folderUrl.replace('/var/www/html', '');

                                                          let projName = previewFile.replace('websites/', '');

                                                          projName = projName.split('/')[2];
                                                          // console.log("process.env.NODE_ENV",process.env.NODE_ENV)
                                                          if (process.env.NODE_ENV !== 'development') {
                                                              window.open('http://' + Cookies.get('userDetailId') + '.' + projName + '.' + config.ipAddress + '/Preview/' + nameF + '.html');
                                                          } else {
                                                              window.open(config.ipAddress + previewFile + '/public/Preview/' + nameF + '.html');
                                                          }

                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                                              .then(async(res) => {
                                                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((err)=>{ console.log('Error:', err); })

                                                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {}).catch((e) => {
                                                                      //console.log(e)
                                                                  })
                                                                  if (self.form.vuepartials != undefined && self.form.vuepartials.length > 0) {
                                                                      for (let x = 0; x < self.form.vuepartials.length; x++) {
                                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.pluginsPath + '/public/' + self.form.vuepartials[x].value.split('.')[0] + '.js').then((res) => {})
                                                                              .catch((e) => {
                                                                                  //console.log(e)
                                                                              })
                                                                      }
                                                                  }
                                                                  if (self.form.Layout == 'Blank') {
                                                                      await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
                                                                          .catch((e) => {
                                                                              self.fullscreenLoading = false;
                                                                              console.log("Error while deleting blank.layout file")
                                                                          })
                                                                  }

                                                              })
                                                              .catch((e) => {
                                                                  self.fullscreenLoading = false;
                                                                  console.log(e)
                                                              })

                                                      })
                                                      .catch(async(e) => {
                                                          self.fullscreenLoading = false;
                                                          window.open('http://' + config.ipAddress + '/plugins/public/error.html');


                                                          await axios.post(config.baseURL + '/flows-dir-listing', {
                                                              filename: mainMetal,
                                                              text: backupmetalsmith,
                                                              type: 'file'
                                                          })
                                                          .catch((err)=>{ console.log('Error:', err); })

                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {}).catch((e) => {
                                                              //console.log(e)
                                                          })
                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview').catch((err)=>{ console.log('Error:', err); })
                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((err)=>{ console.log('Error:', err); })
                                                          console.log(e)
                                                      })

                                              })
                                              .catch(async(err) => {
                                                  self.fullscreenLoading = false;
                                                  window.open('http://' + config.ipAddress + '/plugins/public/error.html');

                                                  await axios.post(config.baseURL + '/flows-dir-listing', {
                                                      filename: mainMetal,
                                                      text: backupmetalsmith,
                                                      type: 'file'
                                                  })
                                                  .catch((err)=>{ console.log('Error:', err); })

                                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {}).catch((e) => {
                                                      //console.log(e)
                                                  })
                                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview').catch((err)=>{ console.log('Error:', err); })
                                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((err)=>{ console.log('Error:', err); })
                                                  console.log(err)

                                              })

                                      })
                                      .catch(async(e) => {
                                          self.fullscreenLoading = false;
                                          window.open('http://' + config.ipAddress + '/plugins/public/error.html');


                                          await axios.post(config.baseURL + '/flows-dir-listing', {
                                              filename: mainMetal,
                                              text: backupmetalsmith,
                                              type: 'file'
                                          })
                                          .catch((err)=>{ console.log('Error:', err); })

                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {}).catch((e) => {
                                              //console.log(e)
                                          })
                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview').catch((err)=>{ console.log('Error:', err); })
                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((err)=>{ console.log('Error:', err); })
                                          self.saveFileLoading = false
                                          console.log(e)
                                      })
                              })
                              .catch(async(e) => {
                                  self.fullscreenLoading = false;
                                  window.open('http://' + config.ipAddress + '/plugins/public/error.html');

                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((err)=>{ console.log('Error:', err); })
                                  await axios.post(config.baseURL + '/flows-dir-listing', {
                                      filename: mainMetal,
                                      text: backupmetalsmith,
                                      type: 'file'
                                  })
                                  .catch((err)=>{ console.log('Error:', err); })

                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {

                                  }).catch((e) => {
                                      //console.log(e)
                                  })
                                  console.log(e);
                              })
                      })
                      .catch(async(e) => {
                          self.fullscreenLoading = false;
                          window.open('http://' + config.ipAddress + '/plugins/public/error.html');

                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((err)=>{ console.log('Error:', err); })
                          await axios.post(config.baseURL + '/flows-dir-listing', {
                              filename: mainMetal,
                              text: backupmetalsmith,
                              type: 'file'
                          })
                          .catch((err)=>{ console.log('Error:', err); })
                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {

                          }).catch((e) => {
                              //console.log(e)
                          })

                          console.log(e)
                      })

              }, 2000);
          } else {
              this.newProjectFolderDialog = false;
              this.fullscreenLoading = false;
              this.$session.remove('username');
              localStorage.removeItem('current_sub_id');
              Cookies.remove('subscriptionId' ,{domain: location});
              let location = psl.parse(window.location.hostname)
              location = location.domain === null ? location.input : location.domain

              Cookies.remove('auth_token', {
                  domain: location
              });
              Cookies.remove('email', {
                  domain: location
              });
              Cookies.remove('userDetailId', {
                  domain: location
              });
              Cookies.remove('subscriptionId', {
                  domain: location
              });
              this.$message({
              message: 'You\'re Logged Out From System. Please login again!',
              type: 'error',
              onClose(){
                window.location = '/login'
              }
            });
          }
      },
      // Generate Preview

      // Save Menu's JSON file
      saveJsonFile: function(arg){
        this.saveFileLoading = true
          let newContent = this.$store.state.content;
          var componentId = this.componentId
        //   let myIndex = _.findIndex(this.$refs.contentComponent, function(o) { return o.$vnode.componentOptions.tag === componentId;});
          this.$refs.contentComponent.getMenuJson();
          newContent = this.$store.state.content;
            let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
            let tempurlparts = configFileUrl.split("/");
            let fileName = '/' + tempurlparts[tempurlparts.length - 3] + '/' + tempurlparts[tempurlparts.length - 2] + '/' + tempurlparts[tempurlparts.length - 1];
            var folderUrl = configFileUrl.replace(fileName, '');
            let newJsonName
        //   if (arg == 'getFileContent'){
        //     let urlparts = this.taburl.split("/");
        //     let fileNameOrginal = urlparts[urlparts.length - 1];
        //     let fileNameParts = fileNameOrginal.split('.');
        //     let actualFileNameOnly = fileNameParts[0];
        //     newJsonName = folderUrl + '/public/assets/'+actualFileNameOnly+'.json';
        //   }
        //    else {
            let urlparts = configFileUrl.split("/");
            let fileNameOrginal = urlparts[urlparts.length - 1];
            let fileNameParts = fileNameOrginal.split('.');
            let actualFileNameOnly = fileNameParts[0];
            newJsonName = folderUrl + '/public/assets/'+actualFileNameOnly+'.json';
        //   }
          return axios.post(config.baseURL + '/save-menu', {
              filename : newJsonName ,
              text : newContent,
              type : 'file'
          })
          .then((res) => {
              this.saveFileLoading = false;
          })
          .catch((e) => {
              this.saveFileLoading = false;
              this.$message({
                  showClose: true,
                  message: 'File not saved! Please try again.',
                  type: 'error'
              });
              //console.log(e)
          })
      },

      // Remove File delete file method
      async remove(store, data) {
        // console.log('remove called:')
        // Get Config.json file data
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

        // let projectName = folderUrl.split('/');
        // projectName = projectName[(projectName.length-1)];
        
        let projectName = urlparts[6];
        // console.log('projectName:',projectName)
        // this.getConfigFileData(folderUrl);
        let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + projectName ).catch((err)=>{ console.log('Error:', err); });

        let rawConfigs = responseConfig.data.configData;
        this.globalConfigData = rawConfigs;

        this.$swal({
          title: 'Are you sure?',
          text: 'You want you delete this file!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then(async () => {
          // axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
          //         headers: {
          //             'subscriptionId': this.value,
          //             'authorization': Cookies.get('auth_token')
          //         }
          //     })
          //   .then(async (res) => {
              //console.log('file deleted:')
              

              let file_path_ = data.path.replace(/\\/g, "/")
              let arr_file = file_path_.split('/')
              // console.log('file_path_:',file_path_)
              var last_element = arr_file[arr_file.length - 1];

              var Templates = JSON.parse(localStorage.getItem("Templates"));

              var new_name = last_element.replace(".html", "")

              Templates = [];
              Templates.pop(new_name)
              localStorage.setItem("Templates", JSON.stringify(Templates));

              if (_.includes(data.path, 'Pages')) {
                // console.log('delete from pages ')
                // get index of file to be deleted
                let indexOfPageName = _.findIndex(this.globalConfigData[1].pageSettings, function(o) {
                  return o.PageName == last_element;
                });

                // console.log('Delte page index: ', indexOfPageName);

                // Remove item from array
                this.globalConfigData[1].pageSettings.splice(indexOfPageName, 1);

                axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                  headers: {
                    'subscriptionId': this.value,
                    'authorization': Cookies.get('auth_token')
                  }
                })
                .then(async (res) => {
                  this.componentId = 'Dashboard';
                  this.isHomePage = true;

                  this.currentFile = null;
                  this.getData();
                
                }).catch((dismiss) => {
                  console.log('error', dismiss)
                })

                // let indexOfTabArray = _.findIndex(this.editableTabs, function(o) {
                //      return o.title == last_element;
                // });

                // Remove item from tab
                // this.editableTabs.splice(indexOfTabArray, 1);
                // console.log('url:',folderUrl)
                //console.log("save config file")
                await this.saveConfigFile(file_path_);
              } else if (_.includes(data.path, 'Layout')) {

                var layoutName = last_element.replace(".layout", "");

                // get index of file to be deleted
                let indexOfLayoutName = _.findIndex(this.globalConfigData[2].layoutOptions[0].Layout, function(o) {
                  return o.value == layoutName;
                });

                let isLayoutUsedInPage = false;
                let pageUsingLayout = [];

                this.globalConfigData[1].pageSettings.forEach((i, settingIndex) => {
                  if(i.PageLayout == layoutName){
                    isLayoutUsedInPage = true;
                    pageUsingLayout.push(this.globalConfigData[1].pageSettings[settingIndex].PageName);
                  }
                })

                if(isLayoutUsedInPage == true){
                  this.$alert('You cannot delete this layout. It is used in pages "' + pageUsingLayout + '. Please change the layout in page and then delete.', 'Cannot delete', {
                    confirmButtonText: 'OK',
                  });
                } else {
                  // Remove item from array
                  this.globalConfigData[2].layoutOptions[0].Layout.splice(indexOfLayoutName, 1);

                  axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                    headers: {
                      'subscriptionId': this.value,
                      'authorization': Cookies.get('auth_token')
                    }
                  })
                  .then(async (res) => {
                    this.componentId = 'Dashboard';
                    this.isHomePage = true;
                    this.currentFile = null;
                    this.getData();
                  }).catch((dismiss) => {
                    console.log('error', dismiss)
                  })
                }

                

                // let indexOfTabArray = _.findIndex(this.editableTabs, function(o) {
                //      return o.title == last_element;
                // });
                // Remove item from tab
                // this.editableTabs.splice(indexOfTabArray, 1);

                // save config file
                this.saveConfigFile(file_path_);
              } else if (_.includes(data.path, '/Partials')) {
                // console.log('removing partials')
                var foldername=arr_file[arr_file.length-2]           
                var partialNameBreak = last_element.split('.');
                var partialNameOnly = partialNameBreak[0];

                // await this.findPartialIfUsed(foldername, partialNameOnly);

                let matchingIndex = false;
                let foundInPagesName = [];
                let usedInLayout = false;
                let foundInLayoutName = [];

                this.globalConfigData[1].pageSettings.forEach((i, settingIndex) => {
                  i.partials.forEach(j => {
                    let matching = Object.keys(j).filter(k => k === foldername && j[k] === partialNameOnly);     
                    if(matching && matching.length) {
                      matchingIndex = true;
                      foundInPagesName.push(this.globalConfigData[1].pageSettings[settingIndex].PageName);
                    };
                  })
                })

                this.globalConfigData[2].layoutOptions[0].Layout.forEach((i, settingIndex) => {
                    
                  i.partialsList.forEach((j,partialIndex) => {
                    if(j==foldername){
                      usedInLayout = true;
                      foundInLayoutName.push(this.globalConfigData[2].layoutOptions[0].Layout[i].value)
                    }
                  })
                })

                if(matchingIndex == true){
                  this.$alert('You cannot delete this partial. It is used in pages "' + foundInPagesName + '. Please change the partial in page and then delete.', 'Cannot delete', {
                    confirmButtonText: 'OK',
                  });
                } else if(usedInLayout == true){
                  this.$alert('You cannot delete this partial. It is used in layout ' + foundInLayoutName + '. Please change the partial in layout and then delete.', 'Cannot delete', {
                    confirmButtonText: 'OK',
                  });
                } else {
                  // get index of file to be deleted
                  let indexOfPartialName = _.findIndex(this.globalConfigData[2].layoutOptions[0][foldername], function(o) { return o.value == partialNameOnly });

                  this.globalConfigData[2].layoutOptions[0][foldername].splice(indexOfPartialName, 1);

                  axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                    headers: {
                      'subscriptionId': this.value,
                      'authorization': Cookies.get('auth_token')
                    }
                  })
                  .then(async (res) => {
                    this.componentId = 'Dashboard';
                    this.isHomePage = true;
                    this.currentFile = null;
                    this.getData();
                  }).catch((dismiss) => {
                    console.log('error', dismiss)
                  })
                }

                // console.log('Inside if partial folder: ', matchingIndex);

                

                // let indexOfTabArray = _.findIndex(this.editableTabs, function(o) {
                //      return o.title == last_element;
                // });
                // Remove item from tab
                // this.editableTabs.splice(indexOfTabArray, 1);
              
                // save config file
                this.saveConfigFile(file_path_);
              } else {
                let partialsArray = [];
                var foldername=arr_file[arr_file.length-2]
                partialsArray.push(Object.keys(this.globalConfigData[2].layoutOptions[0]));

                for (var i = 0; i < partialsArray.length; i++){
                  var partialNameBreak = last_element.splice('.');
                  var partialNameOnly = partialNameBreak[0];
                  // get index of file to be deleted
                  let indexOfPartialName = _.findIndex(this.globalConfigData[2].layoutOptions[0][foldername], function(o) { return o.value == partialNameOnly; });

                  let matchingIndex = false;
                  let foundInPagesName = [];
                  let usedInLayout = false;
                  let foundInLayoutName = [];
                  this.globalConfigData[1].pageSettings.forEach((i, settingIndex) => {
                    i.partials.forEach(j => {
                      let matching = Object.keys(j).filter(k => k === foldername && j[k] === partialNameOnly);     
                      if(matching && matching.length) {
                        matchingIndex = true;
                        foundInPagesName.push(this.globalConfigData[1].pageSettings[settingIndex].PageName);
                      };
                    })
                  })

                  this.globalConfigData[2].layoutOptions[0].Layout.forEach((i, settingIndex) => {
                    
                    i.partialsList.forEach((j,partialIndex) => {
                      if(j==foldername){
                        usedInLayout = true;
                        foundInLayoutName.push(this.globalConfigData[2].layoutOptions[0].Layout[i].value)
                      }
                    })
                  })

                  if(matchingIndex == true){
                    this.$alert('You cannot delete this partial. It is used in pages "' + foundInPagesName + '. Please change the partial in page and then delete.', 'Cannot delete', {
                      confirmButtonText: 'OK',
                    });
                  } else if(usedInLayout == true){
                    this.$alert('You cannot delete this partial. It is used in layout ' + foundInLayoutName + '. Please change the partial in layout and then delete.', 'Cannot delete', {
                      confirmButtonText: 'OK',
                    });
                  } else {
                    // get index of file to be deleted
                    let indexOfPartialName = _.findIndex(this.globalConfigData[2].layoutOptions[0][foldername], function(o) { return o.value == partialNameOnly });

                    this.globalConfigData[2].layoutOptions[0][foldername].splice(indexOfPartialName, 1);

                    axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                      headers: {
                        'subscriptionId': this.value,
                        'authorization': Cookies.get('auth_token')
                      }
                    })
                    .then(async (res) => {
                      this.componentId = 'Dashboard';
                      this.isHomePage = true;
                      this.currentFile = null;
                      this.getData();
                    }).catch((dismiss) => {
                      console.log('error', dismiss)
                    })
                  }

                  // console.log('Inside else if partial Variant: ', matchingIndex);

                  // Remove item from array
                  

                //   let indexOfTabArray = _.findIndex(this.editableTabs, function(o) {
                //      return o.title == last_element;
                // });
                // Remove item from tab
                // this.editableTabs.splice(indexOfTabArray, 1);

                  // save config file
                }
                  this.saveConfigFile(file_path_);
              }

              

            })
            .catch((e) => {
              console.log(e)
              if (e.response.status = 403) {
                this.$message({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error'
                });
              }
            })
        //   this.componentId = 'Dashboard';
        //   this.isHomePage = true;
        // }).catch((dismiss) => {
        //   console.log('error', dismiss)
        // })
      },

      // Remove Folder manipulating config.json
      async removefolder(store,data){
        // Get Config.json file data
        let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let urlparts = configFileUrl.split("/");
        let fileNameOrginal = urlparts[urlparts.length - 1];
        let foldername = urlparts[urlparts.length - 2];
        // let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        // var folderUrl = configFileUrl.replace(fileName, '');
   
        let fileName = '';
        if(_.includes(configFileUrl, 'Partials')){
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        } else if(_.includes(configFileUrl, 'Pages')){
            fileName =  '/' + urlparts[urlparts.length - 1];
        } else if(_.includes(configFileUrl, 'client-plugins')){
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        } else {
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        }
   
        let folderUrl = configFileUrl.replace(fileName, '');

        let projectName = urlparts[6];
        // this.getConfigFileData(folderUrl);
        let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + projectName ).catch((err)=>{ console.log('Error:', err); });

        let rawConfigs = responseConfig.data.configData;
        this.globalConfigData = rawConfigs;

        this.$swal({
          title: 'Are you sure?',
          text: 'You want you delete this Folder!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then(() => {
          // axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
          //     headers: {
          //         'subscriptionId': this.value,
          //         'authorization': Cookies.get('auth_token')
          //     }
          // })
          // .then((res) => {
              
              let file_path_ = data.path.replace(/\\/g, "/")

              let arr_file = file_path_.split('/')

              if (_.includes(data.path, 'Partials')) {
                  var foldername = arr_file[arr_file.length - 1]
                  if (this.globalConfigData[2].layoutOptions[0][foldername] != undefined) {

                    let matchingIndex = false;
                    let foundInPagesName = [];
                    let usedInLayout = false;
                    let foundInLayoutName = [];

                    this.globalConfigData[1].pageSettings.forEach((i, settingIndex) => {
                      i.partials.forEach(j => {
                        let matching = Object.keys(j).filter(k => k === foldername);     
                        if(matching && matching.length) {
                          matchingIndex = true;
                          foundInPagesName.push(this.globalConfigData[1].pageSettings[settingIndex].PageName);
                        };
                      })
                    })

                    this.globalConfigData[2].layoutOptions[0].Layout.forEach((i, settingIndex) => {

                      // let indexOfCurrentLayout = i;
                      
                      i.partialsList.forEach((j,partialIndex) => {
                        if(j==foldername){
                          usedInLayout = true;
                          // console.log(indexOfCurrentLayout)
                          // console.log(this.globalConfigData[2].layoutOptions[0].Layout[settingIndex]);
                          foundInLayoutName.push(this.globalConfigData[2].layoutOptions[0].Layout[settingIndex].value)
                        }
                      })
                    })

                    if(matchingIndex == true){
                      this.$alert('You cannot delete this partial. It is used in pages "' + foundInPagesName + '". Please change the partial in page and then delete.', 'Cannot delete', {
                        confirmButtonText: 'OK',
                      });
                    } else if(usedInLayout == true){
                      this.$alert('You cannot delete this partial. It is used in layout ' + foundInLayoutName + '. Please change the partial in layout and then delete.', 'Cannot delete', {
                        confirmButtonText: 'OK',
                      });
                    } else {
                      axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                          headers: {
                              'subscriptionId': this.value,
                              'authorization': Cookies.get('auth_token')
                          }
                      })
                      .then((res) => {

                        this.currentFile = null
                        this.componentId = 'Dashboard';
                        delete this.globalConfigData[2].layoutOptions[0][foldername];
                        this.saveConfigFile(configFileUrl);
                        this.getData();

                        this.$message({
                            showClose: true,
                            message: 'Folder deleted!',
                            type: 'success'
                        });
                      })
                      .catch((e)=>{
                        //console.log(e)
                      })
                      
                    }
                    
                  } else {
                      //console.log("Folder not found in config file.")
                  }
              } else {
                axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                    headers: {
                        'subscriptionId': this.value,
                        'authorization': Cookies.get('auth_token')
                    }
                })
                .then((res) => {
                  this.currentFile = null
                  this.componentId = 'Dashboard';
                  delete this.globalConfigData[2].layoutOptions[0][foldername];
                  this.saveConfigFile(configFileUrl);
                  this.getData();

                  this.$message({
                      showClose: true,
                      message: 'Folder deleted!',
                      type: 'success'
                  });
                })
                .catch((e)=>{
                  //console.log(e)
                })
              }

              

              

          })
          .catch((e) => {
            console.log(e)
            if (e.response.status = 403) {
                this.$message({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error'
                });
              }
          })
        // })
        // .catch((e)=>{
        //   //console.log(e)
        // })
      },

      // Remove Project Folder and Delete GitLab Repository
      async removeProject(store, data) {

        // Get Config File
        let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let foldername = folderUrl.split('/');
        foldername = foldername[(foldername.length - 1)];

        let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + foldername ).catch((err)=>{ console.log('Error:', err); });
        let rawConfigs = responseConfig.data.configData;
        let repositoryId = rawConfigs[0].repoSettings[0].RepositoryId;

        this.$swal({
          title: 'Are you sure?',
          html: 'You want you delete <u>'+responseConfig.data.websiteName+'</u> Website!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then(() => {
          axios.delete(config.baseURL + '/delete-service/0?filename=' + data.path.replace(/\\/g, "/"), {
                  headers: {
                      'subscriptionId': this.value,
                      'authorization': Cookies.get('auth_token')
                  }
              })
            .then(async(res) => {

              // Delete Repository from GitLab Server
              let response = await axios.get(config.baseURL + '/gitlab-add-repo/' + repositoryId, {})
                .then((response) => {

                  // delete project configuration from RethinkDB
                  axios.delete(config.baseURL + '/project-configuration/' + foldername , {
                  })
                  .then((res) => {
                    this.$message({
                      showClose: true,
                      message: 'Website successfully deleted..!!',
                      type: 'success'
                    });
                    // this.editableTabs = [];
                  })
                  .catch((e) => {
                      this.$message({
                          showClose: true,
                          message: 'Failed! Please try again.',
                          type: 'error'
                      });
                      //console.log(e)
                  })

                  let self = this;

                  setTimeout(function() {
                    // location.reload();
                    self.getData();
                  }, 500);
                })
                .catch((e) => {
                  //console.log(e)
                });

              this.currentFile = null
              this.componentId = 'Dashboard';
            })
            .catch((e) => {
              console.log(e)
              if (e.response.status = 403) {
                this.$message({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error'
                });
              }

            })
          this.componentId = 'Dashboard';
          this.isHomePage = true;
        }).catch((dismiss) => {
          //console.log('error', dismiss)
        })
      },

      quickPreview (filePath) {
        this.$store.state.fileUrl = filePath;
        this.generatePreview();
      },

      quickDelete (store, data) {
        this.$store.state.fileUrl = data.path;
        this.removeProject(store, data);
      },

      previewWebsite (node, data) {

        let projectName = this.$store.state.fileUrl;

        projectName = projectName.split('/');
        projectName = projectName[6];

        if(process.env.NODE_ENV !== 'development'){
          window.open('http://' + Cookies.get('userDetailId') + '-' + projectName + '.'+ config.ipAddress);
        } else {
          window.open(config.ipAddress + '/websites/' + Cookies.get('userDetailId') + '/' + projectName + '/public/');
        }

      },

      async cloneWebsite(node, data) {

        this.$swal({
          title: 'Are you sure?',
          text: 'You want you clone this Website!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, clone it!',
          cancelButtonText: 'No, my bad.'
        }).then(async () => {
          this.fullscreenLoading = true;

          // console.log(node);

          let clonedWebsiteTempName = node.data.websitename + '_copy'

          let sourceConfig = await this.getConfigFileData(data.path);
          // console.log(clonedWebsiteTempName,sourceConfig)
          let pluginsData = [{
                              "id":1,
                              "children":[
                                 {
                                    "id":2,
                                    "children":[

                                    ],
                                    "label":"default",
                                    "isActive": true
                                 }
                              ],
                              "label":"Header",
                              "isActive": true
                           },
                           {
                              "id":3,
                              "children":[
                                 {
                                    "id":4,
                                    "children":[

                                    ],
                                    "label":"default",
                                    "isActive": true
                                 }
                              ],
                              "label":"Footer",
                              "isActive": true
                           },
                           {
                              "id":5,
                              "children":[
                                 {
                                    "id":6,
                                    "children":[

                                    ],
                                    "label":"default",
                                    "isActive": true
                                 }
                              ],
                              "label":"Sidebar",
                              "isActive": true
                           },
                           {
                              "id":7,
                              "children":[
                                 {
                                    "id":8,
                                    "children":[

                                    ],
                                    "label":"default",
                                    "isActive": true
                                 }
                              ],
                              "label":"Menu",
                              "isActive": true
                           }
                        ];
           this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
          var userid=this.folderUrl.split('/')[this.folderUrl.split('/').length-2]
          await axios.post(config.baseURL + '/project-configuration', {
            id: uuidv4().replace(/\-/g, ''),
            userEmail: Cookies.get('email'),
            websiteName: clonedWebsiteTempName,
            configData: sourceConfig,
            pluginsData: pluginsData,
            userId:userid,
            subscriptionId: this.value
          },{
            headers: {
              Authorization: Cookies.get('auth_token'),
              subscriptionId: this.value
            }
          })
          .then(async (res) => {
            let newFolderName = config.websitesPath + '/' + Cookies.get('userDetailId') + '/' + res.data.id
              // let newFolderName=res.data.id 

            let token = Cookies.get('auth_token');

            await axios.post(config.baseURL + '/flows-dir-listing', {
              foldername: newFolderName,
              type: 'folder'
            }, {
              headers: {
                'authorization': token
              }
            })
            .then(async (resp) => {

              // var response = resp
              let gitlabResponse = await axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo=' + res.data.id + '&userDetailId=' + Cookies.get('userDetailId'), {}).catch((err)=>{ console.log('Error:', err); });
              
              if (!(gitlabResponse.data.statusCode)) {

                  localStorage.setItem("folderUrl", newFolderName);
                  var folder = localStorage.getItem("folderUrl");

                  this.newRepoId = gitlabResponse.data.id;
                  this.repoName = gitlabResponse.data.name;

                  // Create essential folders
                  // this.addOtherFolder(newFolderName);

                  // get Current SHA
                  let clonedSHA;
                  await axios.get( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+Cookies.get('auth_token'), {
                  }).then(response => {
                    clonedSHA = response.data[0].id;
                  }).catch(error => {
                    //console.log("Some error occured: ", error);
                  });

                  // console.log('Old Website Name:', node.data.name);

                  // call API to clone website folder
                  await axios.get(config.baseURL + '/clone-website?sourceProjectName=' + sourceConfig[0].repoSettings[0].RepositoryName + '&userDetailId=' + Cookies.get('userDetailId') + '&destinationFolderName=' + this.repoName, {
                  })
                  .then(async (cloneRes) => {
                    // console.log(res);

                    await axios.post(config.baseURL + '/gitlab-add-repo', {
                      commitMessage: 'Initial Push',
                      repoName: this.repoName,
                      userDetailId: Cookies.get('userDetailId')
                    }).then(async response => {

                    }).catch(error => {
                      //console.log("Some error occured: ", error);
                      this.fullscreenLoading = false;
                    });
                    
                    let clonedWebsiteData = await this.getConfigFileData(newFolderName);

                    // Update Repo Settings
                    clonedWebsiteData[0].repoSettings[0].BaseURL = config.websitesPath + '/' + Cookies.get('userDetailId') + '/' + res.data.id;
                    clonedWebsiteData[0].repoSettings[0].CurrentHeadSHA = clonedSHA;
                    clonedWebsiteData[0].repoSettings[0].RepositoryId = this.newRepoId;
                    clonedWebsiteData[0].repoSettings[0].RepositoryName = this.repoName;

                    // Update Project Settings
                    clonedWebsiteData[1].projectSettings[0].ProjectName = this.repoName;
                    clonedWebsiteData[1].projectSettings[0].RepositoryId = this.newRepoId;


                    // Save Updated Config
                    await axios.patch(config.baseURL + '/project-configuration/' + this.repoName, {
                      configData: clonedWebsiteData
                    })
                    .then(async (configRes) => {
                      // Update Assets files

                      // Create project-details.json file
                      let projectDetails = newFolderName + '/public/assets/project-details.json';
                      let projectDetailsData = [{
                                                "projectOwner" : Cookies.get('email'),
                                                "projectID" : this.repoName,
                                                "UserID":Cookies.get('userDetailId'),
                                                "BasePath":newFolderName,
                                                "websiteName": node.data.name + '_copy',
                                                "BaseURL":'http://'+Cookies.get('userDetailId')+'.'+this.repoName+'.'+config.domainkey+'/',
                                                "builder_service_api": config.baseURL,
                                                "login_api": config.loginUrl,
                                                "register_api": config.registerUrl,
                                                "user_details_api": config.userDetail,
                                                "social_login_api": 'https://auth.'+config.domainkey+'/auth/',
                                                "domainkey": config.domainkey,
                                                "CrmSettingId":'',
                                                "Projectvid":{"vid":'',"userId":'',"password":'',"esUser":'',"virtualShopName":''}
                                                }];

                      // Save Project Details.json
                      await axios.post(config.baseURL + '/flows-dir-listing', {
                          filename : projectDetails,
                          text : JSON.stringify(projectDetailsData)
                      })
                      .then(async (res) => {

                        // Create metalsmithPublish file
                        let mainMetal = newFolderName + '/public/assets/metalsmithPublish.js';

                        let projectName = newFolderName.split('/');

                        var metalsmithJSON="var Metalsmith=require('"+config.metalpath+"metalsmith');\nvar markdown=require('"+config.metalpath+"metalsmith-markdown');\nvar layouts=require('"+config.metalpath+"metalsmith-layouts');\nvar permalinks=require('"+config.metalpath+"metalsmith-permalinks');\nvar inPlace = require('"+config.metalpath+"metalsmith-in-place')\nvar fs=require('"+config.metalpath+"file-system');\nvar Handlebars=require('"+config.metalpath+"handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                        // Save Metalsmith
                        await axios.post(config.baseURL + '/flows-dir-listing', {
                            filename : mainMetal,
                            text : metalsmithJSON,
                            type : 'file'
                        })
                        .then((res) => {
                          // this.fullscreenLoading = false;
                          // location.reload();
                          // this.getData();
                        })
                        .catch((e) => {
                            console.log(e);
                            this.fullscreenLoading = false;
                        });


                        // Create metalsmithPreview file
                         mainMetal = newFolderName + '/public/assets/metalsmithPreview.js';

                         projectName = newFolderName.split('/');

                        var metalsmithJSON="var Metalsmith=require('"+config.metalpath+"metalsmith');\nvar markdown=require('"+config.metalpath+"metalsmith-markdown');\nvar layouts=require('"+config.metalpath+"metalsmith-layouts');\nvar permalinks=require('"+config.metalpath+"metalsmith-permalinks');\nvar inPlace = require('"+config.metalpath+"metalsmith-in-place')\nvar fs=require('"+config.metalpath+"file-system');\nvar Handlebars=require('"+config.metalpath+"handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public/Preview')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                        // Save Metalsmith
                        await axios.post(config.baseURL + '/flows-dir-listing', {
                            filename : mainMetal,
                            text : metalsmithJSON,
                            type : 'file'
                        })
                        .then((res) => {
                          this.fullscreenLoading = false;
                          // location.reload();
                          this.getData();
                        })
                        .catch((e) => {
                            console.log(e);
                            this.fullscreenLoading = false;
                        });
                      })
                      .catch((e) => {
                          console.log(e);
                          this.fullscreenLoading = false;
                      });

                      
                    })
                    .catch((esourceConfig) => {
                        console.log(e);
                        this.fullscreenLoading = false;
                    });

                  })
                  .catch((e) => {
                    this.$message({
                      showClose: true,
                      message: 'Server error',
                      type: 'error'
                    });
                    this.fullscreenLoading = false;
                    console.log(e)
                  })

                  this.formAddProjectFolder.projectName = null;
              } else {
                // Do same login but keep gitlab details undefined
                localStorage.setItem("folderUrl", newFolderName);
                var folder = localStorage.getItem("folderUrl");

                this.newRepoId = undefined;
                this.repoName = res.data.id;

                // Create essential folders
                // this.addOtherFolder(newFolderName);

                // call API to clone website folder
                await axios.get(config.baseURL + '/clone-website?sourceProjectName=' + sourceConfig[0].repoSettings[0].RepositoryName + '&userDetailId=' + Cookies.get('userDetailId') + '&destinationFolderName=' + this.repoName, {
                })
                .then(async (cloneRes) => {
                  // console.log(res);

                  await axios.post(config.baseURL + '/gitlab-add-repo', {
                    commitMessage: 'Initial Push',
                    branchName: 'master',
                    repoName: this.repoName,
                    userDetailId: Cookies.get('userDetailId')
                  }).then(async response => {

                  }).catch(error => {
                    //console.log("Some error occured: ", error);
                  });
                  
                  let clonedWebsiteData = await this.getConfigFileData(newFolderName);

                  // Update Repo Settings
                  clonedWebsiteData[0].repoSettings[0].BaseURL = config.websitesPath + '/' + Cookies.get('userDetailId') + '/' + res.data.id;
                  clonedWebsiteData[0].repoSettings[0].CurrentHeadSHA = undefined;
                  clonedWebsiteData[0].repoSettings[0].RepositoryId = undefined;
                  clonedWebsiteData[0].repoSettings[0].RepositoryName = this.repoName;

                  // Update Project Settings
                  clonedWebsiteData[1].projectSettings[0].ProjectName = this.repoName;
                  clonedWebsiteData[1].projectSettings[0].RepositoryId = undefined;


                  // Save Updated Config
                  await axios.patch(config.baseURL + '/project-configuration/' + this.repoName, {
                    configData: clonedWebsiteData
                  })
                  .then(async (configRes) => {
                    // Update Assets files

                    // Create project-details.json file
                    let projectDetails = newFolderName + '/public/assets/project-details.json';
                    let projectDetailsData = [{
                                              "projectOwner" : Cookies.get('email'),
                                              "projectName" : this.repoName
                                              }];

                    // Save Project Details.json
                    await axios.post(config.baseURL + '/flows-dir-listing', {
                        filename : projectDetails,
                        text : JSON.stringify(projectDetailsData)
                    })
                    .then(async (res) => {

                      // Create metalsmith file
                      let mainMetal = newFolderName + '/public/assets/metalsmith.js';

                      let projectName = newFolderName.split('/');

                      var metalsmithJSON="var Metalsmith=require('"+config.metalpath+"metalsmith');\nvar markdown=require('"+config.metalpath+"metalsmith-markdown');\nvar layouts=require('"+config.metalpath+"metalsmith-layouts');\nvar permalinks=require('"+config.metalpath+"metalsmith-permalinks');\nvar inPlace = require('"+config.metalpath+"metalsmith-in-place')\nvar fs=require('"+config.metalpath+"file-system');\nvar Handlebars=require('"+config.metalpath+"handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                      // Save Metalsmith
                      await axios.post(config.baseURL + '/flows-dir-listing', {
                          filename : mainMetal,
                          text : metalsmithJSON,
                          type : 'file'
                      })
                      .then((res) => {
                        this.fullscreenLoading = false;
                        // location.reload();
                        this.getData();
                      })
                      .catch((e) => {
                          //console.log(e)
                      });

                    })
                    .catch((e) => {
                        //console.log(e)
                    });

                    
                  })
                  .catch((esourceConfig) => {
                      console.log(e)
                  });

                })
                .catch((e) => {
                  this.$message({
                    showClose: true,
                    message: 'Server error',
                    type: 'error'
                  });
                  console.log(e)
                })

                this.formAddProjectFolder.projectName = null;
              }

            })
            .catch((e) => {
              console.log(e);
              this.fullscreenLoading = false;
            });
          })
          .catch((e) => {
            console.log(e);
            if (e.response.status = 403) {
                this.$message({
                    showClose: true,
                    message: e.response.data.message,
                    type: 'error'
                });
            }
            this.fullscreenLoading = false;
          });          
        }).catch((dismiss) => {
          //console.log('error', dismiss)
        })

      },

      async checknameexist(projectName){
        this.$refs[projectName].validate(async (valid) => {
        if(valid){
          this.fullscreenLoading = true;
          // this.formAddProjectFolder.projectName = this.formAddProjectFolder.projectName;
          this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
          var userid=this.folderUrl.split('/')[this.folderUrl.split('/').length-1]
          // console.log('userid',userid)
          var alldatauser=await axios.get( config.baseURL + '/project-configuration?userId='+userid).catch((err)=>{ console.log('Error:', err); })
          let checkdetail=true
          for(let i=0;i<alldatauser.data.data.length;i++){
            if( this.formAddProjectFolder.projectName ==alldatauser.data.data[i].websiteName){
              checkdetail=false

            }
          }
          
          if(checkdetail!=false){
            // console.log('not same found')
           
           this.addProjectFolder(projectName)
          }
          else{
            this.fullscreenLoading=false
            this.$message({
            showClose: true,
            message: 'Website with "'+this.formAddProjectFolder.projectName+'" already exists!',
            type: 'error'
            });
           this.$refs[projectName].resetFields();
          
          }
          }
       
      })
      },

      // <i title="Preview Website" class="fa fa-eye" style="margin-right:5px;"  on-click={ () => this.previewWebsite }></i>

      // Displaying icons in tree nodes  
      renderContent(h, { node, data, store }) {

        if(data.type=='directory' && node.label != 'websites'){
          // If node is a website project directory
          if(node.level == 2){
            return (<span>
                  <span class="nodelabel" on-click={ () => this.isProjectStats = true }>
                      <i class="fa fa-globe" style="padding: 10px; color: #4A8AF4"></i>
                      <span>{data.websitename}</span>
                  </span>
                  <span class="action-button" style="float: right; padding-right: 5px;">

                        <i title="Visit Website" class="fa fa-external-link" style="margin-right: 5px; color: #3E50B4" on-click={ () => this.previewWebsite(node, data) }></i>

                        <i title="Clone Website" class="fa fa-clone" style="margin-right: 5px; color: #FEC107" on-click={ () => this.cloneWebsite(node, data) }></i>
                    
                        <i title="Website Settings" class="fa fa-cog" style="margin-right: 5px; color: #607C8A" on-click={ () => this.isProjectEditing = true }></i>
                    
                    
                        <i title="Delete Website" class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.quickDelete(store, data) }></i>
                    
                  </span>
              </span>)  
          } else {
            // If it's a simple directory
            if(_.includes(data.path, '/Partials') && !(_.includes(data.path, '/Partials/'))){
              return(<span>
                <span class="nodelabel">
                    <i class="fa fa-folder" style="padding: 10px; color: #FFD500"></i>
                    <span>{node.label}</span>
                </span>
                <span class="action-button" style="float: right; padding-right: 5px;">
                  
                      <i title="Create New Partial" class="fa fa-plus" style="margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                  
                  
                </span>
            </span>);
            } else if(_.includes(data.path, '/Partials/')){
              return(<span>
                <span class="nodelabel">
                    <i class="fa fa-folder" style="padding: 10px; color: #FFD500"></i>
                    <span>{node.label}</span>
                </span>
                <span class="action-button" style="float: right; padding-right: 5px;">
                  
                    <i title="Create New Variant" class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                  
                  
                      <i title="Delete Folder" class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.removefolder(store, data) }></i>
                  
                </span>
            </span>);
            } else if (node.level == 1) {
              return(<span>
                  <span class="nodelabel" on-click={ () => this.goToHomePage() }>
                      <i class="fa fa-list-ul" style="padding: 10px; color: #333"></i>
                      <span>Websites</span>
                  </span>
                  <span class="">
                      <el-tooltip content="Create New Website" placement="top">
                          <i class="fa fa-globe" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right:5px; color: #4A8AF4;"  on-click={ () => this.newProjectFolderDialog = true }></i>
                      </el-tooltip>
                  </span>
              </span>);
            }else {
              return(<span>
                  <span class="nodelabel">
                      <i class="fa fa-folder" style="padding: 10px; color: #FFD500"></i>
                      <span>{node.label}</span>
                  </span>
                  <span class="action-button" style="float: right; padding-right: 5px;">
                    
                        <i title="Add File" class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                    
                    
                        
                  </span>
              </span>);
            }
          }
            
        } else if(data.type=='file'){
          // var filePath = data.path;
          // var pathParts = filePath.split('/');
          // var parentFolderName = pathParts[pathParts.length-2];
          // <i title="Preview File" class="fa fa-eye" style="position:absolute; right: 55px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #00C04F" on-click={ () => this.quickPreview(data.path) }></i>
          // If it's a HTML file
          if(data.extension == '.html'){
            return (<span>
              <span class="filelabel">
                  <i class="fa fa-file-text" style="padding: 10px; color: #4A8AF4"></i>
                  <span>{node.label}</span>
              </span>
              <span class="action-button">
                  
                      <i title="Remove" class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  
                  
                    <i title="Page settings" class="fa fa-cog" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #607C8A" on-click={ () => this.isPageEditing = true }></i>
                  
                  
                    <i title="Edit File" class="fa fa-pencil" style="position:absolute; right: 35px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #4A8AF4" on-click={ () => this.isEditOption = true }></i>

                    
                  
              </span>
          </span>)
          } else if(data.extension == '.partial'){
            // If HBS file
            return (<span>
                <span class="filelabel">
                    <i class="fa fa-file-text" style="padding: 10px; color: #4A8AF4"></i>
                    <span>{node.label}</span>
                </span>
                <span class="action-button">
                    
                        <i title="Delete file" class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                    
                    
                      <i title="Edit File" class="fa fa-pencil" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #4A8AF4" on-click={ () => this.isEditOption = true }></i>
                    
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
                   
                        <i title="Delete File" class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                    
                    
                      <i title="Edit File" class="fa fa-pencil" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #4A8AF4" on-click={ () => this.isEditOption = true }></i>
                    
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
                    
                        <i title="Delete File" class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                    
                  </span>
              </span>)
          }
          
        }else{
          // Root Folder
          return;
        }
      },



    },
    // Methods End
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

  .treeViewBlock {
    max-height: 100%;
    overflow-y: auto;
    max-width: 320px;
    overflow-x: auto !important;
  }

  .treeViewBlock::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  .treeViewBlock::-webkit-scrollbar
  {
    width: 6px;
    background-color: #F5F5F5;
  }

  .treeViewBlock::-webkit-scrollbar-thumb
  {
    background-color: #444;
  }

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
      overflow-y: hidden;
      overflow-x: auto;
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
      width: 5px;
      height: auto;
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
      right: 75px;
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
      position: absolute;
      top: 0;
  }

  .action-button i {
      display: none;
  }


  /*Sidemenu opener*/

  .sideOpener {
      width: 17px;
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
      display: none;
  }

  .hamburger.is-closed > .sideOpener > .fa-angle-left {
      display: table-cell;
  }

  .hamburger.is-open > .sideOpener > .fa-angle-right {
      display: table-cell;
  }

  .hamburger.is-open > .sideOpener > .fa-angle-left {
      display: none;
  }

  .tree-data-spinner{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 0;
  }
</style>

<style>
/*.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{background-color: #9e9e9e8f;}*/
  /* .el-tabs__new-tab {
    display: none !important;
  } */
  .el-tree-node {
    font-size: 14px !important;
    white-space: inherit !important;
  }
  .row {
    padding: 0px !important;
  }
  /* .el-tab-pane {
    font-size: 18px !important;
  } */

  .el-select-dropdown{
      max-width: 320px !important;
  }

  .treeViewBlock{
    min-height: 100%;
  }
</style>
