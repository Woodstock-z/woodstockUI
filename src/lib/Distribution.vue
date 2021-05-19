<template>
  <div class="wst-distribution" ref="container"></div>
</template>
<script lang="ts">
import * as d3 from "d3";
import { onMounted, ref } from "vue";
export default {
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 200,
    },
    data: {
      type: Object,
      default: [],
    },
    attributes: {
      type: Object,
      default:[],
    },
  },
  setup(props, context) {
    const container = ref<HTMLDivElement>(null);
    let type = props.attributes[0],
      key = props.attributes[1];
    let arr = props.data;
    let maxValue = Math.max(...arr.map((d) => d[key])),
      minValue = Math.min(...arr.map((d) => d[key]));
    maxValue = Math.ceil(maxValue / 10) * 10;
    minValue = Math.floor(minValue / 10) * 10;
    onMounted(() => {
      container.value.style.width = props.width + "px";
      container.value.style.height = props.height + "px";
      const svg = d3
        .select(container.value)
        .append("svg")
        .attr("width", props.width)
        .attr("height", props.height);
      console.log(svg)
      //todo
      let type1 = {}, type2 = {};
      arr.forEach(d => {
        let key = Math.floor(d.score / 10);
        let a;
        if(d.gender == "male"){
          a = type1;
        }else{
          a =type2;
        }
        if(a[key]){
          a[key].push(d)
        }else{
          a[key] = [d];
        }
      });
      console.log(type1,type2);
      let g = svg.append("g")
        .attr("transform","translate(0,50)");
      Object.keys(type1).forEach((element,index)=>{
        g.append("g")
          .attr("transform",`translate(0,${index * 25})`)
          .selectAll("rect")
          .data(type1[element])
          .enter()
          .append("rect")
          .attr("width",2)
          .attr("height",16)
          .attr("x",(d,i)=>{
            return 195 - i * 6;
          })
          .attr("y",0)
          .attr("fill","red")
      });
      g = svg.append("g")
        .attr("transform","translate(205,50)")
      Object.keys(type2).forEach((element,index)=>{
        g.append("g")
          .attr("transform",`translate(0,${index * 25})`)
          .selectAll("rect")
          .data(type2[element])
          .enter()
          .append("rect")
          .attr("width",2)
          .attr("height",16)
          .attr("x",(d,i)=>{
            return i * 6;
          })
          .attr("y",0)
          .attr("fill","#2CA1F3")
      })
    })
    return {
      container,
    };
  },
};
</script>
<style lang="scss">
.wst-distribution {
  width: 400px;
  height: 200px;
  border: 1px solid salmon;
}
</style>