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
    <span id="about"></span>
	<template v-for="(a, index) in about">    	
        <div class="content-section-a" v-if="index % 2">
             <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-sm-6">
                        <hr class="section-heading-spacer">
                        <div class="clearfix"></div>
                        <h2 class="section-heading" v-html="a.heading"></h2>
                        <p class="lead" v-html="a.body"></p>
                        <div v-if="index === 3">						
                            <form class="paypalForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                <table>
                                <tr><td><input type="hidden" name="on0" value="Teaching With Sound Support"></td></tr><tr><td><select class="form-control" name="os0">
                                    <option value="Helpful site">Helpful site $1.00 USD</option>
                                    <option value="I want more">I want more $3.00 USD</option>
                                    <option value="Make it great">Make it great $5.00 USD</option>
                                </select> </td></tr>
                                </table>
                                <input type="hidden" name="currency_code" value="USD">
                                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
                                ">
                                <p>
                                <button class="btn btn-default btn-g"  border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">Support Now</button>
                                </p>
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                                </form>
                        </div>
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

    <span id="contact"></span>
    <contact-section></contact-section>
    <span id="credits"></span>        
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
                            <router-link to="/#about">About</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <router-link to="/#contact">Contact</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <router-link to="/#credits">Credits</router-link>
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
                                        abstract: true,
                                        routes,
                                        scrollBehavior (to, from, savedPosition) {
                                            window.scrollTo(0,0);
                                            if (to.hash) {
                                                return {
                                                selector: to.hash
                                                }
                                            }
                                             else {
                                                    return { x: 0, y: 0 }
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
