<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1></h1>
            <h2></h2>
            <p>
                <a href="https://github.com">github </a>
                <router-link to="/doc"> 开始</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components:{
        Topnav
    }
}
</script>
<style lang="scss" scoped>
.banner{
    height: 200px;
}
</style>