<template>    
  <div>  
  <form>    
    <div class="form-group">
      <label for="boardName">Board Name</label>
      <input type="text" id="boardName" class="form-control" v-model="boardToAdd.display_name">
    </div>             
    <button @click.prevent="addRecord(boardToAdd)" class="btn btn-success marginb"><i class="fa fa-plus"></i> Add</button> 

  </form>  
    <table class="table table-striped">
      <thead>
        <tr><th>Boards</th><th>Created Date</th><th></th></tr>
      </thead>
      <tbody>
        <tr v-for="board in boards">                
            <td class="col-md-2">                
                <router-link :to="{ name: 'Board', params: { boardid: board['.key'] }}">{{board.display_name}}</router-link>
            </td>
            <td>
              {{board.created_date}}
            </td>
            <td>
            <i @click="removeRecord(board)" class="fa fa-trash pull-right"></i>
            </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

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
        // items: {
        //   0: {
        //     data: {
        //       author: 'Hans Zimmer/Richard Harvey',
        //       lrc: '[00:00.00]lrc here\\n[00:01.00]aplayer',
        //       pic: 'http://devtest.qiniudn.com/Preparation.jpg',
        //       title: 'Preparation',
        //       url: 'http://devtest.qiniudn.com/Preparation.mp3'
        //     },
        //     h: 2,
        //     i: '\'2\'',
        //     type: 'audio-player',
        //     w: 3,
        //     x: 5,
        //     y: 0
        //   }
        // },
        full_width: true
      }
    }
  },
  firebase: function () {
    return {
      // boards: this.db.ref('boards/users/').child(this.userId)// .child('users').orderByChild(this.userId)
      // .orderByChild('display_name')
      boards: this.db.ref('boards').orderByChild('board_owner').equalTo(this.userId),
      // boards: this.db.ref('boards').orderByChild('display_name')// .equalTo(this.userId)// ('users/' + this.userId)// .orderByChild('display_name')
      // boards: this.db.ref('boards/users').orderByChild(''),
      items: this.db.ref('items'),
      board_users: this.db.ref('board_users')
    }
  },
  methods: {
    addRecord: function (board) {
      // console.log('test')
      board.id = new Date().getTime().toString()
      board.board_owner = this.userId
      board.created_date = moment().format('MM/DD/YYYY hh:mm')
      // board.users = {}
      // board.users[this.userId] = 'full'
      var newBoard = this.$firebaseRefs.boards.push(board)
      var newBoardUser = {}
      newBoardUser[newBoard.key + '/' + this.userId] = 'full'
      this.$firebaseRefs.board_users.update(newBoardUser)
      // this.$firebaseRefs.items.push(board.items['0'])
    },
    removeRecord: function (board) {
      // check if is owner or has full access
      if (board.board_owner === this.userId) {
        this.$firebaseRefs.boards.child(board['.key']).remove()
        this.$firebaseRefs.board_users.child(board['.key']).remove()
        this.$firebaseRefs.items.child(board['.key']).remove()
      } else {
          // warn user
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-trash{ cursor: pointer }
</style>
