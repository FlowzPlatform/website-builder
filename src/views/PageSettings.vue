<template>
   <div class="PageSettings">
      <!-- Save/Publish/Cancel Buttons -->
      <div class="page-buttons">
         <el-button type="primary" size="small" @click="savePageSettings">Save</el-button>
      </div>
      <div class="container" style="margin-bottom: 100px;">
         <div class="row">
            <div class="col-md-12">
            <div class="collapsingDivWrapper row">
                   <div class="col-md-12">
                       <a href="javascript:void(0)" id="pageSettings" class="card color-div toggleableDivHeader">Page Settings</a>
                   </div>
             </div>
               <div class="toggleableDivHeaderContent" style="" id='pageSettingsContent'>
                  <el-form ref="form" :model="form" label-width="160px">
                     <el-form-item label="Page name">
                        <el-input v-model="form.name" :disabled="true"></el-input>
                     </el-form-item>
                     <el-form-item label="Page Layout">
                        <el-select v-model="form.Layout" @change="layoutChange()" placeholder="Please select Layout">
                           <el-option
                              v-for="item in form.layouts"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                           </el-option>
                        </el-select>
                     </el-form-item>
                     <div id="demo">
                        <div v-for='(n,index) in partialsList'>
                           <el-form-item :label="n ">
                              <el-select @visible-change="layoutChange()" v-model="form.parent_id[n]" placeholder="Please select " >
                                 <el-option v-for="item in AllData[index]" 
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item"
                                    :disabled="item.disabled">
                                 </el-option>
                              </el-select>
                           </el-form-item>
                        </div>
                     </div>
                     <el-form-item label="Page SEO Title">
                        <el-input v-model="form.seoTitle"></el-input>
                     </el-form-item>
                     <hr>
                     <el-form-item label="Following CSS have been included:">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedCss" @change="handleCheckedCssChange">
                           <el-checkbox v-for="css in csses" :label="css" :key="css">{{css}}</el-checkbox>
                        </el-checkbox-group>
                     </el-form-item>
                  </el-form>
               </div>
            </div>
         </div>
         <div class="row">
           <div class="col-md-12">

              <div class="collapsingDivWrapper row">
                 <div class="col-md-12">
                     <a href="javascript:void(0)" id="add-meta-tag" class="card color-div toggleableDivHeader">External Meta Tags</a>
                 </div>
             </div>
             <div  id='add-meta-tagContent' class="toggleableDivHeaderContent" style="display: none;">
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
                               <td>
                                  <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkMeta(index)" icon="delete2"></el-button>
                               </td>
                               <!-- <td><el-button style="min-width: 100%;" icon="plus"></el-button></td> -->
                            </tr>
                            <tr>
                               <td colspan="4">
                                  <el-button type="primary" @click="addNewexternallinkMeta">New Meta Link</el-button>
                               </td>
                            </tr>
                         </tbody>
                         <!-- </draggable> -->
                      </table>
                      <!-- Create new variable -->
                      <!-- <el-button type="primary" @click="addNewexternallinkMeta">New Meta Link</el-button> -->
                      <!-- </el-form> -->
                   </div>
                </div>
             </div>
              <div class="collapsingDivWrapper row">
                 <div class="col-md-12">
                     <a href="javascript:void(0)" id="add-js-css" class="card color-div toggleableDivHeader">Add JS/CSS Links</a>
                 </div>
             </div>
             <div class="toggleableDivHeaderContent" style="display: none;" id='add-js-cssContent'>
                <div class="row">
                   <div class="col-md-12">
                      <div class="row">
                         <div class="col-md-11">
                            <h3> JS Links </h3>
                         </div>
                         <div style="float: right;" class="col-md-1">
                            <el-tooltip class="item" effect="dark" content="To ProjectSetting links" placement="top-start">
                               <el-button type='info' icon="setting"></el-button>
                            </el-tooltip>
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
                                        <el-tooltip class="item" effect="dark" content="Re-position" placement="top-start">
                                          <el-button style="min-width: 100%;" icon="d-caret"></el-button>
                                        </el-tooltip>
                                        
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
                                      <el-tooltip class="item" effect="dark" content="Re-position" placement="top-start">
                                        <el-button style="min-width: 100%;" icon="d-caret"></el-button>
                                      </el-tooltip>
                                     </div>
                                  </div>
                               </el-form-item>
                            </div>
                            <!-- Create new variable -->
                         </draggable>
                      </el-form>
                      <el-button type="primary" @click="addNewexternallinkCSS">New CSS Link</el-button>
                   </div>
                </div>
             </div>

             <div class="collapsingDivWrapper row">
                 <div class="col-md-12">
                     <a href="javascript:void(0)" id="add-local-scripts" class="card color-div toggleableDivHeader">Add Local Scripts</a>
                 </div>
             </div>
             <div class="toggleableDivHeaderContent" style="display: none;" id='add-local-scriptsContent'>
                <div class="row">
                   <div class="col-md-12">
                      <div class="row">
                         <div class="col-md-4">
                            <h3> Scripts: </h3>
                         </div>
                      </div>
                      <hr>
                      <el-form ref="form" :model="form">
                         <div >
                            <el-form-item>
                               <draggable v-model='localpagescripts' @start="drag=true" @end="drag=false">
                                  <div style="margin-bottom: 25px" v-for='(n, index) in localpagescripts' class="row">
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
                                        <el-input type="textarea" :rows="5" placeholder="script" v-model="n.script"></el-input>
                                     </div>
                                     <!-- Delete Variable -->
                                     <div class="col-md-1">
                                        <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelocalscripts(index)" icon="delete2"></el-button>
                                     </div>
                                     <div class="col-md-1">
                                        <el-button style="min-width: 100%;"><i class="fa fa-arrows"></i></el-button>
                                     </div>
                                  </div>
                               </draggable>
                            </el-form-item>
                         </div>
                         <!-- Create new variable -->
                         <el-button type="primary" @click="addNewlocalscripts">New script</el-button>
                      </el-form>
                   </div>
                </div>
             </div>
             <div class="collapsingDivWrapper row">
                 <div class="col-md-12">
                     <a href="javascript:void(0)" id="add-local-styles" class="card color-div toggleableDivHeader">Add Local Styles</a>
                 </div>
             </div>
             <div class="toggleableDivHeaderContent" style="" id='add-local-stylesContent' style="margin-bottom: 100px;display: none;">
                <div class="row">
                   <div class="col-md-12">
                      <div class="row">
                         <div class="col-md-4">
                            <h3> Styles: </h3>
                         </div>
                      </div>
                      <hr>
                      <el-form ref="form" :model="form">
                         <div >
                            <el-form-item>
                               <draggable v-model='localpagestyles' @start="drag=true" @end="drag=false">
                                  <div style="margin-bottom: 25px" v-for='(n, index) in localpagestyles' class="row">
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
                                        <el-input type="textarea" :rows="5" placeholder="css" v-model="n.style"></el-input>
                                     </div>
                                     <!-- Delete Variable -->
                                     <div class="col-md-1">
                                        <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelocalstyles(index)" icon="delete2"></el-button>
                                     </div>
                                     <div class="col-md-1">
                                        <el-button style="min-width: 100%;"><i class="fa fa-arrows"></i></el-button>
                                     </div>
                                  </div>
                               </draggable>
                            </el-form-item>
                         </div>
                         <!-- Create new variable -->
                         <el-button type="primary" @click="addNewlocalstyles">New Style</el-button>
                      </el-form>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </div>
   </div>
</template>

<script>

import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)
import draggable from 'vuedraggable'
var daex = require('json-daex');
import Cookies from 'js-cookie';
const config = require('../config');

import axios from 'axios';

 const cssOptions = ['Bootstrap 3', 'Bootstrap 4', 'Font Awesome', 'Flowz Blocks', 'Google Fonts'];

export default {
  name: 'PageSettings',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        name: '',
        nameSecond:'',
        seoTitle: '',
        Header: '',
        Footer: '',
        Layout: '',
        Sidebar: '',
        Menu: '',
        headers: [],
        footers: [],
        layouts: [],
        secondlayouts: [],
        sidebar: [],
        menu: [],
        parent_id: []
      },
      AllData: [],
      PageLayout: '',
      PageFooter: '',
      PageHeader: '',
      currentFileIndex: '',
      configData: [],
      Data:[],
      settingsData:[],
      currentIndex:'',
      settings: [],
      folderUrl: '',
      partialsList: [],
      partialsListSelection: [],
      defaultParams: [],
      checked2:'',

      checkAll: true,
      checkedCss: [],
      csses: cssOptions,
      isIndeterminate: true,
      externallinksJS:[],
      externallinksCSS:[],
      externallinksMeta:[{
        name: 'Edit Me',
        content: 'Update Me'
      }],
      Allposition:[
      {label:'Start of <head> Tag',value:'starthead'},
       {label:'End of <head> tag',value:'endhead'},
      {label:'Start of <body> Tag',value:'startbody'},
      {label:'End of <body> tag',value:'endbody'}
      ],
      Metacharset:'',
      localpagescripts:[],
      localpagestyles:[]
    }
  },
  components: {
    draggable
  },
  methods: {
    addNewlocalstyles(){
      let newVariable = { linkposition:'',style:''};
      this.localpagestyles.push(newVariable);
    },
    deletelocalstyles(deleteIndex){
      this.localpagestyles.splice(deleteIndex,1);
    },
    handleCheckAllChange(event) {
      this.checkedCss = event.target.checked ? cssOptions : [];
      this.isIndeterminate = false;
      //console.log('Checked items:', this.checkedCss);
    },
    handleCheckedCssChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.csses.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.csses.length;
      //console.log('Checked items:', this.checkedCss);
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
    addNewlocalscripts(){
      let newVariable = { linkposition:'',script:''};
      this.localpagescripts.push(newVariable);
    },
    deletelocalscripts(deleteIndex){
      this.localpagescripts.splice(deleteIndex,1);
    },

    async layoutChange() {
      let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = url.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      this.folderUrl = url.replace(fileName, '');
      for (var i = 0; i < this.form.layouts.length; i++) {
        if (this.form.layouts[i].label === this.form.Layout) {
          let variable = this.form.layouts[i].partialsList;
          this.partialsList = variable;
          this.defaultParams = this.form.layouts[i].defaultList;
        }
      }

      let foldername = this.folderUrl.split('/');
      foldername = foldername[6];

      this.configData = await axios.get(config.baseURL + '/project-configuration/' + foldername);

      this.AllData = [];
      
      if (this.configData.status == 200 || this.configData.status == 204) {

        this.settings = this.configData.data.configData;

        for (var i = 0; i < this.partialsList.length; i++) {

          var nameP = this.partialsList[i];
          if (this.settings[2].layoutOptions[0][nameP]) {

            let change = false;
            for (var j = 0; j < this.defaultParams.length; j++) {
              if (Object.keys(this.defaultParams[j])[0] == nameP) {
                this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
                let tp = this.defaultParams[j][nameP].split('.')
                if (tp[1] == 'hbs') {
                  for (let k = 0; k < (this.AllData[i]).length; k++) {
                    if ((this.AllData[i][k].value).split('.')[0] == tp[0])
                      this.form.parent_id[nameP] = this.AllData[i][k]
                  }
                } else {

                  this.form.parent_id[nameP] = tp[0];
                }

                for (let k = 0; k < Object.keys(this.AllData[i]).length; k++) {
                  this.AllData[i][k]['disabled'] = true;
                }

                change = true
              }
            }
            if (change != true) {
              this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
              if (this.AllData[i].length == 1) {
                this.form.parent_id[nameP] = this.AllData[i][0]
              }
              change = false;
            }
          } else {
            //console.log("Partials not found in config file.")
          }
        }
      }
    },

    async savePageSettings() {
      let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = url.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      this.folderUrl = url.replace(fileName, '');

      let foldername = this.folderUrl.split('/');
      foldername = foldername[6];

      this.Data = await axios.get(config.baseURL + '/project-configuration/' + foldername);

      if (this.Data.status == 200 || this.Data.status == 204) {
        this.settingsData = this.Data.data.configData;
        this.currentIndex = daex.indexFirst(this.settingsData[1].pageSettings, {
          'PageName': fileNameOrginal
        });
        this.form.secondlayouts = this.settingsData[2].layoutOptions[0].Layout;

      } else {
        //console.log('Cannot get config file!');
      }
      for (var i = 0; i < this.form.secondlayouts.length; i++) {
        if (this.form.secondlayouts[i].label === this.form.Layout) {
          this.partialsListSelection = this.form.secondlayouts[i].partialsList;
        }
      }
      var PageSettings = {
        "PageName": this.form.name,
        "PageSEOTitle": this.form.seoTitle,
        "PageLayout": this.form.Layout,
        "partials": [],
        "PageCss": this.checkedCss
      };
      if (this.currentFileIndex != null) {
        this.settings[1].pageSettings[this.currentFileIndex].partials = [];
        this.settings[1].pageSettings[this.currentFileIndex].PageLayout = this.form.Layout;
        this.settings[1].pageSettings[this.currentFileIndex].PageCss = this.checkedCss;

        this.settings[1].pageSettings[this.currentFileIndex].PageExternalJs=this.externallinksJS;
        this.settings[1].pageSettings[this.currentFileIndex].PageExternalCss=this.externallinksCSS;
        this.settings[1].pageSettings[this.currentFileIndex].PageMetaInfo=this.externallinksMeta;
        this.settings[1].pageSettings[this.currentFileIndex].PageSEOTitle=this.form.seoTitle;
        this.settings[1].pageSettings[this.currentFileIndex].PageMetacharset=this.Metacharset;
        this.settings[1].pageSettings[this.currentFileIndex].PageScripts=this.localpagescripts;
        this.settings[1].pageSettings[this.currentFileIndex].PageStyles=this.localpagestyles;

        
        for (let j = 0; j < Object.keys(this.form.parent_id).length; j++) {
          if (this.form.parent_id[Object.keys(this.form.parent_id)[j]].partialsList != undefined) {
            var extraPartial = [];
            var hbsvalue;
            hbsvalue = this.form.parent_id[Object.keys(this.form.parent_id)[j]].value

            extraPartial.push(Object.keys(this.form.parent_id)[j])
            var temp1 = (this.form.parent_id[Object.keys(this.form.parent_id)[j]].defaultList)
            for (let x = 0; x < temp1.length; x++) {
              var obj1 = {};
              obj1[Object.keys(temp1[x])] = temp1[x][Object.keys(temp1[x])].split('.')[0]
              this.settings[1].pageSettings[this.currentFileIndex].partials.push(obj1)
            }

          }
        }
        for (var i = 0; i < this.partialsListSelection.length; i++) {
          for (let z = 0; z < this.AllData[i].length; z++) {
            if (this.AllData[i][z]['disabled'] == true)
              this.AllData[i][z]['disabled'] = false
          }
          let temp = this.partialsListSelection[i]
          var obj = {};
          let change = false;
          for (var j = 0; j < this.defaultParams.length; j++) {
            if (Object.keys(this.defaultParams[j])[0] == temp.trim()) {
              let x = Object.keys(this.defaultParams[j])[0];
              let y = this.defaultParams[j][x].split('.')[0]
              obj[temp] = y;
              change = true;
            }
          }
          if (change != true) {

            // obj[temp] = this.form.parent_id[temp].value;

            if (this.form.parent_id[temp] != undefined) {

              //// console.log("no value defined, hence DEFAULT set:")
              obj[temp] = this.form.parent_id[temp].value;
              change = false;
            } else {
              let self = this;

              setTimeout(function() {
                self.$notify.info({
                  title: 'AutoSet',
                  message: temp + ': Default ',
                  type: 'warning'
                });
              }, 100);

              obj[temp] = 'default'
              change = false;
            }

            // change = false;
          }
          this.settings[1].pageSettings[this.currentFileIndex].partials.push(obj)
        }

        let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + foldername);

        if (rethinkdbCheck.data) {

          // update existing data
          await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.id, {
              configData: this.settings
            })
            .then(async(res) => {
              //console.log(res.data);
            })
            .catch((e) => {
              this.$message({
                showClose: true,
                message: 'Failed! Please try again.',
                type: 'error'
              });
              //console.log(e)
            });

        } else {
          this.$message({
            showClose: true,
            message: 'Data Error.',
            type: 'error'
          });
        }



      } else {
        for (var i = 0; i < this.partialsListSelection.length; i++) {
          let temp = this.partialsListSelection[i]
          var obj = {};
          obj[temp] = this.form.parent_id[temp];
          PageSettings.partials.push(obj)
        }

        this.settings[1].pageSettings.push(PageSettings);

        let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + foldername);

        if (rethinkdbCheck.data) {

          // update existing data
          await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.id, {
              configData: this.settings
            })
            .then(async(res) => {
              //console.log(res.data);
            })
            .catch((e) => {
              this.$message({
                showClose: true,
                message: 'Failed! Please try again.',
                type: 'error'
              });
              //console.log(e)
            });

        } else {
          this.$message({
            showClose: true,
            message: 'Data Error.',
            type: 'error'
          });
        }
      }
    }
  },
  async created () {

    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    let urlparts = url.split("/");
    let fileNameOrginal = urlparts[urlparts.length-1];
    let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
    this.folderUrl = url.replace(fileName, '');

    let foldername = this.folderUrl.split('/');
    foldername = foldername[6];

    this.configData = await axios.get(config.baseURL + '/project-configuration/' + foldername );

    if(this.configData.status == 200 || this.configData.status == 204){
      this.settings = this.configData.data.configData;
      
      // Get Current file index
      this.currentFileIndex = daex.indexFirst(this.settings[1].pageSettings,{'PageName':fileNameOrginal});

      this.form.name = fileNameOrginal;
      this.form.layouts = this.settings[2].layoutOptions[0].Layout;
      
      if('PageSEOTitle' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.form.seoTitle = this.settings[1].pageSettings[this.currentFileIndex].PageSEOTitle;
      } else {
        this.form.seoTitle = '';
      }

      if('PageLayout' in this.settings[1].pageSettings[this.currentFileIndex]){
        //console.log('Layout Found in config', this.settings[1].pageSettings[this.currentFileIndex].PageLayout)
        this.form.Layout = this.settings[1].pageSettings[this.currentFileIndex].PageLayout;
        this.form.extrapartial= this.settings[1].pageSettings[this.currentFileIndex].partials;
      } else {
        this.form.Layout = '';
      }

      if('PageCss' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.checkedCss = this.settings[1].pageSettings[this.currentFileIndex].PageCss;
      } else {
        this.checkedCss = [];
      }

      if('PageMetaInfo' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.externallinksMeta = this.settings[1].pageSettings[this.currentFileIndex].PageMetaInfo;
      } else {
        this.externallinksMeta = [];
      }
       if('PageMetacharset' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.Metacharset = this.settings[1].pageSettings[this.currentFileIndex].PageMetacharset;
      } else {
        this.Metacharset = '';
      }


      if('PageExternalCss' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.externallinksCSS = this.settings[1].pageSettings[this.currentFileIndex].PageExternalCss;
      } else {
        this.externallinksCSS = [];
      }

      if('PageExternalJs' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.externallinksJS = this.settings[1].pageSettings[this.currentFileIndex].PageExternalJs;
      } else {
        this.externallinksJS = [];
      }

      if('PageScripts' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.localpagescripts = this.settings[1].pageSettings[this.currentFileIndex].PageScripts;
      } else {
        this.localpagescripts = [];
      }
      if('PageStyles' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.localpagestyles = this.settings[1].pageSettings[this.currentFileIndex].PageStyles;
      } else {
        this.localpagestyles = [];
      }

      for (var i = 0; i < this.form.layouts.length; i++) {
        if (this.form.layouts[i].label === this.form.Layout) {
          let variable = this.form.layouts[i].partialsList;
          this.partialsList = variable;
          this.defaultParams = this.form.layouts[i].defaultList;
        }
      }

      this.AllData = [];
      //// console.log(this.configData)     Object.keys(this.settings[2].layoutOptions[0]).length
      if (this.configData.status == 200 || this.configData.status == 204) {

        this.settings = this.configData.data.configData;

        for (var i = 0; i < this.partialsList.length; i++) {

          var nameP = this.partialsList[i];
          if (this.settings[2].layoutOptions[0][nameP]) {

            let change = false;
            for (var j = 0; j < this.defaultParams.length; j++) {
              if (Object.keys(this.defaultParams[j])[0] == nameP) {
                this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
                let tp = this.defaultParams[j][nameP].split('.')
                // if (tp[1] == 'hbs') {
                //   for (let k = 0; k < (this.AllData[i]).length; k++) {
                //     if ((this.AllData[i][k].value).split('.')[0] == tp[0])
                //       this.form.parent_id[nameP] = this.AllData[i][k]
                //   }
                // } else {

                  this.form.parent_id[nameP] = tp[0];
                // }

                for (let k = 0; k < Object.keys(this.AllData[i]).length; k++) {
                  this.AllData[i][k]['disabled'] = true;
                }

                change = true
              }
            }
            if (change != true) {
              this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
              //console.log("this.AllData["+i+"]:",this.AllData[i])
              if (this.AllData[i].length === 1) {
                //console.log('only one element')
                this.form.parent_id[nameP] = this.AllData[i][0]
              }
              else{
                for(let j=0;j<this.AllData[i].length;j++){
                  //console.log('Object.keys(this.AllData[i][j]):',this.AllData[i][j].value)
                  for(let k=0;k<this.form.extrapartial.length;k++){
                    if(Object.keys(this.form.extrapartial[k])==nameP){
                      if(this.form.extrapartial[k][Object.keys(this.form.extrapartial[k])]==this.AllData[i][j].value){
                        //console.log("inside")
                        this.form.parent_id[nameP]=this.AllData[i][j]
                        break;
                      }
                    }
                  }
                }
              }
              change = false;
            }
          } else {
            //console.log("Partials not found in config file.")
          }
        }
      }

    } else {
      //console.log('Cannot get config file!');
    }      
  },
  mounted () {
     $(document).ready(function($) {

        $("#add-meta-tag").click(function() {
            $("#add-meta-tagContent").slideToggle("slow");
            if ($("#add-meta-tag").text() == "External Meta Tags") {
                $("#add-meta-tag").html("External Meta Tags")
            } else {
                $("#add-meta-tag").text("External Meta Tags")
            }
        });


        $("#pageSettings").click(function() {
            $("#pageSettingsContent").slideToggle("slow");
            if ($("#pageSettings").text() == "Page Settings") {
                $("#pageSettings").html("Page Settings")
            } else {
                $("#pageSettings").text("Page Settings")
            }
        });
        $("#add-js-css").click(function() {
            $("#add-js-cssContent").slideToggle("slow");
            if ($("#add-js-css").text() == "Add JS/CSS Links") {
                $("#add-js-css").html("Add JS/CSS Links")
            } else {
                $("#add-js-css").text("Add JS/CSS Links")
            }
        });
        $("#add-local-scripts").click(function() {
            $("#add-local-scriptsContent").slideToggle("slow");
            if ($("#add-local-scripts").text() == "Add Local Scripts") {
                $("#add-local-scripts").html("Add Local Scripts")
            } else {
                $("#add-local-scripts").text("Add Local Scripts")
            }
        });
         $("#add-local-styles").click(function() {
            $("#add-local-stylesContent").slideToggle("slow");
            if ($("#add-local-styles").text() == "Add Local Styles") {
                $("#add-local-styles").html("Add Local Styles")
            } else {
                $("#add-local-styles").text("Add Local Styles")
            }
        });
   });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  .cssChecks{
    width: 180px;
  }

  .page-buttons{
    position: fixed;
    bottom: 7px;
    right: 85px;
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
</style>