<template>
  <div class="wst-line" ref="container"></div>
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
    colors: {
      type: Array,
      default: [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf",
      ],
    },
  },
  setup(props, context) {
    const container = ref<HTMLDivElement>(null);
    let num: number = 1;
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
      const line = d3
        .line()
        .x((d) => x(d.index))
        .y((d) => y(d.value));
      svg
        .append("g")
        .append("path")
        .attr("d", line(data))
        .attr("fill", "none")
        .attr("stroke", "black");
      //坐标轴
      let axisX = d3.axisBottom(x);
      svg
        .append("g")
        .attr("transform", `translate(0,${props.height - 50})`)
        .call(axisX);
      let axisY = d3.axisLeft(y);
      svg
        .append("g")
        .attr("transform", `translate(50,0)`)
        .call(axisY);
    });
    return {
      container,
    };
  },
};
</script>
<style lang="scss">
.wst-line {
  width: 500px;
  height: 300px;
  border: 1px solid salmon;
}
</style>