<template>
  <div class="tags">
    <Row>
      <div  style="padding-bottom: 10px;">
        <h2>Category List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <Col :span="8">
        <Select v-model="filterobj.website" placeholder="Search by Website" filterable @on-change="handleSearch">
          <Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col :span="8">
        <Row>
          <Col :span="(filterobj.website === '') ? 24 : 12">
            <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
          </Col>
          <Col :span="12" v-if="filterobj.website !== ''">
            <Button type="ghost" shape="circle" style="font-size:14px;" icon="ios-reload" long @click="handleFileterReset">Reset</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Table :loading="loading" :columns="tcolumns" :data="tdata.categoriesList" stripe  @on-sort-change="handleSorting"></Table>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'
import _ from 'lodash'
import Cookies from 'js-cookie';

let baseUrl = config.baseURL
// let tagsUrl = config.baseURL + '/tags'

export default {
  name: 'categories',
  props: {
    fdata: Object
  },
  data () {
    return {
      filterobj: {
        website: ''
      },
      tcolumns: [
        {
          title: 'Category Name',
          align: 'center',
          render: (h, params) => {
            let resp = params.row.categoryName
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Category Icon',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                attrs: {
                  href: params.row.tag_icon,
                  target: '_blank'
                }
              }, [
                h('img', {
                  attrs: {
                    src: params.row.tag_icon,
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
          title: 'Action',
          key: 'action',
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
	            				this.$emit('updateDocument', {type: 'editCategory', categoryName: params.row.categoryName, website: this.filterobj.website})
	            			}
	            		}
	            	},[
	            		h('Icon', {
	            			props: {
	            				type: 'compose'
	            			},
	            			class: {
	            				'iconCustom': true,
	            				'editb': true
	            			}
	            		})
	            	], '')
            ])
          }
        }
      ],
      tdata: {
        total: 0,
        data: [],
        categoriesList: []
      },
      loading: false,
      cpage: 1,
      limit: 10,
      skip: 0,
      categoryOptions: [],
      webOptions: []
    }
  },
  methods: {
    handleSorting (item) {
      let inx = _.findIndex(this.tcolumns, {key: item.key})
      this.tcolumns[inx].sortType = item.order
      if (item.order !== 'normal') {
        for (let [minx, obj] of this.tcolumns.entries()) {
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
      if (this.filterobj.website !== '') {
        this.cpage = 1
        this.skip = this.cpage * this.limit - this.limit
        this.init()
      }
    },
    handleFileterReset () {
      this.filterobj.website = ''
      this.init()
    },
    async init (item) {
      this.loading = true
      let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
        let vid = false;
        if (this.filterobj.website != undefined && this.filterobj.website !== '') {
          let websiteDetails = _.find(this.webOptions, {value: this.filterobj.website});
          vid = websiteDetails.vid;
        }
        // else {
        //   this.$Notice.error({title: 'Error', desc: 'Please select website.', duration: 2})
        // }

        if(vid) {
          await axios.get(config.menuCategoriesUrl, {
              headers: {
                  Authorization: Cookies.get('auth_token'),
                  vid: vid
              }
          })
          .then((res) => {
              let menuJson = [];
              let categories = res.data.aggregations.group_by_category.buckets;

              for(let i = 0; i < categories.length; i++){
                let urlName = categories[i].key.toLowerCase().replace(/ /g, '-');

                this.tdata.categoriesList.push({
                  categoryName: categories[i].key.toUpperCase(),
                });								
              }
          })
          .catch((e) => {
              this.$Notice.error({ title: 'Error', desc: 'Failed! Please try again.', duration: 2})
              console.log(e);
          })
        } 
        else if (this.filterobj.website != undefined && this.filterobj.website !== '') {
            this.$message({
              showClose: true,
              message: 'Please set "VID" in Project settings to get all of your category list.',
              type: 'info'
            });
        }

        this.loading = false
        for (let [inx, mitem] of this.tdata.data.entries()) {
          axios.get(tagcategoryUrl + '/' + mitem.tag_category).then(res => {
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
        this.webOptions.push({label: item.websiteName, value: item.id, vid: item.configData[1].projectSettings[0].ProjectVId.vid})
      }
      this.$Spin.hide();
    }).catch(err => {
      this.$Spin.hide();
    })

    if (this.fdata != undefined && this.fdata.website !== '') {
        this.filterobj.website = this.fdata.website;
    }

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
.tags {
  padding: 40px;
}
</style>
