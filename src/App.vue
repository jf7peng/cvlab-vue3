<template>
  <div class="frame">
    <div class="height130">
      <span class="span-main-logo">
        <img class="main-logo" src="./assets/cvlab-white.png" />
      </span>
      <span class="span-right-align">
        <div class="bjtudiv">
          <img class="right-align" src="./assets/logo1-white.png" />
        </div>
        <div class="height70">
          <navMenu />
        </div>
      </span>
    </div>
    <div class="blank20"></div>
    <div>
      <span class="banner">
        <el-carousel height="480px" indicator-position="inside" class="center">
          <el-carousel-item v-for="item in images" :key="item.id">
            <img class="bannerImg" :src="item.url" alt="无图片" />
          </el-carousel-item>
        </el-carousel>
      </span>
      <span> "你好" </span>
    </div>

    <navMenu />
  </div>
</template>

<script>
import navMenu from "./navMenu.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      images: [
        { id: 1, url: require("./img/intro-1.jpg") },
        { id: 2, url: require("./img/intro-2.jpg") },
        { id: 3, url: require("./img/intro-3.jpg") },
        { id: 4, url: require("./img/intro-4.jpg") },
      ],
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  components: {
    navMenu,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

img.bannerImg {
  height: 480px;
}

.el-carousel__item img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

div.frame {
  background-color: rgb(252, 253, 253);
  padding-right: calc(50% - 672px);
  padding-bottom: 20px;
  padding-left: calc(50% - 672px);
}

div.blank20 {
  height: 20px;
  background-color: #005bac;
}

span.span-right-align {
  float: right;
  margin-top: 5px;
  margin-right: 10px;
  height: 130px;
  width: 1000px;
}

div.bjtudiv {
  height: 60px;
}

div.height130 {
  height: 130px;
  background-color: #005bac;
}

div.height70 {
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
  margin-top: 5px;
}

span.banner {
  height: 480px;
  width: 270px;
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
