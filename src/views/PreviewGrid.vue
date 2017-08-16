<script>
import ImageComponent from './GridManager/Components/ImageComponent'
import NavbarComponent from './GridManager/Components/NavbarComponent'

var templateRenderFns = [];
import HTML from 'vue-html'
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'PreviewGrid',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
    	templateRender: null,
      ImageComponent: ImageComponent,
      NavbarComponent: NavbarComponent
    }
  },
  render(h) {
	    return h('div', [
	    (this.templateRender ?
	        this.templateRender() :
	        '')
	    ]);
	},
  component: {
  	ImageComponent,
    NavbarComponent
  },
	staticRenderFns: templateRenderFns,

	mounted() {
      console.log(this.$store.state.content);
      let htmlContent = this.$store.state.content.replace(/&lt;/g, '<').replace(/&gt;/g, '>'); 
      console.log('content',htmlContent)
      
      let compiledTemplate = Vue.compile(`
          <div>` + htmlContent + `
      </div>`);
  
      this.templateRender = compiledTemplate.render;
      
      templateRenderFns.length = 0;
      for (let i in compiledTemplate.staticRenderFns) {
          templateRenderFns.push(compiledTemplate.staticRenderFns[i]);
      }
  },

  methods: {
  	htmlDecode : function(encodedStr ){
	    var parser = new DOMParser;
	    var dom = parser.parseFromString(
	        '<!doctype html><body>' + encodedStr,
	        'text/html');
	    return dom.body.textContent;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
