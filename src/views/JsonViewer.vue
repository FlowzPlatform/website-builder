<template id="json-viewer">
  <div>
    <div class="container" style="margin-top: 2%;">
      <div class="row">
        <div class="col-md-12">
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
  }
</style>