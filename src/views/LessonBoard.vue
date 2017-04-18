<template>
    <div class="container">                            
        <lesson-section :boxes='boxes'></lesson-section>                            
    </div>
</template>

<script>
import LessonSection from '../components/lesson-section'
import db from '../js/firebase-db'

var boxesRef = db.ref().child('soundstest').orderByChild('i')

export default {
  name: 'LessonBoard',
  components: {
    LessonSection
  },
  firebase: {
    boxes: boxesRef
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
