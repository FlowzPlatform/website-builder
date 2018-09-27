<template>
  <div class="categorynew">
    <Row>
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Category</h2>
        <h2 v-else>Add Category</h2>
      </div>
    </Row>

    <Row style="border: 1px solid #C0C0C0; padding: 20px">
      <div>
        <Form :model="formItem" :label-width="150" ref="formItem" :rules="getRules()">
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Website" prop="website">
                    <Select v-model="formItem.website" placeholder="Select Website" disabled>
                        <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Name" prop="name">
                    <Input v-model.trim="formItem.name" disabled></Input>
                </FormItem>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
                <FormItem label="Icon" prop="icon">
                    <el-button icon="icon" @click="uploadIcon()" :loading="uploadIconLoader">Upload Image</el-button>
                    <a :href="formItem.icon" target="_blank" class="upload_image">
                      <img v-if="formItem.icon" :src="formItem.icon" height="100"/>
                    </a>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="Description" prop="description">
                    <Input v-model="formItem.description" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                </FormItem>
            </Col>
          </Row>
          <!-- <Row :gutter="16">
            <Col span="12">
                <FormItem label="Parent Category" prop="parent">
                    <Select v-model="formItem.parent" placeholder="Select Category">
                        <Option v-for="item in catOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
          </Row> -->
          <Row :gutter="16">
            <Col span="12">
                <FormItem>
                    <Button v-if="formItem.id" type="primary" @click="handleEdit('formItem')">Update</Button>
                    <Button v-else type="primary" @click="handleSubmit('formItem')">Submit</Button>
                    <Button type="ghost" style="margin-left: 8px" @click="handleCancel">Cancel</Button>
                </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'
import Cookies from 'js-cookie';
import _ from 'lodash'
import { EALREADY } from 'constants';
import { constants } from 'zlib';

let baseUrl = config.baseURL
let categoryUrl = baseUrl + '/category'

export default {
  name: 'categorynew',
  props: {
    fdata: Object
  },
  data () {
    const validateName = async(rule, value, callback) => {
      let userId = Cookies.get('userDetailId')
      if (value !== '' && this.formItem.website !== '') {
        let resp = await (axios.get(categoryUrl + '?userId=' + userId +'&website=' + this.formItem.website + '&name=' + value).then(res => {
          if (this.formItem.id) {
            let arr = _.reject(res.data.data, {name: this.name})
            return arr
          } else {
            return res.data.data
          }
        }).catch(err => {
          return []
        }))
        if (resp.length > 0) {
          callback(new Error('Category Name already Exist in Selected Website.'))
        } else {
          callback();
        }
      }
    };
    return {
      formItem: {
          website: '',
          name: '',
          slug: '',
          parent: '',
          icon: '',
          icon_name: '',
          count: '',
          description: '',
          status: true,
          homepage: false,
          createdAt: '',
          userId: Cookies.get('userDetailId')
      },
      uploadIconLoader: false,
      rulesformItem: {
        website: [
          { required: true, message: 'Please select the Website', trigger: 'change' }
        ],
        name: [
          { required: true, message: 'Please enter Category Name', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ]
      },
      updateRules: {
          website: [
            { required: true, message: 'Please select the Website', trigger: 'change' }
          ],
          name: [
            { required: true, message: 'Please enter Category Name', trigger: 'blur' }
          ]
      },
      webOptions: [],
      catOptions: [],
      cloudDetails: {},
      name: ''
    }
  },
  watch: {
    'formItem.website': function(val, oldVal){
      this.onChangeWebsite(val);
    }
  },
  methods: {
    getRules () {
      if (this.formItem.id) {
        return this.updateRules
      } else {
        return this.rulesformItem
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.formItem.createdAt = new Date()
          axios.post(categoryUrl, this.formItem).then(res => {
            this.$Notice.success({title: 'Success', desc: 'Successfully saved.', duration: 3})
            this.$emit('updateDocument', {type: 'categoryList',website: this.formItem.website})
          }).catch(err => {
            console.log('error', err)
            this.$Notice.error({title: 'Error', desc: 'Not saved.', duration: 3})
          })
        }
      })
    },
    handleEdit (name) {
      let item = _.cloneDeep(this.formItem)
      delete item.id
      this.$refs[name].validate((valid) => {
        if (valid) {
          item.createdAt = new Date()
          axios.put(categoryUrl + '/' + this.formItem.id, item).then(res => {
            this.$Notice.success({title: 'Success!!', desc: 'Successfully Edited.', duration: 3})
            this.$emit('updateDocument', {type: 'categoryList',website: this.formItem.website})
          }).catch(err => {
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateDocument', {type: 'categoryList',website: this.formItem.website})
    },
    uploadIcon() {
      if(this.formItem.name != '') {
          this.uploadIconLoader = true;
          cloudinary.openUploadWidget({ 
              cloud_name: this.cloudDetails.cloudName, 
              api_key: this.cloudDetails.apiKey,
              upload_preset: this.cloudDetails.uploadPreset, 
              sources: ['local', 'camera', 'url']
          }, (error, result) => { 
              if(error != null){
                if(error.message != 'User closed widget'){
                  this.$message({
                    message: 'Upload icon failed. Please try again.',
                    type: 'error'
                  }); 
                } 
                this.uploadIconLoader = false;  
              } 
              else {
                this.formItem.icon = result[0].secure_url
                this.formItem.icon_name = result[0].original_filename
                this.uploadIconLoader = false;  
              }
          });
      }
      else {
          this.$Notice.error({ title: 'Error', desc: 'Please select category name.', duration: 2})
      }
    },
    onChangeWebsite (value) {
      this.$Spin.show() 
      axios(baseUrl + '/project-configuration/' + value).then(res => {
          if (res.data.hasOwnProperty('configData')) {
              let cDetails = res.data.configData[1].projectSettings[1].CloudinaryDetails
              if (cDetails !== undefined && cDetails.apiKey !== '' && cDetails.cloudName !== '' && cDetails.uploadPreset) {
                  this.cloudDetails = cDetails 
                  this.isShowimgblock = true
                  this.$Spin.hide()
              } else {
                  this.$Spin.hide()
                  this.$Notice.error({
                    title: 'Error',
                    desc: 'Please add Cloudinary Details to <b>' + res.data.websiteName + '</b> Website.',
                    duration: 10
                  })
              }
          } else {
              this.$Message.error('INTERVAL SERVER ERROR.')
              this.$Spin.hide()  
          }
      }).catch(err => {
          return {}
      })
    }
  },
  async mounted () {
    let userId = Cookies.get('userDetailId')
    if (userId !== '' && userId !== undefined) {
      await axios.get(baseUrl + '/project-configuration?userId=' + userId).then(res => {
        for (let item of res.data.data) {
          if(item.configData != 'undefined' && Array.isArray(item.configData)) {
            this.webOptions.push({label: item.websiteName, value: item.id, vid: item.configData[1].projectSettings[0].ProjectVId.vid})
          }
        }
      }).catch(err => {
      })
    }

    if (this.fdata != undefined && this.fdata.type === 'editCategory' && this.fdata.categorySlug !== '') {
        await axios.get(categoryUrl + '?slug=' + this.fdata.categorySlug + '&website=' + this.fdata.website).then(res => {
            if(res.data.total == 1) {
                this.formItem = res.data.data[0]  
            }
            else {
              this.formItem.name = this.fdata.categorySlug;
              this.formItem.website = this.fdata.website;
            }             
        }).catch(err => {
            console.log(err);
        })

        // let websiteDetails = _.find(this.webOptions, {value: this.fdata.website});
        // let vid = websiteDetails.vid;
        // if(vid != undefined && vid != '') {
        //   this.$Spin.show()
        //   await axios.get(config.menuCategoriesUrl, {
        //       headers: {
        //           Authorization: Cookies.get('auth_token'),
        //           vid: vid
        //       }
        //   })
        //   .then((res) => {
        //       let categories = res.data.aggregations.group_by_category.buckets;
              
        //       for(let i = 0; i < categories.length; i++) {
        //           let categorySlug = categories[i].key.toLowerCase().replace(/ /g, '-');

        //           this.catOptions.push({
        //             label: categories[i].key.toUpperCase(),
        //             value: categorySlug
        //           });								
        //       }
        //       this.$Spin.hide()
        //   })
        //   .catch((e) => {
        //       this.$Notice.error({ title: 'Error', desc: 'Failed! Please try again.', duration: 2})
        //       console.log(e);
        //   })
        // } 
        // else if (this.fdata.website != undefined && this.fdata.website !== '') {
        //     this.$message({
        //       showClose: true,
        //       message: 'Please set "VID" in Project settings to get all of your category list.',
        //       type: 'info'
        //     });
        // }
    }
  }
}
</script>

<style scoped>
  .categorynew {
    padding: 40px;
  }
  .upload_image {
    float: right;
  }
</style>
