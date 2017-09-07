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
      <div class="thumbnail ">
        <div class="row">
          <div class="col-md-12" style="margin-top: 4%;">
          
          <el-form ref="form" :model="form" label-width="120px">

          <el-form-item label="Repository Id:">
              <el-input v-model="newRepoId" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="Project name">
              <el-input v-model="repoName" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="Project Header">
              <el-row>
                <el-col :span="10">
                  <el-select v-model="form.Header" placeholder="Please select Header">
                    <el-option
                      v-for="item in this.$store.state.HeaderOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="Project Footer">
                    <el-select v-model="form.Footer" placeholder="Please select Footer">
                      <el-option
                        v-for="item in this.$store.state.FooterOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
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

            <el-form-item>
              <el-button type="primary" @click="saveProjectSettings">Save Settings</el-button>
              <el-button @click="publishMetalsmith">Publish Settings</el-button>
              <el-button>Cancel</el-button>
              
            </el-form-item>
          </el-form> 
        </div>
        

          

        </div>
      </div> 

      <div class="thumbnail">
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
        seoTitle: '',
        seoKeywords: '',
        seoDesc: '',
        Header: '',
        Footer: ''
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
      
      let ProjectSettings = [ {"repoSettings": [{"RepositoryId" : this.newRepoId, "RepositoryName": this.repoName}]} ,{"projectSettings":[{ "RepositoryId" : this.newRepoId, "ProjectName": this.repoName,"ProjectHeader":this.form.Header,"ProjectFooter":this.form.Footer,"ProjectSEOTitle":this.form.seoTitle,"ProjectSEOKeywords": this.form.seoTitle,"ProjectSEODescription":this.form.seoDesc}],"pageSettings":[{"PageName":"Project 1","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":"Some, Keywords","PageSEODescription":"Some description"},{"PageName":"Page 2","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":"Some, Keywords","PageSEODescription":"Some description"},{"PageName":"Page 3","PageTheme":"Dark","PageSEOTitle":"SEO Title","PageSEOKeywords":"Some, Keywords","PageSEODescription":"Some description"}]}];

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

    revertCommit(index) {
      this.$store.state.currentIndex = index;
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
      this.$store.state.currentIndex = 0;

      // Push repository changes
      axios.post(this.baseURL + '/gitlab-add-repo', {
        commitMessage: this.commitMessage,
        repoName: this.repoName
      }).then(response => {
        console.log(response);
        if(response.status == 200 || response.status == 201){
          console.log(response.data);
          this.$message({
            message: 'Successfully published the website.',
            type: 'success'
          });
        }
      }).catch(error => {
        console.log("Some error occured: ", error);
      }) 
    },

    publishMetalsmith(){
      var partials = '';
      if (this.form.Header != '') {
          var partialHeader = "Handlebars.registerPartial('Header', fs.readFileSync('" + this.$store.state.fileUrl + "/Headers/" + this.form.Header + ".html').toString());\n";
          partials = partials + partialHeader;
      }
      if (this.form.Footer != '') {
          var partialFooter = "Handlebars.registerPartial('Footer', fs.readFileSync('" + this.$store.state.fileUrl + "/Footers/" + this.form.Footer + ".html').toString());\n"
          partials = partials + partialFooter;
      }

      var metalsmithJSON = "var Metalsmith=require('metalsmith');\nvar markdown=require('metalsmith-markdown');\nvar layouts=require('metalsmith-layouts');\nvar permalinks=require('metalsmith-permalinks');\nvar fs=require('fs');\nvar Handlebars=require('handlebars');\n" + partials + " Metalsmith(__dirname)\n.metadata({title:'" + this.form.seoTitle + "',description:'" + this.form.seoDesc + "'})\n.source('" + this.$store.state.fileUrl + "/Pages')\n.destination('" + this.$store.state.fileUrl + "/MetalsmithOutput')\n.clean(false)\n.use(markdown())\n.use(permalinks())\n.use(layouts({engine:'handlebars',directory:'" + this.$store.state.fileUrl + "/Layouts'}))\n.build(function(err,files)\n{if(err){console.log(err)}});"

      console.log(this.$store.state.fileUrl);
      axios.post('http://localhost:3030/flows-dir-listing', {
          filename: this.$store.state.fileUrl + '/assets/metalsmith.js',
          text: (metalsmithJSON),
          type: 'file'
      }).then((response) => {
        console.log('Axios call 1');
          console.log('successfully created metalsmith file :', (response.data))
          this.$message({
              showClose: true,
              message: 'MetalSmith Config Saved!',
              type: 'success'
          });

          axios.get('http://localhost:3030/metalsmith?path=' + this.$store.state.fileUrl, {
          }).then((response) => {
              console.log('Axios call 2');
              console.log('successfully  :' + (response))
          })
          .catch((err) => {
              this.$message({
                  showClose: true,
                  message: 'Cannot get Metalsmith file! Some error occured, try again.',
                  type: 'error'
              });
          })
      })
      .catch((e) => {
          console.log('error while creating metalsmithJSON file' + e)
          this.$message({
              showClose: true,
              message: 'Cannot save file! Some error occured, try again.',
              type: 'error'
          });
      })
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    
    handlePreview(file) {
      console.log(file);
    },

    tableRowClassName(row, index) {
      if (index === this.$store.state.currentIndex) {
        return 'positive-row';
      }
      return '';
    }
  },
  async created () {
    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    this.configData = await axios.get( this.baseURL + '/flows-dir-listing/0?path=' + url + '/assets/config.json');
    if(this.configData.status == 200 || this.configData.status == 204){
      console.log('Config file found! Updating fields..');
      let settings = JSON.parse(this.configData.data);
      this.newRepoId = settings[0].repoSettings[0].RepositoryId;
      this.repoName = settings[0].repoSettings[0].RepositoryName;
      this.form.seoTitle = settings[1].projectSettings[0].ProjectSEOTitle;
      this.form.seoKeywords = settings[1].projectSettings[0].ProjectSEOKeywords;
      this.form.seoDesc = settings[1].projectSettings[0].ProjectSEODescription;
    } else {
      console.log('Cannot get config file!');
    } 


    await axios.get( this.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+this.$session.get('privateToken'), {
    }).then(response => {
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

  mounted () {
    // this.newRepoId = this.$session.get('newRepoId');
    // this.repoName = this.$session.get('repoName');
    // Demo User token 4KQWGKhJu1ngdvyUoAoz
    // this.form.Header = this.$store.state.HeaderOptions;
    // this.form.Footer = this.$store.state.FooterOptions;
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
