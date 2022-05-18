<template>
  <div class="hello">
    <AButton type="primary">
      蓝色按钮
    </AButton>
    <AButton>
      默认按钮
    </AButton>
    <AButton type="success">
      绿色ß按钮
    </AButton>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    AButton: () => import("@/components/button/Button.vue")
  },

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
