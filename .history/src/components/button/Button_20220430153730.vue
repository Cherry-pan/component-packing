<template>
  <div>
    <button
      :class="[theme, isBorder, isRound, specifications]"
      :disabled="disabled"
      class="a-button"
      :style="[minWidthCss]"
    >
      <span>
        <i
          v-if="iconPrefix"
          class="iconfont icon-prefix"
          :class="iconPrefix"
        ></i>
        <slot></slot>
        <i
          v-if="iconSuffix"
          class="iconfont icon-suffix"
          :class="iconSuffix"
        ></i>
      </span>
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
    disabled: Boolean,
    size: {
      type: String,
      default: ""
    },
    minWidth: {
      type: String,
      default: ""
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    }
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
      return this.round ? "is-round" : "";
    },
    specifications() {
      return this.size ? `a-button-${this.size}` : "";
    },
    minWidthCss() {
      // 如果没有值，返回空，有值拼接css样式
      if (!this.minWidth) {
        return "";
      }
      return { "min-width": this.minWidth };
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : "";
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : "";
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
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  i {
    width: 14px;
    height: 14px;
  }
  .icon-prefix {
    margin-right: 10px;
  }
  .icon-suffix {
    margin-left: 10px;
  }
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
// 尺寸
.a-button-medium {
  height: 36px;
  line-height: 36px;
}
.a-button-small {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  padding: 0 15px 0 15px;
   .icon-prefix {
    margin-right: 5px;
  }
  .icon-suffix {
    margin-left: 5px;
  }
}
.a-button-mini {
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  padding: 0 15px 0 15px;
}
</style>
