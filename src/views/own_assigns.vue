<template>
    <div>
        <div v-if = 'data7.length > 0'>
            <Table border :columns="columns7" :data="data7"></Table>
        </div>
        <div v-else style="text-align:center;color:#fd5e5e">
            <h5>No one is assigned</h5>
        </div>
    </div>
</template>

<script>
    export default {
    	props: {
    		row: Object
    	},
    	data () {
    		return {
    			columns7: [
    
    				{
    					title: 'Module',
    					key: 'module',
    					render: (h, params) => {
    						console.log('params', params)
    						return h('div', [
    							// let obj= Object.keys(params.row.role);
    							h('strong', this.capitalize(Object.keys(params.row)[0]))
    						])
    					}
    				},
    				{
    					title: 'Role',
    					key: 'role',
    					render: (h, params) => {
    						// console.log("Object.keys(params.row.role)",Object.keys(params.row))
    						// console.log("params.row[Object.keys(params.row)]",params.row[Object.keys(params.row)[0]])
    						return h('div', [
    							h('strong', this.capitalize(params.row[Object.keys(params.row)[0]]))
    						])
    					}
    				}
    
    			],
    			data7: []
    		}
    	},
    	methods: {
    		capitalize (str) {
    			// console.log("str before",str)
    			str = str[0].toUpperCase() + str.slice(1)
    			// console.log("str after",str)
    			return str
    		},
    		async init () {
    			let self = this
    			console.log('this.row', this.row)
    			for (let role in this.row.role) {
    				// console.log("role",role)
    				// console.log("this.row.role[role]",this.row.role[role])
    				self.data7.push({ [role]: this.row.role[role] })
    			}
    			console.log('self.data7', self.data7)
    		}
    	},
    	mounted () {
    		this.init()
    	}
    }
</script>