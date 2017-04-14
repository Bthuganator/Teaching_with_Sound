<template>
    <div>                            
        <sound-section :sounds='sounds'></sound-section>                            
    </div>
</template>

<script>
import SoundSection from '../sound-section'
import db from '../../js/firebase-db'

var soundsRef = db.ref().child('sounds').orderByChild('display_name')

export default {
  name: 'SoundBoard',
  components: {
    SoundSection
  },
  firebase: {
    sounds: soundsRef
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
