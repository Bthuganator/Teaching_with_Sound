var db = firebase.database().ref();
        var soundsRef = db.child("sounds").orderByChild("attribution");
        var aboutRef = db.child("about").orderByChild("sort");
         
        // FirebaseUI config
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [          
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '/Sound-Board'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

     const Home = {
            firebase: {
                sounds: soundsRef,
                about: aboutRef                
            } ,
            
        template: `<div><nav-bar></nav-bar>    
        <div id="firebaseui-auth-container"></div>
        <div id="sign-in-status"></div>
    <div id="sign-in"></div>
    <div id="account-details"></div>
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
    <footer-section></footer-section>
    </div>`
        };

        const SoundBoard = {
            firebase: {
                sounds: soundsRef
            },
            template: `<div>
                            <nav-bar></nav-bar>      
                            <sound-section :sounds="sounds"></sound-section>
                            <footer-section></footer-section>
                       </div>`
        };
        const NotFound = {            
            template: `<div>
                            <nav-bar></nav-bar>      
                                <h1>Page Not Found</h1>
                                <p>This specified file was not found on this website. Please check the URL for mistakes and try again.</p>
                            <footer-section></footer-section>
                       </div>`
        };
        const routes = [
            { path: '/', component: Home },
            { path: '/Sound-Board', component: SoundBoard, meta:{requiresAuth:true} },
            { path: '*', component: NotFound }
        ]
        const router = new VueRouter({mode: 'history',routes});
        router.beforeEach((to, from, next) => {
                if (to.matched.some(record => record.meta.requiresAuth)) {
                    if (!firebase.auth().currentUser) {
                    next({
                        path: '/login',
                        query: {
                        redirect: to.fullPath,
                        },
                    });
                    } else {
                    next();
                    }
                } else {
                    next();
                }
                });
        const app = new Vue({
            el: "#app",
            router,
            data:{
                user:undefined
            },
            mounted:function(){
                firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var providerData = user.providerData;
            user.getToken().then(function(accessToken) {
              document.getElementById('sign-in-status').textContent = 'Hi '+user.displayName;
              document.getElementById('sign-in').textContent = 'Sign out';           
            });
          } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = '';
            document.getElementById('sign-in').textContent = 'Sign in';
          }
        }, function(error) {
          console.log(error);
        });
            }
        });//.$mount('#app')
