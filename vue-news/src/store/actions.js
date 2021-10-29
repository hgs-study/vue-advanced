import {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo,fetchList} from '../api/index.js';

export default{
    // FETCH_NEWS({commit}){
    //   return fetchNewsList()
    //     .then((response) =>{
    //       commit('SET_NEWS',response.data);
    //       return response;
    //     })
    //     .catch(error =>{
    //       console.log(error);
    //     })
    // },
    async FETCH_NEWS({commit}){
      const response = await fetchNewsList();
      commit('SET_NEWS',response.data);
      return response;
    },
    // FETCH_ASK({commit}){
    //   return fetchAskList()
    //     .then(({data}) =>{
    //         commit('SET_ASK', data);
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     })
    // },
    async FETCH_ASK({commit}){
      const response = await fetchAskList();
      commit('SET_ASK',response.data);
      return response;
    },
    // FETCH_JOBS({commit}){
    //   return fetchJobsList()
    //     .then( ({data}) =>{
    //       commit('SET_JOBS', data);
    //     })
    //     .catch(error =>{
    //       console.log(error);
    //     })
    // },
    async FETCH_JOBS({commit}){
      const response = await fetchJobsList();
      commit('SET_JOBS',response.data);
      return response;
    },
    // FETCH_USER({commit}, name){
    //   return fetchUserInfo(name)
    //     .then(({data}) =>{
    //       commit('SET_USER',data);
    //     })
    //     .catch(error=>{
    //       console.log(error);
    //     });
    // },
    async FETCH_USER({commit}, name){
      const response = await fetchUserInfo(name);
      commit('SET_USER',response.data);
      return response;
    },
    // FETCH_ITEM({commit}, itemId){
    //   return fetchItemInfo(itemId)
    //     .then(({data}) =>{
    //       commit('SET_ITEM',data);
    //     })
    //     .catch(error=>{
    //       console.log(error);
    //     });
    // },
    async FETCH_ITEM({commit}, itemId){
      const response = await fetchItemInfo(itemId);
      commit('SET_ITEM',response.data);
      return response;
    },
    // FETCH_LIST({commit},pageName){
    //   return fetchList(pageName)
    //     .then(response =>{
    //       commit('SET_LIST', response.data);
    //       return response;
    //     })
    //     .catch(error =>console.log(error));
    // }
    async FETCH_LIST({commit},pageName){
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    }
  }