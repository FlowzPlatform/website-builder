<template>
  <div class="PageSettings">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 4%;">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Page name">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="Page Theme">
              <el-select v-model="form.theme" placeholder="Please select page theme">
                <el-option label="Light Theme" value="light"></el-option>
                <el-option label="Dark Theme" value="dark"></el-option>
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
        theme: '',
        seoTitle: '',
        seoKeywords: '',
        seoDesc: ''
      },
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
    savePageSettings() {
      console.log('submit!');
      let PageSettings = {"PageName":this.form.name,"PageTheme":this.form.theme,"PageSEOTitle":this.form.seoTitle,"PageSEOKeywords":this.form.seoKeywords,"PageSEODescription":this.form.seoDesc};

      console.log(PageSettings);

      if(this.currentFileIndex != null){

        console.log('Update existing Page Settings')
        this.settings[1].pageSettings[this.currentFileIndex].PageTheme = this.form.theme;
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
                type: 'danger'
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
        })
        .catch((e) => {
            console.log(e);
            this.$message({
                showClose: true,
                message: 'Cannot save file! Some error occured, try again.',
                type: 'danger'
            });
        })
      }
      
      
    }
  },
  async created () {

    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    let urlparts = url.split("/");
    let fileNameOrginal = urlparts[urlparts.length-1];
    let fileName = '/' + urlparts[urlparts.length-1];
    this.folderUrl = url.replace(fileName, '');

    this.configData = await axios.get( this.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/config.json');
    if(this.configData.status == 200 || this.configData.status == 204){
      this.settings = JSON.parse(this.configData.data);
      
      // Get Current file index
      this.currentFileIndex = daex.indexFirst(this.settings[1].pageSettings,{'PageName':fileNameOrginal});

      this.form.name = fileNameOrginal;
      this.form.theme = this.settings[1].pageSettings[this.currentFileIndex].PageTheme;
      this.form.seoTitle = this.settings[1].pageSettings[this.currentFileIndex].PageSEOTitle;
      this.form.seoKeywords = this.settings[1].pageSettings[this.currentFileIndex].PageSEOKeywords;
      this.form.seoDesc = this.settings[1].pageSettings[this.currentFileIndex].PageSEODescription;

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
