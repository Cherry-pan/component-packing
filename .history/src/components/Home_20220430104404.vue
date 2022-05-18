<template>
  <div class="hello">
  <AButton></AButton>
  </div>
</template>

<script>
import AButton from "./button/Button.vue"
export default {
  name: 'Home',
  components:{
    "AButton":()=>import("@/components/button/Button.vue")
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
