<template>
    <div class="row sounds row-centered" style="margin-top:50px;">        
        <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >
 
        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            <!--{{item.i}}-->
            <!--<component :is="sound-button" v-html="item.sound"/>-->
            <sound-button v-on:update-sound="updateCurrentSound" :sound="item.sound" :currentSound="currentSound"></sound-button>
        </grid-item>
    </grid-layout>
    </div>
</template>

<script>
import SoundButton from './sound-button'
import VueGridLayout from 'vue-grid-layout'

var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem
var testLayout = [
  {
    'x': 0,
    'y': 0,
    'w': 2,
    'h': 2,
    'i': '1',
    'sound': {
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
  {
    'x': 2,
    'y': 0,
    'w': 2,
    'h': 4,
    'i': '2',
    'sound': {_id:
      '58afacc1f500762e00000dc3',
      attribution:
      'Andi Roselund',
      audio_type:
      'audio/mpeg',
      display_name:
      'Tick Tock',
      play_count:
      0,
      sound_origin_url:
      'http://soundbible.com/2148-Chinese-Gong.html',
      sound_url:
      'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
    }
  },
  {
    'x': 4,
    'y': 0,
    'w': 2,
    'h': 4,
    'i': '3',
    'sound': {_id:
      '58afacc1f500762e00000dc3',
      attribution:
      'Andi Roselund',
      audio_type:
      'audio/mpeg',
      display_name:
      'Tick Tock',
      play_count:
      0,
      sound_origin_url:
      'http://soundbible.com/2148-Chinese-Gong.html',
      sound_url:
      'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
    }
  },
  {
    'x': 6,
    'y': 0,
    'w': 2,
    'h': 4,
    'i': '4',
    'sound': {_id:
      '58afacc1f500762e00000dc3',
      attribution:
      'Andi Roselund',
      audio_type:
      'audio/mpeg',
      display_name:
      'Tick Tock',
      play_count:
      0,
      sound_origin_url:
      'http://soundbible.com/2148-Chinese-Gong.html',
      sound_url:
      'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
    }
  },
  {
    'x': 8,
    'y': 0,
    'w': 2,
    'h': 4,
    'i': '5',
    'sound': {_id:
      '58afacc1f500762e00000dc3',
      attribution:
      'Andi Roselund',
      audio_type:
      'audio/mpeg',
      display_name:
      'Tick Tock',
      play_count:
      0,
      sound_origin_url:
      'http://soundbible.com/2148-Chinese-Gong.html',
      sound_url:
      'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
    }
  },
  {
    'x': 10,
    'y': 0,
    'w': 2,
    'h': 6,
    'i': '6',
    'sound': {_id:
      '58afacc1f500762e00000dc3',
      attribution:
      'Andi Roselund',
      audio_type:
      'audio/mpeg',
      display_name:
      'Tick Tock',
      play_count:
      0,
      sound_origin_url:
      'http://soundbible.com/2148-Chinese-Gong.html',
      sound_url:
      'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2F167385__ultradust__wood-block-tick-tock-cartoon-clock%20(1).mp3?alt=media&token=7f034c31-053a-4ff4-8ae8-b013ac660641'
    }
  } // ,
        // {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2'},
        // {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3'},
        // {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4'},
        // {'x': 10, 'y': 0, 'w': 2, 'h': 3, 'i': '5'},
        // {'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6'},
        // {'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7'},
        // {'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8'},
        // {'x': 6, 'y': 4, 'w': 2, 'h': 4, 'i': '9'},
        // {'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10'},
        // {'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11'},
        // {'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12'},
        // {'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13'},
        // {'x': 4, 'y': 8, 'w': 2, 'h': 4, 'i': '14'},
        // {'x': 6, 'y': 8, 'w': 2, 'h': 4, 'i': '15'},
        // {'x': 8, 'y': 10, 'w': 2, 'h': 5, 'i': '16'},
        // {'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '17'},
        // {'x': 0, 'y': 9, 'w': 2, 'h': 3, 'i': '18'},
        // {'x': 2, 'y': 6, 'w': 2, 'h': 2, 'i': '19'}
]
export default {
  name: 'lesson-section',
  props: ['sounds'],
  components: {
    SoundButton,
    GridLayout,
    GridItem
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
