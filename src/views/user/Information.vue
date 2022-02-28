<template>
<div>
  <el-header class="homeHeader">
    <div class="title">曜杨实时小说网站</div>
  </el-header>
  <div class="infoTable">
    <el-descriptions class="margin-top" title="个人信息" :column="4" direction="vertical">
      <el-descriptions-item label="用户名">username</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </div>
</div>
</template>

<script>
export default {
  name: "Information"
}
</script>

<style>
.homeHeader{
  background: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}
.infoTable{
  margin-left: 20px;
  margin-top: 20px;
}
</style>