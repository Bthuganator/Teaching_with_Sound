Vue.component('intro-section',{
            template: `<!-- Intro Header --><div class="intro-header">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Teaching with Sound</h1>
                        <h3>Teacher Soundboard</h3>
                        <p>The simplest way to incorporate sound into your teaching</p>
                        <hr class="intro-divider">
                        <ul class="list-inline intro-social-buttons">
                            
                            <li>
                                <a href="/Sound-Board.html" class="btn btn-default btn-lg"><i class="fa fa-music fa-fw"></i> <span class="network-name"> Go to the Sound Board</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>`
        })
        Vue.component('nav-bar', {
            template: `<!-- Navigation --><nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav" href="/">Teaching with Sound</a>
                
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/Sound-Board.html">Soundboard</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>`
        })   
        Vue.component('footer-section', {
            template: `<!-- Footer --><footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/Sound-Board.html">Soundboard</a>
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
        })   
        Vue.component('credits-section',{
            props: ['sounds'],
            template: `
    <div class="container">
        <!--<div class="credits-placeholder"></div>-->
        <div class="row">
            <div class="col-lg-3">
                <h2>Sound Credits</h2>
            </div>
            <div class="col-lg-9 credits-well">
                <div class="row" v-for="sound in sounds">
                    
                        <div class="col-md-2">
                            {{sound.attribution}}
                        </div>
                </div>
            </div>
        </div>
    </div>`
        })

        Vue.component('contact-section',{
            template:`
    <div class="banner">

        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <h2>Drop us a line:</h2>
                </div>
                <div class="col-lg-6">
                    <ul class="list-inline banner-social-buttons">
                        <li>
                            <a href="mailto:test@gmail.com" class="btn btn-default btn-lg"><i class="fa fa-envelope fa-fw"></i> <span class="network-name">Email Us</span></a>
                        </li>
                        <!--<li>
                            <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                        </li>-->
                    </ul>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>`
        })