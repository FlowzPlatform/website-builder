<template>
  <div class="ecatalogs">
    <Row>
      <div  style="padding-bottom: 10px;">
        <h2>Ecatalogs List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <Col :span="8">
        <Select v-model="filterobj.category" placeholder="Search by Category" filterable @on-change="handleSearch">
          <Option v-for="item in categoryOptions" :value="item.value" :key="item.value">{{ item.weblabel }}</Option>
        </Select>
      </Col>
      <Col :span="8">
        <Select v-model="filterobj.status" placeholder="Search by Status" filterable @on-change="handleSearch">
          <Option v-for="item in statusOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col :span="8">
        <Row>
          <Col :span="(filterobj.category === '' && filterobj.status === '') ? 24 : 12">
            <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
          </Col>
          <Col :span="12" v-if="filterobj.category !== '' || filterobj.status !== ''">
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
let ecatalogsUrl = config.baseURL + '/ecatalogs'
let ecatalogCategoryUrl = config.baseURL + '/ecatalog-category'

export default {
  name: 'ecatalogs',
  data () {
    return {
      filterobj: {
        category: '',
        status: ''
      },
      fcolumns: [
        {
          title: 'Ecatalog Name',
          align: 'center',
          render: (h, params) => {
            let resp = params.row.ecatalog_name
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Ecatalog Image',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: params.row.ecatalog_image,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: params.row.ecatalog_image,
                    width: 130,
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
          key: 'website'
        },
        {
          title: 'Ecatalog Category',
          width: 220,
          key: 'ecatalog_category',
          sortable: true,
          sortType: 'normal',
          render: (h, params) => {
            let inx = _.findIndex(this.categoryOptions, {value: params.row.ecatalog_category})
            let tName = ''
            if (inx !== -1) {
              tName = this.categoryOptions[inx].label
            } else {
              tName = '-'
            }
            return h('div', tName)
          }
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
            const color = row.ecatalog_status ? 'green' : 'red';
            const text = row.ecatalog_status ? 'ACTIVE' : 'INACTIVE';

            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                },
                nativeOn: { 
                  click: () => { 
                    this.handleEcatalogClick(params.row.id, params.row.ecatalog_status, params.index) 
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
                      this.$emit('updateDocument', {type: 'ecatalog', id: params.row.id})
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
      categoryOptions: [],
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
      if (this.filterobj.status !== '' || this.filterobj.category !== '') {
        this.cpage = 1
        this.skip = this.cpage * this.limit - this.limit
        this.init()
      }
    },
    handleFileterReset () {
      this.filterobj.category = ''
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
    handleEcatalogClick(id, status, inx) {
      if(!status) {
        axios.get(ecatalogCategoryUrl + '/' + this.tdata.data[inx].ecatalog_category).then(res => {
          if (res.data.status) {
            axios.patch(ecatalogsUrl + '/' + id, {ecatalog_status: !status}).then(res => {
              this.tdata.data[inx].ecatalog_status = !status
              this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
              this.init()
            })
          } else {
            this.$Notice.warning({ title: 'Warning!!', desc: 'You want to first active ecatalogcategory <b><u>' + res.data.fc_name + '</u></b>.', duration: 5})
          }
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error', desc: '', duration: 3})
        })
      } else {
        axios.patch(ecatalogsUrl + '/' + id, {ecatalog_status: !status}).then(res => {
          this.tdata.data[inx].ecatalog_status = !status
          this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
          this.init()
        }).catch(err => {
          console.log('Error', err)
          this.$Notice.error({ title: 'Error', desc: '', duration: 3})
        })
      }
    },
    handleDelete (iid) {
      let finx = _.findIndex(this.tdata.data, {id: iid})
      if (finx !== undefined && finx >= 0) {
        axios.delete(ecatalogsUrl + '/' + iid).then(res => {
          this.tdata.data.splice(finx, 1)
          this.tdata.total -= 1
          this.$Notice.success({ title: 'Success!', desc: 'Successfully Deleted.', duration: 3})
          let skp = this.skip + (this.limit - 1)
          let userId = Cookies.get('userDetailId')
          axios.get(ecatalogsUrl + '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + skp + '&$limit=1').then(res => {
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
        if (this.filterobj.category !== '') {
          query += '&ecatalog_category=' + this.filterobj.category
        }
        if (this.filterobj.status !== '') {
          query += '&ecatalog_status=' + JSON.parse(this.filterobj.status)
        }
        
        this.tdata = await axios.get(ecatalogsUrl + query).then(res => {
          for (let item of res.data.data) {
            item.website = 'Loading....'
          }
          return res.data
        })
        this.loading = false
        for (let [inx, mitem] of this.tdata.data.entries()) {
          axios.get(ecatalogCategoryUrl + '/' + mitem.ecatalog_category).then(res => {
            let finx = _.findIndex(this.webOptions, {value: res.data.website})
            if (finx !== '' && finx !== -1) {
              this.tdata.data[inx].website = this.webOptions[finx].label
              this.tdata.data[inx].websiteId = this.webOptions[finx].value
            } else {
              this.tdata.data[inx].website = '-'
              this.tdata.data[inx].websiteId = '-'
            }
          }).catch(err => {
            this.tdata.data[inx].website = '-'
            this.tdata.data[inx].websiteId = '-'
          })
        }
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

    axios.get(ecatalogCategoryUrl + '?userId=' + userId + '&$paginate=false').then(res=> {
      for(let item of res.data) {
        let websiteName = _.find(this.webOptions, {value: item.website})
        this.categoryOptions.push({
          label: item.fc_name,
          value: item.id,
          weblabel: item.fc_name + " [ website : " + websiteName.label + " ]"
        })
      }
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
.ecatalogs {
  padding: 40px;
}
</style>
