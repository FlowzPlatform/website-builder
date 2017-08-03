<template id="code-mirror">
    <div>
        <codemirror v-model="$store.state.content" :options="editorOption"></codemirror>
    </div> 
</template>

<script>
    import Vue from 'vue'
    import VueCodeMirror from 'vue-codemirror'

    Vue.use(VueCodeMirror)
    
    export default {
        name:'code-mirror',
        data: () => ({
            editorOption : {
                mode: 'text/javascript'
            }
        })
    }
</script>