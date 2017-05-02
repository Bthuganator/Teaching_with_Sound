<template>
  <div>
    <div class="checkbox">
      <label><input type="checkbox" v-model="fullWidth" checked>Boards</label>
    </div>
    <!--<div v-model="fullWidth" v-bind:class="fullWidth ? '' : 'container'">                            
        <lesson-section :db='db'></lesson-section>                            
    </div>-->
  </div>
</template>

<script>
// import LessonSection from '../components/lesson-section'
import { mapGetters } from 'vuex'

export default {
  name: 'LessonBoard',
//   components: {
//     LessonSection
//   },
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
