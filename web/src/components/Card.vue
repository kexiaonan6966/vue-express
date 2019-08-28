<template>
  
<div class="card p-3 mt-3 bg-white">
      <div class="card-header d-flex jc-between ai-center">
        <i class="iconfont fs-xxs" :class="`icon-${icon}`"></i>
        <div class="fs-ls flex-grow-1 px-2 py-2">{{ title }}</div>
        <i class="iconfont icon-shenglvehao
"></i>
      </div>
     <div class="card-body">
       <!-- //用于接受父组件与子组件之前传值得接受 -->
       <slot></slot>
     </div>
    </div>

</template>

<script>
  export default {
      props: {
          title: {type: String, required: true},
          icon: { type: String, required: true}
      } 
    }


</script>

<style lang="scss" scoped>
 .card {
   border-bottom: 1px solid #d4d9de;
   border-top: 1px solid #d4d9de;
   .card-body {
     border-top: 1px solid #d4d9de;
   }
 }
</style>
