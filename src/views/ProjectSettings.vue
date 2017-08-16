<template>
  <div class="ProjectSettings">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 4%;">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Project name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Project Layout">
              <el-select v-model="form.layout" placeholder="Please select poject layout">
                <el-option label="Full-width Layout" value="full"></el-option>
                <el-option label="Boxed-Width Layout" value="boxed"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Project Theme">
              <el-select v-model="form.theme" placeholder="Please select page theme">
                <el-option label="Light Theme" value="light"></el-option>
                <el-option label="Dark Theme" value="dark"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Project SEO Title">
              <el-input v-model="form.seoTitle"></el-input>
            </el-form-item>

            <el-form-item label="Project SEO Keywords">
              <el-input v-model="form.seoKeywords"></el-input>
            </el-form-item>
            
            <el-form-item label="Project SEO Description">
              <el-input type="textarea" :rows="5" v-model="form.seoDesc"></el-input>
            </el-form-item>

            <!-- <el-form-item label="Favicon">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="form.fileList">
                <el-button size="small" type="primary">Click to upload</el-button>
                <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
              </el-upload>
            </el-form-item>  -->       

            <el-form-item>
              <el-button type="primary" @click="saveProjectSettings">Save</el-button>
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

import axios from 'axios'

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
        layout: '',
        theme: '',
        seoTitle: '',
        seoKeywords: '',
        seoDesc: '',
        // fileList: [{name: 'favicon.ico', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      }
    }
  },
  component: {
  },
  methods: {
    saveProjectSettings() {
      let ProjectSettings = [{"projectSettings":[{"ProjectName": this.form.name,"ProjectLayout":this.form.layout,"ProjectTheme":this.form.theme,"ProjectSEOTitle":this.form.seoTitle,"ProjectSEOKeywords": this.form.seoTitle,"ProjectSEODescription":this.form.seoDesc}],"pageSettings":[{"PageName":"Project 1","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":["key1","key2","key3"],"PageSEODescription":"Some description"},{"PageName":"Page 2","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":["key1","key2","key3"],"PageSEODescription":"Some description"},{"PageName":"Page 3","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":["key1","key2","key3"],"PageSEODescription":"Some description"}]}];

      console.log(ProjectSettings);

      let newfilename = this.$store.state.fileUrl + '/assets/config.json';
      axios.post('http://localhost:3030/flows-dir-listing', {
          filename : newfilename,
          text : JSON.stringify(ProjectSettings),
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
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  async mounted () {
    // console.log(this.$store.state.fileUrl);
    let url = this.$store.state.fileUrl;
    let response = await axios.get('http://localhost:3030/flows-dir-listing/0?path=' + url + '/assets/config.json');
    if(response.status == 200 || response.status == 204){
      let settings = JSON.parse(response.data);
      this.form.name = settings[0].projectSettings[0].ProjectName;
      this.form.layout = settings[0].projectSettings[0].ProjectLayout;
      this.form.theme = settings[0].projectSettings[0].ProjectTheme;
      this.form.seoTitle = settings[0].projectSettings[0].ProjectSEOTitle;
      this.form.seoKeywords = settings[0].projectSettings[0].ProjectSEOKeywords;
      this.form.seoDesc = settings[0].projectSettings[0].ProjectSEODescription;
    } else {
      console.log('Cannot get config file!');
    }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input[type=file]{
  display: none;
}
</style>
