<template>
  <div class="bannertype">
    <Row>
      <div  style="padding-bottom: 10px;">
      	<h2>Banner Type List</h2>
      </div>
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

let bannertypeUrl = config.baseURL + '/bannertype'

export default {
  name: 'bannertype',
  data () {
    return {
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
                  click: () => { 
                    this.handleTagClick(params.row.id, params.row.status) 
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
      btdata: {
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
      axios.patch(bannertypeUrl + '/' + id, {status: !status}).then(res => {
        let finx = _.findIndex(this.btdata.data, {id: id})
        if (finx !== undefined && finx >= 0) {
            this.btdata.data[finx].status = !status
            this.$Notice.success({ title: 'Success!', desc: '', duration: 3})
        }  
      }).catch(err => {
        console.log('Error', err)
        this.$Notice.error({ title: 'Error', desc: '', duration: 3})
      })
    },
    handleDelete (iid) {
      let finx = _.findIndex(this.btdata.data, {id: iid})
      if (finx !== undefined && finx >= 0) {
        axios.delete(bannertypeUrl + '/' + iid).then(res => {
          this.btdata.data.splice(finx, 1)
          this.btdata.total -= 1
          this.$Notice.success({ title: 'Success!', desc: 'Successfully Deleted.', duration: 3})
          let skp = this.skip + (this.limit - 1)
    			let userId = Cookies.get('userDetailId')
          axios.get(bannertypeUrl + '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + skp + '&$limit=1').then(res => {
          	if (res.data.data.length > 0) {
          		this.btdata.data.push(res.data.data[0])
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
	      this.btdata = await axios.get(bannertypeUrl + '?userId=' + userId + '&$sort[createdAt]=-1&$skip=' + this.skip + '&$limit=' + this.limit).then(res => {
	        return res.data
	      })
      }
    }
  },
  mounted() {
    this.init() 
  }
}
</script>

<style scoped>
.bannertype {
  padding: 40px;
}
</style>
