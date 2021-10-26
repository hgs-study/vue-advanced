<template>
  <div>
      <div v-for="item in fetchedAsk">
          {{item.title}}
      </div>
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