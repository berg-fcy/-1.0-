<template>
  <div>
    <el-header class="homeHeader">
      <div class="title">曜杨实时小说网站</div>
    </el-header>
    <div class="showCollection">
      <h2 style="color: rgba(0,0,0,0.6)">我的收藏</h2>
      <el-divider></el-divider>
      <ul class="showNovel">
        <li v-for="item in lists" :key="item">
          <img :src="item.imageUrl" />
          <span style="font-size: 15px;text-align: left;color: black">{{ item.author }}</span>
          <span style="text-align: right;color: #99a9bf;font-size: 15px">{{ item.hot }}</span>
          <a href="#" target="_blank">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",
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
      this.getRequest('/novel/collection').then(resp=>{
        if(resp){
          this.lists = resp;
        }
      })
    }
  }
}
</script>

<style>
.showCollection{
  margin-left: 5px;
  margin-right: 5px;
}
ul{
  list-style: none;
}
ul.showNovel{
  width: 1400px;
  overflow: hidden;
}
ul.showNovel li{
  background-clip: padding-box;
  box-shadow: 0 0 10px #cac6c6;
  border: 1px solid #31363f;
  border-radius: 15px;
  float: left;
  padding: 10px 10px 10px 10px;
  margin-left: 20px;
  width: 200px;
  text-align: center;
}
ul.showNovel li a{
  color: black;
  text-decoration: none;
}
ul.showNovel img{
  display: block;
  width: 100%;
  height: 250px;
}
ul.showNovel li span{
  font-size: 20px;
  display: block;
  width: 100%;
  line-height: 40px;
}

</style>