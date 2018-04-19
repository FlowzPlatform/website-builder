<template>
  <div class="bannersnew">
   <Row >
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Banner</h2>
        <h2 v-else>Add Banner
          <span style="float:right;">
            <Button type="ghost" shape="circle" style="margin-left: 8px" @click="handleCancel">Cancel</Button>
            <Button type="primary" shape="circle" @click="handleSubmit('formItem')">Submit</Button>
          </span>
        </h2>
      </div>
   </Row>
   <Row style="border: 1px solid #C0C0C0; padding: 20px">
      <div v-if="formItem.id === undefined">
        <Form :model="formItem" :label-width="150" ref="formItem" :rules="rulesformItem">
          <FormItem label="Category" prop="banner_type">
              <Select v-model="formItem.banner_type" @on-change="OnChangeBannerType" :disabled="isdisable" filterable>
                  <Option v-for="item in bannertypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
          </FormItem>
        </Form>
        <hr/>
        <div v-if="isShowimgblock">
          <el-button icon="upload2" @click="uploadAssetImage()" :loading="uploadAssetImageLoader">Upload</el-button>
          <el-button icon="search" @click="startFetching" :loading="fetchImagesLoader">Fetch Images</el-button>
          <Collapse v-model="colOpen" accordion v-if="assetsImages.length > 0" style="margin-top:10px;">
              <Panel name="1">
                  Cloudinary Images
                  <div slot="content" >
                    <div class="row" style="max-height: 500px; overflow-y: auto;">
                        <div class="col-md-3" v-for="(n, index) in assetsImages" style="margin-top: 15px;">
                            <a @click="imageSelection(index)">
                                <Checkbox v-model="assetsImages[index].isSelect" size="large" style="padding-left:10px;"></Checkbox>
                                <img class="thumbnail" :src="n.url" width="250" height="150" style="margin-top:-40px"/>
                            </a>
                      </div>
                    </div>
                  </div>
              </Panel>
          </Collapse>
        </div>
        <Row style="margin-top:30px;border-bottom: 1px solid #eee;">
          <h4>Selected/uploaded Banners<span style="float:right;"> {{itemArr.length}} </span></h4>
        </Row>
        <Row style="margin-top:10px;background: #eceff1;" v-if="itemArr.length > 0">
            <div  v-for="(mitem, index) in itemArr">
              <Col :span="6" style="">
                <div style="margin: 10px;padding-bottom:20px;border: 1px solid #eee;border-radius: 4px;background: white;padding:10px;">
                  <a @click="handleRemoveItem(index)"><Icon class="mIcon" type="close-circled" style=""></Icon></a>
                  <img :src="mitem.banner_img" height="180" class="thumbnail" style="width:-webkit-fill-available;border:unset;padding:0" />
                  <!-- <hr> -->
                  <Input v-model.trim="mitem.banner_linkurl" placeholder="Target Url"></Input>
                  <Select v-model="mitem.linkurl_target" placeholder="Link Open With">
                      <Option v-for="item in targetOpts" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </Col>
            </div>
        </Row>
      </div>
      <div v-else>
        <Form :model="formItem" :label-width="150" ref="formItem" :rules="updateRules">
        <!-- <FormItem label="Banner Name" prop="banner_name">
            <Input v-model.trim="formItem.banner_name" placeholder="Banner Name"></Input>
        </FormItem> -->
        <FormItem label="Category" prop="banner_type">
            <Select v-model="formItem.banner_type" @on-change="OnChangeBannerType" :disabled="isdisable" filterable>
                <Option v-for="item in bannertypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="Banner Image" prop="banner_img">
          <a :href="formItem.banner_img" target="_blank">
            <img :src="formItem.banner_img" width="200" height="100"/>
          </a>
        </FormItem>
        <FormItem label="Upload Banner" v-if="isShowimgblock">
          <div >
              <el-button icon="upload2" @click="uploadAssetImage()" :loading="uploadAssetImageLoader">Upload</el-button>
              <el-button icon="search" @click="startFetching" :loading="fetchImagesLoader">Fetch Images</el-button>
              <Collapse v-model="colOpen" accordion v-if="assetsImages.length > 0" style="margin-top:10px;">
                <Panel name="1">
                    Cloudinary Images
                    <div slot="content" >
                      <div class="row" style="max-height: 500px; overflow-y: auto;">
                          <div class="col-md-3" v-for="(n, index) in assetsImages" style="margin-top: 15px;">
                              <a @click="imageSelection(index, 'edit')">
                                  <Checkbox v-model="assetsImages[index].isSelect" size="large" style="padding-left:10px;"></Checkbox>
                                  <img class="thumbnail" :src="n.url" width="250" height="150" style="margin-top:-40px"/>
                              </a>
                        </div>
                      </div>
                    </div>
                </Panel>
            </Collapse>
              <!-- <div v-if="uploadFile.original_filename !== undefined">
                <div v-if="formItem.banner_img === ''">
                  <Spin></Spin>     
                </div>
                <div v-else>
                  <a :href="formItem.banner_img" target="_blank">
                    <img :src="formItem.banner_img" width="200" height="100"/>
                  </a>
                </div>
              </div> -->
              <!-- <div >
                <a :href="formItem.banner_img" target="_blank">
                  <img :src="formItem.banner_img" width="200" height="100"/>
                </a>
              </div> -->
          </div>
        </FormItem>
        <!-- <Row :gutter="16">
            <Col :span="6" v-for="(mitem, index) in itemArr" style="padding:0px 5px 30px 5px;border: 1px solid #eee">
                <a @click="handleRemoveItem(index)"><Icon class="mIcon" type="close-circled" style=""></Icon></a>
                <img :src="mitem.banner_img" height="180" class="thumbnail" style="width:-webkit-fill-available;border:unset;" />
                <Input v-model.trim="mitem.banner_linkurl" placeholder="Target Url"></Input>
                <Select v-model="mitem.linkurl_target" placeholder="Link Open With">
                    <Option v-for="item in targetOpts" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
        </Row> -->
        <Row>
          <Col :span="16">
            <FormItem label="Target URL" prop="banner_linkurl">
                <Input v-model.trim="formItem.banner_linkurl" placeholder="Target Url"></Input>
            </FormItem>
          </Col>
          <Col :span="8">
            <Select v-model="formItem.linkurl_target" placeholder="Link Open With">
                <Option v-for="item in targetOpts" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
        </Row>
        <FormItem label="Status">
            <i-switch v-model="formItem.banner_status" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
    </Form>
      </div>
      <Row style="padding-top: 10px">
          <Button v-if="formItem.id" type="primary" @click="handleEdit('formItem')">Update</Button>
          <Button v-else type="primary" @click="handleSubmit('formItem')">Submit</Button>
          <Button type="ghost" style="margin-left: 8px" @click="handleCancel">Cancel</Button>
      </Row>
   </Row>
  </div>
</template>

<script>

import axios from 'axios'
import config from '../../config'
import Cookies from 'js-cookie';
import _ from 'lodash'
import moment from 'moment'
import configs from '@/config'

let baseURL = config.baseURL
let bannertypeUrl = config.baseURL + '/bannertype'
let bannersUrl = config.baseURL + '/banners'

export default {
  name: 'bannersnew',
  props: {
    bdata: Object
  },
  data () {
    const validatelinkURL = async(rule, value, callback) => {
      if (value !== '') {
        var patt = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
        var _res = patt.test(value)
        if (!_res) {
          callback(new Error('Not Valid Link URL'))
        } else {
          callback();
        }
      }
    };
    return {
      colOpen: '0',
      isShowimgblock: false,
      formItem: {
        banner_name: '',
        banner_type: '',
        banner_img: '',
        banner_status: true,
        banner_linkurl: '',
        linkurl_target: '_blank',
        createdAt: '',
        // website_id: '',
        userId: Cookies.get('userDetailId')
      },
      uploadAssetImageLoader: false,
      bannertypes: [],
      rulesformItem: {
        banner_type: [
          { required: true, message: 'Please select the Banner Type', trigger: 'change' }
        ],
        banner_linkurl: [
          { validator: validatelinkURL, trigger: 'blur' }
        ],
        banner_img: [
          // { required: true, message: 'Please select the Banner Image', trigger: 'change' }
          // { validator: validateIMG, trigger: 'change' }
        ]
      },
      updateRules: {
          banner_type: [
            { required: true, message: 'Please select the Banner Type', trigger: 'change' }
          ],
          banner_linkurl: [
            { validator: validatelinkURL, trigger: 'blur' }
          ],
          banner_img: [
            { required: true, message: 'Please select the Banner Image', trigger: 'change' }
            // { validator: validateIMG, trigger: 'change' }
          ]
      },
      uploadFile: {},
      targetOpts: [{
        label: 'New Window',
        value: '_blank' 
      }, {
        label: 'Same Window',
        value: 'same' 
      }],
      cloudDetails: {},
      btypeDetail: {},
      isdisable: false,
      fetchImagesLoader: false,
      assetsImages: [],
      itemArr: []
      // modelData: []
    }
  },
  methods: {
    handleRemoveItem (inx) {
      let finx = _.findIndex(this.assetsImages, {url: this.itemArr[inx].url})
      if (finx !== undefined && finx !== -1) {
        this.assetsImages[finx].isSelect = false
      }
      this.itemArr.splice(inx, 1)
    },
    imageSelection (inx, name) {
      this.assetsImages[inx].isSelect = !this.assetsImages[inx].isSelect
      if (name === undefined) {
        // new image selection
        if (this.assetsImages[inx].isSelect) {
          this.itemArr.push({
            banner_name: '', 
            banner_img: this.assetsImages[inx].url, 
            banner_linkurl: '', 
            banner_type: this.formItem.banner_type, 
            banner_status: true, 
            linkurl_target: '_blank'
          })
        } else {
          let finx = _.findIndex(this.itemArr, {banner_img: this.assetsImages[inx].url})
          if (finx !== undefined && finx !== -1) {
            this.itemArr.splice(finx, 1)
          }
        }
      } else {
        // edit image
        if (this.assetsImages[inx].isSelect) {
          for (let [minx, obj] of this.assetsImages.entries()) {
            if (inx !== minx && obj.isSelect) {
              obj.isSelect = false
            }
          }
          console.log(this.assetsImages[inx].url)
          this.formItem.banner_img = this.assetsImages[inx].url 
        } else {
          this.formItem.banner_img = ''
          this.assetsImages[inx].isSelect = !this.assetsImages[inx].isSelect
        }
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid && this.isShowimgblock) {
          if (this.itemArr.length > 0) {
            for (let item of this.itemArr) {
              item.createdAt = new Date()
              item.userId = Cookies.get('userDetailId')
            }
            this.$Spin.show();
            // console.log('itemArr', this.itemArr)
            // this.formItem.createdAt = new Date()
            // this.formItem.website_id = this.btypeDetail.website_id
            axios.post(bannersUrl, this.itemArr).then(res => {
              this.$Spin.hide();
              this.$Notice.success({title: 'Success!!', desc: '', duration: 2})
              this.$emit('updateBanner', {type: 'bannerlist'})
            }).catch(err => {
              this.$Spin.hide();
              this.$Notice.error({title: 'Error!!', desc: 'Not saved.', duration: 2})
            })
          } else {
            this.$Notice.error({title: 'No Banner uploaded or selected!!', desc: 'Select or Upload at least one Banner.', duration: 4})
          }
        }
      })
    },
    handleEdit (name) {
      let item = _.cloneDeep(this.formItem)
      delete item.id
      this.$refs[name].validate(async(valid) => {
        if (valid && this.isShowimgblock) {
          this.$Spin.show();
          item.createdAt = new Date()
          axios.put(bannersUrl + '/' + this.formItem.id, item).then(res => {
            this.$Spin.hide();
            this.$router.push({title: 'Success!!', desc: 'Successfully Edited.', duration: 2})
            this.$emit('updateBanner', {type: 'bannerlist'})
          }).catch(err => {
            this.$Spin.hide();
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateBanner', {type: 'bannerlist'})
    },
    uploadAssetImage() {
      this.formItem.banner_img = ''
      this.uploadAssetImageLoader = true;
      cloudinary.openUploadWidget({ 
        cloud_name: this.cloudDetails.cloudName, 
        api_key: this.cloudDetails.apiKey,
        upload_preset: this.cloudDetails.uploadPreset, 
        sources: ['local', 'camera', 'url', 'facebook']
      }, (error, result) => { 
        // console.log(error, result);
        if(error != null){

          if(error.message == 'User closed widget'){

          } else {
            console.log('Image upload error: ', error);
            this.$message({
              message: 'Upload image failed. Please try again.',
              type: 'error'
            });  
          }
          
          this.uploadAssetImageLoader = false;  
        } else {
          // console.log('result::', result)
          if (this.formItem.id === undefined) {
            for (let item of result) {
              this.itemArr.push({
                banner_name: item.original_filename, 
                banner_img: item.secure_url, 
                banner_linkurl: '', 
                banner_type: this.formItem.banner_type, 
                banner_status: true, 
                linkurl_target: '_blank'
              })
            }
          } else {
            this.uploadFile = result[0]
            this.formItem.banner_img = result[0].url
          }
          this.uploadAssetImageLoader = false;  
        }
      });
    },
    startFetching() {
      this.colOpen = '1'
      this.assetsImages = []
      this.fetchImagesLoader = true;
      this.fetchcloudinaryImages()
    },
    async fetchcloudinaryImages(){
          await axios.get(config.baseURL + '/cloudinary-service?cloudName=' + this.cloudDetails.cloudName + '&apiKey=' + this.cloudDetails.apiKey + '&apiSecret=' + this.cloudDetails.apiSecret + '&nextCursor=' + this.cloudDetails.nextCursor, {
          })
          .then((response) => {
              for(let i = 0; i < response.data.resources.length; i++){
                if (response.data.resources[i].secure_url === this.formItem.banner_img) {
                  this.assetsImages.push({isSelect: true, url: response.data.resources[i].secure_url});
                } else {
                  this.assetsImages.push({isSelect: false, url: response.data.resources[i].secure_url});
                }
              }
              if(response.data.next_cursor !== undefined){
                this.cloudDetails.nextCursor = response.data.next_cursor;
                this.fetchcloudinaryImages();
              } else {
                this.cloudDetails.nextCursor = '';
                this.fetchImagesLoader = false;
              }
          })
          .catch((error) => {
              console.log(error);
              // this.$Notice.error({title: 'Network Error', desc: '', duration: 2})
              this.fetchImagesLoader = false;
          });
    },
    async OnChangeBannerType (value) {
      // console.log(value)
      this.isShowimgblock = false
      this.$Spin.show()
      if (value !== '') {
        let resp = await axios.get(bannertypeUrl + '/' + value).then(res => {
          // console.log('result', res.data)
          return res.data
        }).catch(err => {
          return {}
        })
        this.btypeDetail = resp
        if (!_.isEmpty(resp)) {
          // console.log('baseURL:: ', bannersUrl)
          let result = await axios(baseURL + '/project-configuration/' + resp.website_id).then(res => {
            return res.data
          }).catch(err => {
            return {}
          })
          if (!_.isEmpty(result)) {
            if (result.hasOwnProperty('configData')) {
              let cDetails = result.configData[1].projectSettings[1].CloudinaryDetails
              if (cDetails !== undefined && cDetails.apiKey !== '' && cDetails.cloudName !== '' && cDetails.uploadPreset) {
                this.cloudDetails = cDetails 
                this.isShowimgblock = true
                this.$Spin.hide()
                // this.uploadAssetImage()
              } else {
                this.$Spin.hide()
                this.$Notice.error({
                  title: 'Error',
                  desc: 'Please add Cloudinary Details to <b>' + result.websiteName + '</b> Website.',
                  duration: 10
                })
              }
            } else {
              this.$Message.error('INTERVAL SERVER ERROR.')
              this.$Spin.hide()  
            }
          } else {
            this.$Message.error('INTERVAL SERVER ERROR.')
            this.$Spin.hide()
          }
        } else {
          this.$Message.error('INTERVAL SERVER ERROR.')
          this.$Spin.hide()
        }
      }
      this.assetsImages = []
      this.itemArr = []
    }
  },
  mounted () {
    let userId = Cookies.get('userDetailId')
    axios.get(bannertypeUrl + '?userId=' + userId + '&status=true&$paginate=false').then(res=> {
      for(let item of res.data) {
        this.bannertypes.push({
          label: item.bt_name,
          value: item.id
        })
      }
    })
    if (this.bdata.type === 'banner' && this.bdata.id !== undefined) {
      axios.get(bannersUrl + '/' + this.bdata.id).then(res => {
        this.formItem = res.data
        this.isdisable = true
      })
    }
  }
}
</script>

<style >
.bannersnew {
  padding: 40px;
}
.mIcon:hover {
  color: red;
}
.mIcon {
  color: #ddd;
  font-size: 25px;
  /*float:right;*/
  /*padding-top: 0px;*/
  position: absolute;
  /*text-align: right;*/
  right: 20px;
  /*top: 20;*/
}
</style>
