<template>
  <div>
    <div class="height130">
      <div class="frame" id="f1">
        <span class="span-main-logo">
          <router-link to="./index"> 
          <img class="main-logo" style="display: inline-block" src="./../assets/cvlab-white.png" />
          </router-link>
          <!-- <a href="localhost:8080/">
          <img class="main-logo" style="display: inline-block" src="./../assets/cvlab-white.png" />
          </a> -->
          
        </span>
        <span class="span-right-align">
          <div class="bjtudiv">
            <img class="right-align" style="display: inline-block" src="./../assets/logo1-white.png" />
          </div>
          <div class="height70"> 
            <navMenu />
          </div>
        </span>
      </div>
    </div>
    <div class="content">
      <div class="frame" id="f2">
        <div class="bannerAndNews">
          <span class="banner" style="display: inline-block">
            <el-carousel
              height="450px"
              indicator-position="inside"
              class="center"
            >
              <el-carousel-item v-for="item in images" :key="item.id">
                <img class="bannerImg" :src="item.url" alt="无图片" />
              </el-carousel-item>
            </el-carousel>
          </span>
          <span style="display: inline-block" class="width544">
            <news1 />
          </span>
        </div>
        <div class="row2news">
          <span class="banner">
            <news2 />
          </span>
          <span style="display: inline-block" class="width544">
            <news3 />
          </span>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="footer">
      <div class="frame" id="f3">
        <div class="container">
          <div class="row" id="coope" style="text-align: center">
            <div
              class="footer-coope"
              style="display: inline-block; margin-right: 10px"
            >
              <a
                target="_blank"
                style="display: inline-block; margin: 8px 0"
                href="http://www.svm.tsinghua.edu.cn/"
                ><img
                  src="./../assets/logo1.png"
                  alt="http://www.svm.tsinghua.edu.cn"
              /></a>
            </div>
            <div
              class="footer-coope"
              style="display: inline-block; margin-right: 10px"
            >
              <a
                target="_blank"
                style="display: inline-block; margin: 8px 0"
                href="http://huei.engin.umich.edu/"
                ><img
                  src="./../assets/logo1.png"
                  alt="http://www.svm.tsinghua.edu.cn"
              /></a>
            </div>
            <div
              class="footer-coope"
              style="display: inline-block; margin-right: 10px"
            >
              <a
                target="_blank"
                style="display: inline-block; margin: 8px 0"
                href="http://ddl.stanford.edu/"
                ><img
                  src="./../assets/logo1.png"
                  alt="http://www.svm.tsinghua.edu.cn"
              /></a>
            </div>
            <div
              class="footer-coope"
              style="display: inline-block; margin-right: 10px"
            >
              <a
                target="_blank"
                style="display: inline-block; margin: 8px 0"
                href="https://sites.google.com/site/mpclaboratory/home"
                ><img
                  src="./../assets/logo1.png"
                  alt="http://www.svm.tsinghua.edu.cn"
              /></a>
            </div>
            <div
              class="footer-coope"
              style="display: inline-block; margin-right: 10px"
            >
              <a
                target="_blank"
                style="display: inline-block; margin: 8px 0"
                href="https://www.csail.mit.edu/"
                ><img
                  src="./../assets/logo1.png"
                  alt="http://www.svm.tsinghua.edu.cn"
              /></a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="row" style="margin: 0; text-align: center">
                <address class="indexContact">
                  A639 LSK Building, School of Vehicle and Mobility, Tsinghua
                  University, Beijing, 100084, China<br />
                </address>
              </div>
              <div class="row" style="margin: 0; text-align: center">
                Copyright©2016<span class="tone"
                  ><a
                    href="http://www.tsinghua.edu.cn/publish/newthu/index.html"
                    target="_blank"
                  >
                    Tsinghua University</a
                  ></span
                ><span
                  ><a href="http://www.beian.miit.gov.cn/" target="_blank">
                    京ICP备17006999号&nbsp;</a
                  ></span
                >
              </div>
              <div
                class="row recordcode"
                style="margin-top: 15px; text-align: center"
              >
                <a
                  style="display: inline-flex"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802022904"
                  target="_blank"
                  ><i></i>京公网安备11010802022904号</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navMenu from "./../views/navMenu.vue";
import news1 from "./../views/news1.vue";
import news2 from "./../views/news2.vue";
import news3 from "./../views/news3.vue";

export default {
  name: "app2",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      images: [
        { id: 1, url: require("./../img/intro-1.jpg") },
        { id: 2, url: require("./../img/intro-2.jpg") },
        { id: 3, url: require("./../img/intro-3.jpg") },
        { id: 4, url: require("./..//img/intro-4.jpg") },
      ],
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  components: {
    navMenu,
    news1,
    news2,
    news3,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
/* #app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

body{
  margin:0px;
  background-color: #e0e0e0;
}

/* div{
  position:absolute;
} */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

img.bannerImg {
  height: 450px;
}

#f1 {
  height: 130px;
  background-color: #005bac;
}

#f2 {
  background-color: #c5ddf9;
}

#f3 {
  background-color: #e0e0e0;
  height: 100%;
}

div.bannerAndNews {
  height: 470px;
  background-color: #c5ddf9;
}

div.row2news {
  height: 500px;
  padding-top: 10px;
  background-color: #c5ddf9;
}

.el-carousel__item img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

div.container-fluid {
  padding-top: 10px;
  height: 470px;
  background-color: #e0e0e0;
}

div.container {
  background-color: #e0e0e0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.height500 {
  height: 500px;
}

div.news1 {
  height: 450px;
}

div.frame {
  /* background-color: rgb(252, 253, 253); */
  padding-right: auto;
  padding-bottom: 20px;
  width: 1344px;
  padding-left: 15%;
  height: auto;
}

div.blank20 {
  height: 20px;
  background-color: #005bac;
}

span.span-right-align {
  float: right;
  margin-top: 15px;
  margin-right: 10px;
  height: 130px;
  width: 1000px;
}

div.bjtudiv {
  background-color: #005bac;
  height: 60px;
}

div.height130 {
  padding-bottom: 20;
  height: 150px;
  background-color: #005bac;
}

div.height70 {
  background-color: #005bac;
  height: 70px;
}

img.right-align {
  height: 60px;
  float: right;
}

img.main-logo {
  padding: 10px, 10px, 10px, 10px;
  height: 130px;
  float: left;
}

span.span-main-logo {
  float: left;
  margin-left: 20px;
  margin-top: 15px;
}

span.banner {
  padding: 10px;
  float: left;
  height: 450px;
  width: 800px;
}

div.content {
  background-color: #c5ddf9;
}

span.width544 {
  padding: 10px;
  float: right;
  width: 500px;
  height: 450px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
