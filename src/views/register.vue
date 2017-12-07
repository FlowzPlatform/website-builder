<template>
  <div class="Register">
    <div class='brand'>
        <a href='/' target='_blank'>
            <img src='../assets/images/Flowz-Logo.png' class="flowz-logo">
        </a>
    </div>
    <div class='login signup-form'>
      <div class='login_title'>
          <span>Signup with Flowz Builder</span>
      </div>
      <div class='login_fields'>
          <div class='login_fields__user'>
              <div class='icon'>
                  <i class="fa fa-address-book-o"></i>
              </div>
              <input placeholder='Full Name' type='text' v-model="form.name" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
              </input>
          </div>
          <div class='login_fields__user'>
              <div class='icon'>
                  <img src='../assets/images/user_icon_copy.png'>
              </div>
              <input placeholder='Username' type='text' v-model="form.Uname" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
              </input>
          </div>
          <div class='login_fields__user'>
              <div class='icon'>
                  <i class="fa fa-envelope-o"></i>
              </div>
              <input placeholder='Email Address' type='text' v-model="form.email" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
              </input>
          </div>
          <div class='login_fields__password'>
              <div class='icon'>
                  <img src='../assets/images/lock_icon_copy.png'>
              </div>
              <input placeholder='Password' type='password' v-model="form.pass" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
          </div>
          <div class='login_fields__password'>
              <div class='icon'>
                  <img src='../assets/images/lock_icon_copy.png'>
              </div>
              <input placeholder='Password' type='password' v-model="form.checkPass" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
          </div>
          <div class='login_fields__submit'>
              <input type='submit' value='Sign Up'>
              <div class='forgot'>
                  <a href='/login'>Already Registered?</a>
              </div>
          </div>
          <!-- <div class="signup">
              <a href="/register" class="signup-link">New Here?</a>
          </div> -->
      </div>
      <div class='success'>
          <h2 v-if="authen.status === true">{{authen.success}}</h2>
          <p v-if="authen.status === true">You will be redirected soon...</p>
      </div>
      <div class='disclaimer'>
          <p>Signup with Flowz Web Builder and experience the Next Generation Web Application Building.</p>
      </div>
    </div>
    <div class='authent'>
        <img src='../assets/images/puff.svg'>
        <p>Registering...</p>
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
    return {
      form: {
        name: '',
        checkPass: '',
        Uname: '',
        email: '',
        pass: '',
        isLoading: false
      },
      authen: {
        status: false,
        success: 'Authentication Success',
        error: 'Authentication Failed'
      }
    }
  },
  methods: {
    registerUser () {
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
        // window.location = '/login'
        axios.post( config.baseURL + '/user-service', {
            username : this.form.Uname,
            password : this.form.pass,
            email : this.form.email,
            name : this.form.name                  
        }).then(response => {
          // window.location = '/login';
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
          this.authen.status = true;
          let self = this;
          setTimeout(function () {
            self.$router.push('/login');
          }, 2000);
        }).catch(error => {
          this.authen.status = false;
          this.authen.error = response.data;
        })
      }).catch(error => {
        this.authen.status = false;
        this.authen.error = response.data;
      })
    }
  },
  mounted () {
    let self = this;

    $('input[type="submit"]').click(function(){
      if(self.form.name != '' && self.form.Uname != '' && self.form.email != '' && self.form.pass != '' && self.form.checkPass != ''){
        if(self.form.pass == self.form.checkPass){
          self.registerUser();
          $('.login').addClass('test')
          setTimeout(function(){
            $('.login').addClass('testtwo')
          },300);
          setTimeout(function(){
            $(".authent").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });
            $(".authent").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');
          },500);
          setTimeout(function(){
            $(".authent").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });
            $(".authent").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');
            $('.login').removeClass('testtwo')
          },2500);
          setTimeout(function(){
            $('.login').removeClass('test')
            $('.login div').fadeOut(123);
          },2800);
          setTimeout(function(){
            if(self.authen.status == true){
              $('.success').fadeIn();  
            } else {
              $(".authent").fadeOut();
              $('.login div').fadeIn();
              self.$message({
                  showClose: true,
                  message: self.authen.error,
                  type: 'error'
              });
            }
            
          },3200);
        } else{
          self.$message({
              showClose: true,
              message: 'Password and Confirm password didn\'t matched...',
              type: 'error'
          });
        }
      } else {
        self.$message({
            showClose: true,
            message: 'Please Enter all Fields',
            type: 'error'
        });
      }
    });

    $('input[type="text"],input[type="password"]').focus(function(){
      $(this).prev().animate({'opacity':'1'},200)
    });
    $('input[type="text"],input[type="password"]').blur(function(){
      $(this).prev().animate({'opacity':'.5'},200)
    });

    $('input[type="text"],input[type="password"]').keyup(function(){
      if(!$(this).val() == ''){
        $(this).next().animate({'opacity':'1','right' : '30'},200)
      } else {
        $(this).next().animate({'opacity':'0','right' : '20'},200)
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url(https://fonts.googleapis.com/css?family=Gudea:400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
  .flowz-logo{
    border-radius: 50%;
  }
  p {
    color: #606479;
    text-align: left;
    font-size: 10px;
  }
  .Register {
    -webkit-perspective: 800px;
            perspective: 800px;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    
    background: #66F9FF;
    /* Old browsers */
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #66F9FF), color-stop(100%, #708EFF));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(-45deg, #66F9FF 0%, #708EFF 100%);
    /* Chrome10+,Safari5.1+ */
    /* Opera 11.10+ */
    /* IE10+ */
    background: -webkit-linear-gradient(315deg, #66F9FF 0%, #708EFF 100%);
    background: linear-gradient(135deg, #66F9FF 0%, #708EFF 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66F9FF ', endColorstr='#708EFF',GradientType=1 );
    /* IE6-9 fallback on horizontal gradient */
  }
  .authent {
    display: none;
    background: #35394a;
    /* Old browsers */
    /* FF3.6+ */
    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #35394a), color-stop(100%, #1f222e));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    /* Chrome10+,Safari5.1+ */
    /* Opera 11.10+ */
    /* IE10+ */
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#35394a', endColorstr='#1f222e',GradientType=1 );
    /* IE6-9 fallback on horizontal gradient */
    position: absolute;
    left: 0;
    right: 90px;
    margin: auto;
    width: 200px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    padding: 20px 70px;
    top: 200px;
    bottom: 0;
    height: 120px;
    opacity: 0;
  }
  .authent p {
    color: white;
    position: absolute;
    left: 50px;
    top: 80px;
  }
  .success {
    display: none;
    color: #d5d8e2;
  }
  .success p {
    font-size: 14px;
  }
  .testtwo {
    left: -320px !important;
  }
  .test {
    box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
    pointer-events: none;
    top: -100px !important;
    -webkit-transform: rotateX(70deg) scale(0.8) !important;
            transform: rotateX(70deg) scale(0.8) !important;
    opacity: .6 !important;
    -webkit-filter: blur(1px);
            filter: blur(1px);
  }
  .login {
    font-family: 'Gudea', sans-serif;
    opacity: 1;
    top: 20px;
    -webkit-transition-timing-function: cubic-bezier(0.68, -0.25, 0.265, 0.85);
    -webkit-transition-property: opacity,box-shadow,top,left,-webkit-transform;
    transition-property: opacity,box-shadow,top,left,-webkit-transform;
    transition-property: transform,opacity,box-shadow,top,left;
    transition-property: transform,opacity,box-shadow,top,left,-webkit-transform;
    -webkit-transition-duration: .5s;
            transition-duration: .5s;
    -webkit-transform-origin: 161px 100%;
            transform-origin: 161px 100%;
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    position: relative;
    width: 300px;
    border-top: 2px solid #4BEBE3;
    height: 420px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 100px 40px 40px 40px;
    background: #35394a;
    /* Old browsers */
    /* FF3.6+ */
    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #35394a), color-stop(100%, #1f222e));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    /* Chrome10+,Safari5.1+ */
    /* Opera 11.10+ */
    /* IE10+ */
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#35394a', endColorstr='#1f222e',GradientType=1 );
    /* IE6-9 fallback on horizontal gradient */
  }

  .login.signup-form{
    height: 530px;
  }
  .login .validation {
    position: absolute;
    z-index: 1;
    right: 10px;
    top: 6px;
    opacity: 0;
  }
  .login .disclaimer {
    position: absolute;
    bottom: 20px;
    left: 35px;
    width: 250px;
  }
  .login_title {
    color: #afb1be;
    height: 60px;
    text-align: left;
    font-size: 16px;
  }
  .login_fields {
    height: 208px;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .login_fields .icon {
    position: absolute;
    z-index: 1;
    left: 36px;
    top: 8px;
    opacity: .5;
    color: #fff;
  }
  .login_fields input[type='password'] {
    color: #2297F1 !important;
  }
  .login_fields input[type='text'], .login_fields input[type='email'], .login_fields input[type='password'] {
    color: #afb1be;
    width: 100%;
    margin-top: -2px;
    background: #32364a;
    left: 0;
    padding: 10px 65px;
    border-top: 2px solid #393d52;
    border-bottom: 2px solid #393d52;
    border-right: none;
    border-left: none;
    outline: none;
    font-family: 'Gudea', sans-serif;
    box-shadow: none;
    font-size: 12px;
  }
  .login_fields__user, .login_fields__password {
    position: relative;
  }
  .login_fields__submit {
    position: relative;
    top: 35px;
    left: 0;
    width: 80%;
    right: 0;
    margin: auto;
  }
  .login_fields__submit .forgot {
    float: right;
    font-size: 10px;
    margin-top: 11px;
    /*text-decoration: underline;*/
  }
  .login_fields__submit .forgot a {
    color: #606479;
    text-decoration: none;
    transition: 0.2s all linear;
  }
  .login_fields__submit .forgot a:hover {
    color: #fff;
    text-decoration: none;
    transition: 0.2s all linear;
  }
  .login_fields__submit input {
    border-radius: 50px;
    background: transparent;
    padding: 10px 50px;
    border: 2px solid #2297F1;
    color: #2297F1;
    text-transform: uppercase;
    font-size: 11px;
    -webkit-transition-property: background,color;
    transition-property: background,color;
    -webkit-transition-duration: .2s;
            transition-duration: .2s;
  }
  .login_fields__submit input:focus {
    box-shadow: none;
    outline: none;
  }
  .login_fields__submit input:hover {
    color: white;
    background: #2297F1;
    cursor: pointer;
    -webkit-transition-property: background,color;
    transition-property: background,color;
    -webkit-transition-duration: .2s;
            transition-duration: .2s;
  }

  /* Color Schemes */
  .love {
    position: absolute;
    right: 20px;
    bottom: 0px;
    font-size: 11px;
    font-weight: normal;
  }
  .love p {
    color: white;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
  }
  .love a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
  .love img {
    position: relative;
    top: 3px;
    margin: 0px 4px;
    width: 10px;
  }

  .brand {
    position: absolute;
    left: 20px;
    bottom: 14px;
  }
  .brand img {
    width: 30px;
  }

  .signup{
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
  .signup-link{
    color: #606479;
    font-size: 14px;
    text-decoration: none;
    transition: 0.2s all linear;
  }

  .signup-link:hover{
    color: #fff;
    transition: 0.2s all linear;
  }
</style>
