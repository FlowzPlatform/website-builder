<template>
    <div class="configuration">
      <Row>
        <div  style="padding-bottom: 10px;">
          <h2>Website Configuration</h2>
        </div>
      </Row>

      <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
          <Col :span="6">
            <Select v-model="filterobj.website" placeholder="Select Website" filterable @on-change="handleConfig">
              <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
      </Row>
      <Row>
      <div  v-if="Object.keys(dataConfig).length > 0">
          <div v-for="(item,key) in dataConfig.module_name" class="col-lg-6 col-md-6 col-xs-12">
              <div class="panel panel-default">
          <!-- <Tree :data="data3" :load-data="loadData" show-checkbox></Tree> -->
                <tree :data="mainData[key]" show-checkbox multiple @on-check-change="renderChecked"></tree>
                <!-- <tree :data="treeData(item,key)" show-checkbox multiple></tree> -->
              </div>
          </div>
      </div>
      <div v-else>
          <Row style="text-align: center;border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
              NO DATA
          </Row>
      </div>
    </Row>
      <Row>
        <Button v-if="this.filterobj.website != undefined && Object.keys(dataConfig).length > 0" type="primary" shape="circle" style="font-size:14px;" @click="handleSave">Save</Button>
        <!-- <Button type="ghost" shape="circle" style="float:right;font-size:14px;" @click="handleSave">Cancel</Button> -->
      </Row>
    </div>
</template>
<script>
    import axios from 'axios'
    import config from '../config'
    import Cookies from 'js-cookie';
    import _ from 'lodash';

    let baseUrl = config.baseURL
    let auth_token = Cookies.get('auth_token')

    export default {
      name: 'configuration',
      data () {
          return {
              filterobj: {
                website: null,

              },
              webOptions: [],
              configList : [],
              dataConfig :{},
              mainData: {},
              websiteInfo:[],
              method:''
          }
      },
      methods:{
        treeData (item,key) {
             let title = key.replace(/_/g," ").toUpperCase();
              return [{
        				title: title,
        				checked: false,
        				expand: true,
        				children: this.getChildTreeData(item)
        			}];
        },
        renderChecked(item){
          // this.mainData.my_account[0].checked = true;
          // console.log("item",this.mainData.my_account[0]);
        },
        getChildTreeData(item){
            let childArr = []
            for(let key in item){
              if (typeof item[key] === 'object') {
                  let child = this.getChildTreeData(item[key])
                  let title = key.replace(/_/g," ").toUpperCase();
                  // console.log("child",child);
                  childArr.push({
          						title: title,
          						children: child,
                      checked : !!+item[key].status
        					});
              }
              // else{
              //     if (key !== 'status') {
              //       let title = key.replace(/_/g," ").toUpperCase();
              //       console.log("item[key]",item[key]);
        			// 			childArr.push({
              //         title: title,
              //         checked : !!+item[key].status
              //       });
        			// 		}
              // }
                // console.log("item",item);
            }
            return childArr;
        },
        async fetchWebsiteConfigById(websiteId){
            let returnData = null;
            let self = this
            await axios({
                method: 'get',
                url: baseUrl+'/website-configuration?website_id='+websiteId
            }).then(function (response) {
                returnData = response.data
                return returnData
            }).catch(function(error){
                self.$Notice.error({
                    title: "Error",
                    desc: error
                })
            })
            return returnData
        }
        ,
        async handleConfig(){
              let self = this
              self.$Loading.start();
              this.websiteid = this.filterobj.website;
              this.mainData = {};
              let websiteConfigData = await this.fetchWebsiteConfigById(self.websiteid)
              // console.log("websiteConfigData",websiteConfigData);
              let webInfo = _.find(self.websiteInfo, {wid: self.websiteid})
              self.dataConfig = {};
              if(websiteConfigData.data != undefined && websiteConfigData.total > 0){
                  self.dataConfig = websiteConfigData.data[0];
                  for (let key in self.dataConfig.module_name) {
                    self.mainData[key] = self.treeData(websiteConfigData.data[0].module_name[key], key)
                  }
              }else{
                //http://res.cloudinary.com/flowz/raw/upload/v1527571205/websites/json/website-settings.json
                $.getJSON("http://res.cloudinary.com/flowz/raw/upload/v1528801912/websites/json/website-settings.json", function(result){
                  // let result = require("/var/www/html/websites/5a586a92450a3100124ce7cf/e16a18b3-5163-4576-b238-c200c311a5ad/public/assets/website-settings.json")
                  // let result = require("http://res.cloudinary.com/flowz/raw/upload/v1528801912/websites/json/website-settings.json")
                  // console.log("jsonData",jsonData);
                    result.website_id = self.websiteid
                    self.dataConfig = result
                    for (let key in self.dataConfig.module_name) {
                      self.mainData[key] = self.treeData(result.module_name[key], key)
                    }
                })
              }
              self.$Loading.finish();
          },
          handleSave(){
              this.$Modal.confirm({
                  title: 'Confirm',
                  content:'<p>Are you sure want to update configuration?</p>',
                  onOk: async () => {
                    let self = this;
                    let method = ''
                    let url = ''
                    self.$Loading.start();
                    for(let key in self.dataConfig.module_name){
                        let title = key.replace(/_/g," ").toUpperCase();
                         self.dataConfig.module_name[key] = self.reverseChildTree(this.dataConfig.module_name[key], this.mainData[key][0].children)
                         self.dataConfig.module_name[key].status = self.mainData[key][0].checked ? 1 : 0
                         self.dataConfig.module_name[key].parent_status = self.mainData[key][0].indeterminate ? 1 : 0
                    }
                    let websiteConfigData = await this.fetchWebsiteConfigById(self.websiteid)
// console.log("websiteConfigData.data",websiteConfigData.data,self.dataConfig);
                    // self.dataConfig.id = websiteConfigData.data[0].id
                    // console.log(self.dataConfig.id)
                    if(websiteConfigData.data != undefined && websiteConfigData.total > 0){
                        method = "PATCH"
                        url = baseUrl+'/website-configuration/'+websiteConfigData.data[0].id
                    }else{
                        method = "POST"
                        url = baseUrl+'/website-configuration'
                    }
                    await axios({
                        method: method,
                        url: url,
                        data : self.dataConfig
                    }).then(function (response) {
                      // console.log('.......................', response.data)
                        // self.dataConfig.id = response.data.id
                        self.$Notice.success({
                            title: 'Success',
                            desc: "Configurations is saved successfully."
                        });
                        self.$Loading.finish();
                    }).catch(function(error){
                        console.log("error",error);
                    })
                  },
                  onCancel: () => {
                      // this.$Message.info('Clicked cancel');
                  }
              });
          },
          reverseChildTree (mainConfigObj, childArray) {
            // console.log("mobj",mainConfigObj);
            // console.log("+++",childArray);
            for (let key in mainConfigObj) {
                if (childArray.length > 0 && key !== "status" && key !== "parent_status" ) {
                    let title = key.replace(/_/g," ").toUpperCase();
                    let obj = _.find(childArray, {title: title})
                    mainConfigObj[key].status = obj.checked ? 1:0;
                    // console.log("obj.children",obj.children);
                    if(obj.children.length > 0) mainConfigObj[key].parent_status = obj.indeterminate ? 1 :0;
                    if (typeof mainConfigObj[key] === 'object') {
                      mainConfigObj[key] = this.reverseChildTree(mainConfigObj[key], obj.children);
                    }
                }
            }
            return mainConfigObj
          }
      },
      mounted(){
        this.$Loading.start();
        let userId = Cookies.get('userDetailId')
        axios.get(baseUrl + '/project-configuration?userId=' + userId).then(response => {
            for (let item of response.data.data) {
                // console.log("item.id",item);
                this.websiteInfo.push({'wid':item.id,'websiteName':item.websiteName})
                this.webOptions.push({label: item.websiteName, value:item.id})
            }
            this.$Loading.finish();
          }).catch(err => {
            console.log("err",err);
              this.$Loading.error();
          })
      }
    }
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
	.configuration{
	  padding: 40px;
	}
</style>
