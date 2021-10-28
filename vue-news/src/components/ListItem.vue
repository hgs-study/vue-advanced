<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
          <!-- 포인트 영역 -->
          <div class="points">
            {{item.points || 0}}
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="news-title">
              <template v-if="item.domain">
                <a :href="item.url">
                    {{item.title}}
                </a>
              </template>
              <tempalte v-else>
                <router-link v-bind:to="`item/${item.id}`">
                    {{item.title}}
                </router-link>
              </tempalte>
            </p>
            <small class="link-text">
              {{item.itme_ago}} by 
              <router-link class="link-text" 
                v-if="item.user"
                v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
              <a :href="item.url" v-else>
                  {{item.domain}}
              </a>
            </small>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    computed : {
        listItems() {
            return this.$store.state.list;
        }
    },
}
</script>

<style scoped>
.news-list{
  margin : 0;
  padding : 0;
}
.post{
  list-style: none;
  display:flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width:80px;
  height: 60px;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #42b883 ;
}
.new-tilte{
  margin:0;
}
.link-text{
  color:#828282;
}
</style>