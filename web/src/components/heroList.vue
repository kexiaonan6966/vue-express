<template>
  <div class="herolist">
    <img src="../assets/img/herolist.jpg" alt="">
    <div class="">
      <div class="fs-xm jc-between nav">
        <div class="text-black nav-invers" v-for="(item, i) in heroList" :key="i" :class="{active: active === i}"
          @click="active = i">
          <router-link to="/" tag="div" class="nav-link">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
    <div>
      <swiper>
        <swiper-slide v-for="(item, i) in heroList" :key="i" class="d-flex jc-between flex-wrap">
          <div class="heroMain p-2" v-for="n in 10" :key="n">
              <div class="icon">
                <img :src="item.icon" alt="">
                <div class="mian text-center">{{ item.name }}</div>
              </div>             
          </div>
          </swiper-slide>
      </swiper>
    </div>


  </div>
</template>

<script>
  export default {
    
    data() {
      return {
        active: 0,
        heroList: []
       }
      },
      created: function () {
        const that = this
        fetch('http://127.0.0.1:5500/src/json/heroList.json').then(function (res) {
          return res.json()
        }).then(function (data) {
         that.heroList = data
        })
      }
  }

</script>


<style lang="scss">
  @import '../assets/scss/common';

  .herolist {
    img {
      width: 100%;
      margin: 1rem 0;
    }

    .heroMain {
      width: 20%;
      min-width: 20%;
      max-width: 20%;
    }
  }

</style>
