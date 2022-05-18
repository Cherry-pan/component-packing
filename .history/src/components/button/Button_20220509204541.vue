<template>
  <div>
    <!-- 子组件 -->
    <button
      :class="[theme, isBorder, isRound, specifications, blockCss]"
      :disabled="disabled || loading"
      class="a-button"
      :style="[minWidthCss]"
      @click="change"
    >
      <span>
        <i v-if="loading" class="iconfont icon-prefix icon-loading"></i>
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
import "./button.scss" 
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
    },
    block: Boolean,
    loading: Boolean
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
    },
    blockCss() {
      return this.block ? "a-button-block" : "";
    }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    change(){
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
