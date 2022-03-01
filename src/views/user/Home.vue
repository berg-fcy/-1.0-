<template>
  <div>
    <el-container>
      <el-header class="homeHeader">
        <div class="title">曜杨实时小说网站</div>
        <el-select
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
          <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value">
          </el-option>
        </el-select>
        <el-dropdown class="userInfo" @command="commandHandler">
            <span class="el-dropdown-link">
              username<i><img src="../../../Creeper.jpg"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user" commmand.native='userInfo'>个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-plus" command='upload' divided>上传小说</el-dropdown-item>
            <el-dropdown-item icon="el-icon-star-off" command='collection' divided>我的收藏</el-dropdown-item>
            <el-dropdown-item icon="el-icon-remove-outline" commmand='logout' divided>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router unique-opened>
            <el-submenu index="1" v-for="(item,index) in this.$router.options.routes"
            :key="index" v-if="!(item.hidden)">
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
        <div class="homeWelcome" v-if="this.$router.currentRoute.path==='/home'">
          欢迎来到曜杨实时小说网站！
        </div>
      </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      user: JSON.parse(window.sessionStorage.getItem('user')),
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        {
          count:'',
          novelPageList:[
            {
              id:'',
              imageUrl:'',
              name:''
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    this.Search();
  },
  methods: {
    Search(){
      this.states.getRequest('/novel/search').then(resp=>{
        this.states = resp;
      })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    commandHandler(command) {
      if (command === 'logout') {
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
      }else if (command === 'userInfo') {
          this.$router.push('/information')
      }else if (command === 'collection') {
        this.$router.push('/collection')
      }else if (command === 'upload') {
        this.$router.push('/novelUpload')
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
  color: cornflowerblue;
  padding-top: 50px;
}

</style>

