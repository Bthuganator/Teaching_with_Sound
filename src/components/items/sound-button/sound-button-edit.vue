<template>
<form>
  <div class="form-group">
    <label for="soundUrl">Sound Clip</label>    
    <select class="form-control" id="soundUrl" v-model="item.data.sound_url">
      <option v-for="sound in sounds" :value="sound.sound_url">{{sound.display_name}}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="soundColor">Sound Color</label>
    <select id="soundColor" class="form-control" v-model="item.data.color">
      <option v-for="color in colors" :value="color.class">
        {{color.display_name}}
        </option>
    </select>
    <!--<p class="help-block">Example block-level help text here.</p>-->
  </div>
  <div class="form-group">
    <label for="soundIcon1">Icon 1</label>    
    <select id="soundIcon1" class="form-control" v-model="item.data.icon">
      <option v-for="icon in icons" :value="icon.icon">
        <i class="fa" v-bind:class="icon.icon"></i>
        {{icon.display_name}}
      </option>
    </select>
  </div>
  <div class="form-group">
    <label for="soundIcon2">Icon 2</label>    
    <select id="soundIcon2" class="form-control" v-model="item.data.icon2">
      <option v-for="icon in icons" :value="icon.icon">
        <i class="fa" v-bind:class="icon.icon"></i>
        {{icon.display_name}}
      </option>
    </select>
  </div>    
</form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'sound-button-edit',
  computed: {
    ...mapGetters({
      itemToEdit: 'itemToEdit',
      db: 'db'
    }),
    item: function () {
      if (this.itemToEdit.data === null) {
        this.$set(this.itemToEdit, 'w', 4)
        this.$set(this.itemToEdit, 'h', 4)
        this.$set(this.itemToEdit, 'data', {'sound_url': '', 'icon': '', 'icon2': ''})
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
