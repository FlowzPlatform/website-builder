<template>
  <div class="Login">

    <el-menu class="el-menu-demo" mode="horizontal">
      <el-row style="margin-bottom: 0">
        <el-col :span="4">
          <div class="logo">
            <a href="/"><img src="./../../static/img/Flowz-logo.png" height="40px" style="margin-top: 5px;"></a>
          </div>
        </el-col>        
      </el-row>
    </el-menu>

    <el-card class="box-card">
      <el-form style="padding:17px" ref="form" :model="form" :rules="loginRules" label-width="100px">
        <el-form-item label="Email Id" prop="user">
          <el-input icon="edit" type="text" v-model="form.user"placeholder="john23"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input icon="more" type="password" v-model="form.pass"></el-input>
          
        </el-form-item>
        <a href="/forgot_password" class="forgotPassword">Forgot Password?</a>
        <el-form-item>
          <el-button id="doLogin" type="primary" @click="validate('form')" style="float: left;" :loading="form.isLoading">Login</el-button>
        </el-form-item>

        <p class="newUser">Still New here? <a href="/register" class="registerNow">Register Now</a></p>
        
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSession from 'vue-session'

Vue.use(VueSession)

import axios from 'axios'

const config = require('../config');

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
          callback(new Error('Please input the Password'))
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
            // http://162.242.223.167:3001/api/login
            axios.post('http://ec2-54-88-11-110.compute-1.amazonaws.com/api/login', {
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
                this.form.isLoading = false;
                this.$router.push('/');
              }

              axios.get( config.baseURL + '/user-service?email=' + this.form.user + '&password=' + this.form.pass, {
              }).then(response => {
                if (response.data) {
                    console.log(response.data.private_token);
                    console.log(response.data.id);
                    this.$session.set('privateToken', response.data.private_token);
                    this.$session.set('userId', response.data.id);
                    this.$session.set('username', response.data.username);
                    console.log("Username:", this.$session.get('username'));
                    this.$router.push('/');
                }
              }).catch(error => {
                console.log(error);
                this.$notify.error({
                  title: 'Error',
                  message: error.response.data,
                  offset: 100
                });
                this.form.isLoading = false;
              })

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

/*Navigation bar on landing page*/
  .layout-logo{
      width: 140px;
      height: 40px;
      top: 10px;
      text-align: center;
      padding: 2px;
    }
    .layout-logo h4{
      color: #fff !important;
    }

    .loginLink{
      color: #fff;
    }

  .logo{
    padding: 8px 70px;
    cursor: pointer; 
  }
  .loginBtn{
    float: right;
    right: 0;
  }


  .el-menu{
    background-color: #292929;
    /*background-color: rgba(41,41,41,0.6);*/
    box-shadow: 0px 0px 25px;
    border-radius: 0;
    /*opacity: 0.6;*/
    transition: 0.2s all linear;
    /*position: fixed;
    width: 100%;
    top: 0;
    z-index: 0;*/
  }

  .el-menu:hover{
    opacity: 1;
    transition: 0.2s all linear;
  }

  .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover{
    background-color: transparent;
  }

  .welcomeUser{
    color: #eee;
    margin-right: 15px;
    pointer-events: none;
  }

  .btn-dark{
    background-color: #444;
    color: #eee;
    border: 1px solid #333;
    transition: 0.2s all linear;
  }

  .btn-dark:hover{
    background-color: #222;
    transition: 0.2s all linear;
  }


.box-card{
  width: 450px;
  margin:auto;
  margin-top: 15%;
  margin-bottom: 25px;
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
