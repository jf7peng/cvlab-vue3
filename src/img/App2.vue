<template>
  <div id="frame">
    <div class="container">
      <img src="./assets/CVLab.png" />
      <img src="./assets/logo1.png" />
    </div>
    <div id="app">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">Home</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Research</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="3"
          ><a
            href="http://faculty.bjtu.edu.cn/trans/jsfl.html?gid=1"
            target="_blank"
            >People</a
          ></el-menu-item
        >
        <el-menu-item index="4"
          ><a
            href="http://www.idlab-tsinghua.com/thulab/labweb/publications.html"
            target="_blank"
            >Publications</a
          ></el-menu-item
        >
      </el-menu>

      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#00000"
        active-text-color="#ffd04b"
      >
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.container {
  width: 2000px;
  height: 400px;
  justify-content: center;
  display: flex;
}

img {
  width: 300px;
  height: 100px;
}
/* 
  .frame {
    margin: 50px 0px 50px 0px;
    padding: 100px;
  } */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #070505;
  margin-top: -150px;
}

/* .CVLab {
    position: absolute;
    padding: 30%;
    left: 0%;
  } */
/* .logo1 {
    position: absolute;
    top:0%;
    right: 0%;
  }

  .logo1 img{
              transform:scale(2);
              -ms-transform:scale(2);
              -webkit-transform:scale(2);
              -o-transform:scale(2);
              -moz-transform:scale(2);
  } */

div.frame {
  background-color: rgb(252, 253, 253);
  padding-top: 5px;
  padding-right: 100px;
  padding-bottom: 50px;
  padding-left: 100px;
}
</style>


