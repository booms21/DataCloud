<template>
<div>
<el-menu
  router
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"

  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">

   <el-menu-item  active-text-color="#545c64" style="margin-right:10%"> <i class='el-icon-upload'></i>数据云</el-menu-item>
  <el-menu-item index="1" route="/">首页</el-menu-item>
  <el-menu-item index="2" route="/CountryEpidemicData">
 工具
  </el-menu-item>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4">关于</el-menu-item>
</el-menu>
</div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex2: '1'
    };
  }
};
</script>
<style  scoped>

</style>
