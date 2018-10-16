<template>
  <div class="tags">
    <Row type="flex" justify="end" class="code-row-bg mb-10">
        <Col span="20">
            <h2>Product Tags</h2>
        </Col>
        <Col span="4" class="align-right">
            <Button type="primary" @click="handleBack">
                <Icon type="chevron-left"></Icon>
                Back
            </Button>
        </Col>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <!-- <Col :span="8">
          <Input v-model.trim="filterobj.product_name" placeholder="Search by Product Name" filterable @on-blur="handleSearch"></Input>
      </Col> -->
      <Col :span="6">
          <Input v-model.trim="filterobj.sku" placeholder="Search by SKU" filterable @on-blur="handleSearch"></Input>
      </Col>
      <Col :span="6">
        <Row>
          <Col :span="(filterobj.product_name === '' && filterobj.sku === '') ? 24 : 12">
            <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
          </Col>
          <Col :span="12" v-if="filterobj.product_name !== '' || filterobj.sku !== ''">
            <Button type="ghost" shape="circle" style="font-size:14px;" icon="ios-reload" long @click="handleFileterReset">Reset</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
        
      <Table :loading="loading" :columns="ptcolumns" :data="ptdata.data" stripe  @on-sort-change="handleSorting"></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page v-if="ptdata.total > 10" :total="ptdata.total" :current="cpage" show-sizer show-total :page-size="limit" @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
        <div v-else-if="ptdata.total === 1">Total {{ptdata.total}} item</div>
        <div v-else>Total {{ptdata.total}} items</div>
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
let tagsUrl = config.baseURL + '/tags'
let productMappingUrl = config.baseURL + '/productTags'
let productApiUrl = config.productApiUrl
let productImageUrl = "https://res.cloudinary.com/flowz/image/upload/v1531481668/websites/images/no-image.png"

export default {
  name: 'producttags',
  props: {
    tdata: Object
  },
  data () {
    return {
      filterobj: {
        product_name: '',
        sku: ''
      },
      ptcolumns: [
        {
          title: 'Product Name',
          align: 'center',
          render: (h, params) => {
            let productDetails = _.find(this.productOptions, {id: params.row.product_id})
            let resp = productDetails.label
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'SKU',
          align: 'center',
          render: (h, params) => {
            let productDetails = _.find(this.productOptions, {id: params.row.product_id})
            let resp = productDetails.sku
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Action',
          width: 150,
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
                ], ''),
              ]);
          }
        }
      ],
      ptdata: {
        total: 0,
        data: []
      },
      loading: false,
      cpage: 1,
      limit: 10,
      skip: 0,
      webOptions: [],
      productOptions: []
    }
  },
  methods: {
    handleSorting (item) {
      let inx = _.findIndex(this.ptcolumns, {key: item.key})
      this.ptcolumns[inx].sortType = item.order
      if (item.order !== 'normal') {
        for (let [minx, obj] of this.ptcolumns.entries()) {
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
      this.cpage = 1
      this.skip = this.cpage * this.limit - this.limit
      this.init()
    },
    handleFileterReset () {
      this.filterobj.product_name = ''
      this.filterobj.sku = ''
      this.init()
    },
    pageChange (page) {
      this.cpage = page
      this.skip = page * this.limit - this.limit
      this.init()
    },
    handleBack () {
      this.$emit('updateTag', {type: 'taglist'})
    },
    psizeChange (size) {
      this.cpage = 1
      this.limit = size
      this.init()
    },
    handleDelete (iid) {
      let finx = _.findIndex(this.ptdata.data, {id: iid})
      if (finx !== undefined && finx >= 0) {
        axios.delete(productMappingUrl + '/' + iid).then(res => {
          this.ptdata.data.splice(finx, 1)
          this.ptdata.total -= 1
          this.$Notice.success({ title: 'Success!', desc: 'Successfully Deleted.', duration: 3})
          let skp = this.skip + (this.limit - 1)
          
          let query = '?tag_id=' + this.ptdata.data[finx].id + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit

          axios.get(productMappingUrl + query).then(res => {
          	if (res.data.data.length > 0) {
          		this.ptdata.data.push(res.data.data[0])
          	} else {
          		this.ptdata.data.total -= 1
          	}
          })
        }).catch(err => {
          this.$Notice.error({ title: 'Error!', desc: 'Not Deleted.', duration: 3})
        })

        //change in elasticsearch product
        let websiteDetails = _.find(this.webOptions, {value: this.tdata.website});
        axios.get(tagsUrl + '/' + this.ptdata.data[finx].tag_id).then(tagRes => {
            axios.get(
                productApiUrl + '?_id=' + this.ptdata.data[finx].product_id,
                { headers: { 'vid': websiteDetails.vid } }
            )
            .then(productRes => {
                let tag_list = productRes.data.hits.hits[0]._source.tags;

                if(tag_list.includes(tagRes.data.tag_name)) {
                    if(Array.isArray(tag_list) && tag_list.length > 0) {
                        const index = tag_list.indexOf(tagRes.data.tag_name);
                        tag_list.splice(index, 1);
                    }

                    let esData = { "supplier_id":productRes.data.hits.hits[0]._source.supplier_id, "tags":tag_list };
                    axios({
                        method: 'PATCH',
                        url: productApiUrl+"/"+this.ptdata.data[finx].product_id,
                        data: esData,
                        headers: {'vid':websiteDetails.vid}
                    }).then(res3 => {
                        this.$Spin.hide();
                        this.$Notice.success({title: 'Success!!', desc: 'Product removed from ES.', duration: 2})
                    }).catch(err => {
                        this.$Spin.hide();
                        this.$Notice.error({title: 'Error!!', desc: 'Not removed from ES.', duration: 2})
                    })
                }
            })
        })
        //end elasticsearch
      }
    },
    async init (item) {
      this.loading = true
      let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
        let query = ''
        if (item === undefined) {
          query = '?tag_id=' + this.tdata.id + '&$skip=' + this.skip + '&$limit=' + this.limit
        } else {
          query = '?tag_id=' + this.tdata.id +'&$sort['+ item.key +']='+((item.order == 'asc') ? '1' : '-1') + '&$skip=' + this.skip + '&$limit=' + this.limit
        }
        // if (this.filterobj.product_name !== '') {
        //   let productDetails = _.find(this.productOptions, {label: this.filterobj.product_name})
        //   query += '&product_id=' + productDetails.id
        // }
        if (this.filterobj.sku !== '') {
          query += '&sku=' + JSON.parse(this.filterobj.sku)
        }

        let websiteDetails = _.find(this.webOptions, {value: this.tdata.website})
        
        let tempPtdata = await axios
          .get(productMappingUrl + query)
          .then(res => {
              return res.data;
          })

        let romoveData = [];
        for(let item of tempPtdata.data) {
          await axios.get(
            productApiUrl + '?_id=' + item.product_id,
            { headers: { 'vid': websiteDetails.vid } }
          )
          .then(
            result=> {
              if(result.data.hits.hits.length > 0) {
                let productData = result.data.hits.hits[0];
                this.productOptions.push({
                  label: productData._source.product_name,
                  id: productData._id,
                  sku: productData._source.sku
                })
              }
              else {
                romoveData.push(item);
              } 
            }
          )
        }

        tempPtdata.data = _.difference(tempPtdata.data, romoveData);
        tempPtdata.total = tempPtdata.data.length;
        this.ptdata = tempPtdata;

        if(Array.isArray(romoveData) && romoveData.length >0) {
            for(let item of romoveData) {
                axios.delete(productMappingUrl + '/' + item.id).then(res => {
                  return true;
                }).catch(err => {
                  this.$Notice.error({ title: 'Error!', desc: 'Old products can not be deleted.', duration: 3})
                })
            }
        }

        this.loading = false
      }
      this.loading = false
    }
  },
  async mounted () {
    this.loading = true
    let userId = Cookies.get('userDetailId')
    await axios.get(baseUrl + '/project-configuration?userId=' + userId).then(res => {
      for (let item of res.data.data) {
        if(item.configData != 'undefined' && Array.isArray(item.configData)) {
          this.webOptions.push(
            {
              label: item.websiteName, 
              value: item.id, 
              vid: item.configData[1].projectSettings[0].ProjectVId.vid
            }
          )
        }
      }
      this.$Spin.hide();
    }).catch(err => {
      this.$Spin.hide();
    })

    await this.init()
  }
}
</script>

<style>
  .iconCustom {
    font-size: 27px;
    color: slategray;
  }
  .iconlink {
    display: inline-block;
    padding: 2px 7px;
  }
  .ivu-table td, .ivu-table th {
    min-width: 173px !important;
  }
  .ivu-table table {
    table-layout: auto !important;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .align-right {
    text-align: right;
  }
</style>
<style scoped>
  .tags {
    padding: 40px;
  }
</style>
