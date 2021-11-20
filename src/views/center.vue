<template>
  <div class="visual_conBot">
    <!-- <img class="visual_conBot_l" src="../assets/ksh42.png">
				<img class="visual_conBot_2" src="../assets//ksh43.png">
				<img class="visual_conBot_3" src="../assets//ksh44.png">
				<img class="visual_conBot_4" src="../assets//ksh45.png"> -->
    <div class="visual_chart_text">
      <h1>章丘区卡口数据</h1>
      <h2>监测平台</h2>
    </div>
    <!--中间地图部分-->
    <div class="visual_chart1" id="map"></div>
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content" class="popup-content"></div>
    </div>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import { Style, Stroke, Fill, Circle } from "ol/style";
import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import Vector from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import Overlay from "ol/Overlay";
import { createXYZ } from "ol/tilegrid";
import { tile } from "ol/loadingstrategy";
import { bbox } from "ol/loadingstrategy";

var layerstr = [
  "shandong:links",
  "shandong:links",
  "shandong:links",
  "shandong:links",
];

var i = 0;
var source = new TileWMS({
  url: "http://localhost:8080/geoserver/shandong/wms",
  params: {
    LAYERS: "shandong:kk_coordinates_geom",
    TILED: true,
  },
  serverType: "geoserver",
  transition: 0,
});
var zhangqiu_district = new TileWMS({
  url: "http://localhost:8080/geoserver/shandong/wms",
  params: {
    LAYERS: "shandong:zhangqiu",
    TILED: true,
  },
  serverType: "geoserver",
  transition: 0,
});
var zhangqiu_links = new TileWMS({
  url: "http://localhost:8080/geoserver/shandong/wms",
  params: {
    LAYERS: "shandong:links",
    TILED: true,
  },
  serverType: "geoserver",
  transition: 0,
});

var geoJsonStyle = new Style({
  image: new Circle({
    radius: 10,
    fill: new Fill({ color: "red" }),
    stroke: new Stroke({ color: "red", width: 1 }),
  }),
});

//绘制geojson矢量图层高亮样式
var geoJsonHLightStyle = new Style({
  stroke: new Stroke({
    color: "#33CCFF",
    lineDash: [4],
    width: 3,
  }),
  fill: new Fill({
    color: "rgba(255, 255, 0, 0.1)",
  }),
});

var wfsVectorSource = new VectorSource({
  format: new GeoJSON(),
  projection: "EPSG:4326",
  url: "http://localhost:8080/geoserver/shandong/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=shandong:kk_name_kh&maxFeatures=1000&outputFormat=application%2Fjson",
  strategy: bbox,
});

var geojsonKKLayer = new Vector({
  source: wfsVectorSource,
  style: geoJsonStyle,
});

var osmLayer = new TileLayer({
  source: new XYZ({
    //OpenStreetMap的瓦片URL
    url: "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
  }),
});

export default {
  name: "dashboard",
  data() {
    return {
      map: null,
      overlay: null,
      wfs_layer: null,
      highlight: null,
      nameKK: null,
      countRecord: null,
      k_num:null,
      h_num:null
    };
  },
  methods: {
    initMap() {
      this.map = new Map({
        layers: [
          osmLayer,
          new TileLayer({
            source: zhangqiu_district,
          }),
          new TileLayer({ source: zhangqiu_links }),
          geojsonKKLayer,
        ],
        target: "map",
        view: new View({
          projection: "EPSG:4326",
          center: [117.518, 36.6807],
          /* 一打开就是中心区域 */
          zoom: 11.8,
        }),
      });
      console.log("init finished!");
    },
    displayFeatureInfo(pixel) {
      var feature = this.map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });
      if (feature) {
        var keys = feature.getKeys();
        var properties = feature.getProperties();
        for (var i = 0; i < keys.length; i++) {
          if (keys[i] == "name") {
            this.nameKK = properties[keys[i]];
          }
          if (keys[i] == "count") {
            this.countRecord = properties[keys[i]];
          }
        }
      }
      if (feature !== this.highlight) {
        if (this.highlight) {
          featureOverlay.getSource().removeFeature(highlight);
        }
        if (feature) {
          featureOverlay.getSource().addFeature(feature);
        }
        this.highlight = feature;
      }
    },

    addPopup() {
      // 使用变量存储弹窗所需的 DOM 对象
      var container = document.getElementById("popup");
      var closer = document.getElementById("popup-closer");
      var content = document.getElementById("popup-content");

      // 创建一个弹窗 Overlay 对象
      this.overlay = new Overlay({
        element: container, //绑定 Overlay 对象和 DOM 对象的
        autoPan: true, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
        autoPanAnimation: {
          duration: 250, //自动平移效果的动画时间 9毫秒
        },
      });
      // 将弹窗添加到 map 地图中
      this.map.addOverlay(this.overlay);
      let _that = this;
      /**
       * 添加单击响应函数来处理弹窗动作
       */
      this.map.on("click", function (evt) {
        var pixel = evt.pixel;
        var feature = this.forEachFeatureAtPixel(pixel, function (feature,layer) {
          
          return feature;
        });
        if (feature) {
          var keys = feature.getKeys();
          var properties = feature.getProperties();
          for (var i = 0; i < keys.length; i++) {
            if (keys[i] == "name") {
              this.nameKK = properties[keys[i]];
            }
            if (keys[i] == "count") {
              this.countRecord = properties[keys[i]];
            }
            if (keys[i] == "num_keche") {
              this.k_num = properties[keys[i]];
            }
            if (keys[i] == "num_huoche") {
              this.h_num = properties[keys[i]];
            }
          }
        }else{
          this.nameKK = "此处无卡口"
          this.countRecord = 0
        }
        if (feature !== this.highlight) {
          if (this.highlight) {
            //featureOverlay.getSource().removeFeature(highlight);
          }
          if (feature) {
            //featureOverlay.getSource().addFeature(feature);
          }
          this.highlight = feature;
        }

        let coordinate = evt.coordinate;
        // 点击尺 （这里是尺(米)，并不是经纬度）;
        //let hdms = toStringHDMS(toLonLat(evt.coordinate)); // 转换为经纬度显示
        var total_num;
        total_num = this.k_num + this.h_num;
        let k_share = this.k_num / total_num;
        let h_share = this.h_num / total_num;
        k_share = k_share.toFixed(3)*100
        h_share = h_share.toFixed(3)*100
        content.innerHTML = `
                <p>你点击了这里：</p>
                <p>名称：${this.nameKK}</p>
                <p>记录数量：${this.countRecord}</p>
                <p>客车占比：${k_share}% &nbsp;&nbsp; 货车数量: ${h_share}% </p>`;
        _that.overlay.setPosition(evt.coordinate); //把 overlay 显示到指定的 x,y坐标
      });
      /**
       * 为弹窗添加一个响应关闭的函数
       */
      closer.onclick = function () {
        _that.overlay.setPosition(undefined);
        closer.blur();
        return false;
      };
    },

    wfs(name) {
      var wfsParams = {
        service: "WFS",
        version: "1.0.0",
        request: "GetFeature",
        typeName: name, //图层名称
        outputFormat: "text/javascript", //重点，不要改变
        format_options: "callback:loadFeatures", //回调函数声明
      };

      var vectorSource = new VectorSource({
        format: new GeoJSON(),
        loader: function (extent, resolution, projection) {
          //加载函数
          var url = "http://localhost:8080/geoserver/shandong/wfs";
          $.ajax({
            url: url,
            data: $.param(wfsParams), //传参
            type: "GET",
            dataType: "jsonp", //解决跨域的关键
            jsonpCallback: "loadFeatures", //回调
          });
        },
        strategy: tile(
          new createXYZ({
            maxZoom: 25,
          })
        ),
        projection: "EPSG:4326",
      });
      //回调函数使用
      window.loadFeatures = function (response) {
        vectorSource.addFeatures(
          new ol.format.GeoJSON().readFeatures(response)
        ); //载入要素
      };
      var vectorLayer = new Vector({
        source: vectorSource,
      });
      return vectorLayer;
    },

    clcall() {
      if (this.wfs_layer) {
        this.map.removeLayer(this.wfs_layer);
        wfs_layer = null;
      }
    },

    select_kk() {
      var name = "shandong:kk_record";
      clcall();
      this.wfs_layer = this.wfs(name);
      this.map.addLayer(wfs_layer);
    },

    // initMap(i){
    //     console.log("init finished!");
    //     console.log(i);
    // }
  },
  mounted() {
    this.initMap(i);
    this.addPopup();
  },
};
</script>

<style scoped>
.visual_conBot {
  height: 100%;
  /* background: url(../assets/ksh41.png) no-repeat;
	background-size: 100% 100%; */
  width: 100%;
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
  width: 100%;
  height: 1300px;
  position: absolute;
}

.visual_con .visual_conBot .visual_chart_text {
  color: #345f92;
  text-shadow: #00d8ff 1px 0 0, #00d8ff 0 1px 0, #00d8ff 0 -1px 0,
    #00d8ff -1px 0 0;
  position: absolute;
  width: 100%;
  align-content: center;
  z-index: 99;
}

.visual_con .visual_conBot .visual_chart_text h1 {
  font-size: 35px;
  margin-bottom: 6px;
  text-align: center;
}

.visual_con .visual_conBot .visual_chart_text h2 {
  font-size: 25px;
  text-align: center;
}

.ol-popup {
  position: absolute;
  background-color: white;
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  font-size: 25px;
  padding: 25px;
  width: 650px;
  border-radius: 15px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
}
.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}
.popup-content {
  width: 650px;
}
.ol-popup-closer:after {
  content: "✖";
}
</style>