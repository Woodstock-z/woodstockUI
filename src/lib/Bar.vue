<template>
  <div class="wst-bar" ref="container"></div>
</template>
<script lang="ts">
import * as d3 from "d3";
import { onMounted, ref } from "vue";
export default {
  props: {
    width: {
      //图表宽度
      type: Number,
      default: 500,
    },
    height: {
      //图表高度
      type: Number,
      default: 300,
    },
    data: {
      //数据
      type: Array,
      default: [],
    },
    xAxis: {
      //x轴标签
      type: Array,
      default: undefined,
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
        return { value: d, index: i, text:i};
      });
      if(props.xAxis){
        data.forEach((d,i)=>{
          //@ts-ignore
          d.text = props.xAxis[i];
        })
      }
      console.log(data)
      const y = d3
        .scaleLinear()
        .domain([0, maxValue])
        .range([props.height - 30, 40]);
      const x = d3
        .scaleLinear()
        .domain([0, props.data.length])
        .range([30, props.width - 30]);
      svg
        .append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", 30)
        .attr("style", "cursor:pointer")
        .on("mouseover", function () {
          d3.select(this).attr("fill", "#4A91DA");
        })
        .on("mouseleave", function () {
          d3.select(this).attr("fill", "#409EFF");
        })
        .attr("fill", "#409EFF")
        .attr("x", (d) => x(d.index) + 15)
        .attr("y", (d) => props.height - 30)
        .transition()
        .duration(250)
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => {
          return props.height - 30 - y(d.value);
        });
      //坐标轴
      let axisX = d3.axisBottom(x).ticks(5).tickFormat((d,i)=>{
        if(i == data.length){
          return ""
        }
        return data[i].text;
      })
      let axisY = d3.axisLeft(y).ticks(5);
      let aa = svg
        .append("g")
        .attr("transform", `translate(0,${props.height - 30})`)
        .call(axisX);
      aa.selectAll("text")
        .attr("transform","translate(30,0)")
      svg
        .append("g")
        .attr("transform", `translate(30,0)`)
        .call(axisY);
    });
    return {
      container,
    };
  },
};
</script>
<style lang="scss">
.wst-bar {
  // border: 1px solid salmon;
}
</style>