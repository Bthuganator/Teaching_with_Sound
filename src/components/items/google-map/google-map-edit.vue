<template>
  <form>
    <div class="form-group">
      <label for="lat">Latitude</label>  
      <input type="number" id="lat" class="form-control" v-model="item.data.center.lat">
    </div>
    <div class="form-group">
      <label for="lng">Longitude</label> 
      <input type="number" id="lng" class="form-control" v-model="item.data.center.lng">
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <select id="type" class="form-control" v-model="item.data.map_type_id">
        <option v-for="mapType in map_types" :value="mapType.value">{{mapType.display_name}}</option>
    </select>
    </div>
    <div class="form-group">
      <label for="zoom">Zoom</label>
      <input type="number" id="zoom" class="form-control" v-model="item.data.zoom">
    </div>              
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'google-map-edit',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit',
      db: 'db'
    }),
    item: function () {
      if (this.itemToEdit.data === null || this.itemToEdit.type !== 'google-map') {
        var newItemToEdit = {
          data: {
            center: {
              lat: 0,
              lng: 0
            },
            map_type_id: 'roadmap',
            zoom: 1,
            style: 'position: absolute;top: 0;left: 0;width: 100% !important;height: 100% !important;'
          },
          type: 'google-map',
          w: 4,
          h: 2
        }
        this.$store.commit('SET_ITEM_TO_EDIT', newItemToEdit)
      }
      return this.itemToEdit
    }
  },
  firebase: function () {
    return {
      map_types: this.db.ref().child('item_options/google_map/map_types').orderByChild('display_name')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
