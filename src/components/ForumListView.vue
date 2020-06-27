<template>
  <div class="container">
    <div class="top-tab">
         <el-radio-group v-model="currentTab"  size="mini" @change="changeTopTab">
      <el-radio-button label="latest" >最新主题</el-radio-button>
      <el-radio-button label="hot" >热门主题</el-radio-button>
    </el-radio-group>
    </div>
  <ForumList :topicsList = "topicsList" ></ForumList>

  </div>
</template>

<script>
import ForumList from '@/components/ForumList';
import moment from 'moment';
export default {
  name: 'ForumListView',
  components: {
    ForumList
  },
  data () {
    return {
      topicsList: [],
      latestData: [],
      hotData: [],
      currentTab: 'latest'
    };
  },
  filters: {
    lastModifiedToNow (time) {
      console.log(time);
      return moment(new Date().getTime() - time).fromNow();
    }
  },
  methods: {
  changeTopTab () {
  if (this.currentTab === 'latest') {
      this.getTopicsListData('latest.json');
   } else if (this.currentTab === 'hot') {
  this.getTopicsListData('hot.json');
   }
  },
    getTopicsListData (subUrl = 'latest.json') {
      if (subUrl === 'latest.json' && this.latestData.length) {
         this.topicsList = this.latestData;
        return;
      }

       if (subUrl === 'hot.json' && this.hotData.length) {
          this.topicsList = this.hotData;
          return;
      }
        this.$http({ url: `${process.env.v2exApi}topics/${subUrl}`, method: 'get' })
      .then(response => {
        if (subUrl === 'latest.json') {
          this.latestData = response.data;
        } else if (subUrl === 'hot.json') {
          this.hotData = response.data;
        }
        this.topicsList = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  },

  mounted () {
  this.getTopicsListData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-tab{
  margin-bottom:10px ;
}
.user-meta{
    padding: 10px;
    color: #6666669c;
    font-size: 1rem;
}
.container {
  padding-top: 10px;
  padding-left: 10px;
}
.item-bottom {
  color: #6666667d;
  height: 1rem;
  text-align: right;
  bottom: 0;
  margin-top: 5px;
}
.el-card >>> .el-card__body {
  padding: 10px;
}
.el-card >>> .el-card__header {
  padding: 10px;
}
.item-bottom span {
  margin-right: 1rem;
}
.item-title {
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 600px;
  font-weight: 900;
}
.user-info {
  display: flex;
}
.username {
  padding-left: 10px;
  width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 25px;
}
.topics-item {
  margin-bottom: 20px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
