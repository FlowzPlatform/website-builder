<template>
  <div class="ProjectSettings">
    <div class="container">
      <div class="thumbnail">
        <div class="row">
          <div class="col-md-10">
            <el-input v-model="commitMessage" placeholder="Enter Commit Message"></el-input>
          </div>
          <div class="col-md-2">
            <el-button class="publishBtn" type="success" @click="publishWebsite()">Publish Site</el-button>
          </div>
        </div>
      </div>
      <div class="row thumbnail">
        
        <div class="col-md-12" style="margin-top: 4%;">
          
          <el-form ref="form" :model="form" label-width="120px">

          <el-form-item label="Repository Id:">
              <el-input v-model="newRepoId" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="Project name">
              <el-input v-model="repoName" :disabled="true"></el-input>
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
              <el-button type="primary" @click="saveProjectSettings">Save Settings</el-button>
              <el-button>Cancel</el-button>
              
            </el-form-item>
          </el-form> 

          

        </div>
      </div> 

      <div class="row">
        <div id="tablecommits" class="col-md-12" style="margin-bottom: 100px; z-index: 0">
          <h3>List of Commits</h3>
          <hr>
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
      },
      commitsData: [],
      commitMessage: '',
      baseURL: 'http://localhost:3030',
      newRepoId: '',
      repoName: '',
      configData: []
    }
  },
  component: {
  },
  methods: {
    saveProjectSettings() {
      

      let ProjectSettings = [ {"repoSettings": [{"RepositoryId" : this.newRepoId, "RepositoryName": this.repoName}]} ,{"projectSettings":[{ "RepositoryId" : this.newRepoId, "ProjectName": this.repoName,"ProjectLayout":this.form.layout,"ProjectTheme":this.form.theme,"ProjectSEOTitle":this.form.seoTitle,"ProjectSEOKeywords": this.form.seoTitle,"ProjectSEODescription":this.form.seoDesc}],"pageSettings":[{"PageName":"Project 1","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":["key1","key2","key3"],"PageSEODescription":"Some description"},{"PageName":"Page 2","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":["key1","key2","key3"],"PageSEODescription":"Some description"},{"PageName":"Page 3","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":["key1","key2","key3"],"PageSEODescription":"Some description"}]}];

      console.log(ProjectSettings);

      let newfilename = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/assets/config.json';
      axios.post( this.baseURL + '/flows-dir-listing', {
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
    },




    revertCommit(index) {
      // console.log($('#tablecommits .el-table__body-wrapper').find('tr').eq(index))
      $('#tablecommits .el-table__body-wrapper').find('tr').removeClass('positive-row');
      $('#tablecommits .el-table__body-wrapper').find('tr').eq(index).addClass('positive-row')

      console.log(this.commitsData[index].commitSHA);
      axios.post( this.baseURL + '/commit-service?projectId='+this.newRepoId+'&branchName=master&sha=' + this.commitsData[index].commitSHA + '&repoName='+ this.repoName, {
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



    publishWebsite() {
      console.log('Publish Website');

      // Push repository changes
      axios.post(this.baseURL + '/gitlab-add-repo', {
        commitMessage: this.commitMessage,
        repoName: this.repoName
      }).then(response => {
        console.log(response.data);
        this.$message({
          message: 'Successfully published the website.',
          type: 'success'
        });
      }).catch(error => {
        console.log("Some error occured: ", error);
      }) 
    },

    tableRowClassName(row, index) {
      if (index === 0) {
        return 'positive-row';
      }
      return '';
    }
  },
  async created () {
    // console.log(this.$store.state.fileUrl);
    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    this.configData = await axios.get( this.baseURL + '/flows-dir-listing/0?path=' + url + '/assets/config.json');
    if(this.configData.status == 200 || this.configData.status == 204){
      console.log(this.configData);
      let settings = JSON.parse(this.configData.data);
      console.log(settings);
      this.newRepoId = settings[0].repoSettings[0].RepositoryId;
      this.repoName = settings[0].repoSettings[0].RepositoryName;
      this.form.layout = settings[1].projectSettings[0].ProjectLayout;
      this.form.theme = settings[1].projectSettings[0].ProjectTheme;
      this.form.seoTitle = settings[1].projectSettings[0].ProjectSEOTitle;
      this.form.seoKeywords = settings[1].projectSettings[0].ProjectSEOKeywords;
      this.form.seoDesc = settings[1].projectSettings[0].ProjectSEODescription;
    } else {
      console.log('Cannot get config file!');
    } 


    await axios.get( this.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+this.$session.get('privateToken'), {
    }).then(response => {
      console.log(response.data);
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

  async mounted () {
    // this.newRepoId = this.$session.get('newRepoId');
    // this.repoName = this.$session.get('repoName');
    // Demo User token 4KQWGKhJu1ngdvyUoAoz
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input[type=file]{
  display: none;
}

.publishBtn{
  width: 100%;
}

.thumbnail{
  padding: 15px 20px;
  margin-top: 4%;
}

.el-table .positive-row {
  background: #e2f0e4;
}
</style>
