import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history', //# 해쉬값 제거
  routes : [
    {
        path : '/',
        redirect : '/news',
    },
    {
        path : '/news', // url 주소 
        component : NewsView, // url주소로 갔을 때 표시될 컴포넌트
    },
    {
        path : '/ask',
        component : AskView,
    },
    {
        path : '/jobs',
        component : JobsView,
    },
    {
        path : '/user/:id',
        component : UserView,
    },
    {
        path : '/item/:id',
        component : ItemView,
    },
  ]
});

