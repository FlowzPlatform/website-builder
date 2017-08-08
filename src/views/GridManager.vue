<template id="GridManager">
    <div class="container-fluid">
        <div id="mycanvas" class="clearfix"></div>

        <el-dialog
          title="Tips"
          :visible.sync="dialogVisible"
          size="tiny">
          <span>
              <el-select v-model="value" placeholder="Select Component">
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
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
          </span>
        </el-dialog>
    </div> 
</template>
<script>
    let gm = null

    import './GridManager/jquery.gridmanager.min.js'
    
    export default {         
        name:'GridManager',    
        data () {
            return {
                dialogVisible: false,
                options: [{
                  value: 'hello',
                  label: 'Hello Component'
                }, {
                  value: 'there',
                  label: 'There Component'
                }],
                value: ''
            }
        },  
        // created () {
        //     function test_callback(container, btnElem){
        //         alert('internal hello');
        //         this.dialogVisible = true;
        //     }
        // },   
        mounted: function() { 
            
            var self = this;

            if(gm != null){
                gm.deinitCanvas();
            }
            gm = $("#mycanvas").gridmanager({
                debug: 1,
                customControls: {
                    //global_row: [{ callback: 'test_callback', loc: 'bottom', btnLabel: 'row btn' }],
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
            },
            handleCommand(command) {
                this.$message('click on item ' + command);
            }
        }
    }
</script>