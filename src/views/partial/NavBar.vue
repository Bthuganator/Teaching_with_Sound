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
                    <li>
                        <router-link to="/#about">About</router-link>
                    </li>
                    <li>                        
                        <router-link to="/#contact">Contact</router-link>
                    </li>
                    <!--<li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span v-if="this.$root.isAuthenticated">Sign Up</span><span v-else>Account</span><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>
                                <div id="firebaseui-auth-container"></div>
                            </li>                                
                            <li role="separator" class="divider"></li>
                            <li><div id="sign-in-status"></div></li>
                        </ul>
                    </li>-->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
