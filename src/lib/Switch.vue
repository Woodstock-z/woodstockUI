<template>
  <button class="wst-switch" :class="{ 'wst-checked': value }" @click="toggle">
    <span></span>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
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
$h1: 20px;
$h2: $h1 - 4px;
.wst-switch {
  height: $h1;
  width: $h1 * 2;
  border: none;
  background: #ddd;
  border-radius: $h1/2;
  position: relative;
  cursor: pointer;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 0.25s;
  }
  &.wst-checked {
    background: rgb(19, 206, 102);
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>