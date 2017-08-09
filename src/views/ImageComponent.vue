<template>
  <div class="ImageComponent">
    <img src=url alt=text >
  </div>
</template>

<script>

export default {
  name: 'ImageComponent',
  props: {
    url: {
      type: String
    },
    text: {
    	type: String
    }
  },
  data () {
    return {
      data: 'data'
    }
  },
  component: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
