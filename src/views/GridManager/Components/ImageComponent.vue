<template>
  <div class="ImageComponent">
    <img :src=options[0].url :alt=options[0].alt>
  </div>
</template>

<script>

export default {
  name: 'ImageComponent',
  props: {
    options: {
      type: Array
    }
  },
  data () {
    return {
      data: 'data'
    }
  },
  component: {
  },
  mounted () {
    console.log('Image component mounted');
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
