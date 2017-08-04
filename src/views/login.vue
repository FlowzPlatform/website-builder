<template>
  <div class="Login">
    <el-card class="box-card">
      <!-- <div slot="header" class="clearfix">
        <span style="line-height: 36px; font-size: 24px; font-weight: bold;">Login</span>
        <el-button style="float: right;" type="primary" @click="registerPage">Register</el-button>
      </div> -->
      <el-form style="padding:17px" ref="form" :model="form" :rules="loginRules" label-width="100px">
        <el-form-item label="Username" prop="user">
          <el-input icon="edit" type="text" v-model="form.user"placeholder="john23"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input icon="more" type="password" v-model="form.pass"></el-input>
          
        </el-form-item>
        <a href="/forgot_password" class="forgotPassword">Forgot Password?</a>
        <el-form-item>
          <el-button id="doLogin" type="primary" @click="validate('form')" style="float: left;" :loading="form.isLoading">Login</el-button>
        </el-form-item>
        <!-- <el-form-item> -->
          <p class="newUser">Still New here? <a href="/register" class="registerNow">Register Now</a></p>
        <!-- </el-form-item> -->
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

import axios from 'axios'

export default {
  name: 'Login',
  data () {
    var validateUname = (rule, value, callback) => {
        if (!value) {
            callback(new Error('Please input the Username'));
        }else {
          callback();
        }

      };
      var validaePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'))
        } else {
          callback();
        }
    }
    return {
      	form: {
        	user: '',
        	pass: '',
        	isLoading: false
       	},
      	loginRules: {
        	pass: [{ 
        		validator: validaePass, trigger: 'blur' 
        	}],
        	user: [{
            	validator: validateUname,
            	trigger: 'blur'
        	}]
      	}
    }
  },
  component: {
  },
  methods: {
	forgot () {
    	console.log('!!!forgot password request received!!!')
  	},
    validate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.form.isLoading = true;
            axios.post('http://162.242.223.167:3001/api/login', {
              password: this.form.pass,
              email: this.form.user
            }, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(response => {
              if (response.data) {
                  this.$session.start()
                  this.$session.set('token', response.data.token)
                  this.$session.set('username', this.form.user)
                  // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.token
                  this.$router.push('/');
                  this.form.isLoading = false;
              }
            }).catch(error => {
              this.$notify.error({
                title: 'Error',
                message: error.response.data,
                offset: 100
              });
              this.form.isLoading = false;
            })
        } else {
          console.log('Enter proper details.');
          this.form.isLoading = false;
          return false;
        }
      });
    },
    registerPage() {
      this.$router.push('/register');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card{
  width: 450px;
  margin:auto;
  margin-top: 15%;
  background-color: rgba(80,80,80,0.07);
  box-shadow: 0px 0px 2px #999999;
  transition: 0.2s linear all;
}
.box-card:hover, .box-card:focus{
 box-shadow: 0px 0px 25px #999999; 
 transition: 0.2s linear all;
}
.el-card__header{
  border: none;
}
.forgotPassword{
  text-decoration: none;
  float: right;
  font-size: 12px;
  margin-top: -10px;
  color: #4db3ff;
}
.registerNow{
  text-decoration: none;
  color: #4db3ff;
}
.newUser{
  text-align: center;
}
</style>
