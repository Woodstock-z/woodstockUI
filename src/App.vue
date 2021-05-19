<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router';

export default {
  name: 'App',
  setup(){
    const asideVisible = ref(true);
    provide('xxx',asideVisible);
    router.afterEach(()=>{
      //判断宽度 是否是手机
      // asideVisible.value = false;
    })
  }
}
</script>
