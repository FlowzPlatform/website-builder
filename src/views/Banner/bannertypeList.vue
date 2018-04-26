<template>
  <div class="bannertype">
    <Row>
      <div  style="padding-bottom: 10px;">
      	<h2>Categories List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
    	<Col :span="6">
    		<Input v-model.trim="filterobj.name" icon="search" placeholder="Search by name...." @on-enter="handleSearch" @on-change="handleBlank"></Input>
    	</Col>
    	<Col :span="6">
    		<Select v-model="filterobj.website" placeholder="Search by Website" filterable @on-change="handleSearch">
        	<Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
    		</Select>
    	</Col>
    	<Col :span="6">
    		<Select v-model="filterobj.status" placeholder="Search by Status" filterable @on-change="handleSearch">
        	<Option v-for="item in statusOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
    		</Select>
    	</Col>
    	<Col :span="6">
    		<Row>
    			<Col :span="(filterobj.name === '' && filterobj.website === '' && filterobj.status === '') ? 24 : 12">
    				<Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
    			</Col>
    			<Col :span="12" v-if="filterobj.name !== '' || filterobj.website !== '' || filterobj.status !== ''">
    				<Button type="ghost" shape="circle" style="font-size:14px;" icon="ios-reload" long @click="handleFileterReset">Reset</Button>
    			</Col>
    		</Row>
    	</Col>
    </Row>
    <Row>
      <Table :loading="loading" :columns="btcolumns" :data="btdata.data" stripe @on-sort-change="handleSorting"></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page v-if="btdata.total > 10" :total="btdata.total" :current="cpage" show-sizer show-total :page-size="limit" @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
        <div v-else-if="btdata.total === 1">Total {{btdata.total}} item</div>
        <div v-else>Total {{btdata.total}} items</div>
      </div>
   </Row>
  </div>
</template>

<script>
// import bannertypeModel from '@/api/bannertype'
import axios from 'axios'
import config from '../../config'
import moment from 'moment'
import _ from 'lodash'
import Cookies from 'js-cookie';

let baseUrl = config.baseURL
let bannertypeUrl = config.baseURL + '/bannertype'
let bannersUrl = config.baseURL + '/banners'

export default {
  name: 'bannertype',
  data () {
    return {
    	filterobj: {
    		name: '',
    		website: '',
    		status: ''
    	},
      btcolumns: [
        {
          title: 'Category Name',
          key: 'bt_name',
          sortable: true,
          sortType: 'normal'
          // sortMethod: this.handleSorting
          // align: 'center'
        },
        {
          title: 'Website',
          key: 'website_id',
          // width: 100,
          // sortable: true,
          // sortType: 'normal',
          align: 'center',
          render: (h, params) => {
            let inx = _.findIndex(this.webOptions, {value: params.row.website_id})
            let wName = ''
            if( inx === -1 ) {
            	wName = '-'
            } else {
            	wName = this.webOptions[inx].label
            }
            return h('div', wName)
          }
        },
        {
          title: 'Updated Date',
          key: 'createdAt',
          align: 'center',
          width: 300,
          sortable: true,
          sortType: 'desc',
          render: (h, params) => {
            return h('div', moment(params.row.createdAt).format('LL'))
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
                    let res = await this.handleTagClick(params.row.id, params.row.status, params.index)
                    if (res.status === 'success') {
                    	if (res.msg === 'found') {
                  		  this.$Modal.confirm({
                          title: 'Confirm',
                          content: '<p><b style="color: #f90;">'+ res.data.length + ((res.data.length === 1) ? ' Banner' : ' Banners') +' </b> found with <b>'+ params.row.bt_name +'</b>. </p><p>Are you sure you want to '+(params.row.status ? 'INACTIVE': 'ACTIVE')+' all?</p>',
                          loading: true,
                          onOk: async () => {
                          	for (let item of res.data) {
                          		let s = await axios.patch(bannersUrl + '/' + item.id, {banner_status: !params.row.status})
                          	}
                          	axios.patch(bannertypeUrl + '/' + params.row.id, {status: !params.row.status}).then(res => {
											        this.btdata.data[params.index].status = !params.row.status
											        this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
                          		this.$Modal.remove()
                          		this.init()
											      }).catch(err => {
											        console.log('Error', err)
											        this.$Notice.error({ title: 'Error', desc: '', duration: 3})
                          		this.$Modal.remove()
											      })
                          }
                        })
                    	} else {
                    		axios.patch(bannertypeUrl + '/' + params.row.id, {status: !params.row.status}).then(res => {
									        this.btdata.data[params.index].status = !params.row.status
									        this.init()
									        this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
									      }).catch(err => {
									        console.log('Error', err)
									        this.$Notice.error({ title: 'Error', desc: '', duration: 3})
									      })
                    	}
                    } else {
                    	this.$Notice.error({ title: 'Error', desc: '', duration: 3})
                    }
                  } 
                }
            }, text)
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 300,
          align: 'center',
          render: (h, params) => {
            let self = this
            return h('div', [
            	// h('Tooltip', {
            	// 	props: {
            	// 		content: 'Edit',
            	// 		placement: 'left'
            	// 	}
            	// }, [
	            	h('a', {
	            		class: {
	            			'iconlink': true
	            		},
	            		on: {
	            			click: () => {
	            				this.$emit('updateBanner', {type: 'bannertype', id: params.row.id})
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
	            	], ''),
            	// ]),
            	// h('Tooltip', {
            	// 	props: {
            	// 		content: 'Delete',
            	// 		placement: 'right'
            	// 	}
            	// }, [
	            	h('a', {
	            		class: {
	            			'iconlink': true
	            		},
	            		on: {
	            			click: async() => {
		                	let userId = Cookies.get('userDetailId')
		                	axios.get(bannersUrl + '?userId=' + userId + '&banner_type=' + params.row.id).then(res => {
		                		if (res.data.data.length > 0) {
		                			this.$Modal.confirm({
			                      title: 'Confirm',
			                      content: '<p><b style="color:#f90;">'+res.data.data.length + ' ' + ((res.data.data.length === 1) ? 'Banner': 'Banners') +'</b> found with Banner Type.</p><p>Are you sure you want to Delete all?</p>',
			                      loading: true,
			                      onOk: async() => {
			                        for(let item of res.data.data) {
			                        	let a = await axios.delete(bannersUrl + '/' + item.id)
			                        }
			                        await self.handleDelete(params.row.id)
			                        this.$Modal.remove()
			                      }
			                    })
		                		} else {
		                			this.$Modal.confirm({
			                      title: 'Confirm',
			                      content: '<p>Are you sure you want to Delete?</p>',
			                      onOk: function() {
			                        self.handleDelete(params.row.id)
			                      }
			                    })		
		                		}
		                	}).catch(err => {
		                		this.$Notice.error({title:'Error', desc: '', duration: 3})
		                	})
		                }
	            		}
	            	},[
	            		h('Icon', {
	            			props: {
	            				type: 'trash-b'
	            			},
	            			class: {
	            				'iconCustom': true,
	            				'deleteb': true
	            			}
	            		})
	            	], '')
            	// ])
            ])
          }
        }
      ],
      btdata: {
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
  	handleBlank (value) {
  		if (this.filterobj.name === '')  {
  			this.init()
  		}
  	},
  	handleSorting (item) {
  		let inx = _.findIndex(this.btcolumns, {key: item.key})
  		this.btcolumns[inx].sortType = item.order
  		if (item.order !== 'normal') {
  			for (let [minx, obj] of this.btcolumns.entries()) {
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
  		// console.log('Search::', 'name::', this.btcolumns[0].sortType, ' ::date::', this.btcolumns[1].sortType)
  		if (this.filterobj.name !== '' || this.filterobj.website !== '' || this.filterobj.status !== '') {
  			this.cpage = 1
        this.skip = this.cpage * this.limit - this.limit
  			this.init()
  		}
  	},
  	handleFileterReset() {
  		if (this.filterobj.name !== '' || this.filterobj.website !== '' || this.filterobj.status !== '') {
	  		this.filterobj.website = ''
	  		this.filterobj.status = ''
	  		this.filterobj.name = '',
	  		this.init()
  		}
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
    async handleTagClick(id, status, inx) {
    	let userId = Cookies.get('userDetailId')
    	let resp = await axios.get(bannersUrl + '?userId=' + userId + '&banner_type=' + id).then(res => {
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
    handleDelete (iid) {
      let finx = _.findIndex(this.btdata.data, {id: iid})
      if (finx !== undefined && finx >= 0) {
        axios.delete(bannertypeUrl + '/' + iid).then(res => {
          this.btdata.data.splice(finx, 1)
          this.btdata.total -= 1
          this.$Notice.success({ title: 'Success!', desc: 'Successfully Deleted.', duration: 3})
    			let userId = Cookies.get('userDetailId')
          let skp = this.skip + (this.limit - 1)
          let query = '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + skp + '&$limit=1'
          if (this.filterobj.name !== '') {
	      		query += '&bt_name[$search]=' + this.filterobj.name 
	      	}
	      	if (this.filterobj.website !== '') {
	      		query += '&website_id=' + this.filterobj.website 
	      	}
          axios.get(bannertypeUrl + query).then(res => {
          	if (res.data.data.length > 0) {
          		this.btdata.data.push(res.data.data[0])
          	} else {
          		this.btdata.data.total -= 1
          	}
          })
        }).catch(err => {
          this.$Notice.error({ title: 'Error!', desc: 'Not Deleted.', duration: 3})
        })
      }
    },
    async init(item) {
    	this.loading = true
    	let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
      	let query = ''
      	if (item === undefined) {
      		query += '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit
      	} else {
      		query += '?userId=' + userId + '&$sort['+ item.key +']='+ ((item.order === 'asc') ? '1' : '-1') +'&$skip=' + this.skip + '&$limit=' + this.limit
      	}
      	if (this.filterobj.name !== '') {
      		query += '&bt_name[$search]=[' + this.filterobj.name + ',/$'+ this.filterobj.name +'/i]' 
      	}
      	if (this.filterobj.website !== '') {
      		query += '&website_id=' + this.filterobj.website 
      	}
      	if (this.filterobj.status !== '') {
      		query += '&status=' + JSON.parse(this.filterobj.status)
      	}
	      this.btdata = await axios.get(bannertypeUrl + query).then(res => {
	        return res.data
	      }).catch(err => {
	      	this.$Notice.error({title: 'Network Error', desc: '', duration: 2})
	      	return {total: 0, data: []}
	      })
      }
    	this.loading = false
    }
  },
  mounted() {
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
    this.init() 
  }
}
</script>

<style>
/*.bannertype {
  padding: 40px;
}*/
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
.editb:hover {
	color: #2d8cf0;
}
.deleteb:hover {
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
	.bannertype {
	  padding: 40px;
	}
</style>
