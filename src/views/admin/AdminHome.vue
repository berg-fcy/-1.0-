<template>
  <div>
    <el-container>
      <el-header class="homeHeader">
        <div class="title">曜杨实时小说网站</div>
        <el-dropdown class="userInfo" @command="commandHandler">
            <span class="el-dropdown-link">
              admin<i><img src="../../../Creeper.jpg"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-remove-outline" commmand='logout'>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router unique-opened>
            <el-submenu index="1" v-for="(item,index) in this.$router.options.routes"
                        :key="index" v-if="(item.hidden)&&(item.admin)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item :index="children.path"
                            v-for="(children,indexj) in item.children">
                {{children.name}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
        <el-main>
          <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/adminHome'">
            欢迎来到管理员页面！
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "导航栏",
  data(){
    return{
      user: JSON.parse(window.sessionStorage.getItem('user'))
    }
  },
  methods: {
    commandHandler(command) {
      if (command == 'logout') {
        this.$confirm('此操作将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //注销登录
          this.postRequest('');
          //跳转到登录页
          this.$router.replace('/')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      }
    }
  }
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
.homeHeader .title{
  font-size: 30px;
  font-family: 华文楷体;
  color: white;
}
.homeHeader .userInfo{
  cursor: pointer;
  color: black;
  font-size: 20px;
}
.el-dropdown-link img{
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 8px;
}
.homeWelcome{
  display: flex;
  font-size: 30px;
  font-family: 华文楷体;
  color: cornflowerblue;
  padding-top: 50px;
}

</style>