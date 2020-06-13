<template>
    <div>
         <el-popover placement="right-start" width="300" trigger="hover">
            <div>
              <div  :title="memberInfoObj.username">
                <el-link :href="memberInfoObj.url" target="_blank">{{memberInfoObj.username}}</el-link>
              </div>
              <div class="user-meta">
                 <div><span>签名： </span><span v-if="memberInfoObj.bio">{{memberInfoObj.bio}}</span><span v-else>这个人很懒，什么都没有留下</span></div>
                 <div><span>个人网站： </span><span><el-link :href="memberInfoObj.website" target="_blank">{{memberInfoObj.website}}</el-link></span></div>
                 <div><span>GitHub： </span><span>{{memberInfoObj.github}}</span></div>
                 <div><span>所在地区： </span><span>{{memberInfoObj.location}}</span></div>
              </div>
            </div>
            <el-avatar shape="square" slot="reference" size="small" :src="memberInfoObj.avatar_large"></el-avatar>
          </el-popover>
    </div>
</template>
<script>
export default {
    name: 'ForumListPopover',
    props: {
        memberInfoObj: {
            require: true,
            type: Object
        }
    },
    data () {
        return {

        };
    }
};
</script>
<style lang="scss" scoped>
.user-meta{
    padding: 10px;
    color: #6666669c;
    font-size: 1rem;
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
