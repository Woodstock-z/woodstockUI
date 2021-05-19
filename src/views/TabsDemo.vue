<template>
  <div>
    <Tabs selected="用户管理">
      <Tab label="用户管理" name="first">
        <h1>baiot</h1>
        <div>哈哈哈哈哈哈</div>
      </Tab>
      <Tab label="角色管理" name="second">内容2</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>