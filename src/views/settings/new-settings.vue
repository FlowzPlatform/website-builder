<template>
    <div>
        <div class="settings_header">
            <Button @click="goToSettingsList">All Account Settings</Button>
        </div>
        <Tabs type="card" @on-click="tabClick">
            <TabPane label="Xero">
                <Form ref="XeroformValidate" :model="XeroformValidate" :rules="XeroruleValidate" :label-width="150">
                    <FormItem label="Configuration Name" prop="configName">
                        <Input v-model="XeroformValidate.configName" placeholder="Enter your Configuration Name"></Input>
                    </FormItem>
                    
                    <FormItem label="User Agent" prop="useragent">
                        <Input v-model="XeroformValidate.useragent" placeholder="Enter your useragent"></Input>
                    </FormItem>
                    <FormItem label="Consumer Key" prop="consumerKey">
                        <Input v-model="XeroformValidate.consumerKey" placeholder="Enter your consumerKey"></Input>
                    </FormItem>
                    <FormItem label="Consumer Secret" prop="consumerSecret">
                        <Input v-model="XeroformValidate.consumerSecret" placeholder="Enter your consumerSecret"></Input>
                    </FormItem>
                    <FormItem label="Private Key" prop="privateKey">
                        <!-- <Input v-model="XeroformValidate.privateKey" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                         -->
                         <Upload v-model="XeroformValidate.privateKey"
                            :before-upload="handleUpload"
                            action=""
                            :show-upload-list="uploadlist">
                            <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
                        </Upload>
                        <div v-if="file !== null">Uploaded file: {{ file.name }} </div>
                    </FormItem>
                    <FormItem label="Set as Active" prop="setAsDefault">
                        <Checkbox size="large" v-model="isActive"></Checkbox>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="XerohandleSubmit('XeroformValidate')" :loading ="loading">Submit</Button>
                        <Button type="ghost" @click="handleReset('XeroformValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                    
                </Form>
            </TabPane>
            <TabPane label="Quickbook">
                <Form ref="QBformValidate" :model="QBformValidate" :rules="QBruleValidate" :label-width="150">
                    <FormItem label="Configuration Name" prop="configName">
                        <Input v-model="QBformValidate.configName" placeholder="Enter your Configuration Name"></Input>
                    </FormItem>
                    <FormItem label="Refresh Token" prop="refresh_token">
                        <Input v-model="QBformValidate.refresh_token" placeholder="Enter your refresh_token"></Input>
                    </FormItem>
                    <FormItem label="Client Id" prop="client_id">
                        <Input v-model="QBformValidate.client_id" placeholder="Enter your client_id"></Input>
                    </FormItem>
                    <FormItem label="Client Secret" prop="client_secret">
                        <Input v-model="QBformValidate.client_secret" placeholder="Enter your client_secret"></Input>
                    </FormItem>
                    <FormItem label="RealmId" prop="realmId">
                        <Input v-model="QBformValidate.realmId" placeholder="Enter your realmId"></Input>
                    </FormItem>
                    <FormItem label="Set as Active" prop="setAsDefault">
                        <Checkbox size="large" v-model="isActiveQb"></Checkbox>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="QBhandleSubmit('QBformValidate')" :loading ="loading" >Submit</Button>
                        <Button type="ghost" @click="handleReset('QBformValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>
            </TabPane>
            <!-- <TabPane label="Custom">
                <Form ref="customformValidate" :model="customformValidate" :rules="customruleValidate" :label-width="150">
                    <FormItem label="Configuration Name" prop="configName">
                        <Input v-model="customformValidate.configName" placeholder="Enter your Configuration Name"></Input>
                    </FormItem>
                    <FormItem label="Customer URL" prop="customer_url">
                        <Input v-model="customformValidate.customer_url" placeholder="Enter Customer URL"></Input>
                    </FormItem>
                    <FormItem label="Invoice URL" prop="invoice_url">
                        <Input v-model="customformValidate.invoice_url" placeholder="Enter Invoice URL"></Input>
                    </FormItem>
                    <FormItem label="Set as Active" prop="setAsDefault">
                        <Checkbox size="large" v-model="isActivecustom"></Checkbox>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="customhandleSubmit('customformValidate')" :loading ="loading" >Submit</Button>
                        <Button type="ghost" @click="handleReset('customformValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>
            </TabPane> -->
        </Tabs>
    </div>
</template>

<script>
    let config = require("@/config/customConfig.js")
    let feathersUrl =  config.default.serviceUrl;
    import _ from 'lodash'
    import Vue from 'vue'
    import VueWidgets from 'vue-widgets'
    import 'vue-widgets/dist/styles/vue-widgets.css'
    import axios from "axios"
    const reader  = new FileReader();
    import Cookies from 'js-cookie';

    Vue.use(VueWidgets);


    export default {
        data () {
            return {
                uploadlist: false,
               tabs: 1 ,
               loading : false,
               file: null,
               isActive: false,
               isActiveQb:false,
               isActivecustom:false,
                loadingStatus: false,
               XeroformValidate: {
                    configName : '',
                    useragent: '',
                    consumerKey:'',
                    consumerSecret:'',
                    privateKey: ''
                },
                XeroruleValidate: {
                    useragent: [
                        { required: true, message: 'User agent cannot be empty', trigger: 'blur' }
                    ],
                    consumerKey: [
                        { required: true, message: 'Consumer Key cannot be empty', trigger: 'blur' }
                    ],
                    consumerSecret: [
                        { required: true, message: "Consumer Secret cannot be empty", trigger: 'blur' }
                    ],
                    configName: [
                        { required: true, message: "Cconfiguration name Key cannot be empty", trigger: 'blur' }
                    ]
                },
                QBformValidate: {
                    configName : '',
                    refresh_token: '',
                    client_id:'',
                    client_secret:'',
                    realmId: ''
                },
                QBruleValidate: {
                    configName: [
                        { required: true, message: "Configuration name Key cannot be empty", trigger: 'blur' }
                    ],
                    refresh_token: [
                        { required: true, message: 'Refresh token cannot be empty', trigger: 'blur' }
                    ],
                    client_id: [
                        { required: true, message: 'Client_id cannot be empty', trigger: 'blur' }
                    ],
                    client_secret: [
                        { required: true, message: "Client_Secret cannot be empty", trigger: 'blur' }
                    ],
                    realmId: [
                        { required: true, message: "RealmId cannot be empty", trigger: 'blur' }
                    ]
                },
                customformValidate : {
                    configName : '',
                    customer_url: '',
                    invoice_url:'',
                },
                customruleValidate : {
                    configName: [
                        { required: true, message: "Configuration name Key cannot be empty", trigger: 'blur' }
                    ],
                    customer_url: [
                        { required: true, message: 'Customer Url cannot be empty', trigger: 'blur' }
                    ],
                    invoice_url: [
                        { required: true, message: 'invoice Url cannot be empty', trigger: 'blur' }
                    ]
                }
                
            }
        },
        methods: {
            tabClick(data) {
                if (data == 0) {
                    this.handleReset('XeroformValidate')
                }
                if (data == 1) {
                    this.handleReset('QBformValidate')
                }
            },
            goToSettingsList(){
                this.$router.push({
                    name: 'Settings'
                });
            },
            async handleUpload (file) {
                this.file = file
                return false;
            },
            
            async XerohandleSubmit (name) {
                let self = this;
                
                this.$refs[name].validate(async  (valid)   => {
                    if (valid) {
                        console.log(this.file)
                        let file_ext = this.file.name.split('.').pop()
                        console.log("self.file.type file_ext", file_ext)
                        if( self.file == null || file_ext !== "pem"){
                            self.$Message.error({
                                content: ' Please, attach a .pem file!',
                                duration: 4.5
                            });

                        }else{
                            this.loading = true;
                            var file    =this.file
                            var reader  = new FileReader();

                            reader.addEventListener("load", function () {
                                let lastModified = self.file.lastModified +"-"+self.file.name;
                                
                                let  data = {
                                    "configName": self.XeroformValidate.configName.trim(),
                                    "certificate" : reader.result.substring( reader.result.indexOf(",")+1)  ,
                                    "useragent" :  self.XeroformValidate.useragent,
                                    "consumerKey" : self.XeroformValidate.consumerKey,
                                    "consumerSecret" : self.XeroformValidate.consumerSecret,
                                    "domain" :  'Xero' ,
                                    "pem" : lastModified,
                                    "isActive" : self.isActive,
                                    "isDeleated" : false,
                                    "subscriptionId" : Cookies.get('subscriptionId')
                                };
                                
                                axios({
                                    method: 'post',
                                    url: feathersUrl +'settings',
                                    headers:{
                                        Authorization : Cookies.get('auth_token'),
                                        subscriptionId : Cookies.get('subscriptionId')
                                    },
                                    data: data
                                })  
                                .then(function (response) {
                                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> " , response)
                                    self.loading = false;
                                    self.$Message.success('Configuration Added Successfully');
                                    self.handleReset('XeroformValidate')
                                    self.$router.push({
                                        name: 'Settings'
                                    });
                                })
                                .catch(function (error) {
                                    self.loading = false;
                                    if(error.response.status == 401){
                                        let location = psl.parse(window.location.hostname)
                                        location = location.domain === null ? location.input : location.domain
                                        
                                        Cookies.remove('auth_token' ,{domain: location}) 
                                        this.$store.commit('logout', this);
                                        
                                        this.$router.push({
                                            name: 'login'
                                        });
                                    }else if(error.response.status == 403){
                                                self.$Notice.error(
                                                {duration:0, 
                                                title: error.response.statusText,
                                                desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'}
                                                );
                                            }
                                
                                });
                            }, false);

                            if (file) {
                                reader.readAsDataURL(file);
                            }
                        }
                    } else {
                        self.$Message.error('Something went wrong , please try again later!');
                        self.loading = false;
                    }
                })
            },

            async QBhandleSubmit (name) {

                let self = this;
                this.$refs[name].validate(async  (valid)   => {
                    if (valid) {
                        self.loading = true;

                        let  data = {
                            "configName": self.QBformValidate.configName.trim(),
                            "refresh_token" :  self.QBformValidate.refresh_token,
                            "client_id" : self.QBformValidate.client_id,
                            "client_secret" : self.QBformValidate.client_secret,
                            "domain" : 'QB',
                            "realmId" : self.QBformValidate.realmId,
                            "isActive" : self.isActiveQb,
                            "isDeleated" : false,
                            "subscriptionId" : Cookies.get('subscriptionId')
                        };
                        axios({
                            method: 'post',
                            url: feathersUrl +'settings',
                            headers:{
                                Authorization : Cookies.get('auth_token'),
                                subscriptionId : Cookies.get('subscriptionId')
                            },
                            data: data
                        })  
                        .then(function (response) {
                            console.log(response)
                                self.loading = false;
                                self.$Message.success('Configuration Added Successfully');
                                self.handleReset('QBformValidate')
                                self.$router.push({
                                name: 'Settings'
                            });
                        })
                        .catch(function (error) {
                            self.loading = false;
                            if(error.response.status == 401){
                                let location = psl.parse(window.location.hostname)
                                location = location.domain === null ? location.input : location.domain
                                
                                Cookies.remove('auth_token' ,{domain: location}) 
                                this.$store.commit('logout', this);
                                
                                this.$router.push({
                                    name: 'login'
                                });
                            }else if(error.response.status == 403){
                                self.$Notice.error({
                                    duration:0, 
                                    title: error.response.statusText,
                                    desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'
                                });
                            }  
                        });
                        
                    }
                    else {
                        self.$Message.error('Fail!');
                    }
                })
            },

            // async customhandleSubmit (name) {

            //     let self = this;
                
                   
            //             self.loading = true;
            //             let  data = {
            //                         "configName": "Custom Configuration",
            //                         "customer_url" :  feathersUrl+"customcustomer",
            //                         "invoice_url" : feathersUrl+"custominvoice",
            //                         "domain" : 'custom',
            //                         "isActive" : false,
            //                         "isDeleated" : false
            //                     }
            //             axios({
            //                     method: 'post',
            //                     url: feathersUrl +'settings',
            //                     headers:{
            //                         Authorization : Cookies.get('auth_token')
            //                     },
            //                     data: data
            //                 })  
            //                 .then(function (response) {
            //                     console.log(response)
            //                      self.$Message.success('Configuration Added Successfully');
            //                      self.loading = false;
            //                      self.handleReset('customformValidate')
            //                 })
            //                 .catch(function (error) {
            //                     Cookies.remove('auth_token') 
            //                     self.$Message.error('Auth Error!');
            //                     self.loading = false;
            //                       self.$store.commit('logout', this); 
            //                        self.$router.push({
            //                         name: 'login'
            //                     })
                               
            //                 });
                    
                
            // },

            // async customhandleSubmit (name) {

            //     let self = this;
            //     this.$refs[name].validate(async  (valid)   => {
            //         if (valid) {
            //             self.loading = true;
            //             let  data = {
            //                         "configName": self.customformValidate.configName.trim(),
            //                         "customer_url" :  self.customformValidate.customer_url.trim(),
            //                         "invoice_url" : self.customformValidate.invoice_url.trim(),
            //                         "domain" : 'custom',
            //                         "isActive" : self.isActivecustom,
            //                         "isDeleated" : false
            //                     }
            //             axios({
            //                     method: 'post',
            //                     url: feathersUrl +'settings',
            //                     headers:{
            //                         Authorization : Cookies.get('auth_token')
            //                     },
            //                     data: data
            //                 })  
            //                 .then(function (response) {
            //                     console.log(response)
            //                      self.$Message.success('Configuration Added Successfully');
            //                      self.loading = false;
            //                      self.handleReset('customformValidate')
            //                 })
            //                 .catch(function (error) {
            //                     Cookies.remove('auth_token') 
            //                     self.$Message.error('Auth Error!');
            //                     self.loading = false;
            //                       self.$store.commit('logout', this); 
            //                        self.$router.push({
            //                         name: 'login'
            //                     })
                               
            //                 });
                        
                        
            //         }
            //         else {
            //             self.$Message.error('Fail!');
            //         }
            //     })
            // },

            handleReset (name) {
                this.$refs[name].resetFields();
                this.file = null
                this.isActive = false
                this.isActiveQb = false
            }
        },
        computed: {
            productChunks(){
                return _.chunk(this.data6, 2);
            }
        },
        mounted() {
            console.log(this.$store.state.settingData)
            //console.log()
        }
    }
</script>

<style scoped>
.settings_header{
    padding : 10px;
    text-align:right;
    background: #cacaca;
    width:100%;
    margin:14px 2px;
}
.ivu-upload-list{
    display: none;
}
</style>