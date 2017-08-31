<template>
  <div class="Register">
    <el-card class="box-card">
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
</template>

<script>
import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

import axios from 'axios'

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
              axios.post('http://ec2-54-88-11-110.compute-1.amazonaws.com/api/setup', {
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
                axios.post('http://localhost:3030/user-service', {
                    username : this.form.Uname,
                    password : this.form.pass,
                    email : this.form.email,
                    name : this.form.name                  
                }).then(response => {
                  this.form.isLoading = false;
                  console.log(response);
                  window.location = '/login'
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
.box-card{
  width: 450px;
  margin:auto;
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
