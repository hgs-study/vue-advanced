<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components : {
    ToolBar,
  }
}
</script>

<style>
body{
  padding : 0px;
  margin : 0px;
}
a{
  color: #34495e;
  text-decoration : none;
}
a.router-link-exact-active{
  text-decoration : underline;
}
a:hover{
  color : #42b883;
}
/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
