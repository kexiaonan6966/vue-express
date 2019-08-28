<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img height="180" class="w-100" src="../assets/img/nav_01.jpg" alt=""></swiper-slide>
      <swiper-slide><img height="180" class="w-100" src="../assets/img/nav_02.jpg" alt=""></swiper-slide>
      <swiper-slide><img height="180" class="w-100" src="../assets/img/nav_03.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination text-right swiper-pagination-home px-2" slot="pagination"></div>
    </swiper>

    <!-- end of swipe -->

    <Icon></Icon>

    <!-- end of nav-icon -->

 
  <m-list-card title="新闻咨询" icon="menu" :categories="newsCats">
      <!-- #items(#后面跟一个name名是新语法，可以直接从子组件中取值) -->
            <template #items="{category}">
              <div class="fs-sm d-flex jc-around py-2" v-for="(news, i) in category.newsList" :key="i">
              <span>[{{ news.categoryName }}]</span>
              <span class="px-2"> | </span>
              <span class="flex-grow-1">{{ news.categoryTitle }}</span>
              <span>{{ news.categoryDate }}</span>
            </div>
            </template>
  </m-list-card>
 

    <m-card title="英雄分类" icon="card-hero">  

          <herolist></herolist>    

    </m-card>

   



  </div>
</template>

<script>

 import Icon from './Icon'
 import herolist from './heroList'
//  import Viedo from './Viedo'
  export default {
    data() {
      return {
        
        swiperOption: {
          pagination: {
            el: '.swiper-pagination-home'
          }
        },
        newsCats: [
          {
            name: '新闻',
            newsList: new Array(5).fill({}).map( v => ({
               
                categoryName: '公告',
                categoryTitle: '6月26日正式服不停机更新公告',
                categoryDate: '06/01'
              
            }))
          },
          {
            name: '活动',
            newsList: new Array(5).fill({}).map( v => ({
               
                categoryName: '公告',
                categoryTitle: '6月26日正式服不停机更新公告',
                categoryDate: '06/01'
              
            }))
          },
          {
            name: '赛事',
            newsList: new Array(5).fill({}).map( v => ({
               
                categoryName: '公告',
                categoryTitle: '6月26日正式服不停机更新公告',
                categoryDate: '06/01'
              
            }))
          },
          {
            name: '新闻',
            newsList: new Array(5).fill({}).map( v => ({
               
                categoryName: '公告',
                categoryTitle: '6月26日正式服不停机更新公告',
                categoryDate: '06/01'
              
            }))
          },
          {
            name: '新闻',
            newsList: new Array(5).fill({}).map( v => ({
               
                categoryName: '公告',
                categoryTitle: '6月26日正式服不停机更新公告',
                categoryDate: '06/01'
              
            }))
          }
        ],
      }
    },
    
    methods: {
        
    },
    created () {
       
    },
    components: {Icon,herolist}
  }

</script>

<style lang="scss" scoped>
  @import '../assets/scss/common';

  .swiper-pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      background: map-get($colors, "white");

      &.swiper-pagination-bullet-active {
        background: #4b67af;
        // color: map-get($colors, "primary")

      }
    }
  }

 

</style>
