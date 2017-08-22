<template>
  <div class="PageSettings">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 4%;">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Page name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Page Theme">
              <el-select v-model="form.theme" placeholder="Please select page theme">
                <el-option label="Light Theme" value="light"></el-option>
                <el-option label="Dark Theme" value="dark"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Page SEO Title">
              <el-input v-model="form.seoTitle"></el-input>
            </el-form-item>

            <el-form-item label="Page SEO Keywords">
              <el-input v-model="form.seoKeywords"></el-input>
            </el-form-item>
            
            <el-form-item label="Page SEO Description">
              <el-input type="textarea" :rows="5" v-model="form.seoDesc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="savePageSettings">Save</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form> 
        </div>
      </div> 
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'PageSettings',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        name: '',
        theme: '',
        seoTitle: '',
        seoKeywords: '',
        seoDesc: ''
      }
    }
  },
  component: {
  },
  methods: {
    savePageSettings() {
      console.log('submit!');
      let PageSettings = {"PageName":this.form.name,"PageTheme":this.form.theme,"PageSEOTitle":this.form.seoTitle,"PageSEOKeywords":this.form.seoKeywords,"PageSEODescription":this.form.seoDesc};

      console.log(PageSettings);

      
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
