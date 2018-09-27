<template>
  <div class="ecatalogsnew">
    <Row>
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Ecatalog</h2>
        <h2 v-else>Add Ecatalog
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
                <FormItem label="Name" prop="ecatalog_name">
                    <Input v-model.trim="formItem.ecatalog_name"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Valid Until Date" prop="ecatalog_end_date">
                    <DatePicker type="date" :options="dateOptions" v-model="formItem.ecatalog_end_date" placeholder="Select End Date"></DatePicker>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Website" prop="website">
                    <Select v-model="formItem.website" placeholder="Select Website"  @on-change="onChangeWebsite" :disabled="isdisable">
                        <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Category" prop="ecatalog_category">
                    <Select v-model="formItem.ecatalog_category" @on-change="onChangeEcatalogCategory" filterable>
                        <Option v-for="item in ecatalogcategories" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Image" prop="ecatalog_image">
                    <el-button icon="ecatalog_image" @click="uploadEcatalogImage()" :loading="uploadEcatalogImageLoader">Upload Image</el-button>
                    <a :href="formItem.ecatalog_image" target="_blank" class="upload_image">
                      <img v-if="formItem.ecatalog_image" :src="formItem.ecatalog_image" height="100"/>
                    </a>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="PDF" prop="ecatalog_pdf">
                    <el-button icon="ecatalog_pdf" @click="uploadEcatalogPdf()" :loading="uploadEcatalogPdfLoader">Upload PDF</el-button>
                    <a :href="formItem.ecatalog_pdf" target="_blank" class="upload_image">
                      <img v-if="formItem.ecatalog_pdf" :src="pdf_download" height="100"/>
                    </a>
                </FormItem>
                <FormItem><strong>OR</strong></FormItem>
                <FormItem label="URL" prop="ecatalog_url">
                    <Input v-model.trim="formItem.ecatalog_url"></Input>
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
let ecatalogCategoryUrl = config.baseURL + '/ecatalog-category'
let ecatalogsUrl = config.baseURL + '/ecatalogs'

export default {
  name: 'ecatalogsnew',
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
    const validatePdfCheck = (rule, value, callback) => {
        if ((this.formItem.ecatalog_pdf !== '' && value !== '') || this.formItem.ecatalog_pdf == '' && value == '') {
            callback(new Error('Please choose either PDF or URL.'));
        }
        else if(value !== '' && !validatelinkURL(rule, value, callback)) {
            callback(new Error('Please enter valid url.'));
        } else {
            callback();
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
        ecatalog_name: '',
        website: '',
        ecatalog_category: '',
        ecatalog_image: '',
        ecatalog_image_name: '',
        ecatalog_pdf: '',
        ecatalog_pdf_name: '',
        ecatalog_url: '',
        ecatalog_end_date: '',
        ecatalog_status: true,
        createdAt: '',
        userId: Cookies.get('userDetailId')
      },
      uploadEcatalogImageLoader: false,
      uploadEcatalogPdfLoader: false,
      ecatalogcategories: [],
      rulesformItem: {
        ecatalog_name: [
          { required: true, message: 'Please enter ecatalog name', trigger: 'change' }
        ],
        website: [
          { required: true, message: 'Please select website', trigger: 'change' }
        ],
        ecatalog_category: [
          { required: true, message: 'Please select the ecatalog category', trigger: 'change' }
        ],
        ecatalog_image: [
          { required: true, message: 'Please select the ecatalog image', trigger: 'change' }
        ],
        // ecatalog_pdf: [
        //   { required: true, message: 'Please select the ecatalog pdf', trigger: 'change' }
        // ],
        ecatalog_url: [
          { required: true, validator: validatePdfCheck, trigger: 'blur' }
        ]
      },
      updateRules: {
          ecatalog_name: [
            { required: true, message: 'Please enter ecatalog name', trigger: 'change' }
          ],
          website: [
            { required: true, message: 'Please select website', trigger: 'change' }
          ],
          ecatalog_category: [
            { required: true, message: 'Please select the ecatalog category', trigger: 'change' }
          ],
          ecatalog_image: [
            { required: true, message: 'Please select the ecatalog image', trigger: 'change' }
          ],
          // ecatalog_pdf: [
          //   { required: true, message: 'Please select the ecatalog pdf', trigger: 'change' }
          // ],
          ecatalog_url: [
            { required: true, validator: validatePdfCheck, trigger: 'blur' }
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
      //eCategoryDetail: {},
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
          //this.formItem.website = this.eCategoryDetail
          axios.post(ecatalogsUrl, this.formItem).then(res => {
            this.$Spin.hide();
            this.$Notice.success({title: 'Success!!', desc: 'Successfully saved.', duration: 2})
            this.$emit('updateDocument', {type: 'ecataloglist'})
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
          axios.put(ecatalogsUrl + '/' + this.formItem.id, item).then(res => {
            this.$Spin.hide();
            this.$router.push({title: 'Success!!', desc: 'Successfully Edited.', duration: 2})
            this.$emit('updateDocument', {type: 'ecataloglist'})
          }).catch(err => {
            this.$Spin.hide();
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateDocument', {type: 'ecataloglist'})
    },
    uploadEcatalogImage() {
      //this.formItem.ecatalog_image = ''
      if(this.formItem.ecatalog_category != '') {
          this.uploadEcatalogImageLoader = true;
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
                this.uploadEcatalogImageLoader = false;  
              } 
              else {
                this.formItem.ecatalog_image = result[0].secure_url
                this.formItem.ecatalog_image_name = result[0].original_filename
                this.uploadEcatalogImageLoader = false;  
              }
          });
      }
      else {
          this.$Notice.error({ title: 'Error', desc: 'Please select ecatalog category first.', duration: 2})
      }
    },
    uploadEcatalogPdf() {
      if(this.formItem.ecatalog_category != '') {
          this.uploadEcatalogPdfLoader = true;
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
              this.uploadEcatalogPdfLoader = false;  
            } 
            else {
              if(result[0].format == 'pdf') {
                  this.formItem.ecatalog_pdf = result[0].secure_url
                  this.formItem.ecatalog_pdf_name = result[0].original_filename
                  this.uploadEcatalogPdfLoader = false;
              }
              else {
                  this.$Notice.error({ title: 'Error', desc: 'Please upload pdf file.', duration: 2})
              }
            }
          });
      }
      else {
          this.$Notice.error({ title: 'Error', desc: 'Please select ecatalog category first.', duration: 2})
      }
    },
    startFetching() {
      this.colOpen = '1'
      this.assetsImages = []
      this.fetchImagesLoader = true;
    },
    onChangeWebsite (value) {
      if(this.fdata != undefined) {
        this.ecatalogcategories = [];
        axios.get(ecatalogCategoryUrl + '?userId=' + Cookies.get('userDetailId') + '&website='+value+'&status=true&$paginate=false').then(res=> {
          for(let item of res.data) {
            this.ecatalogcategories.push({
              label: item.fc_name,
              value: item.id
            })
          }
        })
      }
      else {
        this.formItem.ecatalog_category = ''
      }
    },
    async onChangeEcatalogCategory (value) {
      this.isShowimgblock = false
      if (value !== '') {
          this.$Spin.show()
          let result = await axios(baseUrl + '/project-configuration/' + this.formItem.website).then(res => {
            return res.data
          }).catch(err => {
            return {}
          })

          //this.eCategoryDetail = this.formItem.website
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

    if (this.fdata != undefined && this.fdata.type === 'ecatalog' && this.fdata.id !== undefined) {
        axios.get(ecatalogsUrl + '/' + this.fdata.id).then(res => {
          this.formItem = res.data
          this.isdisable = true
        })
    }
  }
}
</script>

<style >
.ecatalogsnew {
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
