<template>
<div>
  <div class="showCollection">
    <h2 style="color: rgba(0,0,0,0.6)">推荐</h2>
    <el-divider></el-divider>
    <ul class="showNovel">
      <li v-for="item in lists" :key="item">
        <img :src="item.imageUrl" />
        <span style="font-size: 15px;text-align: left;color: black">{{item.author}}</span>
        <span style="text-align: right;color: #99a9bf;font-size: 15px">{{item.hot}}</span>
        <a :href="item.downloadUrl" target="_blank">
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "推荐",
  data() {
    return {
      lists: [],
    }
  },
  mounted() {
    this.initLists();
  },
  methods:{
    initLists(){
      this.getRequest('/novel/top').then(resp=>{
        if(resp){
          this.lists = resp;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>