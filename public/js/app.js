var db = firebase.database().ref();
        var soundsRef = db.child("sounds");//.orderByChild("attribution");
        var aboutRef = db.child("about").orderByChild("sort");
         
    // FirebaseUI config
    //   var uiConfig = {
    //     signInSuccessUrl: '/',
    //     signInOptions: [          
    //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //     //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //       firebase.auth.EmailAuthProvider.PROVIDER_ID
    //     ],
    //     // Terms of service url.
    //     tosUrl: '/Sound-Board'
    //   };

    //   // Initialize the FirebaseUI Widget using Firebase.
    //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
    //   // The start method will wait until the DOM is loaded.
    //   ui.start('#firebaseui-auth-container', uiConfig);

     const Home = {
            firebase: {
                sounds: soundsRef.orderByChild("attribution"),
                about: aboutRef                
            } ,
            
        template: `<div>  

    <intro-section></intro-section>

    <!-- Page Content -->
	<a  name="about"></a>
	<template v-for="(a, index) in about">    	
        <div class="content-section-a" v-if="index % 2">
             <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-sm-6">
                        <hr class="section-heading-spacer">
                        <div class="clearfix"></div>
                        <h2 class="section-heading" v-html="a.heading"></h2>
                        <p class="lead" v-html="a.body"></p>
                    </div>
                    <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img class="img-responsive" :src="a.image_url" alt="">
                    </div>
                </div>
    
            </div>
        </div>
        
        <div class="content-section-b" v-else>
             <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                        <hr class="section-heading-spacer">
                        <div class="clearfix"></div>
                        <h2 class="section-heading">{{a.heading}}</h2>
                        <p class="lead">{{a.body}}</p>
                    </div>
                    <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                        <img class="img-responsive" :src="a.image_url" alt="">
                    </div>
                </div>
    
            </div>
        </div>        
    </template>	

    <a  name="contact"></a>
    <contact-section></contact-section>
    <a  name="credits"></a>        
    <credits-section :sounds="sounds"></credits-section>    
    </div>`
        };

        const SoundBoard = {
            firebase: {
                sounds: soundsRef.orderByChild("display_name")
            },
            template: `<div>                            
                            <sound-section :sounds="sounds"></sound-section>                            
                       </div>`
        };
        const NotFound = {            
            template: `<div>                            
                                <h1>Page Not Found</h1>
                                <p>This specified file was not found on this website. Please check the URL for mistakes and try again.</p>                            
                       </div>`
        };
        const NavBar ={
            template: `<!-- Navigation --><nav class="navbar navbar-default navbar-top topnav" role="navigation">
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
    </nav>`
        }
        const Footer = {
            template: `<!-- Footer --><footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <router-link to="/Sound-Board">Soundboard</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/#credits">Credits</a>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Teaching with Sound</p>
                </div>
            </div>
        </div>
    </footer>`
        }
        const routes = [
            { path: '/', components: {navbar:NavBar,default:Home,footer:Footer} },
            { path: '/Sound-Board', components: {navbar:NavBar,default:SoundBoard,footer:Footer}},//, meta:{requiresAuth:true} },
            { path: '*', components: {navbar:NavBar,default:NotFound,footer:Footer} }
        ]
        const router = new VueRouter({
                                        mode: 'history',
                                        routes,
                                        scrollBehavior (to, from, savedPosition) {
                                            if (to.hash) {
                                                return {
                                                selector: to.hash
                                                }
                                            }
                                        }
                                    });
        // router.beforeEach((to, from, next) => {
        //         if (to.matched.some(record => record.meta.requiresAuth)) {
        //             if (!firebase.auth().currentUser) {
        //             next({
        //                 path: '/login',
        //                 query: {
        //                 redirect: to.fullPath,
        //                 },
        //             });
        //             } else {
        //             next();
        //             }
        //         } else {
        //             next();
        //         }
        //         });
        const app = new Vue({
            el: "#app",
            router,
            data:{
                user:undefined
            },
            computed:function(){
                var auth = firebase.auth().currentUser;
                var isAuthenticated = auth == null ? false : true;
                return isAuthenticated;
            },
            mounted:function(){
                // firebase.auth().onAuthStateChanged(function(user) {
                //     if (user) {
                //         // User is signed in.
                //         var displayName = user.displayName;
                //         var email = user.email;
                //         var emailVerified = user.emailVerified;
                //         var photoURL = user.photoURL;
                //         var uid = user.uid;
                //         var providerData = user.providerData;
                //         user.getToken().then(function(accessToken) {
                //         document.getElementById('sign-in-status').textContent = 'Hi '+user.displayName;
                //         //document.getElementById('sign-in').textContent = 'Sign out';           
                //         });
                //     } else {
                //         // User is signed out.
                //         document.getElementById('sign-in-status').textContent = '';
                //         //document.getElementById('sign-in').textContent = 'Sign in';
                //     }
                // }, function(error) {
                // console.log(error);
                // });                
            }
        });//.$mount('#app')
