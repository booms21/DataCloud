import vuex from 'vuex';
import vue from 'vue';
vue.use(vuex);
export default new vuex.Store({
state: {
    test: '123vuesx'
},
mutations: {
  test: function (x, ...s) {
       x.test = s;
  }
},
actions: {

}
});
