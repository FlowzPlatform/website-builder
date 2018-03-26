<template>
  <div class="GeneralSettings">
    <div class="settings_header">
        <Button @click="goToSettingsList">All Account Settings</Button>
    </div>
    <div class="container" style="margin-top: 2%; width: 100%; margin-bottom: 2%;">
      <!-- Address Settings Section -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toogleAddressSettings" class="card color-div toggleableDivHeader">Address</a>
          </div>
      </div>
      <div id="toogleAddressSettingsContent" class="toggleableDivHeaderContent" style="">
        <div class="row">
          <div class="col-md-12">
            <Form class="form" label-position="left" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
            <FormItem label="Configuration Name">
               <Select v-model="formValidate.configuration" style="width:100%;text-align:left" @on-change="configChange">
                <Option  value='all'>All</Option>
                <Option  v-for="item in configs" :value="item.id" :key="item">{{ item.configName }} ({{item.domain}})</Option>
              </Select>
            </FormItem>
            <FormItem label="Name" prop="name" id="CustomerName">
                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="Address" prop="AddressLine1">
            <Row>
            <Col span="12">
              <FormItem prop="Address">
                  <Input v-model="formValidate.AddressLine1" placeholder="AddressLine1"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem  prop="AddressLine2">
                <Input v-model="formValidate.AddressLine2" placeholder="AddressLine2"></Input>
              </FormItem>
            </Col>
            </Row>
            </FormItem>
             <FormItem label="Country" prop="country">
                <select v-model="formValidate.country" id="country" name ="country">
                </select>
            </FormItem>
            <FormItem label="State" prop="state" class="state1" style="display:none">
              <select v-model="formValidate.state" name ="state" id ="state" ></select>
            </FormItem>
            <FormItem label="City" prop="city">
             <Input v-model="formValidate.city" placeholder="Enter your city"></Input>
            </FormItem>
             <FormItem label="Postal code" prop="PostalCode">
                <Input v-model="formValidate.PostalCode" placeholder="Enter PostalCode"></Input>
            </FormItem>
            <FormItem label="Mobile" prop="mobile">
                <Input v-model="formValidate.mobile" placeholder="Enter your Mobile No"></Input>
            </FormItem>
            <div style="text-align:center;">
              <Button type="primary" @click="handleSubmit('formValidate')" :loading="loading">Submit</Button>
              <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px;">Reset</Button>
              </div>
              <div style="color:blue;font-size: smaller;">**You will see this address in your invoice</div>
            </Form>
          </div>
        </div>
      </div>
      <!-- Project Settings section ends -->

      <!-- Meta Tags -->
      <div class="collapsingDivWrapper row">
          <div class="col-md-12">
              <a href="javascript:void(0)" id="toggleUploadLogo" class="card color-div toggleableDivHeader">Upload Logo</a>
          </div>
      </div>
      <div id="toggleUploadLogoContent" class="toggleableDivHeaderContent" style="display: none;">
        <div class="row">
           <Form class="form" label-position="left" ref="formData" :model="formData" :label-width="140">
            <FormItem label="Configuration Name">
               <Select v-model="formData.configuration" style="width:100%;text-align:left" @on-change="configChange">
                <Option  value='all'>All</Option>
                <Option  v-for="item in configs" :value="item.id" :key="item">{{ item.configName }} ({{item.domain}})</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Upload id="fileUpload" v-model="formData.logo":before-upload="handleUpload" action=''> 
                <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
              </Upload>
              <div v-if="file !== null">Uploaded file: {{ file.name }} </div>
                <div>
                  <Button type="primary" @click="handleLogoUpload()" :loading="logoLoading">Submit</Button>
                </div>
            </FormItem>
            </Form>             
        </div>
      </div>
      <!-- Meta Tags Ends -->


      <div class="margin-50"></div>
      
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';
import config from '@/config/customConfig.js'
let feathersUrl =  config.default.serviceUrl;
import Cookies from 'js-cookie';
var settingId
export default {
  name: 'GeneralSettings',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    const validateNum = async(rule, value, callback) => {
      let patt = new RegExp('^[0-9]+$')
      let _res = patt.test(value)
      if (!_res) {
        callback(new Error('Not Allowed Special Character'))
      } else {
        callback();
      }
    };
    return {
      loading:false,
      logoLoading:false,
      formValidate: {
        name: '',
        mobile : '',
        AddressLine1: '',
        AddressLine2 : '',
        city: '',
        state: '',
        country: '',
        PostalCode: ''
      },
      formData: {
        configuration: 'all',
        logo: '',
      },
      file: '',
    configs:[],
    ruleValidate: {
        name:[
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        AddressLine1:[
          { required: true, message: 'The addressline1 cannot be empty', trigger: 'blur' }
        ],
        AddressLine2:[
          { required: true, message: 'The addressline2 cannot be empty', trigger: 'blur' }
        ],
        city:[
          { required: true, message: 'The city cannot be empty', trigger: 'blur' }
        ],
        state: [
          { required: true, message: 'Please select state', trigger: 'blur' }
        ],
        country:[
          { required: true, message: 'Please select Country', trigger: 'blur' }
        ],
        PostalCode:[
          { required: true, message: 'The PostalCode cannot be empty', trigger: 'blur' },
          { validator: validateNum, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    goToSettingsList(){
      this.$router.push({
          name: 'Settings'
          // params: { tabName: 'General' }
      });
    },
    configChange(data){              
      $('#CustomerName').css("display","block")
      settingId = data;              
    },
    async handleUpload (file) {
      var self = this
      console.log('file',file)
      if(file.size >= 51200){
          this.$Notice.error({
            title: 'File Limit',
            desc: 'File size should be less than or equal to 50Kb. ',
            duration: 4.5
          });
          self.file = ''
          return true
      }
      else {
        self.file = file
      }
      return false;
    },
    handleLogoUpload () {
      // this.logoLoading = true;
      var self = this;
      var checkConfig;
      console.log('**************',this.file)
      console.log("self.file.type", this.file.type)
      // if( self.file != '' && (self.file.type === "image/png" || self.file.type === "image/jpeg")){
      let file_ext = this.file.name.split('.').pop()
      console.log("self.file.type file_ext", file_ext)      
      if( self.file != '' && (file_ext === "png" || file_ext === "jpg")){
        this.logoLoading = true;
          console.log('this.file',this.file)
          var reader = new FileReader();
          var file = this.file
          console.log('reader',reader);
          console.log('IIIIIIIIIIIIIIIIIII',file.name)

          reader.addEventListener("load", function () {
            console.log('reader------->',reader.result)

            var logoData1 = {'logo': reader.result}
            // console.log('iiiiiiiiiiiiiiiiii',logoData1)

            if(self.formData.configuration === 'all'){ 
              self.$Modal.confirm({
                title: '',
                content: '<h4>This address will be configured for all of your Accounts</h4>',
                width: 500,
                okText: 'Agree',
                cancelText: 'Disagree',
                onOk: () => {
                  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^',self.formData.configuration)
                  delete self.formData.configuration;
                  self.configs.forEach(item => {
                      console.log('iiiiiiiiiiiiiiiiiiiiii',item.id)
                      axios({
                        method: 'PATCH',
                        url: feathersUrl +'settings/'+item.id,
                        headers:{
                            Authorization : Cookies.get('auth_token'),
                            subscriptionId : Cookies.get('subscriptionId')
                        },
                        data: logoData1
                      })  
                      .then(function (response) {
                        // console.log('response------------------------>',response)
                        self.logoLoading = false;
                        self.$router.push({
                          name: 'Settings'
                        });
                      })
                      .catch(function (error) {
                        console.log('error',error)
                        self.logoLoading = false;
                      })
                  })
                },
                onCancel: () => {
                    self.logoLoading = false;
                }
              })                        
            }
            else{
              console.log('this.configs',self.configs)
              console.log('this.formData.configuration',self.formData.configuration)
              var data000 = _.filter(self.configs, {'id': self.formData.configuration })
              console.log("data000----------------------------->",data000)
              var checkConfig;
              self.$Modal.confirm({
                  title: '',
                  content: '',
                  width: 500,
                  okText: 'Agree',
                  cancelText: 'Disagree',
                  render: (h) => {
                      return h('div', {
                      }, [
                          h('span', {
                            style:{
                              fontSize:'25px'
                            },
                          props: {
                          },
                          on: {
                            input: (val) => {
                            }
                          }
                        },'This address will be configured for ' + data000[0].configName),
                        h('div', {
                          style:{
                              height:'50px'
                            }
                      }),
                        h('Checkbox', {
                          props: {
                            value: this.value
                          },
                          on: {
                            input: (val) => {
                              checkConfig = val
                              console.log("val",checkConfig)

                            }
                          }
                        },'Do you want to use this address for all Accounts?')
                      ])
                  },
                  onOk: () => {
                    // console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',checkConfig)
                    if(checkConfig == true){
                      self.configs.forEach(item => {
                        console.log('iiiiiiiiiiiiiiiiiiiiii',item.id)
                        axios({
                          method: 'PATCH',
                          url: feathersUrl +'settings/'+item.id,
                          headers:{
                              Authorization : Cookies.get('auth_token'),
                              subscriptionId : Cookies.get('subscriptionId')
                          },
                          data: logoData1
                        })  
                        .then(function (response) {
                          // console.log('response------------------------>',response)
                          self.logoLoading = false;
                          self.$router.push({
                            name: 'Settings'
                          });
                        })
                        .catch(function (error) {
                          console.log('error',error)
                          self.logoLoading = false;
                        })
                      })
                    }
                    else{
                      axios({
                        method: 'PATCH',
                        url: feathersUrl +'settings/'+self.formData.configuration,
                        headers:{
                            Authorization : Cookies.get('auth_token'),
                            subscriptionId : Cookies.get('subscriptionId')
                        },
                        data: logoData1
                      })  
                      .then(function (response) {
                        // console.log('response------------------------>',response)
                        self.logoLoading = false;
                          self.$router.push({
                            name: 'Settings'
                          });
                      })
                      .catch(function (error) {
                        console.log('error',error)
                        self.logoLoading = false;
                      })
                    }
                  },
                  onCancel: () => {
                    self.logoLoading = false;
                  }
                })
            }
          }, false);

          
          if (file) {
            console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',reader)
            reader.readAsDataURL(file);
          }

      }else {
           self.$Message.error({
            content: ' Please, attach a .jpg or .png file!',
            duration: 4.5
          });
           self.logoLoading = false;
        }
        
    },
    handleSubmit (name) {
      let self = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loading = true;
          if(this.formValidate.configuration === 'all'){ 
            this.$Modal.confirm({
              title: '',
              content: '<h4>This address will be configured for all of your Accounts</h4>',
              width: 500,
              okText: 'Agree',
              cancelText: 'Disagree',
              onOk: () => {
                delete this.formValidate.configuration;
                console.log('formValidate----------------------------->',this.formValidate)
                var params = {'address':this.formValidate}
                this.configs.forEach(item => {
                    console.log('iiiiiiiiiiiiiiiiiiiiii',item.id)
                    axios({
                      method: 'PATCH',
                      url: feathersUrl +'settings/'+item.id,
                      headers:{
                          Authorization : Cookies.get('auth_token'),
                          subscriptionId : Cookies.get('subscriptionId')
                      },
                      data: params
                    })  
                    .then(function (response) {
                      console.log('response------------------------>',response)
                      self.loading = false;
                      self.$router.push({
												name: 'Settings'
											});
                    })
                    .catch(function (error) {
                      console.log('error',error)
                      self.loading = false;
                    })
              })
              },
              onCancel: () => {
                self.loading = false;
              }
            })                        
          }
          else{
            console.log('this.configs',this.configs)
            console.log('this.formValidate.configuration',this.formValidate.configuration)
            var data000 = _.filter(this.configs, {'id': this.formValidate.configuration })
            console.log("data000----------------------------->",data000)
            var checkConfig;
            this.$Modal.confirm({
                  title: '',
                  content: '',
                  width: 500,
                  okText: 'Agree',
                  cancelText: 'Disagree',
                  render: (h) => {
                      return h('div', {
                      }, [
                          h('span', {
                            style:{
                              fontSize:'25px'
                            },
                          props: {
                          },
                          on: {
                            input: (val) => {
                            }
                          }
                        },'This address will be configured for ' + data000[0].configName),
                        h('div', {
                          style:{
                              height:'50px'
                            }
                      }),
                        h('Checkbox', {
                          props: {
                            value: this.value
                          },
                          on: {
                            input: (val) => {
                              checkConfig = val
                              console.log("val",checkConfig)

                            }
                          }
                        },'Do you want to use this address for all Accounts?')
                      ])
                  },
                  onOk: () => {
                  console.log('data----------------------------->',params)
                  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',checkConfig)
                  if(checkConfig == true){
                    delete this.formValidate.configuration;
                    var params = {'address':this.formValidate}
                    console.log('UUUUUUUUUUUUUUUUU',this.configs)
                    this.configs.forEach(item => {
                      console.log('iiiiiiiiiiiiiiiiiiiiii',item.id)
                      axios({
                        method: 'PATCH',
                        url: feathersUrl +'settings/'+item.id,
                        headers:{
                            Authorization : Cookies.get('auth_token'),
                            subscriptionId : Cookies.get('subscriptionId')
                        },
                        data: params
                      })  
                      .then(function (response) {
                        // console.log('response------------------------>',response)
                        self.loading = false;
                        self.$router.push({
                          name: 'Settings'
                        });
                      })
                      .catch(function (error) {
                        console.log('error',error)
                        self.loading = false;
                      })
                    })
                  }
                  else{
                  var params = {'address':this.formValidate}                
                    axios({
                      method: 'PATCH',
                      url: feathersUrl +'settings/'+this.formValidate.configuration,
                      headers:{
                          Authorization : Cookies.get('auth_token'),
                          subscriptionId : Cookies.get('subscriptionId')
                      },
                      data: params
                    })  
                    .then(function (response) {
                      // console.log('response------------------------>',response)
                      self.loading = false;
                      self.$router.push({
												name: 'Settings'
											});
                    })
                    .catch(function (error) {
                      console.log('error',error)
                      self.loading = false;
                    })
                  }
                },
                onCancel: () => {
                  self.loading = false;
                }
              })
          }
        } else {
          this.$Message.error('Please fill up all the fields correctly');
        }
      })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    },
    async settingData () {
      let self = this
      await axios.get(config.default.serviceUrl + 'settings?isActive=true', {
        headers:{
          Authorization : Cookies.get('auth_token'),
          subscriptionId : Cookies.get('subscriptionId')
        }
      })
      .then(function (response) {
        console.log("response >>>>>>>>>>>>>>>>",response)
        if (response.data.data.length != 0)
        {
          var newConf = [];
          console.log("self.configs---------------->before",newConf)
          response.data.data.forEach(item => {
            newConf.push(item);
          })
          self.configs = _.sortBy(newConf, ['configName']);
          console.log("self.configs---------------->after",self.configs)

        }
        else
        {
          self.$Message.warning({
                content: 'Configure or activate at least one Xero , Quickbook or custom account',
                duration: 5
            });

        }
      })
      .catch(function (error) {
        console.log("error",error);
      });
      
    },
    onFileChange (e) {
      let self = this
      console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',e)
      let files = e.target.files || e.dataTransfer.files
      console.log('ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp',files)
      if (!files.length) {
        return
      }
      this.file = files[0]
      console.log('this.file', this.file)
    },
  },

  created () {
  },

  async mounted () {
    this.settingData ();
    populateCountries("country", "state");
    $("#country").on("change",function() {
      $('.state1').css("display","block")
    });
    // Collapsing Divs
    $(document).ready(function($) {        
      $("#toogleAddressSettings").click(function() {
          $("#toogleAddressSettingsContent").slideToggle("slow");
          if ($("#toogleAddressSettings").text() == "Address") {
              $("#toogleAddressSettings").html("Address")
          } else {
              $("#toogleAddressSettings").text("Address")
          }
      });

      $("#toggleUploadLogo").click(function() {
          $("#toggleUploadLogoContent").slideToggle("slow");
          if ($("#toggleUploadLogo").text() == "Upload Logo") {
              $("#toggleUploadLogo").html("Upload Logo")
          } else {
              $("#toggleUploadLogo").text("Upload Logo")
          }
      });
    });
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*For Collapsing Divs*/
  /*.ivu-icon{
    display: none;
  }*/
  .settings_header{
      padding : 10px;
      text-align:right;
      background: #cacaca;
      width:100%;
      margin:14px 2px;
  }
  .toggleableDivHeaderContent {
      margin-top: 0px;
      margin-bottom: 30px;
      background: #eee;
      width: auto;
      height: auto;
      margin: 0px 5px;
      padding: 15px;
  }

  
  .toggleableDivHeader {
      height: 35px;
      line-height: 15px;
      text-align: center;
      color: black;
      font-weight: bold;
      text-decoration: none;
  }
  
  .card {
      padding: 15px;
      box-shadow: 0px 0px 10px #999;
      transition: 0.2s all linear;
      margin: 20px;
  }
  
  .card:hover {
      box-shadow: 2px 2px 20px #999;
      transition: 0.2s all linear;
  }
  
  .color-div {
      height: 45px;
      display: block;
      padding: 10px 25px;
      line-height: 25px;
      color: #292929;
      text-transform: uppercase;
      border-radius: 5px;
      box-shadow: 0px 0px 5px #aaa;
      transition: 0.2s all linear;
      margin: 5px 5px;
      background: #8e9eab;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #eef2f3, #8e9eab);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .color-div:hover {
      box-shadow: 2px 2px 10px #aaa;
      transition: 0.2s all linear;
  }

  .margin-50{
    margin: 50px;
  }
  .vw-widget-body {
    text-align: -webkit-center;
  }
  #state{
    width: 100%;
    background: white;
    height: 32px;
    border-color: #e2e2e2;
    border-radius: 4px;
   }
   #country{
    width: 100%;
    background: white;
    height: 32px;
    border-color: #e2e2e2;
    border-radius: 4px;
   }
   .settings_header{
    padding : 10px;
    text-align:right;
    background: #cacaca;
    width:100%;
    margin:14px 2px;
}

</style>
