<template>
  <div>
    <!-- 父组件 -->
    <AButton
      type="primary"
      border
      round
      disabled
      size="mini"
      minWidth="160px"
      prefix="shangchuan"
      block
    >
      蓝色按钮
    </AButton>
    <AButton :before-change="asyncFunction">
      默认按钮
    </AButton>
    <AButton
      type="success"
      suffix="shezhi"
      @click="handleChange"
      :loading="flag"
    >
      绿色按钮
    </AButton>
    <AButton>默认按钮</AButton>
    <AButton type="success">成功按钮</AButton>
    <AButton type="danger">危险按钮</AButton>
    <AButton type="warning">警告按钮</AButton>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    AButton: () => import("@/components/button/Button.vue")
  },

  data() {
    return {
      flag: false
    };
  },
  methods: {
    handleChange() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 2000);
      console.log(33333);
    },
    asyncFunction() {
      console.log(1111);
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          // this.flag = false;
          reslove();
        }, 2000);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
