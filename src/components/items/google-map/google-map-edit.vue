<template>
  <div class="">
    <label for="lat">Latitude</label><input type="number" id="lat" v-model="item.data.center.lat">
    <label for="lng">Longitude</label><input type="number" id="lng" v-model="item.data.center.lng">
    <label for="type">Type</label>
    <select id="type" v-model="item.data.map_type_id">
      <option value="terrain">Terrain</option>
      <option value="roadmap">Road Map</option>
    </select>
   <label for="zoom">Zoom</label>
   <input type="number" id="zoom" v-model="item.data.zoom">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'google-map',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit'
    }),
    item: function () {
      return this.itemToEdit
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
