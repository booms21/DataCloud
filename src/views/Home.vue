<template>
  <div>
    <div class="carousel-box">
      <el-carousel>
        <el-carousel-item v-for="link in carouselImgLinks" :key="link">
          <img :src="link" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider>高级VIP服务</el-divider>
    <div>
      <el-row class="img-container" justify="space-around" align="middle">
        <el-col :span="8" v-for="link in midImgLinks" :key="link.title">
          <div class="item-box">
            <div
              class="img-item"
              :style="{ 'background-image': 'url(' + link.img+ ')','background-repeat':'no-repeat'}"
            ></div>
            <div class="img-title">{{link.title}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      carouselImgLinks: [
        require('@/assets/images/1.jpeg'),
        require('@/assets/images/2.jpeg'),
        require('@/assets/images/3.jpeg'),
        require('@/assets/images/4.jpeg'),
        require('@/assets/images/5.jpeg')
      ],

      midImgLinks: [
        { img: require('@/assets/images/home1.png'), title: '数据吸取' },
        { img: require('@/assets/images/home2.png'), title: '技术云集' },
        { img: require('@/assets/images/home3.png'), title: '便民服务' }
      ]
    };
  }
};
</script>
<style scoped>
.img-container {
  padding: 5rem 0;
}
.item-box {
  margin: 0 auto;
  width: 160px;
}
.img-item {
  width: 160px;
  height: 130px;
}
.item-box .img-title {
  text-align: center;
  margin-top: 30px;
  font-weight: bolder;
  font-size: 20px;
}
.el-carousel {
  width: 650px;
  margin: 0 auto;
}
.carousel-box {
  margin: 2rem 0;
}
/deep/ .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
