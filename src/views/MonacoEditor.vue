<template id="MonacoEditor">
    <div>
        <MonacoEditor
          height="300"
          width="1200"
          language="javascript"
          :code="code"
          :editorOptions="options"
          @mounted="onMounted"
          @codeChange="onCodeChange"
          >
        </MonacoEditor>
    </div> 
</template>

<script>

  import MonacoEditor from 'vue-monaco-editor'
    
  export default {
      name: 'MonacoEditor',
      component: {
        
      },
      data () {
        return {
          code: '<MonacoEditor language="typescript" :code="code" :editorOptions="options" @mounted="onMounted" @codeChange="onCodeChange"></MonacoEditor>',
          options: {
            selectOnLineNumbers: true
          }
        }
      },
      components: {
        MonacoEditor
      },
      mounted () {

      }
  }
</script>

<style >
    .MonacoEditor {
      width: 600px;
      height: 800px;
    }
</style>
