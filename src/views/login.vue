<template>
  <div class="Login">
    <vue-particles color="#dedede"></vue-particles>
    <div class='brand'>
      <a href="javascript:void()" @click="goToLandingPage">
          <img src='../../static/img/Flowz-logo.png' class="flowz-logo">
      </a>
    </div>
    <div class='login'>
      <div class='login_title'>
        <span>Login to Flowz Builder</span>
      </div>
      <form id="form-facebook" name="form-facebook" :action="loginWithFacebookUrl" method="post">
        <input type="hidden" name="success_url" :value="facebookSuccessCallbackUrl">
      </form>
      <form id="form-google" name="form-google" :action ="loginWithGoogleUrl" method="post">
        <input type="hidden" name="success_url" :value="googleSuccessCallbackUrl">
      </form>
      <form id="form-twitter" name="form-twitter" :action ="loginWithTwitterUrl" method="post">
        <input type="hidden" name="success_url" :value="twitterSuccessCallbackUrl">
      </form>
      <form id="form-github" name="form-github" :action ="loginWithGithubUrl" method="post">
        <input type="hidden" name="success_url" :value="githubSuccessCallbackUrl">
      </form>
      <form id="form-linkedIn" name="form-linkedIn" :action ="loginWithLinkedInUrl" method="post">
        <input type="hidden" name="success_url" :value="linkedInSuccessCallbackUrl">
      </form>
      <div class="social-buttons" align="center">
        <div>
          <a href="javascript:void(0)" class="social-button-facebook" v-on:click="doFacebookLogin()"><i class="fa fa-facebook"></i></a>
          <a href="javascript:void(0)" class="social-button-google-plus" v-on:click="doGooglePlusLogin()"><i class="fa fa-google-plus"></i></a>
          <a href="javascript:void(0)" class="social-button-twitter" v-on:click="doTwitterLogin()"><i class="fa fa-twitter"></i></a>
          <a href="javascript:void(0)" class="social-button-github" v-on:click="doGithubLogin()"><i class="fa fa-github"></i></a>
          <a href="javascript:void(0)" class="social-button-linked-in" v-on:click="doLinkedInLogin()"><i class="fa fa-linkedin"></i></a>
        </div>
      </div>
      <div>
        <p style="text-align: center">OR</p>
      </div>
      <div class='login_fields'>
          <div class='login_fields__user'>
              <div class='icon'>
                  <img src='../assets/images/user_icon_copy.png'>
              </div>
              <input placeholder='Email Id' class="input-fields" type='text' v-model="form.user" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
              </input>
          </div>
          <div class='login_fields__password'>
              <div class='icon'>
                  <img src='../assets/images/lock_icon_copy.png'>
              </div>
              <input placeholder='Password' class="input-fields" type='password' v-model="form.pass" required>
              <div class='validation'>
                  <img src='../assets/images/tick.png'>
              </div>
          </div>
          <div class='login_fields__submit'>
              <input type='submit' value='Log In'>
              <div class='forgot'>
                  <a href='/forgot_password'>Forgotten password?</a>
              </div>
          </div>
          <div class="signup">
            <el-tooltip class="item" effect="dark" content="Signup Now" placement="bottom">
              <a href="/register" class="signup-link">New Here?</a>
            </el-tooltip>
          </div>
      </div>
      <div class='success'>
          <h2 v-if="authen.status === true">{{authen.success}}</h2>
          <p v-if="authen.status === true">You will be redirected soon...</p>
      </div>
      <div class='disclaimer'>
          <p>Login to Flowz Web Builder and experience the Next Generation Web Application Building.</p>
      </div>
    </div>
    <div class='authent'>
        <img src='../assets/images/puff.svg'>
        <p>Authenticating...</p>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import VueSession from 'vue-session'

Vue.use(VueSession)

import axios from 'axios';
import psl from 'psl';



const config = require('../config');

export default {
  name: 'Login',
  data () {
    return {
      form: {
        user: '',
        pass: ''
      },
      authen: {
        status: false,
        success: 'Authentication Success',
        error: 'Authentication Failed'
      },
      facebookSuccessCallbackUrl : config.facebookSuccessCallbackUrl,
      googleSuccessCallbackUrl : config.googleSuccessCallbackUrl,
      twitterSuccessCallbackUrl: config.twitterSuccessCallbackUrl,
      githubSuccessCallbackUrl: config.githubSuccessCallbackUrl,
      linkedInSuccessCallbackUrl: config.linkedInSuccessCallbackUrl,
      loginWithFacebookUrl : config.loginWithFacebookUrl,
      loginWithGoogleUrl : config.loginWithGoogleUrl,
      loginWithTwitterUrl: config.loginWithTwitterUrl,
      loginWithGithubUrl: config.loginWithGithubUrl,
      loginWithLinkedInUrl: config.loginWithLinkedInUrl
    }
  },
  component: {
  },
  methods: {
    authenticate () {
      console.log('Authenticating User');

      axios.post(config.loginUrl, {
        password: this.form.pass,
        email: this.form.user
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(async response => {
        if (response.data) {
          this.$session.start()
          this.$session.set('token', response.data.logintoken);
          // localStorage.setItem("auth_token", response.data.logintoken);

          // Store Token in Cookie
          let location = psl.parse(window.location.hostname)
          location = location.domain === null ? location.input : location.domain
          this.$cookie.set('auth_token', response.data.logintoken, {expires: 1, domain: location});

          // Set email Session
          this.$session.set('email', this.form.user);
          localStorage.setItem('email', this.form.user);
          // this.$router.push('/');

          this.$session.set('privateToken', response.data.private_token);
          this.$session.set('userId', response.data.id);
          this.$session.set('username', response.data.username);
          this.authen.status = true;

          await axios.post(config.baseURL+'/flows-dir-listing' , {
            foldername :'/var/www/html/websites/'+ this.$session.get('email'),
            type : 'folder'
          })
          .then((res) => {
            this.$router.push('/editor');
            console.log('user Folder created!');
          })
          // await axios.get( config.baseURL + '/user-service?email=' + this.form.user + '&password=' + this.form.pass, {
          // }).then(response => {
          //   if (response.data) {
          //       this.$session.set('privateToken', response.data.private_token);
          //       this.$session.set('userId', response.data.id);
          //       this.$session.set('username', response.data.username);
          //       this.authen.status = true;

          //       // axios.post(config.baseURL+'/flows-dir-listing' , {
          //       //   foldername :'/var/www/html/websites/'+ this.$session.get('username'),
          //       //   type : 'folder'
          //       // })
          //       // .then((res) => {
          //       //   console.log('user Folder created!');
          //       // })

          //       let self = this;
          //       setTimeout(function () {
          //         self.$router.push('/editor');
          //       }, 2000);
                
          //   }
          // }).catch(error => {
          //   console.log(error);
          //   this.authen.status = false;
          //   // this.$notify.error({
          //   //   title: 'Error',
          //   //   message: error.response.data,
          //   //   offset: 100
          //   // });
          // })
        }
        
      }).catch(error => {
        this.authen.status = false;
        // this.$notify.error({
        //   title: 'Error',
        //   message: error.response.data,
        //   offset: 100
        // });
      })
    },

    doFacebookLogin () {
      console.log('Facebook Login');
      document.getElementById('form-facebook').submit();
    },

    doGooglePlusLogin () {
      console.log('Google Login');
      document.getElementById('form-google').submit();
    },

    doTwitterLogin () {
      console.log('Twitter Login');
      document.getElementById('form-twitter').submit();
    },

    doGithubLogin () {
      console.log('Github Login');
      document.getElementById('form-github').submit();
    },

    doLinkedInLogin () {
      console.log('LinkedIn Login');
      document.getElementById('form-linkedIn').submit();
    },

    goToLandingPage () {
      this.$router.push('/');
    }
  },
  created () {
    // Check if login token in cookie exist or not
    if(this.$cookie.get('auth_token')){
      this.$router.push('/editor');
    }
  },
  mounted () {

    let self = this;

    $('.input-fields').keyup(function(e){ 
        var code = e.which; // recommended to use e.which, it's normalized across browsers
        if(code==13)e.preventDefault();
        if(code==32||code==13||code==188||code==186){
            if(self.form.user != '' && self.form.pass != ''){
              self.authenticate();
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
                      message: 'Username Password did not matched..',
                      type: 'error'
                  });
                }
                
              },3200);
            } else {
              self.$message({
                  showClose: true,
                  message: 'Please Enter all Fields',
                  type: 'error'
              });
            }
        } // missing closing if brace
    });

    $('input[type="submit"]').click(function(){
      if(self.form.user != '' && self.form.pass != ''){
        self.authenticate();
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
                message: 'Username Password did not matched..',
                type: 'error'
            });
          }
          
        },3200);
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

    // var open = 0;
    // $('.tab').click(function(){
    //   $(this).fadeOut(200,function(){
    //     $(this).parent().animate({'left':'0'})
    //   });
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Gudea:400,700);
  
  p {
    color: #606479;
    text-align: left;
    font-size: 10px;
  }
  .Login {
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
    height: 480px;
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
    height: 400px;
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
    width: 60px;
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

  .social-buttons{
    margin: 15px 0px;
  }

  .social-buttons a{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 500%;
    padding: 6px 0px 0px 0px; 
    background-color: #444;
    transition: 0.2s all linear;
    color: #fff;
  }

  .social-button-facebook:hover {
    background-color: #474899;
    transition: 0.2s all linear;
  }

  .social-button-google-plus:hover {
    background-color: #EB313B;
    transition: 0.2s all linear;
  }

  .social-button-twitter:hover {
    background-color: #0FA1E4;
    transition: 0.2s all linear;
  }

  .social-button-github:hover {
    background-color: #1E1B1C;
    transition: 0.2s all linear;
  }

  .social-button-linked-in:hover {
    background-color: #006FB7;
    transition: 0.2s all linear;
  }
</style>
