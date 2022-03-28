<template>
  <div class="border" :id="id" :style="{ height: height + 'px' }"></div>
</template>

<script>
const defaultOption = {
  color: ["#4072ff"],
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
  },
  series: [
    {
      label: {
        show: true,
      },
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
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
      default: 350,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      barChar: null,
    };
  },
  mounted() {
    this.barChar = this.$echarts.init(document.getElementById(this.id));
    setTimeout(() => {
      this.drawLine();
    }, 1000);
    window.addEventListener("resize", this.barChar.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.barChar.resize);
  },
  methods: {
    drawLine() {
      let option = Object.assign({}, defaultOption, this.data);
      this.barChar.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
// .border {
//   border: 1px solid red;
// }
</style>
