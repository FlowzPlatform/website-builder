<template>
  <div class="index">

    <!-- Partial list dialog -->
    <el-dialog title="Confirm new Partials" :visible.sync="dialogFormVisible"  style="text-align: left" >
      <span>Below listed partials do not exist. Select you want to auto-create it.</span>
      <div v-for='i in form.namearray'>
       <el-checkbox checked v-model="form.checked[i]" @change="methodDialogBox()">{{i}}</el-checkbox>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false, dialogFormVisibleCancel()">Cancel</el-button>
        <el-button v-if='dialogvalue==false' disabled>Add</el-button>
        <el-button v-if='dialogvalue==true' type="primary" @click="dialogFormVisible = false, dialogFormVisibleAdd()">Add</el-button>
      </span>
    </el-dialog>

    <div class="main-contents">
      <div id="wrapper" class="toggled">

        <!-- Overlay when sidebar is opened. Currently disabled in CSS -->
        <div class="overlay"></div>
    
        <!-- Sidebar Wrapper -->
        <nav id="sidebar-wrapper" role="navigation">
          <div class="treeViewBlock" style="transform: scaleX(-1);">
            <el-tree style="transform: scaleX(-1);" :data="directoryTree" accordion :props="defaultProps" :expand-on-click-node="false" node-key="id" :render-content="renderContent" @node-click="handleNodeClick" highlight-current></el-tree>
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
            <div class="row" v-if="isHomePage === false && isSettingsPage === false" style="margin-top: 0px;">
              <!-- <div v-else class="col-md-4"></div> -->
              <div class="col-md-4 editor-buttons" align="right" v-if="componentId != null">
                  <div style="margin-right:10px; margin: 15px;">
                      <el-button type="info" size="small" @click="generatePreview();" v-if="componentId === 'GrapesComponent' && isPagesFolder === true" :loading="previewLoading">Preview</el-button>
                      <el-button type="primary" size="small" @click="goToGrapesEditor()" v-if="isPageCodeEditor">Go to Editor</el-button>
                      <el-button type="primary" size="small" @click="saveFile()" :loading="saveFileLoading" v-if="componentId != 'ProjectStats' && componentId != 'PageStats' && componentId != 'LayoutStats' && componentId != 'PartialStats'">Save</el-button>
                  </div>
              </div>

              <!-- New File Dialog if it's not dashboard page -->
              <el-dialog title="File name" :visible.sync="newFileDialog" size="tiny">
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

              <!-- New Folder Dialog if it's not dashboard page -->
              <el-dialog title="Folder name" :visible.sync="newFolderDialog" size="tiny">
                  <el-form :model="formAddFolder" :rules="rulesFolderName" ref="formAddFolder">
                      <el-form-item prop="foldername">
                        <input type="text" style="display: none;" v-model="formAddFolder.foldername" v-on:keyup.enter="addFolder" name="">
                        <el-input v-model="formAddFolder.foldername" @keyup.enter.native="addFolder('formAddFolder')" auto-complete="off" placeholder="Folder Name"></el-input>
                      </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                      <el-button @click="newFolderDialog = false">Cancel</el-button>
                      <el-button type="primary" @click="addFolder('formAddFolder')" :loading="addNewFolderLoading">Create</el-button>
                  </span>
              </el-dialog>

              <!-- Buy Now Modal if it's not dashboard page -->
              <el-dialog title="SORRY! You have created Enough sites for choosen package. Want to Upgrade?" :visible.sync="buyNowDialog">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                <link rel='stylesheet' href='https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css'/>

                  <div class="container">
                    <div class="row mt-5 align-items-center">
                      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">
                        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 br">
                          <h2 class="font-weight-light">Personal</h2>
                          <p class="text-h2">
                            <strong>$9 / month</strong>
                          </p>
                          <p class="text-h3">Offers you'll get for this package</p>
                          <ul class="text-left mt-5 mb-5">
                            <li>Website - 5</li>
                            <li>Unlimited Storage</li>
                          </ul>
                          <p>
                            <a href="#" class="btn mt-4">Buy</a>
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 fdb-touch br">
                          <h2 class="font-weight-light">Professional</h2>
                          <p class="text-h2">
                            <strong>$19 / month</strong>
                          </p>
                          <p class="text-h3">Offers you'll get for this package</p>
                          <ul class="text-left mt-5 mb-5">
                            <li>Website - 8</li>
                            <li>Unlimited Storage</li>
                          </ul>
                          <p>
                            <a href="#" class="btn mt-4">Buy</a>
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 br">
                          <h2 class="font-weight-light">Business</h2>
                          <p class="text-h2">
                            <strong>$49 / month</strong>
                          </p>
                          <p class="text-h3">Offers you'll get for this package</p>
                          <ul class="text-left mt-5 mb-5">
                            <li>Website - 13</li>
                            <li>Unlimited Storage</li>
                          </ul>
                          <p>
                            <a href="#" class="btn mt-4">Buy</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              <span slot="footer" class="dialog-footer">
                  <el-button @click="buyNowDialog = false">Cancel</el-button>
              </span>
            </el-dialog>

            <!-- New Website Project Dialog if it's not dashboard page -->
            <el-dialog title="Project Name" :visible.sync="newProjectFolderDialog">
              <el-form :model="formAddProjectFolder" :rules="rulesProjectName" ref="formAddProjectFolder">
                <el-form-item prop="projectName">
                  <input type="text" style="display: none;" v-model="formAddProjectFolder.projectName" v-on:keyup.enter="addProjectFolder" name="">
                  <el-input v-model="formAddProjectFolder.projectName" @keyup.enter.native="addProjectFolder('formAddProjectFolder')" auto-complete="off" placeholder="Project Name"></el-input>
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
                  <el-button type="primary" @click="addProjectFolder('formAddProjectFolder')" v-loading.fullscreen.lock="fullscreenLoading">Create Project</el-button>
              </span>
            </el-dialog>
          </div>

            <div v-if="isHomePage === true">
              <el-dialog title="File name" :visible.sync="newFileDialog" size="tiny">
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
                <el-dialog title="Folder name" :visible.sync="newFolderDialog" size="tiny">
                  <el-form :model="formAddFolder" :rules="rulesFolderName" ref="formAddFolder">
                      <el-form-item prop="foldername">
                        <input type="text" style="display: none;" v-model="formAddFolder.foldername" v-on:keyup.enter="addFolder" name="">
                        <el-input v-model="formAddFolder.foldername" @keyup.enter.native="addFolder('formAddFolder')" auto-complete="off" placeholder="Folder Name"></el-input>
                      </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                      <el-button @click="newFolderDialog = false">Cancel</el-button>
                      <el-button type="primary" @click="addFolder('formAddFolder')" :loading="addNewFolderLoading">Create</el-button>
                  </span>
              </el-dialog>

              <el-dialog title="SORRY! You have created Enough sites for choosen package. Want to Upgrade?" :visible.sync="buyNowDialog">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                <link rel='stylesheet' href='https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css'/>

                  <div class="container">
                    <div class="row mt-5 align-items-center">
                      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">
                        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 br">
                          <h2 class="font-weight-light">Personal</h2>
                          <p class="text-h2">
                            <strong>$9 / month</strong>
                          </p>
                          <p class="text-h3">Offers you'll get for this package</p>
                          <ul class="text-left mt-5 mb-5">
                            <li>Website - 5</li>
                            <li>Unlimited Storage</li>
                          </ul>
                          <p>
                            <a href="#" class="btn mt-4">Buy</a>
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 fdb-touch br">
                          <h2 class="font-weight-light">Professional</h2>
                          <p class="text-h2">
                            <strong>$19 / month</strong>
                          </p>
                          <p class="text-h3">Offers you'll get for this package</p>
                          <ul class="text-left mt-5 mb-5">
                            <li>Website - 8</li>
                            <li>Unlimited Storage</li>
                          </ul>
                          <p>
                            <a href="#" class="btn mt-4">Buy</a>
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 br">
                          <h2 class="font-weight-light">Business</h2>
                          <p class="text-h2">
                            <strong>$49 / month</strong>
                          </p>
                          <p class="text-h3">Offers you'll get for this package</p>
                          <ul class="text-left mt-5 mb-5">
                            <li>Website - 13</li>
                            <li>Unlimited Storage</li>
                          </ul>
                          <p>
                            <a href="#" class="btn mt-4">Buy</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              <span slot="footer" class="dialog-footer">
                  <el-button @click="buyNowDialog = false">Cancel</el-button>
              </span>
            </el-dialog>

              <el-dialog title="Project Name" :visible.sync="newProjectFolderDialog">
                <el-form :model="formAddProjectFolder" :rules="rulesProjectName" ref="formAddProjectFolder">
                  <el-form-item prop="projectName">
                    <input type="text" style="display: none;" v-model="formAddProjectFolder.projectName" v-on:keyup.enter="addProjectFolder" name="">
                    <el-input v-model="formAddProjectFolder.projectName" @keyup.enter.native="addProjectFolder('formAddProjectFolder')" auto-complete="off" placeholder="Project Name"></el-input>
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
                    <el-button type="primary" @click="addProjectFolder('formAddProjectFolder')" v-loading.fullscreen.lock="fullscreenLoading">Create Project</el-button>
                </span>
              </el-dialog>
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
    <SiteFooter></SiteFooter>
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
  import Dashboard from './Dashboard'

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



  // New File creation validator
  let checkFileName = (rule, value, callback) => {
      console.log('value',/^[a-z0-9_.@()-]+\.[^.]+$/i.test(value))
      if (!value) {
          return callback(new Error('Please enter filename.'));
      }else if(!(/^[a-z0-9_.@()-]+\.[^.]+$/i.test(value))){
          return callback(new Error('Please enter valid filename, with extension.'));
      }else{
          return callback();
      }
  }

  // New Folder creation validator
  let checkFolderName = (rule, value, callback) => {
      if (!value) {
          return callback(new Error('Please enter Folder Name.'));
      }else if(!(/^[a-z0-9_.@()-]+$/i.test(value))){
          return callback(new Error('Please enter valid Foldername. (Folder name must only contain a-z or A-Z and 0-9. Special characters and spaces are not allowed)'));
      }else{
          return callback();
      }
  }

  // New Project creation validator
  let checkProjectName = (rule, value, callback) => {
      if (!value) {
          return callback(new Error('Please enter Project Name.'));
      }else if(!(/^[a-z0-9_.@()-]+$/i.test(value))){
          return callback(new Error('Please enter valid Project Name. (Project name must only contain a-z or A-Z and 0-9. Special characters and spaces are not allowed)'));
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
        directoryTree: [],
        currentFile : null,
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        rootpath : '',
        backuplayout:'',
        componentId: Dashboard,
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
            projectName : 'NewWebsite'
        },
        rulesProjectName: {
            projectName: [
                { validator: checkProjectName, trigger: 'blur' }
            ]
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
        dialogFormVisible: false,
        previewLoading: false,
        dialogvalue: true,
        buyNowDialog: false
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
      if(this.$cookie.get('auth_token')){
        this.getData();
      } else {
        this.$router.push('/login');
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

      let socket
      if (process.env.NODE_ENV !== 'development') {
        socket = io(config.socketURL)
      } else {
        socket = config.socketURL
      }

      console.log('Socket url:', socket);
      
      const app = feathers().configure(socketio(io(socket)))
      app.service("flows-dir-listing").on("created", (response) => {
        console.log('Created Function called');
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
        console.log('Remove Function called');
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

      // Route to GrapesEditor page from code view
      goToGrapesEditor: function(){
        this.componentId = 'GrapesComponent';
        this.isPageCodeEditor = false;
      },
      
      // If clicked the root folder
      goToHomePage () {
        this.componentId = 'Dashboard';
      },

      // Get directory listing data
      getData() {
        let username_session = this.$session.get('username');
        console.log("username_session", username_session)
        // axios.get(config.baseURL + '/flows-dir-listing')
        axios.get(config.baseURL + '/flows-dir-listing')
          .then(response => {
            response.data.children = this.getTreeData(response.data);

            setTimeout(function(){
              for (let i = 0; i < response.data.children.length; i++) {
                response.data.children[i].children = _.remove(response.data.children[i].children, (child) => {
                  return !(child.name == 'public' || child.name == '.git')
                })
              }
            },1000);

            if (this.directoryTree.length == 0) {
              this.directoryTree = [response.data]
            } else {
              this.directoryTree[0].children = response.data.children
            }

            this.loadingTree = false
            this.rootpath = this.directoryTree[0].path.replace(this.directoryTree[0].name, '');

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
          localStorage.setItem("folderUrl", data.path);
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
                this.componentId = 'CodeMirror'
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
              this.componentId = 'MonacoEditorChild';

              break;
          }
        }
        this.breadcrumbArr = url.replace(this.rootpath, '').split('\\')
        this.loadingContent = false
      },

      // Get particular project's config.json file
      async getConfigFileData(folderUrl) {
        let foldername = folderUrl.split('/');
        foldername = foldername[(foldername.length - 1)];

        let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );
        let rawConfigs = responseConfig.data.data[0].configData;
        return this.globalConfigData = rawConfigs;
      },

      // Save config File
      async saveConfigFile(folderUrl){

        let foldername = folderUrl.split('/');
        foldername = foldername[(foldername.length-1)];

        let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );

        if(rethinkdbCheck.data.data){

          // update existing data
          await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.data[0].id, {
            configData: this.globalConfigData
          })
          .then(async (res) => {
            this.$message({
                showClose: true,
                message: 'Successfully updated.',
                type: 'success'
            });
            console.log(res.data);
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
      addFolder(foldername) {
        this.$refs[foldername].validate((valid) => {
          if (valid) {
            let newFolderName = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/' + this.formAddFolder.foldername;
            return axios.post(config.baseURL + '/flows-dir-listing', {
                foldername: newFolderName,
                type: 'folder'
              })
              .then(async(res) => {
                var storedTemplates = JSON.parse(localStorage.getItem("listOfTempaltes"));
                storedTemplates.push(this.formAddFolder.foldername)
                localStorage.setItem("listOfTempaltes", JSON.stringify(storedTemplates));

                let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
                let urlparts = configFileUrl.split("/");
                let fileNameOrginal = urlparts[urlparts.length - 1];
                let fileName = '';
                if(_.includes(configFileUrl, 'Partials')){
                    fileName = '/' + urlparts[urlparts.length - 1];
                }
                let folderUrl = configFileUrl.replace(fileName, '');
                let foldername = folderUrl.split('/');
                foldername = foldername[(foldername.length - 1)];
                // this.getConfigFileData(folderUrl);
                let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );
                let rawConfigs = responseConfig.data.data[0].configData;
                this.globalConfigData = rawConfigs;

                this.newFolderDialog = false;
                this.addNewFolderLoading = false;
                if(this.$store.state.fileUrl.replace(/\\/g, "\/").match('/Partials')){
                  axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: newFolderName+'/default.partial',
                      text: '',
                      type: 'file'
                  })
                  .then((res)=>{
                  console.log("folder created inside partials folder");
                  console.log("foldername:",this.formAddFolder.foldername)
                  console.log("this.globalConfigData:",this.globalConfigData)
                  let checkfolder=false
                  for(let i=0;i<Object.keys(this.globalConfigData[2].layoutOptions[0]).length;i++){
                    var temp=Object.keys(this.globalConfigData[2].layoutOptions[0])[i]
                    console.log("temp:",temp)
                    if(temp==this.formAddFolder.foldername){
                      console.log("file already exists");
                      checkfolder=true
                    }
                  }
                  if(checkfolder!=true){
                    console.log("As, folder not found in config file. We are adding this folder inside config file:")
                    var obj={value:'default',label:'default'}
                    this.globalConfigData[2].layoutOptions[0][this.formAddFolder.foldername]=[]
                    this.globalConfigData[2].layoutOptions[0][this.formAddFolder.foldername].push(obj)
                  }

                  console.log("New this.globalConfigData:",this.globalConfigData)
                  this.saveConfigFile(folderUrl)

                  }).catch((e)=>{
                    console.log(e)
                  })
                  
                }
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
          }
        })
      },

      // Create new Website
      addProjectFolder(projectName) {

        this.$refs[projectName].validate((valid) => {
          if (valid) {
            this.fullscreenLoading = true;

            let username = this.$session.get('username');
            let token = this.$session.get('token');
            console.log('Login Token: ', token);

            this.formAddProjectFolder.projectName = this.formAddProjectFolder.projectName.toLowerCase();

            let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddProjectFolder.projectName;
            return axios.post(config.baseURL + '/flows-dir-listing', {
                foldername: newFolderName,
                type: 'folder'
              },{
              headers: {
                'authorization': token
              }
              })
              .then((res) => {
                this.newProjectFolderDialog = false
                this.addNewProjectFolderLoading = false;

                // Create repositoroty on GitLab
                axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo=' + this.formAddProjectFolder.projectName + '&privateToken=' + this.$session.get('privateToken') + '&username=' + this.$session.get('username'), {})
                  .then((response) => {
                    console.log('Gitlab Response: ', response);
                    if (!(response.data.statusCode)) {

                      localStorage.setItem("folderUrl", newFolderName);
                      var folder = localStorage.getItem("folderUrl");

                      axios.post(config.baseURL + '/get-directory-list?folderUrl=' + newFolderName, {

                      }).then((response) => {
                        localStorage.setItem("listOfTempaltes", JSON.stringify(response.data));
                      })
                      .catch((e) => {
                        console.log(e)
                      })

                      this.newRepoId = response.data.id;
                      this.repoName = response.data.name;

                      // Create essential folders
                      this.addOtherFolder(newFolderName);

                      // Set DNS entry for project's subdomain e.g.: projectname.flowzcluster.tk
                      // axios.post('http://54.85.135.193/pretty/atomiadns.json/SetDnsRecords', {
                      // [ "flowzcluster.tk", [ { "ttl" : "3600", "label" : "test2", "class" : "IN", "type" : "A", "rdata" : "159.203.142.21" } ] ]
                      // },headers: {
                      //   "x-auth-username": "admin@flowz.com",
                      //   "x-auth-password": "12345678",
                      // })
                      // .then((res) => {
                      //   this.$message({
                      //         showClose: true,
                      //         message: 'Successfully done.',
                      //         type: 'success'
                      //     });
                      //     console.log(res.data);
                      // })
                      // .catch((e) => {
                      //     this.$message({
                      //         showClose: true,
                      //         message: 'Failed! Please try again.',
                      //         type: 'error'
                      //     });
                      //     console.log(e)
                      // });

                      this.formAddProjectFolder.projectName = null;
                    } else {
                      console.log(response);
                      this.fullscreenLoading = false;
                      this.$message({
                        showClose: true,
                        message: 'Error from server: ' + response.data.error.message.name,
                        type: 'error'
                      });

                      // Delete folder from storage
                      axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + newFolderName)
                      .then((res) => {
                        console.log(res.data);
                      })
                      .catch((e) => {
                        console.log(e)
                      })
                      return;
                    }

                })
                .catch((e) => {
                  console.log(e);
                  this.newProjectFolderDialog = false;
                  this.fullscreenLoading = false;
                });

              })
              .catch((e) => {
                console.log(e);
                // this.componentId = 'buyPage';
                this.newProjectFolderDialog = false;
                this.fullscreenLoading = false;
                // this.buyNowDialog = true;
                console.log(e)
              });
          }
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
            // axios.post(config.baseURL+'/flows-dir-listing' , {
            //   foldername : newFolderName+'/Partials/Templates',
            //   type : 'folder'
            // })
            // .then((res) => {
            //   console.log('Templates Folder created!');
            // })
            // .catch((e)=>{
            //   console.log("Error from pages"+res)
            // });

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
        // let newfilename = newFolderName + '/assets/config.json';

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
                                "ProjectExternalCss": [],
                                "ProjectExternalJs": [],
                                "ProjectMetaInfo": [],
                                "ProjectMetacharset": ''
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
                                "PageCss": ["Bootstrap 3", "Bootstrap 4", "Font Awesome", "Flowz Blocks", "Google Fonts"],
                                "PageExternalCss": [],
                                "PageExternalJs": [],
                                "PageMetaInfo": [],
                                "PageMetacharset":''
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

        axios.post(config.baseURL + '/project-configuration', {
          userEmail: this.$session.get('email'),
          websiteName: this.repoName,
          configData: repoSettings,
          pluginsData: pluginSettingsData
        })
        .then((res) => {
          this.$message({
            showClose: true,
            message: 'Successfully Saved in database.',
            type: 'success'
          });
          console.log(res.data);
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: 'Failed! Please try again.',
            type: 'error'
          });
          return;
          console.log(e)
        })

        // Create project-details.json file
        let projectDetails = newFolderName + '/assets/project-details.json';
        let projectDetailsData = [{
                                  "projectOwner" : this.$session.get('email'),
                                  "projectName" : this.repoName
                                  }];
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : projectDetails,
            text : JSON.stringify(projectDetailsData)
        })
        .then((res) => {
          console.log('project-details.json file created!');
        })
        .catch((e) => {
            console.log(e)
        });

        // Create main.css file
        let maincss = newFolderName + '/main-files/main.css'
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : maincss,
            text : '/* Add your custom CSS styles here. It will be automatically included in every page. */\np{margin: 0 !important; padding: 0 !important;}.row{padding: 0 !important; margin: 0 !important;}.column{padding: 0 !important; margin: 0 !important;}body{font-size:14px !important;}',
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
            text : '/* Add your custom JavaScript/jQuery functions here. It will be automatically included in every page. */',
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
        let mainMetal = newFolderName + '/assets/metalsmith.js';

        let projectName = newFolderName.split('/');
        projectName = projectName[(projectName.length-1)];

        // let projectUrl = config.ipAddress + '/websites/' + projectName;

        var metalsmithJSON="var Metalsmith=require('"+config.metalpath+"metalsmith');\nvar markdown=require('"+config.metalpath+"metalsmith-markdown');\nvar layouts=require('"+config.metalpath+"metalsmith-layouts');\nvar permalinks=require('"+config.metalpath+"metalsmith-permalinks');\nvar inPlace = require('"+config.metalpath+"metalsmith-in-place')\nvar fs=require('"+config.metalpath+"file-system');\nvar Handlebars=require('"+config.metalpath+"handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('"+newFolderName+"/public')\n.clean(true)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'"+newFolderName+"/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

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



        //create backup_mainVue file
        var back_main_path= newFolderName + '/assets/back_main.js'
        var back_main="import vue from 'vue'\n import ElementUI from 'element-ui'\n import element from 'element-ui/src/locale/lang/en'\n import 'element-ui/lib/theme-chalk/index.css'\n vue.use(ElementUI, { element })\n import @@vuecomponent@@ from './@@vuecomponent@@.vue'\nvue.component('@@vuecomponent@@', @@vuecomponent@@)\n new vue({ el: '#@@vuecomponent@@',\n render: h => h(@@vuecomponent@@)\n })"

        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : back_main_path,
            text : back_main,
            type : 'file'
        })
        .then((res) => {
          console.log('back_main.js file created!');
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
        let headerFileName = newFolderName + '/Partials/Header/default.partial'

        var headerFileData='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/flowz_blocks.css" type="text/css"><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="#"> <img src="https://imgur.com/ak2v9y7.png" height="30" alt="image"/> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav13"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="#">Features</a> </li><li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="#">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="#">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="#">Log In</a> </li></ul> <a class="btn btn-white ml-md-3" href="#">Button</a> </div></nav> </div></header>'

        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : headerFileName,
            text : headerFileData,
            type : 'file'
        })
        .then((res) => {
          console.log('Header default.partial file created!');
        })
        .catch((e) => {
            console.log(e)
        });

        // Create demo footer file
        let footerFileName = newFolderName + '/Partials/Footer/default.partial'

        var footerFileData='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/flowz_blocks.css" type="text/css"><footer class="fdb-block footer-large bg-dark"> <div class="container"> <div class="row align-items-top text-center text-md-left"> <div class="col-12 col-sm-6 col-md-4"> <h3><strong>Country A</strong></h3> <p>Street Address 52 <br/>Contact Name</p><p>+44 827 312 5002</p><p><a href="#">countrya@amazing.com</a> </p></div><div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0"> <h3><strong>Country B</strong></h3> <p>Street Address 100 <br/>Contact Name</p><p>+13 827 312 5002</p><p><a href="#">countryb@amazing.com</a> </p></div><div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div><div class="row mt-5"> <div class="col text-center" data-highlightable="1">(c) 2017 Flowz. All Rights Reserved</div></div></div></footer>'

        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : footerFileName,
            text : footerFileData,
            type : 'file'
        })
        .then((res) => {
          console.log('Footer default.partial file created!');
        })
        .catch((e) => {
            console.log(e)
        });

        // Create default sidebar file file
        let sidebar = newFolderName + '/Partials/Sidebar/default.partial'
        axios.post(config.baseURL + '/flows-dir-listing', {
            filename : sidebar,
            text : '<div id="sidebar" style="display: block; width: 100%; min-height: 20px"><style type="text/css">#wrapper{padding-left: 250px; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled{padding-left: 250px;}#sidebar-wrapper{z-index: 1000; position: fixed; left: 250px; width: 250px; height: 100%; margin-left: -250px; overflow-y: auto; background: #000; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled #sidebar-wrapper{width: 250px;}#page-content-wrapper{width: 100%; position: absolute; padding: 15px;}#wrapper.toggled #page-content-wrapper{position: absolute; margin-right: -250px;}/* Sidebar Styles */.sidebar-nav{position: absolute; top: 0; width: 250px; margin: 0; padding: 0; list-style: none; width: 100%;}.sidebar-nav li{text-indent: 20px; line-height: 40px;}.sidebar-nav li a{display: block; text-decoration: none; color: #999999; width: 100%;}.sidebar-nav li a:hover{text-decoration: none; color: #fff; background: rgba(255,255,255,0.2);}.sidebar-nav li a:active,.sidebar-nav li a:focus{text-decoration: none;}.sidebar-nav > .sidebar-brand{height: 65px; font-size: 18px; line-height: 60px;}.sidebar-nav > .sidebar-brand a{color: #999999;}.sidebar-nav > .sidebar-brand a:hover{color: #fff; background: none;}</style><div id="wrapper" class="wrapper"> <div id="sidebar-wrapper" class="sidebar-bg"> <ul class="sidebar-nav"> <li class="sidebar-brand"> <a href="#"> Company Name </a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Dashboard</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Shortcuts</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Overview</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Events</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">About</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Services</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Contact</a> </li></ul> </div></div></div>',
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
        //     console.log(listingPlugin + ' file created');
        //   })
        //   .catch((e) => {
        //       console.log(e)
        //   })
        // })
        // .catch((e) => {
        //     console.log(e)
        // });

        // Flowz Engine JS
        let flowzBuilderEngine = newFolderName + '/assets/client-plugins/flowz-builder-engine.js';
        axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/flowz-builder-engine.js', {
            
        })
        .then((res) => {
          let flowzEngineData = res.data;
          axios.post(config.baseURL + '/flows-dir-listing', {
              filename : flowzBuilderEngine,
              text : flowzEngineData,
              type : 'file'
          })
          .then((res) => {
            console.log(flowzBuilderEngine + ' file created');    
          })
          .catch((e) => {
              console.log(e)
          })
        })
        .catch((e) => {
            console.log(e)
        });

        // Shopping cart js
        let shoppingCartJs = newFolderName + '/assets/client-plugins/shopping-cart.js';
        axios.get(config.baseURL + '/flows-dir-listing/0?path=' + config.pluginsPath + '/js/shop_cart.js', {
            
        })
        .then((res) => {
          let shoppingCartData = res.data;
          axios.post(config.baseURL + '/flows-dir-listing', {
              filename : shoppingCartJs,
              text : shoppingCartData,
              type : 'file'
          })
          .then((res) => {
            console.log(shoppingCartJs + ' file created');    
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
            this.fullscreenLoading = false;

            let self = this;
            setTimeout(function(){
              self.$message({
                showClose: true,
                message: 'Project Created. Please wait...',
                type: 'success'
              });
            },500); 

            setTimeout(function(){
              location.reload();
            },1000);  
          })
          .catch((e) => {
              console.log(e)
          })
        })
        .catch((e) => {
            console.log(e)
        });

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

        let projectName = folderUrl.split('/');
        projectName = projectName[(projectName.length-1)];

        // this.getConfigFileData(folderUrl);

        let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + projectName );
        let rawConfigs = responseConfig.data.data[0].configData;
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
                    
                    if(namefolder != 'Pages'){
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
                    }
                    
                    if(namefolder=='Pages'){
                      // console.log('inside pages')
                      var totpartial=[]
                      for(let k=0;k<this.globalConfigData[2].layoutOptions[0].Layout.length;k++){
                        if(this.globalConfigData[2].layoutOptions[0].Layout[k].value=='default'){
                          console.log('inside default layout');
                          if(this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList.length>0){
                            // console.log('defaultList:',this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList)
                            totpartial=JSON.parse(JSON.stringify(this.globalConfigData[2].layoutOptions[0].Layout[k].defaultList))
                            // console.log('found some default partial')

                          }
                          // console.log('totpartial:',totpartial);
                          if(this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList.length>0){

                            for(let j=0;j<this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList.length;j++){
                              let checklayoutvalue=false;
                              for(let r=0;r<totpartial.length;r++){
                                // console.log('totpartial[r]:',Object.keys(totpartial[r])[0])
                              if(Object.keys(totpartial[r])[0]==this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList[j]){
                                checklayoutvalue=true;
                                totpartial[r][Object.keys(totpartial[r])[0]]=totpartial[r][Object.keys(totpartial[r])[0]].split('.')[0]
                              }
                            }
                            if(checklayoutvalue!=true){
                              var obj={}
                              obj[this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList[j]]='default'
                              totpartial.push(obj); 
                            }
                                                            
                            }
                          }
                        }
                      }
                      console.log('totpartial:',totpartial);
                      var PageSettings = {
                                          "PageName": name,
                                          "PageSEOTitle": "",
                                          "PageSEOKeywords": "",
                                          "PageSEODescription": "",
                                          "PageLayout": "default",
                                          "PageCss": ["Bootstrap 3", "Bootstrap 4", "Font Awesome", "Flowz Blocks", "Google Fonts"],
                                          "PageExternalCss": [],
                                          "PageExternalJs": [],
                                          "PageMetaInfo": [],
                                          "PageMetacharset": [],
                                          "partials": totpartial
                                         };
                                         
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

      // Save File
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
        let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + projectName);
        let rawConfigs = responseConfig.data.data[0].configData;
        this.globalConfigData = rawConfigs;
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
            // 
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
              console.log('name:', name)
              content = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + name + '.layout');
              content = content.data
              var result = (getFromBetween.get(content, "{{>", "}}"));
              var DefaultParams = [];
              if (result.length > 0) {
                var resultParam = result
                for (let i = 0; i < resultParam.length; i++) {
                  var temp;
                  temp = resultParam[i].trim()
                  result[i] = result[i].trim()
                  result[i] = result[i].replace(/&nbsp;/g, ' ').trim()
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

                for (let i = 0; i < result.length; i++) {
                  console.log('result[i]:', result[i])
                  result[i] = result[i].replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
                  let checktvalue = false;
                  for (let k = 0; k < DefaultParams.length; k++) {
                    if (result[i] == Object.keys(DefaultParams[k])[0]) {
                      for (let j = 0; j < this.globalConfigData[1].pageSettings.length; j++) {
                        if (this.globalConfigData[1].pageSettings[j].PageLayout == name) {
                          let checkdefaultvalue = false;
                          for (let x = 0; x < this.globalConfigData[1].pageSettings[j].partials.length; x++) {
                            if (Object.keys(this.globalConfigData[1].pageSettings[j].partials[x])[0] == result[i]) {
                              console.log('partials[x]:', this.globalConfigData[1].pageSettings[j].partials[x])
                              var defaulttemp = JSON.parse(JSON.stringify(DefaultParams[k]))
                              defaulttemp[Object.keys(defaulttemp)[0]] = defaulttemp[Object.keys(defaulttemp)[0]].split('.')[0]
                              this.globalConfigData[1].pageSettings[j].partials[x] = defaulttemp
                              checkdefaultvalue = true;
                            }
                          }
                          if (checkdefaultvalue != true) {
                            var defaulttemp = JSON.parse(JSON.stringify(DefaultParams[k]))
                            defaulttemp[Object.keys(defaulttemp)[0]] = defaulttemp[Object.keys(defaulttemp)[0]].split('.')[0]
                            console.log('push for DefaultParams:')
                            this.globalConfigData[1].pageSettings[j].partials.push(defaulttemp)
                          }
                        }
                      }
                      checktvalue = true
                    }
                  }
                  if (checktvalue != true) {
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
                              console.log('file already exists')
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
                            let temp1 = {
                              value: DefaultParams[k][foldernameKey[j]].split('.')[0],
                              label: DefaultParams[k][foldernameKey[j]].split('.')[0]
                            }
                            this.globalConfigData[2].layoutOptions[0][foldernameKey[j]].push(temp1)
                            this.saveConfigFile(folderUrl);
                          }
                        }
                      }
                      // //now change pagesetting where ever this layout is being used.
                      // for(let i=0;i<this.globalConfigData[1].pageSettings.length;i++){

                      // }
                    }
                  }

                }
                if (check == false) {
                  var newName = result[i]
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

                      let newfilename = newFolderName + '/default.partial'
                      axios.post(config.baseURL + '/flows-dir-listing', {
                          filename: newfilename,
                          text: ' ',
                          type: 'file'
                        })
                        .then(async(res) => {
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
                          if (DefaultParams.length > 0) {
                            for (let k = 0; k < DefaultParams.length; k++) {
                              if (DefaultParams[k][newName].split('.')[0] != 'default') {
                                let checkdefault = false;
                                for (let a = 0; a < this.globalConfigData[2].layoutOptions[0][newName].length; a++) {
                                  if (this.globalConfigData[2].layoutOptions[0][newName][a].value == DefaultParams[k][newName].split('.')[0]) {
                                    console.log('file already exists')
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

              }
              // for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
              //   if(this.globalConfigData[1].pageSettings[i].PageLayout==name){

              //   }
              // }
            } else {
              let checkValue = false;
              if (fileName.search('.partial') != -1 && fileName.search('/Pages') == -1) {
                console.log("inside !=pages directory")
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
                    result[i] = result[i].replace(/&nbsp;/g, ' ').trim()
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
                  } else {
                    console.log('file doesnt exists');
                  }
                }
              } else if (fileName.search('.vue') != -1 && fileName.search('/Pages') == -1) {
                console.log("inside vue file")
                var content = this.$store.state.content;
                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf(foldername) + foldername.length + 1, this.currentFile.path.replace(/\\/g, "\/").indexOf('.'));

                var substr = (getFromBetween.get(content, "<script>", "<\/script>"));
                console.log("substr:", substr[0].replace('export', '').replace('default', '').trim())
                substr = substr[0].replace('export', '').replace('default', '').replace('data()', '').trim()
                var obj1 = []
                if (substr.search('props') > 0) {
                  substr = substr.replace(/([a-z]+)/ig, '"$1"')
                  var contentJSON = JSON.parse(substr);
                  console.log('contentJSON:', contentJSON)
                  for (let k = 0; k < Object.keys(contentJSON.props).length; k++) {
                    obj1.push(Object.keys(contentJSON.props)[k])
                  }
                  let temp = {
                    value: name + '.vue',
                    label: name + '.vue',
                    props: obj1
                  }
                  let checkValue = false;
                  if (foldername != 'Pages') {
                    if (this.globalConfigData[2].layoutOptions[0][foldername]) {
                      for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][foldername].length; i++) {
                        var obj = this.globalConfigData[2].layoutOptions[0][foldername][i];
                        if ((obj.label) == name) {
                          checkValue = true;
                          if (Object.keys(contentJSON.props).length > 0) {
                            if (this.globalConfigData[2].layoutOptions[0][foldername][i].props != undefined) {

                              this.globalConfigData[2].layoutOptions[0][foldername][i].props = (obj1)

                            } else {

                              this.globalConfigData[2].layoutOptions[0][foldername][i]['props'] = []
                              this.globalConfigData[2].layoutOptions[0][foldername][i].props = (obj1)
                            }
                          } else {
                            if (this.globalConfigData[2].layoutOptions[0][foldername][i].props != undefined) {

                              delete this.globalConfigData[2].layoutOptions[0][foldername][i].props

                            }
                          }

                        }
                      }
                      if (checkValue == true) {
                        console.log("file already exists")
                        this.saveConfigFile(folderUrl);
                      } else {
                        this.globalConfigData[2].layoutOptions[0][foldername].push(temp);
                        this.saveConfigFile(folderUrl);

                      }
                    } else {
                      this.globalConfigData[2].layoutOptions[0][foldername] = [];
                      this.globalConfigData[2].layoutOptions[0][foldername].push(temp)
                      this.saveConfigFile(folderUrl);
                    }
                  }
                } else {
                  let temp = {
                    value: name + '.vue',
                    label: name + '.vue',
                    props: obj1
                  }
                  let checkValue = false;
                  if (foldername != 'Pages') {
                    if (this.globalConfigData[2].layoutOptions[0][foldername]) {
                      for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][foldername].length; i++) {
                        var obj = this.globalConfigData[2].layoutOptions[0][foldername][i];
                        if ((obj.label) == name) {
                          checkValue = true;
                          if (this.globalConfigData[2].layoutOptions[0][foldername][i].props != undefined) {




                            this.globalConfigData[2].layoutOptions[0][foldername][i].props = []

                          }

                        }
                      }
                      if (checkValue == true) {
                        console.log("file already exists")
                        this.saveConfigFile(folderUrl);
                      } else {
                        this.globalConfigData[2].layoutOptions[0][foldername].push(temp);
                        this.saveConfigFile(folderUrl);

                      }
                    } else {
                      this.globalConfigData[2].layoutOptions[0][foldername] = [];
                      this.globalConfigData[2].layoutOptions[0][foldername].push(temp)
                      this.saveConfigFile(folderUrl);
                    }
                  }
                }
              } else if (fileName.search('/Pages') != -1) {
                console.log("inside ==pages directory")
                var content1 = ''
                  // content = this.$store.state.content;
                let name = this.currentFile.path.replace(/\\/g, "\/").substring(this.currentFile.path.replace(/\\/g, "\/").indexOf(foldername) + foldername.length + 1, this.currentFile.path.replace(/\\/g, "\/").indexOf('.'));
                content1 = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + name + '.html');
                content1 = content1.data
                var result1 = [];
                result1 = (getFromBetween.get(content1, "{{>", "}}"));
                var DefaultParams = [];
                if (result1.length > 0) {
                  var resultParam = result1
                  for (let i = 0; i < resultParam.length; i++) {
                    var temp;
                    temp = resultParam[i].trim()
                    result1[i] = result1[i].trim()
                    result1[i] = result1[i].replace(/&nbsp;/g, ' ').trim()
                    temp = temp.replace(/&nbsp;/g, ' ')
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
                  console.log("DefaultParams:", DefaultParams)
                  let totalPartial = content1.match(/{{>/g).length;
                  for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
                    let temp = this.globalConfigData[1].pageSettings[i].PageName
                    temp = temp.split('.')[0]
                    if (name == temp) {
                      var partials = this.globalConfigData[1].pageSettings[i].partials
                      for (let k = 0; k < result1.length; k++) {
                        let checkpartial = false
                          // console.log("result[k]:", result[k])
                        for (let r = 0; r < partials.length; r++) {
                          if (Object.keys(partials[r])[0] == result1[k]) {
                            checkpartial = true
                            console.log("checkpartial==true")
                            var temp1 = DefaultParams[k][result1[k]]
                            var temp2 = partials[r][result1[k]]
                            if (temp1.split('.')[0] == temp2.split('.')[0]) {
                              for (let z = 0; z < this.globalConfigData[2].layoutOptions[0][result1[k]].length; z++) {

                                if (this.globalConfigData[2].layoutOptions[0][result1[k]][z].value == DefaultParams[k][result1[k]].split('.')[0]) {
                                  if (this.globalConfigData[2].layoutOptions[0][result1[k]][z].defaultList != undefined) {
                                    var defaultListtemp = this.globalConfigData[2].layoutOptions[0][result1[k]][z].defaultList
                                    this.recursivecall(name, partials, defaultListtemp)
                                  }
                                }
                              }
                              break;
                            } else {
                              checkpartial = false
                            }
                          }

                        }
                        if (checkpartial != true) {
                          console.log("checkpartial!=true")
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
                        }
                      }
                    } else if (name != temp) {
                      console.log("file not found in config file")
                    }
                  }
                }
                this.saveConfigFile(folderUrl);
                var vueresult = (getFromBetween.get(content1, ":pathname=", ">"));
                if (vueresult.length > 0) {
                  for (let i = 0; i < vueresult.length; i++) {
                    var tempvue = vueresult[i]
                    var tempvue = tempvue.trim().split(' ')
                    if (tempvue[2] != undefined) {
                      var vuetemp = {
                        partialsName: tempvue[0].replace(/"/g, ''),
                        value: tempvue[1].split('=')[1].replace(/"/g, '') + '.vue',
                        options: tempvue[2].split('=')[1].replace(/"/g, '')
                      }
                    } else {
                      var vuetemp = {
                        partialsName: tempvue[0].replace(/"/g, ''),
                        value: tempvue[1].split('=')[1].replace(/"/g, '') + '.vue'
                      }
                    }

                    for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
                      let temp = this.globalConfigData[1].pageSettings[i].PageName
                      temp = temp.split('.')[0]
                      if (name == temp) {
                        if (this.globalConfigData[1].pageSettings[i].VueComponents != undefined) {
                          let checkvue = false
                          for (let j = 0; j < this.globalConfigData[1].pageSettings[i].VueComponents.length; j++) {
                            if (this.globalConfigData[1].pageSettings[i].VueComponents[j].partialsName == tempvue[0].replace(/"/g, '')) {
                              if (this.globalConfigData[1].pageSettings[i].VueComponents[j].value.split('.')[0] == tempvue[1].split('=')[1].replace(/"/g, '')) {
                                checkvue = true;
                                if (this.globalConfigData[1].pageSettings[i].VueComponents[j].options != '') {
                                  if (tempvue[2] != undefined) {

                                    this.globalConfigData[1].pageSettings[i].VueComponents[j].options = tempvue[2].split('=')[1].replace(/"/g, '')
                                  } else {
                                    this.globalConfigData[1].pageSettings[i].VueComponents[j].options = ''
                                  }
                                } else {
                                  if (tempvue[2] != undefined) {

                                    this.globalConfigData[1].pageSettings[i].VueComponents[j]['options'] = ''
                                    this.globalConfigData[1].pageSettings[i].VueComponents[j].options = tempvue[2].split('=')[1].replace(/"/g, '')
                                  } else {

                                  }
                                }
                              } else {
                                console.log("value not matched")

                              }

                            }
                          }
                          if (checkvue != true) {

                            this.globalConfigData[1].pageSettings[i].VueComponents.push(vuetemp)
                          }
                        } else {
                          this.globalConfigData[1].pageSettings[i]['VueComponents'] = []
                          this.globalConfigData[1].pageSettings[i].VueComponents.push(vuetemp)
                        }
                      }
                    }
                  }
                }
                this.saveConfigFile(folderUrl);

                let temp = {
                  value: name,
                  label: name
                }
                let checkValue = false;
                if (foldername != 'Pages') {
                  if (this.globalConfigData[2].layoutOptions[0][foldername]) {
                    for (var i = 0; i < this.globalConfigData[2].layoutOptions[0][foldername].length; i++) {
                      var obj = this.globalConfigData[2].layoutOptions[0][foldername][i];
                      if ((obj.label) == name) {
                        checkValue = true;

                      }
                    }
                    if (checkValue == true) {
                      console.log("file already exists")
                      this.saveConfigFile(folderUrl);
                    } else {
                      this.globalConfigData[2].layoutOptions[0][foldername].push(temp);

                      this.saveConfigFile(folderUrl);
                    }
                  } else {
                    this.globalConfigData[2].layoutOptions[0][foldername] = [];
                    this.globalConfigData[2].layoutOptions[0][foldername].push(temp)
                    this.saveConfigFile(folderUrl);
                  }
                }
                if (foldername == 'Pages') {
                  for (let i = 0; i < this.globalConfigData[1].pageSettings.length; i++) {
                    let temp = this.globalConfigData[1].pageSettings[i].PageName
                    temp = temp.split('.')[0]
                    if (name == temp) {
                      console.log("result.length:", result1.length)
                      checkValue = true;
                      if (vueresult.length <= 0) {
                        if (this.globalConfigData[1].pageSettings[i].VueComponents != undefined && this.globalConfigData[1].pageSettings[i].VueComponents.length > 0) {
                          this.globalConfigData[1].pageSettings[i].VueComponents = [];
                          this.saveConfigFile(folderUrl);
                        }
                      }
                      if (result1.length <= 0) {
                        console.log("deleting the unused partials other than included in layout")
                          // var layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + this.globalConfigData[1].pageSettings[i].PageLayout + '.layout');
                          // layoutdata = layoutdata.data
                          // var layoutresult = (getFromBetween.get(layoutdata, "{{>", "}}"));
                          // var DefaultParams = [];
                        var layoutresult = [];
                        for (let k = 0; k < this.globalConfigData[2].layoutOptions[0].Layout.length; k++) {
                          if (this.globalConfigData[2].layoutOptions[0].Layout[k].value == this.globalConfigData[1].pageSettings[i].PageLayout) {
                            layoutresult = this.globalConfigData[2].layoutOptions[0].Layout[k].partialsList
                            console.log("layoutresult:", layoutresult)
                          }
                        }
                        if (layoutresult.length > 0) {
                          for (let k = 0; k < this.globalConfigData[1].pageSettings[i].partials.length; k++) {
                            let checklayoutp = false
                            for (let j = 0; j < layoutresult.length; j++) {
                              // console.log('partials[k]:',Object.keys(this.globalConfigData[1].pageSettings[i].partials[k])[0])
                              // console.log('layoutresult[j]:',layoutresult[j])
                              if (Object.keys(this.globalConfigData[1].pageSettings[i].partials[k])[0] == layoutresult[j]) {
                                // console.log('Found.checklayoutp==true')
                                checklayoutp = true

                              }

                            }
                            if (checklayoutp != true) {
                              this.globalConfigData[1].pageSettings[i].partials.splice(k)
                              k = k - 1
                            }
                          }
                        }
                        console.log("final partial are:", this.globalConfigData[1].pageSettings[i].partials)
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
        this.form.checked = [];
        this.form.namearray = [];
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
                  if (partials[x][Object.keys(partials[x])[0]] == defaultListtemp[y][Object.keys(defaultListtemp[y])[0]]) {
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

      // Generate Preview
      async generatePreview() {
        this.previewLoading = true;
        this.fullscreenLoading = true;
        await this.saveFile();
        console.log("done with saveFile")

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

          var externalJs = self.globalConfigData[1].projectSettings[1].ProjectExternalJs;
          var externalCss = self.globalConfigData[1].projectSettings[1].ProjectExternalCss;
          var metaInfo = self.globalConfigData[1].projectSettings[1].ProjectMetaInfo;
          var ProjectMetacharset = self.globalConfigData[1].projectSettings[1].ProjectMetacharset
          var tophead = '';
          var endhead = '';
          var topbody = '';
          var endbody = '';

          var pageexternalJs = [];
          var pageexternalCss = [];
          var pageMetaInfo = [];
          var pageSeoTitle;
          var PageMetacharset = ''
          if (ProjectMetacharset != '') {
            tophead = tophead + '<meta charset="' + ProjectMetacharset + '">'
          }
          if (metaInfo.length > 0) {
            for (let a = 0; a < metaInfo.length; a++) {
              tophead = tophead + '<meta name="' + metaInfo[a].name + '" content="' + metaInfo[a].content + '">'
            }
          }

          if (externalJs.length > 0) {
            for (let a = 0; a < externalJs.length; a++) {
              if (externalJs[a].linkposition == 'starthead') {
                tophead = tophead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
              } else if (externalJs[a].linkposition == 'endhead') {
                endhead = endhead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
              } else if (externalJs[a].linkposition == 'startbody') {
                topbody = topbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
              } else if (externalJs[a].linkposition == 'endbody') {
                endbody = endbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
              }
            }
          }

          if (externalCss.length > 0) {
            for (let a = 0; a < externalCss.length; a++) {
              if (externalCss[a].linkposition == 'starthead') {
                tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
              } else if (externalCss[a].linkposition == 'endhead') {
                endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
              } else if (externalCss[a].linkposition == 'startbody') {
                topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
              } else if (externalCss[a].linkposition == 'endbody') {
                endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '"> '
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
            }
          }
          if (PageMetacharset != '') {
            tophead = tophead + '<meta charset="' + PageMetacharset + '">'
          }
          if (pageMetaInfo.length > 0) {
            for (let a = 0; a < pageMetaInfo.length; a++) {
              tophead = tophead + '<meta name="' + pageMetaInfo[a].name + '" content="' + pageMetaInfo[a].content + '">'
            }
          }
          if (pageexternalJs.length > 0) {
            for (let a = 0; a < pageexternalJs.length; a++) {
              if (pageexternalJs[a].linkposition == 'starthead') {
                tophead = tophead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
              } else if (pageexternalJs[a].linkposition == 'endhead') {
                endhead = endhead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
              } else if (pageexternalJs[a].linkposition == 'startbody') {
                topbody = topbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
              } else if (pageexternalJs[a].linkposition == 'endbody') {
                endbody = endbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
              }
            }
          }

          if (pageexternalCss.length > 0) {
            for (let a = 0; a < pageexternalCss.length; a++) {
              if (pageexternalCss[a].linkposition == 'starthead') {
                tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
              } else if (pageexternalCss[a].linkposition == 'endhead') {
                endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
              } else if (pageexternalCss[a].linkposition == 'startbody') {
                topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
              } else if (pageexternalCss[a].linkposition == 'endbody') {
                endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '"> '
              }
            }
          }

          var contentpartials = self.$store.state.content;
          if (self.form.vuepartials != undefined && self.form.vuepartials.length > 0) {
            console.log("VueComponents found:")
            var mainVuefile = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/back_main.js');
            mainVuefile = mainVuefile.data

            for (let x = 0; x < self.form.vuepartials.length; x++) {
              let temp = mainVuefile.replace(/@@vuecomponent@@/g, self.form.vuepartials[x].value.split('.')[0])
              temp = temp.replace('./' + self.form.vuepartials[x].value.split('.')[0], folderUrl + '/Partials/' + self.form.vuepartials[x].partialsName + '/' + self.form.vuepartials[x].value.split('.')[0])

              await axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: config.pluginsPath + '/public/' + self.form.vuepartials[x].value.split('.')[0] + '.js',
                  text: temp,
                  type: 'file'
                }).then(async(res) => {
                  contentpartials = contentpartials + '<script src="./../assets/client-plugins/' + self.form.vuepartials[x].value.split('.')[0] + '.js' + '"><\/script>'

                  axios.get(config.baseURL + '/webpack-api?path=' + folderUrl + '/assets/client-plugins/' + self.form.vuepartials[x].value.split('.')[0] + '.js', {})
                    .then((response) => {
                      console.log("called webpack_file api successfully:")
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
          if (self.form.Layout == 'Blank') {
            await axios.post(config.baseURL + '/flows-dir-listing', {
                filename: folderUrl + '/Layout/Blank.layout',
                text: '{{{ contents }}}',
                type: 'file'
              })
              .catch((e) => {
                console.log("error while blank file creation")
              })
          }
          let layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + self.form.Layout + '.layout');
          var backlayoutdata = JSON.parse(JSON.stringify(layoutdata));
          this.backuplayout = backlayoutdata.data;
          let newFolderName = folderUrl + '/temp';
          await axios.post(config.baseURL + '/flows-dir-listing', {
              foldername: newFolderName,
              type: 'folder'
            }).then(async(res) => {
              for (let i = 0; i < back_partials.length; i++) {
                let responsepartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + Object.keys(back_partials[i]) + '/' + back_partials[i][Object.keys(back_partials[i])] + '.partial');
                responsepartials = responsepartials.data
                let result = (getFromBetween.get(responsepartials, "{{>", "}}"));
                var DefaultParams = [];
                if (result.length > 0) {
                  var resultParam = result
                  for (let i = 0; i < resultParam.length; i++) {
                    var temp;
                    temp = resultParam[i].trim()
                    result[i] = result[i].trim()
                    result[i] = result[i].replace(/&nbsp;/g, ' ').trim()
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
              let result = (getFromBetween.get(layoutdata.data, "{{>", "}}"));
              DefaultParams = [];
              if (result.length > 0) {
                var resultParam = result
                for (let i = 0; i < resultParam.length; i++) {
                  var temp;
                  temp = resultParam[i].trim()
                  result[i] = result[i].trim()
                  result[i] = result[i].replace(/&nbsp;/g, ' ').trim()
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
                for (let j = 0; j < result.length; j++) {
                  for (let i = 0; i < back_partials.length; i++) {
                    if (Object.keys(back_partials[i])[0] == result[j]) {

                      temp1 = '{{> ' + Object.keys(back_partials[i])[0] + ' }}'
                      if (layoutdata.data.search(temp1) > 0) {

                        temp2 = '{{> ' + Object.keys(back_partials[i])[0] + '_' + back_partials[i][Object.keys(back_partials[i])[0]] + ' }}'
                      } else {
                        temp1 = '{{> ' + Object.keys(back_partials[i])[0] + " id='" + DefaultParams[j][Object.keys(back_partials[i])[0]] + "' }}"

                        temp2 = '{{> ' + Object.keys(back_partials[i])[0] + '_' + back_partials[i][Object.keys(back_partials[i])[0]] + " id='" + DefaultParams[j][Object.keys(back_partials[i])[0]] + "' }}"
                      }
                      console.log('temp1:', temp1)
                      console.log('temp2:', temp2)
                      if (layoutdata.data.split(temp1).join(temp2)) {
                        console.log('replacing in layout file successfully')
                        layoutdata.data = layoutdata.data.split(temp1).join(temp2)
                      } else {
                        console.log('replacing in layout file failed')
                      }
                    }
                  }

                }
              }

            })
            .catch((e) => {
              console.log(e)
            })

          let responseMetal = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/metalsmith.js');

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
          console.log("final metalsmith:", responseMetal.data)
          var mainMetal = folderUrl + '/assets/metalsmith.js'
          axios.post(config.baseURL + '/flows-dir-listing', {
              filename: mainMetal,
              text: responseMetal.data,
              type: 'file'
            })
            .then(async(response) => {
              let newFolderName1 = folderUrl + '/Preview';
              await axios.post(config.baseURL + '/flows-dir-listing', {
                foldername: newFolderName1,
                type: 'folder'
              }).then(async(res) => {
                console.log(res)

              }).catch((e) => {
                console.log(e)
              })
              let newContent = "<html>\n<head>\n" + tophead +
                "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n" +
                "<title>" + pageSeoTitle + "</title>" +
                "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n" +
                "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n" +
                "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n" +
                '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n' +
                "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
                "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n" +
                "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
                "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
                "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
                "<script type='text/javascript' src='https://unpkg.com/vue/dist/vue.js'><\/script>\n" +
                "<link rel='stylesheet' href='./../main-files/main.css'/>\n" + endhead + "</head><body><div id=\"app\">\n" +
                layoutdata.data + topbody +
                '\n</div>\n<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
                '<script src="./../assets/client-plugins/flowz-builder-engine.js"><\/script>\n' +
                '<script src="./../assets/client-plugins/shopping-cart.js"><\/script>\n' +
                // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/product-search.js"><\/script>'+
                '<script src="./../main-files/main.js"><\/script>\n' + endbody +
                '</body>\n</html>';

              axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: folderUrl + '/Layout/' + self.form.Layout + '_temp.layout',
                  text: newContent,
                  type: 'file'
                })
                .then(async(res) => {

                  var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';

                  if (self.form.Layout == 'Blank') {
                    rawContent = '---\nlayout: ' + self.form.Layout + '.layout\n---\n' + rawContent

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
                      await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then((response) => {
                          var metalsmithJSON = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place');\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                          axios.post(config.baseURL + '/flows-dir-listing', {
                              filename: mainMetal,
                              text: metalsmithJSON,
                              type: 'file'
                            })
                            .then(async(res) => {
                              self.fullscreenLoading = false;
                              self.previewLoading = false;

                              let previewFile = self.$store.state.fileUrl.replace(/\\/g, "\/");
                              previewFile = folderUrl.replace('/var/www/html', '');

                              let projName = previewFile.replace('websites/', '');

                              window.open(config.ipAddress + previewFile + '/public/' + nameF + '.html');
                              // window.open('http://' + projName + '.'+ config.ipAddress + '/public/' + nameF + '.html');

                              axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                .then(async(res) => {
                                  console.log(res);
                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp')
                                  await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_temp.layout').then((res) => {
                                    console.log('deleted extra layout file:', res)
                                  }).catch((e) => {
                                    console.log(e)
                                  })
                                  if (self.form.vuepartials != undefined && self.form.vuepartials.length > 0) {
                                    for (let x = 0; x < self.form.vuepartials.length; x++) {
                                      axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.pluginsPath + '/public/' + self.form.vuepartials[x].value.split('.')[0] + '.js').then((res) => {
                                          console.log(res)
                                        })
                                        .catch((e) => {
                                          console.log(e)
                                        })
                                    }
                                  }
                                  console.log("layout file reset")
                                  if (self.form.Layout == 'Blank') {
                                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
                                      .catch((e) => {
                                        self.fullscreenLoading = false;
                                        console.log("error while deleting blank.layout file")
                                      })
                                  }

                                })
                                .catch((e) => {
                                  self.fullscreenLoading = false;
                                  console.log(e)
                                })

                            })
                            .catch((e) => {
                              self.fullscreenLoading = false;
                              window.open(config.ipAddress + '/plugins/public/error.html');
                              var metalsmithJSON = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place');\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                              axios.post(config.baseURL + '/flows-dir-listing', {
                                filename: mainMetal,
                                text: metalsmithJSON,
                                type: 'file'
                              })

                              axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_metal.layout').then((res) => {
                                console.log('deleted extra layout file:', res)
                              }).catch((e) => {
                                console.log(e)
                              })
                              axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                              axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp')
                              console.log(e)
                            })

                        })
                        .catch((err) => {
                          self.fullscreenLoading = false;
                          window.open(config.ipAddress + '/plugins/public/error.html');
                          var metalsmithJSON = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place');\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                          axios.post(config.baseURL + '/flows-dir-listing', {
                            filename: mainMetal,
                            text: metalsmithJSON,
                            type: 'file'
                          })

                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_metal.layout').then((res) => {
                            console.log('deleted extra layout file:', res)
                          }).catch((e) => {
                            console.log(e)
                          })
                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp')
                          console.log('Error while creating MetalSmith JS file' + err)

                        })

                    })
                    .catch((e) => {
                      self.fullscreenLoading = false;
                      window.open(config.ipAddress + '/plugins/public/error.html');

                      var metalsmithJSON = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place');\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

                      axios.post(config.baseURL + '/flows-dir-listing', {
                        filename: mainMetal,
                        text: metalsmithJSON,
                        type: 'file'
                      })

                      axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_metal.layout').then((res) => {
                          console.log('deleted extra layout file:', res)
                        }).catch((e) => {
                          console.log(e)
                        })
                        // axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                        // axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp')
                      self.saveFileLoading = false
                      console.log(e)
                    })
                })
                .catch((e) => {
                  self.fullscreenLoading = false;
                  window.open(config.ipAddress + '/plugins/public/error.html');
                  var metalsmithJSON = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place');\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"
                  axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp')
                  axios.post(config.baseURL + '/flows-dir-listing', {
                    filename: mainMetal,
                    text: metalsmithJSON,
                    type: 'file'
                  })

                  axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_metal.layout').then((res) => {
                    console.log('deleted extra layout file:', res)
                  }).catch((e) => {
                    console.log(e)
                  })
                  console.log(e);
                })
            })
            .catch((e) => {
              self.fullscreenLoading = false;
              window.open(config.ipAddress + '/plugins/public/error.html');
              var metalsmithJSON = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place');\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"
              axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp')
              axios.post(config.baseURL + '/flows-dir-listing', {
                filename: mainMetal,
                text: metalsmithJSON,
                type: 'file'
              })
              aaxios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + self.form.Layout + '_metal.layout').then((res) => {
                console.log('deleted extra layout file:', res)
              }).catch((e) => {
                console.log(e)
              })

              console.log('Error while creating MetalSmith JS file' + e)
            })

        }, 2000);
      },
      // Generate Preview

      // New Partials confirmation dialog
      async dialogFormVisibleAdd() {
        console.log("this.form.namearray:",this.form.namearray)
        console.log("this.form.checked:",this.form.checked)
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
              console.log("temp[j]:",temp[j])
                if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                  console.log("inside if:")
                  console.log("[j]:",temp[j])
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
        console.log("DefaultParams:",DefaultParams)
        console.log("Object.keys(this.form.checked).length:",Object.keys(this.form.checked).length)
        for(let z=0;z<Object.keys(this.form.checked).length;z++){
          if (this.form.checked[Object.keys(this.form.checked)[z]]==true) {
            for (let k = 0; k < result.length; k++) {
              let ch = false
              for (let r = 0; r < DefaultParams.length; r++) {
                if (Object.keys(DefaultParams[r]) == result[k]) {
                  ch = true
                }
              }
              if (result[k]==Object.keys(this.form.checked)[z] && ch == false) {
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
              else if (result[k]!=Object.keys(this.form.checked)[z] && ch == false) {
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
        }
        this.form.checked = []
        this.form.namearray = []
      },

      // New Partials confirmation dialog
      dialogFormVisibleCancel() {
        this.form.namearray = []
      },

      // New Partials confirmation dialog
      methodDialogBox(){
        let check=true
        for(let i=0;i<Object.keys(this.form.checked).length;i++){
          if(this.form.checked[Object.keys(this.form.checked)[i]]==true){
            check=false
          }
        }
        if(check==true){
          this.dialogvalue=false
        }
        else{
          this.dialogvalue=true
        }
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

      // Remove File or Folder
      async remove(store, data) {

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

        let projectName = folderUrl.split('/');
        projectName = projectName[(projectName.length-1)];

        // this.getConfigFileData(folderUrl);
        let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + projectName );

        let rawConfigs = responseConfig.data.data[0].configData;
        this.globalConfigData = rawConfigs;

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
              this.componentId = 'Dashboard';

              let file_path_ = data.path.replace(/\\/g, "/")
              let arr_file = file_path_.split('/')

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
              }else if (_.includes(data.path, 'Partials')) {
                console.log("inside partials")
                var foldername=arr_file[arr_file.length-2]           
                var partialNameBreak = last_element.split('.');
                console.log("partialNameBreak:",partialNameBreak)
                var partialNameOnly = partialNameBreak[0];

                console.log('partialNameOnly:', partialNameOnly);
                console.log('foldername:', foldername);

                // get index of file to be deleted
                let indexOfPartialName = _.findIndex(this.globalConfigData[2].layoutOptions[0][foldername], function(o) { return o.value == partialNameOnly });

                this.globalConfigData[2].layoutOptions[0][foldername].splice(indexOfPartialName, 1);
              
                // save config file
                this.saveConfigFile(folderUrl);
              } 
              else {
                console.log('Other some file not in config.json');
                let partialsArray = [];
                var foldername=arr_file[arr_file.length-2]
                partialsArray.push(Object.keys(this.globalConfigData[2].layoutOptions[0]));

                console.log('Partials Array:', partialsArray);

                for (var i = 0; i < partialsArray.length; i++){
                  var partialNameBreak = last_element.splice('.');
                  var partialNameOnly = partialNameBreak[0];

                  console.log('partialNameOnly:', partialNameOnly);

                  console.log('partialNameOnly data:', this.globalConfigData[2].layoutOptions[0][foldername]);

                  // get index of file to be deleted
                  let indexOfPartialName = _.findIndex(this.globalConfigData[2].layoutOptions[0][foldername], function(o) { return o.value == partialNameOnly; });

                  // Remove item from array
                  this.globalConfigData[2].layoutOptions[0][foldername].splice(indexOfPartialName, 1);

                  // save config file
                }
                  this.saveConfigFile(folderUrl);
              }

            })
            .catch((e) => {
              console.log(e)
            })
          this.componentId = 'Dashboard';
          this.isHomePage = true;
        }).catch((dismiss) => {
          console.log('error', dismiss)
        })
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
        // this.getConfigFileData(folderUrl);
        let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );

        let rawConfigs = responseConfig.data.data[0].configData;
        this.globalConfigData = rawConfigs;

        console.log("this.globalConfigData:",this.globalConfigData)
        this.$swal({
          title: 'Are you sure?',
          text: 'You want you delete this Folder!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then(() => {
          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + data.path.replace(/\\/g, "/"))
          .then((res) => {
              this.currentFile = null
              this.componentId = 'Dashboard';
              let file_path_ = data.path.replace(/\\/g, "/")

              let arr_file = file_path_.split('/')

              if (_.includes(data.path, 'Partials')) {
                  var foldername = arr_file[arr_file.length - 1]
                  console.log("foldername:", foldername)
                  if (this.globalConfigData[2].layoutOptions[0][foldername] != undefined) {

                      delete this.globalConfigData[2].layoutOptions[0][foldername];
                      this.saveConfigFile(folderUrl);
                  } else {
                      console.log("folder not found in config file.")
                  }
              }

          })
          .catch((e) => {
              console.log(e)
          })
        })
        .catch((e)=>{
              console.log(e)
            })
      },

      // Remove Project Folder and Delete GitLab Repository
      async removeProject(store, data) {

        // Get Config File
        let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let foldername = folderUrl.split('/');
        foldername = foldername[(foldername.length - 1)];

        let responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );
        let rawConfigs = responseConfig.data.data[0].configData;
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

                  // delete project configuration from RethinkDB
                  axios.delete(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername , {
                  })
                  .then((res) => {
                    this.$message({
                      showClose: true,
                      message: 'Project successfully deleted..!!',
                      type: 'success'
                    });
                    console.log(res.data);
                  })
                  .catch((e) => {
                      this.$message({
                          showClose: true,
                          message: 'Failed! Please try again.',
                          type: 'error'
                      });
                      console.log(e)
                  })

                  setTimeout(function() {
                    location.reload();
                  }, 500);
                })
                .catch((e) => {
                  console.log(e)
                });

              this.currentFile = null
              this.componentId = 'Dashboard';
              console.log(res);
            })
            .catch((e) => {
              console.log(e)
            })
          this.componentId = 'Dashboard';
          this.isHomePage = true;
        }).catch((dismiss) => {
          console.log('error', dismiss)
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
                    
                        <i title="Create New Folder" class="fa fa-folder-open-o" style="margin-right:5px;"  on-click={ () => this.newFolderDialog = true }></i>
                    
                    
                        <i title="Create New File" class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                    
                    
                      <i title="Project Settings" class="fa fa-cog" style="margin-right: 5px; color: #607C8A" on-click={ () => this.isProjectEditing = true }></i>
                    
                    
                        <i title="Delete Project" class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.quickDelete(store, data) }></i>
                    
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
                  
                  
                      <i title="Delete Partial" class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.removefolder(store, data) }></i>
                  
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
                  
                  
                      <i title="Delete File" class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.removefolder(store, data) }></i>
                  
                </span>
            </span>);
            } else {
              return(<span>
                  <span class="nodelabel">
                      <i class="fa fa-folder" style="padding: 10px; color: #FFD500"></i>
                      <span>{node.label}</span>
                  </span>
                  <span class="action-button" style="float: right; padding-right: 5px;">
                    
                        <i title="Add File" class="fa fa-file-text-o" style="margin-right:5px; color: #4A8AF4 " on-click={ () => this.newFileDialog = true }></i>
                    
                    
                        <i title="Delete File" class="fa fa-trash-o" style="color: #F44236" on-click={ () => this.removefolder(store, data) }></i>
                    
                  </span>
              </span>);
            }
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
                  
                      <i title="Remove" class="fa fa-trash-o" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #F44236" on-click={ () => this.remove(store, data) }></i>
                  
                  
                    <i title="Page settings" class="fa fa-cog" style="position:absolute; right: 15px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #607C8A" on-click={ () => this.isPageEditing = true }></i>
                  
                  
                    <i title="Edit File" class="fa fa-pencil" style="position:absolute; right: 35px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #4A8AF4" on-click={ () => this.isEditOption = true }></i>

                    <i title="Preview File" class="fa fa-eye" style="position:absolute; right: 55px; padding: 10px; float:right; padding-right:0; margin-right: 5px; color: #00C04F" on-click={ () => this.quickPreview(data.path) }></i>
                  
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
          return(<span>
                  <span class="nodelabel" on-click={ () => this.goToHomePage() }>
                      <i class="fa fa-list-ul" style="padding: 10px; color: #333"></i>
                      <span>{node.label}</span>
                  </span>
                  <span class="">
                      <el-tooltip content="Create New Website" placement="top">
                          <i class="fa fa-globe" style="position:absolute; right: 0; padding: 10px; float:right; padding-right:0; margin-right:5px; color: #4A8AF4;"  on-click={ () => this.newProjectFolderDialog = true }></i>
                      </el-tooltip>
                  </span>
              </span>);
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
      height: 5px;
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
      position: absolute;
      top: 0;
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
