<template>
  <button
    class="wst-button"
    :class="[`wst-theam-${theam}`, disabled ? 'isDisabled' : '']"
    :disabled="disabled"
  >
    <span v-if="loading" class="wst-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
    theam: {
      type: String,
      default: "default",
    },
    disabled: {
      typeof: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
$h: 36px;
$w: 90px;

.wst-button {
  box-sizing: border-box;
  white-space: nowrap;
  display: inline-block;
  height: $h;
  width: $w;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  & + & {
    margin-left: 8px;
  }
  &:hover {
    border-color: #c6e2ff;
    color: #409eff;
  }
  /* 禁用 */
  &[disabled] {
    cursor: not-allowed;
    background: #fff;
    border-color: #eee;
    color: #ccc;
  }
  /* 主要按钮 */
  &.wst-theam-primary {
    background: #409eff;
    border-color: #409eff;
    color: white;
    &:hover{
      background: #66b1ff;
      border-color: #66b1ff;
    }
    /* 禁用 */
    &.isDisabled {
      background: #66b1ff;
      border-color: #66b1ff;
    }
  }
  /* 危险按钮 */
  &.wst-theam-danger {
    background: #f56c6c;
    border-color: #f56c6c;
    color: white;
    &:hover{
      background: #f78989;
      border-color: #f78989;
    }
    /* 禁用 */
    &.isDisabled {
      background: #f78989;
      border-color: #f78989;
    }
  }
  > .wst-loadingIndicator{
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: #fff #fff #fff transparent;
    border-style: solid;
    border-width: 2px;
    animation: wst-spin 1s infinite linear;
  }
}
@keyframes wst-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>