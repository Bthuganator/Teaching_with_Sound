<template>
  <div class="">
    <select v-model="item.data.sound_url">
      <option v-for="sound in sounds" :value="sound.sound_url">{{sound.display_name}}</option>
    </select>
    <select v-model="item.data.color">
      <option v-for="color in colors" :value="color.class">
        {{color.display_name}}
        </option>
    </select>
    <ul>
      <li v-for="icon in icons" :value="icon.icon">
        <i class="fa" v-bind:class="icon.icon"></i>
        <i class="fa" v-bind:class="icon.icon2"></i>
        {{icon.display_name}}
        </li>
    </ul>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sound-button',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit',
      db: 'db'
    }),
    item: function () {
      if (this.itemToEdit.data === null) {
        this.$set(this.itemToEdit, 'w', 4)
        this.$set(this.itemToEdit, 'h', 2)
        this.$set(this.itemToEdit, 'data', {sound_url: ''})
      }
      return this.itemToEdit
    }
  },
  firebase: function () {
    return {
      sounds: this.db.ref().child('sounds').orderByChild('display_name'),
      colors: this.db.ref().child('item_options/sound_button/color').orderByChild('display_name'),
      icons: this.db.ref().child('item_options/sound_button/icon').orderByChild('display_name')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.settings i{
  cursor: pointer;
  margin-right: 10px;
}
</style>
