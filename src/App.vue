<template>
  <div id="app">
  	<div class="layout">
        <!-- <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
		      <el-row style="margin-bottom: 0">
		        <el-col :span="4">
		          <div class="logo">
		            <img src="./../static/img/Flowz-logo.png" height="40px" style="margin-top: 5px;" @click="homePage">
		          </div>
		        </el-col>
		        <el-menu-item index="1" style="float: right; margin-top: 5px;">
		            <el-button type="info" v-if="isLoggedIn === 'no'" @click="loginPage">Login</el-button>
                <div v-else>
                  <span class="welcomeUser">Welcome <strong>{{username}}</strong>!</span>
                  <el-tooltip class="item" effect="dark" content="Logout" placement="bottom">
                    <el-button type="danger" class="logout-btn" @click="doLogout"><i class="fa fa-sign-out"></i></el-button>
                  </el-tooltip>
                </div>
		        </el-menu-item>
		        
		      </el-row>
		    </el-menu> -->
        <el-tooltip class="item" effect="dark" content="Go To Dashboard" placement="bottom" v-if="isLoggedIn === true && ifDashboard === false">
          <el-button type="warning" class="dashboard-btn" @click="goToDashboard"><i class="fa fa-tachometer"></i></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="useremailID" placement="bottom" v-if="isLoggedIn === true && ifDashboard === false">
          <el-button type="danger" class="logout-btn" @click="doLogout"><i class="fa fa-sign-out"></i></el-button>
        </el-tooltip>
        <div class="layout-content">
            <router-view></router-view>
        </div>
        <!-- <SiteFooter></SiteFooter> -->
    </div>
  </div>
</template>

<script>

import psl from 'psl';
import Cookies from 'js-cookie';
import SiteFooter from './views/footer';
export default {
  name: 'app',
  data () {
    return {
      isLoggedIn: false,
      username : '',
      ifDashboard: false,
      useremailID: ''
    }
	},
  components: {
    SiteFooter
  },
  updated: function () {
    if(this.$cookie.get('auth_token')){
      this.isLoggedIn = true;
    } else {

    }
  },
  mounted: function () {
    this.init();
    this.checkDashboard();

    // Check for auth token on focusing to current tab
    // $(window).on('focus', function() { 
    //   alert(1);
    //   // let location = psl.parse(window.location.hostname)
    //   // location = location.domain === null ? location.input : location.domain
    //   // Cookies.remove('auth_token' ,{domain: location});
    // });

    this.checkAuth();
  },
  methods: {
    checkAuth(){

      let self = this;

        // Check for Auth_Token. Helpful when user logs out from another application.
        
        window.onload = function() {

          if(self.$route.path == '/login' || self.$route.path == '/' || self.$route.path == '/register' || self.$route.path == '/forgot_password' || self.$route.path == '/reset-password' || self.$route.path == '/email-verification'){
            
          } else {
            
            var hidden, visibilityState, visibilityChange;

            if (typeof document.hidden !== "undefined") {
                hidden = "hidden", visibilityChange = "visibilitychange", visibilityState = "visibilityState";
            }
            else if (typeof document.mozHidden !== "undefined") {
                hidden = "mozHidden", visibilityChange = "mozvisibilitychange", visibilityState = "mozVisibilityState";
            }
            else if (typeof document.msHidden !== "undefined") {
                hidden = "msHidden", visibilityChange = "msvisibilitychange", visibilityState = "msVisibilityState";
            }
            else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange", visibilityState = "webkitVisibilityState";
            }

            document.addEventListener(visibilityChange, function() {

                switch (document[visibilityState]) {
                case "visible":
                    let location = psl.parse(window.location.hostname)
                    location = location.domain === null ? location.input : location.domain;
                    if(Cookies.get('auth_token' ,{domain: location})){

                    } else {
                      self.$message({
                        message: 'You\'re Logged Out From System. Please login again!',
                        duration: 2000,
                        type: 'error',
                        onClose(){
                          window.location = '/login'
                        }
                      });
                    }
                    
                    break;
                case "hidden":
                    break;
                }
            });
          }
        };
    },
    init () {
      if(this.$cookie.get('auth_token')){
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      this.useremailID = 'Logout: ' + Cookies.get('email');
    },
  	handleSelect() {
    },
    loginPage() {
      this.$router.push('/login');
    },
    homePage() {
      this.$router.push('/');
    },
    doLogout() {
      this.$confirm('Do you want to logout?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
             localStorage.removeItem('current_sub_id');
            this.$session.remove('username');
            let location = psl.parse(window.location.hostname)
            location = location.domain === null ? location.input : location.domain
            Cookies.remove('auth_token' ,{domain: location});
            Cookies.remove('email' ,{domain: location});
            Cookies.remove('userDetailId' ,{domain: location}); 
            Cookies.remove('subscriptionId' ,{domain: location}); 

            this.isLoggedIn = false;
            // this.$router.push('/login');
            window.location = '/login';
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: 'Delete canceled'
          // });          
        });
    },
    goToDashboard(){
      // this.$router.push('/user-dashboard');
      window.location = "/user-dashboard";
    },
    checkDashboard(){

      let routerName =  this.$route.path;

      if(routerName == '/user-dashboard' || this.$session.get('username') != undefined){
       this.ifDashboard = true;
       this.isLoggedIn = true;  
      } else {
        this.ifDashboard = false;
        this.isLoggedIn = false;
      }
    }
  },
  watch: {
    '$route.path': function(newvalue) {
      this.init();
      this.checkDashboard();
    }
  }
}
</script>

<style scoped>
	/*@import 'assets/common.css'*/
  
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

  .layout-content{
    /*margin-top: 65px;*/
    /*z-index: 1;*/
  }

  .logout-btn{
    position: fixed;
    right: 7px;
    bottom: 7px;
    z-index: 10;
    width: 30px;
    height: 28px;
  }

  .dashboard-btn{
    position: fixed;
    right: 45px;
    bottom: 7px;
    z-index: 10;
    width: 30px;
    height: 28px;
  }

  .dashboard-btn i{
    position: absolute;
    left: 7px;
    top: 7px;
  }

  .logout-btn i{
    position: absolute;
    left: 9px;
    top: 7px;
  }

  .SiteFooter{
    z-index: 10;
  }
</style>
