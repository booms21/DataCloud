import Vue from 'vue';
import Router from 'vue-router';
import ForumListView from '@/components/ForumListView';
import Home from '@/views/Home.vue';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/forumListView',
      name: 'ForumListView',
      component: ForumListView
    },
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/ToolList',
      name: 'ToolList',
      component: () => import('@/views/ToolList'),
      children: [
        {
          path: '/ForumList',
          name: 'forumListView',
          meta: {
            pageName: 'V2EX'
          },
          component: () => import('@/components/ForumListView')
        },
        {
          path: '/CountryEpidemicData',
          name: 'CountryEpidemicData',
          meta: {
            pageName: '中国新冠肺炎疫情数据'
          },
          component: () => import('@/views/CountryEpidemicData')
        },
        {
          path: '/Setting',
          name: 'Setting',
          meta: {
            pageName: 'Setting'
          },
          component: () => import('@/views/Setting')
        },
         {
           path: '/WorldEpidemicData',
           name: 'WorldEpidemicData',
           meta: {
             pageName: '世界新冠肺炎疫情数据'
           },
           component: () => import('@/views/WorldEpidemicData')
         }
      ]
    }
  ]
});
export default router;
