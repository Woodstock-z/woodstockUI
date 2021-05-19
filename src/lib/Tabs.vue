<template>
  <div>
    <div class="wst-tabs-nav" ref="container">
      <!-- 判断哪个元素是被选择的  -->
      <div class="wst-tabs-nav-item" v-for="(t, index) in titles" :key="index" >
        {{ t }}
      </div>
      <div class="wst-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wst-tabs-content">
      <component :is="current" />
    </div>
  </div>
</template>
<script >
import { onMounted, ref, watchEffect } from "vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    const current = defaults[0];
    const titles = defaults.map((d) => {
      return d.props.label;
    });
    // const indicator = context
    const indicator =ref(null);
    const selectedItem =ref(null);
    const container =ref(null);
    onMounted(() => {
      console.log(container.value.getBoundingClientRect())
      console.log(selectedItem.value.getBoundingClientRect())
      indicator.value.style.width = selectedItem.value.clientWidth + "px"
    });
    return {
      current,
      titles,
      indicator,
      selectedItem,
      container
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wst-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      // width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>