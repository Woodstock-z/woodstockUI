<template>
  <div>
    <Line :data="data"></Line>
    <Bar :data="data"></Bar>
  </div>
</template>
<script>
import Line from "../lib/Line.vue";
import Bar from "../lib/Bar.vue";
export default {
  components: {
    Line,
    Bar
  },
  setup(props) {
    //两个属性 分布对比 性别、成绩分布
    let data = [150, 230, 80, 160, 224, 218, 135, 147, 151, 260];
    return {
      data,
    };
  },
};
</script>