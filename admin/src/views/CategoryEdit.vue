<template>
  <div>
    <p>{{id ? '编辑' : '新建'}}分类</p>
    <el-form @submit.native.prevent="save"> 
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parent" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名">
        <el-input v-model="model.name"></el-input>
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
      parent: []
    }
  },
  methods: {
    async save () {
      let res 
      if (this.id) {
        res = await this.$http.put(`rest/categories/${this.id}`, this.model) 
      } else {
        res = await this.$http.post('rest/categories', this.model)

      }
      this.model = res.data
      this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
        this.$router.push('/category/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/categories/${this.id}`)
      this.model = res.data
    },
    async fetchParent () {
      const res = await this.$http.get('rest/categories')
      this.parent = res.data
    }
   
  },
  created () {
   this.fetchParent()
   this.id && this.fetch()
  }
}
</script>

