<template>
  <div>
    <el-header class="homeHeader">
      <div class="title">曜杨实时小说网站</div>
    </el-header>
    <div class="upload">

      <h2 class="title">小说上传</h2>

      <el-form :label-position="labelPosition"
               label-width="80px"
               :model="formLabelAlign"
               :rules="rules"
               :ref="formLabelAlign">
        <el-form-item label="小说热度" prop="hot" style="width: 25%">
          <el-input v-model="formLabelAlign.hot" ></el-input>
        </el-form-item>
        <el-form-item label="小说标题" prop="name">
          <el-input v-model="formLabelAlign.title" style="width: 20%"></el-input>
        </el-form-item>
        <el-form-item label="小说类型" prop="type">
          <el-input v-model="formLabelAlign.type" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="小说作者" prop="author">
          <el-input v-model="formLabelAlign.author" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="小说描述" style="width: 80%" prop="description">
          <el-input v-model="formLabelAlign.description"></el-input>
        </el-form-item>


      <h4 class="imgUpload">封面上传</h4>
      <el-upload
          class="authorUpload"
          action="#"
          list-type="picture-card"
          :on-remove="handleRemove"
          :before-remove="beforeRemoveImg"
          :auto-upload="false"
          prop="imageUrl">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
      </span>
        </div>
      </el-upload>

      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>

      <h4 class="fileUpload">小说文件上传</h4>
      <div slot="tip" class="el-upload__tip" style="text-align: left;margin-left: 5px">*只能上传txt文件</div>

      <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemoveFile"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
          prop="downloadUrl">
        <el-button size="small" type="primary" style="margin-right: 15px">点击上传</el-button>
      </el-upload>
      <el-button type="primary" style="text-align: left;margin-right: 10px">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <span class="Goback"><el-button type="primary" @click="GobackHome">返回首页</el-button></span>
      </el-form>
    </div>


  </div>
</template>

<script>
export default {
  name: "novelUpload",
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      fileList:[],
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        type: '',
        author:'',
        description:'',
        imageUrl:'',
        downloadUrl:'',
        hot:''
      },
      rules:{
        name:{required:true,message:'请输入小说名',trigger:'blur'},
        type:{required:true,message:'请输入小说类型',trigger:'blur'},
        author:{required:true,message:'请输入小说作者',trigger:'blur'},
        description:{required:true,message:'请输入小说简述',trigger:'blur'},
        imageUrl:{required:true,message:'请上传小说封面',trigger:'blur'},
        downloadUel:{required:true,message:'请上传小说文件',trigger:'blur'},
        hot:{required:true,message:'请输入小说热度',trigger:'blur'},
      }
    };
  },
  methods: {
    submitNovel(){
      this.$refs.formLabelAlign.validate((valid)=>{
        if(valid){
          this.postRequest('/novel/novel').then(resp=>{
            if(resp){
              alert('提交成功！');
              this.$router.replace('/novelCollection');
            }else{
              this.$message.error('请输入所有字段！');
              return false;
            }
          })
        }
      })
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    beforeRemoveImg(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },

    handleRemoveFile(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    GobackHome(){
      this.$router.push('/home');
    }
  }
}
</script>

<style>
.upload{
  margin-top: 50px;
  border: 1px solid #31363f;
  width: 60%;
  height: 920px;
  text-align: right;
  margin-left: 10%;
  margin-bottom: 50px;
}
.authorUpload{
  text-align: left;
  padding-left: 15px;
  display: flex;
  border-bottom: 1px solid #31363f;
  padding-bottom: 20px;
}
.homeHeader{
  background: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}
.homeHeader .title{
  font-size: 30px;
  font-family: 华文楷体;
  color: white;
}
.upload .title{
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #31363f;
}
.upload .imgUpload{
  text-align: left;
  margin-left: 5px;
}
.upload .fileUpload{
  text-align: left;
  padding-left: 5px;
}
.upload .upload-demo{
  padding-bottom: 10px;
  height: 150px;
}
.upload .Goback{
  margin-right: 5px;
}
</style>