import ListView from './ListView.vue';
import bus from '../utils/bus.js';

//하이오더 컴포넌트
//news, jobs, ask가 하는 행동들이 다 같았기 때문에 이를 감싸서 
//코드를 재활용하는 역할
export default function createListView(name){
    return {
        //재사용할 인스턴스(컴포턴트) 옵션들
        name,
        created(){
            bus.$emit("start:spinner");
            setTimeout(() =>{
                this.$store.dispatch('FETCH_LIST',this.$route.name)
                    .then(() =>{
                        console.log("fetched");
                        bus.$emit("end:spinner");
                    })
                    .catch((error) =>{
                        console.log(error);
                    });
            },3000);
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}