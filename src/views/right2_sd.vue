<template>
  <div class="visual_box2">
    <div class="visual_title">
      <span>卡口记录条数</span>
      <img src="../assets/ksh33.png" />
    </div>
    <div class="visual_chart5" id="main11"></div>
  </div>
</template>
<script>
export default {
  name: "rightChatr2",

  mounted() {
    let echarts = require("echarts");
    let myChart = echarts.init(document.getElementById("main11"));
    window.onresize = myChart.resize;

    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },

      grid: {
        left: "280px",
        right: "20px",
        bottom: "10px",
        top: "20px",
      },

      xAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      yAxis: {
        type: "category",
        data: [
          "双山大街双山北路路口",
          "济王路与世纪西路路口",
          "309国道与潘王路路口",
          "绣水大街铁道北路路口",
          "世纪大道与工业二路路口",
          "绣江路与济青路",
          "世纪大道与潘王路路口",
          "绣水大街与汇泉路路口",
          "绣水大街山泉路路口",
          "铁道北路百脉泉街路口",
          "铁道北路与桃花山街路口",
          "绣江路相公路口",
          "鲁宏大道与双山大街路口",
          "福康路明塘街路口",
          "世纪西路唐王山路路口",
          "双山大街唐王山路路口",
          "世纪西路福泰路路口",
          "济青路与利民大道路口",
        ],
        splitLine: { show: false },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        offset: 10,
        nameTextStyle: {
          fontSize: 20,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: "#fff", //坐标的字体颜色
            fontSize: 22,
          },
        },
      },
      series: [
        {
          name: "流量",
          type: "bar",
          data: [
            42805, 41423, 40745, 36749, 34317, 33243, 32855, 26924, 26528, 25989, 25540,
            25526, 25038, 24859, 24857, 23735, 23097, 22974
          ],
          barWidth: 10,
          // barGap: 5,
          smooth: true,
          label: {
            normal: {
              show: true,
              position: "right",
              offset: [5, -2],
              textStyle: {
                color: "#12FE81",
                fontSize: 18,
              },
            },
          },
          itemStyle: {
            emphasis: {
              barBorderRadius: 7,
            },
            normal: {
              barBorderRadius: 7,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#3977E6" },
                { offset: 1, color: "#37BBF8" },
              ]),
            },
          },
        },
      ],
    });
  },
};
</script>

<style scoped>
.visual_box2 {
  height: 800px;
}
.visual_box2 .visual_title {
  position: relative;
  height: 35px;
  margin: 5px 0;
}

.visual_box2 .visual_title span {
  color: #72d4fc;
  font-size: 26px;
  line-height: 35px;
}

.visual_box2 .visual_title img {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.visual_box2 .visual_chart5 {
  height: 700px;
}
</style>