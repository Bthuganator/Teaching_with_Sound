<template>
    <div class="container">                            
        <lesson-section :sounds='sounds'></lesson-section>                            
    </div>
</template>

<script>
import LessonSection from '../lesson-section'
import db from '../../js/firebase-db'

var soundsRef = db.ref().child('sounds').orderByChild('display_name')

export default {
  name: 'LessonBoard',
  components: {
    LessonSection
  },
  firebase: {
    sounds: soundsRef
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
