<template>
    <div>
        <Button >默认按钮</Button>
        <Button :disabled="true">默认按钮</Button>
        <Button theam="primary" @click="handClick">主要按钮</Button>
        <Button theam="primary" :disabled="true" @click="handClick">主要按钮</Button>
        <Button theam="danger" @click="handClick">危险按钮</Button>
        <Button theam="danger" disabled @click="handClick">危险禁用</Button>
        <Button theam="primary" :loading="true" @click="handClick">主要加载</Button>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
export default {
    components:{
        Button
    },
    setup(){
        const handClick = ()=>{
            console.log("click")
        }
        return {handClick}
    }
}
</script>
<style lang="scss" scoped>
.banner{
    height: 200px;
}
</style>