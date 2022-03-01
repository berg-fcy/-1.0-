<template>
  <div>
      <h2 style="color: rgba(0,0,0,0.6)">待审核</h2>
      <el-divider></el-divider>
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="id"
              label="小说id"
              width="80">
          </el-table-column>
          <el-table-column
              prop="imageurl"
              label="小说封面"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="小说标题"
              width="180">
          </el-table-column>
          <el-table-column label="操作" width="250px">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">审核通过</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">审核不通过</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  name: "审核列表",
  data(){
    return{
      lists:[],
      tableData: [{
        id: '',
        name: '',
        imageUrl: ''
      }]
    }
  },
  mounted() {
    this.judgeTableData()
  },
  methods:{
    judgeTableData(){
      this.tableData.getRequest('/admin/').then((resp)=>{
        this.tableData = resp;
      })
    },
    handleEdit(index, row) {
      this.tableData.deleteRequest('/admin/').then((resp)=>{
        if(resp){
          this.$message({
            message: '撤回成功！',
            type: 'warning'
          })
        };
      })
    },
    handleDelete(index, row) {
      this.tableData.deleteRequest('/admin/success').then((resp)=>{
        if(resp){
          this.$message({
            message: '通过成功！',
            type: 'success'
          })
        };
      })
    }
  }
}
</script>

<style scoped>

</style>