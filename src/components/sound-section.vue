<template>
    <div class="row sounds row-centered" style="margin-top:50px;">        
        <div v-for="sound in sounds" class="col-md-3 sound-well col-centered" style="height:150px;">
            <sound-button v-on:update-sound="updateCurrentSound" :sound="sound" :currentSound="currentSound"></sound-button>
        </div>        
    </div>
</template>

<script>
import SoundButton from './sound-button'

export default {
  name: 'sound-section',
  props: ['sounds'],
  components: {
    SoundButton
  },
  data: function () {
    return {
      currentSound: null
    }
  },
  methods: {
    updateCurrentSound: function (sound) {
      this.currentSound = sound
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
