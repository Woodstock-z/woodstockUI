<template>
    <div>
        <Distribution :data="data" :attributes="attributes"></Distribution>
    </div>
</template>
<script>
import Distribution from '../lib/Distribution.vue'
import Button from '../lib/Button.vue'
export default {
    components:{
        Distribution,
        Button
    },
    setup(props) {
        //两个属性 分布对比 性别、成绩分布
        let data = [];
        for(let i=0;i<200;i++){
            let obj = {};
            obj.gender =  Math.random() > 0.6 ? "male" : "female";
            obj.score = parseInt(Math.random() * 70) + 30;
            obj.name = `name${i}`;
            data[i] = obj;
        }
        let attributes = ["gender","score"];
        return{
            data,
            attributes
        }
    }
}
</script>