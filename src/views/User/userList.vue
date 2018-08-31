<template>
    <div class="configuration">
        <Row>
            <div  style="padding-bottom: 10px;">
            <h2>User List</h2>
            </div>
        </Row>

        <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
            <!-- <Col :span="6"> -->
                <Select v-model="filterobj.website" placeholder="Select Website" filterable @on-change="handleConfig">
                <Option v-for="item in webOptions" :value="item.websiteId" :key="item.websiteId">{{ item.websiteName }}</Option>
                </Select>
            <!-- </Col> -->
        </Row>
        <Row>
            <Table :columns="columns" :data="userData"></Table>
        </Row>
    </div>
</template>
<script>
import axios from "axios";
import config from "../../config";
import Cookies from "js-cookie";
import _ from "lodash";

let baseUrl = config.baseURL;
let auth_token = Cookies.get("auth_token");

export default {
    name: "configuration",
    data() {
        return {
            filterobj: {
                website: null
            },
            webOptions: [],
            columns: [
                // {
                //     title: 'Name',
                //     render : (h,{row}) => {
                //         return h('div', [
                //             h('span', row.firstName + ' ' + row.lastName)
                //         ]);
                //     }
                // },
                {
                    title: 'Email',
                    key: 'userEmail'
                },
                {
                    title: 'Role',
                    key: 'userRole'
                },
                {
                    title: 'Action',
                    render: (h, params) => {
                        if (params.row.isDeleted) {
                            return h('div', [
                                h('Tooltip', {
                                    props: {
                                        placement: 'top',
                                        content: 'Active/Inactive'
                                    },
                                    style:{
                                        cursor:'pointer'
                                    }
                                },[
                                    h('i-switch', {
                                        props: {
                                            value: params.row.isActive,
                                            size: 'small'
                                        },
                                        style: {
                                            marginRight: '3px',
                                            padding: '0px',
                                            fontSize: '20px',
                                            color: '#2d8cf0'
                                        },
                                        on: {
                                            'on-change': (status) => {
                                                this.statusChange(params.row, status)
                                            }
                                        }
                                    }, '')
                                ]),
                                h('Tooltip', {
                                    props: {
                                        placement: 'top',
                                        content: 'Retrieve'
                                    },
                                    style:{
                                        cursor:'pointer'
                                    }
                                },[
                                    h('Button', {
                                        props: {
                                            type: 'text',
                                            size: 'large',
                                            icon: 'ios-undo-outline'
                                        },
                                        style: {
                                            color: 'red',
                                            marginLeft: '3px',
                                            padding: '0px',
                                            fontSize: '20px',
                                        },
                                        on: {
                                            click: () => {
                                                this.retrieveUser(params.row, params.index)
                                            }
                                        }
                                    })
                                ])
                                
                            ]);
                        }
                        else {
                            return h('div', [
                                h('Tooltip', {
                                    props: {
                                        placement: 'top',
                                        content: 'Active/Inactive'
                                    },
                                    style:{
                                        cursor:'pointer'
                                    }
                                },[
                                    h('i-switch', {
                                        props: {
                                            value: params.row.isActive,
                                            size: 'small'
                                        },
                                        style: {
                                            marginRight: '3px',
                                            padding: '0px',
                                            fontSize: '20px',
                                            color: '#2d8cf0'
                                        },
                                        on: {
                                            'on-change': (status) => {
                                                this.statusChange(params.row, status)
                                            }
                                        }
                                    }, '')
                                ]),
                                h('Tooltip', {
                                    props: {
                                        placement: 'top',
                                        content: 'Delete'
                                    },
                                    style:{
                                        cursor:'pointer'
                                    }
                                },[
                                    h('Button', {
                                        props: {
                                            type: 'text',
                                            size: 'large',
                                            icon: 'ios-trash-outline'
                                        },
                                        style: {
                                            color: 'red',
                                            marginLeft: '3px',
                                            padding: '0px',
                                            fontSize: '20px',
                                        },
                                        on: {
                                            click: () => {
                                                this.deleteUser(params.row, params.index)
                                            }
                                        }
                                    })
                                ])
                                
                            ]);
                        }
                    }
                }
            ],
            configList: [],
            dataConfig: {},
            mainData: {},
            websiteInfo: [],
            method: "",
            userData: []
        };
    },
    methods: {
        async handleConfig() {
            let self = this;
            this.$Loading.start();
            this.websiteid = this.filterobj.website;
            // console.log('this.websiteid',this.websiteid)
            axios({
                method: "get",
                url: baseUrl + '/website-users?websiteId='+ this.websiteid
            }).then((response) => {
                // console.log("------------------------web user response", response.data.data);
                this.userData = response.data.data;
            });
            
            self.$Loading.finish();
        },
        statusChange(data,status) {
            let statusText;
            if (status) {
                statusText = 'Activated'
            }
            else {
                statusText = 'Deactivated'
            }
            axios({
                method: "patch",
                url: baseUrl + '/website-users/' + data.id,
                data: {'isActive' : status}
            }).then((response) => {
                // console.log("------------------------web user response", response.data);
                this.$Notice.success({
                    duration:4.5,
                    desc: "User " +statusText+ " successfully"
                });
                // this.userData = response.data;
            });
        },
        deleteUser(data,index) {
            axios({
                method: "patch",
                url: baseUrl + '/website-users/' + data.id,
                data: {'isDeleted' : true}
            }).then((response) => {
                // console.log("------------------------web user response", response.data);
                this.userData[index]['isDeleted'] = true;
                this.$Notice.success({
                    duration:4.5,
                    desc: "User Deleted successfully"
                });
            });
        },
        retrieveUser(data, index) {
            axios({
                method: "patch",
                url: baseUrl + '/website-users/' + data.id,
                data: {'isDeleted' : false}
            }).then((response) => {
                // console.log("------------------------web user response", response.data);
                this.userData[index]['isDeleted'] = false;
                this.$Notice.success({
                    duration:4.5,
                    desc: "User Retrieved successfully"
                });
                
            });
        }
    },
    mounted() {
        this.$Loading.start();
        let userId = Cookies.get("userDetailId");
        axios({
            method: "get",
            url: baseUrl + '/subscription-websites',
            headers: {
                Authorization: Cookies.get("auth_token"),
                subscriptionId: Cookies.get("subscriptionId")
            }
        }).then((response) => {
            console.log("------------------------response", response);
            if (response.data.data.length == 0) {
                this.$Notice.error({
                    desc: "Websites not available for this subscription",
                    title: "Error",
                    duration: 4.5
                });
            } else {
                this.webOptions = response.data.data;
            }
            this.$Loading.finish();
        });
    }
};
</script>
<style>
.panel-default {
  border-color: #ddd;
  height: 350px;
  overflow: auto;
  display: inline-block;
  width: 100%;
  border-radius: 0;
  border-top: solid 3px #2d8cf0;
}
</style>
<style scoped>
.configuration {
  padding: 40px;
}
</style>
