<template>
  <div>
    <div class="checkbox">      
      <label><input type="checkbox" v-on:change="updateBoard(board)" v-model="board.full_width">Full Width</label>
    </div>
    <div  v-bind:class="board.full_width ? '' : 'container'">                            
        <board :db='db' :id='boardid'></board>                            
    </div>
  </div>
</template>

<script>
import Board from '../components/board'
import { mapGetters } from 'vuex'

export default {
  name: 'Board-View',
  props: ['boardid'],
  components: {
    Board
  },
  data: function () {
    return {
      full_width: false
    }
  },
  computed: {
    ...mapGetters({
      db: 'db'
    }),
    boardId: function () {
      return this.$route.params.boardid
    }
  },
  firebase: function () {
    return {
      board: this.db.ref('boards/' + this.boardId)
    }
  },
  methods: {
    updateBoard: function (board) {
      this.$firebaseRefs.board.update({ full_width: board.full_width })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
