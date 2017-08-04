<template id="GridManager">
    <div class="container-fluid">
        <div id="mycanvas" class="clearfix"></div>
    </div> 
</template>
<script>
    let gm = null

    import './GridManager/jquery.gridmanager.min.js'
    
    export default {         
        name:'GridManager',         
        mounted: function() {   
            if(gm != null){
                gm.deinitCanvas();
            }
            gm = $("#mycanvas").gridmanager({
                debug: 1,
                customControls: {
                    //global_row: [{ callback: 'test_callback', loc: 'bottom', btnLabel: 'row btn' }],
                    global_col: [{ callback: 'test_callback', loc: 'top' }]
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
                alert('hello');
            }
        }
    }
</script>