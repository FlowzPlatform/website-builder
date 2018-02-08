<template>
  <div class="ProjectStats">
    <div class="page-buttons">
      <el-button type="info" size="small" @click="previewWebsite" v-loading.fullscreen.lock="fullscreenLoading">Preview Website</el-button>
      <!-- <el-button type="success" size="small" @click="goToProjectSettings">Project Settings</el-button> -->
    </div>
  	<div class="container-fluid">
    	<div class="row" style="margin-top: 20px;">
       <!-- <div class="col-md-12">
         <div class="card">
            <h3>Project Name: <span class="project-name">{{repoName}}<small title="Project Id"><i> ({{newRepoId}})</i></small></span></h3>
            <hr>
            <el-form ref="form" :model="form" label-width="180px">

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
       </div>  --> 
       <div class="col-md-3">
          <div class="color-div block-4">
            <h1 class="title counter" v-bind:data-count="counts.layouts">{{counts.layouts}}</h1>
            <h3 class="pull-right subtitle">Layouts</h3>
          </div>  
       </div>

       <div class="col-md-3">
          <div class="color-div block-6">
            <h1 class="title counter" v-bind:data-count="counts.pages">{{counts.pages}}</h1>
            <h3 class="pull-right subtitle">Pages</h3>
          </div>  
       </div>

       <div class="col-md-3">
          <div class="color-div block-2">
            <h1 class="title counter" v-bind:data-count="counts.variables">{{counts.variables}}</h1>
            <h3 class="pull-right subtitle">Variables</h3>
          </div>  
       </div>

       <div class="col-md-3">
          <div class="color-div block-7">
            <h1 class="title counter" v-bind:data-count="counts.partials">{{counts.partials}}</h1>
            <h3 class="pull-right subtitle">Partials</h3>
          </div>  
       </div>
       

      </div>

      <div class="row" style="margin-top: 40px;">
        <div class="col-md-12">
          <div class="creative-table">
            <div class="table-title title-style-1">
              <h4>{{repoName}}</h4>
              <p>Repository Id: {{newRepoId}}</p>
            </div>
            <div class="table-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <td width="100px">Sr. No.</td>
                    <td width="40%">Page Name</td>
                    <td>Layout</td>
                  </tr>
                </thead>
                <tbody>
                  <!-- {{tablePagesData}} -->
                  <tr v-for="item in tablePagesData">
                    <td>{{item.number}}</td>
                    <td>{{item.pageName}}</td>
                    <td>{{item.layoutName}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top: 40px;">
        <div class="col-md-12">
          <div class="creative-table">
            <div class="table-title ">
              <h4>Project Details</h4>
              <p>Other important Project Details</p>
            </div>
            <div class="table-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <td width="20%">Title.</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  <!-- {{tablePagesData}} -->
                  <tr>
                    <td>Project SEO Title:</td>
                    <td><a id="seoTitle" data-title="Project SEO Title">{{seoTitle}}</a></td>
                  </tr>
                  <tr>
                    <td>Project SEO Keywords:</td>
                    <td><a id="seoKeywords" data-title="Project SEO Keywords">{{seoKeywords}}</a></td>
                  </tr>
                  <tr>
                    <td>Project SEO Description:</td>
                    <td><a id="seoDesc" data-type="textarea" data-pk="1">{{seoDesc}}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- List of Commits -->
      <div class="row" style="margin-top: 40px; margin-bottom: 50px;">
        <div class="col-md-12">
          <div class="creative-table">
            <div class="table-title title-style-2">
              <h4>Project Commits</h4>
              <p>List of your project revisions</p>
            </div>
            <div class="table-body">
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
                
                <!-- <el-table-column
                  label="Revert To Commit"
                  width="180">
                  <template scope="scope">
                    <el-button @click.native.prevent="revertCommit(scope.$index, commitsData)" type="primary" size="small">Restore</el-button>
                  </template>
                </el-table-column> -->
              </el-table>
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

import axios from 'axios';
import Cookies from 'js-cookie';

const config = require('../config');

export default {
  name: 'ProjectStats',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      newRepoId: '',
      repoName: '',
      seoTitle: '',
      seoKeywords: '',
      seoDesc: '',
      tablePagesData: [],
      counts: {
        layouts: 0,
        pages: 0,
        variables: 0,
        partials: 0
      },
      commitsData: [],
      commitMessage: '',
      fullscreenLoading: false
    }
  },
  component: {
  },
  methods: {
    revertCommit(index) {
      this.$store.state.currentIndex = index;
      $('#tablecommits .el-table__body-wrapper').find('tr').removeClass('positive-row');
      $('#tablecommits .el-table__body-wrapper').find('tr').eq(index).addClass('positive-row')

      //// console.log(this.commitsData[index].commitSHA);
      axios.post( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&branchName=master&sha=' + this.commitsData[index].commitSHA + '&repoName='+ this.repoName + '&userDetailId='+ Cookies.get('userDetailId'), {
      }).then(response => {
        //console.log(response.data);
        this.$message({
          message: 'Successfully reverted to selected commit.',
          type: 'success'
        });
      }).catch(error => {
        //console.log("Some error occured: ", error);
      })
    },

    tableRowClassName(row, index) {
      if (index === this.$store.state.currentIndex) {
        return 'positive-row';
      }
      return '';
    },

    previewWebsite(){
      // Open in new window
      if(process.env.NODE_ENV !== 'development'){
        window.open('http://' + Cookies.get('userDetailId') + '.' + this.repoName + '.'+ config.ipAddress);
      } else {
        window.open(config.ipAddress +'/websites/' + Cookies.get('userDetailId') + '/' + this.repoName + '/public/');
      } 
      // window.open('http://' + Cookies.get('userDetailId') + '.' + this.repoName + this.ipAddress + '/');
    },

    async saveProjectSettings() {
      
      let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + this.repoName);

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
    },

  	async init () {
  console.log('in project stat')
      let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      localStorage.setItem('folderUrl', folderUrl);

      let foldername = folderUrl.split('/');
      foldername = foldername[6];
      
      this.configData = await axios.get(config.baseURL + '/project-configuration/' + foldername );

      if(this.configData.status == 200 || this.configData.status == 204){
        //console.log('Config file found! Updating fields..');

        this.settings = this.configData.data.configData;

        this.newRepoId = this.settings[0].repoSettings[0].RepositoryId;
        this.repoName = this.settings[0].repoSettings[0].RepositoryName;

        this.seoTitle = this.settings[1].projectSettings[0].ProjectSEOTitle;
        this.seoKeywords = this.settings[1].projectSettings[0].ProjectSEOKeywords;
        this.seoDesc = this.settings[1].projectSettings[0].ProjectSEODescription;

        this.counts.layouts = 0;
        this.counts.pages = 0;
        this.counts.variables = 0;
        this.counts.partials = 0;

        this.counts.layouts = (this.settings[2].layoutOptions[0].Layout.length - 1);
        this.counts.pages = this.settings[1].pageSettings.length;
        this.counts.variables = this.settings[1].projectSettings[1].GlobalVariables.length + this.settings[1].projectSettings[1].GlobalCssVariables.length;

        let partialItems = Object.keys(this.settings[2].layoutOptions[0]);
        this.counts.partials = (partialItems.length - 2);

        this.tablePagesData = [];

        for(var i = 0; i < Object.keys(this.settings[1].pageSettings).length; i++){
          this.tablePagesData.push({
            number: i + 1,
            pageName: this.settings[1].pageSettings[i].PageName,
            layoutName: this.settings[1].pageSettings[i].PageLayout
          });
        }

      } else {
        //console.log('Cannot get config file!');
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
        //console.log("Some error occured: ", error);
      });
      

      if(this.commitsData[0]){
        return 'positive-row';
      } 
  	},

  },

    // previewWebsite () {

    //   this.previewLoader = true;
    //   // var folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //   // window.open(config.ipAddress + folderUrl.replace('var/www/html/', '') + '/public/');

    //   // Publish with Zeit Now
    //   axios.post(config.baseURL + '/publish-now', {
    //       projectName : this.repoName
    //   })
    //   .then((res) => {
    //     let serverUrl = res.data;
    //     window.open( serverUrl + '/public/');
    //     this.$message({
    //       showClose: true,
    //       message: 'Successfully Published.',
    //       type: 'success'
    //     });
    ////     console.log(res.data);
    //     this.previewLoader = false;
    //   })
    //   .catch((e) => {
    //     this.$message({
    //       showClose: true,
    //       message: 'Failed! Please try again.',
    //       type: 'error'
    //     });
    ////     console.log(e);
    //     this.previewLoader = false;
    //   });

    // }
  // },
  async mounted () {

    //// console.log('Folder Url: ', localStorage.getItem('folderUrl'));

  	let response = await this.init();

    let self = this;

    $.fn.editable.defaults.mode = 'inline';

    $(document).ready(function() {
      $('#seoTitle').editable();
      $('#seoKeywords').editable();
      $('#seoDesc').editable({
        title: 'Enter Description',
        rows: 10
      });

      $('#seoTitle').on('save', function(e, params) {
         // alert('Saved value: ' + params.newValue);
        self.settings[1].projectSettings[0].ProjectSEOTitle = params.newValue;
        self.saveProjectSettings();
      });

      $('#seoKeywords').on('save', function(e, params) {
        self.settings[1].projectSettings[0].ProjectSEOKeywords = params.newValue;
        self.saveProjectSettings();
      });

      $('#seoDesc').on('save', function(e, params) {
        self.settings[1].projectSettings[0].ProjectSEODescription = params.newValue;
        self.saveProjectSettings();
      });
    });

    // // Count Up animation
    // $('.counter').each(function() {
    //   var $this = $(this),
    //       countTo = $this.attr('data-count');
      
    //   $({ countNum: $this.text()}).animate({
    //     countNum: countTo
    //   },

    //   {

    //     duration: 1000,
    //     easing:'linear',
    //     step: function() {
    //       $this.text(Math.floor(this.countNum));
    //     },
    //     complete: function() {
    //       $this.text(this.countNum);
    //       //alert('finished');
    //     }

    //   });  
      
    // });
  },
  watch: {
  	'$store.state.fileUrl': function(newvalue) {
  		this.init();
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');*/

.ProjectStats {
  font-family: 'Lato', sans-serif;
}

.card{
  padding: 20px;
  box-shadow: 0px 0px 10px #999;
  transition: 0.2s all linear;
  margin: 20px;
}

.card:hover{
  box-shadow: 2px 2px 20px #999;
  transition: 0.2s all linear;
}

.project-name{
  color: #008080;
}

hr{
  border-color: #999;
  color: #999;
  background-color: #999;
}





/*Gradient Divs*/
.color-div {
  height: 100px;
  display: block;
  padding: 10px 25px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #aaa;
  transition: 0.2s all linear;
  margin: 5px;
}

.color-div:hover{
  box-shadow: 2px 2px 10px #aaa;
  transition: 0.2s all linear;
}

.block {
  position: relative;
  background: #d56e4e;
}

.block::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.block::after {
  background: -moz-linear-gradient(45deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* FF3.6+ */
  
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(187, 67, 67, 0.8)), color-stop(100%, rgba(255, 255, 255, 0)));
  /* Chrome,Safari4+ */
  
  background: -webkit-linear-gradient(45deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* Chrome10+,Safari5.1+ */
  
  background: -o-linear-gradient(45deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* Opera 11.10+ */
  
  background: -ms-linear-gradient(45deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* IE10+ */
  
  background: linear-gradient(210deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(160deg, rgba(239, 171, 75, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* W3C */
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ccbb4343', endColorstr='#00ffffff', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
}

.block-2 {
  background: -moz-linear-gradient(-124deg, #7afa8b 0%, #eaff00 100%);
  background: -webkit-linear-gradient(-124deg, #7afa8b 0%, #eaff00 100%);
  background: -o-linear-gradient(-124deg, #7afa8b 0%, #eaff00 100%);
  background: -ms-linear-gradient(-124deg, #7afa8b 0%, #eaff00 100%);
  background: linear-gradient(-124deg, #7afa8b 0%, #eaff00 100%);
}

.block-3 {
  background-image: -webkit-linear-gradient(rgba(182, 40, 103, 0.95), rgba(253, 121, 11, 0.95));
  background-image: -moz-linear-gradient(rgba(182, 40, 103, 0.95), rgba(253, 121, 11, 0.95));
  background-image: -o-linear-gradient(rgba(182, 40, 103, 0.95), rgba(253, 121, 11, 0.95));
  background-image: -ms-linear-gradient(rgba(182, 40, 103, 0.95), rgba(253, 121, 11, 0.95));
  background-image: linear-gradient(rgba(182, 40, 103, 0.95), rgba(253, 121, 11, 0.95));
}

.block-4 {
  background: -webkit-gradient(linear, left bottom, right top, color-stop(1%, #7be7d7), color-stop(40%, #7be7d7), color-stop(40%, #7be7d7), color-stop(100%, #86a4e3));
  background: -webkit-linear-gradient(45deg, #7be7d7 1%, #7be7d7 40%, #7be7d7 40%, #86a4e3 100%);
  background: -webkit-linear-gradient(45deg, #7be7d7 1%, #7be7d7 40%, #7be7d7 40%, #86a4e3 100%);
  background: linear-gradient(45deg, #7be7d7 1%, #7be7d7 40%, #7be7d7 40%, #86a4e3 100%);
}

.block-5 {
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #ff4f58), color-stop(57%, #ff4f58), color-stop(100%, #fd7048));
  background: -webkit-linear-gradient(45deg, #ff4f58 0, #ff4f58 57%, #fd7048 100%);
  background: -webkit-linear-gradient(45deg, #ff4f58 0, #ff4f58 57%, #fd7048 100%);
  background: linear-gradient(45deg, #ff4f58 0, #ff4f58 57%, #fd7048 100%);
}

.block-6 {
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #ddb14f), color-stop(100%, #ea6c30));
  background: -webkit-linear-gradient(45deg, #ddb14f 0, #ea6c30 100%);
  background: -webkit-linear-gradient(45deg, #ddb14f 0, #ea6c30 100%);
  background: linear-gradient(45deg, #ddb14f 0, #ea6c30 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ddb14f', endColorstr='#ea6c30', GradientType=1);
}

.block-7 {
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #f2c8c5), color-stop(100%, #f686bc));
  background: -webkit-linear-gradient(45deg, #f2c8c5 0, #f686bc 100%);
  background: -webkit-linear-gradient(45deg, #f2c8c5 0, #f686bc 100%);
  background: linear-gradient(45deg, #f2c8c5 0, #f686bc 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#f2c8c5', endColorstr='#f686bc', GradientType=1);
}

.block-8 {
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #1a9992), color-stop(100%, #4eb864));
  background: -webkit-linear-gradient(45deg, #1a9992 0, #4eb864 100%);
  background: -webkit-linear-gradient(45deg, #1a9992 0, #4eb864 100%);
  background: linear-gradient(45deg, #1a9992 0, #4eb864 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#1a9992', endColorstr='#4eb864', GradientType=1);
}

.block-9 {
  background: -webkit-gradient(linear,left bottom,right top,color-stop(0%,#6ab1d7),color-stop(100%,#33d9de));
  background: -webkit-linear-gradient(45deg,#6ab1d7 0,#33d9de 100%);
  background: -webkit-linear-gradient(45deg, #6ab1d7 0, #33d9de 100%);
  background: linear-gradient(45deg,#6ab1d7 0,#33d9de 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6ab1d7', endColorstr='#33d9de', GradientType=1);
}
.block-10 {
  position: relative;
  width: 1170px;
  height: 550px;
  background-size: cover;
  background-position: 0 -100px;
  background-image: 
}
.block-10::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.block-10::after {
  background: -moz-linear-gradient(45deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* FF3.6+ */
  
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(187, 67, 67, 0.8)), color-stop(100%, rgba(255, 255, 255, 0)));
  /* Chrome,Safari4+ */
  
  background: -webkit-linear-gradient(45deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* Chrome10+,Safari5.1+ */
  
  background: linear-gradient(210deg, rgba(187, 67, 67, 0.8) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(160deg, rgba(239, 171, 75, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  /* W3C */
}
.block-11 {}

h1.title{
  font-size: 72px;
  opacity: 1;
  font-weight: 400;
}

h3.subtitle{
  position: absolute;
  right: 30px;
  top: 65px;
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
}

.creative-table{
  margin: 10px 0px;
}

.table-title{
  box-shadow: 0px 0px 10px #999;
  padding: 20px;
  padding-bottom: 5px;
  margin: 10px;
  border-radius: 5px;
  z-index: 6;
  position: absolute;
  top: -30px;
  width: 550px;
  color: #fff;

  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #1a9992), color-stop(100%, #4eb864));
  background: -webkit-linear-gradient(45deg, #1a9992 0, #4eb864 100%);
  background: -webkit-linear-gradient(45deg, #1a9992 0, #4eb864 100%);
  background: linear-gradient(45deg, #1a9992 0, #4eb864 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#1a9992', endColorstr='#4eb864', GradientType=1);
}

@media(max-width: 680px){
  .table-title{
    width: 350px;
  }
}

.title-style-1{
  background: linear-gradient(to right, #AB64F6 0%, #61DBF7 100%);
}

.title-style-2{
  background: linear-gradient(to right, #D20B54 0%, #FFB894 100%);
}

.table-body{
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  padding-top: 75px;
  margin-top: 0px;
  position: relative;
  width: 100%;
  z-index: 5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.14);
}

.table thead{
  color: #00A092;
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
