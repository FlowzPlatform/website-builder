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
        <el-tooltip class="item" effect="dark" content="Logout" placement="bottom" v-if="isLoggedIn === 'yes'">
          <el-button type="danger" class="logout-btn" @click="doLogout"><i class="fa fa-sign-out"></i></el-button>
        </el-tooltip>
        <div class="layout-content">
            <router-view></router-view>
        </div>
        <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script>
import SiteFooter from './views/footer'
export default {
  name: 'app',
  data () {
    return {
      isLoggedIn: 'no',
      username : ''
    }
	},
  components: {
    SiteFooter
  },
  updated: function () {
    if (this.$session.exists()) {
      this.username  =  this.$session.get('username')
      this.isLoggedIn = 'yes';
    }
  },
  mounted: function () {
    if (this.$session.exists()) {
      this.username  =  this.$session.get('username')
      this.isLoggedIn = 'yes';
    }
  },
  methods: {
  	handleSelect() {
    },
    loginPage() {
      this.$router.push('/login');
    },
    homePage() {
      this.$router.push('/');
    },
    doLogout() {
      this.$session.destroy();
      this.isLoggedIn = 'no';
      this.$router.push('/login');
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
    height: 30px;
  }

  .logout-btn i{
    position: absolute;
    left: 10px;
    top: 8px;
  }

  .SiteFooter{
    z-index: 10;
  }
</style>
