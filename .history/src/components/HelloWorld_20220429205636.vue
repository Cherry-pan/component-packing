<template>
  <div class="hello">
   <!-- <a-button></a-button> -->
   1111
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components:{
    "a-button":()=>import("./button/Button.vue")
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
