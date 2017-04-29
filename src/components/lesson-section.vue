<template>
    <div class='row sounds row-centered' style='margin-top:50px;'>
      <button class="btn btn-success" v-on:click="setEditMode(false)" v-if="editMode">Display Mode</button>
      <button class="btn btn-primary" v-on:click="setEditMode(true)" v-else>Edit Mode</button>
      <button class="btn btn-success" v-on:click="addRecord({})" v-if="editMode">Add Record</button>
        <grid-layout
            :layout='boxes'
            :col-num='12'
            :row-height='30'
            :is-draggable='editMode'
            :is-resizable='editMode'
            :vertical-compact='true'
            :margin='[10, 10]'
            :use-css-transforms='true'
    >
 
        <grid-item v-for='item in boxes'
                   :x='item.x'
                   :y='item.y'
                   :w='item.w'
                   :h='item.h'
                   :i='item.i'
                   :key='item.i'
                   @resized='resizedEvent(item)'
                   @moved='movedEvent(item)'
                   class='containsSounds'>   

      
          <div class="vue-grid-item-content">
                      <div v-if="editMode" class="settings">
            <i @click="setItemEdit(item)" data-toggle="modal" data-target="#editModal" class="fa fa-cog"></i>      
            <!--<i class="fa fa-clone"></i>-->
            <i @click="setPk(item)" data-toggle="modal" data-target="#removeModal" class="fa fa-trash"></i>
          </div>   
            <component :is="item.type" :editMode="editMode" v-on:click="item.click" v-on:remove="removeRecord" v-on:save="saveRecord(item)"  :props="item.data"></component>
          </div>                        
        </grid-item>
    </grid-layout>

      <div id="editModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
              <component :is="item.type+'-edit'" v-on:save="saveRecord(item)" :props="item.data"></component>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div id="removeModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Remove Element</h4>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this element?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <input type="hidden" id="removeKey" value="">
              <button @click="removeRecord" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import SoundButton from './sound-button'
import VueGridLayout from 'vue-grid-layout'
import GoogleMap from './google-map'
import AudioPlayer from './audio-player'
import Vue from 'vue'
import $ from 'jquery'
import { mapGetters } from 'vuex'

var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem

export default {
  name: 'lesson-section',
  props: ['db'],
  components: {
    SoundButton,
    GridLayout,
    GridItem,
    GoogleMap,
    AudioPlayer
  },
  computed: {
    ...mapGetters({
      currentSound: 'currentSound'
    })
  },
  data: function () {
    return {
      editMode: false
    }
  },
  firebase: function () {
    return {
      boxes: this.db.ref().child('soundstest').orderByChild('i')
    }
  },
  methods: {
    setPk: function (item) {
      $('#removeKey').val(item['.key'])
    },
    setEditMode: function (val) {
      this.editMode = val
    },
    resizedEvent: function (box) {
      Vue.$gmapDefaultResizeBus.$emit('resize')
      this.$firebaseRefs.boxes.child(box['.key']).update({
        h: box.h,
        w: box.w
      })
    },
    movedEvent: function (box) {
      this.$firebaseRefs.boxes.child(box['.key']).update({
        x: box.x,
        y: box.y
      })
    },
    saveRecord: function (box) {
      this.$firebaseRefs.boxes.child(box['.key']).set(box)
    },
    addRecord: function (box) {
      box = {
        'click': 'updateCurrentSound',
        'created': 'getData',
        'data': {
          '_id': '1234',
          'attribution': '',
          'audio_type': 'audio/mpeg',
          'display_name': 'Applause',
          'icon': 'fa-hand-paper-o move-right',
          'icon2': 'fa-hand-paper-o rotate-45',
          'play_count': 0,
          'sound_origin_url': '',
          'sound_url': 'https://firebasestorage.googleapis.com/v0/b/teaching-with-sound.appspot.com/o/Sounds%2Fapplause.mp3?alt=media&token=e08b4b25-b2d7-433b-a167-931c236d40fe'
        },
        'h': 4,
        'i': '\'5\'',
        'type': 'sound-button',
        'w': 4,
        'x': 1,
        'y': 10,
        // '.key': '0',
        'moved': false
      }
      this.$firebaseRefs.boxes.push(box)
    },
    removeRecord: function (e) {
      var key = $(e.target).siblings('#removeKey').val()
      this.$firebaseRefs.boxes.child(key).remove()
    },
    setItemEdit: function (item) {
      this.$store.commit('SET_ITEM_TO_EDIT', item)
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

.settings{
    position: absolute;
    top: -2.9vw;
    top: 0vw;
    left: 0vw;
    display: none;   
    z-index: 10;
    background: rgba(255, 255, 255, .9);
    display: block;
    border-radius: 20px;
}
.settings i{
  font-size: 1.4vw;
  padding: .5vw;
  cursor: pointer;
  z-index: 1001;
}
.vue-grid-item:hover .settings {

}
</style>
