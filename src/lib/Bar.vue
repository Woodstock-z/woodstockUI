<template>
  <div class="wst-bar" ref="container"></div>
</template>
<script lang="ts">
import * as d3 from "d3";
import { onMounted, ref } from "vue";
export default {
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 300,
    },
    data: {
      type: Array,
      default: [],
    },
  },
  setup(props, context) {
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      container.value.style.width = props.width + "px";
      container.value.style.height = props.height + "px";
      const svg = d3
        .select(container.value)
        .append("svg")
        .attr("width", props.width)
        .attr("height", props.height);
      //@ts-ignore
      let maxValue = Math.max(...props.data);
      let data = props.data.map((d, i) => {
        return { value: d, index: i };
      });
      const y = d3
        .scaleLinear()
        .domain([0, maxValue])
        .range([props.height - 50, 50]);
      const x = d3
        .scaleLinear()
        .domain([0, props.data.length - 1])
        .range([50, props.width - 50]);
      svg
        .append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", 30)
        .attr("style","cursor:pointer")
        .on("mouseover",function(){
          d3.select(this).attr("fill", "#4A91DA")
        })
        .on("mouseleave",function(){
          d3.select(this).attr("fill", "#0366D6")
        })
        .attr("fill", "#0366D6")
        .attr("x", (d) => x(d.index) - 15)
        .attr("y", (d) => props.height - 50)
        .transition()
        .duration(250)
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => {
          return props.height - 50 - y(d.value);
        })
      let axisX = d3.axisBottom(x);
      svg
        .append("g")
        .attr("transform", `translate(0,${props.height - 49})`)
        .call(axisX);
    });
    return {
      container,
    };
  },
};
</script>
<style lang="scss">
.wst-bar {
  width: 500px;
  height: 300px;
  border: 1px solid salmon;
}
</style>