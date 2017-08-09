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

    import './GridManager/jquery.gridmanager.min.js';

    import ImageComponent from './ImageComponent';
    
    export default {         
        name:'GridManager',    
        data () {
            return {
                dialogVisible: false,
                options: [{
                  value: 'profileCard',
                  label: 'Profile Component'
                }, {
                  value: 'image',
                  label: 'Image Component'
                }],
                selectedComponent: ''
            }
        }, 
        components: {
            ImageComponent
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
                this.$store.state.content = canvas.html()
                console.log(this.$store.state.content)
                gm.initCanvas();
            },
            test_callback: function(container, btnElem){
                this.dialogVisible = true;
                containerObj = container.getElementsByClassName("gm-content")[0];
            },
            setComponent() {
                this.dialogVisible = false;
                if(this.selectedComponent == 'profileCard'){
                    let htmlData = '<component :is="header" :id="header1">'
                    $(containerObj).text(htmlData);    
                } else {
                    let htmlData = '<component :is="ImageComponent" :url="http://placehold.it/700x400" :text="Loading...">'
                    $(containerObj).text(htmlData);    
                }
                
            }
        }
    }
</script>

<style scoped>
    .el-select{
        width: 100%;
    }
</style>