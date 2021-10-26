<template>
  <div>
      <p v-for ="item in fetchedAsk">
          <a v-bind:href="item.url">
            {{item.title}}
          </a>
          <small>{{item.time_ago}} by {{item.user}}</small>
      </p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed : {
        ...mapGetters([
            'fetchedAsk'
        ])

        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>