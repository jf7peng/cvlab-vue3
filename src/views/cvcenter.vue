<template>
            <div class="visual_right">
                        <div class="visual_box">
                            <div class="visual_title">
                                <span>车路协同示范区简介</span>
                                <img src="../assets/ksh33.png">
                            </div>
                            <div class="des_photo">
                                    <img src="../assets/ceshichang.png" id="ph_pist">
                                    <hr class="hr0" />
                            </div>
                            
                            <div class="visual_chart" id="main1">
                                
        据不完全统计，全国有约50个封闭测试场（已建成和待建设），其中30个具备智能网联汽车测试能力。交通部认定3个智能网联封闭测试场，分别是北京通州国家运营车辆自动驾驶与车路协同测试基地、重庆车检院自动驾驶测试应用示范基地、长安大学车联网与智能汽车试验场；工信部和交通部联合认定3个智能网联封闭测试场，分别是自动驾驶封闭场地测试基地（泰兴）、上海临港智能网联汽车综合测试示范区、襄阳市智能网联汽车道路测试封闭试验场。

                            </div>
                        </div>
                    </div>
            <div class="visual_con">

                    <div class="visual_conBot">
                                    
                                    <div class="visual_chart_text">
                                        <h1>国内车路协同示范区分布图</h1>
                                        
                                    </div>
                                    <!--中间地图部分-->
                                    <div class="visual_chart1" id="map">
                                        <!-- <div id="popup" style="width: 400px;"></div> -->
                                    </div>
                                    
                                </div>

            </div>
    
			
	
</template>

<script>
import "ol/ol.css";
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import TileWMS from 'ol/source/TileWMS';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
       

export default {

methods:{


},
mounted(){
   var bj_1 = new Feature({
                                /*  国家智能汽车与智慧交通（京冀）示范区亦庄基地*/
                                geometry: new Point('EPSG:4326',[116.45600716253014, 39.74250939390401]),
                                name: '国家智能汽车与智慧交通（京冀）示范区亦庄基地',
                                photo:'../assets/yizhuang.jpg',
                                desription: '2019年5月国家智能汽车与智慧交通（京冀）示范区亦庄基地正式对外开放。作为首个T5级别自动驾驶封闭测试场，占地面积650亩，位于北京市经济技术开发区兴亦路及京福路交叉路口旁，涵盖京津冀地区85%以上的高速、城市、乡村道路环境，除了常见的测试场景外，还包含高速公路、城市快速路、环道、支路、隧道、障碍区、湿滑路面、雨雾、模拟光照、收费站、服务区、公交港湾、铁路交叉口、学校等各种场景。搭载了V2X设备与系统，支持网联自动驾驶（CAV）研发测试，并全面支持北京市12米以下自动驾驶车辆能力评估T1-T5的全场景测试。'


                            });

                            var bj_2 = new Feature({
                                /* 国家智能汽车与智慧交通（京冀）示范区海淀基地 */
                                geometry: new Point('EPSG:4326',[116.10145680624919, 40.08855712035911]),
                                name: '国家智能汽车与智慧交通（京冀）示范区海淀基地',
                                photo:'../assets/haidian.jpg',
                                desription: '2018年1月国家智能汽车与智慧交通（京冀）示范区海淀基地正式对外开放。自动驾驶汽车测试场景分为T1至T5五个级别，不同车辆可选择不同的测试场景。其中，T1为最基础的笔直道路，只有红绿灯等简单交通设置；T2为简单城市场景，可让自动驾驶车辆实现右转；T3为常见城市场景，有城市平面立交桥；T4为复杂城市场景，有隧道、林荫道等设置；T5为特殊城市场景，可实现雨雾、湿滑路面等复杂交通和天气环境。海淀基地的自动驾驶封闭测试场占地面积约200亩，可实现T1至T3测试场景，涵盖京津冀地区城市与乡村道路环境，可构建上百种静态与动态典型交通场景，包括环岛、苜蓿叶式立交、隧道、公共汽车站、停车区、雨区道路、雾区道路、学校区域、湿滑路面、夜间行驶等，并搭载了V2X设备与系统，支持网联自动驾驶（CAV）研发测试。'

                            });
                            /* 国家智能汽车与智慧交通（京冀）示范区顺义基地 */
                            var bj_3 = new Feature({
                                geometry: new Point('EPSG:4326',[116.71566833949288, 40.18655580513544]),
                                name: '国家智能汽车与智慧交通（京冀）示范区顺义基地',
                                photo:'../assets/shunyi.jpg',
                                desription: '国家智能汽车与智慧交通（京冀）示范区顺义基地规划建设1200亩（首期300亩）北小营镇无人驾驶封闭测试场。覆盖高速、桥梁、隧道等完备道路体系，以及加油站、收费站、街道、标识、信号灯等丰富的城市模拟仿真系统，共计150多种测试单元，应用场景50个，测试车辆规模最高50辆/天。同时，在高速路段末端设置一个直径170米的动态广场，为测试车辆提供更多临时场景。测试场范围内实现5G信号全覆盖。'

                            });
                            /* 国家智能网联汽车（上海）试点示范区 */
                            var sh_1 = new Feature({
                                geometry: new Point('EPSG:4326',[121.23253592029496, 31.329991177410015]),
                                name: '国家智能网联汽车（上海）试点示范区',
                                photo:'../assets/guojiashanghai.jpg',
                                desription: '2016年6月，位于上海嘉定区伊宁路2155号的国家智能网联汽车（上海）试点示范区封闭道路测试区正式开园。封闭测试区（F-Zone）立足服务智能汽车、V2X网联通讯两大类关键技术的测试及演示，涵盖安全、效率、信息、新能源汽车等四大类应用场景。园区内同时建设了隧道、林荫道、加油/充电站、地下停车场、十字路口、丁字路口、环岛等模拟交通设施，可以为自动驾驶、V2X网联汽车等提供100余种场景的测试验证。'
                            });
                            /* 上海临港智能网联汽车综合测试示范区 */
                            var sh_2 = new Feature({
                                geometry: new Point('EPSG:4326',[121.92235264861804, 30.866945900603657]),
                                name: '上海临港智能网联汽车综合测试示范区',
                                photo:'../assets/lingang.png',
                                desription: '上海临港智能网联汽车封闭测试区建设分为两期。一期利用临港科技城园区3.2平方公里内4.7公里道路及D08-02地块构建封闭测试道路及核心测试广场，部署9个交叉路口路侧管控及通信设施。二期以核心测试广场为链接向临港科技园区4平方公里区域拓展，测试道路长度拓展5-10公里。包括高速公路，城市道路，长度500米的模拟隧道（卫星及通信信号屏蔽，夜光及低光环境），长度500米可控降雨模拟道路等。',
                            });


                           var iconStyle = new Style({
                                image: new Icon({
                                    src: 'logo2.png',
                                   anchor: [0.5, 46],
                                anchorXUnits: 'fraction',
                                anchorYUnits: 'pixels',
                                                                     
                                })

                            });
                            bj_1.setStyle(iconStyle);
                            bj_2.setStyle(iconStyle);
                            bj_3.setStyle(iconStyle);
                            sh_1.setStyle(iconStyle);
                            sh_2.setStyle(iconStyle);
                           
                            var vectorSource = new VectorSource({
                                features: [bj_1,bj_2,bj_3,sh_1,sh_2],
                                // features: [bj_1],
                            });

                            var vectorLayer = new VectorLayer({
                                source: vectorSource,
                            });
                            
   
                            var rasterLayer = new TileLayer({
                                source: new TileWMS({
							extent: [74, 3.78, 135.1, 53.6],
							url: 'http://localhost:8089/geoserver/wms',
							params: { 'LAYERS': 'china_all:china_lablednew', 'TILED': true, 'STYLES': 'china_style' },
							serverType: 'geoserver',
							transition: 0
						}),

                            });
                            
                                 new Map(
                {
                                layers: [rasterLayer, vectorLayer],
                                // layers: [rasterLayer],
                                target: 'map',
                                view: new View({
                                    projection: 'EPSG:4326',
                                    center: [109.16016,34.71680],
                                    zoom:5.5,
                                }),
                            });
                            
                            // var popup = new Overlay({
                            //     element: this.$refs.popup,
                            //     positioning: 'bottom-center',
                            //     stopEvent: false,
                            //     offset: [0, -50],
                            // });
                            // map.addOverlay(popup);
                                 
}

}




</script>

<style scoped>

.visual_con {
	width: 65%;
	height: 100%;
	float: left;
	padding: 20px 20px 0 20px;
}

.visual_right {
	width: 35%;
	height: 100%;
	float: right;
}

.visual_box {
    height: 100%;
}

.visual_box .visual_title {
    position: relative;
    height: 35px;
    margin: 5px 0;
}

.visual_box .visual_title span {
    color: #fff;
    font-size:25px;
    line-height: 35px;
}

.visual_box .visual_title img {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
}
.visual_box .des_photo img{
    width: 985px;
    height: 373px;
    padding:0px 30px;
}
.visual_box .visual_chart {
    height: 700px;
    padding: 0px 10px;
    font-family: “Microsoft YaHei” ! important;
    color: #d9d9d9;
    font-size: 25px;
    /* 设置文本空两格及其它格式 */
    text-align: justify;
    text-justify: inter-ideograph;
    text-indent: 2em;
    line-height: 50px;
}

.visual_conBot {
	height: calc(100% - 140px);
	/* background: url(../assets/ksh41.png) no-repeat;
	background-size: 100% 100%; */
	position: relative; 
}

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