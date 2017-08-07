## Airbnb style buttons <a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='https://s3.amazonaws.com/waysily-img/stylepill/airbnb-theme/aribnb-theme-buttons1.zip'>Download set</a>

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


## Airbnb style inputs <a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='https://s3.amazonaws.com/waysily-img/stylepill/airbnb-theme/airbnb-theme-inputs1.zip'>Download set</a>

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
        <p class="ma-p ma-p--small ma-p--alert font-weight-normal space-top-1">
            Name required.
        </p>
    </div>


## Airbnb style navbar <a class='ma-btn ma-btn--small ma-btn--minimal' style='float: right;top: 16px;' href='https://s3.amazonaws.com/waysily-img/stylepill/airbnb-theme/aribnb-theme-buttons1.zip'>Download set</a>

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
                a.btn.btn-default(href="http://eepurl.com/cYzCeX") Join to list
    .container
        div(sg-content)
