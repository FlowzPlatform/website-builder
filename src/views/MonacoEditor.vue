<template id="MonacoEditorChild">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <MonacoEditor style="height: 98vh;" :code=this.$store.state.content :editorOptions="options" @mounted="onMounted" @codeChange="onCodeChange">
          </MonacoEditor>    
        </div>
      </div>
      
    </div> 
</template>

<script>
  import MonacoEditor from 'vue-monaco-editor'
  
  export default {
  	name: 'MonacoEditorChild',
  	data () {
  		return {
  			options: {
  				selectOnLineNumbers: true,
  				roundedSelection: false,
  				readOnly: false,
  				cursorStyle: 'line',
  				automaticLayout: false,
  				glyphMargin: true,
  				language: 'html'
  			}
  		}
  	},
  	components: {
  		MonacoEditor
  	},
  	methods: {
  		onMounted (editor) {
  			this.editor = editor
  		},
  		onCodeChange (editor) {
  			this.$store.state.content = editor.getValue()
  		}
  	}
  }
</script>

<style scoped>
</style>
