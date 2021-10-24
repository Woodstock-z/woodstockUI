<template>
  <div class="wst-pie" ref="container"></div>
</template>
<script lang="ts">
import * as d3 from "d3";
import { onMounted, ref } from "vue";
export default {
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
    data: {
      type: Object,
      default: [],
    },
    colors: {
      type: Object,
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
    onMounted(() => {
      container.value.style.width = props.width + "px";
      container.value.style.height = props.height + "px";
      const svg = d3
        .select(container.value)
        .append("svg")
        .attr("width", props.width)
        .attr("height", props.height);
      const data = d3.pie().value((d) => d.value)(props.data);
      const arc = d3
        .arc()
        .innerRadius(50)
        .outerRadius(120)
        .cornerRadius(5)
        .padAngle(0.02);
      svg
        .append("g")
        .attr("transform", `translate(${props.width / 2},${props.height / 2})`)
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => {
          return props.colors[i % props.colors.length];
        });
    });
    return {
      container,
    };
  },
};
</script>
<style lang="scss">
.wst-pie {
  width: 300px;
  height: 300px;
}
</style>