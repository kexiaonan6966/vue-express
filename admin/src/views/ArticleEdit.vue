<template>
  <div>
    <p>{{id ? '编辑' : '新建'}}文章</p>
    <el-form @submit.native.prevent="save"> 
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor v-model="model.body" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{id ? '保存' : '新建'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor"
export default {
  
   props: {
    id: {}
  },
  data () {
    return {
      model: {},
      categories: []
    }
  },
  methods: {

    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
       resetUploader();
    },




    async save () {
      let res 
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model) 
      } else {
        res = await this.$http.post('rest/articles', this.model)

      }
      this.model = res.data
      this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
        this.$router.push('/article/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/article/${this.id}`)
      this.model = res.data
    },
    async fetchcategories () {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data
    }
   
  },
  created () {
   this.fetchcategories()
   this.id && this.fetch()
  },
  components: {
    VueEditor
  },
}
</script>

