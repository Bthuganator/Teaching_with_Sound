<template>
<form>
    <div class="form-group">
      <label for="author">Video URL</label>
      <input type="text" id="author" class="form-control" v-model="item.data.video.url">
    </div>  
    <div class="form-group">
      <label for="pic">Preview Picture URL</label>
      <input type="text" id="pic" class="form-control" v-model="item.data.video.pic">
      <img class="previewPic" :src="item.data.video.pic">  
    </div>
    <div class="checkbox text-left">      
      <label><input type="checkbox" v-model="item.data.autoplay">Autoplay</label>      
    </div>           
  </form>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'video-player-edit',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit'
    }),
    item: function () {
      if (this.itemToEdit.data === null || this.itemToEdit.type !== 'video-player') {
        var newItemToEdit = {
          data: {
            video: {
              url: '',
              pic: ''
            },
            autoplay: false
          },
          type: 'video-player',
          w: 4,
          h: 2
        }
        this.$store.commit('SET_ITEM_TO_EDIT', newItemToEdit)
      }
      return this.itemToEdit
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .previewPic{
    width: 100%;
    margin-top: 10px;
  }
</style>
