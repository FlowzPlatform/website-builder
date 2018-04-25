<template id="GridManager">
    <div class="container-fluid">
        <div id="mycanvas" class="clearfix"></div>

        <el-dialog
          title="Add Component"
          :visible.sync="dialogVisible"
          size="tiny">
          <span>
              <el-select v-model="selectedComponent" placeholder="Select Component">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="setComponent()">Confirm</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
    // import './GridManager/jquery.gridmanager.min.js';

import axios from 'axios'

let gm = null
let containerObj = null

const beautify = require('beautify')
const config = require('../config')

export default {
    	name: 'GridManager',
    	data () {
    		return {
    			dialogVisible: false,
    			options: [{
    				value: '<component :is="ImageComponent" :options="[{ url: \'http://placehold.it/100x100/008080/FFFFFF\', alt: \'Profile Image\' }]"></component>',
    				label: 'Profile Component'
    			}, {
    				value: '<component :is="ImageComponent" :options="[{ url: \'http://placehold.it/700x400\', alt: \'Loading...\' }]"></component>',
    				label: 'Image Component'
    			}, {
    				value: '<component :is="NavbarComponent" :options="[{ navbarClass: \'navbar-inverse\' }]"></component>',
    				label: 'Navbar Component'
    			}],
    			selectedComponent: ''
    		}
    	},
    	components: {
    	},
    	mounted: function () {
    		var self = this

    		if (gm != null) {
    			gm.deinitCanvas()
    		}
    		gm = $('#mycanvas').gridmanager({
    			debug: 1,
    			customControls: {
    				global_col: [{ callback: self.test_callback, loc: 'top' }]
    			}
    		}).data('gridmanager')
    		this.init()
    },
    	methods: {
    		init () {
    			$('#gm-canvas').empty().append(this.$store.state.content)
    			$('.gm-edit-mode').click().click()
    		},
    		getSavedHtml: async function () {
    			// console.log('from GridManager')
    			let response = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + this.$store.state.fileUrl, {
    			}).catch((err) => { console.log('Error:', err) })
			this.$store.state.content = response.data
    		},
    		getHtml: function () {
    			let canvas = gm.$el.find('#' + gm.options.canvasId)
    			gm.deinitCanvas()
    			this.$store.state.content = beautify(canvas.html(), { format: 'html'})
    			this.$store.state.content = (this.$store.state.content).replace(/&gt;/g, '>')
    			gm.initCanvas()
    		},
    		test_callback: function (container, btnElem) {
    			this.dialogVisible = true
    			containerObj = container.getElementsByClassName('gm-content')[0]
    		},
    		setComponent () {
    			this.dialogVisible = false

    			$(containerObj).text(this.selectedComponent)
    		}
    	},
    	watch: {
    		'$store.state.content': function (newvalue) {
    			this.init()
    		}
    	}
    }
</script>

<style >
    .el-select{
        width: 100%;
    }

    #gm-canvas .row.gm-editing>.gm-tools, #gm-canvas .row-fluid.gm-editing>.gm-tools{
      width: 100%;
    }

    #gm-canvas .row.gm-editing>.gm-tools a:hover, #gm-canvas .row-fluid.gm-editing>.gm-tools a:hover{
      float: right;
    }

    .fa{
      font-size: auto !important;
      font-style: auto !important;
      font-variant-ligatures: auto !important;
      font-variant-caps: auto !important;
      font-variant-numeric: auto !important;
      font-variant-east-asian: auto !important;
      font-weight: auto !important;
      font-stretch: auto !important;
      line-height: auto !important;
    }

    #gm-right-control-btns{
      display: none;
    }
</style>