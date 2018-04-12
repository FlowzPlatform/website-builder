<template>
    <div>
        <div class="settings_header">
            <Button @click="addNewPaymentSettings">Add New Custom Payment Configuration</Button>
        </div>
        <div>
            <Row>
                <div v-for="(item, inx) in data6">
                    <Col :span="24">
                        <div style="padding: 5px;">
                            <Card style="padding:10px;min-height: 320px">
                                <p slot="title"> {{item.configName}}</p>
                                <Tooltip placement="top" slot="extra" content="Toggle active / inactive" style="padding-right:9px;">
                                  <i-switch v-model="item.isActive" :disabled="disabled" @on-change="buttonClicked(item)"></i-switch>
                              </Tooltip>
                                <Tooltip placement="top" slot="extra" content="Add More Payment Gateways" style="padding-right:9px;">
                                     <Button class="ButtonGroup" @click="editconfigure(inx)"   type="ghost" icon="plus"></Button>
                                </Tooltip>
                                <ButtonGroup slot="extra" v-if="item.domain != 'custom'">
                                    <Tooltip placement="top" content="Delete" style="padding-left:3px;">
                                        <Button class="ButtonGroup" @click="deleteConfig(item)"   type="ghost" icon="trash-b"></Button>
                                    </Tooltip>
                                </ButtonGroup>     

                                <div>
                                    <p slot="content" v-if="item.online_payment && item.online_payment !== ''">
                                        <Tabs :value="getTabValue(inx)" @on-click="setTabValue">
                                            <TabPane v-if="v.length > 0" v-for="(v, k) in item.online_payment" :label="k" :name="setname(k, inx)" :key="k">
                                                <div class="schema-form ivu-table-wrapper">
                                                    <div class="ivu-table ivu-table-border">
                                                        <div v-if="v.length > 0" class="ivu-table-body">
                                                            <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="" v-for="(value, key) in v[0]" v-if="key !== 'isDeleted'">
                                                                            <div class="ivu-table-cell">
                                                                                <span>{{key}}</span>
                                                                            </div>
                                                                        </th>
                                                                        <th class="ivu-table-column-center">
                                                                            <div class="ivu-table-cell"><span>Action</span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="ivu-table-tbody">
                                                                    <tr class="ivu-table-row" v-for="(row, i) in v" v-if="row.isDeleted == false">
                                                                        <td class="" v-for="(val, key) in row" v-if="key !== 'isDeleted'">
                                                                            <div class="ivu-table-cell">
                                                                                {{row[key]}}
                                                                            </div>
                                                                        </td>
                                                                        <td class="ivu-table-column-center" style="padding:3px;">
                                                                            <div class="ivu-table-cell">
                                                                            <Tooltip content="Edit" placement="top">
                                                                                <Button class="ButtonGroup" @click="handleEdit(inx, k, i)" type="ghost" icon="edit"></Button>
                                                                                <!-- <a @click="handleEdit(inx, k, i)"><Icon type="edit" size="20" color="blue"></Icon></a> -->
                                                                            </Tooltip>
                                                                            <Tooltip content="Remove" placement="top">
                                                                                <Button class="ButtonGroup" @click="handleDelete(inx, k, i)" type="ghost" icon="android-delete"></Button>
                                                                                <!-- <a @click="handleDelete(inx, k, i)"><Icon type="android-delete" size="20" color="#e74c3c"></Icon></a> -->
                                                                            </Tooltip>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div v-else class="ivu-table-tip" style="display: none;">
                                                            <table cellspacing="0" cellpadding="0" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><span>No Data</span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </Tabs>
                                    </p>
                                    <p slot="content" v-else style="text-align:center;color:#fd5e5e">
                                        Payment Gateway Information is not Available. Add new Payment Gateway.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>  
    </div>
</template>

<script>
    import _ from 'lodash'
    import Vue from 'vue'
    import VueWidgets from 'vue-widgets'
    import 'vue-widgets/dist/styles/vue-widgets.css'
    import axios from "axios" 
    import config from './../../config.js'
    let feathersUrl =  config.default.serviceUrl;
    import Cookies from 'js-cookie';
    import psl from 'psl';
    // import customSetting from './General-setting.vue'
    // import onlinePayment from './Online-Payment.vue'
    Vue.use(VueWidgets);


    export default {
        components: {
            
        },
         props: {
            
         },
        data () {
            return {
                value2 : [],
                activetabs: '',
                current: '',
                tabValue: '',
                exData: '',
                gateway: '',
                country: '',
                state: '',
                editFormItemXero: {
                    input: ''
                },
                editFormItemQB: {
                    input: ''
                },
                editFormItemCustom :{
                    input: ''
                },
                editGeneral : {
                    input: ''
                },
                onlinePayment : {
                    input: ''
                },
                file:'',
                editData : {},
                editGeneralData: {},
                editPaymentData: {},
                editFormType : "",
                modal1: false,
                model2 : false,
                model3 : false,
                disabled:false,
                switch1: false,
                comp: true,
                consumerKeyType:"password",
                client_idType:"password",
                consumerSecretType:"password",
                client_secretType:"password",
                Configurations: "Configurations",
                columns7: [
                    {
                        title: 'User',
                        key: 'user'
                    },
                    {
                        title: 'Domain',
                        key: 'domain'
                    },
                    {
                        title: 'consumerKey',
                        key: 'consumerKey'
                    },
                    {
                        title: 'consumerSecret',
                        key: 'consumerSecret'
                    },
                    {
                        title: 'useragent',
                        key: 'useragent'
                    }
                ],
                data6: [
                ],
                tabarr: [],
                activearr: []
            }
        },
        methods: {
            getTabValue (inx) {
                return this.tabarr[inx].activetab
            },
            setTabValue (name) {
                let inx = parseInt(name.charAt(name.length - 1))
                // console.log('name :: ', name, inx)
                this.tabarr[inx].activetab = name
            },
            setname (k, inx) {
                return k + inx
            },
            editconfigure(card){
                this.$emit('addNewConfig','addnewpaymentgatway')
                // console.log('card:',card)
            },
            handleEdit (card, tabname, rowinx) {
                let self = this;
                this.exData = this.data6[card].online_payment[tabname][rowinx];
                let oldData = _.cloneDeep(this.data6[card].online_payment[tabname][rowinx])
                oldData = _.omit(oldData, ['_index', '_rowKey'])
                console.log('oldData:',oldData)
                this.$Modal.confirm({
                    title: 'Edit',
                    closable: true,
                    render: (h, params) => {
                        let myFormItem = []
                        for(let k in oldData) {
                            if (k === 'isDefault') {
                                myFormItem.push(
                                h('FormItem', {
                                    props: {
                                        label: k
                                    }
                                }, [
                                    h('Checkbox', {
                                        props: {
                                            value: self.exData[k]
                                        },
                                        on: {
                                            'on-change': (value) => {
                                                // console.log(value)
                                                self.exData[k] = value
                                            }
                                        }
                                    })
                                ])
                            )    
                            } else {
                                myFormItem.push(
                                    h('FormItem', {
                                        props: {
                                            label: k
                                        }
                                    }, [
                                        h('Input', {
                                            props: {
                                                value: self.exData[k]
                                            },
                                            on: {
                                                'input': (value) => {
                                                    // console.log('Input:: ', value)
                                                    self.exData[k] = value
                                                }
                                            }
                                        })
                                    ])
                                )
                            }
                        } 
                        return h('div', {},  
                        [
                            h('Form', {}, myFormItem)
                        ])
                    },
                    onOk() {
                        let rowIndex = rowinx;
                        let configId = self.data6[card].id;
                        let patchData = {
                            id : configId,
                            rowIndex : rowIndex,
                            online_payment : {
                                [tabname] : self.exData
                            }
                        };
                        axios({
                            method:'patch',
                            url:feathersUrl +'buildersettings/'+configId,
                            data: patchData,
                            headers:{
                                'Authorization' : Cookies.get('auth_token'),
                                'subscriptionId' : Cookies.get('subscriptionId')
                            },
                        }).then(response => {
                            if(response.status == 200){
                                this.$Message.success("Configuaration updated successfully")
                            }
                            
                        })
                        .catch(error => {
                                console.log(error)
                                
                                if(error.response.status == 401){
                                    let location = psl.parse(window.location.hostname)
                                    location = location.domain === null ? location.input : location.domain
                                    
                                    Cookies.remove('auth_token' ,{domain: location}) 
                                    Cookies.remove('subscriptionId' ,{domain: location}) 
                                    this.$store.commit('logout', this);
                                }
                        });
                    },
                    onCancel() {
                        console.log('CANCEL!!')
                    }
                })
            },
            handleDelete (card, tabname, rowinx) {
                let self = this;
                let configId = self.data6[card].id;
                this.$Modal.confirm({ 
                    title: 'Confirm Delete',
                    okText : "Delete",
                    cancelText: 'Cancel',
                    content: '',
                    onOk: () => {
                        self.exData = self.data6[card].online_payment[tabname][rowinx];
                        self.exData.isDeleted = true;
                        let patchData = {
                            id : configId,
                            rowIndex : rowinx,
                            online_payment : {
                                [tabname] : self.exData
                            }
                        };
                        axios({
                            method:'patch',
                            url:feathersUrl +'buildersettings/'+configId,
                            data: patchData,
                            headers:{
                                'Authorization' : Cookies.get('auth_token'),
                                'subscriptionId' : Cookies.get('subscriptionId')
                            },
                        }).then(response => {
                            if(response.status == 200){
                                this.$Message.success("Configuaration deleated successfully")
                            }   
                        })
                        .catch(error => {
                                console.log(error)
                                
                                if(error.response.status == 401){
                                    let location = psl.parse(window.location.hostname)
                                    location = location.domain === null ? location.input : location.domain
                                    
                                    Cookies.remove('auth_token' ,{domain: location})
                                    Cookies.remove('subscriptionId' ,{domain: location})  
                                    this.$store.commit('logout', this);
                                }
                        });
                    },
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
                            },'This Payment Configuration Will Be Deleted for ' + self.data6[card].configName),
                        ])
                    }
                })
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            addNewPaymentSettings() {
                // console.log('componentsID:',this.componentID)
                this.$store.state.settingData = ""
                 this.$emit('addNewConfig','newpaymentsettings');
            },
            defaultChanged(e){
                
                // console.log(e)
            },
            change (status) {
                
            },
            deleteConfig(data){
                this.$Modal.confirm({ 
                    title: 'Confirm Delete',
                    okText : "Delete",
                    cancelText: 'Cancel',
                    content: '',
                    onOk: () => {
                        axios({
                            method:'patch',
                            url:feathersUrl +'buildersettings/'+data.id,
                            data:{isDeleated : true },
                            headers:{
                                'Authorization' : Cookies.get('auth_token'),
                                'subscriptionId' : Cookies.get('subscriptionId')
                            },
                        }).then(response => {
                            if(response.status == 200){
                                this.$Message.success("Configuaration deleated successfully")
                                let deletedData =  this.data6.filter(function(el) {
                                    return el.id !== data.id;
                                });
                                this.data6 = deletedData, null, ' '
                            }
                            
                        })
                        .catch(error => {
                                console.log(error)
                                
                                if(error.response.status == 401){
                                    let location = psl.parse(window.location.hostname)
                                    location = location.domain === null ? location.input : location.domain
                                    
                                    Cookies.remove('auth_token' ,{domain: location}) 
                                    Cookies.remove('subscriptionId' ,{domain: location}) 
                                    this.$store.commit('logout', this);                                }
                        });
                    },
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
                            },'This Account Will Be Deleted Permanently'),
                        ])
                    }
                })
                
            },
            deleteGeneralConfig(data){
                this.$Modal.confirm({ 
                    title: 'Confirm Delete',
                    okText : "Delete",
                    cancelText: 'Cancel',
                    content: '',
                    onOk: () => {
                        this.editData.logo = '';
                        this.editData.address = '';
                        axios({
                            method:'patch',
                            url:feathersUrl +'buildersettings/'+data.id,
                            data: this.editData,
                            headers:{
                                'Authorization' : Cookies.get('auth_token'),
                                'subscriptionId' : Cookies.get('subscriptionId')
                            },
                        }).then(response => {
                            if(response.status == 200){
                                this.$Message.success("Configuaration deleated successfully")
                            }
                            
                        })
                        .catch(error => {
                                console.log(error)
                                
                                if(error.response.status == 401){
                                    let location = psl.parse(window.location.hostname)
                                    location = location.domain === null ? location.input : location.domain
                                    
                                    Cookies.remove('auth_token' ,{domain: location}) 
                                    Cookies.remove('subscriptionId' ,{domain: location}) 
                                    this.$store.commit('logout', this);
                                    
                                    // this.$router.push({
                                    //     name: 'login'
                                    // });
                                }
                        });
                    },
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
                            },'This Address Will Be Deleted for ' + data.configName),
                        ])
                    }
                })
                
            },
            editConfig(data){
                this.editData = data;
                this.editFormType = data.domain;
                this.modal1 = true;

            },
            editGeneralConfig(data) {
                // console.log("inside edit")
                this.editData = data;
                // console.log("data.address",data.address)
                this.editGeneralData = data.address;
                // populateCountries("country", "state");
                // $("#country").on("change",function() {
                //     $('.state1').css("display","block")
                // });
                this.model2 = true;
            },
            editPaymentConfig(data) {
                this.editData = data;
                this.editPaymentData = data.online_payment;
                this.model3 = true;
            },
            async ok () {
                let self = this
                
                let EditModifiedData = await this.editedData() 
                // console.log(EditModifiedData)
                let patchData = _.cloneDeep(EditModifiedData)
                delete patchData.online_payment;
                // console.log("--------------",patchData);
                axios({
                    method:'patch',
                    url:feathersUrl +'buildersettings/'+this.editData.id,
                    data: patchData,
                    headers: {
                        'Authorization' : Cookies.get('auth_token'),
                        'subscriptionId' : Cookies.get('subscriptionId')
                    },
                })
                .then(response => {
                    if(response.status == 200){
                        this.$Message.success("Configuaration updated successfully")
                    }
                    this.disabled = false;
                })
                .catch(error => {
                        console.log(error)
                        this.disabled = false;
                        if(error.response.status == 401){
                            let location = psl.parse(window.location.hostname)
                            location = location.domain === null ? location.input : location.domain
                            
                            Cookies.remove('auth_token' ,{domain: location})
                            Cookies.remove('subscriptionId' ,{domain: location})  
                            this.$store.commit('logout', this);
                            
                            // this.$router.push({
                            //     name: 'login'
                            // });
                        }
                });
            },
            async okGeneral () {
                let self = this

                self.editData.address = self.editGeneralData
                // console.log("*****************",self.editGeneralData)
                let EditModifiedData = await this.getGeneralEditedData();
                // console.log("------------------EditModifiedData",self.editData.logo)
                let patchData = {
                    id : self.editData.id,
                    address : self.editData.address,
                    logo : self.editData.logo
                };
                setTimeout(function(){
                    axios({
                        method:'patch',
                        url:feathersUrl +'buildersettings/'+self.editData.id,
                        data: patchData,
                        headers:{
                            'Authorization' : Cookies.get('auth_token'),
                            'subscriptionId' : Cookies.get('subscriptionId')
                        },
                    }).then(response => {
                        if(response.status == 200){
                            self.$Message.success("Configuaration updated successfully")
                        }
                        self.disabled = false;
                    })
                    .catch(error => {
                            console.log(error)
                            self.disabled = false;
                            if(error.response.status == 401){
                                let location = psl.parse(window.location.hostname)
                                location = location.domain === null ? location.input : location.domain
                                
                                Cookies.remove('auth_token' ,{domain: location}) 
                                Cookies.remove('subscriptionId' ,{domain: location}) 
                                self.$store.commit('logout', self);
                                
                                // self.$router.push({
                                //     name: 'login'
                                // });
                            }
                    });
                },1000)

            },
            async editedData (){
                let self= this;
                let reader  = new FileReader();
                return new Promise ((resolve , reject) =>{
                    if (this.file && this.editData.domain == "Xero") {
                        // console.log("Is file uploaded = yes")
                            reader.readAsDataURL(this.file);
                            
                             reader.addEventListener("load", function () {
                                let lastModified = self.file.lastModified +"-"+self.file.name;
                                self.editData.certificate = reader.result.substring( reader.result.indexOf(",")+1),
                                self.editData.pem = lastModified;
                                
                                resolve(self.editData)
                            })
                          }else {
                            
                            resolve(self.editData)
                        }
                })
            },
            getGeneralEditedData() {
                let self = this;
                return new Promise ((resolve , reject) =>{ 
                    // console.log('**************',this.file)
                    // console.log("self.file.type", this.file.type)
                    // console.log("-------------config id",this.editData.id)              
                    // self.editData['logo'] = '';
                    if( self.file != '' && (self.file.type === "image/png" || self.file.type === "image/jpeg")){
                        // console.log('this.file',this.file)
                        var reader = new FileReader();
                        var file = this.file
                        
                        var logoData1 = {'logo': reader.result}
                        reader.addEventListener("load",function () {
                            // console.log('reader------->',reader.result)
                            self.editData['logo'] = reader.result
                        }, false);

                        if (file) {
                            // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',reader)
                            reader.readAsDataURL(file);
                        }
                    }
                    else if (self.file == '') {

                    }else {
                        self.$Message.error(' Please, attach a .jpg or .png file!');
                    }
                    // console.log("=====++++++++++++self.editData",self.editData)
                    resolve(self.editData['logo']);
                })
            },
            cancel () {
                this.file = ''
                //this.$Message.info('Clicked cancel');
            },
            async handleUpload (file) {
                var self = this
                // console.log('file',file)
                self.file = file
                return false;
            },
            showSecret(data){
                // console.log("----------=================",this[data])
                if(this[data] == "password" ){
                    this[data] = "text"
                }else{
                    this[data] = "password"
                }
                //if(data == show[0].id){
                
                // if(this.client_idType == "password" ){
                //     this.client_idType = "text"
                // }else{
                //     this.client_idType = "password"
                // }

                // if(this.client_secretType == "password"){
                //     this.client_secretType = "text"
                // }else{
                //     this.client_secretType = "password"
                // }

                // if(this.consumerKeyType == "password"){
                //     this.consumerKeyType = "text"
                // }else{
                //     this.consumerKeyType = "password"
                // }

                // if(this.consumerSecretType == "password"){
                //     this.consumerSecretType = "text"
                // }else{
                //     this.consumerSecretType = "password"
                // }
                //}
                
                
            },
            buttonClicked(data){
                this.disabled = true;
                axios({
                    method:'patch',
                    url:feathersUrl +'buildersettings/'+data.id,
                    data:{isActive : data.isActive },
                    headers:{
                        'Authorization' : Cookies.get('auth_token'),
                        'subscriptionId' : Cookies.get('subscriptionId')
                    },
                }).then(response => {
                    if(response.status == 200){
                        this.$Message.success("Configuaration updated successfully")
                    }
                    this.disabled = false;
                })
                .catch(error => {
                        console.log(error)
                        this.disabled = false;
                        if(error.response.status == 401){
                            let location = psl.parse(window.location.hostname)
                            location = location.domain === null ? location.input : location.domain
                            
                            Cookies.remove('auth_token' ,{domain: location}) 
                            Cookies.remove('subscriptionId' ,{domain: location}) 
                            this.$store.commit('logout', this);
                            
                            // this.$router.push({
                            //     name: 'login'
                            // });
                        }
                });
            }
        },
        computed: {
            productChunks(){
                return _.chunk(this.data6, 2);
            }
        },
        async mounted(){
            this.$Loading.start()
            // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&",this.$route.params)
            // if (this.$route.params.tabName) {
            //     this.activetabs = this.$route.params.tabName
            // }
            let self = this;   
            self.loading = true;
            let  data = {
                "configName": "Custom Configuration",
                "customer_url" :  feathersUrl+"customcustomer",
                "invoice_url" : feathersUrl+"custominvoice",
                "domain" : 'custom',
                "isActive" : true,
                "isDeleated" : false,
                "subscriptionId" : Cookies.get('subscriptionId')
            };

            // ------------------------
            axios({
                method:'get',
                url:feathersUrl +'buildersettings',
                headers:{
                    'Authorization' : Cookies.get('auth_token'),
                    'subscriptionId' : Cookies.get('subscriptionId')
                },
            })
            .then(async response => {
                // console.log("---------response",response)
                // localStorage.clear();
                self.data6 = response.data.data
                // console.log("++++data6",self.data6);
                let arrIndex = _.findIndex(response.data.data, function(o) { return o.domain == 'custom'; });
                // console.log("arrIndex",arrIndex)
                // if (arrIndex < 0) {
                //     await axios({
                //         method: 'post',
                //         url: feathersUrl +'buildersettings',
                //         headers:{
                //             'Authorization' : Cookies.get('auth_token'),
                //             'subscriptionId' : Cookies.get('subscriptionId')
                //         },
                //         data: data
                //     })
                //     .then(function (response) {
                //         console.log("-----------settings response",response)
                //         self.data6.push(response.data);
                //         // self.data6.push(response.data);
                //         // self.$Message.success('Success!');
                //     })
                //     .catch(function (error) {
                //         console.log("error in get settings",error)
                //         if(error.response.status == 401){
                //             let location = psl.parse(window.location.hostname)
                //             location = location.domain === null ? location.input : location.domain
                            
                //             Cookies.remove('auth_token' ,{domain: location}) 
                //             Cookies.remove('subscriptionId' ,{domain: location}) 
                //             this.$store.commit('logout', this);
                            
                //             // this.$router.push({
                //             //     name: 'login'
                //             // });
                //         }else if(error.response.status == 403){
                //             console.log("error.response",error.response)
                //             if (error.response.data.data.errorCode === 'ERR-LIMIT-OVER' || error.response.data.data.errorCode === 'ERR-PERMISSION') {
                //                 self.$Notice.error({
                //                     duration:0, 
                //                     title: error.response.statusText,
                //                     desc:error.response.data.message
                //                 });
                //             }
                //             else {
                //                 self.$Notice.error({
                //                     duration:0, 
                //                     title: error.response.statusText,
                //                     desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'
                //                 });
                //             }
                //         }
                //     });
                // }
                // console.log("after post self.data6",self.data6);
                for (let [inx, item] of self.data6.entries()) {

                    if (item.hasOwnProperty('online_payment')) {
                        let i = 0
                        // console.log('item:: ', item.online_payment)
                        if (item.online_payment !== '') {
                            for (let k in item.online_payment) {
                                
                                item.online_payment[k] = _.reject(item.online_payment[k], {isDeleted: true})
                                if (item.online_payment[k].length > 0) {
                                    if (i === 0) {
                                        // self.alldata = false;
                                        item.online_payment.alldeleted = false;
                                        self.tabarr.push({activetab : k+inx})
                                        i++
                                    }
                                }
                                else {
                                    //message
                                   
                                    // self.alldata = true;
                                    item.online_payment.alldeleted = true;
                                    self.tabarr.push({activetab : ''})
                                }
                            }
                        }
                        else {
                            self.tabarr.push({activetab : ''})
                        }
                    } else {
                        self.tabarr.push({activetab : ''})
                    }
                }
               
                self.$Loading.finish();
            })
            .catch(error => {
                console.log('error:',error)
                if(error.response.status == 401){
                    let location = psl.parse(window.location.hostname)
                    location = location.domain === null ? location.input : location.domain
                    
                    // Cookies.remove('auth_token' ,{domain: location}) 
                    // Cookies.remove('subscriptionId' ,{domain: location}) 
                    // self.$store.commit('logout', self);
                    
                    // self.$router.push({
                    //     name: 'login'
                    // });
                }else if(error.response.status == 403){
                    // console.log("error.response.data.data.errorCode",error.response.data.data.errorCode)
                    if (error.response.data.data.errorCode === 'ERR-LIMIT-OVER' || error.response.data.data.errorCode === 'ERR-PERMISSION') {
                        self.$Notice.error({
                            duration:0, 
                            title: error.response.statusText,
                            desc:error.response.data.message
                        });
                    }
                    else {
                        self.$Notice.error({
                            duration:0, 
                            title: error.response.statusText,
                            desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'
                        });
                    }
                    // self.$Notice.error(
                    //     {duration:0, 
                    //     title: error.response.statusText,
                    //     desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'}
                    //     );
                
                }
                self.$Loading.error();
            });
            // -------------------------


            // axios({
            //     method: 'post',
            //     url: feathersUrl +'settings',
            //     headers:{
            //         Authorization : Cookies.get('auth_token'),
            //         subscriptionId : Cookies.get('subscriptionId')
            //     },
            //     data: data
            // })  
            // .then(function (response) {
            //     console.log("-----------settings response",response)
            //     // self.$Message.success('Success!');
            //     self.loading = false;
            //     axios({
            //         method:'get',
            //         url:feathersUrl +'settings',
            //         headers:{
            //             Authorization : Cookies.get('auth_token'),
            //             subscriptionId : Cookies.get('subscriptionId')
            //         },
            //     })
            //     .then(response => {
            //         console.log(response)
            //         localStorage.clear();
            //         self.data6 = response.data.data
            //         console.log("+++++++++++++++++++++data6",self.data6);
            //         for (let [inx, item] of self.data6.entries()) {

            //             if (item.hasOwnProperty('online_payment')) {
            //                 let i = 0
            //                 // console.log('item:: ', item.online_payment)
            //                 if (item.online_payment !== '') {
            //                     for (let k in item.online_payment) {
            //                         item.online_payment[k] = _.reject(item.online_payment[k], {isDeleted: true})
            //                         if (item.online_payment[k].length > 0) {
            //                             if (i === 0) {
            //                                 self.tabarr.push({activetab : k+inx})
            //                                 i++
            //                             }
            //                         }
            //                     }
            //                 }
            //                 else {
            //                     self.tabarr.push({activetab : ''})
            //                 }
            //             } else {
            //                 self.tabarr.push({activetab : ''})
            //             }
            //         }
            //         console.log("self.tabarr",self.tabarr)
            //         self.$Loading.finish();
            //     })
            //     .catch(error => {
            //         if(error.response.status == 401){
            //             let location = psl.parse(window.location.hostname)
            //             location = location.domain === null ? location.input : location.domain
                        
            //             Cookies.remove('auth_token' ,{domain: location}) 
            //             Cookies.remove('subscriptionId' ,{domain: location}) 
            //             self.$store.commit('logout', self);
                        
            //             self.$router.push({
            //                 name: 'login'
            //             });
            //         }else if(error.response.status == 403){
            //             self.$Notice.error(
            //                 {duration:0, 
            //                 title: error.response.statusText,
            //                 desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'}
            //                 );
                    
            //         }
            //         self.$Loading.error();
            //     });
            // })
            // .catch(function (error) {
            //     console.log(error)
            //     if(error.response.status == 401){
            //         let location = psl.parse(window.location.hostname)
            //         location = location.domain === null ? location.input : location.domain
                    
            //         Cookies.remove('auth_token' ,{domain: location}) 
            //         Cookies.remove('subscriptionId' ,{domain: location}) 
            //         this.$store.commit('logout', this);
                    
            //         this.$router.push({
            //             name: 'login'
            //         });
            //     }else if(error.response.status == 403){
            //         console.log("error.response",error.response)
            //         // if (error.response.data.data.errorCode === 'ERR-LIMIT-OVER') {
            //             axios({
            //                 method:'get',
            //                 url:feathersUrl +'settings',
            //                 headers:{
            //                     Authorization : Cookies.get('auth_token'),
            //                     subscriptionId : Cookies.get('subscriptionId')
            //                 },
            //             })
            //             .then(response => {
            //                 console.log(response)
            //                 localStorage.clear();
            //                 self.data6 = response.data.data
            //                 console.log("+++++++++++++++++++++data6",self.data6);
            //                 for (let [inx, item] of self.data6.entries()) {
            //                     if (item.hasOwnProperty('online_payment')) {
            //                         let i = 0
            //                         // console.log('item:: ', item.online_payment)
            //                         for (let k in item.online_payment) {
            //                             item.online_payment[k] = _.reject(item.online_payment[k], {isDeleted: true})
            //                             if (item.online_payment[k].length > 0) {
            //                                 if (i === 0) {
            //                                     self.tabarr.push({activetab : k+inx})
            //                                     i++
            //                                 }
            //                             }
            //                         }
            //                     } else {
            //                         self.tabarr.push({activetab : ''})
            //                     }
            //                 }
            //                 console.log("self.tabarr",self.tabarr)
            //                 self.$Loading.finish();
            //             })
            //         // }
            //         // else {
            //         //     self.$Notice.error({
            //         //         duration:0, 
            //         //         title: error.response.statusText,
            //         //         desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'
            //         //     });
            //         // }
            //     }
            // }); 
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

.ivu-radio-group {
    display: block !important;
    font-size: 14px !important;
    /* vertical-align: middle; */
}

.default_radio {
    background: #cacaca;
    max-width: 126px;
    color: #5a5252;
    padding: 12px 5px;
    width: auto;
    float: right;
}

table {
    width:100%;
}
table, th, td {
    border:  1px solid #d6d6d6;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;
}
table#t01 tr:nth-child(even) {
    background-color: #eee;
}
table#t01 tr:nth-child(odd) {
   background-color:#fff;
}
table#t01 th {
    background-color: #232038;
    color: white;
}
.actionDiv{
   padding: 6px;
    text-align: -webkit-right;
    background: #f3f3f3;
    margin-top: 3px;
}

.ButtonGroup  {
    margin-left : 0px
}
.eyeIcon{
    float:right;
    font-size:16px 
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
.ivu-icon-arrow-right-b {
    padding-right: 10px;
}
.firstPanel {
    background: white;
    padding: 10px;
    border: 1px solid #e0e1e3;
    border-radius: 2px;
}
</style>
