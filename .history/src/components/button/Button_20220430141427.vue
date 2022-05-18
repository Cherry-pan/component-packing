<template>
  <div>
    <button :class="[theme, isBorder, isRound]" :disabled="disabled" class="a-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    //   类型
    type: {
      type: String,
      default: ""
    },
    // 边框
    border: Boolean, //默认是false
    // 圆角
    round: Boolean,
    // 是否禁用
    disabled:Boolean,
  },
  computed: {
    // 监听变化
    theme() {
      console.log(this.type);
      // 如果有值，返回
      return this.type ? `a-button-${this.type}` : "";
    },
    isBorder() {
      return this.border ? "is-border" : "";
    },
    isRound() {
      console.log(this.round);
      return this.round ? "is-round" : "";
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped>
.a-button {
  padding: 0 20px 0 20px;
  border-width: 1px;
  border-color: #dcdfe6;
  border-style: solid;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  color: #606266;
  height: 40px;
  line-height: 40px;
}
// 禁用 透明度
.a-button[disabled] {
  opacity: 0.7;
  // 鼠标变成禁用
  cursor: not-allowed;
}
.a-button-primary {
  border-color: #409eff;
  background-color: #409eff;
  color: white;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.a-button-success {
  border-color: #00d100;
  background-color: #00d100;
  color: white;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.a-button-warning {
  border-color: #e6a23c;
  background-color: #e6a23c;
  color: white;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.a-button-danger {
  border-color: #f56c6c;
  background-color: #f56c6c;
  color: white;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}
// 圆角
.is-round {
  border-radius: 100px;
}
</style>
