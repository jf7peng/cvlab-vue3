<template>
  <div>
    <el-row :gutter="0">
      <el-col
        class="grid-content header"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span> </span>
      </el-col>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 18, offset: 0 }"
        :md="{ span: 18, offset: 0 }"
        :lg="{ span: 16, offset: 0 }"
        :xl="{ span: 16, offset: 0 }"
        class="height130"
      >
        <el-row :gutter="10">
          <el-col
            :xs="{ span: 0 }"
            :sm="{ span: 3 }"
            :md="{ span: 12 }"
            :lg="{ span: 12 }"
          >
            <span class="span-main-logo">
              <router-link to="/">
                <img
                  class="main-logo"
                  style="display: inline-block"
                  src="./../assets/cvlab-white.png"
                />
              </router-link>
              <!-- <a href="localhost:8080/">
          <img class="main-logo" style="display: inline-block" src="./../assets/cvlab-white.png" />
          </a> -->
            </span>
          </el-col>
          <el-col
            :xs="{ span: 24 }"
            :sm="{ span: 21 }"
            :md="{ span: 12 }"
            :lg="{ span: 12 }"
          >
            <span class="span-right-align">
              <div class="bjtudiv">
                <a href="http://bjtu.edu.cn">
                  <img
                    class="right-align"
                    style="display: inline-block"
                    src="./../assets/logo1-white.png"
                  />
                </a>
              </div>
            </span>
          </el-col>
        </el-row>
      </el-col>
      <el-col
        class="grid-content header"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col
        class="grid-content header2"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span> </span>
      </el-col>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 18, offset: 0 }"
        :md="{ span: 18, offset: 0 }"
        :lg="{ span: 16, offset: 0 }"
        :xl="{ span: 16, offset: 0 }"
      >
        <div type="flex" justify="center" class="height70">
          <navMenu />
        </div>
      </el-col>
      <el-col
        class="grid-content header2"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col
        class="grid-content main-content"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span></span>
      </el-col>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 18, offset: 0 }"
        :md="{ span: 18, offset: 0 }"
        :lg="{ span: 16, offset: 0 }"
        :xl="{ span: 16, offset: 0 }"
        class="grid-content main-content"
      >
        <el-row :gutter="10">
          <el-col
            :xs="{ span: 24, offset: 0 }"
            :sm="{ span: 24, offset: 0 }"
            :md="{ span: 24, offset: 0 }"
            :lg="{ span: 14, offset: 0 }"
            :xl="{ span: 14, offset: 0 }"
          >
            <banner />
          </el-col>
          <el-col
            :xs="{ span: 24, offset: 0 }"
            :sm="{ span: 24, offset: 0 }"
            :md="{ span: 24, offset: 0 }"
            :lg="{ span: 10, offset: 0 }"
            :xl="{ span: 10, offset: 0 }"
          >
            <news1 />
          </el-col>
        </el-row>
      </el-col>
      <el-col
        class="grid-content main-content"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span> </span>
      </el-col>
    </el-row>
    <el-row :gutter="0" id="bg0">
      <el-col
        class="grid-content main-content"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span></span>
      </el-col>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 18, offset: 0 }"
        :md="{ span: 18, offset: 0 }"
        :lg="{ span: 16, offset: 0 }"
        :xl="{ span: 16, offset: 0 }"
        class="grid-content main-content"
      >
        <el-row :gutter="10">
          <el-col
            :xs="{ span: 24, offset: 0 }"
            :sm="{ span: 24, offset: 0 }"
            :md="{ span: 24, offset: 0 }"
            :lg="{ span: 14, offset: 0 }"
            :xl="{ span: 14, offset: 0 }"
          >
            <news2 />
          </el-col>
          <el-col
            :xs="{ span: 24, offset: 0 }"
            :sm="{ span: 24, offset: 0 }"
            :md="{ span: 24, offset: 0 }"
            :lg="{ span: 10, offset: 0 }"
            :xl="{ span: 10, offset: 0 }"
          >
            <news3 />
          </el-col>
        </el-row>
      </el-col>
      <el-col
        class="grid-content main-content"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span> </span>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col
        class="grid-content footer"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span> </span>
      </el-col>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 18, offset: 0 }"
        :md="{ span: 18, offset: 0 }"
        :lg="{ span: 16, offset: 0 }"
        :xl="{ span: 16, offset: 0 }"
        class="grid-content footer"
      >
      </el-col>
      <el-col
        class="grid-content footer"
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 3, offset: 0 }"
        :md="{ span: 3, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <span> </span>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import navMenu from "./navMenu.vue";
import banner from "./banner.vue";
import news1 from "./news1.vue";
import news2 from "./news2.vue";
import news3 from "./news3.vue";

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
    banner,
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

body {
  margin: 0px;
  background-color: #e0e0e0;
}

/* div{
  position:absolute;
} */

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

div.row2news {
  height: 500px;
  padding-top: 10px;
  background-color: #c5ddf9;
}

.el-col.header {
  height: 150px;
  background-color: #005bac;
}

.el-col.header2 {
  height: 70px;
  background-color: #005bac;
}

.el-col.main-content {
  padding: 10px;
  background-color: #c5ddf9;
}
.el-col.footer {
  height: 500px;
  background-color: #e0e0e0;
}

div.container {
  background-color: #e0e0e0;
}

.height500 {
  height: 500px;
}

div.news1 {
  height: 450px;
}

div.frame {
  /* background-color: rgb(252, 253, 253); */
  /* padding-right: auto; */
  padding-bottom: 20px;
  width: 1344px;
  /* padding-left: 15%; */
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
}

div.bjtudiv {
  background-color: #005bac;
  height: 130px;
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
  height: 80px;
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

#bg0 {
  background-color: None;
}

div.content {
  background-color: #c5ddf9;
}

/* span.width544 {
  padding: 10px;
  float: right;
  width: 500px;
  height: 450px;
} */

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>