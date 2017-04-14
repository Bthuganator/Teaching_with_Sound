<template>
    <button class='btn btn-primary play-sound vue-grid-item-content' v-on:click='playSound(this)'>
        <span class='glyphicon glyphicon-play'></span> <span class='display-name'>{{sound.display_name}}</span>
        <progress class='sound-progress' value='0' max='100'></progress>
        <audio class='hidden' :src='sound.sound_url' :type='sound.audio_type' autostart='false' codecs='mp3'></audio>
    </button>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'sound-button',
  props: { 'sound': Object,
    'currentSound': HTMLAudioElement
  },
  data: function () {
    return { duration: 0 }
  },
  methods: {
    playSound: function (e) {
      var newSound
      var el = this.$el
      $(el).parents('.sound-well').siblings().find('button .glyphicon').removeClass('glyphicon-stop').addClass('glyphicon-play')
      if (this.currentSound !== null) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        $(this.currentSound).siblings('.sound-progress').attr('value', 0)
      }
      if (this.currentSound && $(el).children('.glyphicon').hasClass('glyphicon-stop')) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        newSound = this.currentSound
        $(el).children('.glyphicon').removeClass('glyphicon-stop').addClass('glyphicon-play')
      } else {
        newSound = $(el).children('audio')[0]
        newSound.play()
        newSound.addEventListener('loadeddata', function () {
          console.log('Audio data loaded')
          console.log('Audio duration: ' + this.duration)
        })
        $(el).children('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-stop')
        $(newSound).on('ended', function () {
          $(el).children('.glyphicon').removeClass('glyphicon-stop').addClass('glyphicon-play')
          $($(el).find('.sound-progress')[0]).attr('value', 0)
        })
        $(newSound).on('timeupdate', function () {
          if (newSound.currentTime && newSound.duration) {
            var w = 100 * (newSound.currentTime / newSound.duration)
            $(el).children('.sound-progress').attr('value', w)
          }
        })
      }
      this.$emit('update-sound', newSound)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
