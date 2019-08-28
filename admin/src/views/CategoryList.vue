<template>
  <div>
    <el-table :data="model">
      <el-table-column prop="_id" label="ID" width="320">
        </el-table-column>
        <el-table-column prop="parent.name" label="上级分类" width="320">
        </el-table-column>
        <el-table-column prop="name" label="分类名" width="320">
        </el-table-column>
        <el-table-column fixed="right">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/category/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      model: []
    }
  },
  methods: {
    async fetch () {
        const res = await this.$http.get('rest/categories')
        this.model = res.data
    },
    async remove(id) {
      this.$confirm('此操作将永久删除该文件?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async() => {
          const res = await this.$http.delete(`rest/categories/${id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
     })
    },   
  },
  created () {
    this.fetch()
  }
}
</script>