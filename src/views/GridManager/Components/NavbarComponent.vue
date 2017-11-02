<template>
  <div class="NavbarComponent">
    <nav class="navbar" :class=options[0].navbarClass>
	  <div class="">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span> 
	      </button>
	      <a class="navbar-brand" href="#">WebSiteName</a>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">Home</a></li>
	        <li><a href="#">Page 1</a></li>
	        <li><a href="#">Page 2</a></li> 
	        <li><a href="#">Page 3</a></li> 
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
	        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>
  </div>
</template>

<script>

export default {
  name: 'NavbarComponent',
  props: {
    options: {
      type: Array
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
.navbar-nav{
	flex-direction: row;
}

.navbar-brand{
	padding: 15px 15px;
}
</style>
		