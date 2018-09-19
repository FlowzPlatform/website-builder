<template>
  <div class="tagsnew">
    <Row>
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Tag</h2>
        <h2 v-else>Add Tag
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
                <FormItem label="Name" prop="tag_name">
                    <Input v-model.trim="formItem.tag_name"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Slug" prop="tag_slug">
                    <Input v-model.trim="formItem.tag_slug"></Input>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Website" prop="website">
                    <Select v-model="formItem.website" placeholder="Select Website" :disabled="isdisable">
                        <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem> 
            </Col>
            <Col span="12">
                <FormItem label="Category" prop="tag_category">
                    <Select v-model="formItem.tag_category" placeholder="Select Category" filterable>
                        <Option v-for="item in tagcategories" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Color" prop="tag_color">
                    <ColorPicker v-model="formItem.tag_color" />
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Icon" prop="tag_icon">
                    <el-button icon="tag_icon" @click="uploadTagIcon()" :loading="uploadTagIconLoader">Upload</el-button>
                    <a :href="formItem.tag_icon" target="_blank" class="upload_image">
                      <img v-if="formItem.tag_icon" :src="formItem.tag_icon" />
                    </a>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Description" prop="tag_description">
                    <Input v-model="formItem.tag_description" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Date Range" prop="tag_start_date">
                    <DatePicker type="daterange" :options="dateOptions" v-model="tag_date_range" placeholder="Select Date Range" style="width:50%"></DatePicker>
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
import { constants } from 'zlib';

let baseUrl = config.baseURL
let tagCategoryUrl = baseUrl + '/tagcategory'
let tagsUrl = baseUrl + '/tags'

export default {
  name: 'tagsnew',
  props: {
    tdata: Object
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
      tag_date_range: [],
      dateOptions: {
        disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      formItem: {
        tag_name: '',
        tag_slug: '',
        website: '',
        tag_category: '',
        tag_color: '',
        tag_icon: '',
        tag_image_name: '',
        tag_description: '',
        tag_start_date: '',
        tag_end_date: '',
        tag_status: true,
        createdAt: '',
        userId: Cookies.get('userDetailId'),
      },
      uploadTagIconLoader: false,
      tagcategories: [],
      rulesformItem: {
        tag_name: [
          { required: true, message: 'Please enter tag name', trigger: 'change' }
        ],
        tag_slug: [
          { required: true, message: 'Please enter tag slug', trigger: 'change' }
        ],
        website: [
          { required: true, message: 'Please select website', trigger: 'change' }
        ],
        tag_category: [
          { required: true, message: 'Please select the tag category', trigger: 'change' }
        ],
        tag_color: [
          { required: true, message: 'Please enter tag color', trigger: 'change' }
        ],
        tag_icon: [
          { required: true, message: 'Please select the tag image', trigger: 'change' }
        ]
      },
      updateRules: {
          tag_name: [
            { required: true, message: 'Please enter tag name', trigger: 'change' }
          ],
          tag_slug: [
            { required: true, message: 'Please enter tag slug', trigger: 'change' }
          ],
          website: [
            { required: true, message: 'Please select website', trigger: 'change' }
          ],
          tag_category: [
            { required: true, message: 'Please select the tag category', trigger: 'change' }
          ],
          tag_color: [
            { required: true, message: 'Please enter tag color', trigger: 'change' }
          ],
          tag_icon: [
            { required: true, message: 'Please select the tag image', trigger: 'change' }
            // { validator: validateIMG, trigger: 'change' }
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
      tcategoryDetail: {},
      isdisable: false,
      fetchImagesLoader: false,
      assetsImages: [],
      itemArr: [],
      webOptions: []
    }
  },
  watch: {
    tag_date_range: function(value) {
      this.formItem.tag_start_date = value[0]
      this.formItem.tag_end_date = value[1]
    },
    'formItem.website':function(val) {
      console.log('web watch')
      this.OnChangeWebsite(val);
    },
    'formItem.tag_category':function(val) {
      console.log('cat watch')
      this.OnChangeTagCategory(val);
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Spin.show();
          this.formItem.createdAt = new Date()
          this.formItem.website = this.tcategoryDetail.website
          axios.post(tagsUrl, this.formItem).then(res => {
            this.$Spin.hide();
            this.$Notice.success({title: 'Success!!', desc: '', duration: 2})
            this.$emit('updateTag', {type: 'taglist'})
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
          axios.put(tagsUrl + '/' + this.formItem.id, item).then(res => {
            this.$Spin.hide();
            this.$router.push({title: 'Success!!', desc: 'Successfully Edited.', duration: 2})
            this.$emit('updateTag', {type: 'taglist'})
          }).catch(err => {
            this.$Spin.hide();
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateTag', {type: 'taglist'})
    },
    uploadTagIcon() {
      if(this.formItem.tag_category != '') {
          this.uploadTagIconLoader = true;
          cloudinary.openUploadWidget({ 
            cloud_name: this.cloudDetails.cloudName, 
            api_key: this.cloudDetails.apiKey,
            upload_preset: this.cloudDetails.uploadPreset, 
            sources: ['local', 'camera', 'url', 'facebook']
          }, (error, result) => { 
            if(error != null){

              if(error.message == 'User closed widget'){

              } else {
                console.log('Image upload error: ', error);
                this.$message({
                  message: 'Upload image failed. Please try again.',
                  type: 'error'
                });  
              }
              
              this.uploadTagIconLoader = false;  
            } else {
              this.formItem.tag_icon = result[0].url
              this.formItem.tag_image_name = result[0].original_filename
              this.uploadTagIconLoader = false;  
            }
          });
      }
      else {
          if(this.formItem.website == '') {
            this.$Notice.error({ title: 'Error', desc: 'Please select website & category.', duration: 2})
          }
          else {
            this.$Notice.error({ title: 'Error', desc: 'Please select category.', duration: 2})
          }
      }
    },
    startFetching() {
      this.colOpen = '1'
      this.assetsImages = []
      this.fetchImagesLoader = true;
      this.fetchcloudinaryImages()
    },
    async fetchcloudinaryImages(){
          await axios.get(baseUrl + '/cloudinary-service?cloudName=' + this.cloudDetails.cloudName + '&apiKey=' + this.cloudDetails.apiKey + '&apiSecret=' + this.cloudDetails.apiSecret + '&nextCursor=' + this.cloudDetails.nextCursor, {
          })
          .then((response) => {
              for(let i = 0; i < response.data.resources.length; i++){
                if (response.data.resources[i].secure_url === this.formItem.tag_icon) {
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
              this.fetchImagesLoader = false;
          });
    },
    OnChangeWebsite (value) {
      console.log('web')
      this.tagcategories = [];
      axios.get(tagCategoryUrl + '?userId=' + Cookies.get('userDetailId') + '&website='+value+'&status=true&$paginate=false').then(res=> {
        for(let item of res.data) {
          this.tagcategories.push({
            label: item.tc_name,
            value: item.id
          })
        }
      })
    },
    async OnChangeTagCategory (value) {
      console.log('cat')
      this.isShowimgblock = false
      this.$Spin.show()
      if (value !== '') {
        let resp = await axios.get(tagCategoryUrl + '/' + value).then(res => {
          return res.data
        }).catch(err => {
          return {}
        })
        this.tcategoryDetail = resp
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

    if(this.formItem.website !== '') {
      axios.get(tagCategoryUrl + '?userId=' + userId + '&website='+this.formItem.website+'&status=true&$paginate=false').then(res=> {
        for(let item of res.data) {
          this.tagcategories.push({
            label: item.tc_name,
            value: item.id
          })
        }
      })
    }

    if (this.tdata != undefined && this.tdata.type === 'tag' && this.tdata.id !== undefined) {
        axios.get(tagsUrl + '/' + this.tdata.id).then(res => {
          this.formItem = res.data
          this.isdisable = true
          this.tag_date_range = [this.formItem.tag_start_date,this.formItem.tag_end_date];
        })
    }
  }
}
</script>

<style >
.tagsnew {
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
.upload_image {
  margin-left: 20px;
}
.upload_image img {
  max-width: 250px;
  height: 100px; 
}
</style>
