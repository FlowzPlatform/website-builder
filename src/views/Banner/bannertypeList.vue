<template>
  <div class="bannertype">
    <Row>
      <div  style="padding-bottom: 10px;">
      	<h2>Banner Type List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
    	<Col :span="8">
    		<Input v-model.trim="filterobj.name" icon="search" placeholder="Search by name...."></Input>
    	</Col>
    	<Col :span="8">
    		<Select v-model="filterobj.website" placeholder="Search by Website" clearable>
        	<Option v-for="item in webOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
      <Table :columns="btcolumns" :data="btdata.data" stripe></Table>
    </Row>
    <Row >
      <div style="float: right;padding-top: 10px;">
        <Page :total="btdata.total" :current="cpage" show-sizer show-total @on-change="pageChange" @on-page-size-change="psizeChange"></Page>
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
    		website: ''
    	},
      btcolumns: [
        {
          title: 'Sr No.',
          type: 'index',
          width: 100,
          align: 'center'
        },
        {
          title: 'Banner Type Name',
          key: 'bt_name'
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
                    this.$emit('updateBanner', {type: 'bannertype', id: params.row.id})
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
              }, 'Delete')
            ])
          }
        }
      ],
      btdata: {
      	total: 0,
      	data: []
      },
      cpage: 1,
      limit: 10,
      skip: 0,
      webOptions: []
    }
  },
  methods: {
  	handleSearch () {
  		if (this.filterobj.name !== '' || this.filterobj.website !== '') {
  			this.init()
  		}
  	},
  	handleFileterReset() {
  		this.filterobj.name = '',
  		this.filterobj.website = ''
  		this.init()
  	},
  	pageChange (page) {
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
    async init() {
    	let userId = Cookies.get('userDetailId')
      if (userId !== '' && userId !== undefined) {
      	let query = '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit
      	if (this.filterobj.name !== '') {
      		query += '&bt_name[$search]=' + this.filterobj.name 
      	}
      	if (this.filterobj.website !== '') {
      		query += '&website_id=' + this.filterobj.website 
      	}
	      this.btdata = await axios.get(bannertypeUrl + query).then(res => {
	        return res.data
	      })
      }
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

<style scoped>
.bannertype {
  padding: 40px;
}
</style>
