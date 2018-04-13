<template>
  <div class="banners">
   <Row>
      <div  style="padding-bottom: 10px;">
        <h2>Banners List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <Col :span="8">
        <Input v-model.trim="filterobj.name" icon="search" placeholder="Search by name...."></Input>
      </Col>
      <Col :span="8">
        <Select v-model="filterobj.type" placeholder="Search by Banner Type" clearable>
          <Option v-for="item in typeOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col :span="8">
        <Row>
          <Col :span="12">
            <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
          </Col>
          <Col :span="12">
            <Button type="ghost" shape="circle" style="font-size:14px;" icon="ios-reload" long @click="handleFileterReset">Reset</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Table :loading="loading" :columns="bcolumns" :data="bdata.data" stripe></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page v-if="bdata.total > 10" :total="bdata.total" :current="cpage" show-sizer show-total :page-size="limit" @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
        <div v-else-if="bdata.total === 1">Total {{bdata.total}} item</div>
        <div v-else>Total {{bdata.total}} items</div>
      </div>
   </Row>
  </div>
</template>

<script>
// import bannersModel from '@/api/banners'
import axios from 'axios'
import config from '../../config'
import moment from 'moment'
import _ from 'lodash'
import Cookies from 'js-cookie';
let bannersUrl = config.baseURL + '/banners'
let bannertypeUrl = config.baseURL + '/bannertype'

export default {
  name: 'banners',
  data () {
    return {
      filterobj: {
        name: '',
        type: ''
      },
      bcolumns: [
        {
          title: 'Sr No.',
          type: 'index',
          width: 100,
          align: 'center'
        },
        {
          title: 'Banner Name',
          width: 250,
          key: 'banner_name'
        },
        {
          title: 'Banner Image',
          width: 200,
          // key: 'banner_img',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: params.row.banner_img,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: params.row.banner_img,
                    width: 150,
                    height: 75
                  },
                  class: {
                    'responsive': true,
                    'thumbnail': true
                  },
                  style: {
                    margin: 0
                  }
                })
              ])
            ])
          }
        },
        {
          title: 'Link URL',
          align: 'center',
          // key: 'banner_linkurl'
          width: 300,
          render: (h, params) => {
            let resp = params.row.banner_linkurl
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Cretated Date',
          key: 'createdAt',
          align: 'center',
          // sortable: true,
          // sortType: 'desc',
          render: (h, params) => {
            return h('div', moment(params.row.createdAt).format('LL'))
          }
        },
        {
          title: 'Status',
          key: 'status',
          render: (h, params) => {
            const row = params.row;
            const color = row.banner_status ? 'green' : 'red';
            const text = row.banner_status ? 'ACTIVE' : 'INACTIVE';

            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                },
                nativeOn: { 
                  click: () => { 
                    this.handleTagClick(params.row.id, params.row.banner_status, params.index) 
                  } 
                }
            }, text)
          }
        },
        {
          title: 'Action',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            let self = this
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  icon: 'edit'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    // this.$router.push('/banners/edit/' + params.row.id)
                    this.$emit('updateBanner', {type: 'banner', id: params.row.id})
                  }
                }
              }, 'Edit'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small',
                  icon: 'trash-b'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.$Modal.confirm({
                      title: 'Confirm',
                      content: '<p>Are you sure you want to Delete?</p>',
                      onOk: function() {
                        self.handleDelete(params.row.id)
                      }
                    })
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      bdata: {
        total: 0,
        data: []
      },
      loading: false,
      cpage: 1,
      limit: 10,
      skip: 0,
      typeOptions: []
    }
  },
  methods: {
    handleSearch () {
      if (this.filterobj.name !== '' || this.filterobj.type !== '') {
        this.cpage = 1
        this.skip = this.cpage * this.limit - this.limit
        this.init()
      }
    },
    handleFileterReset () {
      this.filterobj.name = ''
      this.filterobj.type = ''
      this.init()
    },
    pageChange (page) {
      this.cpage = page
      this.skip = page * this.limit - this.limit
      this.init()
    },
    psizeChange (size) {
      this.cpage = 1
      this.limit = size
      this.init()
    },
    handleTagClick(id, status, inx) {
      if(!status) {
        axios.get(bannertypeUrl + '/' + this.bdata.data[inx].banner_type).then(res => {
          if (res.data.status) {
            axios.patch(bannersUrl + '/' + id, {banner_status: !status}).then(res => {
              this.bdata.data[inx].banner_status = !status
              this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
            })
          } else {
            this.$Notice.warning({ title: 'Warning!!', desc: 'You want to first active bannertype <b><u>' + res.data.bt_name + '</u></b>.', duration: 5})
          }
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error', desc: '', duration: 3})
        })
      } else {
        axios.patch(bannersUrl + '/' + id, {banner_status: !status}).then(res => {
          this.bdata.data[inx].banner_status = !status
          this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error', desc: '', duration: 3})
        })
      }
    },
    handleDelete (iid) {
      let finx = _.findIndex(this.bdata.data, {id: iid})
      if (finx !== undefined && finx >= 0) {
        axios.delete(bannersUrl + '/' + iid).then(res => {
          this.bdata.data.splice(finx, 1)
          this.bdata.total -= 1
          this.$Notice.success({ title: 'Success!', desc: 'Successfully Deleted.', duration: 3})
          let skp = this.skip + (this.limit - 1)
          let userId = Cookies.get('userDetailId')
          axios.get(bannersUrl + '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + skp + '&$limit=1').then(res => {
            if (res.data.data.length > 0) {
              this.bdata.data.push(res.data.data[0])
            } else {
              this.bdata.data.total -= 1
            }
          })
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error!', desc: 'Not Deleted.', duration: 3})
        })
      }
    },
    async init () {
      this.loading = true
      let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
        let query = '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit
        if (this.filterobj.name !== '') {
          query += '&banner_name=' + this.filterobj.name
        }
        if (this.filterobj.type !== '') {
          query += '&banner_type=' + this.filterobj.type
        }
        this.bdata = await axios.get(bannersUrl + query).then(res => {
          return res.data
        })
      }
      this.loading = false
    }
  },
  mounted () {
    let userId = Cookies.get('userDetailId')
    axios.get(bannertypeUrl + '?userId=' + userId + '&status=true&$paginate=false').then(res=> {
      for(let item of res.data) {
        this.typeOptions.push({
          label: item.bt_name,
          value: item.id
        })
      }
    })
    this.init()
  }
}
</script>

<style scoped>
.banners {
  padding: 40px;
}
</style>
