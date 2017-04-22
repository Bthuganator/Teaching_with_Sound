<template>
    <div class='row sounds row-centered' style='margin-top:50px;'>        
        <grid-layout
            :layout='layout'
            :col-num='12'
            :row-height='30'
            :is-draggable='true'
            :is-resizable='true'
            :vertical-compact='true'
            :margin='[10, 10]'
            :use-css-transforms='true'
    >
 
        <grid-item v-for='item in layout'
                   :x='item.x'
                   :y='item.y'
                   :w='item.w'
                   :h='item.h'
                   :i='item.i'
                   :key='item.i'
                   @resized='resizedEvent'>            
            <component :is="item.type" v-on:click="item.click" v-on:created="getData" :props="item.data"></component>                        
        </grid-item>
    </grid-layout>
    </div>
</template>

<script>
import SoundButton from './sound-button'
import VueGridLayout from 'vue-grid-layout'
import GoogleMap from './google-map'
import AudioPlayer from './audio-player'
import Vue from 'vue'

var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem

export default {
  name: 'lesson-section',
  props: ['boxes'],
  components: {
    SoundButton,
    GridLayout,
    GridItem,
    GoogleMap,
    AudioPlayer
  },
  data: function () {
    return {
      currentSound: null,
      layout: this.boxes
    }
  },
  methods: {
    updateCurrentSound: function (sound) {
      this.currentSound = sound
    },
    resizedEvent: function (i, newH, newW, newHPx, newWPx) {
      Vue.$gmapDefaultResizeBus.$emit('resize')
    },
    getData: function (child) {
      child.currentSound = this.currentSound
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
.vue-map-container {
  position: relative;
  height: 0;
  overflow: hidden;
}
.google-maps iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
