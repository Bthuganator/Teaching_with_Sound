<template>
  <div class="">
    <select>
      <option v-for="sound in sounds" :value="sound['.key']">{{sound.display_name}}</option>
    </select>
    <select>
      <option v-for="color in colors" :value="color['.key']">
        {{color.display_name}}
        </option>
    </select>
    <ul>
      <li v-for="icon in icons" :value="icon['.key']">
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
  props: {
    'props': Object
  },
  computed: {
    ...mapGetters({
      currentSound: 'currentSound',
      db: 'db'
    })
  },
  data: function () {
    return {
      duration: 0,
      snd: this.props
    }
  },
  firebase: function () {
    return {
      sounds: this.db.ref().child('sounds').orderByChild('display_name'),
      colors: this.db.ref().child('item_options/sound_button/color').orderByChild('display_name'),
      icons: this.db.ref().child('item_options/sound_button/icon').orderByChild('display_name')
    }
  },
  methods: {
    playSound: function (e) { }
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
