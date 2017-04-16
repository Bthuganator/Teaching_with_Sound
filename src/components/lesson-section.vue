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
import Vue from 'vue'

var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem
var testLayout = [
  {
    'x': 0,
    'y': 0,
    'w': 2,
    'h': 2,
    'i': '1',
    type: 'sound-button',
    click: 'updateCurrentSound',
    created: 'getData',
    data: {
      _id:
      '58b064aad3f90c4f00000299',
      attribution:
      '',
      audio_type:
      'audio/mpeg',
      display_name:
      'Wrong Answer',
      play_count:
      0,
      sound_origin_url:
      '',
      sound_url:
      'https://teachersoundboard-bb06.restdb.io/media/58b0646ad3f90c4f00000296'
    }
  },
  // {
  //   'x': 2,
  //   'y': 0,
  //   'w': 2,
  //   'h': 4,
  //   'i': '2',
  //   'sound': {_id:
  //     '58afacc1f500762e00000dc3',
  //     attribution:
  //     'Andi Roselund',
  //     audio_type:
  //     'audio/mpeg',
  //     display_name:
  //     'Tick Tock',
  //     play_count:
  //     0,
  //     sound_origin_url:
  //     'http://soundbible.com/2148-Chinese-Gong.html',
  //     sound_url:
  //     'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
  //   }
  // },
  // {
  //   'x': 4,
  //   'y': 0,
  //   'w': 2,
  //   'h': 4,
  //   'i': '3',
  //   'sound': {_id:
  //     '58afacc1f500762e00000dc3',
  //     attribution:
  //     'Andi Roselund',
  //     audio_type:
  //     'audio/mpeg',
  //     display_name:
  //     'Tick Tock',
  //     play_count:
  //     0,
  //     sound_origin_url:
  //     'http://soundbible.com/2148-Chinese-Gong.html',
  //     sound_url:
  //     'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
  //   }
  // },
  // {
  //   'x': 6,
  //   'y': 0,
  //   'w': 2,
  //   'h': 4,
  //   'i': '4',
  //   'sound': {_id:
  //     '58afacc1f500762e00000dc3',
  //     attribution:
  //     'Andi Roselund',
  //     audio_type:
  //     'audio/mpeg',
  //     display_name:
  //     'Tick Tock',
  //     play_count:
  //     0,
  //     sound_origin_url:
  //     'http://soundbible.com/2148-Chinese-Gong.html',
  //     sound_url:
  //     'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
  //   }
  // },
  // {
  //   'x': 8,
  //   'y': 0,
  //   'w': 2,
  //   'h': 4,
  //   'i': '5',
  //   'sound': {_id:
  //     '58afacc1f500762e00000dc3',
  //     attribution:
  //     'Andi Roselund',
  //     audio_type:
  //     'audio/mpeg',
  //     display_name:
  //     'Tick Tock',
  //     play_count:
  //     0,
  //     sound_origin_url:
  //     'http://soundbible.com/2148-Chinese-Gong.html',
  //     sound_url:
  //     'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
  //   }
  // },
  // {
  //   'x': 10,
  //   'y': 0,
  //   'w': 2,
  //   'h': 6,
  //   'i': '6',
  //   'sound': {_id:
  //     '58afacc1f500762e00000dc3',
  //     attribution:
  //     'Andi Roselund',
  //     audio_type:
  //     'audio/mpeg',
  //     display_name:
  //     'Tick Tock',
  //     play_count:
  //     0,
  //     sound_origin_url:
  //     'http://soundbible.com/2148-Chinese-Gong.html',
  //     sound_url:
  //     'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
  //   }
  // } // ,
  {
    'x': 0,
    'y': 0,
    'w': 2,
    'h': 2,
    'i': '7',
    type: 'google-map',
    click: 'undefined',
    created: 'undefined',
    'data': {
      center: {lat: 10.0, lng: 10.0},
      zoom: 7,
      map_type_id: 'terrain',
      style: 'position: absolute;top: 0;left: 0;width: 100% !important;height: 100% !important;',
      markers: [{ id: 1,
        position: {lat: 10.0, lng: 10.0}
      }, { id: 2,
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
]
export default {
  name: 'lesson-section',
  props: ['sounds'],
  components: {
    SoundButton,
    GridLayout,
    GridItem,
    GoogleMap
  },
  data: function () {
    return {
      currentSound: null,
      layout: testLayout
    }
  },
  methods: {
    updateCurrentSound: function (sound) {
      this.currentSound = sound
    },
    resizedEvent: function (i, newH, newW, newHPx, newWPx) {
      // console.log('RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
      Vue.$gmapDefaultResizeBus.$emit('resize')
    },
    getData: function (child) {
      console.log('test')
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
