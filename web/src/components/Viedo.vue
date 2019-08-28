<template>
  <div class="viedolist">
    <div>
      <div class="viedoTitle jc-between nav my-2" >
        <div class=" fs-md my-2 text-black nav-invers" v-for="(item, i) in viedolist" :key="i" @click="active = i" :class="{active: active === i}">
          <router-link tag="div" to="/" class="nav-link">{{ item.title }}</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        active: 0,
        viedolist: [
          {
            title: '精品栏目'
          },
           {
            title: '精英雄攻略'
          },
           {
            title: '赛事精品'
          },
           {
            title: '赛事视频'
          },
        ]
      }
    }


  }

</script>


<style lang="scss">
  @import '../assets/scss/common';



</style>
