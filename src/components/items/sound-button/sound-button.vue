<template>
  
    <button class='btn play-sound vue-grid-item-content' :class="snd.color"  v-on:click='playSound(this)'>      
        <i class="fa fa-3x" v-bind:class="snd.icon"></i>
        <i class="fa fa-3x" v-bind:class="snd.icon2"></i>
        <audio class='hidden' :src='snd.sound_url' :type='snd.audio_type' autostart='false' codecs='mp3'></audio>        
    </button>

</template>

<script>
import $ from 'jquery' // :class="playing ? 'btn-success' : snd.color"
import { mapGetters } from 'vuex'

export default {
  name: 'sound-button',
  props: {
    'props': Object
  },
  computed: {
    ...mapGetters({
      currentSound: 'currentSound'
    }),
    displayColor: function () {
      console.log('test')
      if (this.$el && this.$el.lastChild !== this.currentSound) {
        return 'btn-success'
      }
      return this.snd.color
    },
    snd: function () {
      return this.props
    }
  },
  data: function () {
    return {
      duration: 0,
      playing: false
    }
  },
  methods: {
    playSound: function (e) {
      var newSound

      if (this.currentSound && !this.currentSound.paused) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        if (this.$el.lastChild !== this.currentSound) {
          $(this.currentSound).parent().attr('class', $(this.currentSound).parent().attr('class').replace('btn--', 'btn-').replace('btn-success', ''))
          newSound = this.$el.lastChild
          newSound.play()
          // this.playing = true
          this.$el.className = this.$el.className.replace('btn-', 'btn--') + ' btn-success'
        } else {
          this.$el.className = this.$el.className.replace('btn--', 'btn-').replace('btn-success', '')
        }
      } else {
        newSound = this.$el.lastChild
        newSound.play()
        this.playing = true
        this.$el.className = this.$el.className.replace('btn-', 'btn--') + ' btn-success'
      }
      this.$store.commit('SET_CURRENT_SOUND', newSound)
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
