<template>
    <div class="container">                            
      <div id="firebaseui-auth-container"></div>                  
    </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'

const uiConfig = {
  signInSuccessUrl: '/Boards',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/About'
}

export default {
  name: 'Login',
  computed: {
    ...mapGetters({
      fbUI: 'fbUI'
    })
  },
  methods: {
    // startUI: function () {
    //   console.log('test')
    //   this.fbUI.start('#firebaseui-auth-container', uiConfig)
    // }
  },
  mounted () {
    this.fbUI.start('#firebaseui-auth-container', uiConfig)
  },
  destroyed () {
    this.fbUI.reset()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
