<template>
  <div class="Register">

    <el-menu class="el-menu-demo" mode="horizontal">
      <el-row style="margin-bottom: 0">
        <el-col :span="4">
          <div class="logo">
            <a href="/"><img src="./../../static/img/Flowz-logo.png" height="40px" style="margin-top: 5px;"></a>
          </div>
        </el-col>        
      </el-row>
    </el-menu>

    <div class="container">
      <div class="row" style="padding: 15px;">
        <el-card class="box-card col-md-6 col-xs-12 col-md-offset-3">
          <el-form style="padding:17px" ref="form" :model="form" :rules="registerRules" label-width="100px">
            <el-form-item label="Full Name" prop="name">
              <el-input icon="star-off" v-model="form.name" placeholder="John Doe" required></el-input>
            </el-form-item>
            <el-form-item label="Username" prop="Uname">
              <el-input  icon="edit"v-model="form.Uname" placeholder="JDoe23" required></el-input>
            </el-form-item>
            <el-form-item prop="email" label="Email" >
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
              <el-input icon="more" type="password" v-model="form.pass" required></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="checkPass">
              <el-input icon="more" type="password" v-model="form.checkPass" auto-complete="off required"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button id="doLogin" type="primary" @click="validate('form')" style="float: left;" :loading="form.isLoading">Register</el-button>
            </el-form-item>

            <p class="newUser">Already Registered? <a href="/login" class="registerNow">Login Now</a></p>
            
          </el-form>
        </el-card>
      </div>
    </div>

    
  </div>
</template>

<script>
import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

import axios from 'axios'
const config = require('../config');

export default {
  name: 'Register',
  data () {
    var validaePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validaePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.form.pass) {
        callback(new Error('Two Passwords don\'t match!'))
      } else {
        callback()
      }
    }
    var validaeUname = (rule, value, callback) => {
        if (!value) {
            callback(new Error('Please input the Username'));
        }else {
          callback();
        }

      };
    var validaeFname = (rule, value, callback) => {
        if (!value) {
            callback(new Error('Please input the Full Name'));
        }else {
          callback();
        }
      };
    var validaeemail = (rule, value, callback) => {
        if (!value) {
            callback(new Error('Please input the Email'));
        } else{
            callback();
        }
      };
    return {
      form: {
        name: '',
        checkPass: '',
        Uname: '',
        email: '',
        pass: '',
        isLoading: false
      },
      registerRules: {
        pass: [
          { required: true, validator: validaePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validaePass2, trigger: 'blur' }
        ],
        Uname: [{
            required: true,
            validator: validaeUname,
            trigger: 'blur'
        }],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        name: [{
            required: true,
            validator: validaeFname,
            trigger: 'blur'
        }]
      }
    }
  },
  methods: {
      validate (formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
              this.form.isLoading = true;
              axios.post(config.registerUrl, {
                username: this.form.Uname,
                password: this.form.pass,
                email: this.form.email,
                fullname: this.form.Name
              }, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
              }).then(response => {
                window.location = '/login'
                axios.post( config.baseURL + '/user-service', {
                    username : this.form.Uname,
                    password : this.form.pass,
                    email : this.form.email,
                    name : this.form.name                  
                }).then(response => {
                  this.form.isLoading = false;
                  console.log(response);
                  window.location = '/login';

                  // Create user Folder
                  //let newFolderName = this.currentFile.path.replace(/\\/g, "\/") + '/' + this.formAddProjectFolder.projectName;
                  // axios.post(config.baseURL+'/flows-dir-listing' , {
                  //   foldername :'/var/www/html/websites/'+ this.form.Uname,
                  //   type : 'folder'
                  // })
                  // .then((res) => {
                  //   console.log('user Folder created!');
                  // })
                  // .catch((e)=>{
                  //   console.log("Error from pages"+res)
                  // });

                  
                }).catch(error => {
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
              console.log('error submit!!');
              this.form.isLoading = false;
              return false;
            }
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  /*width: 450px;*/
  /*margin:auto;*/
  margin-top: 9%;
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
