<template>
  <div class="SiteFooter">
    <footer>
        <p>© 2017<a style="color:#0a93a6; text-decoration:none;" href="/"> Flowz</a>, All rights reserved 2016-2017.</p>
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
      data: 'data'
    }
  },
  component: {
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
    height: 35px;
    text-align: center;
    color: #CCC;
}

footer p {
    padding: 10.5px;
    margin: 0px;
    line-height: 100%;
}
</style>
