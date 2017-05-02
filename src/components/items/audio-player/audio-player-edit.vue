<template>
  <div class="">
    <label for="author">Author</label><input type="text" id="author" v-model="item.data.author">
    <label for="title">Title</label><input type="text" id="title" v-model="item.data.title">
    <label for="url">Music Url</label><input type="text" id="url" v-model="item.data.url">
    <label for="pic">Picture Url</label><input type="text" id="pic" v-model="item.data.pic">
    <img src="item.data.pic">  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'audio-player',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit'
    }),
    item: function () {
      if (this.itemToEdit.data === null) {
        this.$set(this.itemToEdit, 'w', 4)
        this.$set(this.itemToEdit, 'h', 2)
      }
      return this.itemToEdit
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
