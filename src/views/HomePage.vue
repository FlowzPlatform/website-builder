<template>
  <div class="HomePage">
    <div class="container">
      <div class="block">
        <div class="number">52</div>
        <div class="string">projects</div>
      </div>
      <div class="block">
        <div class="number">2891</div>
        <div class="string">dollars</div>
      </div>
      <div class="block">
        <div class="number">893</div>
        <div class="string">objects</div>
      </div>
      <div class="block">
        <div class="number">136</div>
        <div class="string">clients</div>
      </div>
      <div class="block">
        <div class="number">274</div>
        <div class="string">requests</div>
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
  },
  mounted () {

    $.fn.editable.defaults.mode = 'inline';

    $(document).ready(function() {
      $('#xeditable').editable();
    });
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







* {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.HomePage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  height: 90vh;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  /*background: #ef5350;*/
  font-family: "Lato", Arial;
  color: #fff;
}
.HomePage .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  width: 600px;
  height: 100px;
  background: #fff;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-radius: 8px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.3);
  /*background: #01BBD4;*/
  background: linear-gradient(to right, #AB64F6 0%, #61DBF7 100%);
}
.HomePage .container .block {
  text-align: center;
  height: 100%;
  width: 100px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.HomePage .container .block:hover {
  color: #fff;
}
.HomePage .container .block .number {
  font-size: 32px;
  font-weight: bold;
}
.HomePage .container .block .string {
  font-size: 12px;
  line-height: 18px;
  opacity: 0.7;
}

@media(max-width: 680px){
  .HomePage .container {
    width: 95%;
    margin-left: 5px;
  }
}

</style>
