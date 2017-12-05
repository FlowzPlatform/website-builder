<template id="MonacoEditor">
    <div>
        <monaco-editor
          class="MonacoEditor"
          v-model="$store.state.content"
          language="javascript">
        </monaco-editor>
    </div> 
</template>

<script>
    import MonacoEditor from 'vue-monaco'
    
    export default {
        name: 'MonacoEditor',
        component: {
          MonacoEditor
        },
        data () {
          return {
          }
        }
    }
</script>

<style >
    .MonacoEditor {
      width: 600px;
      height: 800px;
    }
</style>
