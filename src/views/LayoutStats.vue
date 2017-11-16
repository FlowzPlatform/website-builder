<template>
  <div class="LayoutStats">
  	<div class="container-fluid">
  		<div class="row" style="margin-top: 40px;">
	      <div class="col-md-12">
	        <div class="creative-table">
	          <div class="table-title title-style-3">
	            <h4>Layout List</h4>
	            <p>Project Name: {{repoName}}</p>
	          </div>
	          <div class="table-body">
	            <table class="table table-hover">
	              <thead>
	                <tr>
	                  <td width="100px">Sr. No.</td>
	                  <td width="40%">Layout Name</td>
	                  <td>Partials Used</td>
	                </tr>
	              </thead>
	              <tbody>
	                <tr v-for="item in tablePagesData">
	                  <td>{{item.number}}</td>
	                  <td>{{item.layoutName}}.layout</td>
	                  <td v-html="item.partialsName"></td>
	                </tr>
	              </tbody>
	            </table>
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
  name: 'LayoutStats',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      repoName: '',
      tablePagesData: [],
    }
  },
  component: {
  },
  methods: {
  	async init () {

      let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let urlparts = configFileUrl.split("/");
      let fileNameOrginal = urlparts[urlparts.length - 1];
      let fileName = '/' + urlparts[urlparts.length - 1];
      
      let folderUrl = configFileUrl.replace(fileName, '');

      this.configData = await axios.get( config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json');
      if(this.configData.status == 200 || this.configData.status == 204){
        console.log('Config file found! Updating fields..');

        this.settings = JSON.parse(this.configData.data);

        this.repoName = this.settings[0].repoSettings[0].RepositoryName;

        this.tablePagesData = [];

        for(var i = 1; i <= Object.keys(this.settings[2].layoutOptions[0].Layout).length; i++){
          let partialsList = Object.values(this.settings[2].layoutOptions[0].Layout[i].partialsList);
          let partialsListString = '';
          for(let j = 0; j < partialsList.length; j++){
            partialsListString += '<span class="label label-info" style="padding: 0.7em .6em .6em; margin-right: 5px; ">' + partialsList[j] + '</span>';
          }
          this.tablePagesData.push({
            number: i,
            layoutName: this.settings[2].layoutOptions[0].Layout[i].value,
            partialsName: partialsListString
          });
        }

      } else {
        console.log('Cannot get config file!');
      } 
  	}
  },
  async mounted () {
  	let response = await this.init();
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
.PartialStats {
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

.title-style-3{
  background: linear-gradient(to right, #CF396F 0%, #F7E28B 100%);
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
</style>
