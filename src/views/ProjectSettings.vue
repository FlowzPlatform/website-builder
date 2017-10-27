<template>
  <div class="ProjectSettings">
    
    <!-- Save/Publish/Cancel Buttons -->
    <div class="page-buttons">
      <el-button type="primary" @click="saveProjectSettings">Save Settings</el-button>
      <!-- <el-button type="info" @click="publishMetalsmith">Publish Settings</el-button> -->
      <!-- <el-button type="danger" @click="cancelSettings">Cancel</el-button> -->
    </div>

    <div class="container" style="margin-top: 2%; margin-bottom: 2%;">

      <!-- Commit Section -->
      <div class="well">
        <div class="row">
          <div class="col-md-9">
            <el-input v-model="commitMessage" placeholder="Enter Commit Message"></el-input>
          </div>
          <div class="col-md-2">
            <el-button class="publishBtn" type="success" @click="commitProject()">Commit Project</el-button>
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
                <el-input v-model="form.brandName" placeholder="My Company"></el-input>
              </el-form-item>

              <el-form-item label="Brand Logo">
                <div class="col6 valid"> 
                  <label for="upload-validation">
                    <i class="fa fa-paperclip" aria-hidden="true"></i><span class="uploadText" id="text2">Upload image</span>
                  </label> 
                  <input type="file" name="" id="upload-validation">
                  <span class="dis">(max 1 MB. .jpg or .png only)</span>
                </div>
              </el-form-item>

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

      <!-- Global Variable section -->
      <div class="well">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4">
                <h3>Global Variables</h3>
              </div>
              <div class="col-md-8" align="right">
                <el-tooltip class="item" effect="dark" content="Download JSON" placement="top">
                  <button class="btn btn-info" @click="downloadGlobalVariables"><i class="fa fa-download"></i></button>
                </el-tooltip>
              </div>
            </div>
            <hr>
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
                      <el-button class="pull-right" type="danger" @click="deleteVariable(index)" icon="delete"></el-button>      
                    </div>
                  </div>
                </el-form-item>
              </div>
              <!-- Ends V-FOR looping -->
              
              <!-- Create new variable -->
              <el-button type="primary" @click="addNewVariable">New Variable</el-button>

            </el-form>
          </div>
          <div class="col-md-12" style="margin-top: 4%;">
            <h3>CSS Variables</h3>
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
      <!-- Global Variable section ends -->

      <!-- List of Commits Section -->
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

              <!-- <el-table-column
                prop="commitSHA"
                label="Commit SHA"
                >
              </el-table-column> -->
              
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

import fileSaver from 'file-saver'

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
      commitMessage: '',
      baseURL: 'http://localhost:3030',
      newRepoId: '',
      repoName: '',
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
      imageInputIsDisabled: false,
      // fileData:{
      //   url: 'urlHere'
      // }
    }
  },
  component: {
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
          console.log('Image Result:', e.target.result);
          $('[name = '+currentImageVariableIndex+']').attr('src', e.target.result);
          // browser completed reading file - display it
          globalFileData = e.target.result;
          
          axios.post( scope.baseURL + '/image-upload', {
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
      console.log('Global Css Vars:', this.globalCssVariables)
      let newVariable = { variableName: '', variableType: '', variableValue: ''};
      this.globalCssVariables.push(newVariable);
    },

    deleteVariable(deleteIndex) {
      this.globalVariables.splice(deleteIndex, 1);
    },

    deleteCssVariable(deleteIndex) {
      this.globalCssVariables.splice(deleteIndex, 1);
    },

    downloadGlobalVariables() {
      this.saveProjectSettings();
      let exportVariables = this.settings[1].projectSettings[1];

      let textToSave = JSON.stringify(exportVariables);
      let saveFileName = 'globalVariablesData.json';
      let jsonData = new Blob([textToSave], {type: "application/json;charset=utf-8"});
    
      fileSaver.saveAs(jsonData, saveFileName);
      // console.log(exportVariables);
    },

    uploadImage(fileData, fileBlob) {
      
      this.form.brandLogoName = fileData.name;

      axios.post( this.baseURL + '/image-upload', {
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

    saveProjectSettings() {
      
      let ProjectSettings = [{ "RepositoryId" : this.newRepoId, "ProjectName": this.repoName, "BrandName": this.form.brandName, "BrandLogoName": this.form.brandLogoName, "ProjectLayout": '',"ProjectHeader":this.form.selectedHeader,"ProjectFooter":this.form.selectedFooter,"ProjectSEOTitle":this.form.seoTitle,"ProjectSEOKeywords": this.form.seoTitle,"ProjectSEODescription":this.form.seoDesc}, { "GlobalVariables": this.globalVariables, "GlobalCssVariables": this.globalCssVariables }];

      this.settings[1].projectSettings = ProjectSettings;

      let newfilename = this.$store.state.fileUrl.replace(/\\/g, "\/") + '/assets/config.json';
      axios.post( this.baseURL + '/flows-dir-listing', {
          filename : newfilename,
          text : JSON.stringify(this.settings),
          type : 'file'
      })
      .then((res) => {
          console.log('Config File saved: ', res);
          this.$message({
              showClose: true,
              message: 'Config Saved!',
              type: 'success'
          });
      })
      .catch((e) => {
          console.log('Some error occured while saving config file. Here is full log: ', e);
          this.$message({
              showClose: true,
              message: 'Cannot save file! Some error occured, try again.',
              type: 'danger'
          });
      })
    },

    revertCommit(index) {
      this.$store.state.currentIndex = index;
      $('#tablecommits .el-table__body-wrapper').find('tr').removeClass('positive-row');
      $('#tablecommits .el-table__body-wrapper').find('tr').eq(index).addClass('positive-row')

      // console.log(this.commitsData[index].commitSHA);
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

    commitProject() {
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

      // console.log(this.$store.state.fileUrl);
      axios.post('http://localhost:3030/flows-dir-listing', {
          filename: this.$store.state.fileUrl + '/assets/metalsmith.js',
          text: (metalsmithJSON),
          type: 'file'
      }).then((response) => {
          // console.log('Axios call 1');
          console.log('successfully created metalsmith file :', (response.data))
          this.$message({
              showClose: true,
              message: 'MetalSmith Config Saved!',
              type: 'success'
          });

          axios.get('http://localhost:3030/metalsmith?path=' + this.$store.state.fileUrl, {
          }).then((response) => {
              // console.log('Axios call 2');
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
          console.log('Mrror while creating MetalSmith JSON file' + e)
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
      window.open('http://162.209.122.250/' + this.$session.get('username') + '/' + this.repoName + '/repository/archive.zip?ref=master');
    },

    cancelSettings(){
      location.reload();
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
      this.form.brandLogoName = this.settings[1].projectSettings[0].BrandLogoName;
      this.form.seoTitle = this.settings[1].projectSettings[0].ProjectSEOTitle;
      this.form.seoKeywords = this.settings[1].projectSettings[0].ProjectSEOKeywords;
      this.form.seoDesc = this.settings[1].projectSettings[0].ProjectSEODescription;
      this.globalVariables = this.settings[1].projectSettings[1].GlobalVariables;
      this.globalCssVariables = this.settings[1].projectSettings[1].GlobalCssVariables;

      if(this.globalVariables == undefined){
        this.globalVariables = []
      }
      if(this.globalCssVariables == undefined){
        this.globalCssVariables = []
      }

      this.form.Header = this.settings[2].layoutOptions[0].headers;
      this.form.Footer = this.settings[2].layoutOptions[0].footers;

      // Set Brand Logo Name
      if(this.form.brandLogoName != ''){
        if (this.form.brandLogoName.length > 18) {
            $('#text2').text(this.form.brandLogoName.substr(0, 10)+'...'+this.form.brandLogoName.substr(this.form.brandLogoName.length-8, this.form.brandLogoName.length));
            $('.valid').removeClass('error').addClass('correct');
            $('.valid i').removeClass('fa-exclamation').addClass('fa-paperclip');
         }else{
            $('#text2').text(this.form.brandLogoName);
            $('.valid').removeClass('error').addClass('correct');
            $('.valid i').removeClass('fa-exclamation').addClass('fa-paperclip');
        }  
      } else {
        console.log('BrandLogoName not found!');
      }
      

    } else {
      console.log('Cannot get config file!');
    } 


    // replace all image tag source with index as name attribute to get the image file preview
    
    for (var i = 0; i < this.globalVariables.length; i++){
      if(this.globalVariables[i].variableType == 'image'){
        let _imageIndex = i;
        axios.get( this.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/assets/' + this.globalVariables[i].variableValue, {
        }).then(response => {
          $('[name = ' + _imageIndex + ']').attr('src', response.data);
        }).catch(error => {
          console.log("Some error occured while fetching image: ", error);
        });

      }
    }

    // Get all commits list
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

  async mounted () {

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
  position: absolute;
  top: 0;
  right: 80px;
  margin-top: 17.5px;
}

@media(max-width: 680px){
  .page-buttons{
    position: relative;
    left: auto;
    right: auto;
  }
}

</style>
