<template>
  <div ref="bannerC" class="bannerC">
    <el-carousel :height="400+'px'" indicator-position="inside" class="center">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img class="bannerImg" :src="item.url" alt="无图片" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.bannerC {
  margin-top:10px;
  height: 100%;
  width: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  /* line-height: 150px; */
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
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // banH = 400;
    const images = [
      { id: 1, url: require("./../img/intro-1.jpg") },
      { id: 2, url: require("./../img/intro-2.jpg") },
      { id: 3, url: require("./../img/intro-3.jpg") },
      { id: 4, url: require("./..//img/intro-4.jpg") },
    ];
    return {
    //   banH,
      images,
    };
  },
    // methods: {
    //   setBanH() {
    //     this.banH = this.$refs.bannerC.clientHeight;
    //   },
    // },
    // mounted() {
    //   this.setbanH();
    //   window.addEventListener(
    //     "resize",
    //     () => {
    //       this.setbanH();
    //     },
    //     false
    //   );
    // },
});
</script>
