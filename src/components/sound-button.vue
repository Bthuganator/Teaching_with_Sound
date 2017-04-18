<template>
    <button class='btn btn-primary play-sound vue-grid-item-content' v-on:click='playSound(this)'>
        <i class="fa fa-3x" v-bind:class="snd.icon"></i>
        <i class="fa fa-3x" v-bind:class="snd.icon2"></i>
        <audio class='hidden' :src='snd.sound_url' :type='snd.audio_type' autostart='false' codecs='mp3'></audio>
    </button>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'sound-button',
  props: { 'props': Object// ,
    // 'currentSound': HTMLAudioElement
  },
  data: function () {
    return { duration: 0,
      snd: this.props }
  },
  created: function () {
    this.$emit('created', this)
  },
  methods: {
    playSound: function (e) {
      this.$emit('created', this)
      var newSound
      var el = this.$el
      $(el).parents('.sound-well').siblings().find('button').removeClass('btn-success').addClass('btn-primary')
      if (this.currentSound !== null) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        $(this.currentSound).siblings('.sound-progress').attr('value', 0)
      }
      if (this.currentSound && $(el).hasClass('btn-success')) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        newSound = this.currentSound
        $(el).removeClass('btn-success').addClass('btn-primary')
      } else {
        newSound = $(el).children('audio')[0]
        newSound.play()
        $(el).removeClass('btn-primary').addClass('btn-success')
        $(newSound).on('ended', function () {
          $(el).removeClass('btn-success').addClass('btn-primary')
          $($(el).find('.sound-progress')[0]).attr('value', 0)
        })
      }
      this.$emit('click', newSound)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
