<template>
<form>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" id="author" class="form-control" v-model="item.data.author">
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" id="title" class="form-control" v-model="item.data.title">
    </div>
    <div class="form-group">
      <label for="url">Music Url</label>
      <input type="text" id="url" class="form-control" v-model="item.data.url">
    </div>
    <div class="form-group">
      <label for="pic">Picture Url</label>
      <input type="text" id="pic" class="form-control" v-model="item.data.pic">
      <img class="previewPic" :src="item.data.pic">  
    </div>              
  </form>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'audio-player-edit',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit'
    }),
    item: function () {
      if (this.itemToEdit.data === null || this.itemToEdit.type !== 'audio-player') {
        var newItemToEdit = {
          data: {
            author: '',
            url: '',
            pic: '',
            title: ''
          },
          type: 'audio-player',
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
