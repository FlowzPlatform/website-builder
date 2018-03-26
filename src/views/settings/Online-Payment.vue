<template>
	<div>
		<div class="settings_header">
			<Button @click="goToSettingsList">All Account Settings</Button>
		</div>
		<div class="container" style="background: white;">
			<div class="row">
				<div class="col-md-12" style="margin-top: 20px;">
					<Form class="form" label-position="left" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
						<FormItem label="Configuration Name">
							<Select v-model="formValidate.configuration" style="width:100%;text-align:left">
								<Option  value='all'>All</Option>
								<Option  v-for="item in configs" :value="item.id" :key="item">{{ item.configName }} ({{item.domain}})</Option>
							</Select>
						</FormItem>
						<FormItem label="Gateway" prop="gateway">
							<Select v-model="formValidate.gateway" style="width:100%;text-align:left">
							<Option  value='stripe'>Stripe</Option>
							<Option  value='auth'>AuthrizedDotNet</Option>
							<Option value='paypal'>PayPal</Option>
							</Select>
						</FormItem>
						<FormItem label="x_api_token" v-if="formValidate.gateway">
							<Input v-model="formValidate.x_api_token" placeholder="Enter x_api_token"></Input>
						</FormItem>
						<FormItem label="x_api_login" v-if="formValidate.gateway == 'auth' || formValidate.gateway == 'paypal'">
							<Input v-model="formValidate.x_api_login" placeholder="Enter x_api_login"></Input>
						</FormItem>
						<div style="text-align:center;">
							<Button type="primary" @click="handleSubmit('formValidate')" :loading="loading">Submit</Button>
							<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px;">Reset</Button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	let feathersUrl =  config.default.serviceUrl;
	import Cookies from 'js-cookie';
	import config from '@/config/customConfig.js'
	import _ from 'lodash'
	import Vue from 'vue'
	import axios from "axios"
	export default {
		data () {
			return {
				loading: false,
				formValidate:{
					configuration:'all',
					gateway:'',
					x_api_token:'',
					x_api_login:''
				},
				configs: [],
				ruleValidate: {
					gateway: [
						{ required: true, message: 'Please select gateway', trigger: 'blur' }
					],
					x_api_login: [
						{ required: true, message: 'The x_api_login cannot be empty', trigger: 'blur' }
					],
					x_api_token: [
						{ required: true, message: 'The x_api_token cannot be empty', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			goToSettingsList(){
				this.$router.push({
					name: 'Settings'
					// params: { tabName: 'Online Payment' }

				});
			},
			handleSubmit (name) {
				var self = this
				self.loading = true;
				this.$refs[name].validate((valid) => {
					if (valid) {
						console.log('formValidate----------------------------->',this.formValidate)
						if(this.formValidate.configuration === 'all'){ 
							this.$Modal.confirm({
								title: '',
								content: '<h4>This Payment Credentials will be configured for all of your Accounts</h4>',
								width: 500,
								okText: 'Agree',
								cancelText: 'Disagree',
								onOk: () => {
									var configId = this.formValidate.configuration
									let patchData = _.cloneDeep(this.formValidate)
									delete patchData.configuration;
									if (this.formValidate.gateway == 'stripe') {
										delete patchData.x_api_login
									}
									this.configs.forEach(item => {
										let gateway = this.formValidate.gateway;
										console.log("gateway",gateway);
										var params = {'online_payment': {},'id' : item.id}
										delete patchData.gateway;
										patchData['isDefault'] = true;
										patchData['isDeleted'] = false;
										params.online_payment[gateway] = patchData;
										console.log("---------------------params online payment",params);
										// console.log('iiiiiiiiiiiiiiiiiiiiii',item.id)
										axios({
											method: 'PATCH',
											url: feathersUrl +'settings/'+item.id,
											headers:{
												Authorization : Cookies.get('auth_token'),
												subscriptionId : Cookies.get('subscriptionId')
											},
											data: params
										})  
										.then(function (response) {
											// console.log('response------------------------>',response)
											self.handleReset();
											self.loading = false;
											self.$router.push({
												name: 'Settings'
											});
										})
										.catch(function (error) {
											self.loading = false;
											console.log('error',error)
										})
									})
								},
								onCancel: () => {
									self.loading = false;
								}
							})                        
						}
						else{
							console.log('this.configs',this.configs)
							console.log('this.formValidate.configuration',this.formValidate.configuration)
							var data000 = _.filter(this.configs, {'id': this.formValidate.configuration })
							console.log("data000----------------------------->",data000)
							var checkConfig;
							this.$Modal.confirm({
								title: '',
								content: '',
								width: 500,
								okText: 'Agree',
								cancelText: 'Disagree',
								render: (h) => {
									return h('div', {
									}, [
										h('span', {
											style:{
											fontSize:'25px'
											},
										props: {
										},
										on: {
											input: (val) => {
											}
										}
										},'This Payment Credential will be configured for ' + data000[0].configName),
										h('div', {
										style:{
											height:'50px'
											}
									}),
										h('Checkbox', {
										props: {
											value: this.value
										},
										on: {
											input: (val) => {
											checkConfig = val
											console.log("val",checkConfig)

											}
										}
										},'Do you want to use this Payment credentials for all Accounts?')
									])
								},
								onOk: () => {
									var configId = this.formValidate.configuration
									let patchData = _.cloneDeep(this.formValidate)
									delete patchData.configuration;
									if (this.formValidate.gateway == 'stripe') {
										delete patchData.x_api_login
									}
									let gateway = this.formValidate.gateway;
									console.log("gateway",gateway);
									var params = {'online_payment': {},'id' : configId}
									delete patchData.gateway;
									patchData['isDefault'] = true;
									patchData['isDeleted'] = false;
									params.online_payment[gateway] = patchData;
									console.log("---------------------params online payment",params);
									// console.log("one configuration",this.formValidate)

									if(checkConfig == true){
										this.configs.forEach(item => {
											axios({
												method: 'PATCH',
												url: feathersUrl +'settings/'+item.id,
												headers:{
													Authorization : Cookies.get('auth_token'),
													subscriptionId : Cookies.get('subscriptionId')
												},
												data: params
											})  
											.then(function (response) {
												console.log('response------------------------>',response)
												self.handleReset();
												self.loading = false;
												self.$router.push({
													name: 'Settings'
												});
											})
											.catch(function (error) {
												self.loading = false;
												console.log('error',error)
											})
										})
									}
									else{ 
										console.log('this.formValidate',this.formValidate)        
										axios({
											method: 'PATCH',
											url: feathersUrl +'settings/'+configId,
											headers:{
												Authorization : Cookies.get('auth_token'),
												subscriptionId : Cookies.get('subscriptionId')
											},
											data: params
										})  
										.then(function (response) {
											console.log('response------------------------>',response)
											self.handleReset();
											self.loading = false;
											self.$router.push({
												name: 'Settings'
											});
										})
										.catch(function (error) {
											self.loading = false;
											console.log('error',error)
										})
									}
								},
								onCancel: () => {
									self.loading = false;
								}
							})
						}
					} 
					else {
						this.$Message.error('Please fill up all the fields correctly');
					}
				})
			},
			handleReset (name) {
				this.formValidate.gateway = '',
				this.formValidate.x_api_login = '',
				this.formValidate.x_api_token = ''
				// this.$refs[name].resetFields();
				this.formValidate.configuration = 'all'
			},
			async settingData () {
				let self = this
				await axios.get(config.default.serviceUrl + 'settings?isActive=true', {
					headers:{
						Authorization : Cookies.get('auth_token'),
						subscriptionId : Cookies.get('subscriptionId')
					}
				})
				.then(function (response) {
					console.log("response >>>>>>>>>>>>>>>>",response)
					if (response.data.data.length != 0)
					{
						var newConf = [];
						console.log("self.configs---------------->before",newConf)
						response.data.data.forEach(item => {
							newConf.push(item);
						})
						self.configs = _.sortBy(newConf, ['configName']);
						console.log("self.configs---------------->after",self.configs)
					}
					else{

					// self.$Modal.warning({
					// title: 'No Configuration available',
					// okText : "Go to Settings",
					// content: '<h3 style="font-family: initial;">Please navigate to settings and configure or activate at least one Xero or Quickbook account </h3>',
					// onOk: () => {
					//   self.$router.push({

					}
				})
				.catch(function (error) {
					console.log("error",error.response);
					if(error.response.status == 401){
						let location = psl.parse(window.location.hostname)
						location = location.domain === null ? location.input : location.domain
						
						Cookies.remove('auth_token' ,{domain: location}) 
						this.$store.commit('logout', this);
						
						this.$router.push({
							name: 'login'
						});
					}else if(error.response.status == 403){
						self.$Notice.error(
						{duration:0, 
						title: error.response.statusText,
						desc:error.response.data.message+'. Please <a href="'+config.default.flowzDashboardUrl+'/subscription-list" target="_blank">Subscribe</a>'}
						);
					}
				});
			
			},
		},
		computed: {
		},
		mounted() {
			this.settingData();
		}
}
</script>

<style scoped>
	.settings_header{
		padding : 10px;
		text-align:right;
		background: #cacaca;
		width:100%;
		margin:14px 2px;
	}
</style>