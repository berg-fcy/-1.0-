<template>
  <div>
    <div class="showSort">
      <h2 style="color: rgba(0,0,0,0.6)">待审核</h2>
      <el-divider></el-divider>
      <ol class="showSortNovel">
        <li v-for="item in lists" :key="item">
          <span><img :src="item.imgUrl" />{{item.name}}</span>
          <span style="font-size: 15px;text-align: left;color: black">作者：xx</span>
          <span style="text-align: right;color: #99a9bf;font-size: 15px">热度：10</span>
          <a href="#" target="_blank">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "审核列表",
  data(){
    return{
      lists:[],
    }
  },
  mounted() {
    this.lists = [
      {
        imgUrl:
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        name: '鹿',
      },
      {
        imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        name: '马',
      },
      {
        imgUrl:
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        name: '山狮',
      },
    ]
  }
}
</script>

<style scoped>

</style>