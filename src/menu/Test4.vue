<template>
  <div>
    <div class="showCollection">
      <h2 style="color: rgba(0,0,0,0.6)">分类</h2>
      <el-divider></el-divider>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">作者</el-menu-item>
        <el-menu-item index="2">小说</el-menu-item>
      </el-menu>
      <ul class="showNovel">
        <li v-for="item in lists" :key="item">
          <img :src="item.imageUrl" />
          <span style="font-size: 15px;text-align: left;color: black">{{ item.author }}</span>
          <span style="text-align: right;color: #99a9bf;font-size: 15px">{{item.hot}}</span>
          <a :href="item.downloadUrl" target="_blank">
            <span>{{ item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "分类",
  data(){
    return{
      activeIndex: '1',
      lists:[]
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
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>