<template>
    <div>
        <Dialog :ok="ok"></Dialog>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
export default {
    components:{
        Button,
        Dialog
    },
    setup(){
        const ok = ()=>{
            console.log(2222)
        }
        return{
            ok
        }
    }
}
</script>