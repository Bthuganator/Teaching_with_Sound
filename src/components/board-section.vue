<template>    
  <div>  
  <form>    
    <div class="form-group">
      <label for="boardName">Board Name</label>
      <input type="text" id="boardName" class="form-control" v-model="boardToAdd.display_name">
    </div>             
    <button @click.prevent="addRecord(boardToAdd)" class="btn btn-success"><i class="fa fa-plus"></i> Add</button> 
  </form>  
    <table class="table">
        <tr><th colspan="1">Boards</th></tr>
        <tr v-for="board in boards">                
            <td class="col-md-2">                
                <router-link :to="{ name: 'Board', params: { boardid: board['.key'] }}">{{board.display_name}}</router-link>
            </td>
        </tr>
    </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'board-section',
  computed: {
    ...mapGetters({
      db: 'db',
      fb: 'fb',
      user: 'user'
    }),
    userId: function () {
      return this.user.uid
    }
  },
  data: function () {
    return {
      boards: null,
      boardToAdd: {
        display_name: '',
        items: {
          0: {
            data: {
              author: 'Hans Zimmer/Richard Harvey',
              lrc: '[00:00.00]lrc here\\n[00:01.00]aplayer',
              pic: 'http://devtest.qiniudn.com/Preparation.jpg',
              title: 'Preparation',
              url: 'http://devtest.qiniudn.com/Preparation.mp3'
            },
            h: 2,
            i: '\'2\'',
            type: 'audio-player',
            w: 3,
            x: 5,
            y: 0
          }
        },
        full_width: false
      }
    }
  },
  firebase: function () {
    return {
      boards: this.db.ref('boards').child('/' + this.userId).orderByChild('display_name')
    }
  },
  methods: {
    addRecord: function (board) {
      console.log('test')
      board.id = new Date().getTime().toString()
      this.$firebaseRefs.boards.push(board)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
