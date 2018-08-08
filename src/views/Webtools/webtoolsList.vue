<template>
  <div class="webtools">
    <Row>
      <div  style="padding-bottom: 10px;">
        <h2>Webtools List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <Col :span="6">
        <Select v-model="filterobj.website" placeholder="Search by Website" filterable @on-change="handleSearch">
          <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col :span="6">
        <Input v-model.trim="filterobj.sku" placeholder="Search by SKU" filterable @on-blur="handleSearch"></Input>
      </Col>
      <Col :span="6">
        <Select v-model="filterobj.status" placeholder="Search by Status" filterable @on-change="handleSearch">
          <Option v-for="item in statusOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col :span="6">
        <Row>
          <Col :span="(filterobj.website === '' && filterobj.sku === '' && filterobj.status === '') ? 24 : 12">
            <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
          </Col>
          <Col :span="12" v-if="filterobj.website !== '' || filterobj.sku !== '' || filterobj.status !== ''">
            <Button type="ghost" shape="circle" style="font-size:14px;" icon="ios-reload" long @click="handleFileterReset">Reset</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Table :loading="loading" :columns="fcolumns" :data="tdata.data" stripe  @on-sort-change="handleSorting"></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page v-if="tdata.total > 10" :total="tdata.total" :current="cpage" show-sizer show-total :page-size="limit" @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
        <div v-else-if="tdata.total === 1">Total {{tdata.total}} item</div>
        <div v-else>Total {{tdata.total}} items</div>
      </div>
   </Row>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'
import moment from 'moment'
import _ from 'lodash'
import Cookies from 'js-cookie';

let baseUrl = config.baseURL
let webtoolsUrl = config.baseURL + '/webtools'
let productApiUrl = config.productApiUrl

export default {
  name: 'webtools',
  data () {
    return {
      filterobj: {
        website: '',
        sku: '',
        status: ''
      },
      fcolumns: [
        {
          title: 'SKU',
          align: 'center',
          render: (h, params) => {
            let resp = params.row.sku
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Product PDF',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: params.row.product_pdf,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: '../../static/img/pdf.png',
                    height: 65
                  },
                  class: {
                    'responsive': true,
                    'thumbnail': true
                  },
                  style: {
                    margin: "5px auto"
                  }
                })
              ])
            ])
          }
        },
        {
          title: 'Art PDF',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: params.row.art_pdf,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: '../../static/img/pdf.png',
                    height: 65
                  },
                  class: {
                    'responsive': true,
                    'thumbnail': true
                  },
                  style: {
                    margin: "5px auto"
                  }
                })
              ])
            ])
          }
        },
        {
          title: 'GCC PDF',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: params.row.gcc_pdf,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: '../../static/img/pdf.png',
                    height: 65
                  },
                  class: {
                    'responsive': true,
                    'thumbnail': true
                  },
                  style: {
                    margin: "5px auto"
                  }
                })
              ])
            ])
          }
        },
        {
          title: 'Website',
          width: 220,
          key: 'websiteName'
        },
        {
          title: 'Updated Date',
          key: 'createdAt',
          align: 'center',
          width: 170,
          sortable: true,
          sortType: 'desc',
          render: (h, params) => {
            return h('div', moment(params.row.createdAt).format('LL'))
          }
        },
        {
          title: 'Status',
          key: 'status',
          width: 170,
          align: 'center',
          render: (h, params) => {
            const row = params.row;
            const color = row.status ? 'green' : 'red';
            const text = row.status ? 'ACTIVE' : 'INACTIVE';

            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                },
                nativeOn: { 
                  click: () => { 
                    this.handleWebtoolClick(params.row.id, params.row.status, params.index) 
                  } 
                }
            }, text)
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            let self = this
            return h('div', [
                h('a', {
                  class: {
                    'iconlink': true
                  },
                  on: {
                    click: () => {
                      this.$emit('updateDocument', {type: 'editWebtool', id: params.row.id})
                    }
                  }
                },[
                  h('Tooltip', {
                    props: {
                      content: 'Edit',
                      placement: 'top'
                    }
                  }, [
                    h('Icon', {
                      props: {
                        type: 'compose'
                      },
                      class: {
                        'iconCustom': true,
                        'editt': true
                      }
                    })
                  ])
                ], ''),
                h('a', {
                  class: {
                    'iconlink': true
                  },
                  on: {
                    click: () => {
                      let userId = Cookies.get('userDetailId')
                      this.$Modal.confirm({
                        title: 'Confirm',
                        content: '<p>Are you sure you want to Delete?</p>',
                        onOk: function() {
                          self.handleDelete(params.row.id)
                        }
                      })
                    }
                  }
                },[
                  h('Tooltip', {
                    props: {
                      content: 'Delete',
                      placement: 'top'
                    }
                  }, [
                    h('Icon', {
                      props: {
                        type: 'trash-b'
                      },
                      class: {
                        'iconCustom': true,
                        'deletet': true
                      }
                    })
                  ])
                ], '')
            ])
          }
        }
      ],
      tdata: {
        total: 0,
        data: []
      },
      loading: false,
      cpage: 1,
      limit: 10,
      skip: 0,
      webOptions: [],
      statusOptions: [{
        label: 'ACTIVE',
        value: 'true'
      },{
        label: 'INACTIVE',
        value: 'false'
      }]
    }
  },
  methods: {
    handleSorting (item) {
      let inx = _.findIndex(this.fcolumns, {key: item.key})
      this.fcolumns[inx].sortType = item.order
      if (item.order !== 'normal') {
        for (let [minx, obj] of this.fcolumns.entries()) {
          if (obj.hasOwnProperty('sortType') && minx !== inx) {
            obj.sortType = 'normal'
          }
        }
      }
      this.cpage = 1
      this.skip = this.cpage * this.limit - this.limit
      this.init(item)
    },
    handleSearch () {
      if (this.filterobj.status !== '' || this.filterobj.sku !== '' || this.filterobj.website !== '') {
        this.cpage = 1
        this.skip = this.cpage * this.limit - this.limit
        this.init()
      }
    },
    handleFileterReset () {
      this.filterobj.website = ''
      this.filterobj.sku = ''
      this.filterobj.status = ''
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
    handleWebtoolClick(id, status, inx) {
      axios.patch(webtoolsUrl + '/' + id, {status: !status}).then(res => {
          this.tdata.data[inx].status = !status
          this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
          this.init()
      }).catch(err => {
          this.$Notice.error({ title: 'Error', desc: '', duration: 3})
      })
    },
    handleDelete (iid) {
      let finx = _.findIndex(this.tdata.data, {id: iid})
      if (finx !== undefined && finx >= 0) {
        axios.delete(webtoolsUrl + '/' + iid).then(res => {
          this.tdata.data.splice(finx, 1)
          this.tdata.total -= 1
          this.$Notice.success({ title: 'Success!', desc: 'Successfully Deleted.', duration: 3})
          let skp = this.skip + (this.limit - 1)
          let userId = Cookies.get('userDetailId')
          axios.get(webtoolsUrl + '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + skp + '&$limit=1').then(res => {
            if (res.data.data.length > 0) {
              this.tdata.data.push(res.data.data[0])
            } else {
              this.tdata.data.total -= 1
            }
          })
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error!', desc: 'Not Deleted.', duration: 3})
        })
      }
    },
    async init (item) {
      this.loading = true
      let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
        let query = ''
        if (item === undefined) {
          query = '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit
        } else {
          query = '?userId=' + userId + '&$sort['+ item.key +']='+((item.order == 'asc') ? '1' : '-1') + '&$skip=' + this.skip + '&$limit=' + this.limit
        }
        if (this.filterobj.website !== '') {
          query += '&website=' + this.filterobj.website
        }
        if (this.filterobj.sku !== '') {
          query += '&sku=' + this.filterobj.sku
        }
        if (this.filterobj.status !== '') {
          query += '&status=' + JSON.parse(this.filterobj.status)
        }
        
        this.tdata = await axios.get(webtoolsUrl + query).then(res => {
          for (let item of res.data.data) {
            let finx = _.findIndex(this.webOptions, {value: item.website})
            item.websiteName = this.webOptions[finx].label          
          }
          return res.data
        })

        this.loading = false
      }
      this.loading = false
    }
  },
  async mounted () {
    let userId = Cookies.get('userDetailId')

    await axios.get(baseUrl + '/project-configuration?userId=' + userId).then(res => {
      for (let item of res.data.data) {
        this.webOptions.push({label: item.websiteName, value: item.id})
      }
      this.$Spin.hide();
    }).catch(err => {
      this.$Spin.hide();
    })
    
    this.init()
  }
}
</script>

<style>
  .iconCustom {
    font-size: 27px;
    color: slategray;
    /*margin-right: 5px; */
  }
  .iconlink {
    display: inline-block;
    padding: 2px 7px;
    /*border-radius: 5px; */
  }
  .editt:hover {
    color: #2d8cf0;
  }
  .deletet:hover {
    color: red;
  }
  .ivu-table td, .ivu-table th {
    min-width: 173px !important;
  }
  .ivu-table table {
      table-layout: auto !important;
  }
</style>
<style scoped>
  .webtools {
     padding: 40px;
  }
</style>