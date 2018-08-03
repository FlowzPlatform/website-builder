<template>
  <div class="tags">
    <Row type="flex" justify="end" class="code-row-bg mb-10">
        <Col span="20">
            <h2>Product Mapping</h2>
        </Col>
        <Col span="4" class="align-right">
            <Button type="primary" @click="handleBack">
                <Icon type="chevron-left"></Icon>
                Back
            </Button>
        </Col>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <Col :span="8">
          <Input v-model.trim="filterobj.product_name" placeholder="Search by Product Name" filterable @on-blur="handleSearch"></Input>
      </Col>
      <Col :span="8">
          <Input v-model.trim="filterobj.sku" placeholder="Search by SKU" filterable @on-blur="handleSearch"></Input>
      </Col>
      <Col :span="8">
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
        
      <Table :loading="loading" :columns="pmcolumns" :data="pdata.data" stripe  @on-sort-change="handleSorting"></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page v-if="pdata.total > 10" :total="pdata.total" :current="cpage" show-sizer show-total :page-size="limit" @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
        <div v-else-if="pdata.total === 1">Total {{pdata.total}} item</div>
        <div v-else>Total {{pdata.total}} items</div>
      </div>
   </Row>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'
import moment from 'moment'
import _ from 'lodash'
import Cookies from 'js-cookie'
// import elasticsearch from 'elasticsearch'

let baseUrl = config.baseURL
let tagsUrl = config.baseURL + '/tags'
let productmappingUrl = config.baseURL + '/productTags'
let productApiUrl = config.productApiUrl
//let productLocalApiUrl = config.productLocalApiUrl
let productApiImageUrl = config.productApiImageUrl

export default {
  name: 'productmapping',
  props: {
    tdata: Object
  },
  data () {
    return {
      filterobj: {
        product_name: '',
        sku: ''
      },
      pmcolumns: [
        {
          title: 'Product Name',
          align: 'center',
          render: (h, params) => {
            let resp = params.row._source.product_name
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Product Image',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: productApiImageUrl+params.row._source.default_image,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: productApiImageUrl+params.row._source.default_image,
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
          title: 'SKU',
          align: 'center',
          render: (h, params) => {
            let resp = params.row._source.sku
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
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      class: {
                          'tagButton': true,
                      },
                      on: {
                          click: () => {
                              this.saveData(params.row)
                          }
                      }
                  }, 'Add to Tag'),
              ]);
          }
        }
      ],
      pdata: {
        total: 0,
        data: []
      },
      loading: false,
      cpage: 1,
      limit: 10,
      skip: 0,
      webOptions: [],
      tagData: []
    }
  },
  methods: {
    handleSorting (item) {
      let inx = _.findIndex(this.pmcolumns, {key: item.key})
      this.pmcolumns[inx].sortType = item.order
      if (item.order !== 'normal') {
        for (let [minx, obj] of this.pmcolumns.entries()) {
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
    psizeChange (size) {
      this.cpage = 1
      this.limit = size
      this.init()
    },
    handleBack () {
      this.$emit('updateTag', {type: 'taglist'})
    },
    async saveData (productData) {
      let pmData = {};
      pmData.tag_id = this.tdata.id;
      pmData.product_id = productData._id;
      pmData.sku = productData._source.sku;
      pmData.website = this.tdata.website;

      if (pmData.product_id != '' && pmData.tag_id != '') {
          let resp = await (axios.get(productmappingUrl + '?tag_id=' + this.tdata.id +'&product_id=' + productData._id).then(res => {
              return res.data.data
          }).catch(err => {
              return []
          }))

          if (resp.length > 0) {
              this.$Notice.error({title: 'Error!!', desc: 'This product already mapped.', duration: 2})
          } else {
              this.$Spin.show();
              pmData.createdAt = new Date()

              //change in elasticsearch product
              // axios.get(tagsUrl + '/' + this.tdata.id).then(res => {
              //     axios.get(productApiUrl + '/' + productData._id).then(res2 => {
              //         let tag_list = res2.data._source.tags;
                      
              //         if(tag_list.includes(res.data.tag_name)) {
              //             this.$Spin.hide();
              //             this.$Notice.error({title: 'Error!!', desc: 'Tag already mapped.', duration: 2})
              //         }
              //         else {
              //             let websiteDetails = _.find(this.webOptions, {value: this.tdata.website});
              //             let esData;
              //             if(tag_list !== undefined && tag_list != '') {
              //               //esData =  { "doc":{ "tags":tag_list+"|"+res.data.tag_name } };
              //               esData =  { "supplier_id":productData._source.supplier_id, "tags":tag_list+"|"+res.data.tag_name };
              //             }
              //             else {
              //               //esData =  { "doc":{ "tags":res.data.tag_name } };
              //               esData =  { "supplier_id":productData._source.supplier_id, "tags":res.data.tag_name };
              //             }

              //             // axios({
              //             //     method: 'POST',
              //             //     url: productLocalApiUrl+"/"+productData._id+"/_update?pretty",
              //             //     data: esData
              //             axios({
              //                 method: 'PATCH',
              //                 url: productApiUrl+"/"+productData._id,
              //                 data: esData,
              //                 headers: {'vid':websiteDetails.vid}
              //             }).then(res3 => {
              //                 this.$Spin.hide();
              //                 this.$Notice.success({title: 'Success!!', desc: 'Tag mapped to ES.', duration: 2})
              //             }).catch(err => {
              //                 this.$Spin.hide();
              //                 this.$Notice.error({title: 'Error!!', desc: 'Not mapped to ES.', duration: 2})
              //             })
              //         }
              //     })
              // })
              //end elasticsearch

              axios.post(productmappingUrl, pmData).then(res => {
                this.$Spin.hide();
                this.$Notice.success({title: 'Success!!', desc: '', duration: 2})
              }).catch(err => {
                this.$Spin.hide();
                this.$Notice.error({title: 'Error!!', desc: 'Not saved.', duration: 2})
              })
          }
      }
      else {
          this.$Notice.error({title: 'Error!!', desc: 'Internal server error.', duration: 2})
      }
    },
    async init (item) {
      this.loading = true
      let userId = Cookies.get('userDetailId')
      if (userId !== undefined && userId !== '') {
        let query = ''
        if (item === undefined) {
          query = '?$skip=' + this.skip + '&$limit=' + this.limit
        } else {
          query = '?&$sort['+ item.key +']='+((item.order == 'asc') ? '1' : '-1') + '&$skip=' + this.skip + '&$limit=' + this.limit
        }
        if (this.filterobj.product_name !== '') {
          query += '&product_name=' + this.filterobj.product_name
        }
        if (this.filterobj.sku !== '') {
          query += '&sku=' + this.filterobj.sku
        }
        console.log("websiteid",this.tdata.website);
        console.log("this.webOptions",this.webOptions)
        let websiteDetails = _.find(this.webOptions, {value: this.tdata.website})
        this.pdata = await axios
            .get(
              productApiUrl + query, 
              { headers: { 'vid': websiteDetails.vid } }
            )
            .then(res => {
                let result = [];
                result.data = res.data.hits.hits;
                result.total = res.data.hits.total;
                return result;
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
        this.webOptions.push({label: item.websiteName, value: item.id, vid: item.configData[1].projectSettings[0].ProjectVId.vid})
      }
      this.$Spin.hide();
    }).catch(err => {
    console.log("error",err)
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
    margin-bottom:10px;
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
