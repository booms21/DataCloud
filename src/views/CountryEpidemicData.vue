<template>
  <div>
    <div id="chart1" style="width: 1100px;height:600px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china';
import city from 'echarts/map/json/china-cities.json';
export default {
  name: 'CountryEpidemicData',
  data () {
    return {
      data: []
    };
  },

  mounted () {
    let geoCoordMap = {};

    city.features.forEach(function (v) {
      // 地区名称
      let name = v.properties.name; // 地区经纬度
      geoCoordMap[name] = v.properties.cp;
    });
    let convertData = function (data) {
      var res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].city];
        if (geoCoord) {
          res.push({
            name: data[i].city,
            value: geoCoord.concat(data[i].confirm),
            confirm: data[i].confirm,
            suspect: data[i].suspect,
            dead: data[i].dead,
            heal: data[i].heal,
            create_time: data[i].create_time
          });
        }
      }
      return res;
    };
    this.$http({ url: '/ihoguApi/?s=Whfy.city', method: 'get' })
      .then(response => {
        this.renderMap(convertData(response.data.data.items));
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    renderMap (data) {
      let chart1 = echarts.init(document.getElementById('chart1'));

      chart1.setOption({
        tooltip: {
          show: true, // 鼠标移入是否触发数据
          trigger: 'item', // 出发方式
          formatter: function (params) {
            let str = `${params.data.name}
        </br>确诊：${params.data.confirm}
        </br>疑似：${params.data.suspect}
        </br>死亡：${params.data.dead}
        </br>治愈：${params.data.heal}
        </br>更新时间：${params.data.create_time}
        `;
            return str;
          }
        },
        visualMap: {
          type: 'continuous',
          text: ['200人以上', '0人确诊'],
          showLabel: true,
          seriesIndex: [0],
          min: 0,
          max: 200,
          inRange: {
            color: ['#fff', 'yellow', 'orangered']
          },
          textStyle: {
            color: '#000'
          },
          bottom: 30,
          left: 'left'
        },
        geo: {
          map: 'china',
          scaleLimit: {
            min: 1,
            max: 10
          },
         zoom: 1.3,
          left: '7%',
          label: {
            normal: {
              show: true,
              color: '#fff'
            },
            emphasis: {
              show: true
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              borderWidth: 0.5,
              areaColor: 'rgba(128, 128, 128, 0)',
              borderColor: '#759FE3'
            },
            emphasis: {
              areaColor: 'rgb(187, 194, 202)'
            }
          }
        },
        series: [
          {
            name: '品种个数',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data,
            // 标记大小，地图上的圆点
            symbolSize: function (val) {
              return 5;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
