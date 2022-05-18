<template>
  <div>
    <AButton type="primary" border round disabled size="mini" minWidth="160px" prefix="shangchuan" suffix="shangchuan">
      蓝色按钮
    </AButton>
    <AButton>
      默认按钮
    </AButton>
    <AButton type="success">
      绿色按钮
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
