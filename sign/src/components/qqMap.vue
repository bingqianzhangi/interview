<template>
  <div class="container">
    <map id="map" :longitude="longitude" :latitude="latitude" scale="14"  subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      show-location style="width: 100%; height: 100%;">
    </map>
  </div>
</template>

<script>
  import QQMapWX from '@/utils/qqMap.js'
  import { mapState, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState({
        longitude: state => state.index.longitude,
        latitude: state => state.index.latitude
      })
    },  
    methods: {
      ...mapActions({
        getLocation: 'index/getLocation'
      })
    },
    created() {
      let qqmapsdk = new QQMapWX({
        key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
      });
      // 获取当前位置
      this.getLocation();
    }
  }
</script>

<style>
  .container {
    height: 100%;
  }
</style>