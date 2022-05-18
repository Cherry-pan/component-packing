<template>
  <div class="hello">
  <AButton></AButton>
  </div>
</template>

<script>
import AButton from "@/components/button/Button.vue"
export default {
  name: 'HelloWorld',
  components:{
    AButton
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
