<template>
  <div>
    <p>{{id ? '编辑' : '新建'}}英雄</p>
    <el-form @submit.native.prevent="save">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
 <el-form-item label="英雄">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :show-file-list="false"
            :on-success="afterUpload">
  <img v-if="model.avatar" :src="model.avatar" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </el-form-item>
      <el-form-item label="称号"> 
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      
      <el-form-item label="分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
        </el-form-item>  

        <el-form-item label="难度">
          <el-rate style="margin-top: 0.5rem;" :max="9" v-model='model.scores.difficult' show-score></el-rate>
        </el-form-item>

        <el-form-item label="技能">
          <el-rate style="margin-top: 0.5rem;" :max="9" v-model='model.scores.skill' show-score></el-rate>
        </el-form-item>

        <el-form-item label="攻击">
          <el-rate style="margin-top: 0.5rem;" :max="9" v-model='model.scores.attack' show-score></el-rate>
        </el-form-item>

        <el-form-item label="生存">
          <el-rate style="margin-top: 0.5rem;" :max="9" v-model='model.scores.survive' show-score></el-rate>
        </el-form-item>
        
        <el-form-item label="顺风">
          <el-select v-model="model.items1" multiple>
            <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="逆风">
          <el-select v-model="model.items2" multiple>
            <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="使用技巧">
          <el-input type="textarea" v-model="model.usageTips"></el-input>
        </el-form-item>

        <el-form-item label="对抗技巧">
          <el-input type="textarea" v-model="model.battelTips"></el-input>
        </el-form-item>

      <el-form-item >
        <el-button type="primary" native-type="submit">{{id ? '保存' : '新建'}}</el-button>
      </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="技能编辑" name="skills">
          <el-button type="primary" @click="model.skills.push({})"><i class="el-icon-plus">添加技能</i></el-button>
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <el-form-item style="margin-top: 1rem; " label="技能名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :headers="getAuthorizations()"
            :show-file-list="false"
            :on-success="res => $set(item, 'icon', res.url)">
  <img v-if="item.icon" :src="item.icon" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </el-form-item>
      <el-form-item label="描述">
          <el-input type="textarea" v-model="item.description"></el-input>
        </el-form-item>
        <el-form-item label="小提示">
          <el-input type="textarea" v-model="item.tips"></el-input>
        </el-form-item>
          <el-form-item>
            <el-button type="danger" size="small" @click="model.skills.splice(i, 1)">删除</el-button>
          </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        </el-tabs>
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
      categories: [],
      items: [],
      model: {
        name: '',
        avatar: '',
        title: '',
        scores: {
            difficult: 0
          },
        usageTips: '',
        battelTips: '',
        skills: {}
      },
    }
  },
  methods: {
    async save () {
      let res 
      if (this.id) {
        res = await this.$http.put(`rest/heros/${this.id}`, this.model) 
      } else {
        res = await this.$http.post('rest/heros', this.model)

      }
      this.model = res.data
      this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
        this.$router.push('/hero/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/heros/${this.id}`)
      this.model = Object.assign({}, this.model, res
          .data)
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchItem () {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data
    },
    afterUpload (res) {
       //显示赋值    this.$set(赋值的主体， '赋值的属性'， 赋的值)
      //  this.$set(this.model, 'icon', res.url)
      this.model.avatar = res.url

    }
   
  },
  created () {
   this.id && this.fetch()
   this.fetchCategories()
   this.fetchItem()
  }
}
</script>


<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>




