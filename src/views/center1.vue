<template>
    
			<div class="visual_conTop">
				<div class="visual_conTop_box visual_conTop1">
					<div>
						<h3>RSU</h3>
						<p>215</p>
						<div class="conTop_smil">
							<a class="sz">日环比:<span>+5%</span><i class="fa fa-long-arrow-up"></i></a>
							<a class="xd">周环比:<span>-4%</span><i class="fa fa-long-arrow-down"></i></a>
						</div>
					</div>
				</div>
				<div class="visual_conTop_box visual_conTop2">
					<div>
						<h3>高速拥堵指数</h3>
						<p>1.4</p>
						<div class="conTop_smil">
							<a class="hah">缓行</a>
							<a class="hah">平均车速<span>120</span>KM/H</a>
						</div>
					</div>
				</div>
				
				<div class="visual_conTop_box visual_conTop1">
					<div>
						<h3>当前网联车辆数</h3>
						<p>108</p>
						<div class="conTop_smil">
							<a class="sz">日环比:<span>+3%</span><i class="fa fa-long-arrow-up"></i></a>
							<a class="xd">周环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
						</div>
					</div>
				</div>
				<div class="visual_conTop_box visual_conTop2">
					<div>
						<h3>基础设施故障数(起)</h3>
						<p>121</p>
						<div class="conTop_smil">
							<a class="null">null</a>
							<a class="xd">月环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>	

			<div class="visual_conBot">
				<!-- <img class="visual_conBot_l" src="../assets/ksh42.png">
				<img class="visual_conBot_2" src="../assets//ksh43.png">
				<img class="visual_conBot_3" src="../assets//ksh44.png">
				<img class="visual_conBot_4" src="../assets//ksh45.png"> -->
				<div class="visual_chart_text">
					<h1>交通基础设施+路网运行状态</h1>
					<h2>健康安全监测平台</h2>
				</div>
				<!--中间地图部分-->
				<div class="visual_chart1" id="map">
					
				</div>
				
			</div>
			
	
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";

import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS"
import View from "ol/View";

var layerstr = ['bj_mobile:01speed','bj_mobile:02speed','bj_mobile:03speed','bj_mobile:04speed','bj_mobile:05speed',
				'bj_mobile:06speed','bj_mobile:07speed','bj_mobile:08speed','bj_mobile:09speed','bj_mobile:10speed',
				'bj_mobile:11speed','bj_mobile:12speed','bj_mobile:13speed','bj_mobile:14speed','bj_mobile:15speed',
				'bj_mobile:16speed','bj_mobile:17speed','bj_mobile:18speed','bj_mobile:19speed','bj_mobile:20speed',
				'bj_mobile:21speed','bj_mobile:22speed','bj_mobile:23speed','bj_mobile:24speed']

var i=0;               
var source = new TileWMS({
    extent: [75, 19, 134, 52],
    url: 'http://localhost:8089/geoserver/wms',
    params: { 'LAYERS': layerstr[0], 'TILED': true, 'STYLES': 'mobile_speed' },
    serverType: 'geoserver',
    transition: 0
})
export default {

 mounted() {
        // this.initMap(i);
        new Map(
                {
                    layers:[
                        new TileLayer(
                            {source: source
                            }
                        )                   ],
                        target:"map",
                        view: new View({
                            projection: 'EPSG:4326',
									center: [116.397, 39.916],
									/* 一打开就是中心区域 */
									zoom: 13
                        })
                }
            );
        console.log("init finished!");
        setInterval(function () {

							i++;
							if (i >= layerstr.length) {
								i = 0;

							}
							//地图刷新
							source.updateParams({ 'LAYERS': layerstr[i], 'TILED': true, 'STYLES': 'mobile_speed' })
							console.log(layerstr[i])
						}, 5000


						);


    },
    methods:{
        // initMap(i){
            
        //     console.log("init finished!");
        //     console.log(i);
        // }
    }

}




</script>

<style scoped>


.visual_conTop {
	height: 130px;
	margin-bottom: 10px;
}

.visual_conTop .visual_conTop_box {
	height: 100%;
	padding: 0 3px;
}

.visual_conTop .visual_conTop1 {
	width: 20%;
	height: 100%;
	float: left;
}

.visual_conTop .visual_conTop1>div {
	background: url(../assets/ksh40.png) no-repeat;
	background-size: 100% 100%;
  
}



.visual_con .visual_conTop .visual_conTop2 {
	width: 30%;
	height: 100%;
	float: left;
  
}
.visual_con .visual_conTop .visual_conTop2>div {
	background: url(../assets/ksh39.png) no-repeat;
	background-size: 100% 100%;
}



.visual_con .visual_conTop .visual_conTop_box>div {
	height: 100%;
}

.visual_con .visual_conTop .visual_conTop_box>div h3 {
	color: #fff;
	font-size: 25px;
	padding: 16px 0 0 20px;
}

.visual_con .visual_conTop .visual_conTop_box>div p {
	width: 33%;
	float: left;
	line-height: 85px;
	color: #20dbfd;
	text-shadow: 0 0 25px #00d8ff;
	font-size: 60px;
	font-family: 'yjsz';
	text-align: right;
}

.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil {
	width: 50%;
	height: 60px;
	float: left;
	padding-top: 23px;
}

.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil a {
	display: block;
	line-height: 20px;
	text-align: left;
	color: #fff;
	padding-left: 25px;
}

.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil span {
	width: 32px;
	display: inline-block;
	margin-left: 3px;
}

.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil a.sz {
	
	color: #fe3e12;
	font-size: 18px;
}
.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil a.hah {
	
	color: #fff;
	font-size: 18px;
}

.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil a.xd {
	color: #12fe81;
	font-size: 18px;
	
}

.visual_con .visual_conTop .visual_conTop_box>div .conTop_smil a.null {
	visibility: hidden;
}

.visual_conBot {
	height: calc(100% - 140px);
	/* background: url(../assets/ksh41.png) no-repeat;
	background-size: 100% 100%; */
	position: relative; 
}
/* .visual_con .visual_conBot .visual_conBot_l {
	position: absolute;
	left: 0;
	top: 0;
}

.visual_con .visual_conBot .visual_conBot_2 {
	position: absolute;
	right: 0;
	top: 0;
} */

/* .visual_con .visual_conBot .visual_conBot_3 {
	position: absolute;
	right: 0;
	bottom: 0;
}

.visual_con .visual_conBot .visual_conBot_4 {
	position: absolute;
	left: 0;
	bottom: 0;
} */

.visual_conBot .visual_chart1 {
	width: 1630px;
	height: 1020px;
	position: absolute;
}

.visual_con .visual_conBot .visual_chart_text {
	color: #fff;
	position: absolute;
	top: 15px;
	right: 15px;
	z-index: 99;
}

.visual_con .visual_conBot .visual_chart_text h1 {
	font-size: 35px;
	margin-bottom: 6px;
}

.visual_con .visual_conBot .visual_chart_text h2 {
	font-size: 25px;
	text-align: center;
}

.visual_con .visual_conBot .visual_conBot_bot {
	width: calc(100% - 8px);
	height: 180px;
	background: rgba(16, 54, 87, 0.5);
	border: 1px solid #345f92;
	position: absolute;
	bottom: 4px;
	left: 4px;
	z-index: 99;
}

</style>