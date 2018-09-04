<template>
  <div class="webtoolsnew">
    <Row>
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Webtool</h2>
        <h2 v-else>Add Webtool
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
                  <FormItem label="Website" prop="website">
                      <Select v-model="formItem.website" placeholder="Select Website"  @on-change="onChangeWebsite" :disabled="isdisable">
                          <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                  </FormItem>
              </Col>
              <Col span="12">
                  <FormItem label="SKU" prop="sku">
                      <Select v-model="formItem.sku" placeholder="Select SKU">
                          <Option v-for="item in skuOptions" :value="item.sku" :key="item.sku">{{ item.sku }}</Option>
                      </Select>
                  </FormItem>
              </Col>
          </Row>

          <Row :gutter="16">
              <Col span="12">
                  <FormItem label="Brand Video URL" prop="brand_video_url">
                      <Input v-model.trim="formItem.brand_video_url"></Input>
                  </FormItem>
              </Col>
              <Col span="12">
                  <FormItem label="NonBrand Video URL" prop="nonbrand_video_url">
                    <Input v-model.trim="formItem.nonbrand_video_url"></Input>
                  </FormItem>
              </Col>
          </Row>

          <Row :gutter="16">
              <Col span="12">
                  <FormItem label="Product Template" prop="product_pdf">
                      <el-button icon="product_pdf" @click="uploadWebtoolPdf('product_pdf')" :loading="product_pdf_loader">Upload PDF</el-button>
                      <a :href="formItem.product_pdf" target="_blank" class="upload_image">
                        <img v-if="formItem.product_pdf" :src="pdf_download" height="100"/>
                      </a>
                  </FormItem>
              </Col>
              <Col span="12">
                  <FormItem label="Art Template" prop="art_pdf">
                      <el-button icon="art_pdf" @click="uploadWebtoolPdf('art_pdf')" :loading="art_pdf_loader">Upload PDF</el-button>
                      <a :href="formItem.art_pdf" target="_blank" class="upload_image">
                        <img v-if="formItem.art_pdf" :src="pdf_download" height="100"/>
                      </a>
                  </FormItem>
              </Col>
          </Row>

          <Row :gutter="16">
              <Col span="12">
                  <FormItem label="GCC Template" prop="gcc_pdf">
                      <el-button icon="gcc_pdf" @click="uploadWebtoolPdf('gcc_pdf')" :loading="gcc_pdf_loader">Upload PDF</el-button>
                      <a :href="formItem.gcc_pdf" target="_blank" class="upload_image">
                        <img v-if="formItem.gcc_pdf" :src="pdf_download" height="100"/>
                      </a>
                  </FormItem>
              </Col>
              <Col span="12">
                  <FormItem label="Special Pricing" prop="special_pricing">
                      <el-button icon="special_pricing" @click="uploadWebtoolImage('special_pricing')" :loading="special_pricing_loader">Upload Image</el-button>
                      <a :href="formItem.special_pricing" target="_blank" class="upload_image">
                        <img v-if="formItem.special_pricing" :src="this.formItem.special_pricing" height="100"/>
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
let webtoolsUrl = config.baseURL + '/webtools'
let productApiUrl = config.productApiUrl

export default {
  name: 'webtoolsnew',
  props: {
    fdata: Object
  },
  data () {
    const validateSku = async(rule, value, callback) => {
      let userId = Cookies.get('userDetailId')
      if (value !== '' && this.formItem.website !== '') {
        let resp = await (axios.get(webtoolsUrl + '?userId=' + userId +'&website=' + this.formItem.website + '&sku=' + value).then(res => {
          if (this.formItem.id) {
            let arr = [];
            if(this.skuIgnore != undefined && this.skuIgnore != '') {
                arr = _.reject(res.data.data, {sku: this.skuIgnore})  
            }
            return arr
          } 
          else {
            return res.data.data
          }
        }).catch(err => {
          return []
        }))
        if (resp.length > 0) {
          callback(new Error('SKU already Exist.'))
        } else {
          callback();
        }
      }
    };
    const validateLinkURL = async(rule, value, callback) => {
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
    const validateVideoCheck = (rule, value, callback) => {
        if ((this.formItem.nonbrand_video_url != '' && value == '') || (this.formItem.nonbrand_video_url == '' && value != '')) {
            callback(new Error('Please enter both video URLs or keep both empty.'));
        } else if(validateLinkURL(rule, value, callback)) {
            callback();
        }
    };

    return {
      colOpen: '0',
      isShowingBlock: false,
      pdf_download: '../../static/img/pdf.png',
      dateOptions: {
        disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      formItem: {
        website: '',
        product_pdf: '',
        product_pdf_thumb: '',
        product_pdf_name: '',
        art_pdf: '',
        art_pdf_thumb: '',
        art_pdf_name: '',
        gcc_pdf: '',
        gcc_pdf_thumb: '',
        gcc_pdf_name: '',
        brand_video_url: '',
        nonbrand_video_url: '',
        special_pricing: '',
        special_pricing_name: '',
        special_pricing_thumb: '',
        sku: '',
        status: true,
        createdAt: '',
        userId: Cookies.get('userDetailId')
      },
      special_pricing_loader: false,
      product_pdf_loader: false,
      art_pdf_loader: false,
      gcc_pdf_loader: false,
      rulesformItem: {
          website: [
            { required: true, message: 'Please select website', trigger: 'change' }
          ],
          sku: [
            { required: true, message: 'Please select sku', trigger: 'change' },
            { validator: validateSku, trigger: 'change' }
          ],
          brand_video_url: [
            { required: true, validator: validateVideoCheck, trigger: 'blur' }
          ],
          nonbrand_video_url: [
            { required: false, validator: validateLinkURL, trigger: 'blur' }
          ]
      },
      updateRules: {
          website: [
            { required: true, message: 'Please select website', trigger: 'change' }
          ],
          sku: [
            { required: true, message: 'Please select sku', trigger: 'change' },
            { validator: validateSku, trigger: 'change' }
          ],
          brand_video_url: [
            { required: true, validator: validateVideoCheck, trigger: 'blur' }
          ],
          nonbrand_video_url: [
            { required: false, validator: validateLinkURL, trigger: 'blur' }
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
      isdisable: false,
      fetchImagesLoader: false,
      assetsImages: [],
      itemArr: [],
      webOptions: [],
      skuOptions: [],
      skuIgnore: ''
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Spin.show();
          let productDetails = _.find(this.skuOptions, {value: this.formItem.sku})
          this.formItem.createdAt = new Date()

          axios.post(webtoolsUrl, this.formItem).then(res => {
            this.$Spin.hide();
            this.$Notice.success({title: 'Success!!', desc: 'Successfully saved.', duration: 2})
            this.$emit('updateDocument', {type: 'webtoolsList'})
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
        if (valid && this.isShowingBlock) {
          this.$Spin.show();
          item.createdAt = new Date()
          axios.put(webtoolsUrl + '/' + this.formItem.id, item).then(res => {
            this.$Spin.hide();
            this.$router.push({title: 'Success!!', desc: 'Successfully Edited.', duration: 2})
            this.$emit('updateDocument', {type: 'webtoolsList'})
          }).catch(err => {
            this.$Spin.hide();
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateDocument', {type: 'webtoolsList'})
    },
    uploadWebtoolPdf(template) {
      let loader = template+"_loader";
      this[loader] = true;

      cloudinary.openUploadWidget({ 
        cloud_name: this.cloudDetails.cloudName, 
        api_key: this.cloudDetails.apiKey,
        upload_preset: this.cloudDetails.uploadPreset, 
        sources: ['local', 'url']
      }, (error, result) => { 
        if(error != null){
            if(error.message != 'User closed widget'){
                this.$message({
                    message: 'Upload PDF failed. Please try again.',
                    type: 'error'
                }); 
            }
            this[loader] = false;  
        } 
        else {
            if(result[0].format == 'pdf') {
                let pdf_name = template+"_name";
                let pdf_thumb = template+"_thumb";
                this.formItem[template] = result[0].url
                this.formItem[pdf_name] = result[0].original_filename
                this.formItem[pdf_thumb] = result[0].thumbnail_url
                this[loader] = false;
            }
            else {
                this.$Notice.error({ title: 'Error', desc: 'Please upload pdf file.', duration: 2})
                this[loader] = false;
            }
        }
      });
    },
    uploadWebtoolImage(template) {
        this.special_pricing_loader = true;

        cloudinary.openUploadWidget({ 
            cloud_name: this.cloudDetails.cloudName, 
            api_key: this.cloudDetails.apiKey,
            upload_preset: this.cloudDetails.uploadPreset, 
            sources: ['local', 'url']
        }, (error, result) => { 
          if(error != null){
              if(error.message != 'User closed widget') {
                  this.$message({
                      message: 'Upload image failed. Please try again.',
                      type: 'error'
                  }); 
              }
              this.special_pricing_loader = false;  
          } 
          else {
              let imageFromates = ['jpeg','jpg','gif','png','bmp','tiff'];
              if(imageFromates.includes(result[0].format)) {
                  this.formItem.special_pricing = result[0].url
                  this.formItem.special_pricing_name = result[0].original_filename
                  this.formItem.special_pricing_thumb = result[0].thumbnail_url
                  this.special_pricing_loader = false;
              }
              else {
                  this.$Notice.error({ title: 'Error', desc: 'Please upload image file.', duration: 2})
                  this.special_pricing_loader = false;
              }
          }
        });
    },
    startFetching() {
      this.colOpen = '1'
      this.assetsImages = []
      this.fetchImagesLoader = true;
    },
    async onChangeWebsite (value) {
      this.$Spin.show();

      if(this.formItem.id == undefined) {
          this.formItem.sku = '';
          this.skuOptions = [];
      }

      // get sku's of website
      let websiteDetails = _.find(this.webOptions, {value: this.formItem.website})
      let skuTotal = await axios.get(
        productApiUrl + "?$limit=0&source=sku", 
        { headers: { 'vid': websiteDetails.vid } }
      )
      .then(res => {
          if(res.data.hits.total !== undefined && res.data.hits.total > 0) {
              return res.data.hits.total;
          }
          else {
              this.$Message.error('Records not found.')
          }
      })
      .catch(res => {
          this.$Spin.hide()
      })

      if(skuTotal > 0) {
        await axios.get(
          productApiUrl + "?$limit="+skuTotal+"&source=sku,product_id",
          { headers: { 'vid': websiteDetails.vid } }
        )
        .then(res => {
            for (let item of res.data.hits.hits) {
                this.skuOptions.push({sku: item._source.sku, product_id: item._source.product_id})
            }
            this.$Spin.hide()
        })
        .catch(res => {
            this.$Spin.hide()
        })
      }

      // get cloudinary details
      let result = await axios(baseUrl + '/project-configuration/' + this.formItem.website).then(res => {
          return res.data
      }).catch(err => {
          return {}
      })
      if (!_.isEmpty(result)) {
        if (result.hasOwnProperty('configData')) {
          let cDetails = result.configData[1].projectSettings[1].CloudinaryDetails
          if (cDetails !== undefined && cDetails.apiKey !== '' && cDetails.cloudName !== '' && cDetails.uploadPreset) {
              this.cloudDetails = cDetails 
              this.isShowingBlock = true
              this.$Spin.hide()
          } 
          else {
              this.$Spin.hide()
              this.$Notice.error({
                  title: 'Error',
                  desc: 'Please add Cloudinary Details to <b>' + result.websiteName + '</b> Website.',
                  duration: 10
              })
          }
        } 
        else {
            this.$Message.error('INTERVAL SERVER ERROR.')
            this.$Spin.hide()  
        }
      } 
      else {
        this.$Message.error('INTERVAL SERVER ERROR.')
        this.$Spin.hide()
      }
    }
  },
  async mounted () {
    let userId = Cookies.get('userDetailId')
    
    if (userId !== '' && userId !== undefined) {
        await axios.get(baseUrl + '/project-configuration?userId=' + userId).then(res => {
          for (let item of res.data.data) {
            this.webOptions.push({label: item.websiteName, value: item.id, vid: item.configData[1].projectSettings[0].ProjectVId.vid})
          }
        }).catch(err => {
        })
    }

    if (this.fdata != undefined && this.fdata.type === 'editWebtool' && this.fdata.id !== undefined) {
        axios.get(webtoolsUrl + '/' + this.fdata.id).then(res => {
          this.formItem = res.data
          this.skuIgnore = res.data.sku
          this.isdisable = true
          this.onChangeWebsite(this.formItem.website);
        })
    }
  }
}
</script>

<style >
  .webtoolsnew {
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
