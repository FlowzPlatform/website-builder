<template>
  <div class="SiteFooter">
    <footer>
        <p>© 2017<a style="color:#0a93a6; text-decoration:none;" href="/"> Flowz</a>, All rights reserved 2016-2017. 
          <!-- <el-tooltip class="item" effect="dark" content="Logout" placement="left">
            <a v-if="isLoggedIn === 'yes'" href="#" style=" text-decoration:none; margin-top: -5px;" class="btn btn-danger btn-sm pull-right" @click="doLogout">
              <i class="fa fa-sign-out"></i>
            </a>
          </el-tooltip> -->
        </p>

    </footer>
  </div>
</template>

<script>

export default {
  name: 'SiteFooter',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      data: 'data',
      isLoggedIn: 'no'
    }
  },
  component: {
  },
  updated: function () {
    if (this.$session.exists()) {
      this.isLoggedIn = 'yes';
    }
  },
  mounted: function () {
    if (this.$session.exists()) {
      this.isLoggedIn = 'yes';
    }

    // $(document).ready(function(){
    //     $('[data-toggle="tooltip"]').tooltip(); 
    // });
  },
  methods: {
    doLogout() {
      this.$session.destroy();
      this.isLoggedIn = 'no';
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Footer */

footer{
   background-color: #292929;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    text-align: center;
    color: #CCC;
    padding-top: 7px;
    z-index: 9;
}

footer p {
    padding: 10.5px;
    margin: 0px;
    line-height: 100%;
}
</style>
