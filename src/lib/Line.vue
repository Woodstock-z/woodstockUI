<template>
  <div class="wst-line" ref="container"></div>
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
    curve:{
      //平滑
      typeof:Boolean,
      default:false
    }
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
      const y = d3
        .scaleLinear()
        .domain([0, maxValue])
        .range([props.height - 30, 40]);
      const x = d3
        .scaleLinear()
        .domain([0, props.data.length - 1])
        .range([30, props.width - 30]);
      const line = d3
        .line()
        .x((d) => x(d.index))
        .y((d) => y(d.value));
      if(props.curve==true){
         line.curve(d3.curveCardinal)
      }
      svg
        .append("g")
        .append("path")
        .attr("d", line(data))
        .attr("fill", "none")
        .attr("stroke", "#409EFF");
      svg.append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx",d=>x(d.index))
        .attr("cy",d=>y(d.value))
        .attr("r",3)
        .attr("stroke","#409EFF")
        .attr("fill","white");
      //坐标轴
      let axisX = d3.axisBottom(x).ticks(5).tickFormat((d,i)=>{
        return data[i].text;
      })
      svg
        .append("g")
        .attr("transform", `translate(0,${props.height - 30})`)
        .call(axisX);
      let axisY = d3.axisLeft(y).ticks(5);
      svg.append("g").attr("transform", `translate(30,0)`).call(axisY);
    });
    return {
      container,
    };
  },
};
</script>
<style lang="scss">
.wst-line {
  // border: 1px solid salmon;
}
</style>