<template>
      <div class="container">  
        <div class="row">
          <div class="col-md-12">  
            <h3>Boards</h3>               
            <board-section></board-section>                         
        </div>
      </div>
    </div>
</template>

<script>
import BoardSection from '../components/board-section'
// import { mapGetters } from 'vuex'

export default {
  name: 'Boards',
  components: {
    BoardSection
  },
  data: function () {
    return {
      fullWidth: false
    }
  }// ,
  // computed: {
  //   ...mapGetters({
  //     db: 'db'
  //   })
  // }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
