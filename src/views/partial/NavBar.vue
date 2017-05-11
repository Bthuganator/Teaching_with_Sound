<template>
  <!-- Navigation --><nav class="navbar navbar-default navbar-top topnav" role="navigation">
        <div class="container topnav">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand topnav" to="/">Teaching with Sound</router-link>
                                
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/Sound-Board">Soundboard</router-link>
                    </li>
                    <li v-if="theUser">                        
                        <router-link to="/Lesson-Board">Lesson Board</router-link>                        
                    </li>  
                    <li v-if="theUser">                        
                        <router-link to="/Boards">Boards</router-link>                        
                    </li>  
                    <li>
                        <router-link to="/#about">About</router-link>
                    </li>
                    <li>                        
                        <router-link to="/#contact">Contact</router-link>
                    </li>
                    <li v-if="theUser">                        
                        <a href="#" v-if="theUser" @click="signOut">Log Off</a>
                        <router-link v-else to="/Login">Login</router-link>                        
                    </li>                    
                  <!--  <li v-if="theUser">
                        <a href="#">Hello, {{theUser.displayName}}</a>
                    </li>-->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      user: 'user',
      fb: 'fb'
    }),
    theUser: function () {
      return this.user
    }
  },
  methods: {
    signOut (e) {
      e.preventDefault()
      this.fb.auth().signOut().then(this.onSignOut, this.onError)
    },
    onSignOut () {
      this.$router.push('Login')
    },
    onError () {
      console.error('onError')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
