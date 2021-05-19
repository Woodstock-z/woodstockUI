<template>
    <div>
        <Pie :data="data"></Pie>
    </div>
</template>
<script>
import Pie from '../lib/Pie.vue' 
export default {
    components:{
        Pie
    },
    setup(props) {
        //两个属性 分布对比 性别、成绩分布
        let data = [
            {"value":1,"label":"1"},
            {"value":2,"label":"1"},
            {"value":3,"label":"1"},
            {"value":5,"label":"1"},
            {"value":4,"label":"1"},
            {"value":7,"label":"1"}
        ];
        return{
            data
        }
    }
}
</script>