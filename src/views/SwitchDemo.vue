<template>
    <div>
        <Switch v-model:value="y"></Switch>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components:{
        Switch
    },
    setup(){
        const y = ref(true);
        return {y}
    }
}
</script>
<style lang="scss" scoped>
.banner{
    height: 200px;
}
</style>