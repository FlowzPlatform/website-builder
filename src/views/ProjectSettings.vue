<template>
  <div class="ProjectSettings">
    <div class="container" style="margin-top: 2%; margin-bottom: 2%;">
      <div class="well">
        <div class="row">
          <div class="col-md-9">
            <el-input v-model="commitMessage" placeholder="Enter Commit Message"></el-input>
          </div>
          <div class="col-md-2">
            <el-button class="publishBtn" type="success" @click="publishWebsite()">Publish Site</el-button>
          </div>
          <div class="col-md-1">
            <el-tooltip content="Download .zip" placement="top">
              <el-button class="publishBtn" @click="exportWebsite()"><i class="fa fa-download" title="Download .zip"></i></el-button>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="well">
        <div class="row">
          <div class="col-md-12" style="margin-top: 4%;">
          
          <el-form ref="form" :model="form" label-width="120px">

          <el-form-item label="Repository Id:">
              <el-input v-model="newRepoId" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="Project name">
              <el-input v-model="repoName" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="Brand name">
              <el-input v-model="form.brandName"></el-input>
            </el-form-item>

            <el-form-item label="Brand Logo">
              <div class="col6 valid"> 
                <label for="upload-validation">
                  <i class="fa fa-paperclip" aria-hidden="true"></i><span class="uploadText" id="text2">Upload image</span>
                </label> 
                <input type="file" name="" id="upload-validation">
                <span class="dis">(max 3 MB. .png only)</span>
              </div>
            </el-form-item>

            <!-- <el-form-item label="Brand Logo">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:3030/image-upload"
                :data=fileData
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item> -->

            <!-- <el-form-item label="Project Header">
              <el-row>
                <el-col :span="10">
                  <el-select v-model="form.selectedHeader" placeholder="Please select Header">
                    <el-option
                      v-for="item in form.Header"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="Project Footer">
                    <el-select v-model="form.selectedFooter" placeholder="Please select Footer">
                      <el-option
                        v-for="item in form.Footer"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item> -->

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

      <div class="well">
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
        brandName: '',
        seoTitle: '',
        seoKeywords: '',
        seoDesc: '',
        Header: [],
        Footer: [],
        selectedHeader: '',
        selectedFooter: ''
      },
      // imageUrl: '',
      commitsData: [],
      commitMessage: '',
      baseURL: 'http://localhost:3030',
      newRepoId: '',
      repoName: '',
      configData: [],
      currentFileIndex: '',
      settings: [],
      folderUrl: '',
      // fileData:{
      //   url: 'urlHere'
      // }
    }
  },
  component: {
  },
  methods: {

    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    // beforeAvatarUpload(file) {

    //   const isJPG = file.type === 'image/jpeg' || 'image/png' ;
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     this.$message.error('Brand Logo must be JPG or PNG format only!');
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('Brand Logo size can not exceed 2MB!');
    //   }
    //   return isJPG && isLt2M;
    // },

    uploadImage(fileData, fileBlob) {
      console.log(fileBlob);
      let ext = fileData.type.split('/');
      let name = 'brand-logo.' + ext[1]

      axios.post( this.baseURL + '/image-upload', {
          filename : this.folderUrl + '/assets/' + name,
          text : fileBlob,
          type : 'file'
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => { 
        console.log(e)
      })
    },

    saveProjectSettings() {

      console.log('Image URL: ', this.imageUrl);
      
      let ProjectSettings = [{ "RepositoryId" : this.newRepoId, "ProjectName": this.repoName, "BrandName": this.form.brandName,"ProjectLayout": '',"ProjectHeader":this.form.selectedHeader,"ProjectFooter":this.form.selectedFooter,"ProjectSEOTitle":this.form.seoTitle,"ProjectSEOKeywords": this.form.seoTitle,"ProjectSEODescription":this.form.seoDesc}];

      
      // this.settings[0].projectSettings[0].RepositoryId = settings[0].repoSettings[0].RepositoryId;
      // this.settings[0].projectSettings[0].ProjectName = settings[0].repoSettings[0].RepositoryName;
      // this.settings[0].projectSettings[0].ProjectSEOTitle = settings[1].projectSettings[0].ProjectSEOTitle;
      // this.settings[0].projectSettings[0].ProjectSEOKeywords = settings[1].projectSettings[0].ProjectSEOKeywords;
      // this.settings[0].projectSettings[0].ProjectSEODescription = settings[1].projectSettings[0].ProjectSEODescription;

      console.log(this.settings);
      this.settings[1].projectSettings = ProjectSettings;

      let newfilename = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/assets/config.json';
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
    },

    exportWebsite(){
      window.open('http://162.209.122.250/' + this.$session.get('username') + '/' + this.repoName + '/repository/archive.zip?ref=master');
    }
  },
  async created () {
    this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
    let url = this.$store.state.fileUrl.replace(/\\/g, "\/");
    this.configData = await axios.get( this.baseURL + '/flows-dir-listing/0?path=' + url + '/assets/config.json');
    if(this.configData.status == 200 || this.configData.status == 204){
      console.log('Config file found! Updating fields..');
      this.settings = JSON.parse(this.configData.data);
      this.newRepoId = this.settings[0].repoSettings[0].RepositoryId;
      this.repoName = this.settings[0].repoSettings[0].RepositoryName;
      this.form.brandName = this.settings[1].projectSettings[0].BrandName;
      this.form.seoTitle = this.settings[1].projectSettings[0].ProjectSEOTitle;
      this.form.seoKeywords = this.settings[1].projectSettings[0].ProjectSEOKeywords;
      this.form.seoDesc = this.settings[1].projectSettings[0].ProjectSEODescription;

      this.form.Header = this.settings[2].layoutOptions[0].headers;
      this.form.Footer = this.settings[2].layoutOptions[0].footers;

      // if((this.settings[1].projectSettings[0].ProjectHeader) != undefined){
      //   this.form.Header = this.settings[1].projectSettings[0].ProjectHeader;
      // } else {
      //   this.form.Header = this.settings[2].layoutOptions[0].headers;
      // }

      // if((this.settings[1].projectSettings[0].ProjectFooter) != ''){
      //   this.form.Footer = this.settings[1].projectSettings[0].ProjectFooter;
      // } else {
      //   this.form.Footer = this.settings[2].layoutOptions[0].footers;
      // }

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
    let scope = this;
    // this.newRepoId = this.$session.get('newRepoId');
    // this.repoName = this.$session.get('repoName');
    // Demo User token 4KQWGKhJu1ngdvyUoAoz
    // this.form.Header = this.$store.state.HeaderOptions;
    // this.form.Footer = this.$store.state.FooterOptions;
    $('#upload').change(function(e){
      var fileName = e.target.files[0].name;
      if (fileName.length > 18) {
           $('#text1').text(fileName.substr(0, 10)+'...'+fileName.substr(fileName.length-8, fileName.length));
       }else{
          $('#text1').text(fileName);
      }
    });

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
          if($.inArray(ext, ['png']) == -1 && ext != ''){
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*input[type=file]{
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}*/

.publishBtn{
  width: 100%;
}

input[type="file"]{
  display: none;
}
label{
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
label i{
  vertical-align: middle;
  margin-right:10px;
}
label:hover{
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
.error label{
  color:red;
  border-color:red;
  background:#fcd0d0;
}
.correct label{
  background:#cff5c5;
}

.well{
  background-color: rgba(245,245,245,0.5);
}
</style>
