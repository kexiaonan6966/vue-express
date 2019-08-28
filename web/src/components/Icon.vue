<template>
  <div class="nav-icons bg-white  text-center mt-3 ">
      <div class="d-flex flex-wrap">
        <div class="nav-item py-b mt-3"  v-for="(item, i) in Icon" :key="i">
          <i class="sprite mb-1  text-white" :class="item.iconSprite"></i>
          <div>{{ item.iconName }}</div>
        </div>
      </div>
      <div class="nav-bt py-2 bg-light mt-2" >
        <i class="sprite sprite-up mr-1"></i>
        <span>收齐</span>
      </div>
    </div>
</template>

<script>
export default {
    data () {
       return {
          Icon: [
            {
              iconSprite: 'sprite-left',
              iconName: '爆料站'
            },
            {
              iconSprite: 'sprite-story',
              iconName: '故事站'
            },
            {
              iconSprite: 'sprite-shop',
              iconName: '周边商城'
            },
            {
              iconSprite: 'sprite-experience',
              iconName: '体验服'
            },
            {
              iconSprite: 'sprite-baby',
              iconName: '新人专区'
            },
            {
              iconSprite: 'sprite-honor',
              iconName: '荣耀.传承'
            },
            {
              iconSprite: 'sprite-community',
              iconName: '同人社区'
            },
             {
              iconSprite: 'sprite-camp',
              iconName: '王者营地'
            },
            {
              iconSprite: 'sprite-public',
              iconName: '公众号'
            },
            {
              iconSprite: 'sprite-edition',
              iconName: '版本介绍'
            },
          ]
       }
    }
}
</script>


<style lang="scss">
  @import '../assets/scss/common';

 .nav-icons {
    border-top: 1px solid #d4d9de;
    border-bottom: 1px solid #d4d9de;

    .nav-item {
      width: 25%;
      flex: 1;
      min-width: 25%;
      max-width: 25%;
      border-right: 1px solid #d4d9de;

      &:nth-of-type(4n) {
        border-right: 0;
      }
    }
  }
</style>
