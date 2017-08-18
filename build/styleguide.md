<style>
body {
    overflow-x: hidden;
}
</style>

## Set #1: Airbnb main buttons <a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='http://bit.ly/2vQJzLV'>Download set</a> <div style="font-size:20px;color:#FF5A5F;">Wednesday, 26 Jul 2017</div>

### Primary button

A simple and minimalist button based on Airbnb primary color. Use it adding the modifier: `.ma-btn--primary`

    @example
    <button class="ma-btn ma-btn--small ma-btn--primary">
        Log in
    </button>


### Secondary button

A simple and minimalist button based on Airbnb secondary color. Use it adding the modifier: `.ma-btn--secondary`

    @example
    <button class="ma-btn ma-btn--small ma-btn--secondary">
        Log in
    </button>


### Primary Outline button

A simple and minimalist outline button based on Airbnb primary color. Use it adding the modifier: `.ma-btn--primary-without-bg`

    @example
    <button class="ma-btn ma-btn--small ma-btn--primary-without-bg">
        Log in
    </button>


## Set #2: Airbnb main inputs  <a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='http://bit.ly/2v9aOj5'>Download set</a> <div style="font-size:20px;color:#FF5A5F;">Wednesday, 2 Aug 2017</div>

### Small input

Small input commonly used by Airbnb on its forms such as edit profile, account, or setting. Use it adding the modifier: `.ma-input--small`

    @example.slim
    <div class="form-group">
        <label for="input1">Small Input Text</label>
        <input id="input1" type="text" class="ma-input ma-input--small" placeholder="Name">
    </div>


### Default input

Default input commonly used by Airbnb on its forms such as edit profile, account, or setting. Use it adding the modifier: `.ma-input--default`

    @example.slim
    <div class="form-group">
        <label for="input1">Default Input Text</label>
        <input id="input1" type="text" class="ma-input ma-input--default" placeholder="Email Address">
    </div>

### Large input

Large input commonly used by Airbnb on its forms such as edit profile, account, or setting. Use it adding the modifier: `.ma-input--large`

    @example.slim
    <div class="form-group">
        <label for="input1">Large Input Text</label>
        <input id="input1" type="text" class="ma-input ma-input--large" placeholder="First Name">
    </div>

### Default Invalid input

Default invalid input styles. Use it adding the modifier: `.ma-input--invalid`

    @example.slim
    <div class="form-group">
        <label for="input5">Invalid Input Text</label>
        <input id="input5" type="text" class="ma-input ma-input--default ma-input--invalid" placeholder="Invalid Input Text">
        <p class="ma-msg ma-msg--small ma-msg--alert space-top-1">
            Name required.
        </p>
    </div>


## Set #3: Airbnb main subnavs <a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='http://bit.ly/2wpxCzp'>Download set</a> <div style="font-size:20px;color:#FF5A5F;">Wednesday, 9 Aug 2017</div>

### Simple navbar

A simple and beautiful navbar used by Airbnb commonly in 'room profile'. Use it adding the modifier: `.ma-subnav--simple`

    @example
    <div class="ma-subnav ma-subnav--simple">
        <nav class="container">
            <div class="ma-subnav__item">
                <div class="content">
                    <a href>Overview</a>
                </div>
            </div>

            <span class="space-right-1 space-left-1"> · </span>

            <div class="ma-subnav__item">
                <div class="content">
                    <a href>Review</a>
                </div>
            </div>

            <span class="space-right-1 space-left-1"> · </span>

            <div class="ma-subnav__item">
                <div class="content">
                    <a class="active" href>The Host</a>
                </div>
            </div>

            <span class="space-right-1 space-left-1"> · </span>

            <div class="ma-subnav__item">
                <div class="content">
                    <a href>Location</a>
                </div>
            </div>

        </nav>
    </div>


### Tabs navbar

This navbar is used by Airbnb commonly in front page to navigate each relevant section. Use it adding the modifier: `.ma-subnav--tabs`

    @example
    <div class="ma-subnav ma-subnav--tabs">
        <nav class="container">
            <div class="ma-subnav__item space-right-4">
                <div class="content">
                    <a class="link-reset" href>FOR YOU</a>
                </div>
            </div>

            <div class="ma-subnav__item space-right-4">
                <div class="content active">
                    <a class="link-reset" href>HOMES</a>
                </div>
            </div>

            <div class="ma-subnav__item space-right-4">
                <div class="content">
                    <a class="link-reset" href>EXPERIENCES</a>
                </div>
            </div>

            <div class="ma-subnav__item">
                <div class="content">
                    <a class="link-reset" href>PLACES</a>
                </div>
            </div>

        </nav>
    </div>


## Set #4: Airbnb social buttons & helpful buttons<a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='http://bit.ly/2uQ44ab'>Download set</a> <div style="font-size:20px;color:#FF5A5F;">Wednesday, 16 Aug 2017</div>

### Facebook button

A simple and minimalist Facebook button based on Airbnb theme. Use it adding the modifier: `.ma-btn--facebook`

    @example
    <button class="ma-btn ma-btn--default ma-btn--facebook">
        <div class="ma-btn__content">
            <div class="ma-btn__content__icon-container">
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div class="space-left-2">
                <span>Log in with Facebook</span>
            </div>
        </div>
    </button>


### Google button

A simple and minimalist Google button based on Airbnb theme. Use it adding the modifier: `.ma-btn--google`

    @example
    <button class="ma-btn ma-btn--default ma-btn--google">
        <div class="ma-btn__content">
            <div class="ma-btn__content__icon-container">
                <!-- Google icon SVG -->
                <i class="google-icon"></i>
            </div>
            <div class="space-left-2">
                <span>Log in with Google</span>
            </div>
        </div>
    </button>


### Helpful button

A button used by Airbnb on Reviews and recommendations section. Use it adding the modifier: `.ma-btn--helpful` adding size and type modifiers (e.g. `.ma-btn--small`, `.ma-btn--primary`)

    @example
    <!-- Helpful Primary Button -->
    <button class="ma-btn ma-btn--helpful ma-btn--helpful--small ma-btn--helpful--primary">
        <span>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <div class="ma-btn--helpful__text">Helpful</div>
            <div class="ma-btn--helpful__count">3</div>
        </span>
    </button>


    <!-- Helpful Secondary Button -->
    <button class="ma-btn ma-btn--helpful ma-btn--helpful--small ma-btn--helpful--secondary">
        <span>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <div class="ma-btn--helpful__text">Helpful</div>
            <div class="ma-btn--helpful__count">3</div>
        </span>
    </button>


    <!-- Helpful Minimal Button -->
    <button class="ma-btn ma-btn--helpful ma-btn--helpful--small ma-btn--helpful--minimal">
        <span>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <div class="ma-btn--helpful__text">Helpful</div>
            <div class="ma-btn--helpful__count">3</div>
        </span>
    </button>

## The next set will arrive the next Wednesday, 23 Aug 2017!

<br>

# Styleguide options

### Head
    meta(name="viewport" content="width=device-width, initial-scale=1")
    link(rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css')
    link(rel='stylesheet' href='build/styles/styleguide.css')
    link(rel='stylesheet' href='build/styles/styleguide-reset.css')
    link(rel='stylesheet' href='build/styles/app.min.css')
    link(rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css')
    link(rel='stylesheet' href='https://fonts.googleapis.com/css?family=Source+Sans+Pro')
    script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js')
    script(src='https://use.fontawesome.com/99e7a6e2c6.js')

### Body

    .jumbotron.jumbotron-styleguide
        .container
            h1(style="font-weight:400")
                | Stylepill
            p.ma-p.ma-p--small
                | Each component is open source, 100% editable, written with Sass, and using BEM methodology.
            p.ma-p.ma-p--default
                | Theme of the month:
                strong
                    | Airbnb

            hr

            p.ma-p(style="font-size:15px;font-weight:600")
                | Follow us on Twitter, we'll show you our works, triumphs, failures, 100% transparent.
            p
                a.btn.btn-default(href="https://www.twitter.com/seruda") @seruda
                a.btn.btn-default(href="https://www.twitter.com/rosa7082") @rosa7082
            p   
                a.btn.btn-default(href="http://eepurl.com/cYzCeX") Join list
    .container
        div(sg-content)
