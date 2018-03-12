<template id="GrapesComponent">
  <div class="GrapesComponent">
    <a class="btn-file-name">{{filename}}</a>
    <!-- <h5> <b>{{filename}}</b>  </h5> -->
    <div id="gjs" style="width: 100%; height: 88.8vh !important; margin-bottom: 45px"></div>
  </div>
</template>

<script>

const beautify = require('beautify');
import axios from 'axios';
import _ from 'lodash';
import Cookies from 'js-cookie';

var daex = require('json-daex')

const config = require('../config');
import Emitter from '../mixins/emitter'

let editor = null;
let cssUrls = [{
            'Bootstrap 3': '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >',
            'Bootstrap 4': '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">',
            'Google Fonts': '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">',
            'Font Awesome': '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">',
            'Flowz Blocks': '<link rel="stylesheet" href="https://res.cloudinary.com/flowz/raw/upload/v1515673729/builder/css/flowz_blocks.css" type="text/css">'
            }];

let css = ':root {margin-top: 0px;}.clearfix{clear:both}.header-banner{padding-top: 35px; padding-bottom: 100px; color: #ffffff; font-family: Helvetica, serif; font-weight: 100; background-image:url("http://grapesjs.com/img/bg-gr-v.png"), url("http://grapesjs.com/img/work-desk.jpg"); background-attachment: fixed, scroll; background-position:left top, center center; background-repeat:repeat-y, no-repeat; background-size: contain, cover;}.container-width{width: 90%; max-width: 1150px; margin: 0 auto;}.logo-container{float: left; width: 50%;}.logo{background-color: #fff; border-radius: 5px; width: 130px; padding: 10px; min-height: 30px; text-align: center; line-height: 30px; color: #4d114f; font-size: 23px;}.navbar{float: right; width: 50%;}.menu-item{float:right; font-size: 15px; color:#eee; width: 130px; padding: 10px; min-height: 50px; text-align: center; line-height: 30px; font-weight: 400;}.lead-title{padding: 25px; margin: 150px 50px 30px 30px; font-size: 40px;}.sub-lead-title{max-width: 650px; line-height:30px; margin-bottom:30px; color: #c6c6c6;}.lead-btn{margin-top: 15px; padding:10px; width:190px; min-height:30px; font-size:20px; text-align:center; letter-spacing:3px; line-height:30px; background-color:#d983a6; border-radius:5px; transition: all 0.5s ease; cursor: pointer;}.lead-btn:hover{background-color:#ffffff; color:#4c114e;}.lead-btn:active{background-color:#4d114f; color:#fff;}.flex-sect{background-color: #fafafa; padding: 100px 0; font-family: Helvetica, serif;}.flex-title{margin-bottom: 15px; font-size: 2em; text-align: center; font-weight: 700; color:#555; padding: 5px;}.flex-desc{margin-bottom: 55px; font-size: 1em; color: rgba(0, 0, 0, 0.5); text-align: center; padding: 5px;}.cards{padding: 20px 0; display: flex; justify-content: space-around; flex-flow: wrap;}.card{background-color: white; height: 300px; width:300px; margin-bottom:30px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2); border-radius: 2px; transition: all 0.5s ease; font-weight: 100; overflow: hidden;}.card:hover{margin-top: -5px; box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);}.card-header{height: 155px; background-image:url("http://placehold.it/350x250/78c5d6/fff/image1.jpg"); background-size:cover; background-position:center center;}.card-header.ch2{background-image:url("http://placehold.it/350x250/459ba8/fff/image2.jpg");}.card-header.ch3{background-image:url("http://placehold.it/350x250/79c267/fff/image3.jpg");}.card-header.ch4{background-image:url("http://placehold.it/350x250/c5d647/fff/image4.jpg");}.card-header.ch5{background-image:url("http://placehold.it/350x250/f28c33/fff/image5.jpg");}.card-header.ch6{background-image:url("http://placehold.it/350x250/e868a2/fff/image6.jpg");}.card-body{padding: 15px 15px 5px 15px; color: #555;}.card-title{font-size: 1.4em; margin-bottom: 5px;}.card-sub-title{color: #b3b3b3; font-size: 1em; margin-bottom: 15px;}.card-desc{font-size: 0.85rem; line-height: 17px;}.am-sect{padding-top: 100px; padding-bottom: 100px; font-family: Helvetica, serif;}.img-phone{float: left;}.am-container{display: flex; flex-wrap: wrap; align-items: center; justify-content: space-around;}/* .am-container{perspective: 1000px;}*/ .am-content{float:left; padding:7px; width: 490px; color: #444; font-weight: 100; margin-top: 50px; /*transform: rotateX(0deg) rotateY(-20deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);*/}.am-pre{padding:7px; color:#b1b1b1; font-size:15px;}.am-title{padding:7px; font-size:25px; font-weight: 400;}.am-desc{padding:7px; font-size:17px; line-height:25px;}.am-post{padding:7px; line-height:25px; font-size:13px;}.blk-sect{padding-top: 100px; padding-bottom: 100px; background-color: #222222; font-family: Helvetica, serif;}.blk-title{color:#fff; font-size:25px; text-align:center; margin-bottom: 15px;}.blk-desc{color:#b1b1b1; font-size:15px; text-align:center; max-width:700px; margin:0 auto; font-weight:100;}.price-cards{margin-top: 70px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-around;}.price-card-cont{width: 300px; padding: 7px; float:left;}.price-card{margin:0 auto; min-height:350px; background-color:#d983a6; border-radius:5px; font-weight: 100; color: #fff; width: 90%;}.pc-title{font-weight:100; letter-spacing:3px; text-align:center; font-size:25px; background-color:rgba(0, 0, 0, 0.1); padding:20px;}.pc-desc{padding: 75px 0; text-align: center;}.pc-feature{color:rgba(255,255,255,0.5); background-color:rgba(0, 0, 0, 0.1); letter-spacing:2px; font-size:15px; padding:10px 20px;}.pc-feature:nth-of-type(2n){background-color:transparent;}.pc-amount{background-color:rgba(0, 0, 0, 0.1); font-size: 35px; text-align: center; padding: 35px 0;}.pc-regular{background-color: #da78a0;}.pc-enterprise{background-color: #d66a96;}.footer-under{background-color: #312833; padding-bottom: 100px; padding-top: 100px; min-height: 500px; color:#eee; position: relative; font-weight: 100; font-family: Helvetica,serif;}.led{border-radius: 100%; width: 10px; height: 10px; background-color: rgba(0, 0, 0, 0.15); float: left; margin: 2px; transition: all 5s ease;}.led:hover{background-color: #c29fca;/* #eac229 */ box-shadow: 0 0 5px #9d7aa5, 0 0 10px #e6c3ee;/* 0 0 10px 0 #efc111 */ transition: all 0s ease;}.copyright{background-color: rgba(0, 0, 0, 0.15); color: rgba(238, 238, 238, 0.5); bottom: 0; padding: 1em 0; position: absolute; width: 100%; font-size: 0.75em;}.made-with{float: left; width: 50%; padding: 5px 0;}.foot-social-btns{display: none; float: right; width: 50%; text-align: right; padding: 5px 0;}.footer-container{display: flex; flex-wrap: wrap; align-items: stretch; justify-content: space-around;}.foot-list{float: left; width: 200px;}.foot-list-title{font-weight: 400; margin-bottom: 10px; padding: 0.5em 0;}.foot-list-item{color: rgba(238, 238, 238, 0.8); font-size: 0.8em; padding: 0.5em 0;}.foot-list-item:hover{color: rgba(238, 238, 238, 1);}.foot-form-cont{width: 300px; float: right;}.foot-form-title{color: rgba(255,255,255,0.75); font-weight: 400; margin-bottom: 10px; padding: 0.5em 0; text-align: right; font-size: 2em;}.foot-form-desc{font-size: 0.8em; color: rgba(255,255,255,0.55); line-height: 20px; text-align: right; margin-bottom: 15px;}.sub-input{width: 100%; margin-bottom: 15px; padding: 7px 10px; border-radius: 2px; color:#fff; background-color: #554c57; border: none;}.sub-btn{width: 100%; margin-bottom: 15px; background-color: #785580; border: none; color:#fff; border-radius: 2px; padding: 7px 10px; font-size: 1em; cursor: pointer;}.sub-btn:hover{background-color: #91699a;}.sub-btn:active{background-color: #573f5c;}.blk-row::after{content: ""; clear: both; display: block;}.blk-row{padding: 10px;}.blk1{width: 100%; padding: 10px; min-height: 75px;}.blk2{float: left; width: 50%; padding: 10px; min-height: 75px;}.blk3{float: left; width: 33.3333%; padding: 10px; min-height: 75px;}.blk37l{float: left; width: 30%; padding: 10px; min-height: 75px;}.blk37r{float: left; width: 70%; padding: 10px; min-height: 75px;}.heading{padding: 10px;}.paragraph{padding: 10px;}.bdg-sect{padding-top:100px; padding-bottom:100px; font-family: Helvetica, serif; background-color: #fafafa;}.bdg-title{text-align: center; font-size: 2em; margin-bottom: 55px; color: #555555;}.badges{padding:20px; display: flex; justify-content: space-around; align-items: flex-start; flex-wrap: wrap;}.badge{width: 290px !important; font-family: Helvetica, serif; background-color: white !important; margin-bottom:30px !important; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2) !important; border-radius: 3px !important; font-weight: 100 !important; overflow: hidden !important; text-align: center !important;}.badge-header{height: 115px; background-image:url("http://grapesjs.com/img/bg-gr-v.png"), url("http://grapesjs.com/img/work-desk.jpg"); background-position:left top, center center; background-attachment:scroll, fixed; overflow: hidden;}.blurer{filter: blur(5px);}.badge-name{font-size: 1.4em; margin-bottom: 5px;}.badge-role{color: #777; font-size: 1em; margin-bottom: 25px;}.badge-desc{font-size: 0.85rem; line-height: 20px;}.badge-avatar{width:100px; height:100px; border-radius: 100%; border: 5px solid #fff; box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2); margin-top: -75px; position: relative;}.badge-body{margin: 35px 10px;}.badge-foot{color:#fff; background-color:#a290a5; padding-top:13px; padding-bottom:13px; display: flex; justify-content: center;}.badge-link{height: 35px; width: 35px; line-height: 35px; font-weight: 700; background-color: #fff; color: #a290a5; display: block; border-radius: 100%; margin: 0 10px;}.quote{color:#777; font-weight: 300; padding: 10px; box-shadow: -5px 0 0 0 #ccc; font-style: italic; margin: 20px 30px;}.iframe{height: 300px; width: 500px;}.row{display: table; padding: 10px; width: 100%;}.cell{flex-grow:1 !important; flex-basis:100% !important; height: 75px;}.cell30{width: 30%;}.cell70{width: 70%;}@media (max-width: 768px){.foot-form-cont{width:400px;}.foot-form-title{width: auto;}.cell, .cell30, .cell70{width: 100%; display: block;}}@media (max-width: 480px){.foot-lists{display:none;}}.navbar{width: 100%;}.navbar-menu-link{color: #000;}.navbar-brand{color:#000}.gjs-am-file-uploader>form{min-height: 325px !important;}.bootstrapblock{padding: 20px;} .form{border-top-left-radius:3px; border-top-right-radius:3px; border-bottom-right-radius:3px; border-bottom-left-radius:3px; padding-top:10px; padding-right:15px; padding-bottom:10px; padding-left:15px; background-color:rgba(0, 0, 0, 0.2);}.input{width:100%; margin-bottom:15px; padding-top:7px; padding-right:10px; padding-bottom:7px; padding-left:10px; border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; color:rgb(255, 255, 255); background-color:rgb(85, 76, 87); border-top-width:initial; border-right-width:initial; border-bottom-width:initial; border-left-width:initial; border-top-style:none; border-right-style:none; border-bottom-style:none; border-left-style:none; border-top-color:initial; border-right-color:initial; border-bottom-color:initial; border-left-color:initial; border-image-source:initial; border-image-slice:initial; border-image-width:initial; border-image-outset:initial; border-image-repeat:initial;}.textarea{width:100%; margin-bottom:15px; padding-top:7px; padding-right:10px; padding-bottom:7px; padding-left:10px; border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; color:rgb(255, 255, 255); background-color:rgb(85, 76, 87); border-top-width:initial; border-right-width:initial; border-bottom-width:initial; border-left-width:initial; border-top-style:none; border-right-style:none; border-bottom-style:none; border-left-style:none; border-top-color:initial; border-right-color:initial; border-bottom-color:initial; border-left-color:initial; border-image-source:initial; border-image-slice:initial; border-image-width:initial; border-image-outset:initial; border-image-repeat:initial;}.label{width:100%; display:block;}.button{width:100%; margin-top:15px; margin-right:0px; margin-bottom:15px; margin-left:0px; background-color:rgb(120, 85, 128); border-top-width:initial; border-right-width:initial; border-bottom-width:initial; border-left-width:initial; border-top-style:none; border-right-style:none; border-bottom-style:none; border-left-style:none; border-top-color:initial; border-right-color:initial; border-bottom-color:initial; border-left-color:initial; border-image-source:initial; border-image-slice:initial; border-image-width:initial; border-image-outset:initial; border-image-repeat:initial; color:rgb(255, 255, 255); border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; padding-top:7px; padding-right:10px; padding-bottom:7px; padding-left:10px; font-size:1em; cursor:pointer;}';

export default {
    name: 'GrapesComponent',
    mixins: [Emitter],
    data () {
    return {
      brandName: '',
      imageBlob: '',
      globalVariables: [],
      globalCssVariables: [],
      pageCss: [],
      savedFile: false,
      fileUrl: '',
      filename:'',
      assetImages: []
    }
  },
    async mounted () {
        this.fileSaved = false;

        this.fileUrl = this.$store.state.fileUrl;



        // // get bootstrap css
        // let bootstrapcss = await axios.get('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

        // // get bootstrap v4 css
        // let bootstrapv4css = await axios.get('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css');

        // // get froala css
        // let froalacss = await axios.get('https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css');

        // // get fontawesome css
        // let fontawesomecss = await axios.get('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');

        
        // Get Config File
        let configFileUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
        let urlparts = configFileUrl.split("/");
        let fileNameOrginal = urlparts[urlparts.length - 1];
        let fileName = '';
        // let fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];

        if(_.includes(configFileUrl, 'Partials')){
            fileName = '/' + urlparts[urlparts.length - 3] + '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        } else {
            fileName = '/' + urlparts[urlparts.length - 2] + '/' + urlparts[urlparts.length - 1];
        }

        var folderUrl = configFileUrl.replace(fileName, '');

        let foldername = folderUrl.split('/');
        // this.filename=fileName.split('/')[fileName.split('/').length-1]
        // this.filename=fileName.replace('/','')
        foldername = foldername[6];
        //// console.log('Folder Name: ', configFileUrl.replace(fileName, ''));
        localStorage.setItem('folderUrl', configFileUrl.replace(fileName, ''));

        let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + foldername );
        this.filename=responseConfig.data.websiteName+'/'+ fileName.replace('/','')
        let rawConfigs = responseConfig.data.configData;
        this.brandName = rawConfigs[1].projectSettings[0].BrandName;
        this.globalVariables = rawConfigs[1].projectSettings[1].GlobalVariables;
        this.globalCssVariables = rawConfigs[1].projectSettings[1].GlobalCssVariables;
        var images = rawConfigs[1].projectSettings[1].AssetImages;

        let pageIndex = daex.indexFirst(rawConfigs[1].pageSettings, {
          'PageName': fileNameOrginal
        });

        //console.log('Page index out side;', pageIndex);

        // Fetch for existing cssImports
        let fileData = this.$store.state.content;
        let htmlObject = $('<div/>').append(fileData);
        htmlObject.find(".cssImports").remove();

        let cssUrlString = '';

        if(pageIndex !== null){
            //console.log(pageIndex)
            this.pageCss = rawConfigs[1].pageSettings[pageIndex].PageCss;

            for (let i=0;  i<this.pageCss.length; i++) {
                if (cssUrls[0][this.pageCss[i]]){
                    cssUrlString += cssUrls[0][this.pageCss[i]];
                } 
            }
        } else {
            cssUrlString = '';
        }
        //console.log('String ', cssUrlString);
        // let cssUrlLinks = '';
        // for(let i = 0; i < this.pageCss.length; i++){
        ////     console.log(this.pageCss[i]);
        //     for(let j = 0; j < cssUrls.length; j++){
        //         if(this.pageCss[i] == Object.keys(this.cssUrls[j])){
        ////             console.log('Match!', Object.keys(this.cssUrls[j]));
        //         } else {
        ////             console.log('Not Match!', Object.keys(this.cssUrls[j]));
        //         }
        //     }
        // }

        // Clear root element if already stored in file
        // let allContents = this.$store.state.content;
        // let fileContents = allContents.substr(allContents.search(':root{'), allContents.search('.'));
        //// console.log('File Sub Contents:', fileContents);

        // Set CSS variable colors
        let variableCss = ':root{\n';

        if(this.globalCssVariables != undefined){
            for(var i = 0; i < this.globalCssVariables.length; i++){
                if(this.globalCssVariables[i].variableType == 'px'){
                    variableCss += '\t' + this.globalCssVariables[i].variableName + ': ' + this.globalCssVariables[i].variableValue + 'px;\n';
                } else if (this.globalCssVariables[i].variableType == 'percent'){
                    variableCss += '\t' + this.globalCssVariables[i].variableName + ': ' + this.globalCssVariables[i].variableValue + '%;\n';
                } else {
                    variableCss += '\t' + this.globalCssVariables[i].variableName + ': ' + this.globalCssVariables[i].variableValue + ';\n';
                }
            } 
        }

        

        variableCss += '}'

        // let imageData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/public/assets/brand-logo.png');
        // this.imageBlob = imageData.data;

        var blkStyle = '.blk-row::after{ content: ""; clear: both; display: block;} .blk-row{padding: 10px;}';

        var plp = 'http://placehold.it/350x250/';
        // var images = ['https://cdn.filestackcontent.com/qbT0MlZLToqn6JTHPdBy', 
        //     'https://imgur.com/XQuOMKc.png', 'https://imgur.com/fBuNwuy.jpg', 'https://imgur.com/GgCaYku.jpg', 'https://imgur.com/AGMTzXe.jpg', plp+'78c5d6/fff/image1.jpg', plp+'459ba8/fff/image2.jpg', plp+'79c267/fff/image3.jpg',
        //     plp+'c5d647/fff/image4.jpg', plp+'f28c33/fff/image5.jpg', plp+'e868a2/fff/image6.jpg', plp+'cc4360/fff/image7.jpg',
        //     'https://imgur.com/IbSijwv.jpg', 'https://imgur.com/181uTO9.png', 'https://i.imgur.com/XTo3DiU.png'
        // ];

        images.push('http://placehold.it/350x250/78c5d6/fff/image1.jpg');
        images.push('http://placehold.it/350x250/459ba8/fff/image2.jpg');
        images.push('http://placehold.it/350x250/79c267/fff/image3.jpg');
        images.push('http://placehold.it/350x250/c5d647/fff/image4.jpg');
        images.push('http://placehold.it/350x250/f28c33/fff/image5.jpg');
        images.push('http://placehold.it/350x250/e868a2/fff/image6.jpg');
        images.push('http://placehold.it/350x250/cc4360/fff/image7.jpg');


        // 'gjs-plugin-ckeditor', 'grapesjs-blocks-bootstrap4', 'gjs-plugin-filestack', 'gjs-blocks-flexbox',

		editor = grapesjs.init({
			plugins: ['gjs-blocks-basic', 'gjs-plugin-forms', 'gjs-component-countdown', 'gjs-navbar', 'gjs-plugin-export', 'gjs-preset-webpage', 'gjs-aviary', 'global-variables-plugin', 'product-plugin', 'flowz-blocks' ],
            pluginsOpts: {
                'gjs-plugin-filestack': {
                    'key': 'AgfKKwgZjQ8iLBVKGVXMdz',
                    'filestackOpts': {
                        'fromSources':["local_file_system","imagesearch","facebook","instagram","googledrive","dropbox","flickr","onedrive"]
                    }
                }
            },
      		container : '#gjs',
      		components: '<div class="cssImports">' + cssUrlString + '</div>' + htmlObject.html(),
            allowScripts: true,
      		storageManager: {
                id: 'gjs-',                 // Prefix identifier that will be used inside storing and loading
                type: 'local',              // Type of the storage
                autosave: false,            // Store data automatically
                autoload: false,            // Autoload stored data on init
                stepsBeforeSave: 1,         // If autosave enabled, indicates how many changes are necessary before store method is triggered
                storeComponents: false,     // Enable/Disable storing of components in JSON format
                storeStyles: false,         // Enable/Disable storing of rules/style in JSON format
                storeHtml: false,           // Enable/Disable storing of components as HTML string
                storeCss: false,            // Enable/Disable storing of rules/style as CSS string
            },

            styleManager : {
              sectors: [{
                  name: 'General',
                  open: false,
                  buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
                },{
                  name: 'Dimension',
                  open: false,
                  buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                },{
                  name: 'Typography',
                  open: false,
                  buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
                },{
                  name: 'Decorations',
                  open: false,
                  buildProps: [ 'opacity', 'border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                },{
                  name: 'Extra',
                  open: false,
                  buildProps: ['transition', 'perspective', 'transform'],
                }
              ],
            },

            assetManager: {
              assets: images
            },

            blockManager: {
            blocks: [{
                id: 'b1',
                label: '1 Block',
                category: 'Basic',
                attributes: {
                    class: 'gjs-fonts gjs-f-b1'
                },
                content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
	          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	        </div>`
            }, {
                id: 'b2',
                label: '2 Blocks',
                category: 'Basic',
                attributes: {
                    class: 'gjs-fonts gjs-f-b2'
                },
                content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
	          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	        </div>`
            }, {
                id: 'b3',
                label: '3 Blocks',
                category: 'Basic',
                attributes: {
                    class: 'gjs-fonts gjs-f-b3'
                },
                content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
	          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	        </div>`
            }, {
                id: 'b4',
                label: '3/7 Block',
                category: 'Basic',
                attributes: {
                    class: 'gjs-fonts gjs-f-b37'
                },
                content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
	          <div class="cell cell30" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	          <div class="cell cell70" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
	        </div>`,
            }, {
                id: 'hero',
                label: 'Hero section',
                category: 'Section',
                content: '<header class="header-banner"> <div class="container-width">' +
                    '<div class="logo-container"><div class="logo">Flowz</div></div>' +
                    '<nav class="navbar">' +
                    '<div class="menu-item">BUILDER</div><div class="menu-item">TEMPLATE</div><div class="menu-item">WEB</div>' +
                    '</nav><div class="clearfix"></div>' +
                    '<div class="lead-title">Build your templates without coding</div>' +
                    '<div class="lead-btn">Try it now</div></div></header>',
                attributes: {
                    class: 'gjs-fonts gjs-f-hero'
                }
            }, {
                id: 'h1p',
                label: 'Text section',
                category: 'Typography',
                content: `<div>
	        <h1 class="heading">Insert title here</h1>
	        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
	        </div>`,
                attributes: {
                    class: 'gjs-fonts gjs-f-h1p'
                }
            }, {
                id: '3ba',
                label: 'Badges',
                category: 'Section',
                content: '<div class="badges">' +
                    '<div class="badge">' +
                    '<div class="badge-header"></div>' +
                    '<img class="badge-avatar" src="https://api.adorable.io/avatars/100/kavi@officebrain.png">' +
                    '<div class="badge-body">' +
                    '<div class="badge-name">Adam Smith</div><div class="badge-role">CEO</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>' +
                    '</div>' +
                    '<div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>' +
                    '</div>' +
                    '<div class="badge">' +
                    '<div class="badge-header"></div>' +
                    '<img class="badge-avatar" src="https://api.adorable.io/avatars/100/faizan@officebrain.png">' +
                    '<div class="badge-body">' +
                    '<div class="badge-name">John Black</div><div class="badge-role">Software Engineer</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>' +
                    '</div>' +
                    '<div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>' +
                    '</div>' +
                    '<div class="badge">' +
                    '<div class="badge-header"></div>' +
                    '<img class="badge-avatar" src="https://api.adorable.io/avatars/100/john@officebrain.png">' +
                    '<div class="badge-body">' +
                    '<div class="badge-name">Jessica White</div><div class="badge-role">Web Designer</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>' +
                    '</div>' +
                    '<div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span>' +
                    '</div>' +
                    '</div></div>',
                attributes: {
                    class: 'gjs-fonts gjs-f-3ba'
                }
            }, {
                id: 'text',
                label: 'Text',
                attributes: {
                    class: 'gjs-fonts gjs-f-text'
                },
                category: 'gjs-blocks-basic',
                content: {
                    type: 'text',
                    content: 'Insert your text here',
                    style: {
                        padding: '10px'
                    },
                    activeOnRender: 1
                },
            }, {
                id: 'image',
                label: 'Image',
                category: 'Basic',
                attributes: {
                    class: 'gjs-fonts gjs-f-image'
                },
                content: {
                    style: {
                        color: 'black'
                    },
                    type: 'image',
                    activeOnRender: 1
                },
            }, {
                id: 'quo',
                label: 'Quote',
                category: 'Typography',
                content: '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
                attributes: {
                    class: 'fa fa-quote-right'
                }
            }, {
                id: 'link',
                label: 'Link',
                category: 'Basic',
                attributes: {
                    class: 'fa fa-link'
                },
                content: {
                    type: 'link',
                    content: 'Link',
                    style: {
                        color: '#d983a6'
                    }
                },
            }, {
                id: 'map',
                label: 'Map',
                category: 'Extra',
                attributes: {
                    class: 'fa fa-map-o'
                },
                content: {
                    type: 'map',
                    style: {
                        height: '350px'
                    }
                },
            }, {
                id: 'video',
                label: 'Video',
                category: 'Basic',
                attributes: {
                    class: 'fa fa-youtube-play',
                },
                content: {
                    class: 'videoId',
                    type: 'video',
                    src: 'img/video2.webm',
                    style: {
                        height: '350px',
                        width: '615px',
                    }
                },
            }],
        },

        // ,{
        //     id: 'brandName',
        //     label: 'Brand Name',
        //     category: 'Global Variables',
        //     attributes: {
        //         class: 'fa fa-facebook-official',
        //     },
        //     content: '<span id="brandName">'+this.brandName+'</span>',
        // },{
        //     id: 'brandLogo',
        //     label: 'Brand Logo',
        //     category: 'Global Variables',
        //     attributes: {
        //         class: 'fa fa-flag',
        //     },
        //     content: '<img id="brandLogo" src='+this.imageBlob+' alt="company-logo" class="brand-logo"/>',
        // }

        // canvas: {
        //     styles: [
        //       'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css'
        //     ],
        //     scripts: [
        //       'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        //       'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',
        //       'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js'
        //     ],
        //   },

  		style: variableCss + css,
  		
  		});

        // let self = this;
        // editor.on("component:update", function() {
        //   let gethtml = beautify(editor.getHtml(), { format: 'html'});
        //   let getcss =  beautify(editor.getCss(), { format: 'css'});

        //   let fullhtml= "<style>\n" + getcss + "\n</style>\n"+
        //       "\n\n\n\n" + gethtml;
        //     self.$store.state.tabChange = fullhtml
        // });

        const categories = editor.BlockManager.getCategories();
        categories.each(category => {
            category.set('open', false).on('change:open', opened => {
                opened.get('open') && categories.each(category => {
                    category !== opened && category.set('open', false)
                })
            })
        });

        var bm = editor.BlockManager;
        // bm.add('brandName', {
        //     label: 'Brand Name',
        //     category: 'Global Variables',
        //     attributes: {
        //         class: 'fa fa-facebook-official',
        //     },
        //     content: '<span id="brandName">'+this.brandName+'</span>',
        // });

        // bm.add('brandLogo', {
        //     label: 'Brand Logo',
        //     category: 'Global Variables',
        //     attributes: {
        //         class: 'fa fa-flag',
        //     },
        //     content: '<img id="brandLogo" src="'+this.imageBlob+'" alt="company-logo" class="brand-logo"/>',
        // });
        
        // $('.gjs-frame').contents().find('body [id="brandName"]').html(this.brandName);
        
        // $('.gjs-frame').contents().find('body [id="brandLogo"]').attr('src', this.imageBlob);

        //// console.log('Global Variables length:', this.globalVariables.length);

        let self = this;

        setTimeout(async function(){
            for (var i = 0; i < self.globalVariables.length; i++){

            switch(self.globalVariables[i].variableType){

                case 'text':
                    if(($('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').length > 0)){
                        // console.log('variable value: ', self.globalVariables[i].variableValue);
                        // var encodeText = String(self.globalVariables[i].variableValue).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                        $('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').text(self.globalVariables[i].variableValue);
                    } 
                    break;

                case 'image':

                    var _varId = self.globalVariables[i].variableId;
                    var _varValue = self.globalVariables[i].variableValue;

                    if(($('.gjs-frame').contents().find('body [data-global-id="' + _varId + '"]').length > 0)){

                        $('.gjs-frame').contents().find('body [data-global-id="' + _varId + '"]').children('img').attr('src', _varValue);
                        
                        // // Get all local images
                        // if(self.globalVariables[i].isImageUrl == true){
                        //     //console.log('Image is URL link.');
                        //     $('.gjs-frame').contents().find('body [data-global-id="' + _varId + '"]').children('img').attr('src', _varValue);
                        // } else {
                        //     let getImage = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/public/assets/' + _varValue, {
                        //     })
                        //     .then((res) => {
                        //         // If image is present in assets folder
                        //         //console.log('Image found in /assets folder.');
                        //         $('.gjs-frame').contents().find('body [data-global-id="' + _varId + '"]').children('img').attr('src', res.data);
                        //     })
                        //     .catch((e) => {
                        //         //console.log(e);
                        //     }) 
                        // }
                      
                    } 
                    break;

                case 'hyperlink':
                    if(($('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').length > 0)){
                        $('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').children('a')[0].text = self.globalVariables[i].variableTitle;
                        $('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').children('a')[0].href = self.globalVariables[i].variableValue;
                    }
                    break; 

                case 'html':
                    if(($('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').length > 0)){
                        $('.gjs-frame').contents().find('body [data-global-id="' + self.globalVariables[i].variableId + '"]').html(self.globalVariables[i].variableValue);
                    } 
                    break;

                default:
                    //console.log('No Variables Found'); 
            }

        }
        },2000);

        

        // Collapse all Category Blocks
        // $(".gjs-block-category").trigger("click");
        // $(".gjs-block-category").removeClass("gjs-open");
        // $(".gjs-blocks-c").css('display', 'none');
        // $(".gjs-block-category").trigger("click");

	},


	methods:{
    async getSavedHtml() {
      let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' +  this.$store.state.fileUrl , {
      });
      this.$store.state.content = response.data
    },
    getHtml: function () {

          let grapesCss = beautify(editor.getCss(), { format: 'css'});
          let grapesHtml = beautify(editor.getHtml(), { format: 'html'});

          this.$store.state.content = "<style>\n" + grapesCss + "\n</style>\n"+
              "\n\n\n\n" + grapesHtml;

          this.savedFile = true;
      }
	},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.gjs-am-file-uploader{
    width: 0px !important;
    display: none;
}

.gjs-am-assets-cont{
    width: 100%;
}

.gjs-am-file-uploader>form{
    /*min-height: 325px;*/
    
    border: none !important;
}

.gjs-editor-cont{
  height: 95vh !important;
}

.gjs-mdl-dialog{
    width: 50%;
}

.gjs-am-preview-cont{
    width: 15% !important;
}

.btn-file-name {
  display: inline-block;
  background: #464646;
  border: 0.125em solid rgba(0,0,0,0.4);
  padding: 0.5em 1em;
  position: relative;

  color: #DCDCDC !important;
  font: 14px "Oswald", helvetica, arial, sans-serif;
  /*text-transform: uppercase;*/
  text-decoration: none;

  white-space: nowrap;

  margin-right: 3em;
}

.btn-file-name.double:before,
.btn-file-name:after {
  content: "";
  position: absolute;
  display: block;
  background: #464646;
  border: 0.125em solid rgba(0,0,0,0.4);

  width: 1.125em;
  height: 112%;
  top: -0.125em;

  -webkit-transform-origin: bottom left;
  -moz-transform-origin: bottom left;
  transform-origin: bottom left;
}

.btn-file-name:after {
  right: -0.25em;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  transform: skewX(-20deg);
  border-left: none;
}

.btn-file-name.double:before {
  left: -0.25em;
  -webkit-transform: skewX(20deg);
  -moz-transform: skewX(20deg);
  transform: skewX(20deg);
  border-right: none;
}

</style>
