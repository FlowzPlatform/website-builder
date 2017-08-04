<template>
  <div id="app">
  	<div class="layout">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
		      <el-row style="margin-bottom: 0">
		        <el-col :span="4">
		          <div class="logo">
		            <img src="http://placehold.it/120x50/666666/EEEEEE/?text=Flowz" @click="homePage">
		          </div>
		        </el-col>
		        <el-menu-item index="1" style="float: right; margin-top: 5px;" @click="loginPage">
		            <el-button type="info" v-if="isLoggedIn === 'no'">Login</el-button>
		            <el-button type="danger" v-else @click="doLogout">Logout</el-button>
		        </el-menu-item>
		        
		      </el-row>
		    </el-menu>
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
    box-shadow: 0px 0px 25px;
    border-radius: 0;
  }

  .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover{
    background-color: transparent;
  }
</style>
