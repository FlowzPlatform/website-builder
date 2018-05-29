<template>
  <div class="swatch">
      <Row>
        <div  style="padding-bottom: 10px;">
          <h2>Product & Imprint Color</h2>
        </div>
      </Row>
      <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
          <Col :span="6">
            <Select v-model="filterobj.website" placeholder="Select Website" filterable @on-change="handleColor">
              <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col :span="6">
            <Select v-model="filterobj.attr_type" placeholder="Select Attribute" filterable class="js_display" @on-change="handleImprintColor">
              <Option value="color">Color</Option>
              <Option value="imprintcolor">Imprint Color</Option>
            </Select>
          </Col>
          <Col :span="6">
              <i-input v-model.trim="filterobj.attr_val" icon="search" placeholder="Search by attribute value...." class="js_display1" @on-enter="handleSearch"></i-input>
          </Col>
          <Col :span="6">
            <Row>
              <Col :span="(filterobj.attr_type === '' && filterobj.website === '' && filterobj.attr_val === '') ? 24 : 12">
                <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
              </Col>
            </Row>
          </Col>
      </Row>
      <Table border :columns="columns1" :data="list1" @on-row-click="myrwoclick"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="len" :current="page" @on-change="changePage"></Page>
        </div>
      </div>
  </div>

</template>

<script>
    import axios from 'axios'
    import config from '../config'
    import Cookies from 'js-cookie';
    import _ from 'lodash'

    let baseUrl = config.baseURL
    let auth_token = Cookies.get('auth_token')
    let pageSize = 10
    export default {
      name: 'swatch',
      data () {
          return {
              filterobj: {
                website: '',
                attr_type: '',
                attr_val: ''
              },
              data1: [],
              colorData:'',
              vid: '',
              len:1,
              rowIndex:'',
              list1: [],
              webOptions: [],
              page:1,
              cloudinaryDetails:[],
              errorFlag: false,
              columns1: [
                   {
                       title: 'Attribute Value',
                       key: 'key',
                       align: 'center'
                   },
                   {
                       title: 'Select',
                       key: '',
                       align: 'center',
                       render: (h, params) => {
                      
                         return h('RadioGroup', {
                           props: {
                             vertical: true,
                             value: this.list1[params.index].checkvalue,
                             size: 'small'
                           },
                           on: {
                             'on-change': (value) => {
                               this.list1[params.index].checkvalue = value
                               if (value === 'Hexcode') {
                                 this.list1[params.index].ishexDisable = false
                                 this.list1[params.index].isimgurlDisable = true
                               } else {
                                 this.list1[params.index].ishexDisable = true
                                 this.list1[params.index].isimgurlDisable = false
                                 if(this.list1[params.index].imageBox1 == ""){
                                    this.list1[params.index].imageBox1 = ""
                                 }
                               }
                             }
                           }
                         }, [
                           h('Radio', {
                             props: {
                               size: 'small',
                               label: 'Hexcode'
                             },
                             style:{
                               display: 'inline-table',
                               fontWeight:'200'
                             }
                           }, 'Hexcode'),
                           h('Radio', {
                             props: {
                               size: 'small',
                               label: 'ImageUrl'
                             },
                             style:{
                               display: 'inline-table',
                               fontWeight:'200'
                             }
                           }, 'Upload Image')
                         ])
                       },
                   },
                   {
                       title: '#Hexcode',
                       key: '',
                       align: 'center',
                       className: '#Hexcode',
                       render: (h, params) => {
                         return h('Input',{
                            props:{
                              value: this.list1[params.index].hexcode1,
                              disabled: this.list1[params.index].ishexDisable
                            },
                            on: {
                              'on-blur': (event) => {
                                // let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(event.target.value);
                                // if(!regex && event.target.value !=""){
                                //   this.$Message.error('Please enter valid hexcode');
                                //   return false;
                                // }
                                this.list1[params.index].hexcode1 = event.target.value;
                              }
                            }
                         })
                          // console.log("par",params.row);
                          // console.log("this.list1",this.list1[params.index].key+'== '+this.list1[params.index].ishexDisable);
                          // return h('el-color-picker', {
                          //    props: {
                          //      value: this.list1[params.index].hexcode1,
                          //      placement: 'right',
                          //      disabled: this.list1[params.index].ishexDisable
                          //    },
                          //    on: {
                          //    	'change' : (val) => {
                          //      	console.log('Value ', val)
                          //        this.list1[params.index].hexcode1 = val
                          //      }
                          //    }
                          //  })
                       }
                   },
                   {
                       title: 'Image Upload',
                       key: 'action',
                       width: 150,
                       align: 'center',
                       render: (h, params) => {
                           return h('Button', {
                             props: {
                               type: 'ghost',
                               icon: 'ios-cloud-upload-outline',
                               disabled: this.list1[params.index].isimgurlDisable
                             },
                             on: {
                               'click': () => {
                                 this.uploadAssetImage(params.index)
                               }
                             }
                           }, 'Upload Image')
                           /*h('Upload', {
                             props: {
                                 //action: '',
                                 //beforeUpload	: this.handleUpload1
                             }
                           },[*/
                              //  h('Button', {
                              //      props: {
                              //          type: 'ghost',
                              //          icon: 'ios-cloud-upload-outline',
                              //          disabled: this.list1[params.index].isimgurlDisable,
                              //          donetext: 'English',
                              //      },
                              //      style: {
                              //          marginRight: '5px'
                              //      },
                              //      on: {
                              //         'click': ()=>{
                              //             alert("+++")
                              //         }
                              //      }
                              //  }, 'Upload Image')//,
                          //      h('div', {
                          //      },this.list1[params.index].file),
                          //  ]);
                      }
                   },
                   {
                       title: 'Action',
                       width: 150,
                       align: 'center',
                       render: (h, params) => {
                           return h('div', [
                               h('Button', {
                                   props: {
                                       type: 'primary',
                                       size: 'small'
                                   },
                                   style: {
                                       marginRight: '5px'
                                   },
                                   on: {
                                       click: () => {
                                           this.saveData(params.index)
                                       }
                                   }
                               }, 'Save'),
                           ]);
                       }
                   },
                   {
                       title: 'Color Swatch',
                       key: '',
                       align: 'center',
                       render: (h, params) => {
                          if(this.list1[params.index].checkvalue == 'Hexcode'){
                            return h('Tooltip', {
                          		props: {
                          			content: this.list1[params.index].key,
                          			placement: 'left'
                          		}
                          	}, [
                              h('Icon', {
                                 props: {
                                   type: 'android-checkbox-blank',
                                   color: this.list1[params.index].colorBox1
                                 },
                                 style: {
                                   fontSize: '40px'
                                 }
                               })
                            ])
                           }else{
                             return h('Tooltip', {
                           		props: {
                           			content: this.list1[params.index].key,
                           			placement: 'left'
                           		}
                           	}, [
                             h('img', {
                                   attrs: {
                                     src: this.list1[params.index].imageBox1
                                   },
                                   style: {
                                     height:'27px',
                                     width:'27px',
                                     margin: '2px'
                                   },
                                   on:{
                                     click: () => {
                                       window.open(this.list1[params.index].imageBox1);
                                       }
                                   }
                               })
                             ])
                           }
                       }
                   }
               ],
          }
      },
      methods: {
          handleColor(val){
              let websiteInfo = JSON.parse(val)
              if(websiteInfo.vid == ''){
                  this.$Notice.error({
                      title: "Error",
                      desc: "Vshop data is not available.",
                     // duration: 10
                  })
                  return false;
              }
          },
          handleImprintColor(val){

          },
          handleUpload1(file){
              var self = this;
              if(file.size >= 51200){
      					self.$Message.error('File size should be less than or equal to 50Kb.');
                file = '';
      					return true;
      				}
              else if (!file.type.match('image/jpg') && !file.type.match('image/jpeg') && !file.type.match('image/png','image/png')) {
                  self.$Message.error('Please upload png , jpg or jpeg files only.')
                  file = '';
        					return true;
      				}
              this.list1[this.rowIndex].imgurl1 = file
              return false;
          },
          async getDataFromColorApi() {
              let self = this
              await axios({
                method: 'get',
                url: baseUrl + '/color-table?vid='+this.vid+'&websiteid='+this.websiteid+'&attribute_name='+this.filterobj.attr_type,
              }).then(function (res) {
                self.colorData = res.data.data
              })
              .catch(function (error) {
                self.$Message.error(error)
              });
          },
          async handleSearch(){
              this.page = 1
              let self = this
              let testdata = []
              let websiteInfo = JSON.parse(this.filterobj.website);
              if(websiteInfo == null){
                this.$Notice.error({
                    title: "Error",
                    desc: "Please select website.",
                  //  duration: 10
                })
                self.$Loading.finish();
                return false;
              }
              let cdata = _.find(this.cloudinaryDetails, {wid: websiteInfo.id})
              if (websiteInfo != null && websiteInfo.vid == '' || websiteInfo.vid == undefined ) {
                this.$Notice.error({
                    title: "Error",
                    desc: "Vshop data is not available.",
                   // duration: 10
                })
                self.$Loading.error();
                return false;
              }
              else if (cdata == undefined || cdata.apiKey === '') {
                this.$Notice.error({
                    title: "Error",
                    desc: "Please add cloudinary details to <b>"+websiteInfo.websitename+"</b>.",
                   // duration: 10
                })
                self.$Loading.error();
                return false;
              }
              this.$Loading.start();
              this.vid = websiteInfo.vid;
              this.websiteid = websiteInfo.id;
              this.subscriptionId = websiteInfo.subscription_id;
              this.websitename = websiteInfo.websitename;
              this.attr_val = this.filterobj.attr_val;
              if(this.filterobj.attr_type == ''){
                  this.$Notice.error({
                      title: "Error",
                      desc: "Please select Attribute Name.",
                     // duration: 10
                  })
                  self.$Loading.finish();
                  return false;
              }
              let colorApiName = ''
              if(this.filterobj.attr_type == 'color'){
                colorApiName = 'colors'
              }else{
                colorApiName = 'imprintcolor'
              }
              // Fetch colors data from product api
            
              await axios({
                method: 'get',
                 url: config.colorSwatchUrl+colorApiName,
              //  url: "http://172.16.230.161:3038/filters/colors",                
                headers: {'Authorization': auth_token,'vid': this.vid}
              }).then(async function (response) {
               
                  let uniqData = _.uniqBy(response.data.aggregations.group_by_attributes.buckets, 'key');
                  // Set uniqData instead of myArr
                  let myArr = [];
                  if(self.attr_val != ""){
                      let arr = [];
                      _.find(uniqData,function(ele,index){
                          if (ele.key == self.attr_val) return myArr.push(ele);
                      })
                  }else{
                    myArr = uniqData
                  }
                  
                  await self.getDataFromColorApi()
                
                  $.each(myArr,function(index,item){
                   
                      item.checkvalue = 'Hexcode'
                      item.ishexDisable= false
                      item.isimgurlDisable= true
                      item.colorBox1 = 'white'
                      item.imageBox1=''
                      item.hexcode1=''
                      _.find(self.colorData, function(o) {
                            if(!o.file){
                              if(o.colorname == item.key){
                                testdata.push({hexcode:o.hexcode, index:index})
                              }
                            } else {
                              if(o.colorname == item.key){
                                testdata.push({hexcode:o.hexcode, index:index, imagefile: o.file.url})
                              }
                            }
                       });
                  })
                  self.data1 = myArr
                  $.each(testdata,function(index,item){
                    if(item.hexcode == undefined){
                      self.data1[item.index].colorBox1 = 'white'
                      self.data1[item.index].imageBox1 = item.imagefile
                      self.data1[item.index].checkvalue = 'ImageUrl'
                      self.data1[item.index].ishexDisable= true
                      self.data1[item.index].isimgurlDisable= false
                    } else {
                      self.data1[item.index].colorBox1 = item.hexcode
                      self.data1[item.index].hexcode1 = item.hexcode
                    }
                  })
                 
                  // return false;
                  self.list1 = await self.mockTableData1(1,pageSize)
             
                  self.$Loading.finish();
              }).catch(function(error){
                  // self.$Message.error(error)
                  self.$Notice.error({
                      title: "Error",
                      desc: error,
                     // duration: 10
                  })
                  self.$Loading.error();
              })
          },
          handleFileterReset () {
            this.filterobj.website = ''
            this.filterobj.attr_type = ''
            this.filterobj.attr_val = ''
          },
          async mockTableData1 (p,size) {
            this.len = this.data1.length
            return this.data1.slice((p - 1) * size, p * size);
          },

          myrwoclick (val, i) {
            this.rowIndex = i
            return this.rowIndex
          },
          async changePage (p) {
              this.page = p
              this.list1 = await this.mockTableData1(p,pageSize)
          },
          async saveData(index){
              if(this.list1[index].hexcode1 == "" && this.list1[index].imgurl1 == undefined){
             //   if(this.errorFlag === false){
                  this.$Notice.error({
                      title: "Error",
                      desc: "Please enter hexcode or upload swatch.",
                     // duration: 10
                  })
              //    this.errorFlag = true
                  return false;
            //    } 
              } else {
                  let methodType = '';
                  let url = '';
                  let param1 = {colorname :this.list1[index].key,attribute_name : this.filterobj.attr_type,vid: this.vid,websiteid: this.websiteid,websitename: this.websitename,subscriptionId: this.subscriptionId}
                  let self = this

                  await self.getDataFromColorApi()
                  let data = _.find(this.colorData, function(o) {
                                  return o.colorname == self.list1[index].key;
                              });
                  
                  if(data != undefined && data.id != ''){
                      methodType = 'PATCH';
                      url = baseUrl + '/color-table/'+ data.id;
                  }else{
                                              
                      methodType = 'POST';
                      url = baseUrl + '/color-table';
                  }

                  if(this.list1[index].checkvalue == 'Hexcode'){
                        // Check valid hexcode
                        let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.list1[index].hexcode1);
                        if(!regex){
                          this.$Notice.error({
                              title: "Error",
                              desc: "Please enter valid hexcode",
                           //   duration: 10
                          })
                          return false;
                        }
                        this.$Loading.start();
                        param1['hexcode'] = this.list1[index].hexcode1

                        axios({
                           method: methodType,
                           url: url,
                           data: param1,
                           headers: {'Authorization': auth_token}
                        }).then(function (res) {
                               self.list1[index].colorBox1 = self.list1[index].hexcode1
                               self.data1[(self.page - 1) * 10 + (index)].colorBox1 = self.list1[index].hexcode1
                               self.data1[(self.page - 1) * 10 + (index)].hexcode1 = self.list1[index].hexcode1
                               self.list1[index].imageBox1 = '';
                               self.data1[(self.page - 1) * 10 + (index)].imageBox1 = '';
                              //  self.list1[index] = 
                              //  self.$Message.success("Hexcode is saved successfully.")
                               self.$Notice.success({
                                   title: 'Success',
                                   desc: "Hexcode is saved successfully."
                               });
                               self.$Loading.finish();
                         
                        }).catch(function (error) {
                            self.$Notice.error({
                                title: "Error",
                                desc: error,
                               // duration: 10
                            })
                            self.$Loading.error();
                        });
                        this.$Loading.finish();
                  }
                  else if(this.list1[index].checkvalue == 'ImageUrl'){
                      if(this.list1[index].imgurl1 == undefined){
                        this.$Notice.error({
                            title: "Error",
                            desc: "Please upload file.",
                           // duration: 10
                        })
                        return false;
                      }
                      // else if(this.list1[index].imgurl1.type != 'image/png' && this.list1[index].imgurl1.type != 'image/jpg' && this.list1[index].imgurl1.type != 'image/jpeg'){
                      //   this.$Notice.error({
                      //       title: "Error",
                      //       desc: "Please upload png, jpg or jpeg files only.",
                      //       duration: 10
                      //   })
                      //   return false;
                      // }
                      this.$Loading.start();

                      param1['file'] = {filename: this.list1[index].imgurl1.original_filename+"."+this.list1[index].imgurl1.format}
                      param1.file['url'] = this.list1[index].imgurl1.url
                  
                      // convert file to base64
                      /*param1['file'] = {filename: this.list1[index].imgurl1.name}
                      let reader = new FileReader();
                      reader.readAsDataURL(this.list1[index].imgurl1);
                      reader.addEventListener("load", function () {
                          let filebase64 = reader.result
                          param1.file['url'] = filebase64*/
                          // Save Image
                          
                          axios({
                             method: methodType,
                             url: url,
                             data: param1,
                             headers: {'Authorization': auth_token}
                          }).then(function (res) {
                                self.list1[index].imageBox1 = res.data.file.url;
                                self.data1[(self.page - 1) * 10 + (index)].imageBox1 = res.data.file.url;
                                self.list1[index].colorBox1 = "white";
                                self.data1[(self.page - 1) * 10 + (index)].colorBox1 = "white";
                                self.data1[(self.page - 1) * 10 + (index)].hexcode1 = "";
                                self.$Notice.success({
                                    title: 'Success',
                                    desc: "Image is upload successfully."
                                });
                                self.$Loading.finish();
                          }).catch(function (error) {
                              self.$Notice.error({
                                  title: "Error",
                                  desc: error,
                                 // duration: 10
                              })
                              self.$Loading.error();
                          });
                      // })
                  }

              }
          },
          uploadAssetImage(index) {
            this.$Spin.show();
            let cdata = _.find(this.cloudinaryDetails, {wid: this.websiteid})
         
            cloudinary.openUploadWidget({
              cloud_name: cdata.cloudName,
              api_key: cdata.apiKey,
              upload_preset: cdata.uploadPreset,
              sources: ['local', 'url' ]
            }, (error, result) => {
              this.$Spin.hide();
              if(error != null){
                if(error.message == 'User closed widget'){

                } else {
                  console.log('Image upload error: ', error);
                  this.$message({
                    message: 'Upload image failed. Please try again.',
                    type: 'error'
                  });
                }
              } else {
              
                let imageObj = result[0]
                this.list1[this.rowIndex].imgurl1 = imageObj
                return false;
              }
            });
          }
      },
      mounted(){
          this.$Loading.start();
          let userId = Cookies.get('userDetailId')
          
          axios.get(baseUrl + '/project-configuration?userId=' + userId).then(response => {
         
            for (let item of response.data.data) {
          
              let VID = ''
              let cdetails = {};
              if(typeof item.configData[1].projectSettings[1].CloudinaryDetails != "undefined") {
                cdetails = item.configData[1].projectSettings[1].CloudinaryDetails;
              }
            
              if(item.configData[1].projectSettings != undefined && item.configData[1].projectSettings[0].ProjectVId != undefined && item.configData[1].projectSettings[0].ProjectVId.vid != ''){
                  VID = item.configData[1].projectSettings[0].ProjectVId.vid
              }
              cdetails.wid = item.id
              this.cloudinaryDetails.push(cdetails)
              let websiteObj = {id:item.id, vid:VID, subscription_id:item.subscriptionId, websitename:item.websiteName}
          
              this.webOptions.push({label: item.websiteName, value:JSON.stringify(websiteObj)})
            }
            this.$Loading.finish();
          }).catch(err => {
              this.$Loading.error();
          })
      }
    }
</script>

<style>
.ivu-tabs-nav-container{
  margin-top: 20px;
}
.ivu-color-picker-picker{
 height: 183px;
}
.ivu-color-picker-saturation-wrapper{
  padding-bottom:45%
}
.ivu-upload-select{
  margin-top: 10px;
}
.ivu-input{
  text-align: center;
}
</style>
