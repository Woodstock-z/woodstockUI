<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/Tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/distribution">distribution 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/pie">pie 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/line">line 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
          <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("xxx");
    return{asideVisible}
  }
};
</script>
<style lang="scss" scoped>
@media (max-width: 500px) {
    
}
</style>