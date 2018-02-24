<template>
  <div class="SiteFooter">
    <footer>
        <p>© 2017<a style="color:#0a93a6; text-decoration:none;" href="http://flowz.com" target="_blank"> Flowz</a>, All rights reserved 2017-2018.</p>
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
    }
  },
  component: {
  },
  updated: function () {
    
  },
  mounted: function () {
    
  },
  methods: {
    
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
