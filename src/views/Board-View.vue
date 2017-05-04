<template>
  <div>
    <div class="checkbox">
      <label><input type="checkbox" v-model="fullWidth" checked>Full Width</label>
    </div>
    <div v-model="fullWidth" v-bind:class="fullWidth ? '' : 'container'">                            
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
      fullWidth: false
    }
  },
  computed: {
    ...mapGetters({
      db: 'db'
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
