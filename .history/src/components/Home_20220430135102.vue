<template>
  <div class="hello">
    <AButton :class="[theme]">
      <slot></slot>
    </AButton>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    AButton: () => import("@/components/button/Button.vue")
  },
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    theme() {
      console.log(this.type);ß
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
