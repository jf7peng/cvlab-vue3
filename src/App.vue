<template>
  <div class="frame">
    <div>
      <img class="main-logo" src="./assets/cvlab.png" />
      <div class="div-right-align">
        <div class="bjtudiv">
          <img class="right-align" src="./assets/logo1.png" />
        </div>
        <div class="nav-bar-right">
          <navMenu />
        </div>
      </div>
    </div>
    <el-carousel indicator-position="outside" class="center">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img :src="item.url" alt="无图片" />
      </el-carousel-item>
    </el-carousel>
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

div.frame {
  background-color: rgb(252, 253, 253);
  padding-top: 5px;
  padding-right: calc(50% - 672px);
  padding-bottom: 20px;
  padding-left: calc(50% - 672px);
}

div.div-right-align {
  float: right;
  height: 120px;
  width: 500px;
}

div.bjtudiv {
  height: 60px;
}

.nav-bar-right {
  float: right;
}

img.right-align {
  height: 60px;
  float: right;
}

img.main-logo {
  height: 130px;
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
