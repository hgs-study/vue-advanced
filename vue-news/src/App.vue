<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
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
</style>
