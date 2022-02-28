<template>
  <div>
    <el-form :rules="rules"
             v-loading="loading"
             element-loading-text="正在登录..."
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)"
             ref="loginForm" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">管理员登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username"  auto-complete="false" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="false" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" v-model="loginForm.code" auto-complete="false" placeholder="点击更换验证码" style="width: 250px;margin-right: 5px">
        </el-input>
        <!-- 引入验证码组件 -->
        <div class="code" @click="changeCode()">
          <identify :identifyCode="identifyCode"></identify>
        </div>
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="handleSubmit">登录</el-button>
      <el-link :underline="false" type="primary" class="adminLoginRegister" @click="toLogin">用户登录</el-link>
    </el-form>
  </div>
</template>
<script>
import identify from "../../components/identify";// 引入子元素


export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loading:false,
      // 验证码初始值
      identifyCode: 'm6a8',// 这个就是随机生成的验证码
      // 验证码的随机取值范围
      identifyCodes: '123456789abcdefghjkmnpqrstuvwxyz',
      checked: true,
      rules: {
        username: [{required: true, message: '请输入用户名！', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码！', trigger: 'blur'}],
        code: [{required: true, message: '请输入验证码！', trigger: 'blur'}]
      }
    };
  },
  mounted() {
    // 刷新页面就生成随机验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)

  },
  methods: {
    toLogin(){
      this.$router.push('/');
    },
    //  下一步按钮 拿到code值跟随机生成的验证码进行对比
    handleSubmit() {
      if (this.identifyCode !== this.loginForm.code ) {
        this.$message.error("验证码不正确");
        this.changeCode();// 改变验证码
      } else {
        this.$refs.loginForm.validate((valid)=>{
          if(valid){
            this.loading = true;
            this.postRequest('http://120.24.179.229:8080/doc.html#/default/admin-controller/loginUsingPOST',{username:this.loginForm.username,password:this.loginForm.password}).then(resp=>{
              if(resp){
                this.loading = false;
                //存储用户token
                const tokenStr = resp.obj.tokenHead+resp.obj.token;
                window.sessionStorage.setItem('tokenStr',tokenStr);
                //跳转首页
                this.$router.replace('/home');
              }
            })
          }else{
            this.$message.error('请输入所有字段！');
            return false;
          }
        })
      }
    },
    // 点击验证码刷新验证码
    changeCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
    randomNum(min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)]
      }
    }
  }
};
</script>

<style>
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 100px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
  margin: 0 auto 40px auto;
  text-align: center;
}
.loginRemember{
  text-align: left;
  margin: 0 0 10px 0;
}
.adminLoginRegister{
  text-align: center;
  margin: 10px 0 0 145px;
}
.code {
  width: 80px;
  height: 35px;
  border: 1px solid red;
}
.el-form-item__content{
  display: flex;
  align-items: center;
}
</style>