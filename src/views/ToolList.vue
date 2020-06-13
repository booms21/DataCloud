
<template>
  <el-row>
    <el-col class="main-left">
      <el-menu router default-active="1-4-1" class="el-menu-vertical-demo" >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-view"></i>
            <span slot="title">数据感知</span>
          </template>
          <el-menu-item-group>
            <span slot="title">技术论坛api</span>
            <el-menu-item index="1-1" route="/ToolList/">V2EX</el-menu-item>
             </el-menu-item-group>
          <el-menu-item-group title="分组2">
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1" route="/Setting">选项1</el-menu-item>
          </el-submenu>
             </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2" route="/CountryEpidemicData">
          <i class="el-icon-s-data"></i>
          <span slot="title">中国新冠肺炎疫情数据</span>
        </el-menu-item>
         <el-menu-item index="3" route="/WorldEpidemicData">
          <i class="el-icon-s-data"></i>
          <span slot="title">世界新冠肺炎疫情数据</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="17" class="main-right">
      <el-page-header @back="goBack" :content="$route.meta.pageName">
</el-page-header>
<keep-alive >
<router-view></router-view>
</keep-alive>
          <el-backtop  :bottom="100" v-once>
    <div
      style="{
        height: 100%;
        width: 100%;
        padding:5px;
        font-size:12px;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 15px;
        color: #1989fa;
      }"
    >
      回到顶部
    </div>
  </el-backtop>
</el-col>

  </el-row>
</template>
<script>
export default {/* eslint-disable semi */
  name: 'ToolList',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  },
  mounted () {
   this.bus.$on('fo', function (xx) {
alert(xx)
     })
  }

}
</script>
<style lang="scss" >

.el-menu {
  border: solid 1px #e6e6e6;
  border-radius: 5px;
}
.el-page-header {
  margin-bottom: 1rem;
}
.main-right {
  padding: 1rem;
}
.main-left {
    padding: 15px;
   width: 280px;
   /deep/ .el-submenu{
          width: 247px;
   }
  /deep/ .el-menu-vertical-demo{
    overflow: hidden;
  }
}
</style>
