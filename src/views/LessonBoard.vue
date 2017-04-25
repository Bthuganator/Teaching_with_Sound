<template>
  <div>
    <div class="checkbox">
      <label><input type="checkbox" v-model="fullWidth" checked>Full Width</label>
    </div>
    <div v-model="fullWidth" v-bind:class="fullWidth ? '' : 'container'">                            
        <lesson-section :boxes='boxes'></lesson-section>                            
    </div>
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
  data: function () {
    return {
      fullWidth: false
    }
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
  },
  methods: {
    saveRecord (box) {
      this.$firebaseRefs.boxes.child(box['.key']).set(box)
    },
    addRecord (box) {
      this.$firebaseRefs.boxes.push(box)
    },
    removeRecord (box) {
      this.$firebaseRefs.boxes.child(box['.key']).remove()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
