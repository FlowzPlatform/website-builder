<template>
  <div class="ecatalogcategorynew">
   <Row>
      <div style="padding-bottom: 10px;">
        <h2 v-if="formItem.id">Edit Ecatalog Category</h2>
        <h2 v-else>Add Ecatalog Category</h2>
      </div>
   </Row>
   <Row style="border: 1px solid #C0C0C0; padding: 20px">
     <Form :model="formItem" :label-width="300" ref="formItem" :rules="rulesformItem">
        <FormItem label="Website" prop="website" filterable>
            <Select v-model="formItem.website" placeholder="Select Website" :disabled="isdisable">
                <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>      
        <FormItem label="Category Name" prop="fc_name">
            <Input v-model.trim="formItem.fc_name" placeholder="Ecatalog Category Name"></Input>
        </FormItem>
        <FormItem  v-if="formItem.id" label="Status">
            <i-switch v-model="formItem.status" size="large">
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

let baseUrl = config.baseURL
let ecatalogCategoryUrl = baseUrl + '/ecatalog-category'

export default {
  name: 'ecatalogcategorynew',
  props: {
    fdata: Object
  },
  data () {
    const validatefcname = async(rule, value, callback) => {
      let userId = Cookies.get('userDetailId')
      if (value !== '' && this.formItem.website !== '') {
        let resp = await (axios.get(ecatalogCategoryUrl + '?userId=' + userId +'&website=' + this.formItem.website + '&fc_name=' + value).then(res => {
          if (this.formItem.id) {
            let arr = _.reject(res.data.data, {fc_name: this.fcname})
            return arr
          } else {
            return res.data.data
          }
        }).catch(err => {
          return []
        }))
        if (resp.length > 0) {
          callback(new Error('Ecatalog Category Name already Exist in Selected Website. Please try another.'))
        } else {
          callback();
        }
      }
    };
    return {
      formItem: {
          website: '',
          fc_name: '',
          status: true,
          createdAt: '',
          userId: Cookies.get('userDetailId')
      },
      rulesformItem: {
        website: [
          { required: true, message: 'Please select the Website', trigger: 'change' }
        ],
        fc_name: [
          { required: true, message: 'Please fill in the Ecatalog Category Name', trigger: 'blur' },
          { validator: validatefcname, trigger: 'blur' }
        ]
      },
      webOptions: [],
      isdisable: false,
      fcname: ''
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.formItem.createdAt = new Date()
          axios.post(ecatalogCategoryUrl, this.formItem).then(res => {
            this.$Notice.success({title: 'Success', desc: 'Successfully saved.', duration: 3})
            this.$emit('updateDocument', {type: 'ecatalogcategorylist'})
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
          axios.put(ecatalogCategoryUrl + '/' + this.formItem.id, item).then(res => {
            this.$Notice.success({title: 'Success!!', desc: 'Successfully Edited.', duration: 3})
            this.$emit('updateDocument', {type: 'ecatalogcategorylist'})
            // this.$router.push('/ecatalogcategory')
          }).catch(err => {
            console.log('Error', err)
          })
        }
      })
    },
    handleCancel () {
      this.$emit('updateDocument', {type: 'ecatalogcategorylist'})
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
    if (!_.isEmpty(this.fdata)) {
      if (this.fdata.type === 'ecatalogcategory' && this.fdata.id !== '') {
        axios.get(ecatalogCategoryUrl + '/' + this.fdata.id).then(res => {
          this.formItem = res.data
          this.fcname = res.data.fc_name
          this.isdisable = true
        }).catch(err => {
          console.log('Error::', err)
        })
      }
    }
  }
}
</script>

<style scoped>
.ecatalogcategorynew {
  padding: 40px;
}
</style>
