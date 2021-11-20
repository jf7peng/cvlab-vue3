<template>
    <div class="visual_box1">
				<div class="visual_title">
					<span>章丘区电警卡口抓拍车辆次数累加频率</span>
					<img src="../assets/ksh33.png">
				</div>
				<div class="LeftChart1" id="main1">

				</div>
	</div>
</template>

<script>

export default {
    name:'LeftChart1',
   
 mounted(){
	  let echarts = require('echarts');
let myChart = echarts.init(document.getElementById('main1'));
    // 绘制图表
    myChart.setOption({
     tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
      
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 20,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 20
            },
            showMaxLabel: false,
           interval:3,
            /* 让x轴的标签会自动换行 */
            // formatter: function (params) {
            //     var newParamsName = ""; // 最终拼接成的字符串
            //     var paramsNameNumber = params.length; // 实际标签的个数
            //     var provideNumber = 3; // 每行能显示的字的个数
            //     var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
            //     /**
            //      * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
            //      */
            //     // 条件等同于rowNumber>1
            //     if (paramsNameNumber > provideNumber) {
            //         /** 循环每一行,p表示行 */
            //         for (var p = 0; p < rowNumber; p++) {
            //             var tempStr = ""; // 表示每一次截取的字符串
            //             var start = p * provideNumber; // 开始截取的位置
            //             var end = start + provideNumber; // 结束截取的位置
            //             // 此处特殊处理最后一行的索引值
            //             if (p == rowNumber - 1) {
            //                 // 最后一次不换行
            //                 tempStr = params.substring(start, paramsNameNumber);
            //             } else {
            //                 // 每一次拼接字符串并换行
            //                 tempStr = params.substring(start, end) + "\n";
            //             }
            //             newParamsName += tempStr; // 最终拼成的字符串
            //         }

            //     } else {
            //         // 将旧标签的值赋给新标签
            //         newParamsName = params;
            //     }
            //     //将最终的字符串返回
            //     return newParamsName
            // }
        },
        data: ['0', '4', '8', '12', '16', '20', '24', '28', '32', '36', '40', '44',
        '48','52','56','60','64','68','72','76','80','84','88','92','96'
    
    
    
    
    ]
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                 color:'#fff',
                fontSize: 20
            },
            
        },
        splitLine: {
            show:false
        }
    }],
    series: [{
       name:'抓拍车辆累加百分比',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 10, 127, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 10, 127, 0)'
                }], false),
                shadowColor: 'rgb(31,0,0,2)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,0,127)'
            }
        },
        data: [0.32,0.54,0.66,0.69,0.72,0.76,0.79,0.81,
            0.82,0.85,0.862,0.867,0.883,0.886,0.892,0.896,
            0.904,0.920,0.935,0.956,0.964,0.969,0.975,0.985,1
    ]
    }  ]
    });
 }


}

</script>


<style scoped>
.visual_box1 {
	height: 400px;
	width: 500px;
}
.visual_box1 .visual_title {
	position: relative;
	height: 35px;
	margin: 5px 0;
}

.visual_box1 .visual_title span {
	color: #72d4fc;
	font-size: 24px;
	line-height: 35px;
}

.visual_box1 .visual_title img {
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
}
.visual_box1 .LeftChart1 {
	height: calc(100% - 35px);
	
}

</style>