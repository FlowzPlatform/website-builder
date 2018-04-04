<template>
  <div class="banners">
   <Row>
      <h2>Banners List</h2>
      <div  style="float: right; padding-bottom: 10px;">
        <!-- <Button shape="circle" type="ghost" icon="arrow-left-a" @click="goBack">Back to Dashboard</Button> -->
        <!-- <Button shape="circle" type="primary" icon="plus" @click="addBanner">Add</Button> -->
      </div>
    </Row>
    <Row>
      <Table :columns="bcolumns" :data="bdata.data" stripe></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page :total="bdata.total" :current="cpage" show-sizer show-total @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
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

export default {
  name: 'banners',
  data () {
    return {
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
                    this.handleTagClick(params.row.id, params.row.banner_status) 
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
      cpage: 1,
      limit: 10,
      skip: 0
    }
  },
  methods: {
    pageChange (page) {
      this.skip = page * this.limit - this.limit
      this.init()
    },
    psizeChange (size) {
      this.cpage = 1
      this.limit = size
      this.init()
    },
    handleTagClick(id, status) {
      axios.patch(bannersUrl + '/' + id, {banner_status: !status}).then(res => {
        let finx = _.findIndex(this.bdata.data, {id: id})
        if (finx !== undefined && finx >= 0) {
            this.bdata.data[finx].banner_status = !status
            this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
        }  
      }).catch(err => {
        console.log('Error', err)
        this.$Notice.error({ title: 'Error', desc: '', duration: 3})
      })
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
            }
          })
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error!', desc: 'Not Deleted.', duration: 3})
        })
      }
    },
    async init () {
      let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
        this.bdata = await axios.get(bannersUrl + '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit).then(res => {
          return res.data
        })
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
.banners {
  padding: 40px;
}
</style>
