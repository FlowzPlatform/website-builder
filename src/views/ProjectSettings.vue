<template>
  <div class="ProjectSettings">
    
    <!-- Save/Publish/Cancel Buttons -->
    <div class="page-buttons">
      <el-button type="primary" size="small" @click="saveProjectSettings">Save Settings</el-button>
      <el-button type="info" size="small" @click="publishMetalsmith" :loading="previewLoader">Publish Website</el-button>

      <el-tooltip class="item" effect="dark" content="Download Project Configurations" placement="top-start">
        <el-button type="warning" size="small" @click="downloadConfigFile"><i class="fa fa-download"></i></el-button>
      </el-tooltip>

    </div>

    <div class="container" style="margin-top: 2%; margin-bottom: 2%;">

      <!-- Commit Section -->
      <div class="well" id="new-commit-section">
        <div class="row">
          <div class="col-md-9">
            <el-input v-model="commitMessage" placeholder="Enter Commit Message"></el-input>
          </div>
          <div class="col-md-2">
            <el-button class="publishBtn" type="success" @click="commitProject()" :loading="isCommitLoading">Commit Project</el-button>
          </div>
          <div class="col-md-1">
            <el-tooltip content="Download .zip" placement="top">
              <el-button class="publishBtn" @click="exportWebsite()"><i class="fa fa-download" title="Download .zip"></i></el-button>
            </el-tooltip>
          </div>
        </div>
      </div>
      <!-- Commit Section Ends -->

      <!-- Project Settings Section -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toogleProjectSettings" class="card color-div toggleableDivHeader">Project Settings</a>
          </div>
      </div>
      <div id="toogleProjectSettingsContent" class="toggleableDivHeaderContent" style="">
        <div class="row">
          <div class="col-md-12">
            <el-form ref="form" :model="form" label-width="180px">

              <el-form-item label="Repository Id:">
                  <el-input v-model="newRepoId" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="Project name">
                  <el-input v-model="repoName" :disabled="true"></el-input>
                </el-form-item>

                <!-- <el-form-item label="Brand name">
                  <el-input v-model="form.brandName" placeholder="My Company"></el-input>
                </el-form-item> -->

                <!-- <el-form-item label="Brand Logo">
                  <div class="col6 valid"> 
                    <label for="upload-validation" class="brandLogoUploadLabel">
                      <i class="fa fa-paperclip" aria-hidden="true"></i><span class="uploadText" id="text2">Upload image</span>
                    </label> 
                    <input type="file" name="" id="upload-validation">
                    <span class="dis">(max 1 MB. .jpg or .png only)</span>
                  </div>
                </el-form-item> -->

                <el-form-item label="Project SEO Title">
                  <el-input v-model="form.seoTitle" placeholder="My Company"></el-input>
                </el-form-item>

                <el-form-item label="Project SEO Keywords">
                  <el-input v-model="form.seoKeywords" placeholder="Design, development, SEO"></el-input>
                </el-form-item>
                
                <el-form-item label="Project SEO Description">
                  <el-input type="textarea" :rows="5" v-model="form.seoDesc" placeholder="Some little description about your project"></el-input>
                </el-form-item>    

            </el-form> 
          </div>
        </div>
      </div>
      <!-- Project Settings section ends -->

      <!-- Plugins Section -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toggleImportPlugin" class="card color-div toggleableDivHeader">Import Plugin</a>
          </div>
      </div>
      <div id="toggleImportPluginContent" class="toggleableDivHeaderContent" style="display: none;">
        <div class="row">
          <div class="col-md-12" align="right" style="margin-bottom: 10px;">
            <el-tooltip class="item" effect="dark" content="Refresh Project Directories" placement="top">
              <el-button @click.native.prevent="refreshPlugins()" :loading="refreshPluginsLoading" type="warning" icon="time">Refresh</el-button> 
            </el-tooltip>
          </div>
          <div class="col-md-12">
            <el-tree
              :data="pluginsTreedata"
              node-key="id"
              :default-expand-all="true"
              :props="defaultProps"
              :default-checked-keys=checkedList
              :render-content="renderContent"
              >
            </el-tree>

            <br>

            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-primary" id="pluginJsonUploaderBtn"><i class="fa fa-upload"></i> Upload Plugin</button>
                <input type="file" name="uploaderPluginJson">
              </div>
              <div class="col-md-6" align="right">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Plugins section ends -->

      <!-- Global Variables Section -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toggleGlobalVariables" class="card color-div toggleableDivHeader">Global Variables</a>
          </div>
      </div>
      <div id="toggleGlobalVariablesContent" class="toggleableDivHeaderContent" style="display: none;">
        <div class="row">
          <div class="col-md-4">
            <h3>Dynamic Values</h3>
          </div>
          <div class="col-md-8" align="right" style="margin-bottom: 10px;">
            <!-- <el-tooltip class="item" effect="dark" content="Upload JSON" placement="top"> -->
              <button class="btn btn-primary" id="jsonUploaderBtn"><i class="fa fa-upload"></i> Import</button>
              <input type="file" name="uploaderVariableJson">
            <!-- </el-tooltip> -->
            <!-- <el-tooltip class="item" effect="dark" content="Download JSON" placement="top"> -->
              <button class="btn btn-warning" @click="downloadGlobalVariables"><i class="fa fa-download"></i> Export</button>
            <!-- </el-tooltip> -->
          </div>
          <div class="col-md-12">
            <el-form ref="form" :model="form">
              <div v-for="(n, index) in globalVariables">
                <el-form-item>
                  <div class="row">

                    <!-- Enter Variable ID -->
                    <div class="col-md-2">
                      <el-input placeholder="Variable ID" v-model="n.variableId"></el-input>
                    </div>

                    <!-- Select Type -->
                    <div class="col-md-2" style="margin: 0; padding: 0">
                      <el-select v-model="n.variableType" placeholder="Select">
                        <el-option
                          v-for="item in selectVariableType"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>

                    <!-- If type is Text or HTML -->
                    <div class="col-md-7" v-if="n.variableType != 'image' && n.variableType != 'hyperlink'" style="margin: 0; padding-left: 10px">
                      <el-input type="textarea" :rows="5" placeholder="Variable Value" v-model="n.variableValue"></el-input>
                    </div>

                    <!-- If type is Hyperlink -->
                    <div class="col-md-7" v-if="n.variableType === 'hyperlink'" style="margin: 0; padding-left: 10px">
                      <div class="col-md-6" style="margin: 0; padding: 0">
                        <el-input placeholder="Link Title" v-model="n.variableTitle"></el-input>
                      </div>
                      <div class="col-md-6" style="margin-right: 0; padding-right: 0">
                        <el-input placeholder="Link URL" v-model="n.variableValue"></el-input>
                      </div>
                    </div>
                    
                    <!-- If type is Image -->
                    <div class="col-md-7" v-if="n.variableType === 'image'" style="margin: 0; padding-left: 10px">
                      
                      <div class="row">

                        <!-- Image Value as Name -->
                        <div class="col-md-8" style="margin-right: 0; padding-right: 0">
                          <el-input placeholder="Image URL" v-model="n.variableValue" :disabled="imageInputIsDisabled"></el-input>
                        </div>

                        <!-- Image Thumbnail Preview -->
                        <div class="col-md-3" style="margin-right: 0; padding-right: 0">
                          <img :src="n.variableValue" v-bind:name="index" class="img-responsive">
                        </div>

                        <!-- Image upload Button -->
                        <div class="col-md-1" style="padding-left: 5px">
                          <el-tooltip content="Upload Image" placement="top">
                            <div class="file-upload">
                                <label for="globalImageVariableFileUploader" :for="index" class="file-upload__label">
                                  <i class="fa fa-upload"></i>
                                </label>
                                <input id="globalImageVariableFileUploader" :id="index" class="file-upload__input" type="file" name="file-upload" @change="globalImageUploading(index, $event)">
                            </div>
                          </el-tooltip>
                        </div> 

                      </div>

                    </div>
                    
                    <!-- Delete Variable -->
                    <div class="col-md-1">
                      <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deleteVariable(index)" icon="delete"></el-button>      
                    </div>
                  </div>
                </el-form-item>
              </div>
              <!-- Ends V-FOR looping -->
              
              <!-- Create new variable -->
              <el-button type="primary" @click="addNewVariable">New Variable</el-button>
            </el-form>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12" style="margin-top: 4%;">
            <h3>Dynamic Styles</h3>
            <hr>
            <el-form ref="form" :model="form">
              <div v-for="(n, index) in globalCssVariables">
                <el-form-item>
                  <div class="row">

                    <!-- Enter Variable ID -->
                    <div class="col-md-5">
                      <el-input placeholder="Variable Name" v-model="n.variableName"></el-input>
                    </div>

                    <!-- Select Type -->
                    <div class="col-md-2" style="margin: 0; padding: 0">
                      <el-select v-model="n.variableType" placeholder="Select">
                        <el-option
                          v-for="item in selectCssVariableType"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>

                    <!-- Enter Color Variable Value -->
                    <div class="col-md-4" v-if="n.variableType === 'color'">
                      <el-color-picker v-model="n.variableValue" show-alpha></el-color-picker>
                    </div>

                    <!-- Enter Pixel Variable Value -->
                    <div class="col-md-4" v-if="n.variableType === 'px'">
                      <el-input placeholder="Pixels Value" v-model="n.variableValue"></el-input>
                    </div>

                    <!-- Enter Percentage Variable Value -->
                    <div class="col-md-4" v-if="n.variableType === 'percent'">
                      <el-slider v-model="n.variableValue"></el-slider>
                    </div>

                    <!-- Enter Number Variable Value -->
                    <div class="col-md-4" v-if="n.variableType === 'number'">
                      <el-input-number v-model="n.variableValue"></el-input-number>
                    </div>

                    <!-- Enter Custom Variable Value -->
                    <div class="col-md-4" v-if="n.variableType === 'custom'">
                      <el-input placeholder="Custom Value" v-model="n.variableValue"></el-input>
                    </div>
                    
                    <!-- Delete Variable -->
                    <div class="col-md-1">
                      <el-button class="pull-right" type="danger" @click="deleteCssVariable(index)" icon="delete"></el-button>      
                    </div>
                  </div>
                </el-form-item>
              </div>
              <!-- Ends V-FOR looping -->
              
              <!-- Create new variable -->
              <el-button type="primary" @click="addNewCssVariable">New Variable</el-button>

            </el-form>
          </div>
        </div>
      </div>
      <!-- Global Variables section ends -->

      <!-- External Links Section -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toggleExternalLinks" class="card color-div toggleableDivHeader">External Links</a>
          </div>
      </div>
      <div id="toggleExternalLinksContent" class="toggleableDivHeaderContent" style="display: none;">
        <div class="row">
          <div class="col-md-12">
               <div class="row">
                  <div class="col-md-4">
                     <h3> JS Links </h3>
                  </div>
               </div>
               <hr>
               <el-form ref="form" :model="form">
               
                  <div >
                     <el-form-item>
                        <draggable v-model='externallinksJS' @start="drag=true" @end="drag=false">
                          <div style="margin-bottom: 25px" v-for='(n, index) in externallinksJS' class="row">
                             <!-- position  -->
                             <div class="col-md-3" style="margin: 0; padding-left: 15px">
                                <el-select v-model="n.linkposition" placeholder="Position">
                                   <el-option
                                      v-for="item in Allposition"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                   </el-option>
                                </el-select>
                             </div>
                             <!-- link url -->
                             <div class="col-md-6" style="margin: 0; padding: 0px">
                                <el-input type="text" :rows="5" placeholder="Link URL" v-model="n.linkurl"></el-input>
                             </div>
                             <!-- Delete Variable -->
                             <div class="col-md-1">
                                <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkJS(index)" icon="delete2"></el-button>
                             </div>
                             <div class="col-md-1">
                                <el-button style="min-width: 100%;"><i class="fa fa-arrows"></i></el-button>
                              
                             </div>

                          </div>
                        </draggable>
                     </el-form-item>
                  </div>
                 
                  <!-- Create new variable -->
                  <el-button type="primary" @click="addNewexternallinkJS">New JS Link</el-button>
               </el-form>
            </div>
            <div class="col-md-12" style="margin-top: 4%;">
               <div class="row">
                  <div class="col-md-4">
                     <h3> CSS Links </h3>
                  </div>
               </div>
               <hr>
               <el-form ref="form" :model="form">
               <draggable v-model='externallinksCSS' @start="drag=true" @end="drag=false">

                  <div v-for="(n, index) in externallinksCSS">
                     <el-form-item>
                        <div class="row">
                           <div class="col-md-3" style="margin: 0; padding-left: 15px">
                              <el-select v-model="n.linkposition" placeholder="Position">
                                 <el-option
                                    v-for="item in Allposition"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                 </el-option>
                              </el-select>
                           </div>
                           <!-- link url -->
                           <div class="col-md-6" style="margin: 0; padding-left: 0px">
                              <el-input type="text" :rows="5" placeholder="Link URL" v-model="n.linkurl"></el-input>
                           </div>
                           <!-- Delete Variable -->
                           <div class="col-md-1">
                              <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkCSS(index)" icon="delete2"></el-button>
                           </div>
                           <div class="col-md-1">
                              <el-button style="min-width: 100%;"><i class="fa fa-arrows"></i></el-button>
                            
                           </div>
                        </div>
                     </el-form-item>
                  </div>
                  <!-- Create new variable -->
               </draggable></el-form>
                  <el-button type="primary" @click="addNewexternallinkCSS">New CSS Link</el-button>
            </div>
        </div>
      </div>
      <!-- External Links section ends -->

      <!-- Meta Tags -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toggleMetaTags" class="card color-div toggleableDivHeader">Meta Tags</a>
          </div>
      </div>
      <div id="toggleMetaTagsContent" class="toggleableDivHeaderContent" style="display: none;">
        <div class="row">
          <div class="col-md-12" >
              <div class="row">
                    <div class="col-md-4">
                       <h3>Add External meta tags </h3>
                    </div>
                 </div>
                 <hr>
               <el-form :inline="true">
                 <el-form-item label="Meta Charset">
                    <el-input placeholder="charset value" v-model="Metacharset"></el-input>
                  </el-form-item>
                </el-form>
           </div>
            <div class="col-md-12" style="margin-top: 2%">
                <table class="table table-hover  table-bordered">
                    <!-- <draggable @start="drag=true" @end="drag=false"> -->
                    <thead class="thead">
                      <tr>
                        <th>Name</th>
                        <th>Content</th>
                        <th></th>
                        <!-- <th></th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(n, index) in externallinksMeta" >
                        <td><input type='text' class="form-control" value="n.name" v-model="n.name"></td>
                        <td><textarea class="form-control" rows="1" v-model="n.content">{{n.content}}</textarea></td>
                        <td><el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkMeta(index)" icon="delete2"></el-button></td>
                        <!-- <td><el-button style="min-width: 100%;" icon="plus"></el-button></td> -->
                      </tr>
                      <tr><td colspan="4"><el-button type="primary" @click="addNewexternallinkMeta">New Meta Link</el-button></td></tr>
                    </tbody>
                      <!-- </draggable> -->
                  </table>
                  <!-- Create new variable -->
                  <!-- <el-button type="primary" @click="addNewexternallinkMeta">New Meta Link</el-button> -->
               <!-- </el-form> -->
            </div>
        </div>
      </div>
      <!-- Meta Tags Ends -->

      <!-- List of Commits Section -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toggleCommits" class="card color-div toggleableDivHeader">List of Commits</a>
          </div>
      </div>
      <div id="toggleCommitsContent" class="toggleableDivHeaderContent" style="display: none;">
        <div class="row">
            <div class="col-md-12" style="margin-top: 2%">
              <el-table
                :data="commitsData"
                :row-class-name="tableRowClassName"
                border
                style="width: 100%">
                <el-table-column
                  prop="commitDate"
                  label="Commit Date"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="commitsMessage"
                  label="Commit Message"
                  >
                </el-table-column>

                <el-table-column
                  prop="commitSHA"
                  label="Commit SHA"
                  >
                </el-table-column>
                
                <el-table-column
                  label="Revert To Commit"
                  width="180">
                  <template scope="scope">
                    <el-button @click.native.prevent="revertCommit(scope.$index, commitsData)" type="primary" size="small">Revert Commit</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
        </div>
      </div>
      <!-- List of Commits Ends -->

      <div class="margin-50"></div>
      
    </div>
    
  </div>
</template>

<script>

const beautify = require('beautify');

import Vue from 'vue';
import VueSession from 'vue-session';
Vue.use(VueSession);

import axios from 'axios';
import _ from 'lodash';
const config = require('../config');
import fileSaver from 'file-saver';

import draggable from 'vuedraggable';

export default {
  name: 'ProjectSettings',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        name: '',
        brandName: '',
        brandLogoName: '',
        seoTitle: '',
        seoKeywords: '',
        seoDesc: '',
        Header: [],
        Footer: [],
        selectedHeader: '',
        selectedFooter: ''
      },
      commitsData: [],
      pluginsData: [],
      commitMessage: '',
      newRepoId: '',
      repoName: '',
      isCommitLoading: false,
      configData: [],
      currentFileIndex: '',
      settings: [],
      folderUrl: '',
      selectVariableType: [{
        value: 'text',
        label: 'Text'
      }, {
        value: 'image',
        label: 'Image'
      }, {
        value: 'hyperlink',
        label: 'Hyperlink'
      }, {
        value: 'html',
        label: 'HTML'
      }],

      selectCssVariableType: [{
        value: 'color',
        label: 'Color'
      }, {
        value: 'px',
        label: 'Pixel'
      }, {
        value: 'percent',
        label: 'Percentage'
      }, {
        value: 'number',
        label: 'Number'
      }, {
        value: 'custom',
        label: 'Custom'
      }],

      globalVariables: [],
      globalCssVariables: [],
      ecommerceVariables: [],
      imageInputIsDisabled: false,
      uploadedVariableJsonData: '',
      layoutOptions: [],

      addPluginLoading: false,
      refreshPluginsLoading: false,
      refreshFolderTree: [],

      pluginsTreedata: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      checkedList: [],
      previewLoader: false,

      Allposition:[
        {
          label:'Start of <head> Tag',value:'starthead'
        },{
          label:'End of <head> tag',value:'endhead'
        },{
          label:'Start of <body> Tag',value:'startbody'
        },{
          label:'End of <body> tag',value:'endbody'
        }
      ],
      externallinksJS:[],
      externallinksCSS:[],
      externallinksMeta:[{
        name: 'Edit Me',
        content: 'Update Me'
      }],
      Metacharset: ''
    }
  },
  components: {
    draggable
  },
  methods: {

    async globalImageUploading(currentImageVariableIndex, file) {
      
      this.imageInputIsDisabled = true;

      var fileParts = file.target.value.split('\\');
      var imageName = fileParts[fileParts.length-1];

      var scope = this;
      
      var globalFileData = '';
      // readFile
      var reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = await function(e) {
          $('[name = '+currentImageVariableIndex+']').attr('src', e.target.result);
          // browser completed reading file - display it
          globalFileData = e.target.result;
          
          axios.post( config.baseURL + '/image-upload', {
              filename : scope.folderUrl + '/assets/' + imageName,
              text : globalFileData,
              type : 'file'
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((e) => { 
            console.log(e)
          })
      };

      this.globalVariables[currentImageVariableIndex].variableValue = imageName;
      this.globalVariables[currentImageVariableIndex].isImageUrl = false;
    },

    addNewVariable() {
      let newVariable = { variableId: '', variableType: '', variableTitle: '', variableValue: '' , isImageUrl: true};
      this.globalVariables.push(newVariable);
      this.imageInputIsDisabled = false;
    },

    addNewCssVariable() {
      let newVariable = { variableName: '', variableType: '', variableValue: ''};
      this.globalCssVariables.push(newVariable);
    },

    addNewexternallinkJS() {
      let newVariable = { linktype: 'JS', linkposition: '', linkurl: ''};
      this.externallinksJS.push(newVariable);
    },

    addNewexternallinkCSS() {
      let newVariable = { linktype: 'CSS', linkposition: '', linkurl: ''};
      this.externallinksCSS.push(newVariable);
    },

    addNewexternallinkMeta() {
      let newVariable = { name:'',content:''};
      this.externallinksMeta.push(newVariable);
      this.editableInit();
    },

    async addNewPlugin(pluginFileData) {

      // Turn on Loader
      this.addPluginLoading = true;

      // Validate Schema (pending)

      // If Schema Valid, upload this file to /assets/client-plugins folder
      let uploadNewPluginUrl = this.folderUrl + '/assets/client-plugins/' + pluginFileData.name + '.json';

      // Create this file under this particular project
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : uploadNewPluginUrl ,
          text : pluginFileData,
          type : 'file'
      })
      .then((res) => {
        this.$message({
              showClose: true,
              message: 'Successfully done.',
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

      // Create Plugin Folder and its variants
      let pluginName = pluginFileData.name;

      // Create this plugin Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : this.folderUrl + '/Partials/' + pluginName,
        type : 'folder'
      })
      .then(async (res) => {
        console.log('New Plugin Folder created!');

        this.settings[2].layoutOptions[0][pluginName] = [];

        // If it's already uploaded once
        let indexOfPartialInTreeData = _.findIndex(this.pluginsTreedata, function(o) { return o.label == pluginName; });
        if(indexOfPartialInTreeData > -1){
          console.log('Already uploaded plugin. I\'ll check for new variants. Plugin index: ', indexOfPartialInTreeData);
        } else {
          // Push New Object
          let pluginsParentObject = {
                                    children: [],
                                    label: pluginName,
                                    isActive: true
                                  };
        
          this.pluginsTreedata.push(pluginsParentObject);
        }

        
        console.log('Plugins tree data: ', this.pluginsTreedata);

        // Loop through all partial variants
        for(let i = 0; i < pluginFileData.partials.length; i++){

          // Create Array Object for variant used to save in config.json file
          let variantEntry = {
            value: pluginFileData.partials[i].title,
            label: pluginFileData.partials[i].title
          };

          // create tree children
          // If variant already exist
          let indexOfPartialChildInTreeData = _.findIndex(this.pluginsTreedata[indexOfPartialInTreeData], function(o) { return o.label == pluginFileData.partials[i].title; });

          if(indexOfPartialChildInTreeData > -1){
            console.log('Already registered plugin variant.');
          } else {

            let indexOfParentInTreeData = _.findIndex(this.pluginsTreedata, function(o) { return o.label == pluginName; });

            let pluginsChildObject =  {
                                      children: [],
                                      label: pluginFileData.partials[i].title,
                                      isActive: true
                                    };
            this.pluginsTreedata[indexOfParentInTreeData].children.push(pluginsChildObject);
          }

          // Push variantEntry in settings.layoutoptions
          this.settings[2].layoutOptions[0][pluginName].push(variantEntry);

          // Start Creating variant files
          let variantName = this.folderUrl + '/Partials/' + pluginName + '/' + pluginFileData.partials[i].title + '.html';

          let generatedCss, generatedJs;

          // Generate Css Style Tag
          let styleTag = '';
          for(let j = 0; j < pluginFileData.partials[i].css.style.length; j++){
            let key = Object.keys(pluginFileData.partials[i].css.style[j]);
            let value = Object.values(pluginFileData.partials[i].css.style[j]);

            let keyvalue = '.' + pluginFileData.partials[i].title + ' ' + key[0] + value[0] +'\n';

            styleTag += keyvalue;
          }

          // Generate Css Link tags
          let styleHref = '';
          for(let j = 0; j < pluginFileData.partials[i].css.href.length; j++){
            styleHref += '<link rel="stylesheet" type="text/css" href="' + pluginFileData.partials[i].css.href[j] + '">\n';
          }

          // Combine all Css code
          generatedCss = styleHref + '<style type="text/css">\n' + beautify(styleTag, { format: 'css'}) + '\n</style>';

          let addOnScript = 'let configData = [];\n$(function($) { $.getJSON( "../../assets/config.json", function(data){\n var configDataRaw = data;\n configData = configDataRaw[1].projectSettings[1].GlobalVariables;\n }); ';

          let dynamicVariables = '';

          // Get all Dynamic Properties to be include in user's js code
          for(let k = 0; k < pluginFileData.partials[i].properties.dynamic.length; k++){
            let key = Object.keys(pluginFileData.partials[i].properties.dynamic[k]);
            let value = Object.values(pluginFileData.partials[i].properties.dynamic[k]);

            dynamicVariables += 'let ' + key + ' = configData.filter(function(obj){ return (obj.variableId=="' + key + '"); })[0].variableValue;\n';

            let newVariable = {
              variableId: key[0],
              variableType: 'text',
              variableTitle: '',
              variableValue: value[0],
              isImageUrl: true
            }

            this.globalVariables.push(newVariable);

          } 

          // Generate Js Script Tag
          let scriptTag = '';
          scriptTag = '<script type="text/javascript">\n' + addOnScript + '\nsetTimeout(function(){' + dynamicVariables + '\n' + beautify(pluginFileData.partials[i].js.script, { format: 'js'}) + '\n},2000); });<\/script>';

          // Generate Js Link tags
          let scriptSrc = '';
          for(let j = 0; j < pluginFileData.partials[i].js.src.length; j++){
            scriptSrc += '<script src="' + pluginFileData.partials[i].js.src[j] + '"><\/script>\n';
          }

          // Combine all Js Code
          generatedJs = scriptTag + '\n' + scriptSrc;

          // Final Code for variant file
          let pluginContents = '<script src="https://code.jquery.com/jquery-3.2.1.js"><\/script>\n' + generatedCss + '\n' + '<div class="' + pluginFileData.partials[i].title + '">\n' + beautify(pluginFileData.partials[i].renderHtml, { format: 'html'}) + '\n</div>\n' + generatedJs;

          // Create variant files
          let pluginVariantCreation = await axios.post(config.baseURL + '/flows-dir-listing', {
              filename : variantName,
              text : pluginContents,
              type : 'file'
          })
          .then((res) => {
            console.log(variantName + ', Partial Variant Created!');
          })
          .catch((e) => {
              console.log(e)
          });

        }

        // Save Config File
        await this.saveProjectSettings();

        this.init();

      })
      .catch((e)=>{
        console.log("Error"+e)
      });

      this.addPluginLoading = false;
    },

    async refreshPlugins() {
      this.refreshPluginsLoading = true;

      // console.log('Url', config.baseURL + '/flows-dir-listing?website=' + this.repoName);

      // Call Listings API and get Tree
      await axios.get(config.baseURL + '/flows-dir-listing?website=' + this.repoName, {
      })
      .then(async (res) => {
        console.log(res);
        this.refreshPluginsLoading = false;

        let directoryListing = res.data.children;

        // For Partials
        let partialsFolderIndex = _.findIndex(directoryListing, function(o) { return o.name == 'Partials'; });

        for(var i = 0; i < directoryListing[partialsFolderIndex].children.length; i++){
          if((_.indexOf(Object.keys(this.settings[2].layoutOptions[0]), directoryListing[partialsFolderIndex].children[i].name)) > -1){
            // Partial is registered but check for new partial variants

            let updates = false;

            this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name] = [];

            // Create Partial Files Entry
            for(let j = 0; j < directoryListing[partialsFolderIndex].children[i].children.length ; j++){

              let fileName = directoryListing[partialsFolderIndex].children[i].children[j].name;
              fileName = fileName.split('.');
              fileName = fileName[0];

              if(_.find(this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex]], function(o) { return o.value = fileName; })){
              } else {
                updates = true;

                let newFtpPartial = {
                    value: fileName,
                    label: fileName
                }  
                this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name].push(newFtpPartial);
              }
            }

            // Only Save file when there are any new files found in already registered partials
            // if(updates){
            //   await this.saveProjectSettings();  
            // }

            // this.init();

          } else {
            // Partial not Registered

            // Create Partial Entry
            this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name] = [];

            // Push New Object in plugins tree
            let refreshPluginsParentObject = {
                                      children: [],
                                      label: directoryListing[partialsFolderIndex].children[i].name,
                                      isActive: true
                                    };
          
            this.pluginsTreedata.push(refreshPluginsParentObject);

            // Create Partial Files Entry
            for(let j = 0; j < directoryListing[partialsFolderIndex].children[i].children.length ; j++){

              let fileName = directoryListing[partialsFolderIndex].children[i].children[j].name;
              fileName = fileName.split('.');
              fileName = fileName[0];
              
              let newFtpPartial = {
                  value: fileName,
                  label: fileName
              }  

              this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name].push(newFtpPartial);

              let refreshIndexOfParentInTreeData = _.findIndex(this.pluginsTreedata, function(o) { return o.label == directoryListing[partialsFolderIndex].children[i].name; });

              let refreshPluginsChildObject =  {
                                      children: [],
                                      label: fileName,
                                      isActive: true
                                    };
              this.pluginsTreedata[refreshIndexOfParentInTreeData].children.push(refreshPluginsChildObject);
            }
          }
        }

        // For Pages
        let pagesFolderIndex = _.findIndex(directoryListing, function(o) { return o.name == 'Pages'; });

        for(var i = 0; i < directoryListing[pagesFolderIndex].children.length; i++){
          let pageNameIndex = _.findIndex(this.settings[1].pageSettings, function(o) { return o.PageName == directoryListing[pagesFolderIndex].children[i].name; });

          if( pageNameIndex > -1 ){
            console.log('Page already registered: ', directoryListing[pagesFolderIndex].children[i].name);
          } else {

            let notRegisteredPageSettings = {
                                              "PageName": directoryListing[pagesFolderIndex].children[i].name,
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
                                              "PageMetacharset":''
                                            };

            this.settings[1].pageSettings.push(notRegisteredPageSettings);
          }
        }

        await this.saveProjectSettings();
        this.init();
      })
      .catch((e) => {
          this.$message({
              showClose: true,
              message: 'Failed to refresh! Please try again.',
              type: 'error'
          });
          this.refreshPluginsLoading = false;
          console.log(e)
      });
    },

    deleteVariable(deleteIndex) {
      this.globalVariables.splice(deleteIndex, 1);
    },

    deleteCssVariable(deleteIndex) {
      this.globalCssVariables.splice(deleteIndex, 1);
    },

    deleteEcommerceVariable(deleteIndex) {
      this.ecommerceVariables.splice(deleteIndex, 1);
    },

    deletelinkJS(deleteIndex) {
      this.externallinksJS.splice(deleteIndex, 1);
    },
    deletelinkCSS(deleteIndex) {
      this.externallinksCSS.splice(deleteIndex, 1);
    },
    deletelinkMeta(deleteIndex) {
      this.externallinksMeta.splice(deleteIndex, 1);
    },

    deletePlugin(deleteIndex){
      this.$confirm('This plugin will be permanently deleted. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      }).catch(() => {
        
      });
    },

    downloadGlobalVariables() {
      this.saveProjectSettings();
      let exportVariables = this.settings[1].projectSettings[1];

      let textToSave = JSON.stringify(exportVariables);
      let saveFileName = 'globalVariablesData.json';
      let jsonData = new Blob([textToSave], {type: "application/json;charset=utf-8"});
    
      fileSaver.saveAs(jsonData, saveFileName);
    },

    downloadConfigFile() {
      this.saveProjectSettings();
      let exportConfigFile = this.settings;

      let textToSave = JSON.stringify(exportConfigFile);
      let saveFileName = 'config.json';
      let jsonData = new Blob([textToSave], {type: "application/json;charset=utf-8"});
    
      fileSaver.saveAs(jsonData, saveFileName);
    },

    uploadImage(fileData, fileBlob) {
      
      this.form.brandLogoName = fileData.name;

      axios.post( config.baseURL + '/image-upload', {
          filename : this.folderUrl + '/assets/' + this.form.brandLogoName,
          text : fileBlob,
          type : 'file'
      })
      .then((res) => {
        console.log('Brand Logo Uploaded: ', res.data);
      })
      .catch((e) => { 
        console.log('Some error occured. Here is full log: ', e)
      });
    },

    async saveProjectSettings() {

      let ProjectSettings = [{
                              "RepositoryId": this.newRepoId,
                              "ProjectName": this.repoName,
                              "BrandName": this.form.brandName,
                              "BrandLogoName": this.form.brandLogoName,
                              "ProjectSEOTitle": this.form.seoTitle,
                              "ProjectSEOKeywords": this.form.seoKeywords,
                              "ProjectSEODescription": this.form.seoDesc
                            }, {
                              "GlobalVariables": this.globalVariables,
                              "GlobalCssVariables": this.globalCssVariables,
                              "EcommerceSettings": this.ecommerceSettings,
                              "ProjectExternalCss": this.externallinksCSS,
                              "ProjectExternalJs": this.externallinksJS,
                              "ProjectMetaInfo": this.externallinksMeta,
                              "ProjectMetacharset":this.Metacharset
                            }];

      this.settings[1].projectSettings = ProjectSettings;

      let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );

      if(rethinkdbCheck.data.data){
        console.log('Rethink Response: ', rethinkdbCheck.data.data[0].id);

        // update existing data
        await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.data[0].id, {
          configData: this.settings,
          pluginsData: this.pluginsTreedata
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

    revertCommit(index) {
      this.$store.state.currentIndex = index;
      $('#tablecommits .el-table__body-wrapper').find('tr').removeClass('positive-row');
      $('#tablecommits .el-table__body-wrapper').find('tr').eq(index).addClass('positive-row')

      // console.log(this.commitsData[index].commitSHA);
      axios.post( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&branchName=master&sha=' + this.commitsData[index].commitSHA + '&repoName='+ this.repoName, {
      }).then(response => {
        console.log(response.data);
        this.$message({
          message: 'Successfully reverted to selected commit.',
          type: 'success'
        });
      }).catch(error => {
        console.log("Some error occured: ", error);
      })
    },

    commitProject() {
      this.isCommitLoading = true;
      this.$store.state.currentIndex = 0;

      // Push repository changes
      axios.post(config.baseURL + '/gitlab-add-repo', {
        commitMessage: this.commitMessage,
        repoName: this.repoName
      }).then(response => {
        console.log(response);
        if(response.status == 200 || response.status == 201){
          this.commitMessage = '';
          console.log(response.data);
          this.$message({
            message: 'Successfully published the website.',
            type: 'success'
          });
          this.isCommitLoading = false;
          this.init();
        }
      }).catch(error => {
        console.log("Some error occured: ", error);
      }) 
    },

    // async publishMetalsmith () {
    //     this.previewLoader = true;
    //     var folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //     var responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );
    //     var rawConfigs = responseConfig.data.data[0].configData;
    //     var partialstotal = []
    //     console.log("rawConfigs[1].pageSettings.length:",rawConfigs[1].pageSettings.length)
    //     for (let i = 0; i < rawConfigs[1].pageSettings.length; i++) {

    //         var partials = ''

    //         let responseConfigLoop = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );

    //         var rawSettings = responseConfigLoop.data.data[0].configData;
    //         var nameF = rawSettings[1].pageSettings[i].PageName.split('.')[0]
    //         console.log('nameF:',nameF)
    //         var Layout = ''
    //         var partialsPage = [];
    //         var vuepartials = [];
    //         Layout = rawSettings[1].pageSettings[i].PageLayout
    //         partialsPage = rawSettings[1].pageSettings[i].partials
    //         var back_partials = JSON.parse(JSON.stringify(partialsPage));
    //         vuepartials = rawSettings[1].pageSettings[i].VueComponents
    //         if (vuepartials != undefined && vuepartials.length > 0) {
    //             // console.log("VueComponents found:")
    //             var mainVuefile = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/back_main.js');
    //             mainVuefile = mainVuefile.data

    //             for (let x = 0; x < vuepartials.length; x++) {
    //                 let temp = mainVuefile.replace(/@@vuecomponent@@/g, vuepartials[x].value.split('.')[0])
    //                 temp = temp.replace('./' + vuepartials[x].value.split('.')[0], folderUrl + '/Partials/' + vuepartials[x].partialsName + '/' + vuepartials[x].value.split('.')[0])

    //                 await axios.post(config.baseURL + '/flows-dir-listing', {
    //                         filename: config.webpackpublic + vuepartials[x].value.split('.')[0] + '.js',
    //                         text: temp,
    //                         type: 'file'
    //                     }).then(async (res) => {
    //                         // console.log("successfully created vuecomponent file") 
    //                         contentpartials = contentpartials + '<script src="./../assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js' + '"><\/script>'

    //                         axios.get(config.baseURL + '/webpack-api?path=' + folderUrl + '/assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js', {})
    //                             .then((response) => {
    //                                 console.log("called webpack_file api successfully:")
    //                             })
    //                             .catch((e) => {
    //                                 console.log(e)
    //                             })
    //                     })
    //                     .catch((e) => {
    //                         console.log(e)
    //                     })

    //             }
    //             for (let x = 0; x < vuepartials.length; x++) {

    //                 axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + '/home/software/workspace/faizan/FlowzServiceApi/public/' + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
    //                         console.log(res)
    //                     })
    //                     .catch((e) => {
    //                         console.log(e)
    //                     })
    //             }
    //         }

    //         var responseMetal = ''
    //         let contentpartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + nameF + '.html');
    //         contentpartials = contentpartials.data

    //         responseMetal = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place')\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(permalinks({pattern: ':date'}))\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

    //         var index = responseMetal.search('.source')

    //         responseMetal = responseMetal.substr(0, index + 9) + this.$store.state.fileUrl.replace(/\\/g, "\/") + '/Preview' + responseMetal.substr(index + 9)
    //         var indexPartial = responseMetal.search("handlebars");

    //         for (var j = 0; j < partialsPage.length; j++) {
    //             var temp1, temp2;
    //             if (partialsPage[j][Object.keys(partialsPage[j])[0]].match('.hbs')) {
    //                 temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + "' }}"
    //                 temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]].split('.')[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + "' }}"
    //             } else {

    //                 temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".html' }}"

    //                 temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".html' }}"
    //             }

    //             if (contentpartials.match(temp1)) {

    //                 contentpartials = contentpartials.split(temp1).join(temp2)
    //                 // let partialsinherit = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/'+Object.keys(partialsPage[j])[0]+'/'+partialsPage[j][Object.keys(partialsPage[j])[0]]);

    //                 var obj = {}
    //                 var key = Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]]
    //                 obj[key] = partialsPage[j][Object.keys(partialsPage[j])[0]]
    //                 partialsPage[j] = []
    //                 partialsPage[j] = obj
    //                 // console.log("new partialsPage[",j,']:',partialsPage[j])



    //             } else {
    //                 console.log('partials not found in page')
    //                 console.log('partialsPage[j]:', partialsPage[j])

    //             }
    //         }
    //         console.log("back_partials:",back_partials)
    //         for (var z = 0; z < partialsPage.length; z++) {
    //           let key = Object.keys(partialsPage[z])[0];
    //           let value = partialsPage[z]
    //           let key2 = key;
    //           key = key.trim();
    //           if (value[key2].match('html')) {
    //               key = key.split('.')[0]
    //               var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + Object.keys(back_partials[z])[0] + "/" + value[key2] + "').toString())\n"
    //           } else if (value[key2].match('hbs')) {
    //               key = key.split('.')[0]
    //               var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + Object.keys(back_partials[z])[0] + "/" + value[key2] + "').toString())\n"
    //           } else {
    //               var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + Object.keys(back_partials[z])[0] + "/" + value[key2] + ".html').toString())\n"
    //           }
    //           partials = partials + temp;
    //       }

    //         responseMetal = responseMetal.substr(0, indexPartial + 14) + partials + responseMetal.substr(indexPartial + 14);
    //         console.log('final responseMetal:', responseMetal)
    //         var mainMetal = folderUrl + '/assets/metalsmith.js'
    //         var value = true;
    //         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                 filename: mainMetal,
    //                 text: responseMetal,
    //                 type: 'file'
    //             }).then(async (response) => {
    //                 var newFolderName = folderUrl + '/Preview';
    //                 await axios.post(config.baseURL + '/flows-dir-listing', {
    //                         foldername: newFolderName,
    //                         type: 'folder'
    //                     })
    //                     .then(async (res) => {
    //                         console.log(res);
    //                         // console.log('Current URL:', this.$store.state.fileUrl.replace(/\\/g, "\/"));

    //                         console.log("this.form.Layout:", Layout)
    //                         if (Layout == 'Blank') {
    //                             // console.log("inside blank layout condition:")
    //                             await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                     filename: folderUrl + '/Layout/Blank.layout',
    //                                     text: '{{{ contents }}}',
    //                                     type: 'file'
    //                                 })
    //                                 .catch((e) => {
    //                                     console.log("error while blank file creation")
    //                                 })
    //                         }
    //                         let layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + Layout + '.layout');

    //                         let newContent = "<html>\n<head>\n" +
    //                             "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n" +
    //                             "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n" +
    //                             "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n" +
    //                             "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
    //                             "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n" +
    //                             "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
    //                             "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
    //                             "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n" +
    //                             "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
    //                             '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n' +
    //                             '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n' +
    //                             "<link rel='stylesheet' href='./../main-files/main.css'/>\n</head><body>\n" +
    //                             layoutdata.data +
    //                             '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n' +
    //                             // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //                             '<script src="./../main-files/main.js"><\/script>\n' +
    //                             '</body>\n</html>';

    //                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                             filename: folderUrl + '/Layout/' + Layout + '.layout',
    //                             text: newContent,
    //                             type: 'file'
    //                         })

    //                         var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';;

    //                         if (Layout == 'Blank') {
                                
    //                             rawContent = '---\nlayout: ' + Layout + '.layout\n---\n' + rawContent
    //                             // }
    //                         } else {
    //                             let tempValueLayout = '---\nlayout: ' + Layout + '.layout\n---\n';
    //                             rawContent = tempValueLayout + rawContent

    //                             // }
    //                         }

    //                         var previewFileName = folderUrl + '/Preview/' + nameF + '.hbs';

    //                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                 filename: previewFileName,
    //                                 text: rawContent,
    //                                 type: 'file'
    //                             })
    //                             .then(async (res) => {
    //                                 this.saveFileLoading = false;

    //                                 await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then(async (response) => {

    //                                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                                 filename: mainMetal,
    //                                                 text: responseMetal,
    //                                                 type: 'file'
    //                                             })
    //                                             .then(async (res) => {
    //                                                 let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //                                                 previewFile = folderUrl.replace('/var/www/html', '');

    //                                                 await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
    //                                                     .then(async (res) => {
    //                                                         console.log(res);
    //                                                         // value = false;
    //                                                         // return value
    //                                                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                                                 filename: folderUrl + '/Layout/' + Layout + '.layout',
    //                                                                 text: layoutdata.data,
    //                                                                 type: 'file'
    //                                                             })
    //                                                             .then(async (res) => {
    //                                                                 // location.reload();
    //                                                                 if (vuepartials != undefined && vuepartials.length > 0) {
    //                                                                     for (let x = 0; x < vuepartials.length; x++) {

    //                                                                         await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.webpackpublic + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
    //                                                                                 console.log(res)
    //                                                                             })
    //                                                                             .catch((e) => {
    //                                                                                 console.log(e)
    //                                                                             })
    //                                                                     }
    //                                                                     // location.reload();
    //                                                                 }
    //                                                                 console.log("layout file reset")
    //                                                                 if (Layout == 'Blank') {
    //                                                                    await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
    //                                                                         .catch((e) => {
    //                                                                             console.log("error while deleting blank.layout file")
    //                                                                         })
    //                                                                 }

    //                                                             })

    //                                                     })
    //                                                     .catch((e) => {
    //                                                         console.log(e)
    //                                                     })
    //                                             })

    //                                     })
    //                                     .catch((err) => {
    //                                         console.log('error while creating metalsmithJSON file' + err)
    //                                     })
    //                             })
    //                             .catch((e) => {
    //                                 this.saveFileLoading = false
    //                                 this.$message({
    //                                     showClose: true,
    //                                     message: 'File not saved! Please try again.',
    //                                     type: 'error'
    //                                 });
    //                                 console.log(e)
    //                             })

    //                     })
    //                     .catch((e) => {
    //                         console.log(e)
    //                     })

    //             })
    //             .catch((e) => {
    //                 console.log('error while creating metalsmithJSON file' + e)
    //                 this.$message({
    //                     showClose: true,
    //                     message: 'Cannot save file! Some error occured, try again.',
    //                     type: 'danger'
    //                 });
    //             })

    //     }

    //     // window.open(config.ipAddress + folderUrl.replace('var/www/html/', '') + '/public/');
    //     // Publish with Zeit Now
    //     axios.post(config.baseURL + '/publish-now', {
    //         projectName : this.repoName
    //     })
    //     .then((res) => {
    //       let serverUrl = res.data;
    //       window.open( serverUrl + '/public/');
    //       this.$message({
    //         showClose: true,
    //         message: 'Successfully Published.',
    //         type: 'success'
    //       });
    //       console.log(res.data);
    //       this.previewLoader = false;
    //     })
    //     .catch((e) => {
    //       this.$message({
    //         showClose: true,
    //         message: 'Failed! Please try again.',
    //         type: 'error'
    //       });
    //       console.log(e);
    //       this.previewLoader = false;
    //     });
    //     // location.reload();
    // },

    async publishMetalsmith () {
        this.previewLoader = true;
        var folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        var responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );
        var rawConfigs = responseConfig.data.data[0].configData;
        var partialstotal = []
        var externalJs = rawConfigs[1].projectSettings[1].ProjectExternalJs;
       var externalCss = rawConfigs[1].projectSettings[1].ProjectExternalCss;
       var metaInfo = rawConfigs[1].projectSettings[1].ProjectMetaInfo;
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
       if(metaInfo.length > 0){
          for (let a = 0; a < metaInfo.length; a++) {
             tophead = tophead + '<meta name="' + metaInfo[a].name + '" content="' + metaInfo[a].content + '">'
          }
        }
         
        if(externalJs.length > 0){
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
         
        if(externalCss.length > 0){
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
        for (let i = 0; i < rawConfigs[1].pageSettings.length; i++) {

            var partials = ''

            let responseConfigLoop = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );

            var rawSettings = responseConfigLoop.data.data[0].configData;
            var nameF = rawSettings[1].pageSettings[i].PageName.split('.')[0]
            console.log('nameF:',nameF)
            var Layout = ''
            var partialsPage = [];
            var vuepartials = [];
            var tophead = '';
            var endhead = '';
            var topbody = '';
            var endbody = '';
            var layoutdata='';
            var pageexternalJs= [];
            var pageexternalCss= [];
            var pageMetaInfo= [];
            var pageSeoTitle;
            Layout = rawSettings[1].pageSettings[i].PageLayout
            partialsPage = rawSettings[1].pageSettings[i].partials
            var back_partials = JSON.parse(JSON.stringify(partialsPage));
            vuepartials = rawSettings[1].pageSettings[i].VueComponents
            pageexternalJs = rawSettings[1].pageSettings[i].PageExternalJs;
            pageexternalCss = rawSettings[1].pageSettings[i].PageExternalCss;
            pageMetaInfo = rawSettings[1].pageSettings[i].PageMetaInfo;
            pageSeoTitle = rawSettings[1].pageSettings[i].PageSEOTitle;
            if(pageMetaInfo.length>0){
                for (let a = 0; a < pageMetaInfo.length; a++) {
                   tophead = tophead + '<meta name="' + pageMetaInfo[a].name + '" content="' + pageMetaInfo[a].content + '">'
                }
               }
               if(pageexternalJs.length>0){
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

               
               if(pageexternalCss.length>0){
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
            if (vuepartials != undefined && vuepartials.length > 0) {
                var mainVuefile = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/back_main.js');
                mainVuefile = mainVuefile.data

                for (let x = 0; x < vuepartials.length; x++) {
                    let temp = mainVuefile.replace(/@@vuecomponent@@/g, vuepartials[x].value.split('.')[0])
                    temp = temp.replace('./' + vuepartials[x].value.split('.')[0], folderUrl + '/Partials/' + vuepartials[x].partialsName + '/' + vuepartials[x].value.split('.')[0])

                    await axios.post(config.baseURL + '/flows-dir-listing', {
                            filename: config.pluginsPath + '/public/' +  vuepartials[x].value.split('.')[0] + '.js',
                            text: temp,
                            type: 'file'
                        }).then(async (res) => {
                            contentpartials = contentpartials + '<script src="./../assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js' + '"><\/script>'

                            axios.get(config.baseURL + '/webpack-api?path=' + folderUrl + '/assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js', {})
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
            if (Layout == 'Blank') {
                await axios.post(config.baseURL + '/flows-dir-listing', {
                        filename: folderUrl + '/Layout/Blank.layout',
                        text: '{{{ contents }}}',
                        type: 'file'
                    })
                    .catch((e) => {
                        console.log("error while blank file creation")
                    })
            }
             layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + Layout + '.layout');
            var responseMetal = ''
            let contentpartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + nameF + '.html');
            contentpartials = contentpartials.data
            var backlayoutdata = JSON.parse(JSON.stringify(layoutdata));
             let newFolderName = folderUrl + '/temp';
             await axios.post(config.baseURL + '/flows-dir-listing', {
                     foldername: newFolderName,
                     type: 'folder'
               }).then(async(res) => {
                 for (let p = 0; p < back_partials.length; p++) {
                     let responsepartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + Object.keys(back_partials[p]) + '/' + back_partials[p][Object.keys(back_partials[p])] + '.partial');
                     responsepartials = responsepartials.data
                     let result = (getFromBetween.get(responsepartials, "{{>", "}}"));
                     var DefaultParams = [];
                     if (result.length > 0) {
                         var resultParam = result
                         for (let q = 0; q < resultParam.length; q++) {
                             var temp;
                             temp = resultParam[q].trim()
                             result[q] = result[q].trim()
                             temp = temp.replace(/&nbsp;/g, ' ')
                             temp = temp.replace(/\s+/g, ' ');
                             temp = temp.trim();
                             temp = temp.split(' ')
                             for (let j = 0; j < temp.length; j++) {
                                 if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                     if (temp[j + 1] != undefined) {
                                         result[q] = temp[0];
                                         if (temp[j + 1].indexOf('.') > -1) {
                                             let x = temp[j + 1]
                                             x = temp[j + 1].split(/'/)[1];
                                             let obj = {}
                                             obj[temp[0]] = x
                                             DefaultParams.push(obj)
                                             break;
                                         }
                                     } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                         result[q] = temp[0];
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
                         filename: folderUrl + '/temp/' + Object.keys(back_partials[p]) + '_' + back_partials[p][Object.keys(back_partials[p])] + '.html',
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
                     for (let w = 0; w < resultParam.length; w++) {
                         var temp;
                         temp = resultParam[w].trim()
                         result[w] = result[w].trim()
                         temp = temp.replace(/&nbsp;/g, ' ')
                         temp = temp.replace(/\s+/g, ' ');
                         temp = temp.trim();
                         temp = temp.split(' ')
                         for (let j = 0; j < temp.length; j++) {
                             if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                 if (temp[j + 1] != undefined) {
                                     result[w] = temp[0];
                                     if (temp[j + 1].indexOf('.') > -1) {
                                         let x = temp[j + 1]
                                         x = temp[j + 1].split(/'/)[1];
                                         let obj = {}
                                         obj[temp[0]] = x
                                         DefaultParams.push(obj)
                                         break;
                                     }
                                 } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                     result[w] = temp[0];
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
                         for (let w = 0; w < back_partials.length; w++) {
                             if (Object.keys(back_partials[w])[0] == result[j]) {

                                 temp1 = '{{> ' + Object.keys(back_partials[w])[0] + ' }}'
                                 if(layoutdata.data.search(temp1)>0){

                                 temp2 = '{{> ' + Object.keys(back_partials[w])[0] + '_' + back_partials[w][Object.keys(back_partials[w])[0]] + ' }}'
                                 }
                                 else{
                                  temp1 = '{{> ' + Object.keys(back_partials[w])[0] + " id='" + DefaultParams[j][Object.keys(back_partials[w])[0]] + "' }}"

                                  temp2 = '{{> ' + Object.keys(back_partials[w])[0] + '_' + back_partials[w][Object.keys(back_partials[w])[0]] + " id='" + DefaultParams[j][Object.keys(back_partials[w])[0]] + "' }}"
                                 }
                                 console.log('temp1:',temp1)
                                 console.log('temp2:',temp2)
                                 if(layoutdata.data.split(temp1).join(temp2)){
                                  console.log('replacing in layout file successfully')
                                 layoutdata.data = layoutdata.data.split(temp1).join(temp2)
                                 }else{
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

            responseMetal = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place')\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

            var index = responseMetal.search('.source')

            responseMetal = responseMetal.substr(0, index + 9) + this.$store.state.fileUrl.replace(/\\/g, "\/") + '/Preview' + responseMetal.substr(index + 9)
            var indexPartial = responseMetal.search("handlebars");

            for (var j = 0; j < partialsPage.length; j++) {
              var temp1, temp2;
                  temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".partial' }}"

                  temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".partial' }}"
              
                console.log('temp1:',temp1)
                console.log('temp2:',temp2)
                if (contentpartials.match(temp1)) {
                    contentpartials = contentpartials.split(temp1).join(temp2)
                  }
                var obj = {}
                var key = Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]]
                console.log('key:',key)
                console.log('partialsPage:',partialsPage[j][Object.keys(partialsPage[j])[0]])
                obj[key] = partialsPage[j][Object.keys(partialsPage[j])[0]]
                partialsPage[j] = []
                partialsPage[j] = obj
                    
            }
            for (var z = 0; z < partialsPage.length; z++) {
              let key = Object.keys(partialsPage[z])[0];
              let value = partialsPage[z]
              let key2 = key;
              key = key.trim();
              if (value[key2].match('partial')) {
                  key = key.split('.')[0]
                  var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[z])[0] + "_" + value[key2] + "').toString())\n"
              }
             else {
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[z])[0] + "_" + value[key2] + ".html').toString())\n"
            }
              partials = partials + temp;
          }

            responseMetal = responseMetal.substr(0, indexPartial + 14) + partials + responseMetal.substr(indexPartial + 14);
            console.log('final responseMetal:', responseMetal)
            var mainMetal = folderUrl + '/assets/metalsmith.js'
            var value = true;
            await axios.post(config.baseURL + '/flows-dir-listing', {
                    filename: mainMetal,
                    text: responseMetal,
                    type: 'file'
                }).then(async (response) => {
                    var newFolderName = folderUrl + '/Preview';
                    await axios.post(config.baseURL + '/flows-dir-listing', {
                            foldername: newFolderName,
                            type: 'folder'
                        })
                        .then(async (res) => {
                            console.log(res);
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
                            "<link rel='stylesheet' href='./../main-files/main.css'/>\n" + endhead + "</head><body>\n" +
                            layoutdata.data + topbody +
                            '\n<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/flowz-builder-engine.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/shopping-cart.js"><\/script>\n' +
                            // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/product-search.js"><\/script>'+
                            '<script src="./../main-files/main.js"><\/script>\n' + endbody +
                            '</body>\n</html>';

                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                filename: folderUrl + '/Layout/' + Layout + '.layout',
                                text: newContent,
                                type: 'file'
                            })

                            var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';;

                            if (Layout == 'Blank') {
                                
                                rawContent = '---\nlayout: ' + Layout + '.layout\n---\n' + rawContent
                                
                            } else {
                                let tempValueLayout = '---\nlayout: ' + Layout + '.layout\n---\n';
                                rawContent = tempValueLayout + rawContent
                            }

                            var previewFileName = folderUrl + '/Preview/' + nameF + '.hbs';

                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                    filename: previewFileName,
                                    text: rawContent,
                                    type: 'file'
                                })
                                .then(async (res) => {
                                    this.saveFileLoading = false;

                                    await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then(async (response) => {

                                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                                    filename: mainMetal,
                                                    text: responseMetal,
                                                    type: 'file'
                                                })
                                                .then(async (res) => {
                                                    let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
                                                    previewFile = folderUrl.replace('/var/www/html', '');

                                                    await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                                        .then(async (res) => {
                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                                                            // console.log(res);
                                                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                                                    filename: folderUrl + '/Layout/' + Layout + '.layout',
                                                                    text: layoutdata.data,
                                                                    type: 'file'
                                                                })
                                                                .then(async (res) => {
                                                                    if (vuepartials != undefined && vuepartials.length > 0) {
                                                                        for (let x = 0; x < vuepartials.length; x++) {

                                                                            await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.pluginsPath + '/public/' + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
                                                                                       console.log(res)
                                                                                   })
                                                                                   .catch((e) => {
                                                                                       console.log(e)
                                                                                   })
                                                                        }
                                                                    }
                                                                    console.log("layout file reset")
                                                                    if (Layout == 'Blank') {
                                                                       await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
                                                                            .catch((e) => {
                                                                                console.log("error while deleting blank.layout file")
                                                                            })
                                                                    }

                                                                })

                                                        })
                                                        .catch((e) => {
                                                            console.log(e)
                                                        })
                                                })

                                        })
                                        .catch((err) => {
                                            console.log('error while creating metalsmithJSON file' + err)
                                            axios.post(config.baseURL + '/flows-dir-listing', {
                                            filename: mainMetal,
                                            text: responseMetal,
                                            type: 'file'
                                            })
                                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                            console.log(e)
                                        })
                                })
                                .catch((e) => {
                                    this.saveFileLoading = false
                                    this.$message({
                                        showClose: true,
                                        message: 'File not saved! Please try again.',
                                        type: 'error'
                                    });
                                    axios.post(config.baseURL + '/flows-dir-listing', {
                                    filename: mainMetal,
                                    text: responseMetal,
                                    type: 'file'
                                    })
                                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                    console.log(e)
                                })

                        })
                        .catch((e) => {
                            console.log(e)
                            axios.post(config.baseURL + '/flows-dir-listing', {
                            filename: mainMetal,
                            text: responseMetal,
                            type: 'file'
                            })
                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                        })

                })
                .catch((e) => {
                    console.log('error while creating metalsmithJSON file' + e)
                  axios.post(config.baseURL + '/flows-dir-listing', {
                    filename: mainMetal,
                    text: responseMetal,
                    type: 'file'
                    })
                  axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})

                })


        // Open in new window
        // window.open(config.ipAddress + '/websites/' + this.repoName + '/public/');
        window.open('http://' + this.repoName + '.'+ config.ipAddress + '/public/');

        // Publish with Zeit Now
        axios.post(config.baseURL + '/publish-now', {
            projectName : this.repoName
        })
        .then((res) => {
          let serverUrl = res.data;
          // window.open( serverUrl + '/public/');
          this.$message({
            showClose: true,
            message: 'Successfully Published.',
            type: 'success'
          });
          console.log(res.data);
          this.previewLoader = false;
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: 'Failed! Please try again.',
            type: 'error'
          });
          console.log(e);
          this.previewLoader = false;
        });
      }
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    
    handlePreview(file) {
      console.log(file);
    },
    
    globalImagePreview(file) {
      console.log(file);
    },

    tableRowClassName(row, index) {
      if (index === this.$store.state.currentIndex) {
        return 'positive-row';
      }
      return '';
    },

    exportWebsite(){
      window.open(config.ipAddress + this.$session.get('username') + '/' + this.repoName + '/repository/archive.zip?ref=master');
    },

    async init () {
      this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let url = this.$store.state.fileUrl.replace(/\\/g, "\/");

      let splitUrl = url.split('/');

      let websiteName = splitUrl[(splitUrl.length -1)];


      // this.configData = await axios.get( config.baseURL + '/flows-dir-listing/0?path=' + url + '/assets/config.json');

      this.configData = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + websiteName );

      if(this.configData.status == 200 || this.configData.status == 204){

        this.settings = this.configData.data.data[0].configData;
        this.pluginsTreedata = this.configData.data.data[0].pluginsData;
        this.newRepoId = this.settings[0].repoSettings[0].RepositoryId;
        this.repoName = this.settings[0].repoSettings[0].RepositoryName;
        this.form.brandName = this.settings[1].projectSettings[0].BrandName;
        this.form.brandLogoName = this.settings[1].projectSettings[0].BrandLogoName;
        this.form.seoTitle = this.settings[1].projectSettings[0].ProjectSEOTitle;
        this.form.seoKeywords = this.settings[1].projectSettings[0].ProjectSEOKeywords;
        this.form.seoDesc = this.settings[1].projectSettings[0].ProjectSEODescription;
        this.globalVariables = this.settings[1].projectSettings[1].GlobalVariables;
        this.globalCssVariables = this.settings[1].projectSettings[1].GlobalCssVariables;
        this.ecommerceSettings = this.settings[1].projectSettings[1].EcommerceSettings;
        this.externallinksCSS = this.settings[1].projectSettings[1].ProjectExternalCss;
        this.externallinksJS = this.settings[1].projectSettings[1].ProjectExternalJs;
        this.externallinksMeta = this.settings[1].projectSettings[1].ProjectMetaInfo;
        this.Metacharset=this.settings[1].projectSettings[1].ProjectMetacharset;


        // Old Code for tree data
        // // Getting tree data structure from partials listings
        // let pluginNames = [];

        // pluginNames = Object.keys(this.settings[2].layoutOptions[0]);
        // pluginNames.splice(pluginNames.indexOf('Layout'), 1);

        // let treeData = [];
        // let count = 0;

        // // Loop thru all plugins found
        // for(let i = 0; i < pluginNames.length; i++){
        //   count++;

        //   let partialName = pluginNames[i];

        //   let temp1 = {
        //     id: count,
        //     children: [],
        //     label: partialName,
        //     isActive: true
        //   }

        //   treeData.push(temp1);

        //   // Loop thru all plugin variants
        //   for(let j = 0; j < this.settings[2].layoutOptions[0][partialName].length; j++){
            
        //     count++;

        //     let temp2 = {
        //       id: count,
        //       children: [],
        //       label: this.settings[2].layoutOptions[0][partialName][j].label,
        //       isActive: true
        //     }

        //     treeData[i].children.push(temp2);
        //   }

        // }

        // this.pluginsTreedata = treeData;

        // // Get checked items
        // this.checkedList = getIds(this.pluginsTreedata);

        // function getIds(ma) {       
        //   let ida = []

        //   if (ma instanceof Array) {               
        //     for (let i in ma) {                       
        //       let ii = getIds(ma[i])                        
        //       ida = ida.concat(ii)               
        //     }       
        //   } else if (typeof ma == 'object') {               
        //     if (ma.isActive) { 
        //       ida.push(ma.id) 
        //     }
        //     let ii = getIds(ma.children)                
        //     ida = ida.concat(ii)       
        //   }       
        //   return ida
        // }

        // Set Brand Logo Name
        // if(this.form.brandLogoName != ''){
        //   if (this.form.brandLogoName.length > 18) {
        //       $('#text2').text(this.form.brandLogoName.substr(0, 10)+'...'+this.form.brandLogoName.substr(this.form.brandLogoName.length-8, this.form.brandLogoName.length));
        //       $('.valid').removeClass('error').addClass('correct');
        //       $('.valid i').removeClass('fa-exclamation').addClass('fa-paperclip');
        //    }else{
        //       $('#text2').text(this.form.brandLogoName);
        //       $('.valid').removeClass('error').addClass('correct');
        //       $('.valid i').removeClass('fa-exclamation').addClass('fa-paperclip');
        //   }  
        // } else {
        //   console.log('BrandLogoName not found!');
        // }
        

      } else {
        console.log('Cannot get configurations!');
      } 

      // replace all image tag source with index as name attribute to get the image file preview
      
      for (var i = 0; i < this.globalVariables.length; i++){
        if(this.globalVariables[i].variableType == 'image'){
          let _imageIndex = i;
          axios.get( config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/' + this.globalVariables[i].variableValue, {
          }).then(response => {
            $('[name = ' + _imageIndex + ']').attr('src', response.data);
          }).catch(error => {
            console.log("Some error occured while fetching image: ", error);
          });

        }
      }

      // Get all commits list
      await axios.get( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+this.$session.get('privateToken'), {
      }).then(response => {
        this.commitsData = [];
        for(var i in response.data){
          this.commitsData.push({
            commitDate: response.data[i].created_at,
            commitSHA: response.data[i].id,
            commitsMessage: response.data[i].title, 
          });
        }
      }).catch(error => {
        console.log("Some error occured: ", error);
      });
      

      if(this.commitsData[0]){
        return 'positive-row';
      } 
    },

    changePluginStatus(index, value){
      console.log('Change index: ', index);
      console.log('Change value: ', value);  
    },

    removePluginFromTree(store, data) {
      store.remove(data);

      var ids = getRemove(this.pluginsTreedata, data.id) 

      function getRemove (ma, idm) { 
        if (ma instanceof Array) { 
          let k = _.findIndex(ma, {id:idm}) 
          if (k >= 0) { 
            ma.splice(k,1) 
            return true 
          } 
          for (let i in ma) { 
            let ii = getRemove(ma[i].children, idm) 
            if (ii) return true 
          } 
        } 
        return false 
      }
    },

    renderContent(h, { node, data, store }) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span class="tree-action-button" style="float: right; margin-right: 20px">
            <el-button size="mini" on-click={ () => this.removePluginFromTree(store, data) } type="danger" icon="delete"></el-button>
          </span>
          <span class="tree-action-button" style="float: right; margin-right: 35px">
            <el-switch size="mini"  value={data.isActive} on-change={ (value) => {
              data.isActive = value;
              this.changePluginStatus(data.id, value);
            } } on-text="" off-text=""></el-switch>
          </span>
        </span>
      );
    },

  },

  created () {
    this.init(); 
  },

  async mounted () {

    // Collapsing Divs
    $(document).ready(function($) {
        
        $("#toogleProjectSettings").click(function() {
            $("#toogleProjectSettingsContent").slideToggle("slow");
            if ($("#toogleProjectSettings").text() == "Project Settings") {
                $("#toogleProjectSettings").html("Project Settings")
            } else {
                $("#toogleProjectSettings").text("Project Settings")
            }
        });

        $("#toggleImportPlugin").click(function() {
            $("#toggleImportPluginContent").slideToggle("slow");
            if ($("#toggleImportPlugin").text() == "Import Plugin") {
                $("#toggleImportPlugin").html("Import Plugin")
            } else {
                $("#toggleImportPlugin").text("Import Plugin")
            }
        });

        $("#toggleGlobalVariables").click(function() {
            $("#toggleGlobalVariablesContent").slideToggle("slow");
            if ($("#toggleGlobalVariables").text() == "Global Variables") {
                $("#toggleGlobalVariables").html("Global Variables")
            } else {
                $("#toggleGlobalVariables").text("Global Variables")
            }
        });

        $("#toggleExternalLinks").click(function() {
            $("#toggleExternalLinksContent").slideToggle("slow");
            if ($("#toggleExternalLinks").text() == "External Links") {
                $("#toggleExternalLinks").html("External Links")
            } else {
                $("#toggleExternalLinks").text("External Links")
            }
        });

        $("#toggleMetaTags").click(function() {
            $("#toggleMetaTagsContent").slideToggle("slow");
            if ($("#toggleMetaTags").text() == "Meta Tags") {
                $("#toggleMetaTags").html("Meta Tags")
            } else {
                $("#toggleMetaTags").text("Meta Tags")
            }
        });

        $("#toggleCommits").click(function() {
            $("#toggleCommitsContent").slideToggle("slow");
            if ($("#toggleCommits").text() == "List of Commits") {
                $("#toggleCommits").html("List of Commits")
            } else {
                $("#toggleCommits").text("List of Commits")
            }
        });



    });

    // Brand Image uploader
    let scope = this;

    var iFileSize = 0;
    function imageSize(fileInput){
     var files = fileInput.files;
     for (var i = 0; i < files.length; i++) {
         var file = files[i];
         iFileSize = file.size;
         var imageType = /image.*/;
         if (!file.type.match(imageType)) {
             continue;
         }
     }
    }
    $('#upload-validation').change(function(e){
      imageSize(this);
      var file = $(this)[0].files[0];

      var fileData = '';

      // readFile
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
          // browser completed reading file - display it
          fileData = e.target.result;
      };

      var fileName = e.target.files[0].name;
      var ext = $(this).val().split('.').pop().toLowerCase();
      if($.inArray(ext, ['png', 'jpg']) == -1 && ext != ''){
        $('#text2').text('Invalid image file.');
        $('.valid').addClass('error').removeClass('correct');
        $('.valid i').removeClass('fa-paperclip').addClass('fa-exclamation');
      }else if(iFileSize >= 1024000) {
        $('#text2').text('Too large file.');
        $('.valid').addClass('error').removeClass('correct');
        $('.valid i').removeClass('fa-paperclip').addClass('fa-exclamation');
      }else{
        $('.valid').removeClass('error').addClass('correct');
        $('.valid i').removeClass('fa-exclamation').addClass('fa-paperclip');
        
        setTimeout(function(){
          scope.uploadImage(file, fileData);
        },2000);
        
        if (fileName.length > 18) {
             $('#text2').text(fileName.substr(0, 10)+'...'+fileName.substr(fileName.length-8, fileName.length));
         }else{
            $('#text2').text(fileName);
        }
      }
    });

    // Global Variable JSON uploader
    $('#jsonUploaderBtn').on('click', function(){
      $('[name=uploaderVariableJson]').trigger('click');
    });

    $('[name=uploaderVariableJson]').on('change', function(e){
      var file = $(this)[0].files[0];

      var fileName = e.target.files[0].name;
      var ext = $(this).val().split('.').pop().toLowerCase();

      if(ext != 'json'){
        scope.$message({
            showClose: true,
            message: 'File must be of "JSON" type.',
            type: 'error'
        });
        console.log('File must be of "JSON" type.');
      } else {

        var fileData = '';

        // readFile
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function(e) {
            fileData = await e.target.result;
        };

        setTimeout(function(){
          var jsonFileData = JSON.parse(fileData);
          if(jsonFileData.GlobalVariables && jsonFileData.GlobalCssVariables){
            // New values
            scope.globalVariables = jsonFileData.GlobalVariables;
            scope.globalCssVariables = jsonFileData.GlobalCssVariables;

            scope.saveProjectSettings();
          } else {
            scope.$message({
                showClose: true,
                message: 'Not a Proper variables file.',
                type: 'error'
            });
            console.log('Not a Proper variables file');
          }
        }, 1000);
      }

    });




    // Plugin Json Uploader
    $('#pluginJsonUploaderBtn').on('click', function(){
      $('[name=uploaderPluginJson]').trigger('click');
    });

    $('[name=uploaderPluginJson]').on('change', function(e){
      var file = $(this)[0].files[0];

      var fileName = e.target.files[0].name;
      var ext = $(this).val().split('.').pop().toLowerCase();

      if(ext != 'json'){
        scope.$message({
            showClose: true,
            message: 'File must be of "JSON" type.',
            type: 'error'
        });
        console.log('File must be of "JSON" type.');
      } else {

        var fileData = '';

        // readFile
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function(e) {
            fileData = await e.target.result;
        };

        setTimeout(function(){
          var pluginJsonFileData = JSON.parse(fileData);
          scope.addNewPlugin(pluginJsonFileData);
        }, 1000);
      }

    });
  },
  watch: {
    '$store.state.fileUrl': function(newvalue) {
      this.init()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .publishBtn{
    width: 100%;
  }

  /*Brand Image upload button*/
  input[type="file"]{
    display: none;
  }
  .brandLogoUploadLabel label{
    display: inline-block;
    border: 1px dashed #1a1a1a;
    background: #f1f1f1;
    padding:10px 15px;
    min-width:250px;
    color: #5c5c5c;
    font-size:20px;
    text-align: center;
    cursor: pointer;
    transition:300ms;
  }
  .brandLogoUploadLabel label i{
    vertical-align: middle;
    margin-right:10px;
  }
  .brandLogoUploadLabel label:hover{
    border-style: solid;
  }

  h1{
    font-size:15px;
    margin: 0 0 20px;
  }
  .dis{
    display: block;
    margin-top:6px;
    color:#a9a9a9;
  }
  .error .brandLogoUploadLabel label{
    color:red;
    border-color:red;
    background:#fcd0d0;
  }
  .correct .brandLogoUploadLabel label{
    background:#cff5c5;
  }

  .well{
    background-color: rgba(245,245,245,0.5);
  }









  /*Global Image Upload Buttons*/
  .file-upload {
    position: relative;
    display: inline-block;
  }

  .file-upload__label {
    display: inline;
    padding: 5px;
    padding-left: 7px;
    color: #fff;
    background: #555;
    transition: background .3s;
  }
  .file-upload__label:hover {
    cursor: pointer;
    background: #000;
  }

  .file-upload__input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 1;
    width: 0;
    height: 100%;
    opacity: 0;
  }

  .page-buttons{
    position: fixed;
    bottom: 7px;
    right: 50px;
    margin-top: 17.5px;
    z-index: 10
  }

  @media(max-width: 680px){
    .page-buttons{
      position: relative;
      left: auto;
      right: auto;
    }
  }

  .el-tree{
    max-height: 500px;
    overflow-x: auto;
  }

  /*Show icons on hover in directory tree */

  .el-tree-node:hover > .el-tree-node__content .tree-action-button {
      display: block;
      position: absolute;
      top: 0;
  }

  .tree-action-button {
      display: none;
  }




  /*For Collapsing Divs*/
  .toggleableDivHeaderContent {
      margin-top: 0px;
      margin-bottom: 30px;
      background: #eee;
      width: auto;
      height: auto;
      margin: 0px 5px;
      padding: 15px;
  }
  
  .toggleableDivHeader {
      height: 35px;
      line-height: 15px;
      text-align: center;
      color: black;
      font-weight: bold;
      text-decoration: none;
  }
  
  .card {
      padding: 15px;
      box-shadow: 0px 0px 10px #999;
      transition: 0.2s all linear;
      margin: 20px;
  }
  
  .card:hover {
      box-shadow: 2px 2px 20px #999;
      transition: 0.2s all linear;
  }
  
  .color-div {
      height: 45px;
      display: block;
      padding: 10px 25px;
      line-height: 25px;
      color: #292929;
      text-transform: uppercase;
      border-radius: 5px;
      box-shadow: 0px 0px 5px #aaa;
      transition: 0.2s all linear;
      margin: 5px 5px;
      background: #8e9eab;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #eef2f3, #8e9eab);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .color-div:hover {
      box-shadow: 2px 2px 10px #aaa;
      transition: 0.2s all linear;
  }

  .margin-50{
    margin: 50px;
  }
</style>
