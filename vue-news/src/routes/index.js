import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import {store} from '../store/index.js';

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
        name : 'news',
        // component : createListView('NewsView') //HOC
        component : NewsView,
        beforeEnter : (to,from,next) =>{
            bus.$emit("start:spinner");
            store.dispatch('FETCH_LIST',to.name)
            .then(() =>{
                console.log('fetched');
                bus.$emit("end:spinner");
                next();
            })
            .catch((error)=>{
                console.log(error);
            })
            // console.log("to",to);
            // console.log("from",from);
            // console.log(next);
            
        },
    },
    {
        path : '/ask',
        name : 'ask',
        // component : createListView('AskView') //HOC
        component : AskView,
        beforeEnter: (to,from,next)=>{
            bus.$emit("start:spinner");
            store.dispatch('FETCH_LIST', to.name)
                .then(() =>{
                    console.log('fetched');
                    // bus.$emit("end:spinner");
                    next();
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    },
    {
        path : '/jobs',
        name : 'jobs',
        // component : createListView('JobsView')//HOC
        component : JobsView,
        beforeEnter : (to,from,next) =>{
            bus.$emit("start:spinner");
            store.dispatch('FETCH_LIST', to.name)
                .then(() =>{
                    console.log('fetched');
                    bus.$emit("end:spinner");
                    next();
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
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

