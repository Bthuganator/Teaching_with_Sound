<template>
    <div class="row sounds row-centered" style="margin-top:50px;">        
        <div v-for="sound in sounds" class="col-md-3 sound-well col-centered" style="height:150px;">
            <sound-button v-on:click="updateCurrentSound" :props="sound" v-on:created="getData"></sound-button>
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
      console.log('test2')
      this.currentSound = sound
    },
    getData: function (child) {
      console.log('test')
      child.currentSound = this.currentSound
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
