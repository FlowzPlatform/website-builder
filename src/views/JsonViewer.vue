<template id="json-viewer">
  <div>
    <div class="container" style="margin-top: 2%;">
      <div class="row">
        <div class="col-md-12">
          <div class="alert alert-danger">
            <strong>Warning!</strong> Please do not edit any configuration files unless and until you know what you are doing. Else, it may lead to non-working state of your project/website.
          </div>
          <vue-json-editor v-model="$store.state.content" :showBtns="false" @json-change="onJsonChange"></vue-json-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vueJsonEditor from 'vue-json-editor'
  export default {
    name:'json-viewer',
    data: () => ({
        json : {}
    }),
    components: {
      vueJsonEditor
    },
    methods: {
      onJsonChange (value) {
          this.$store.state.content = value
        // console.log('value:', value)
      }
    }
  }
</script>

<style>
  div.jsoneditor{
    min-height: 700px;
    margin-bottom: 80px;
  }

  .ace_editor{
    height: 700px !important;
  }

  textarea.jsoneditor-text{
    height: 700px;
  }
</style>