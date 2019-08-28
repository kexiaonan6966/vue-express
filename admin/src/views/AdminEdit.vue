<template>
  <div>
    <p>{{id ? '编辑' : '新建'}}用户名</p>
    <el-form @submit.native.prevent="save"> 
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{id ? '保存' : '新建'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
   props: {
    id: {}
  },
  data () {
    return {
      model: {},
    }
  },
  methods: {
    async save () {
      let res 
      if (this.id) {
        res = await this.$http.put(`rest/admins/${this.id}`, this.model) 
      } else {
        res = await this.$http.post('rest/admins', this.model)

      }
      this.model = res.data
      this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
        this.$router.push('/admin/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/admins/${this.id}`)
      this.model = res.data
    },
   
  },
  created () {
   this.id && this.fetch()
  }
}
</script>

