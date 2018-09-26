<template>
  <div class="flyersnew">
    <Row>
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Flyer</h2>
        <h2 v-else>Add Flyer
          <span style="float:right;">
            <Button type="ghost" shape="circle" style="margin-left: 8px" @click="handleCancel">Cancel</Button>
            <Button type="primary" shape="circle" @click="handleSubmit('formItem')">Submit</Button>
          </span>
        </h2>
      </div>
    </Row>
    
    <Row style="border: 1px solid #C0C0C0; padding: 20px">
      <div>
        <Form :model="formItem" :label-width="150" ref="formItem" :rules="rulesformItem">
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Name" prop="flyer_name">
                    <Input v-model.trim="formItem.flyer_name"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Valid Until Date" prop="flyer_end_date">
                    <DatePicker type="date" :options="dateOptions" v-model="formItem.flyer_end_date" placeholder="Select End Date"></DatePicker>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Website" prop="website">
                    <Select v-model="formItem.website" placeholder="Select Website"  @on-change="OnChangeWebsite" :disabled="isdisable">
                        <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Category" prop="flyer_category">
                    <Select v-model="formItem.flyer_category" @on-change="OnChangeFlyerCategory" filterable>
                        <Option v-for="item in flyercategories" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Image" prop="flyer_image">
                    <el-button icon="flyer_image" @click="uploadFlyerImage()" :loading="uploadFlyerImageLoader">Upload Image</el-button>
                    <a :href="formItem.flyer_image" target="_blank" class="upload_image">
                      <img v-if="formItem.flyer_image" :src="formItem.flyer_image" height="100"/>
                    </a>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="PDF" prop="flyer_pdf">
                    <el-button icon="flyer_pdf" @click="uploadFlyerPdf()" :loading="uploadFlyerPdfLoader">Upload PDF</el-button>
                    <a :href="formItem.flyer_pdf" target="_blank" class="upload_image">
                      <img v-if="formItem.flyer_pdf" :src="pdf_download" height="100"/>
                    </a>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Client Friendly PDF" prop="client_friendly_pdf">
                    <el-button icon="client_friendly_pdf" @click="uploadClientFriendlyPdf()" :loading="uploadClientFriendlyPdfLoader">Upload PDF</el-button>
                    <a :href="formItem.client_friendly_pdf" target="_blank" class="upload_image">
                      <img v-if="formItem.client_friendly_pdf" :src="pdf_download" height="100"/>
                    </a>
                </FormItem>
            </Col>
          </Row>
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
import { log } from 'util';

let baseUrl = config.baseURL
let flyerCategoryUrl = config.baseURL + '/flyer-category'
let flyersUrl = config.baseURL + '/flyers'

export default {
  name: 'flyersnew',
  props: {
    fdata: Object
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
      pdf_download: '../../static/img/pdf.png',
      dateOptions: {
        disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      formItem: {
        flyer_name: '',
        website: '',
        flyer_category: '',
        flyer_image: '',
        flyer_image_name: '',
        flyer_pdf: '',
        flyer_pdf_name: '',
        client_friendly_pdf: '',
        client_friendly_pdf_name: '',
        flyer_end_date: '',
        flyer_status: true,
        createdAt: '',
        userId: Cookies.get('userDetailId')
      },
      uploadFlyerImageLoader: false,
      uploadFlyerPdfLoader: false,
      uploadClientFriendlyPdfLoader: false,
      flyercategories: [],
      rulesformItem: {
        flyer_name: [
          { required: true, message: 'Please enter flyer name', trigger: 'change' }
        ],
        website: [
          { required: true, message: 'Please select website', trigger: 'change' }
        ],
        flyer_category: [
          { required: true, message: 'Please select the flyer category', trigger: 'change' }
        ],
        flyer_image: [
          { required: true, message: 'Please select the flyer image', trigger: 'change' }
        ],
        flyer_pdf: [
          { required: true, message: 'Please select the flyer pdf', trigger: 'change' }
        ]
      },
      updateRules: {
          flyer_name: [
            { required: true, message: 'Please enter flyer name', trigger: 'change' }
          ],
          website: [
            { required: true, message: 'Please select website', trigger: 'change' }
          ],
          flyer_category: [
            { required: true, message: 'Please select the flyer category', trigger: 'change' }
          ],
          flyer_image: [
            { required: true, message: 'Please select the flyer image', trigger: 'change' }
          ],
          flyer_pdf: [
            { required: true, message: 'Please select the flyer pdf', trigger: 'change' }
          ]
      },
      uploadFile: {},
      targetOpts: [
        {
          label: 'New Window',
          value: '_blank' 
        },
        {
          label: 'Same Window',
          value: 'same' 
        }
      ],
      cloudDetails: {},
      fCategoryDetail: {},
      isdisable: false,
      fetchImagesLoader: false,
      assetsImages: [],
      itemArr: [],
      webOptions: []
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Spin.show();
          this.formItem.createdAt = new Date()
          this.formItem.website = this.fCategoryDetail.website
          axios.post(flyersUrl, this.formItem).then(res => {
            this.$Spin.hide();
            this.$Notice.success({title: 'Success!!', desc: 'Successfully saved.', duration: 2})
            this.$emit('updateDocument', {type: 'flyerlist'})
          }).catch(err => {
            this.$Spin.hide();
            this.$Notice.error({title: 'Error!!', desc: 'Not saved.', duration: 2})
          })
        } else {
          this.$Notice.error({title: 'Error!!', desc: 'Fill all required fields.', duration: 4})
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
          axios.put(flyersUrl + '/' + this.formItem.id, item).then(res => {
            this.$Spin.hide();
            this.$router.push({title: 'Success!!', desc: 'Successfully Edited.', duration: 2})
            this.$emit('updateDocument', {type: 'flyerlist'})
          }).catch(err => {
            this.$Spin.hide();
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateDocument', {type: 'flyerlist'})
    },
    uploadFlyerImage() {
      //this.formItem.flyer_image = ''
      if(this.formItem.flyer_category != '') {
          this.uploadFlyerImageLoader = true;
          cloudinary.openUploadWidget({ 
              cloud_name: this.cloudDetails.cloudName, 
              api_key: this.cloudDetails.apiKey,
              upload_preset: this.cloudDetails.uploadPreset, 
              sources: ['local', 'camera', 'url']
          }, (error, result) => { 
              if(error != null){
                if(error.message != 'User closed widget'){
                  this.$message({
                    message: 'Upload image failed. Please try again.',
                    type: 'error'
                  }); 
                } 
                this.uploadFlyerImageLoader = false;  
              } 
              else {
                this.formItem.flyer_image = result[0].url
                this.formItem.flyer_image_name = result[0].original_filename
                this.uploadFlyerImageLoader = false;  
              }
          });
      }
      else {
          this.$Notice.error({ title: 'Error', desc: 'Please select flyer category first.', duration: 2})
      }
    },
    uploadFlyerPdf() {
      if(this.formItem.flyer_category != '') {
          this.uploadFlyerPdfLoader = true;
          cloudinary.openUploadWidget({ 
            cloud_name: this.cloudDetails.cloudName, 
            api_key: this.cloudDetails.apiKey,
            upload_preset: this.cloudDetails.uploadPreset, 
            sources: ['local', 'camera', 'url']
          }, (error, result) => { 
            if(error != null){
              if(error.message != 'User closed widget'){
                this.$message({
                  message: 'Upload PDF failed. Please try again.',
                  type: 'error'
                }); 
              }
              this.uploadFlyerPdfLoader = false;  
            } 
            else {
              if(result[0].format == 'pdf') {
                  this.formItem.flyer_pdf = result[0].url
                  this.formItem.flyer_pdf_name = result[0].original_filename
                  this.uploadFlyerPdfLoader = false;
              }
              else {
                  this.$Notice.error({ title: 'Error', desc: 'Please upload pdf file.', duration: 2})
              }
            }
          });
      }
      else {
          this.$Notice.error({ title: 'Error', desc: 'Please select flyer category first.', duration: 2})
      }
    },
    uploadClientFriendlyPdf() {
      if(this.formItem.flyer_category != '') {
          this.uploadClientFriendlyPdfLoader = true;
          cloudinary.openUploadWidget({ 
            cloud_name: this.cloudDetails.cloudName, 
            api_key: this.cloudDetails.apiKey,
            upload_preset: this.cloudDetails.uploadPreset, 
            sources: ['local', 'camera', 'url']
          }, (error, result) => { 
            if(error != null){
              if(error.message != 'User closed widget'){
                this.$message({
                  message: 'Upload PDF failed. Please try again.',
                  type: 'error'
                }); 
              }
              this.uploadClientFriendlyPdfLoader = false;  
            } 
            else {
              if(result[0].format == 'pdf') {
                  this.formItem.client_friendly_pdf = result[0].url
                  this.formItem.client_friendly_pdf_name = result[0].original_filename
                  this.uploadClientFriendlyPdfLoader = false;
              }
              else {
                  this.$Notice.error({ title: 'Error', desc: 'Please upload pdf file.', duration: 2})
                  this.uploadClientFriendlyPdfLoader = false;
              }
            }
          });
      }
      else {
          this.$Notice.error({ title: 'Error', desc: 'Please select flyer category first.', duration: 2})
      }
    },
    startFetching() {
      this.colOpen = '1'
      this.assetsImages = []
      this.fetchImagesLoader = true;
    },
    OnChangeWebsite (value) {
      this.flyercategories = [];
      axios.get(flyerCategoryUrl + '?userId=' + Cookies.get('userDetailId') + '&website='+value+'&status=true&$paginate=false').then(res=> {
        for(let item of res.data) {
          this.flyercategories.push({
            label: item.fc_name,
            value: item.id
          })
        }
      })
    },
    async OnChangeFlyerCategory (value) {
      this.isShowimgblock = false
      this.$Spin.show()
      if (value !== '') {
        let resp = await axios.get(flyerCategoryUrl + '/' + value).then(res => {
          return res.data
        }).catch(err => {
          return {}
        })
        this.fCategoryDetail = resp
        if (!_.isEmpty(resp)) {
          let result = await axios(baseUrl + '/project-configuration/' + resp.website).then(res => {
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

    if (userId !== '' && userId !== undefined) {
      this.$Spin.show();
      axios.get(baseUrl + '/project-configuration?userId=' + userId).then(res => {
        for (let item of res.data.data) {
          this.webOptions.push({label: item.websiteName, value: item.id})
        }
        this.$Spin.hide();
      }).catch(err => {
        this.$Spin.hide();
      })
    }

    if (this.fdata != undefined && this.fdata.type === 'flyer' && this.fdata.id !== undefined) {
        axios.get(flyersUrl + '/' + this.fdata.id).then(res => {
          this.formItem = res.data
          this.isdisable = true
        })
    }
  }
}
</script>

<style >
.flyersnew {
  padding: 40px;
}
.mImage:hover {
  color: red;
}
.mImage {
  color: #ddd;
  font-size: 25px;
  /*float:right;*/
  /*padding-top: 0px;*/
  position: absolute;
  /*text-align: right;*/
  right: 20px;
  /*top: 20;*/
}
.upload_image {
  float: right;
}
</style>
