<template>
  <div>
      <div v-for="ask in asks">
          {{ask.title}}
      </div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'

export default {
    data(){
        return {
            asks : []
        }
    },
    created(){
        fetchAskList()
            .then(reponse =>{
                this.asks = reponse.data;
            })
            .catch(error =>{
                console.log(error);
            })
    }
}
</script>

<style>

</style>