<template>
  <div class="app">
    <el-card class="box-card" style="margin-top: 10%;">
      <div  slot="header" class="clearfix">
          <span style="line-height: 36px;font-size:30px;float:left">Login Form</span>
          <a href="/register"><el-button size="large" style="float: right;">Register</el-button></a>
      </div>
      <el-form style="padding:17px" ref="form" :model="form"  :rules="rules2" label-width="100px">
        <el-form-item label="Username" prop="user">
          <el-input icon="edit" type="text" v-model="form.user"placeholder="john23"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input icon="more" type="password" v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button id="doLogin" type="primary" @click="validate('form')" style="float: left;" :loading="form.isLoading">Login</el-button>
        </el-form-item>
        <el-form-item>
          <a href="/forgot_pass"><el-button type="text" @click="forgot" style="float: left;">Forgot Password?</el-button></a>
        </el-form-item>
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
  name: 'app',
  data () {
    var validaeUname = (rule, value, callback) => {
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
      rules2: {
        pass: [
          { validator: validaePass, trigger: 'blur' }
        ],
        user: [{
            validator: validaeUname,
            trigger: 'blur'
        }]
      }
    }
  },
  methods: { forgot () {
    console.log('!!!forgot password request received!!!')
  },
    validate (formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.form.isLoading = true;
            axios.post('https://recipehub-backend-xzvsnhncgk.now.sh/api/login', {
              password: this.form.pass,
              username: this.form.user
            }, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(response => {
              // this.$notify.success({
              //   title: 'Success',
              //   message: response.data,
              //   offset: 100
              // })
              if (response.data) {
                  this.$session.start()
                  this.$session.set('token', response.data.token)
                  // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.token
                  this.$router.push('/')
              }
            }).catch(error => {
              this.$notify.error({
                title: 'Error',
                message: error.response.data,
                offset: 100
              })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}

</script>

<style scoped >
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.el-card__header {
  background-color: #339292;
}

.box-card {
  width: 582px;
  margin:auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.box-card:hover {
    box-shadow: 0 12px 24px 0 rgba(0,0,0,0.2);
}

.el-form-item__label {
  font-size: 19px;
}

.el-notification{
  width:500px
}
</style>
