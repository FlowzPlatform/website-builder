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
              <el-select v-model="form.Layout" placeholder="Please select Layout">
                <el-option
                  v-for="item in form.layouts"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                
            </el-form-item>

            <el-form-item label="Page Header">
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
                
            </el-form-item>

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
              <el-button>Cancel</el-button>
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
        sidebars: [],
        menus: []
      },
      PageLayout: '',
      PageFooter: '',
      PageHeader: '',
      PageSidebar: '',
      baseURL: 'http://localhost:3030',
      currentFileIndex: '',
      configData: [],
      settings: [],
      folderUrl: ''
    }
  },
  component: {
  },
  methods: {
    async savePageSettings() {
      // let newContent = this.$store.state.content;

      // let tempValueLayout='---\nlayout: '+this.PageLayout+'.layout\n---\n';

      // console.log("tempValueLayout:"+tempValueLayout)

      // if (newContent.match('---')) {
      //   let substr = newContent.substr(newContent.search('---'), newContent.search('<'))
      //   console.log("substr:" + substr)
      //   newContent=newContent.replace(substr,tempValueLayout)
      // } else{
      //   newContent = tempValueLayout+ this.$store.state.content;
      // }

      // this.PageLayout = '';

      let PageSettings = {"PageName":this.form.name,"PageHeader":this.form.Header,"PageFooter":this.form.Footer,"PageLayout":this.form.Layout, "PageMenu":this.form.Menu, "PageSidebar":this.form.Sidebar, "PageSEOTitle": this.form.seoTitle, "PageSEOKeywords": this.form.seoKeywords, "PageSEODescription": this.form.seoDesc};

      if(this.currentFileIndex != null){

        console.log('Update existing Page Settings');
        this.settings[1].pageSettings[this.currentFileIndex].PageHeader = this.form.Header;
        this.settings[1].pageSettings[this.currentFileIndex].PageFooter = this.form.Footer;
        this.settings[1].pageSettings[this.currentFileIndex].PageLayout = this.form.Layout;
        this.settings[1].pageSettings[this.currentFileIndex].PageSidebar = this.form.Sidebar;
        this.settings[1].pageSettings[this.currentFileIndex].PageMenu = this.form.Menu;
        this.settings[1].pageSettings[this.currentFileIndex].PageSEOTitle = this.form.seoTitle;
        this.settings[1].pageSettings[this.currentFileIndex].PageSEOKeywords = this.form.seoKeywords;
        this.settings[1].pageSettings[this.currentFileIndex].PageSEODescription = this.form.seoDesc;  

        let newfilename = this.folderUrl + '/assets/config.json';
        axios.post( this.baseURL + '/flows-dir-listing', {
            filename : newfilename,
            text : JSON.stringify(this.settings),
            type : 'file'
        })
        .then((res) => {
          
            this.$message({
                showClose: true,
                message: 'Config Saved!',
                type: 'success'
            });

            // axios.post('http://localhost:3030/flows-dir-listing', {
            //     filename : this.$store.state.fileUrl,
            //     text : newContent,
            //     type : 'file'
            // })
            // .then((res) => {
            //     alert('Inside Newcontent Save')
            //     this.saveFileLoading = false
            //     this.$message({
            //         showClose: true,
            //         message: 'File Layout Updated!',
            //         type: 'success'
            //     });
            // })
            // .catch((e) => {
            //     this.saveFileLoading = false
            //     this.$message({
            //         showClose: true,
            //         message: 'File not Updated! Please try again.',
            //         type: 'error'
            //     });
            //     console.log(e)
            // })
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
        console.log('Create new Page Settings');

        this.settings[1].pageSettings.push(PageSettings);

        let newfilename = this.folderUrl + '/assets/config.json';
        axios.post( this.baseURL + '/flows-dir-listing', {
            filename : newfilename,
            text : JSON.stringify(this.settings),
            type : 'file'
        })
        .then((res) => {
            console.log(res);
            this.$message({
                showClose: true,
                message: 'Config Saved!',
                type: 'success'
            });

            // axios.post('http://localhost:3030/flows-dir-listing', {
            //     filename : this.$store.state.fileUrl,
            //     text : newContent,
            //     type : 'file'
            // })
            // .then((res) => {
            //     this.saveFileLoading = false
            //     this.$message({
            //         showClose: true,
            //         message: 'File Layout Updated!',
            //         type: 'success'
            //     });
            // })
            // .catch((e) => {
            //     this.saveFileLoading = false
            //     this.$message({
            //         showClose: true,
            //         message: 'File not Updated! Please try again.',
            //         type: 'error'
            //     });
            //     console.log(e)
            // })
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
  },
  async created () {

    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    let urlparts = url.split("/");
    let fileNameOrginal = urlparts[urlparts.length-1];
    let fileName = '/' + urlparts[urlparts.length-2] + '/' + urlparts[urlparts.length-1];
    this.folderUrl = url.replace(fileName, '');

    this.configData = await axios.get( this.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
    if(this.configData.status == 200 || this.configData.status == 204){
      this.settings = JSON.parse(this.configData.data);
      
      // Get Current file index
      this.currentFileIndex = daex.indexFirst(this.settings[1].pageSettings,{'PageName':fileNameOrginal});

      this.form.name = fileNameOrginal;

      // console.log(fileNameOrginal);
      // console.log('Page seo title', this.settings[1].pageSettings[this.currentFileIndex]);

      this.form.headers = this.settings[2].layoutOptions[0].headers;
      this.form.footers = this.settings[2].layoutOptions[0].footers;
      this.form.layouts = this.settings[2].layoutOptions[0].layouts;
      this.form.sidebars = this.settings[2].layoutOptions[0].sidebar;
      this.form.menus = this.settings[2].layoutOptions[0].menu;

      this.form.Header = this.settings[1].pageSettings[this.currentFileIndex].PageHeader;
      this.form.Footer = this.settings[1].pageSettings[this.currentFileIndex].PageFooter;
      this.form.Layout = this.settings[1].pageSettings[this.currentFileIndex].PageLayout;
      this.form.Sidebar = this.settings[1].pageSettings[this.currentFileIndex].PageSidebar;
      this.form.Menu = this.settings[1].pageSettings[this.currentFileIndex].PageMenu;
      
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
