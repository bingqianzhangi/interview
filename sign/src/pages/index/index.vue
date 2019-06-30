<template>
  <div @click="clickHandle" class="wrap">
    <div class="address">
      <qqMap></qqMap>
    </div>
    <div class='add'>
      <button @click='Addinterview'>添加面试</button>
    </div>
  </div>
</template>

<script>
  import qqMap from "@/components/qqMap.vue"
  
  export default {
    components: {
      qqMap
    },

    data() {
      return {

      }
    },


    methods: {
      Addinterview() {
        wx.navigateTo({
          url: '/pages/addmian/main'    
        })
      }
    },
    created() {

    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .add {
    width: 100%;
    height: 49px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999999;

  }

  button {
    background: #000;
    color: #fff;
  }

  .address {
    width: 100%;
    height: 100%;
  }
</style>