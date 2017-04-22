<template>
    <div class="container">                            
        <lesson-section :boxes='boxes'></lesson-section>                            
    </div>
</template>

<script>
import LessonSection from '../components/lesson-section'
import { mapGetters } from 'vuex'

export default {
  name: 'LessonBoard',
  components: {
    LessonSection
  },
  computed: {
    ...mapGetters({
      db: 'db'
    })
  },
  firebase: function () {
    return {
      boxes: this.db.ref().child('soundstest').orderByChild('i')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
