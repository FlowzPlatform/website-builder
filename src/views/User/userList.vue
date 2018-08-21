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
                {
                    title: 'Email',
                    key: 'userEmail'
                },
                {
                    title: 'Role',
                    key: 'userRole'
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
            console.log('this.websiteid',this.websiteid)
            axios({
                method: "get",
                url: baseUrl + '/website-users?websiteId='+ this.websiteid
            }).then((response) => {
                console.log("------------------------web user response", response.data.data);
                this.userData = response.data.data;
            });
            
            self.$Loading.finish();
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
