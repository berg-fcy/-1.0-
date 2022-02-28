<template>
  <div>
    <div>
      <el-form :rules="rules"
               v-loading="loading"
               element-loading-text="正在注册..."
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)"
               ref="RegisterForm" :model="RegisterForm" class="RegisterContainer">
        <h3 class="RegisterTitle">用户注册</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="RegisterForm.username"  auto-complete="false" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="RegisterForm.password" auto-complete="false" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="RegisterForm.checkPass" auto-complete="false" placeholder="请再次输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input type="text" v-model="RegisterForm.code" auto-complete="false" placeholder="点击更换验证码" style="width: 250px;margin-right: 5px">
          </el-input>
          <!-- 引入验证码组件 -->
          <div class="code" @click="changeCode()">
            <identify :identifyCode="identifyCode"></identify>
          </div>
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="handleRegister">注册</el-button>
        <el-link :underline="false" type="primary" class="loginRegister" @click="Login">已有账号？登录</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import identify from "../../components/identify";// 引入子元素


export default {
  name:" Register",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码！'));
      } else {
        if (this.RegisterForm.checkPass !== '') {
          this.$refs.RegisterForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码！'));
      } else if (value !== this.RegisterForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      RegisterForm: {
        username: '',
        password: ''
      },
      loading:false,
      // 验证码初始值
      identifyCode: 'm6a8',// 这个就是随机生成的验证码
      // 验证码的随机取值范围
      identifyCodes: '123456789abcdefghjkmnpqrstuvwxyz',
      checked: true,
      rules: {
        username: [{required: true, message: '请输入用户名！', trigger: 'blur'}],
        password: [{validator: validatePass, trigger: 'blur'}],
        checkPass: [{validator: validatePass2, trigger: 'blur'}],
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
    Login(){
      this.$router.replace('/');
    },
    //  下一步按钮 拿到code值跟随机生成的验证码进行对比
    handleRegister() {
      if (this.identifyCode !== this.RegisterForm.code ) {
        this.$message.error("验证码不正确");
        this.changeCode();// 改变验证码
      } else {
        this.$refs.RegisterForm.validate((valid)=>{
          if(valid){
            this.loading = true;
            this.postRequest('/user/register',{username:this.RegisterForm.username,password:this.RegisterForm.password}).then(resp=>{
              if(resp){
                this.loading = false;
                //跳转首页
                this.$router.replace('/');
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
  },
  components: {
    identify
  }
};
</script>

<style>
.RegisterContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 100px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.RegisterTitle{
  margin: 0 auto 40px auto;
  text-align: center;
}
.loginRegister{
  text-align: center;
  margin: 10px 0 0 125px;
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
