<template>
    <div><el-card shadow="hover" v-for="(item,idx) in topicsList" :key="idx" class="topics-item">
      <div slot="header" class="clearfix">
        <div class="user-info">
         <ForumListPopover :memberInfoObj = "item.member"></ForumListPopover>
          <div class="username" :title="item.member.username">{{item.member.username}}</div>
          <el-link :href="item.url" :title="item.title" target="_blank" :underline="false">
            <div class="item-title">{{item.title}}</div>
          </el-link>
        </div>
      </div>
      <div class="topics-content" v-html="item.content_rendered"></div>
      <div class="item-bottom">
        <span v-if="item.last_reply_by">最后回复 :{{item.last_reply_by}}</span>
        <span>回复 : {{item.replies}}</span>
        <span>节点 : {{item.node.title}}</span>
      </div>
    </el-card>
    </div>
</template>
<script>
import ForumListPopover from '@/components/ForumListPopover';
export default {
    name: 'ForumList',
    components: {
        ForumListPopover
    },
        props: {
        topicsList: {
            type: Array,
            require: true
        }
    },
    data () {
        return {

        };
    }
};
</script>
<style lang="scss" >
.topics-content img{
    max-width: 100%;
}
.topics-content{
      word-break: break-all;
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
