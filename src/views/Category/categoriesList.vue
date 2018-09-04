<template>
  <div class="categories">
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
      <Table :loading="loading" :columns="tcolumns" :data="tdata.data" stripe  @on-sort-change="handleSorting"></Table>
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
import _ from 'lodash'
import Cookies from 'js-cookie';

let baseUrl = config.baseURL
let categoryUrl = baseUrl + '/category'

export default {
  name: 'categories',
  props: {
    fdata: Object
  },
  data () {
    return {
      formItem: {
          website: '',
          name: '',
          slug:'',
          count: '',
          status: true,
          homepage: false,
          createdAt: '',
          userId: Cookies.get('userDetailId')
      },
      filterobj: {
        website: ''
      },
      tcolumns: [
        {
          title: 'Category Name',
          align: 'center',
          render: (h, params) => {
            let resp = params.row.name
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Category Count',
          align: 'center',
          render: (h, params) => {
            let resp = params.row.count
            if (resp === '') {
              resp = '-'
            }
            return h('div', resp)
          }
        },
        {
          title: 'Home Category',
          key: 'homepage',
          align: 'center',
          width: 300,
          render: (h, params) => {
            const row = params.row;
            const color = row.homepage ? 'green' : 'red';
            const text = row.homepage ? 'Yes' : 'No';

            return h('Tag', {
                props: {
                    type: 'dot',
                    color: color
                },
                nativeOn: { 
                  click: async() => {
                    let res = await this.handleHomeClick(params.row.id, params.row.homepage)
                    if (res.status === 'success') {
                    		axios.patch(categoryUrl + '/' + params.row.id, {homepage: !params.row.homepage}).then(res => {
									        this.formItem.homepage = !params.row.homepage
									        this.updateFlag(params.row.id,this.formItem.homepage)
									      }).catch(err => {
									        console.log('Error', err)
									        this.$Notice.error({ title: 'Error', desc: '', duration: 2})
									      })
                    } 
                    else {
                    	  this.$Notice.error({ title: 'Error', desc: '', duration: 2})
                    }
                  } 
                }
            }, text)
          }
        },
        {
          title: 'Status',
          key: 'status',
          align: 'center',
          width: 300,
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
                  click: async() => {
                    let res = await this.handleHomeClick(params.row.id, params.row.status)
                    if (res.status === 'success') {
                    		axios.patch(categoryUrl + '/' + params.row.id, {status: !params.row.status}).then(res => {
									        this.formItem.status = !params.row.status
									        this.updateFlag(params.row.id,this.formItem.status)
									      }).catch(err => {
									        console.log('Error', err)
									        this.$Notice.error({ title: 'Error', desc: '', duration: 2})
									      })
                    } 
                    else {
                    	  this.$Notice.error({ title: 'Error', desc: '', duration: 2})
                    }
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
	            	h('a', {
	            		class: {
	            			'iconlink': true
	            		},
	            		on: {
	            			click: () => {
	            				this.$emit('updateDocument', {type: 'editCategory', categorySlug: params.row.slug, website: this.filterobj.website})
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
        categoriesList: [],
        data: []
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
    stringToSlug (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaaeeeeiiiioooouuuunc------";

        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes
            .replace(/^-+/, "") // trim - from start of text
            .replace(/-+$/, ""); // trim - from end of text

        return str;
    },
    async handleHomeClick(id, homepage) {
      this.loading = true
    	let userId = Cookies.get('userDetailId')
    	let resp = await axios.get(categoryUrl + '?id=' + id).then(res => {
    		if (res.data.data.length > 0) {
    			return {status: 'success', msg: 'found', data: res.data.data}
    		} else {
    			return {status: 'success', msg: 'notfound'}
    		}
    	}).catch(err => {
    		return {status: 'error'}
      })

    	return resp
    },
    async updateFlag(id, homepage) {
      axios.patch(categoryUrl + '/' + id, {'homepage':homepage})
      .then(res => {
        this.$Notice.success({ title: 'Success!', desc: '', duration: 2})
        this.init()
      })
      .catch(err => {
        console.log('Error', err)
      })
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
        else {
          this.tdata.data = []
          this.tdata.total = 0
        }

        if(vid) {
            let query = '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit + '&website=' + this.filterobj.website;

            this.tdata.categoriesList = await axios.get(config.menuCategoriesUrl + query, {
                headers: {
                    Authorization: Cookies.get('auth_token'),
                    vid: vid
                }
            })
            .then((res) => {
                return res.data.aggregations.group_by_category.buckets;
            })
            .catch((e) => {
                console.log(e);
            })

            if (!_.isEmpty(this.tdata.categoriesList)) {
              for(let i = 0; i < this.tdata.categoriesList.length; i++) {
                  let slug = this.stringToSlug(this.tdata.categoriesList[i].key);
                  let catDetails = await axios.get(categoryUrl + '?slug=' + slug + '&website=' + this.filterobj.website).then(res => {
                      if(res.data.total == 1) {
                          return res.data.data[0]  
                      }
                      else {
                          return 0
                      }             
                  }).catch(err => {
                      console.log(err);
                  })

                  this.formItem.createdAt = new Date()
                  this.formItem.name = this.tdata.categoriesList[i].key
                  this.formItem.slug = slug;
                  this.formItem.count = this.tdata.categoriesList[i].doc_count
                  this.formItem.website = this.filterobj.website
                  if(catDetails == 0) {
                      axios.post(categoryUrl, this.formItem).then(res => {
                        //this.$Notice.success({title: 'Success', desc: 'Successfully saved.', duration: 2})
                      }).catch(err => {
                        console.log('error', err)
                      })
                  }
              }
            }

            this.tdata = await axios.get(categoryUrl + query)
              .then((res) => {
                  this.tdata.total = res.data.total;
                  return res.data;
              })
              .catch((e) => {
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
.categories {
  padding: 40px;
}
</style>
