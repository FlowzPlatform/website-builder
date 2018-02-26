<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        
             
        <div v-if = 'data6.length > 0'>
           <Table border :columns="columns7" :data="data6"></Table>
        </div>
        <div v-else style="text-align:center;color:#fd5e5e">
            <!-- <h5>{{assignee}}</h5> -->
            <h5>No one is assigned</h5>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    const config = require('../config');
    let subscriptionUrl = config.subscriptionApi
    import Cookies from 'js-cookie';
    import moment from 'moment'
    import Vue from 'vue';
    import iView from 'iview';
    import locale from 'iview/dist/locale/en-US';
    Vue.use(iView, { locale });
    export default {
        props: {
            row: Object,
            
        },
        data(){
            return{
              assignee   : '',
              columns7: [
                    {
                        title: 'Assignee Email',
                        key: 'toEmail',
                        // render: (h, params) => {
                        //     return h('div', [
                        //         h('Icon', {
                        //             props: {
                        //                 type: 'person'
                        //             }
                        //         }),
                        //         h('strong', params.row.name)
                        //     ]);
                        // }
                    },
                    {
                        title: 'Role',
                        key: 'role',
                        render: (h, params) => {
                            return h('div', [
                                //console.log(params)
                                //let obj= Object.keys(params.row.role);
                                h('strong', params.row.role[Object.keys(params.row.role)])
                            ]);
                        }
                    },
                    {
                        title: 'Assigned Date',
                        key: 'assignDate',
                        render: (h, params) => {
                            
                                var date1 = moment(params.assignDate).format('DD-MMM-YYYY')
                                return date1
                            
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        
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
                                            this.sendEmail(params.index)
                                        }
                                    }
                                }, 'Send Email'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params)
                                        }
                                    }
                                }, 'Un-assaign')
                            ]);
                        }
                    }
                ],
                data6: []
            }
        },
        methods : {
            show (index) {
                
            },
            remove (params) {

                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Do you really want to Un-assign this user ?</p><p> You Can not Undo this action</p>',
                    onOk: () => {
                        let self = this;
                        let module = [Object.keys(params.row.role)]
                        let paramss = {
                                subscriptionId : params.row.subscriptionId ,
                                toEmail: params.row.toEmail,
                                role: module, 
                                fromEmail: params.row.fromEmail, 
                                subscription_invitation_id:params.row.id
                            }
                        console.log(params)
                        axios({
                            method:'delete',
                            url: subscriptionUrl+'invite',
                            params : paramss,
                            headers : {
                                "Authorization": Cookies.get('auth_token'),
                            }
                            })
                            .then(function(response) {
                                console.log(response)
                                self.data6.splice(params.index, 1);
                            }).catch(function(err){
                                console.log(err)
                            });
                    },
                    onCancel: () => {
                       
                    }
                });
                //this.data6.splice(index, 1);
                
            },
            init(){
                let self = this
                console.log(this.row)
                 //axios.get(subscriptionUrl + "subscription-invitation?subscriptionId="+this.row.subscriptionId).then(function(result){
                    //axios.get(subscriptionUrl + "subscription-invitation?subscriptionId="+this.row.subscriptionId).then(function(result){
                        // axios.get( "http://172.16.230.86:3030/" + "subscription-invitation?subscriptionId="+this.row.subscriptionId)
                        axios.get(subscriptionUrl +'subscription-invitation', {
                        params: {
                            subscriptionId: this.row.subscriptionId
                           // own : true
                        },
                        headers : {
                            Authorization : Cookies.get('auth_token')
                        }
                    })
                        .then(function(result){
                    if(result.data.data.length == 0){
                        self.assignee = "No assignee found for this subscription"
                    }else{
                        console.log(result)
                        self.assignee = result.data.data
                        self.data6 = self.assignee
                    }
                })
            }
        },
        mounted() {
            this.init()
        }
    };
</script>