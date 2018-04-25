<template>
  <div class="UserSettings container">

  	<el-form :model="userSettingsForm" :rules="rules" ref="userSettingsForm" label-width="250px" class="demo-userSettingsForm">
		  <el-form-item label="Autosave Interval" prop="autosaveInterval">
		    <el-input-number v-model="userSettingsForm.autosaveInterval" :step="500" :min="0"></el-input-number>
		    <br><small>(In milliseconds. Set to 0 to disable.)</small>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button type="primary" @click="saveUserSettings('userSettingsForm')">Save</el-button>
		  </el-form-item>
		</el-form>

  </div>
</template>

<script>
import psl from 'psl'
import Cookies from 'js-cookie'

export default {
	name: 'UserSettings',
	props: {
		options: {
			type: Object
		}
	},
	data () {
		return {
			userSettingsForm: {
	      autosaveInterval: 0
	    },
	    rules: {
	      autosaveInterval: [
	        { type: 'number', required: true, message: 'Please input Autosave Interval in milli seconds (eg. 2000 for 2 seconds', trigger: 'blur' }
	      ]
	    }
		}
	},
	component: {
	},
	methods: {
  	saveUserSettings (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					let location = psl.parse(window.location.hostname)
					location = location.domain === null ? location.input : location.domain
					Cookies.set('saveInterval', this.userSettingsForm.autosaveInterval, {domain: location})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	},
	mounted () {
  	this.userSettingsForm.autosaveInterval = Cookies.get('saveInterval', {domain: location})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
