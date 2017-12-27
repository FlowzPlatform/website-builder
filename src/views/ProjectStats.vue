<template>
  <div class="ProjectStats">
    <div class="page-buttons">
      <el-button type="info" size="small" @click="previewWebsite" :loading="previewLoader">Preview Website</el-button>
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
  </div>
</template>

<script>

import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

import axios from 'axios'

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
      previewLoader: false
    }
  },
  component: {
  },
  methods: {
    revertCommit(index) {
      this.$store.state.currentIndex = index;
      $('#tablecommits .el-table__body-wrapper').find('tr').removeClass('positive-row');
      $('#tablecommits .el-table__body-wrapper').find('tr').eq(index).addClass('positive-row')

      // console.log(this.commitsData[index].commitSHA);
      axios.post( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&branchName=master&sha=' + this.commitsData[index].commitSHA + '&repoName='+ this.repoName, {
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

    tableRowClassName(row, index) {
      if (index === this.$store.state.currentIndex) {
        return 'positive-row';
      }
      return '';
    },

    async saveProjectSettings() {
      
      let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName);

      if (rethinkdbCheck.data.data) {
        // update existing data
        await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.data[0].id, {
            configData: this.settings
        })
        .then(async(res) => {
            this.$message({
                showClose: true,
                message: 'Successfully updated.',
                type: 'success'
            });
            console.log(res.data);
        })
        .catch((e) => {
            this.$message({
                showClose: true,
                message: 'Failed! Please try again.',
                type: 'error'
            });
            console.log(e)
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

      let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      localStorage.setItem('folderUrl', folderUrl);

      let foldername = folderUrl.split('/');
      foldername = foldername[(foldername.length-1)];
      
      this.configData = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );

      if(this.configData.status == 200 || this.configData.status == 204){
        console.log('Config file found! Updating fields..');

        this.settings = this.configData.data.data[0].configData;

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
        console.log('Cannot get config file!');
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
        console.log("Some error occured: ", error);
      });
      

      if(this.commitsData[0]){
        return 'positive-row';
      } 
  	},















    // async previewWebsite () {
    //     this.previewLoader = true;
    //     var folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");

    //     let foldername = folderUrl.split('/');
    //     foldername = foldername[(foldername.length-1)];

    //     var responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );

    //     var rawConfigs = responseConfig.data.data[0].configData;
    //     var partialstotal = []
    //     console.log("rawConfigs[1].pageSettings.length:",rawConfigs[1].pageSettings.length)
    //     for (let i = 0; i < rawConfigs[1].pageSettings.length; i++) {

    //         var partials = ''

    //         let responseConfigLoop = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + foldername );

    //         var rawSettings = responseConfigLoop.data.data[0].configData;
    //         var nameF = rawSettings[1].pageSettings[i].PageName.split('.')[0]
    //         console.log('nameF:',nameF)
    //         var Layout = ''
    //         var partialsPage = [];
    //         var vuepartials = [];
    //         Layout = rawSettings[1].pageSettings[i].PageLayout
    //         partialsPage = rawSettings[1].pageSettings[i].partials
    //         var back_partials = JSON.parse(JSON.stringify(partialsPage));
    //         vuepartials = rawSettings[1].pageSettings[i].VueComponents
    //         if (vuepartials != undefined && vuepartials.length > 0) {
    //             // console.log("VueComponents found:")
    //             var mainVuefile = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/back_main.js');
    //             mainVuefile = mainVuefile.data

    //             for (let x = 0; x < vuepartials.length; x++) {
    //                 let temp = mainVuefile.replace(/@@vuecomponent@@/g, vuepartials[x].value.split('.')[0])
    //                 temp = temp.replace('./' + vuepartials[x].value.split('.')[0], folderUrl + '/Partials/' + vuepartials[x].partialsName + '/' + vuepartials[x].value.split('.')[0])

    //                 await axios.post(config.baseURL + '/flows-dir-listing', {
    //                         filename: config.webpackpublic + vuepartials[x].value.split('.')[0] + '.js',
    //                         text: temp,
    //                         type: 'file'
    //                     }).then(async (res) => {
    //                         // console.log("successfully created vuecomponent file") 
    //                         contentpartials = contentpartials + '<script src="./../assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js' + '"><\/script>'

    //                         axios.get(config.baseURL + '/webpack-api?path=' + folderUrl + '/assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js', {})
    //                             .then((response) => {
    //                                 console.log("called webpack_file api successfully:")
    //                             })
    //                             .catch((e) => {
    //                                 console.log(e)
    //                             })
    //                     })
    //                     .catch((e) => {
    //                         console.log(e)
    //                     })

    //             }
    //             for (let x = 0; x < vuepartials.length; x++) {

    //                 axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + '/home/software/workspace/faizan/FlowzServiceApi/public/' + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
    //                         console.log(res)
    //                     })
    //                     .catch((e) => {
    //                         console.log(e)
    //                     })
    //             }
    //         }

    //         var responseMetal = ''
    //         let contentpartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + nameF + '.html');
    //         contentpartials = contentpartials.data

    //         responseMetal = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place')\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(permalinks({pattern: ':date'}))\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

    //         var index = responseMetal.search('.source')

    //         responseMetal = responseMetal.substr(0, index + 9) + this.$store.state.fileUrl.replace(/\\/g, "\/") + '/Preview' + responseMetal.substr(index + 9)
    //         var indexPartial = responseMetal.search("handlebars");

    //         for (var j = 0; j < partialsPage.length; j++) {
    //             var temp1, temp2;
    //             if (partialsPage[j][Object.keys(partialsPage[j])[0]].match('.hbs')) {
    //                 temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + "' }}"
    //                 temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]].split('.')[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + "' }}"
    //             } else {

    //                 temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".html' }}"

    //                 temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".html' }}"
    //             }

    //             if (contentpartials.match(temp1)) {

    //                 contentpartials = contentpartials.split(temp1).join(temp2)
    //                 // let partialsinherit = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/'+Object.keys(partialsPage[j])[0]+'/'+partialsPage[j][Object.keys(partialsPage[j])[0]]);

    //                 var obj = {}
    //                 var key = Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]]
    //                 obj[key] = partialsPage[j][Object.keys(partialsPage[j])[0]]
    //                 partialsPage[j] = []
    //                 partialsPage[j] = obj
    //                 // console.log("new partialsPage[",j,']:',partialsPage[j])



    //             } else {
    //                 console.log('partials not found in page')
    //                 console.log('partialsPage[j]:', partialsPage[j])

    //             }
    //         }
    //         console.log("back_partials:",back_partials)
    //         for (var z = 0; z < partialsPage.length; z++) {
    //           let key = Object.keys(partialsPage[z])[0];
    //           let value = partialsPage[z]
    //           let key2 = key;
    //           key = key.trim();
    //           if (value[key2].match('html')) {
    //               key = key.split('.')[0]
    //               var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + Object.keys(back_partials[z])[0] + "/" + value[key2] + "').toString())\n"
    //           } else if (value[key2].match('hbs')) {
    //               key = key.split('.')[0]
    //               var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + Object.keys(back_partials[z])[0] + "/" + value[key2] + "').toString())\n"
    //           } else {
    //               var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/Partials/" + Object.keys(back_partials[z])[0] + "/" + value[key2] + ".html').toString())\n"
    //           }
    //           partials = partials + temp;
    //       }

    //         responseMetal = responseMetal.substr(0, indexPartial + 14) + partials + responseMetal.substr(indexPartial + 14);
    //         console.log('final responseMetal:', responseMetal)
    //         var mainMetal = folderUrl + '/assets/metalsmith.js'
    //         var value = true;
    //         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                 filename: mainMetal,
    //                 text: responseMetal,
    //                 type: 'file'
    //             }).then(async (response) => {
    //                 var newFolderName = folderUrl + '/Preview';
    //                 await axios.post(config.baseURL + '/flows-dir-listing', {
    //                         foldername: newFolderName,
    //                         type: 'folder'
    //                     })
    //                     .then(async (res) => {
    //                         console.log(res);
    //                         // console.log('Current URL:', this.$store.state.fileUrl.replace(/\\/g, "\/"));

    //                         console.log("this.form.Layout:", Layout)
    //                         if (Layout == 'Blank') {
    //                             // console.log("inside blank layout condition:")
    //                             await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                     filename: folderUrl + '/Layout/Blank.layout',
    //                                     text: '{{{ contents }}}',
    //                                     type: 'file'
    //                                 })
    //                                 .catch((e) => {
    //                                     console.log("error while blank file creation")
    //                                 })
    //                         }
    //                         let layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + Layout + '.layout');

    //                         let newContent = "<html>\n<head>\n" +
    //                             "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n" +
    //                             "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n" +
    //                             "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n" +
    //                             "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
    //                             "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n" +
    //                             "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
    //                             "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
    //                             "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n" +
    //                             "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
    //                             '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n' +
    //                             '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\n' +
    //                             "<link rel='stylesheet' href='./../main-files/main.css'/>\n</head><body>\n" +
    //                             layoutdata.data +
    //                             '<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-navbar-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-product-listing-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-product-detail-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-slider-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-popular-product-slider-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-pagination-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/client-my-cart-plugin.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/image-gradient-animation.js"><\/script>\n' +
    //                             '<script src="./../assets/client-plugins/progress-bars.js"><\/script>\n' +
    //                             // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/client1.js"><\/script>\n'+
    //                             '<script src="./../main-files/main.js"><\/script>\n' +
    //                             '</body>\n</html>';

    //                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                             filename: folderUrl + '/Layout/' + Layout + '.layout',
    //                             text: newContent,
    //                             type: 'file'
    //                         })

    //                         var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';;

    //                         if (Layout == 'Blank') {
                                
    //                             rawContent = '---\nlayout: ' + Layout + '.layout\n---\n' + rawContent
    //                             // }
    //                         } else {
    //                             let tempValueLayout = '---\nlayout: ' + Layout + '.layout\n---\n';
    //                             rawContent = tempValueLayout + rawContent

    //                             // }
    //                         }

    //                         var previewFileName = folderUrl + '/Preview/' + nameF + '.hbs';

    //                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                 filename: previewFileName,
    //                                 text: rawContent,
    //                                 type: 'file'
    //                             })
    //                             .then(async (res) => {
    //                                 this.saveFileLoading = false;

    //                                 await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then(async (response) => {

    //                                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                                 filename: mainMetal,
    //                                                 text: responseMetal,
    //                                                 type: 'file'
    //                                             })
    //                                             .then(async (res) => {
    //                                                 let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
    //                                                 previewFile = folderUrl.replace('/var/www/html', '');

    //                                                 await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
    //                                                     .then(async (res) => {
    //                                                         console.log(res);
    //                                                         // value = false;
    //                                                         // return value
    //                                                         await axios.post(config.baseURL + '/flows-dir-listing', {
    //                                                                 filename: folderUrl + '/Layout/' + Layout + '.layout',
    //                                                                 text: layoutdata.data,
    //                                                                 type: 'file'
    //                                                             })
    //                                                             .then(async (res) => {
    //                                                                 // location.reload();
    //                                                                 if (vuepartials != undefined && vuepartials.length > 0) {
    //                                                                     for (let x = 0; x < vuepartials.length; x++) {

    //                                                                         await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.webpackpublic + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
    //                                                                                 console.log(res)
    //                                                                             })
    //                                                                             .catch((e) => {
    //                                                                                 console.log(e)
    //                                                                             })
    //                                                                     }
    //                                                                     // location.reload();
    //                                                                 }
    //                                                                 console.log("layout file reset")
    //                                                                 if (Layout == 'Blank') {
    //                                                                    await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
    //                                                                         .catch((e) => {
    //                                                                             console.log("error while deleting blank.layout file")
    //                                                                         })
    //                                                                 }

    //                                                             })

    //                                                     })
    //                                                     .catch((e) => {
    //                                                         console.log(e)
    //                                                     })
    //                                             })

    //                                     })
    //                                     .catch((err) => {
    //                                         console.log('error while creating metalsmithJSON file' + err)
    //                                     })
    //                             })
    //                             .catch((e) => {
    //                                 this.saveFileLoading = false
    //                                 this.$message({
    //                                     showClose: true,
    //                                     message: 'File not saved! Please try again.',
    //                                     type: 'error'
    //                                 });
    //                                 console.log(e)
    //                             })

    //                     })
    //                     .catch((e) => {
    //                         console.log(e)
    //                     })

    //             })
    //             .catch((e) => {
    //                 console.log('error while creating metalsmithJSON file' + e)
    //                 this.$message({
    //                     showClose: true,
    //                     message: 'Cannot save file! Some error occured, try again.',
    //                     type: 'danger'
    //                 });
    //             })

    //     }

    //     // window.open(config.ipAddress + folderUrl.replace('var/www/html/', '') + '/public/');
    //     // Publish with Zeit Now
    //     axios.post(config.baseURL + '/publish-now', {
    //         projectName : this.repoName
    //     })
    //     .then((res) => {
    //       let serverUrl = res.data;
    //       window.open( serverUrl + '/public/');
    //       this.$message({
    //         showClose: true,
    //         message: 'Successfully Published.',
    //         type: 'success'
    //       });
    //       console.log(res.data);
    //       this.previewLoader = false;
    //     })
    //     .catch((e) => {
    //       this.$message({
    //         showClose: true,
    //         message: 'Failed! Please try again.',
    //         type: 'error'
    //       });
    //       console.log(e);
    //       this.previewLoader = false;
    //     });
    //     // location.reload();
    // },

    async previewWebsite () {
        this.previewLoader = true;
        var folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        var responseConfig = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );
        var rawConfigs = responseConfig.data.data[0].configData;
        var partialstotal = []
        var externalJs = rawConfigs[1].projectSettings[1].ProjectExternalJs;
       var externalCss = rawConfigs[1].projectSettings[1].ProjectExternalCss;
       var metaInfo = rawConfigs[1].projectSettings[1].ProjectMetaInfo;
       var getFromBetween = {
           results: [],
           string: "",
           getFromBetween: function(sub1, sub2) {
               if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
               var SP = this.string.indexOf(sub1) + sub1.length;
               var string1 = this.string.substr(0, SP);
               var string2 = this.string.substr(SP);
               var TP = string1.length + string2.indexOf(sub2);
               return this.string.substring(SP, TP);
           },
           removeFromBetween: function(sub1, sub2) {
               if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
               var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
               this.string = this.string.replace(removal, "");
           },
           getAllResults: function(sub1, sub2) {
               if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
               var result = this.getFromBetween(sub1, sub2);
               this.results.push(result);
               this.removeFromBetween(sub1, sub2);
               if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
                   this.getAllResults(sub1, sub2);
               } else return;
           },
           get: function(string, sub1, sub2) {
               this.results = [];
               this.string = string;
               this.getAllResults(sub1, sub2);
               return this.results;
           }
       };
       if(metaInfo.length > 0){
          for (let a = 0; a < metaInfo.length; a++) {
             tophead = tophead + '<meta name="' + metaInfo[a].name + '" content="' + metaInfo[a].content + '">'
          }
        }
         
        if(externalJs.length > 0){
          for (let a = 0; a < externalJs.length; a++) {
             if (externalJs[a].linkposition == 'starthead') {
                 tophead = tophead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
             } else if (externalJs[a].linkposition == 'endhead') {
                 endhead = endhead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
             } else if (externalJs[a].linkposition == 'startbody') {
                 topbody = topbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
             } else if (externalJs[a].linkposition == 'endbody') {
                 endbody = endbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
             }
          }
        }
         
        if(externalCss.length > 0){
          for (let a = 0; a < externalCss.length; a++) {
             if (externalCss[a].linkposition == 'starthead') {
                 tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
             } else if (externalCss[a].linkposition == 'endhead') {
                 endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
             } else if (externalCss[a].linkposition == 'startbody') {
                 topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
             } else if (externalCss[a].linkposition == 'endbody') {
                 endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '"> '
             }

         }
        }
        for (let i = 0; i < rawConfigs[1].pageSettings.length; i++) {

            var partials = ''

            let responseConfigLoop = await axios.get(config.baseURL + '/project-configuration?userEmail=' + this.$session.get('email') + '&websiteName=' + this.repoName );

            var rawSettings = responseConfigLoop.data.data[0].configData;
            var nameF = rawSettings[1].pageSettings[i].PageName.split('.')[0]
            console.log('nameF:',nameF)
            var Layout = ''
            var partialsPage = [];
            var vuepartials = [];
            var tophead = '';
            var endhead = '';
            var topbody = '';
            var endbody = '';
            var layoutdata='';
            var pageexternalJs= [];
            var pageexternalCss= [];
            var pageMetaInfo= [];
            var pageSeoTitle;
            Layout = rawSettings[1].pageSettings[i].PageLayout
            partialsPage = rawSettings[1].pageSettings[i].partials
            var back_partials = JSON.parse(JSON.stringify(partialsPage));
            vuepartials = rawSettings[1].pageSettings[i].VueComponents
            pageexternalJs = rawSettings[1].pageSettings[i].PageExternalJs;
            pageexternalCss = rawSettings[1].pageSettings[i].PageExternalCss;
            pageMetaInfo = rawSettings[1].pageSettings[i].PageMetaInfo;
            pageSeoTitle = rawSettings[1].pageSettings[i].PageSEOTitle;
            if(pageMetaInfo.length>0){
                for (let a = 0; a < pageMetaInfo.length; a++) {
                   tophead = tophead + '<meta name="' + pageMetaInfo[a].name + '" content="' + pageMetaInfo[a].content + '">'
                }
               }
               if(pageexternalJs.length>0){
                for (let a = 0; a < pageexternalJs.length; a++) {
                   if (pageexternalJs[a].linkposition == 'starthead') {
                       tophead = tophead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                   } else if (pageexternalJs[a].linkposition == 'endhead') {
                       endhead = endhead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                   } else if (pageexternalJs[a].linkposition == 'startbody') {
                       topbody = topbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                   } else if (pageexternalJs[a].linkposition == 'endbody') {
                       endbody = endbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                   }
                }
               }

               
               if(pageexternalCss.length>0){
                for (let a = 0; a < pageexternalCss.length; a++) {
                   if (pageexternalCss[a].linkposition == 'starthead') {
                       tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                   } else if (pageexternalCss[a].linkposition == 'endhead') {
                       endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                   } else if (pageexternalCss[a].linkposition == 'startbody') {
                       topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                   } else if (pageexternalCss[a].linkposition == 'endbody') {
                       endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '"> '
                   }
                }
               }
            if (vuepartials != undefined && vuepartials.length > 0) {
                var mainVuefile = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/back_main.js');
                mainVuefile = mainVuefile.data

                for (let x = 0; x < vuepartials.length; x++) {
                    let temp = mainVuefile.replace(/@@vuecomponent@@/g, vuepartials[x].value.split('.')[0])
                    temp = temp.replace('./' + vuepartials[x].value.split('.')[0], folderUrl + '/Partials/' + vuepartials[x].partialsName + '/' + vuepartials[x].value.split('.')[0])

                    await axios.post(config.baseURL + '/flows-dir-listing', {
                            filename: config.pluginsPath + '/public/' +  vuepartials[x].value.split('.')[0] + '.js',
                            text: temp,
                            type: 'file'
                        }).then(async (res) => {
                            contentpartials = contentpartials + '<script src="./../assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js' + '"><\/script>'

                            axios.get(config.baseURL + '/webpack-api?path=' + folderUrl + '/assets/client-plugins/' + vuepartials[x].value.split('.')[0] + '.js', {})
                                .then((response) => {
                                    console.log("called webpack_file api successfully:")
                                })
                                .catch((e) => {
                                    console.log(e)
                                })
                        })
                        .catch((e) => {
                            console.log(e)
                        })

                }
            }
            if (Layout == 'Blank') {
                await axios.post(config.baseURL + '/flows-dir-listing', {
                        filename: folderUrl + '/Layout/Blank.layout',
                        text: '{{{ contents }}}',
                        type: 'file'
                    })
                    .catch((e) => {
                        console.log("error while blank file creation")
                    })
            }
             layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + Layout + '.layout');
            var responseMetal = ''
            let contentpartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + nameF + '.html');
            contentpartials = contentpartials.data
            var backlayoutdata = JSON.parse(JSON.stringify(layoutdata));
             let newFolderName = folderUrl + '/temp';
             await axios.post(config.baseURL + '/flows-dir-listing', {
                     foldername: newFolderName,
                     type: 'folder'
               }).then(async(res) => {
                 for (let p = 0; p < back_partials.length; p++) {
                     let responsepartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + Object.keys(back_partials[p]) + '/' + back_partials[p][Object.keys(back_partials[p])] + '.partial');
                     responsepartials = responsepartials.data
                     let result = (getFromBetween.get(responsepartials, "{{>", "}}"));
                     var DefaultParams = [];
                     if (result.length > 0) {
                         var resultParam = result
                         for (let q = 0; q < resultParam.length; q++) {
                             var temp;
                             temp = resultParam[q].trim()
                             result[q] = result[q].trim()
                             temp = temp.replace(/&nbsp;/g, ' ')
                             temp = temp.replace(/\s+/g, ' ');
                             temp = temp.trim();
                             temp = temp.split(' ')
                             for (let j = 0; j < temp.length; j++) {
                                 if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                     if (temp[j + 1] != undefined) {
                                         result[q] = temp[0];
                                         if (temp[j + 1].indexOf('.') > -1) {
                                             let x = temp[j + 1]
                                             x = temp[j + 1].split(/'/)[1];
                                             let obj = {}
                                             obj[temp[0]] = x
                                             DefaultParams.push(obj)
                                             break;
                                         }
                                     } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                         result[q] = temp[0];
                                         if (temp[j]) {
                                             let x = temp[j]
                                             x = temp[j].split(/'/)[1];
                                             let obj = {}
                                             obj[temp[0]] = x
                                             DefaultParams.push(obj)
                                             break;
                                         }
                                     }
                                 }
                             }
                         }
                         for (let j = 0; j < result.length; j++) {
                             temp1 = '{{> ' + Object.keys(DefaultParams[j])[0] + " id='" + DefaultParams[j][Object.keys(DefaultParams[j])[0]] + "' }}"

                             temp2 = '{{> ' + Object.keys(DefaultParams[j])[0] + '_' + DefaultParams[j][Object.keys(DefaultParams[j])[0]].split('.')[0] + " id='" + DefaultParams[j][Object.keys(DefaultParams[j])[0]] + "' }}"
                             responsepartials = responsepartials.split(temp1).join(temp2)
                         }
                     }
                     await axios.post(config.baseURL + '/flows-dir-listing', {
                         filename: folderUrl + '/temp/' + Object.keys(back_partials[p]) + '_' + back_partials[p][Object.keys(back_partials[p])] + '.html',
                         text: responsepartials,
                         type: 'file'
                     }).catch((e) => {
                         console.log(e)
                     })
                 }
                 let result = (getFromBetween.get(layoutdata.data, "{{>", "}}"));
                 DefaultParams = [];
                 if (result.length > 0) {
                     var resultParam = result
                     for (let w = 0; w < resultParam.length; w++) {
                         var temp;
                         temp = resultParam[w].trim()
                         result[w] = result[w].trim()
                         temp = temp.replace(/&nbsp;/g, ' ')
                         temp = temp.replace(/\s+/g, ' ');
                         temp = temp.trim();
                         temp = temp.split(' ')
                         for (let j = 0; j < temp.length; j++) {
                             if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                 if (temp[j + 1] != undefined) {
                                     result[w] = temp[0];
                                     if (temp[j + 1].indexOf('.') > -1) {
                                         let x = temp[j + 1]
                                         x = temp[j + 1].split(/'/)[1];
                                         let obj = {}
                                         obj[temp[0]] = x
                                         DefaultParams.push(obj)
                                         break;
                                     }
                                 } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                     result[w] = temp[0];
                                     if (temp[j]) {
                                         let x = temp[j]
                                         x = temp[j].split(/'/)[1];
                                         let obj = {}
                                         obj[temp[0]] = x
                                         DefaultParams.push(obj)
                                         break;
                                     }
                                 }
                             }
                         }
                     }
                     for (let j = 0; j < result.length; j++) {
                         for (let w = 0; w < back_partials.length; w++) {
                             if (Object.keys(back_partials[w])[0] == result[j]) {

                                 temp1 = '{{> ' + Object.keys(back_partials[w])[0] + ' }}'
                                 if(layoutdata.data.search(temp1)>0){

                                 temp2 = '{{> ' + Object.keys(back_partials[w])[0] + '_' + back_partials[w][Object.keys(back_partials[w])[0]] + ' }}'
                                 }
                                 else{
                                  temp1 = '{{> ' + Object.keys(back_partials[w])[0] + " id='" + DefaultParams[j][Object.keys(back_partials[w])[0]] + "' }}"

                                  temp2 = '{{> ' + Object.keys(back_partials[w])[0] + '_' + back_partials[w][Object.keys(back_partials[w])[0]] + " id='" + DefaultParams[j][Object.keys(back_partials[w])[0]] + "' }}"
                                 }
                                 console.log('temp1:',temp1)
                                 console.log('temp2:',temp2)
                                 if(layoutdata.data.split(temp1).join(temp2)){
                                  console.log('replacing in layout file successfully')
                                 layoutdata.data = layoutdata.data.split(temp1).join(temp2)
                                 }else{
                                  console.log('replacing in layout file failed')
                                 }
                             }
                         }

                     }
                 }

             })
             .catch((e) => {
                 console.log(e)
             })

            responseMetal = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place')\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

            var index = responseMetal.search('.source')

            responseMetal = responseMetal.substr(0, index + 9) + this.$store.state.fileUrl.replace(/\\/g, "\/") + '/Preview' + responseMetal.substr(index + 9)
            var indexPartial = responseMetal.search("handlebars");

            for (var j = 0; j < partialsPage.length; j++) {
              var temp1, temp2;
                  temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".partial' }}"

                  temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".partial' }}"
              
                console.log('temp1:',temp1)
                console.log('temp2:',temp2)
                if (contentpartials.match(temp1)) {
                    contentpartials = contentpartials.split(temp1).join(temp2)
                  }
                var obj = {}
                var key = Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]]
                console.log('key:',key)
                console.log('partialsPage:',partialsPage[j][Object.keys(partialsPage[j])[0]])
                obj[key] = partialsPage[j][Object.keys(partialsPage[j])[0]]
                partialsPage[j] = []
                partialsPage[j] = obj
                    
            }
            for (var z = 0; z < partialsPage.length; z++) {
              let key = Object.keys(partialsPage[z])[0];
              let value = partialsPage[z]
              let key2 = key;
              key = key.trim();
              if (value[key2].match('partial')) {
                  key = key.split('.')[0]
                  var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[z])[0] + "_" + value[key2] + "').toString())\n"
              }
             else {
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[z])[0] + "_" + value[key2] + ".html').toString())\n"
            }
              partials = partials + temp;
          }

            responseMetal = responseMetal.substr(0, indexPartial + 14) + partials + responseMetal.substr(indexPartial + 14);
            console.log('final responseMetal:', responseMetal)
            var mainMetal = folderUrl + '/assets/metalsmith.js'
            var value = true;
            await axios.post(config.baseURL + '/flows-dir-listing', {
                    filename: mainMetal,
                    text: responseMetal,
                    type: 'file'
                }).then(async (response) => {
                    var newFolderName = folderUrl + '/Preview';
                    await axios.post(config.baseURL + '/flows-dir-listing', {
                            foldername: newFolderName,
                            type: 'folder'
                        })
                        .then(async (res) => {
                            console.log(res);
                            let newContent = "<html>\n<head>\n" + tophead +
                            "<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n" + 
                            "<title>" + pageSeoTitle + "</title>" +
                            "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />\n" +
                            "<script src='https://code.jquery.com/jquery-3.2.1.js'><\/script>\n" +
                            "<link rel='stylesheet' href='https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css'/>\n" +
                            '<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"><\/script>\n' +
                            "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
                            "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js' crossorigin='anonymous'><\/script>\n" +
                            "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
                            "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
                            "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
                            "<link rel='stylesheet' href='./../main-files/main.css'/>\n" + endhead + "</head><body>\n" +
                            layoutdata.data + topbody +
                            '\n<script src="./../assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/flowz-builder-engine.js"><\/script>\n' +
                            '<script src="./../assets/client-plugins/shopping-cart.js"><\/script>\n' +
                            // '<script src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/js/product-search.js"><\/script>'+
                            '<script src="./../main-files/main.js"><\/script>\n' + endbody +
                            '</body>\n</html>';

                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                filename: folderUrl + '/Layout/' + Layout + '.layout',
                                text: newContent,
                                type: 'file'
                            })

                            var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';;

                            if (Layout == 'Blank') {
                                
                                rawContent = '---\nlayout: ' + Layout + '.layout\n---\n' + rawContent
                                
                            } else {
                                let tempValueLayout = '---\nlayout: ' + Layout + '.layout\n---\n';
                                rawContent = tempValueLayout + rawContent
                            }

                            var previewFileName = folderUrl + '/Preview/' + nameF + '.hbs';

                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                    filename: previewFileName,
                                    text: rawContent,
                                    type: 'file'
                                })
                                .then(async (res) => {
                                    this.saveFileLoading = false;

                                    await axios.get(config.baseURL + '/metalsmith?path=' + folderUrl, {}).then(async (response) => {

                                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                                    filename: mainMetal,
                                                    text: responseMetal,
                                                    type: 'file'
                                                })
                                                .then(async (res) => {
                                                    let previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
                                                    previewFile = folderUrl.replace('/var/www/html', '');

                                                    await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                                        .then(async (res) => {
                                                          await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                                                            // console.log(res);
                                                            await axios.post(config.baseURL + '/flows-dir-listing', {
                                                                    filename: folderUrl + '/Layout/' + Layout + '.layout',
                                                                    text: layoutdata.data,
                                                                    type: 'file'
                                                                })
                                                                .then(async (res) => {
                                                                    if (vuepartials != undefined && vuepartials.length > 0) {
                                                                        for (let x = 0; x < vuepartials.length; x++) {

                                                                            await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.pluginsPath + '/public/' + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
                                                                                       console.log(res)
                                                                                   })
                                                                                   .catch((e) => {
                                                                                       console.log(e)
                                                                                   })
                                                                        }
                                                                    }
                                                                    console.log("layout file reset")
                                                                    if (Layout == 'Blank') {
                                                                       await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
                                                                            .catch((e) => {
                                                                                console.log("error while deleting blank.layout file")
                                                                            })
                                                                    }

                                                                })

                                                        })
                                                        .catch((e) => {
                                                            console.log(e)
                                                        })
                                                })

                                        })
                                        .catch((err) => {
                                            console.log('error while creating metalsmithJSON file' + err)
                                            axios.post(config.baseURL + '/flows-dir-listing', {
                                            filename: mainMetal,
                                            text: responseMetal,
                                            type: 'file'
                                            })
                                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                            console.log(e)
                                        })
                                })
                                .catch((e) => {
                                    this.saveFileLoading = false
                                    this.$message({
                                        showClose: true,
                                        message: 'File not saved! Please try again.',
                                        type: 'error'
                                    });
                                    axios.post(config.baseURL + '/flows-dir-listing', {
                                    filename: mainMetal,
                                    text: responseMetal,
                                    type: 'file'
                                    })
                                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                    console.log(e)
                                })

                        })
                        .catch((e) => {
                            console.log(e)
                            axios.post(config.baseURL + '/flows-dir-listing', {
                            filename: mainMetal,
                            text: responseMetal,
                            type: 'file'
                            })
                          axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})
                        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                        })

                })
                .catch((e) => {
                    console.log('error while creating metalsmithJSON file' + e)
                  axios.post(config.baseURL + '/flows-dir-listing', {
                    filename: mainMetal,
                    text: responseMetal,
                    type: 'file'
                    })
                  axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e)=>{console.log(e)})

                })

        // Open in new window
        // window.open(config.ipAddress + '/websites/' + this.repoName + '/public/');
        window.open('http://' + this.repoName + '.'+ config.ipAddress + '/public/');
        
        // Publish with Zeit Now
        axios.post(config.baseURL + '/publish-now', {
            projectName : this.repoName
        })
        .then((res) => {
          let serverUrl = res.data;
          // window.open( serverUrl + '/public/');
          this.$message({
            showClose: true,
            message: 'Successfully Published.',
            type: 'success'
          });
          console.log(res.data);
          this.previewLoader = false;
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: 'Failed! Please try again.',
            type: 'error'
          });
          console.log(e);
          this.previewLoader = false;
        });
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
    //     console.log(res.data);
    //     this.previewLoader = false;
    //   })
    //   .catch((e) => {
    //     this.$message({
    //       showClose: true,
    //       message: 'Failed! Please try again.',
    //       type: 'error'
    //     });
    //     console.log(e);
    //     this.previewLoader = false;
    //   });

    // }
  // },
  async mounted () {

    // console.log('Folder Url: ', localStorage.getItem('folderUrl'));

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
  right: 50px;
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
