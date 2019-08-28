<template>
  <div>
    <p>{{id ? '编辑' : '新建'}}广告</p>
    <el-form @submit.native.prevent="save"> 
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
<el-button type="primary" @click="model.items.push({})"><i class="el-icon-plus">添加技能</i></el-button>
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, i) in model.items" :key="i">
              <el-form-item style="margin-top: 1rem; " label="URL">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item label="图片">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :headers="getAuthorizations()"
            :show-file-list="false"
            :on-success="res => $set(item, 'image', res.url)">
  <img v-if="item.image" :src="item.image" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </el-form-item>
          <el-form-item>
            <el-button type="danger" size="small" @click="model.items.splice(i, 1)">删除</el-button>
          </el-form-item>
            </el-col>
          </el-row>
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
      model: {
        items: []
      },
    }
  },
  methods: {
    async save () {
      let res 
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model) 
      } else {
        res = await this.$http.post('rest/ads', this.model)

      }
      this.model = res.data
      this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
        this.$router.push('/ad/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = res.data
    },
   
  },
  created () {
   this.id && this.fetch()
  }
}
</script>

