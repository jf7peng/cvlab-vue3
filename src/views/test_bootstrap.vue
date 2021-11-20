<template>
 <div class="bigdata">
	 <div class="head_top">

		<img class="img-responsive" src="../assets/newheader.png">
		
	</div>
	<div id="datatime">{{date}}</div>
			
		<ul class="nav container nav-pills nav-fill">
			
				<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">监测分析</a>
				
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">综合分析</a>
					<div class="dropdown-menu text-center" style="min-width:380px">
									
					<router-link class="dropdown-item" to="/test_bootstrap">通勤出行</router-link>
					<div class="dropdown-divider"></div>
					<router-link class="dropdown-item" to="/test_bootstrap">市郊出行</router-link>
					
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">专题分析</a>
					<div class="dropdown-menu text-center" style="min-width:380px">
					
					<router-link class="dropdown-item" to="/cv_origin">车联网示范区</router-link>
					<div class="dropdown-divider"></div>
					<router-link class="dropdown-item" to="/test_bootstrap">联通信令数据</router-link>

					</div>
				</li>
		</ul>
	
	<div class="visual">
		<div class="visual_left">
			<div>
				<left1 />
			</div>
			<div>
				<left2 />
			</div>
			
			<div>
				<left3 />
			</div>
		</div>
		<div class="visual_con">
			<div>
				<center />
			</div>
			
		</div>

	<div class="visual_right">
		<div>
			<right1 />
		</div>
		<div>
			<right2 />
		</div>

		<!-- <div class="visual_chart5" id="main11">
			
		</div> -->
		<!-- <div class="swiper-container visual_swiper1 visual_chart">
			<div class="swiper-wrapper">
				<div class="swiper-slide" id="main3"></div>
				<div class="swiper-slide" id="main31"></div>
			</div>
		</div> -->
	
		
		<!-- <div class="swiper-container visual_swiper1 visual_chart">
			<div class="swiper-wrapper">
				<div class="swiper-slide" id="main3"></div>
				<div class="swiper-slide" id="main31"></div>
			</div>
		</div> -->
			
		
	</div>
	
	
		<!-- <div class="clear"></div> -->

 	</div>

 </div>
	


</template>

<script>
import left1 from './left1.vue'
import left2 from './left2.vue'
import left3 from './left3.vue'
import center from './center1.vue'
import right1 from './right1.vue'
import right2 from './right2.vue'

// import axios from 'axios';
// import "ol/ol.css";
// import Map from "ol/Map";
// import OSM from "ol/source/OSM";
// import TileLayer from "ol/layer/Tile";
// import View from "ol/View";

export default {
  name: 'test',
 
  data: function() {
    return {
      date: new Date(),
	  navList:[
   {name:'/findProject',navItem:'发现项目'},
   {name:'/communityActivity',navItem:'社区动态'},
   {name:'/publishProject',navItem:'发布项目'},
   {name:'/personalCenter',navItem:'个人中心'},
   {name:'/manageCenter',navItem:'管理员中心'},
  ]
    };
  },
  components:{
		left1,
		left2,
		left3,
		center,
		right1,
		right2
	},
  created() {
  },
  mounted() {
    let that= this;
    this.timer = setInterval(function() {
      that.date = new Date().toLocaleString();
    });
	    
  },
	
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
   
  }
};








//测试ol是否可用
// export default{
//     mounted() {
//         this.initMap();

//     },
//     methods:{
//         initMap(){
//             new Map(
//                 {
//                     layers:[
//                         new TileLayer(
//                             {source: new OSM()
//                             }
//                         )                   ],
//                         target:"map",
//                         view: new View({
//                             center:[0,0],
//                             zoom:2
//                         })
//                 }
//             );
//             console.log("init finished!");
//         }
//     }
// }



// 访问后端
// export default {
//     name:'Ping',
//     data(){
//         return{
//             msg:'',
//         };
//     },
//     methods:{
//         getMessage(){
//             // 访问后端
//             const path = 'http://127.0.0.1:5000/';
//             axios.get(path)
//             .then((res) => {
//                 this.msg = res.data;
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//         },
//     },
//     created(){
//         this.getMessage();
//     }
//     };
</script>

<style>
.visual {
	height: calc(100% - 35px);
	padding-top: 0px;
	position: relative;
	top: -44px;
	z-index: 1
}
.visual_left {
	width: 20%;
	height: 100%;
	float: left;
}

.visual_con {
	width: 60%;
	height: 100%;
	float: left;
	padding: 0px 60px 0 0px;
}

.visual_right {
	width: 20%;
	height: 100%;
	float: right;
}
.visual_box {
	height: 400px;
}






</style>