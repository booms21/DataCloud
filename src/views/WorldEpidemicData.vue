<template>
  <div>
    <div id="chart1" style="width: 1100px;height:1100px;"></div>
  </div>
</template>
<script>
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import echarts from 'echarts';
export default {
  data () {
    return {
      countryArr: [],
      confirmArr: [],
      deadArr: []
    };
  },
  mounted () {
    this.$http({
      url: 'https://myapi.ihogu.com/public/?s=Whfy.count&order=create_time&order_sort=DESC&limit=400',
      method: 'get'
    })
      .then(response => {
        let responseData = response.data.data.items;
        let arr = [];

        responseData.map(item => {
          var exist = arr.find(element => {
            return element.country === item.country;
          });
          if (typeof exist === 'undefined') {
            arr.push(item);
          }
        });

        arr = arr.sort((pre, curr) => {
          return pre.confirm - curr.confirm;
        });
        let confirm = [];
        let dead = [];
        let country = [];
        arr.forEach(item => {
          country.push(item.country);
          confirm.push(item.confirm);
          dead.push(item.dead);
        });
        this.deadArr = dead;
        this.confirmArr = confirm;
        this.countryArr = country;
        this.renderChart();
        console.log(arr);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  methods: {
    renderChart () {
      let echarts1 = echarts.init(document.getElementById('chart1'));
      console.log(this.countryArr);
      echarts1.setOption({
        title: {
     
          subtext: '数据来自网络'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',

          position: 'top'
        },
        yAxis: {
          type: 'category',
          data: this.countryArr
        },
        series: [
          {
            name: '确诊',
            type: 'bar',
            data: this.confirmArr
          },
          {
            name: '死亡',
            type: 'bar',
            data: this.deadArr
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
