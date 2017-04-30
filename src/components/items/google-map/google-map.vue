<template>
<gmap-map
  :center='{lat: parseInt(data.center.lat), lng: parseInt(data.center.lng)}'
  :zoom='parseInt(data.zoom)'
  :map-type-id='data.map_type_id'
  :style='data.style'
></gmap-map>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCDAwyz1SV3tPNqXe50_okQ5G5iDjpilJk'
    // v: 'OPTIONAL VERSION NUMBER'
    // libraries: 'places', //// If you need to use place input
  }
})
export default {
  name: 'google-map',
  props: { 'props': Object },
  data: function () {
    return {
      data: this.props
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
