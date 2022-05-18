<template>
  <div>
    <button :class="[theme]" class="a-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    theme() {
      console.log(this.type);
      // 如果有值，返回
      return this.type ? `a-button-${this.type}` : "";
    }
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
