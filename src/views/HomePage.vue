<template>
  <div class="HomePage">
    <div class="container-fluid">
    	<div class="row">
    		<div class="col-md-12 mainDiv" align="center">
    			<h3>Looks like youe haven't selected any file yet. get started by selecting file from the sidemenu</h3>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
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
.mainDiv{
	margin-top: 18%;
	color: #999;
}
.mainDiv h3{
	color: #ccc;
	text-transform: uppercase;
	/*text-shadow: -0px 0px hsla(0,0%,100%,0.03333), 0px -0px hsla(0,0%,0%,0.2), -0.5px 0.5px hsla(0,0%,100%,0.03333), 0.5px -0.5px hsla(0,0%,0%,0.2), -1px 1px hsla(0,0%,100%,0.03333), 1px -1px hsla(0,0%,0%,0.2), -1.5px 1.5px hsla(0,0%,100%,0.03333), 1.5px -1.5px hsla(0,0%,0%,0.2), -2px 2px hsla(0,0%,100%,0.03333), 2px -2px hsla(0,0%,0%,0.2), 0px 0px 40px hsla(0,0%,100%,0.1);*/
}
</style>
