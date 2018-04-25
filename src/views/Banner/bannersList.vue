<template>
  <div class="banners">
   <Row>
      <div  style="padding-bottom: 10px;">
        <h2>Banners List</h2>
      </div>
    </Row>
    <Row style="border: 1px solid #dddee1; background: #f8f8f9; padding: 10px;margin-bottom: 20px;" :gutter="4">
      <Col :span="6">
        <Select v-model="filterobj.type" placeholder="Search by Category" filterable @on-change="handleSearch">
          <Option v-for="item in typeOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <Col :span="6">
        <Select v-model="filterobj.website" placeholder="Search by Website" filterable  @on-change="handleSearch">
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
          <Col :span="(filterobj.type === '' && filterobj.website === '' && filterobj.status === '') ? 24 : 12">
            <Button type="primary" shape="circle" style="font-size:14px;" icon="ios-search" long @click="handleSearch">Search</Button>
          </Col>
          <Col :span="12" v-if="filterobj.type !== '' || filterobj.website !== '' || filterobj.status !== ''">
            <Button type="ghost" shape="circle" style="font-size:14px;" icon="ios-reload" long @click="handleFileterReset">Reset</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Table :loading="loading" :columns="bcolumns" :data="bdata.data" stripe  @on-sort-change="handleSorting"></Table>
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
import Cookies from 'js-cookie'

let baseUrl = config.baseURL
let bannersUrl = config.baseURL + '/banners'
let bannertypeUrl = config.baseURL + '/bannertype'

export default {
	name: 'banners',
	data () {
		return {
			filterobj: {
				type: '',
				website: '',
				status: ''
			},
			bcolumns: [
				// {
				//   title: 'Sr No.',
				//   type: 'index',
				//   width: 100,
				//   align: 'center'
				// },
				// {
				//   title: 'Banner Name',
				//   width: 250,
				//   key: 'banner_name'
				// },
				{
					title: 'Banner Image',
					// width: 200,
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
					title: 'Category',
					width: 220,
					key: 'banner_type',
					sortable: true,
					sortType: 'normal',
					render: (h, params) => {
						let inx = _.findIndex(this.typeOptions, {value: params.row.banner_type})
						let tName = ''
						if (inx !== -1) {
							tName = this.typeOptions[inx].label
						} else {
							tName = '-'
						}
						return h('div', tName)
					}
				},
				{
					title: 'Website',
					width: 220,
					key: 'website'
					// render: (h, params) => {
					//   // let inx = _.findIndex(this.typeOptions, {value: params.row.banner_type})
					//   let tName = ''

					//   return h('div', tName)
					// }
				},
				{
					title: 'Link URL',
					align: 'center',
					// key: 'banner_linkurl'
					width: 200,
					render: (h, params) => {
						let resp = params.row.banner_linkurl
						if (resp === '') {
							resp = '-'
						}
						return h('div', resp)
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
						const row = params.row
						const color = row.banner_status ? 'green' : 'red'
						const text = row.banner_status ? 'ACTIVE' : 'INACTIVE'

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
					width: 200,
					align: 'center',
					render: (h, params) => {
						let self = this
						return h('div', [
							// h('Tooltip', {
							//  props: {
							//    content: 'Edit',
							//    placement: 'left'
							//  }
							// }, [
							h('a', {
								class: {
									'iconlink': true
								},
								on: {
									click: () => {
										this.$emit('updateBanner', {type: 'banner', id: params.row.id})
									}
								}
							}, [
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
							//  props: {
							//    content: 'Delete',
							//    placement: 'right'
							//  }
							// }, [
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
											onOk: function () {
												self.handleDelete(params.row.id)
											}
										})
									}
								}
							}, [
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
			bdata: {
				total: 0,
				data: []
			},
			loading: false,
			cpage: 1,
			limit: 10,
			skip: 0,
			typeOptions: [],
			webOptions: [],
			statusOptions: [{
				label: 'ACTIVE',
				value: 'true'
			}, {
				label: 'INACTIVE',
				value: 'false'
			}]
		}
	},
	methods: {
		handleSorting (item) {
			let inx = _.findIndex(this.bcolumns, {key: item.key})
			this.bcolumns[inx].sortType = item.order
			if (item.order !== 'normal') {
				for (let [minx, obj] of this.bcolumns.entries()) {
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
			if (this.filterobj.status !== '' || this.filterobj.type !== '' || this.filterobj.website !== '') {
				this.cpage = 1
				this.skip = this.cpage * this.limit - this.limit
				this.init()
			}
		},
		handleFileterReset () {
			this.filterobj.website = ''
			this.filterobj.type = ''
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
		handleTagClick (id, status, inx) {
			if (!status) {
				axios.get(bannertypeUrl + '/' + this.bdata.data[inx].banner_type).then(res => {
					if (res.data.status) {
						axios.patch(bannersUrl + '/' + id, {banner_status: !status}).then(res => {
							this.bdata.data[inx].banner_status = !status
							this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
							this.init()
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
					this.init()
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
		async init (item) {
			this.loading = true
			let userId = Cookies.get('userDetailId')
			if (userId !== '' && userId !== undefined) {
				let query = ''
				if (item === undefined) {
					query = '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit
				} else {
					query = '?userId=' + userId + '&$sort[' + item.key + ']=' + ((item.order == 'asc') ? '1' : '-1') + '&$skip=' + this.skip + '&$limit=' + this.limit
				}
				if (this.filterobj.website !== '') {
					query += '&website=' + this.filterobj.website
				}
				if (this.filterobj.type !== '') {
					query += '&banner_type=' + this.filterobj.type
				}
				if (this.filterobj.status !== '') {
					query += '&banner_status=' + JSON.parse(this.filterobj.status)
				}
				this.bdata = await axios.get(bannersUrl + query).then(res => {
					// console.log(res.data)
					for (let item of res.data.data) {
						item.website = 'Loading....'
					}
					return res.data
				})
				this.loading = false
				for (let [inx, mitem] of this.bdata.data.entries()) {
					axios.get(bannertypeUrl + '/' + mitem.banner_type).then(res => {
						let finx = _.findIndex(this.webOptions, {value: res.data.website_id})
						if (finx !== '' && finx !== -1) {
							this.bdata.data[inx].website = this.webOptions[finx].label
						} else {
							this.bdata.data[inx].website = '-'
						}
					}).catch(err => {
						this.bdata.data[inx].website = '-'
					})
				}
			}
			this.loading = false
		}
	},
	mounted () {
		let userId = Cookies.get('userDetailId')
		axios.get(bannertypeUrl + '?userId=' + userId + '&$paginate=false').then(res => {
			for (let item of res.data) {
				this.typeOptions.push({
					label: item.bt_name,
					value: item.id
				})
			}
		})
		axios.get(baseUrl + '/project-configuration?userId=' + userId).then(res => {
			for (let item of res.data.data) {
				this.webOptions.push({label: item.websiteName, value: item.id})
			}
			this.$Spin.hide()
		}).catch(err => {
			this.$Spin.hide()
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
.banners {
  padding: 40px;
}
</style>
