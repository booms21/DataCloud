<template>
  <div class="box">
  <div class="a">{{'111'|ssa(dd)}}</div>
   <div class="b"></div>
   <button @click="emt">sss</button>
  <div></div>
</div>
</template>
<script>
export default {
   data () {
       return {
           dd: 'ss'
       };
   },
   watch: {
'dd': {
    handler: function (val, oldval) {
console.log(val, oldval);
}
}
   },
   methods: {
       emt () {
           this.bus.$emit('fo', 123);
       },
       govuex (e) {
           console.log(e);
        this.$store.commit('test', 'edit11');
       }
   }
};
</script>
<style lang="scss" scoped>
.box{
    height: 300px;
    width: 600px;
    border: solid #000 1px;
    .a{
        width: 100px;
        height: 100px;
        background-color: green;
        border: springgreen solid 1px;
    }
     .b{
    }
}
</style>
