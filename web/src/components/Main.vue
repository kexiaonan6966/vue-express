<template>
  <div>
    <div class="tabbar bg-black py-a px-4 text-white d-flex ai-center">
      <img src="../assets/logo.png" height="30">
      <div class="py-a flex-grow-1 px-3">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary py-1">立即下载</button>
    </div>
    <div class="bg-primary  pt-3 pb-2">
      <div class="nav text-white  jc-around">
        <div class="nav-item active">
          <router-link to="/" tag="div" class="nav-link ">首页</router-link>
        </div>
        <div class="nav-item text-white">
          <router-link to="/" tag="div" class="nav-link">攻略中心</router-link>
        </div>
        <div class="nav-item text-white">
          <router-link to="/" tag="div" class="nav-link">赛事中心</router-link>
        </div>
      </div>
    </div>


    <router-view></router-view>
  </div>




</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
.tabbar {
  position: sticky;//这是一个新的效果(吸顶效果)
  top: 0;
  z-index: 999;
}
</style>
