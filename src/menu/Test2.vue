<template>
  <div>
    <div class="showSort">
      <h2 style="color: rgba(0,0,0,0.6)">排行榜</h2>
      <el-divider></el-divider>
      <ol class="showSortNovel">
        <li v-for="item in lists" :key="item">
         <span><img :src="item.imageUrl" />{{item.description}}</span>
          <span style="font-size: 15px;text-align: left;color: black">{{item.author}}</span>
          <span style="text-align: right;color: #99a9bf;font-size: 15px">{{item.hot}}</span>
          <a :href="item.downloadUrl" target="_blank">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ol>
      <el-pagination
          :page-size=Pages.size
          :pager-count="11"
          layout="prev, pager, next"
          :total= Pages.size>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "排行榜",
  data() {
    return {
      lists: [],
      Pages:{
        count:'',
        novelPagesList:[{
          id:'',
          imageUrl:'',
          name:''
        }]
      }
    }
  },
  mounted() {
    this.initLists();
    this.initPages();
  },
  methods: {
    initLists() {
      this.getRequest('/novel/top').then(resp => {
        if (resp) {
          this.lists = resp;
        }
      })
    },
    initPages() {
      this.getRequest('/novel/').then(resp => {
        if (resp) {
          this.Pages = resp;
        }
      })
    }
  }
}
</script>

<style>
.showSort{
  margin-left: 5px;
  margin-right: 5px;
}
ol.showSortNovel{
  width:1000px;
  overflow: hidden;
}
ol.showSortNovel li{
  background-clip: padding-box;
  box-shadow: 0 0 10px #cac6c6;
  border: 1px solid #31363f;
  border-radius: 15px;
  float: left;
  padding: 10px 10px 10px 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  width: 800px;
}
ol.showSortNovel li a{
  color: black;
  text-decoration: none;
}
ol.showSortNovel img{
  width: 20%;
  height: 250px;
}
ol.showSortNovel li span{
  font-size: 20px;
  display: block;
  width: 100%;
  line-height: 30px;
}
</style>