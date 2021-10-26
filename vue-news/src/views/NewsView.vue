<template>
  <div>
      <div v-for ="user in this.$store.state.news">
          {{user.title}}
      </div>
  </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js';

export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
        // fetchNewsList()
        //     .then(response => {
        //         console.log(response);
        //         this.users = response.data;
        //     })
        //     .catch(error => console.log(error))
    }
}
</script>

<style>

</style>