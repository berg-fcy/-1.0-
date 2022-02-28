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
      src: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8326cffc1e178a82e6abdd6bfa03738da877e862&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648533825&t=8ed51027217e8df1bf780fad7042aa30',
            'https://img2.baidu.com/it/u=2701540693,685895330&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170928%2F4bf8ae7215cc4800aefb1c88b3e4297b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648533897&t=38290588407bc2012fb9ad647c6570f3',
            'https://img2.baidu.com/it/u=3783092386,3240260520&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334']
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
.introduce{
  font-size: 30px;
  text-align: left;
  word-spacing: 15px;
  color: #355280;
  margin-left: 8px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>