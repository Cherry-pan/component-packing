<template>
  <div>
    <AButton
      type="primary"
      border
      round
      disabled
      size="mini"
      minWidth="160px"
      prefix="shangchuan"
      block
      @click="handleChange"
    >
      蓝色按钮
    </AButton>
    <AButton :loading="true">
      默认按钮
    </AButton>
    <AButton type="success" suffix="shezhi">
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
  },
  methods:{
    handleChange(){
      console.log(33333);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
