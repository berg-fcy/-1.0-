<template>
  <div>
    <div>
      <el-carousel :interval="4000" type="card" style="width:1000px;margin-left: 100px">
        <el-carousel-item v-for="item in src" :key="item">
          <el-image :src="item" fit="fit"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="introduce">
      &nbsp;&nbsp;&nbsp;曜杨实时小说网站成立于2022年，集小说创作，小说阅读功能于一体的创新型小说网，曜杨小说创新性的支持在线用户为自己喜爱的小说创作同人分支，拉近了读者与作者的距离。视觉小说区以其灵活的表现力，开辟了网络小说的新型模式。
    </div>
  </div>
</template>

<script>
export default {
  name: "首页",
  data(){
    return{
      src: ['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg']
    }
  }

}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  text-align: center;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>