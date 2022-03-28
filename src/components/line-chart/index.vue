<template>
  <div class="border" :id="id" :style="{ height: height + 'px' }"></div>
</template>

<script>
const defaultOption = {
  color: ["#4072ff"],
  tooltip: {
    trigger: "axis",
  },
  // top: "10%",
  grid: {
    left: "2%",
    right: "2%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    // 替换
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} ¥",
    },
  },
  series: [
    {
      type: "line",
      name: "name",
      // 替换
      data: [1150, 1230, 1224, 2218, 1335, 1147, 2630],
      smooth: true,
    },
  ],
};
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    height: {
      type: Number,
      default: 310,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      lineChar: null,
    };
  },
  mounted() {
    this.lineChar = this.$echarts.init(document.getElementById(this.id));
    setTimeout(() => {
      this.drawLine();
    }, 1000);
    window.addEventListener("resize", this.lineChar.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.lineChar.resize);
  },
  methods: {
    drawLine() {
      let option = Object.assign({}, defaultOption, this.data);
      this.lineChar.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
// .border {
//   border: 1px solid red;
// }
</style>
