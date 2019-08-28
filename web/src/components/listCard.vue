<template>
  <m-card :title="title" :icon="icon">
    <div class="list_main p-3 ">
      <div class="list_mian_title nav jc-between fs-md">
       <div class="list_head nav-invers" v-for="(category,index) in categories" :key="index" :class='{active: active === index}' @click="active = index">
        <router-link tag="div" to="/">{{category.name}}</router-link>
      </div>
      </div>
      
      <div class="list_bt py-3">
        <swiper>
          <swiper-slide v-for="(category, index) in categories" :key="index">
             <slot name="items" :category='category'></slot>
          </swiper-slide>
        </swiper>
        
      </div>
    </div>

  </m-card>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      categories: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        active: 0
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
