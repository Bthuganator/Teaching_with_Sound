<template>
    <div>                            
        <sound-section :sounds='sounds'></sound-section>                            
    </div>
</template>

<script>
import SoundSection from '../components/sound-section'
import { mapGetters } from 'vuex'

export default {
  name: 'SoundBoard',
  components: {
    SoundSection
  },
  computed: {
    ...mapGetters({
      db: 'db'
    })
  },
  firebase: function () {
    return {
      sounds: this.db.ref().child('sounds').orderByChild('display_name')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
