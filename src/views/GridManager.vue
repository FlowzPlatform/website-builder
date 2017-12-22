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
    let gm = null;
    let containerObj = null;

    const beautify = require('beautify');

    // import './GridManager/jquery.gridmanager.min.js';

    export default {
        name:'GridManager',
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
        mounted: function() {

            var self = this;

            if(gm != null){
                gm.deinitCanvas();
            }
            gm = $("#mycanvas").gridmanager({
                debug: 1,
                customControls: {
                    global_col: [{ callback: self.test_callback, loc: 'top' }]
                }
            }).data('gridmanager');

            $("#gm-canvas").empty().append(this.$store.state.content)
            $(".gm-edit-mode").click().click();

        },
        methods: {
            getHtml: function(){
                let canvas = gm.$el.find("#" + gm.options.canvasId);
                gm.deinitCanvas();
                this.$store.state.content = beautify(canvas.html(), { format: 'html'});
                this.$store.state.content = (this.$store.state.content).replace(/&gt;/g, '>');
                gm.initCanvas();
            },
            test_callback: function(container, btnElem){
                this.dialogVisible = true;
                containerObj = container.getElementsByClassName("gm-content")[0];
            },
            setComponent() {
                this.dialogVisible = false;

                $(containerObj).text(this.selectedComponent);

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
</style>
