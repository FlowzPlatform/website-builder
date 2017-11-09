<template>
  <div class="PageSettings">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 4%;">
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

            <!-- <el-form-item label="Page Header">
              <el-row>
                <el-col :span="10">
                  <el-select v-model="form.Header" placeholder="Please select Header">
                    <el-option
                      v-for="item in form.headers"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="Page Footer">
                    <el-select v-model="form.Footer" placeholder="Please select Footer">
                      <el-option
                        v-for="item in form.footers"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="Page Sidebar">
              <el-select v-model="form.Sidebar" placeholder="Please select Sidebar">
                <el-option
                  v-for="item in form.sidebars"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                
            </el-form-item>

            <el-form-item label="Page Menu">
              <el-select v-model="form.Menu" placeholder="Please select Menu">
                <el-option
                  v-for="item in form.menus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                
            </el-form-item> -->

            <div id="demo">
              <div v-for='(n,index) in partialsList'>
                 <el-form-item :label="n ">
                    <el-select  v-model="form.parent_id[n]" placeholder="Please select " >
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

            <el-form-item label="Page SEO Keywords">
              <el-input v-model="form.seoKeywords"></el-input>
            </el-form-item>
            
            <el-form-item label="Page SEO Description">
              <el-input type="textarea" :rows="5" v-model="form.seoDesc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="savePageSettings">Save</el-button>
              <!-- <el-button>Cancel</el-button> -->
            </el-form-item>
          </el-form> 
        </div>
      </div> 
    </div>
    
  </div>
</template>

<script>

import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

var daex = require('json-daex')
const config = require('../config');

import axios from 'axios'

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
        seoKeywords: '',
        seoDesc: '',
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
      defaultParams: []
    }
  },
  component: {
  },
  methods: {

    async layoutChange(){
       let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
       let urlparts = url.split("/");
       let fileNameOrginal = urlparts[urlparts.length - 1];
       let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
       this.folderUrl = url.replace(fileName, '');
       for (var i = 0; i < this.form.layouts.length; i++) {
           if (this.form.layouts[i].label === this.form.Layout) {
               let variable = this.form.layouts[i].partialsList;
               this.partialsList=variable;
               this.defaultParams=this.form.layouts[i].defaultList;
           }
       }

       this.configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
       this.AllData=[];
       // console.log(this.configData)     Object.keys(this.settings[2].layoutOptions[0]).length
       if (this.configData.status == 200 || this.configData.status == 204) {
           
           this.settings = JSON.parse(this.configData.data);
           
           for (var i = 0; i <this.partialsList.length; i++) {

               var nameP = this.partialsList[i];
               if ( this.settings[2].layoutOptions[0][nameP]) {
                   
                   let change=false;
                   for(var j=0;j<this.defaultParams.length;j++){
                      if (Object.keys(this.defaultParams[j])[0]==nameP) {
                      this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
                      let tp=this.defaultParams[j][nameP].split('.')
                      if(tp[1]=='hbs'){
                        for(let k=0;k<(this.AllData[i]).length;k++)
                         {
                          if((this.AllData[i][k].value).split('.')[0]==tp[0])
                            this.form.parent_id[nameP]=this.AllData[i][k]
                         }
                      }else{

                      this.form.parent_id[nameP]=tp[0];
                      }

                     for(let k=0;k<Object.keys(this.AllData[i]).length;k++)
                     {
                      this.AllData[i][k]['disabled']=true;
                     }

                      change=true 
                     }
                   }
                   if (change!=true) {
                    this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
                    if(this.AllData[i].length==1)
                    {
                      this.form.parent_id[nameP]=this.AllData[i][0]
                    }
                     change=false;
                   }     
               } 
               else {
                   console.log("Partials not found in config file.")
               }
           }
       }

       // for(let x=0;x<this.AllData.length;x++){
       //  var checkingValue=false
       //  for(let y=0;y<this.defaultParams.length;y++){

       //    if(Object.keys(this.defaultParams[y])[0]==this.partialsList[x]){
       //      checkingValue=true
            
       //  }

       //  }
       //  if(checkingValue!=true){

       //  this.form.parent_id[this.partialsList[x]]=this.AllData[x][0]
       //  }

       // }
       

    },

    // async layoutChange(){
    //   let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //   let urlparts = url.split("/");
    //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //   let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //   this.folderUrl = url.replace(fileName, '');
    //   console.log("change layout triggered");
    //   for (var i = 0; i < this.form.layouts.length; i++) {
    //     if (this.form.layouts[i].label === this.form.Layout) {
    //       let variable = this.form.layouts[i].partialsList;
    //       this.partialsList = variable;
    //       this.defaultParams = this.form.layouts[i].defaultList;
    //     }
    //   }
    //   console.log("partials:", this.partialsList)

    //   console.log("defaultList:", this.defaultParams)

    //   for (i = 0; i < this.partialsList.length; i++) {
    //     console.log("i:", this.partialsList[i])
    //   }

    //   this.configData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
    //   this.AllData = [];
    //   if (this.configData.status == 200 || this.configData.status == 204) {
    //     console.log("@@@@@@@@@@@@@")
    //     this.settings = JSON.parse(this.configData.data);

    //     for (var i = 0; i < this.partialsList.length; i++) {

    //       var nameP = this.partialsList[i];
    //       console.log("nameP:", nameP)
    //       if (this.settings[2].layoutOptions[0][nameP]) {

    //         let change = false;
    //         for (var j = 0; j < this.defaultParams.length; j++) {
    //           if (Object.keys(this.defaultParams[j])[0] == nameP) {
    //             console.log("default value found ");
    //             this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
    //             let tp = this.defaultParams[j][nameP].split('.')
    //             console.log("tp:", tp)
    //             if (tp[1] == 'hbs') {
    //               for (let k = 0; k < (this.AllData[i]).length; k++) {
    //                 console.log("this.AllData[i][k].value:", (this.AllData[i][k].value).split('.')[0])

    //                 if ((this.AllData[i][k].value).split('.')[0] == tp[0])
    //                   this.form.parent_id[nameP] = this.AllData[i][k]
    //               }
    //             } else {

    //               this.form.parent_id[nameP] = tp[0]
    //             }
    //             console.log("parent_id:", this.form.parent_id)

    //             for (let k = 0; k < Object.keys(this.AllData[i]).length; k++) {
    //               console.log("i of AllData:", this.AllData[i][k])
    //               this.AllData[i][k]['disabled'] = true;
    //             }

    //             change = true
    //           }
    //         }
    //         if (change != true) {
    //           this.AllData[i] = this.settings[2].layoutOptions[0][nameP]
    //           if (this.AllData[i].length == 1) {
    //             this.form.parent_id[nameP] = this.AllData[i][0]
    //           }
    //           console.log("not found default , data of ", nameP, ":", this.AllData[i]);
    //           change = false;
    //         }
    //       } else {
    //         console.log("partials not found in config file.")
    //       }
    //     }
    //   }
    //   console.log("AllData:", this.AllData)
    //   console.log("partials:", this.partialsList);
    // },



    async savePageSettings() {
      let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = url.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
      this.folderUrl = url.replace(fileName, '');
      this.Data = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
      if (this.Data.status == 200 || this.Data.status == 204) {
          this.settingsData = JSON.parse(this.Data.data);
          this.currentIndex = daex.indexFirst(this.settingsData[1].pageSettings, {
              'PageName': fileNameOrginal
          });
          this.form.secondlayouts = this.settingsData[2].layoutOptions[0].Layout;

      } else {
          console.log('Cannot get config file!');
      }
      for (var i = 0; i < this.form.secondlayouts.length; i++) {
        if (this.form.secondlayouts[i].label === this.form.Layout) {
            this.partialsListSelection = this.form.secondlayouts[i].partialsList;
        }
      }
      var PageSettings = {
          "PageName": this.form.name,
          "PageSEOTitle": this.form.seoTitle,
          "PageSEOKeywords": this.form.seoKeywords,
          "PageSEODescription": this.form.seoDesc,
          "PageLayout": this.form.Layout,
          "partials": []
      };
      if (this.currentFileIndex != null) {
          this.settings[1].pageSettings[this.currentFileIndex].partials = [];
          this.settings[1].pageSettings[this.currentFileIndex].PageLayout = this.form.Layout;

          for (let j = 0; j < Object.keys(this.form.parent_id).length; j++) {
            if (this.form.parent_id[Object.keys(this.form.parent_id)[j]].partialsList != undefined) {
              var extraPartial = [];
              var hbsvalue;
              hbsvalue = this.form.parent_id[Object.keys(this.form.parent_id)[j]].value

              if (hbsvalue.indexOf('hbs') <= -1) {
                  this.form.parent_id[Object.keys(this.form.parent_id)[j]].value = this.form.parent_id[Object.keys(this.form.parent_id)[j]].value + '.hbs'
              }
              extraPartial.push(Object.keys(this.form.parent_id)[j])
              var temp1 = (this.form.parent_id[Object.keys(this.form.parent_id)[j]].defaultList)
              for (let x = 0; x < temp1.length; x++) {
                  var obj1 = {};
                  obj1[Object.keys(temp1[x])] = temp1[x][Object.keys(temp1[x])]
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
                      let y = this.defaultParams[j][x]
                      obj[temp] = y;
                      change = true;
                  }
              }
              if (change != true) {

                  // obj[temp] = this.form.parent_id[temp].value;

                  if(this.form.parent_id[temp] != undefined){
                    
                    // console.log("no value defined, hence DEFAULT set:")
                    obj[temp] = this.form.parent_id[temp].value;
                      change = false;
                  }else{
                    let self = this;
                    
                    setTimeout(function(){
                      self.$notify.info({
                          title: 'AutoSet',
                          message: temp+': Default ',
                          type: 'warning'
                        });  
                    },100);
                    
                    obj[temp]='default'
                    change = false;
                  }

                  // change = false;
              }
              this.settings[1].pageSettings[this.currentFileIndex].partials.push(obj)
          }
          let newfilename = this.folderUrl + '/assets/config.json';
          axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: newfilename,
                  text: JSON.stringify(this.settings),
                  type: 'file'
              })
              .then((res) => {
                  this.$message({
                      showClose: true,
                      message: 'Config Saved!',
                      type: 'success'
                  });
              })
              .catch((e) => {
                  console.log(e);
                  this.$message({
                      showClose: true,
                      message: 'Cannot save config file! Some error occured, try again.',
                      type: 'error'
                  });
              })

        } else {
          for (var i = 0; i < this.partialsListSelection.length; i++) {
            let temp = this.partialsListSelection[i]
            var obj = {};
            obj[temp] = this.form.parent_id[temp];
            PageSettings.partials.push(obj)
          }
          this.settings[1].pageSettings.push(PageSettings);
          let newfilename = this.folderUrl + '/assets/config.json';
          axios.post(config.baseURL + '/flows-dir-listing', {
              filename: newfilename,
              text: JSON.stringify(this.settings),
              type: 'file'
          })
          .then((res) => {
              console.log(res);
              this.$message({
                  showClose: true,
                  message: 'Config Saved!',
                  type: 'success'
              });
          })
          .catch((e) => {
              console.log(e);
              this.$message({
                  showClose: true,
                  message: 'Cannot save file! Some error occured, try again.',
                  type: 'error'
              });
          })
        }
    }

    // Befor auto Folder metal smith 26-Oct Before Demo
    // async savePageSettings() {

    //   let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //   let urlparts = url.split("/");
    //   let fileNameOrginal = urlparts[urlparts.length - 1];
    //   let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
    //   this.folderUrl = url.replace(fileName, '');

    //   this.Data = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
    //   if (this.Data.status == 200 || this.Data.status == 204) {
          
    //     this.settingsData = JSON.parse(this.Data.data);
    //     this.currentIndex = daex.indexFirst(this.settingsData[1].pageSettings, {
    //         'PageName': fileNameOrginal
    //     });
    //     this.form.nameSecond = fileNameOrginal;
    //     this.form.secondlayouts = this.settingsData[2].layoutOptions[0].Layout;
          
    //   } else {
    //       console.log('Cannot get config file!');
    //   }

    //   for (var i = 0; i < this.form.secondlayouts.length; i++) {
    //     if (this.form.secondlayouts[i].label === this.form.Layout) {
    //         this.partialsListSelection = this.form.secondlayouts[i].partialsList;
    //     }
    //   }

    //   var PageSettings = {
    //     "PageName": this.form.name,
    //     "PageSEOTitle": this.form.seoTitle,
    //     "PageSEOKeywords": this.form.seoKeywords,
    //     "PageSEODescription": this.form.seoDesc,
    //     "PageLayout": this.form.Layout,
    //     "partials": []
    //   };

    //   if (this.currentFileIndex != null) {

    //     this.settings[1].pageSettings[this.currentFileIndex].partials = [];
    //     this.settings[1].pageSettings[this.currentFileIndex].PageLayout = this.form.Layout;

    //     for (var i = 0; i < this.partialsListSelection.length; i++) {
    //         let temp = this.partialsListSelection[i]
    //         var obj = {};

    //         let change = false;
    //         if (change != true) {
    //             obj[temp] = this.form.parent_id[temp];
    //             change = false;
    //         }

    //         this.settings[1].pageSettings[this.currentFileIndex].partials.push(obj);
    //     }


    //     let newfilename = this.folderUrl + '/assets/config.json';
    //     axios.post(config.baseURL + '/flows-dir-listing', {
    //         filename: newfilename,
    //         text: JSON.stringify(this.settings),
    //         type: 'file'
    //     })
    //     .then((res) => {

    //         this.$message({
    //             showClose: true,
    //             message: 'Config Saved!',
    //             type: 'success'
    //         });

    //     })
    //     .catch((e) => {
    //         console.log(e);
    //         this.$message({
    //             showClose: true,
    //             message: 'Cannot save config file! Some error occured, try again.',
    //             type: 'error'
    //         });
    //     })

    //   } else {
    //     for (var i = 0; i < this.partialsListSelection.length; i++) {
    //         let temp = this.partialsListSelection[i]
    //         var obj = {};

    //         obj[temp] = this.form.parent_id[temp];
    //         PageSettings.partials.push(obj)

    //     }

    //     this.settings[1].pageSettings.push(PageSettings);

    //     let newfilename = this.folderUrl + '/assets/config.json';
    //     axios.post(config.baseURL + '/flows-dir-listing', {
    //         filename: newfilename,
    //         text: JSON.stringify(this.settings),
    //         type: 'file'
    //     })
    //     .then((res) => {

    //         this.$message({
    //             showClose: true,
    //             message: 'Config Saved!',
    //             type: 'success'
    //         });

    //     })
    //     .catch((e) => {
    //         console.log(e);
    //         this.$message({
    //             showClose: true,
    //             message: 'Cannot save file! Some error occured, try again.',
    //             type: 'error'
    //         });
    //     })
    //   }
    // }

  },
  async created () {

    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    let urlparts = url.split("/");
    let fileNameOrginal = urlparts[urlparts.length-1];
    let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
    this.folderUrl = url.replace(fileName, '');

    this.configData = await axios.get( config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
    if(this.configData.status == 200 || this.configData.status == 204){
      this.settings = JSON.parse(this.configData.data);
      
      // Get Current file index
      this.currentFileIndex = daex.indexFirst(this.settings[1].pageSettings,{'PageName':fileNameOrginal});

      this.form.name = fileNameOrginal;
      this.form.layouts = this.settings[2].layoutOptions[0].Layout;
      
      if('PageSEOTitle' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.form.seoTitle = this.settings[1].pageSettings[this.currentFileIndex].PageSEOTitle;
      } else {
        this.form.seoTitle = '';
      }

      if('PageSEOKeywords' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.form.seoKeywords = this.settings[1].pageSettings[this.currentFileIndex].PageSEOKeywords;
      } else {
        this.form.seoKeywords = '';
      }

      if('PageSEODescription' in this.settings[1].pageSettings[this.currentFileIndex]){
        this.form.seoDesc = this.settings[1].pageSettings[this.currentFileIndex].PageSEODescription;
      } else {
        this.form.seoDesc = '';
      }

      if('PageLayout' in this.settings[1].pageSettings[this.currentFileIndex]){
        console.log('Layout Found in config', this.settings[1].pageSettings[this.currentFileIndex].PageLayout)
        this.form.Layout = this.settings[1].pageSettings[this.currentFileIndex].PageLayout;
      } else {
        this.form.Layout = '';
      }

    } else {
      console.log('Cannot get config file!');
    }   
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
