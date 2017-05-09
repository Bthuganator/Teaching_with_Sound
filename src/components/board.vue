<template>
    <div class='row sounds row-centered' style='margin-top:50px;'>
      {{boardid}}
      <button class="btn btn-success" v-on:click="setEditMode(false)" v-if="editMode">Display Mode</button>
      <button class="btn btn-primary" v-on:click="setEditMode(true)" v-else>Edit Mode</button>
      <button class="btn btn-success" v-on:click="setItemEdit(itemToAdd)" data-toggle="modal" data-target="#addModal" v-if="editMode">Add Record</button>
        <grid-layout
            :layout='items'
            :col-num='12'
            :row-height='30'
            :is-draggable='editMode'
            :is-resizable='editMode'
            :vertical-compact='false'
            :margin='[10, 10]'
            :use-css-transforms='false'
    >
 
        <grid-item v-for='item in items'
                   :x='item.x'
                   :y='item.y'
                   :w='item.w'
                   :h='item.h'
                   :i="item.i"
                   :key="item.i"
                   @resized='resizedEvent(item)'
                   @moved='movedEvent(item)'
                   class='containsSounds'>   

      
          <div class="vue-grid-item-content">
                      <div v-if="editMode" class="settings">
            <i @click="setItemEdit(item)" data-toggle="modal" data-target="#editModal" class="fa fa-cog"></i>      
            <!--<i class="fa fa-clone"></i>-->
            <i @click="setPk(item)" data-toggle="modal" data-target="#removeModal" class="fa fa-trash"></i>
          </div>   
            <component :is="item.type" :editMode="editMode" v-on:remove="removeRecord" v-on:save="saveRecord(item)"  :props="item.data"></component>
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
              <component v-if="itemToEdit != null" :is="itemToEdit.type+'-edit'" :data="itemToEdit"></component>
            </div>
            <div class="modal-footer">
              <button @click="saveRecord(itemToAdd)" type="button" class="btn btn-success" data-dismiss="modal">Save</button>
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

      <div id="addModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <select v-model="itemToAdd.type" v-on:change="setItemEdit(itemToAdd)">
                <option v-for="itemType in item_types" :value="itemType.type">{{itemType.display_name}}</option>
              </select>           
              <component v-if="itemToEdit != null" :is="itemToAdd.type+'-edit'" :data="itemToEdit"></component>
            </div>
            <div class="modal-footer">
              <button @click="addRecord(itemToEdit)" type="button" class="btn btn-success" data-dismiss="modal">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueGridLayout from 'vue-grid-layout'
import Vue from 'vue'
import $ from 'jquery'
// items
import SoundButton from './items/sound-button/sound-button'
import SoundButtonEdit from './items/sound-button/sound-button-edit'
import GoogleMap from './items/google-map/google-map'
import GoogleMapEdit from './items/google-map/google-map-edit'
import AudioPlayer from './items/audio-player/audio-player'
import AudioPlayerEdit from './items/audio-player/audio-player-edit'
import BlankEdit from './items/blank-edit'

var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem

export default {
  name: 'Board',
  props: ['db', 'boardid'],
  components: {
    GridLayout,
    GridItem,
    SoundButton,
    SoundButtonEdit,
    GoogleMap,
    GoogleMapEdit,
    AudioPlayer,
    AudioPlayerEdit,
    BlankEdit
  },
  computed: {
    ...mapGetters({
      currentSound: 'currentSound',
      itemToEdit: 'itemToEdit',
      user: 'user'
    }),
    userId: function () {
      return this.user.uid
    },
    boardId: function () {
      return this.$route.params.boardid
    }
  },
  data: function () {
    return {
      editMode: false,
      itemToAdd: {
        type: 'blank',
        data: null
      }
    }
  },
  firebase: function () {
    console.log('test')
    return {
      // board: this.db.ref('boards/' + this.userId + '/' + this.boardId), // .child('items').orderByChild('i'),
      board: this.db.ref('boards/' + this.boardId), // .child('items').orderByChild('i'),
      // items: this.db.ref('items').orderByChild('boards').equalTo(this.boardId)
      items: this.db.ref('items/' + this.boardId).orderByChild('display_name'),
      // items: this.db.ref('boards/' + this.userId + '/' + this.boardId + '/items').orderByChild('id'),
      item_types: this.db.ref().child('item_options').orderByChild('display_name')
    }
  },
  methods: {
    setPk: function (item) {
      $('#removeKey').val(item['.key'])
    },
    // setAdd: function (type) {
    //   this.itemToAdd.type = type
    //   var that = this
    //   Vue.nextTick(function () {
    //     that.setItemEdit(that.itemToAdd)
    //   })
    // },
    setEditMode: function (val) {
      this.editMode = val
    },
    resizedEvent: function (box) {
      if (box.type === 'google-map') {
        Vue.$gmapDefaultResizeBus.$emit('resize')
      }
      this.$firebaseRefs.items.child(box['.key']).update({
        h: box.h,
        w: box.w
      })
    },
    movedEvent: function (box) {
      this.$firebaseRefs.items.child(box['.key']).update({
        x: box.x,
        y: box.y
      })
    },
    saveRecord: function (item) {
      this.$firebaseRefs.items.child(item['.key'] + '/data').update(item.data)
      this.$store.commit('SET_ITEM_TO_EDIT', item)
    },
    addRecord: function (box) {
      box.i = new Date().getTime().toString()
      box.x = 0
      box.y = 0
      this.$firebaseRefs.items.push(box)
    },
    removeRecord: function (e) {
      var key = $(e.target).siblings('#removeKey').val()
      this.$firebaseRefs.items.child(key).remove()
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
.form-group label{
  float: left;
}
</style>
