<template>
  
    <button class='btn btn-primary play-sound vue-grid-item-content' v-on:click='playSound(this)'>      
        <i class="fa fa-3x" v-bind:class="snd.icon"></i>
        <i class="fa fa-3x" v-bind:class="snd.icon2"></i>
        <audio class='hidden' :src='snd.sound_url' :type='snd.audio_type' autostart='false' codecs='mp3'></audio>        
    </button>

</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'

export default {
  name: 'sound-button',
  props: {
    'props': Object,
    'editMode': Boolean,
    'pk': String
  },
  computed: {
    ...mapGetters({
      currentSound: 'currentSound'
    })
  },
  data: function () {
    return {
      duration: 0,
      snd: this.props
    }
  },
  // created: function () {
  //   this.$emit('created', this)
  // },
  methods: {
    playSound: function (e) {
      // this.$emit('created', this)
      var newSound
      $(this.$el).parents('.containsSounds').siblings().find('button.play-sound').removeClass('btn-success').addClass('btn-primary')
      if (this.currentSound !== null) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        $(this.currentSound).siblings('.sound-progress').attr('value', 0)
      }
      if (this.currentSound && $(this.$el).hasClass('btn-success')) {
        this.currentSound.pause()
        this.currentSound.currentTime = 0
        newSound = this.currentSound
        $(this.$el).removeClass('btn-success').addClass('btn-primary')
      } else {
        newSound = $(this.$el).children('audio')[0]
        newSound.play()
        $(this.$el).removeClass('btn-primary').addClass('btn-success')
        $(newSound).on('ended', function () {
          $(this.$el).removeClass('btn-success').addClass('btn-primary')
          $($(this.$el).find('.sound-progress')[0]).attr('value', 0)
        })
      }
      // this.$emit('click', newSound)
      this.$store.commit('SET_CURRENT_SOUND', newSound)
    }// ,
    // saveEdit: function () {
    //   this.$emit('save', this.props)
    // },
    // remove: function () {
    //   this.$emit('remove', this.props)
    // }
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
