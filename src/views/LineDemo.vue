<template>
  <div>
    <Line :data="data" ></Line>
    <Line :data="data"  :xAxis="xAxis"></Line>
    <Line :data="data"  :curve="true" ></Line>
    <Bar :data="data" :xAxis="xAxis"></Bar>
    <Bar :data="data" ></Bar>
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
    let data = [150, 230, 224, 218, 135, 147, 300];
    let xAxis =  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return {
      data,
      xAxis
    };
  },
};
</script>