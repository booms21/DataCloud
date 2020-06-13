
<template>
  <div id="app">
<el-container direction="vertical">

  <Header />

 <router-view class="mid-box"></router-view>
 <Footer />
</el-container >
  </div>
</template>

<script>
/* eslint-disable semi */
import Footer from './Footer';
import Header from './Header.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.mid-box{
min-height:500px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
