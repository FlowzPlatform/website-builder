<template>
  <div class="bannersnew">
   <Row >
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Banner</h2>
        <h2 v-else>Add Banner</h2>
      </div>
   </Row>
   <Row style="border: 1px solid #C0C0C0; padding: 20px">
     <Form :model="formItem" :label-width="300" ref="formItem" :rules="rulesformItem">
        <FormItem label="Banner Name" prop="banner_name">
            <Input v-model.trim="formItem.banner_name" placeholder="Banner Name"></Input>
        </FormItem>
        <FormItem label="Select Banner Type" prop="banner_type">
            <Select v-model="formItem.banner_type" @on-change="OnChangeBannerType" :disabled="isdisable">
                <Option v-for="item in bannertypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="Upload Banner" prop="banner_img" v-if="isShowimgblock">
          <div >
              <!-- <input name="banner_img" @change="handleFileChange" type="file" title="Upload Image" accept="image/*"> -->
              <el-button icon="upload2" @click="uploadAssetImage()" :loading="uploadAssetImageLoader">Upload</el-button>
              <div v-if="uploadFile.original_filename !== undefined">
                <div v-if="formItem.banner_img === ''">
                  <Spin></Spin>     
                </div>
                <div v-else>
                  <a :href="formItem.banner_img" target="_blank">
                    <img :src="formItem.banner_img" width="200" height="100"/>
                  </a>
                </div>
              </div>
              <div v-else-if="formItem.id">
                <a :href="formItem.banner_img" target="_blank">
                    <img :src="formItem.banner_img" width="200" height="100"/>
                  </a>
              </div>
          </div>
        </FormItem>
        <Row>
          <Col :span="16">
            <FormItem label="Link URL" prop="banner_linkurl">
                <Input v-model.trim="formItem.banner_linkurl" placeholder="Link Url"></Input>
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
        <FormItem>
            <Button v-if="formItem.id" type="primary" @click="handleEdit('formItem')">Update</Button>
            <Button v-else type="primary" @click="handleSubmit('formItem')">Submit</Button>
            <Button type="ghost" style="margin-left: 8px" @click="handleCancel">Cancel</Button>
        </FormItem>
    </Form>
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
        banner_name: [
          { required: true, message: 'Please fill in the Banner Name', trigger: 'blur' }
        ],
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
        label: 'This Window',
        value: 'same' 
      }],
      cloudDetails: {},
      btypeDetail: {},
      isdisable: false
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid && this.isShowimgblock) {
          this.$Spin.show();
          this.formItem.createdAt = new Date()
          // this.formItem.website_id = this.btypeDetail.website_id
          axios.post(bannersUrl, this.formItem).then(res => {
            this.$Spin.hide();
            this.$Notice.success({title: 'Success!!', desc: '', duration: 2})
            this.$emit('updateBanner', {type: 'bannerlist'})
          }).catch(err => {
            this.$Spin.hide();
            this.$Notice.error({title: 'Error!!', desc: 'Not saved.', duration: 2})
          })
        }
      })
    },
    handleEdit (name) {
      let item = _.cloneDeep(this.formItem)
      delete item.id
      this.$refs[name].validate(async(valid) => {
        if (valid && this.isShowimgblock) {
          this.$Spin.show();
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
        console.log(error, result);
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
          // console.log(result[0])
          this.uploadFile = result[0]
          this.formItem.banner_img = result[0].url
          this.uploadAssetImageLoader = false;  
        }
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

<style scoped>
.bannersnew {
  padding: 40px;
}
</style>
