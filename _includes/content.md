---Introduction---

This document describes the overall design patterns of the Bonnier platform (BP).

The White Album CMS forms the basis of the core HTML, CSS and JavaScript of the BP that external developers can access through an api. White Album is a “white label” CMS that mainly Benjamin Media and Bonnier Media Norway sites are built upon. All sites share a common core of Javascript, HTML and CSS, while individual skin-files enable stylesheet customization according to brand.

External partners may have different agendas and briefs, meanwhile, this guide targets projects that include extensions directly implemented into the platform and external projects that need visual coherence with a specific brand or the platform as a whole.

### Technical patterns

The BP is build with [object oriented CSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) (OOCSS) in mind. As with any object-based coding method, the purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.

### File structure

{% highlight html %}
assets
  |
  |-- fonts
  |-- images
  |      |
  |      |-- base
  |      |-- site names (eg. costume)
  | 
  |-- javascripts
  |      |
  |      |-- frontend.js
  |      |-- modules
  |      |-- components
  |      |-- external
  |      |-- plugins
  |      |-- specific
  |
  |-- stylesheets
         |
         |-- global.css.scss
         |-- global
         |     |
         |     |-- site
         |     |    |
         |     |    |-- modules
         |     |    |      |
         |     |    |      |-- _variables.css.scss
         |     |    |      |-- _mixins.css.scss
         |     |    |
         |     |    |-- breakpoints
         |     |    |       |
         |     |    |       |-- _small.css.scss
         |     |    |       |-- _medium.css.scss
         |     |    |       |-- _large.css.scss
         |     |    |
         |     |    |-- partials
         |     |    |
         |     |    |-- base.css.scss        
         |     |
         |     |-- [one for each sub-project]
         |                    |
         |                    |-- breakpoints
         |                    |-- modules
         |                    |-- partials
         |                    |-- base.css.scss
         |
         |-- skins
         |     |
         |     |-- site names (eg. costume)
         |     |       |
         |     |       |-- modules
         |     |       |      |
         |     |       |      |-- _variables.css.scss
         |     |       |
         |     |       |-- partials
         |     |       |-- breakpoints
         |     |       |       |
         |     |       |       |-- _small.css.scss
         |     |       |       |-- _medium.css.scss
         |     |       |       |-- _large.css.scss
         |     |       |
         |     |       |-- base.css.scss
         |     |
         |     |-- _variables.css.scss
         |     |-- _vendors.css.scss
         |
         |-- _site_name.css.scss (eg. _costume.css.scss)
{% endhighlight %}

### Visual patterns

BP is made fully responsive enabled by the [Bootstrap CSS-framework](http://getbootstrap.com/).

The platform is designed with a full-width mindset where each row contains “one impression”. This approach entails alternating user attention on editorial content and ads leading to an enhanced user experience and improved quality of adverts. Yet, this approach also entails a need to guide users down the site in order to keep them interested.

![Horisontal Ordering](images/fullwidth.jpg)

Most of the Bonnier products have access to quality photo material, which is utilized both off- and online. The web site visuals aim to support these images with limited color schemes and unpretentious graphics that do not steal attention from the content. This approach fits well into the content-centric web design trends that focuses on minimalism and simplicity.

### Header & footer

The BP header and footer, which may be imported on external sites, consists of...
A full width banner and optional side banners (horseshoe)
The brand logo - as default it will be placed to the left

* magazine subscription offer to the right
* navigation menu with dropdown submenu
* footer containing background information about the publisher and links to related sites

### Header:
![Horisontal Ordering](images/header.png)

### Footer:
![Horisontal Ordering](images/footer.png)

### Your area of control:
![Horisontal Ordering](images/areaofcontrol.jpg)

#### Navigation

The navigation menu has drop downs to display sub pages of each section. On small displays, the menu will collapse into a button icon, which can be triggered to display a fold out menu instead.

### Included in `<head>`

BP uses the HTML5 doctype:

{% highlight html %}
  <!DOCTYPE html>
{% endhighlight %}

The `<head>` will further include :

* Twitter Bootstrap
* jQuery v. 1.10.2
* Font Awesome
* Relevant meta tags:

{% highlight html %}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1;">
{% endhighlight %}

### Bootstrap

BP is based on the CSS-framework [Twitter Bootstrap](http://getbootstrap.com/). That provides a wide range of styles ready to use. Most significantly is the Mobile First responsive grid, which defines the overall structure of the platform.

BP does not include unused Bootstrap components. For this reason, here is a complete list of sub-libraries included on the platform:

* mixins
* normalize
* print
* scaffolding
* type
* code
* grid
* tables
* forms
* buttons
* pagination
* pager
* labels
* list-group
* panels
* component-animations
* alerts
* utilities
* responsive-utilities

If you wish that other [bootstrap elements](https://github.com/twbs/bootstrap-sass/blob/master/vendor/assets/stylesheets/bootstrap/bootstrap.scss) are made available to you, please let us know.

#### Grid

The BP platform uses the 12 column [responsive grid](http://getbootstrap.com/css/#grid) provided by Bootstrap.

The grid has four general breakpoints: extra small (xs), small (sm), medium (md) and large (lg). Currently that the large breakpoint still exists in our code base. We currently don't use this, as we have to accommodate the specs from the current ad market. Horseshoe ads are still a popular media choice, because of this our websites have a maximum width of 960px.

In most cases these breakpoints will be effectuated as follows:

* xs:   smartphone
* sm:   tablet portrait
* md:   13” laptop
* <s>lg:   desktop</s>

Note that Bootstrap is a Mobile First framework meaning that the xs-breakpoint is the default. This means that media query exceptions should be applied to the larger representations and not the other way around.

### Buttons
Use the [Bootstrap buttons](http://getbootstrap.com/css/#buttons) when a link needs special attention:

Button colors follow the overall site colors meaning that, for instance, the primary button has the primary brand color.

The Bootstrap buttons have been extended with a facebook styled button enabled by class `.btn-facebook` :

{{ raw }}
<button class="btn-facebook">Login med facebook</button>
{{ endraw }}

### Forms
Use Bootstrap’s form classes to style [forms](http://getbootstrap.com/css/#forms).

Select the smallest height sizing class for input fields: `.input-sm`

### Alerts
Bootstrap provides a collection of [alerts](http://getbootstrap.com/components/#alerts) for user feedback messages. By default, they follow the colors described in the [colors section](#colors).

### Icons
[Font Awesome](http://fontawesome.io) is implemented on BP. Use this icon font whenever it makes sense and try to avoid images as they affect load times negatively. Also, using this font will ensure a consistent visual appearance.

### CSS HELPERS

### Headers and text

Keep a clear hierarchy between different headers and text. In general each site has a primary font and a secondary font, these will be applied through the header- and text classes.

All font sizes are specified in pixels (not em or pt).

Use the tags h1, h2, h3, p etc. semantically and add the following classes to style headers and text:

**Headers:**

{{ raw }}
<h1 class="header-primary">Header-primary</h1>
{{ endraw }}

{% highlight css %}
.header-primary
{% endhighlight %}

{% highlight html %}
<h1 class="header-primary">Header-primary</h1>
{% endhighlight %}

<br />

{{ raw }}
<h1 class="header-secondary">Header-secondary</h1>
{{ endraw }}

{% highlight css %}
.header-secondary
{% endhighlight %}

{% highlight html %}
<h1 class="header-secondary">Header-secondary</h1>
{% endhighlight %}

<br />

{{ raw }}
<h1 class="header-tertiary">Header-tertiary</h1>
{{ endraw }}

{% highlight css %}
.header-tertiary
{% endhighlight %}

{% highlight html %}
<h1 class="header-tertiary">Header-tertiary</h1>
{% endhighlight %}

<br />

{{ raw }}
<h1 class="header-quaternary">Header-quaternary</h1>
{{ endraw }}

{% highlight css %}
.header-quaternary
{% endhighlight %}

{% highlight html %}
<h1 class="header-quaternary">Header-quaternary</h1>
{% endhighlight %}

<br />

Example:

{% highlight html %}
<h1 class=”header-primary”>A primary headline</h1>
<p>Some text</p>
<h2 class=”header-primary”>A semantically secondary headline, that visually looks the same as a primary headline</h2>
{% endhighlight %}

**Text:**

{{ raw }}
<p class="text">Text</p>
{{ endraw }}

{% highlight css %}
.text
{% endhighlight %}

{% highlight html %}
<p class="text">Text</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-distinct">Text-distinct</p>
{{ endraw }}

{% highlight css %}
.text-distinct
{% endhighlight %}

{% highlight html %}
<p class="text-distinct">Text-distinct</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-tiny">Text-tiny</p>
{{ endraw }}

{% highlight css %}
.text-tiny
{% endhighlight %}

{% highlight html %}
<p class="text-tiny">Text-tiny</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-note">Text-note</p>
{{ endraw }}

{% highlight css %}
.text-note
{% endhighlight %}

{% highlight html %}
<p class="text-note">Text-note</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-muted">Text-muted</p>
{{ endraw }}

{% highlight css %}
.text-muted
{% endhighlight %}

{% highlight html %}
<p class="text-muted">Text-muted</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-thin">Text-thin</p>
{{ endraw }}

{% highlight css %}
.text-thin
{% endhighlight %}

{% highlight html %}
<p class="text-thin">Text-thin</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-normal">Text-normal</p>
{{ endraw }}

{% highlight css %}
.text-normal
{% endhighlight %}

{% highlight html %}
<p class="text-normal">Text-normal</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-bold">Text-bold</p>
{{ endraw }}

{% highlight css %}
.text-bold
{% endhighlight %}

{% highlight html %}
<p class="text-bold">Text-bold</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-uppercase">Text-uppercase</p>
{{ endraw }}

{% highlight css %}
.text-uppercase
{% endhighlight %}

{% highlight html %}
<p class="text-uppercase">Text-uppercase</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-italic">Text-italic</p>
{{ endraw }}

{% highlight css %}
.text-italic
{% endhighlight %}

{% highlight html %}
<p class="text-italic">Text-italic</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="text-white">Text-white</p>
{{ endraw }}

{% highlight css %}
.text-white
{% endhighlight %}

{% highlight html %}
<p class="text-white">Text-white</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="reset-lineheight">Reset-lineheight</p>
{{ endraw }}

{% highlight css %}
.reset-lineheight
{% endhighlight %}

{% highlight html %}
<p class="reset-lineheight">Reset-lineheight</p>
{% endhighlight %}

<br />

{{ raw }}
<p class="reset-text-color">Reset-text-color</p>
{{ endraw }}

{% highlight css %}
.reset-text-color
{% endhighlight %}

{% highlight html %}
<p class="reset-text-color">Reset-text-color</p>
{% endhighlight %}

<br />

**Wysiwyg:**

For wysiwyg generated text, wrap the content inside class `.wysiwyg`

{% highlight html %}
<div class=”wysiwyg”>
  <h2>My headline</h2>
  <p>Text inserted by a WYSIWYG editor</p>
  <blockquote>Which is neatly formatted to the look and feel of an article</blockquote>
  <p>The .wysiwyg tag makes sure that all that user submitted content looks good even though the HTML code might not be.</p>
</div>
{% endhighlight %}

<br />

### Colors

Most magazine sites rely on quality photo material. Thus, the designer should provide images space to breath and avoid disturbing color schemes on the sites. As a rule of thumb, strictly keep the color palette to the one defined for each brand. Each brand will have a punch color, which can be used to accentuate elements, and some brands have a secondary color as well.

The main color palette follows the Bootstrap standard colors:

{{ raw }}
  <h4 class="brand-color">Brand color</h4>
  <h4 class="brand-success">Brand success</h4>
  <h4 class="brand-warning">Brand warning</h4>
  <h4 class="brand-danger">Brand danger</h4>
{{ endraw }}

Links, buttons, alerts etc. will have the appropriate colors applied by default. To utilize the color scheme, use the following classes:

{% highlight css %}
.brand-color
.brand-color-bg

.brand-danger
.brand-danger-bg

.brand-success
.brand-success-bg

.brand-warning
.brand-warning-bg
{% endhighlight %}

{% raw %}
<div class=”brand-color-bg”>
A container with the brand color as background
</div>
{% endraw %}

#### Widgets

Widgets form a central part on the BP platform as modules that can be placed around the site and on front pages.

Widgets should be designed to span the full width of the site layout in order to follow the overall design pattern.

`.widget` use this class on the parent of all widgets of the site - adds a container and a (white) background-color to the element.

{% highlight html %}
<div class=”widget”>
  <div class=”row”>
    <div class=”col-md-12”>
      Widget content
    </div>
  </div>
</div>
{% endhighlight %}

### Badges
Use the `.advertorial-stamp` class to add an advertorial badge on, for instance, the article lead image:

{% raw %}
<div class="relative gutter-bottom">
  <div class='advertorial-stamp'>Badge</div>
  <img src='http://placehold.it/640x450'>
</div>
{% endraw %}

{% highlight html %}
<div class='bounding-box'>
  <div class='advertorial-stamp'>ANNONCE</div>
  <img src='image.jpg 'alt='image name'>
</div>
{% endhighlight %}

#### Bootstrap related

These classes group Bootstrap’s responsive hidden-classes:

{% highlight css %}
.hidden-xs-sm
.visible-xs-sm
.hidden-md-lg
.visible-md-lg
.hidden
{% endhighlight %}

Use them like Bootstrap’s [responsive utilities](http://getbootstrap.com/css/#responsive-utilities)

#### Gutters

Use these gutter classes to add spacing between elements or to reset margin and padding on elements:

{% highlight css %}
/* resets */
.gutter-reset //reset all gutters
.gutter-vertical-reset //reset top and bottom gutters
.gutter-top-reset //reset top gutter
.gutter-bottom-reset //reset bottom gutter
.gutter-horizontal-reset //reset left and right gutters

.reset-padding //reset all padding
.reset-padding-left //reset left padding
.reset-padding-right //reset right padding


/* vertical */
.gutter-vertical //add gutters top and bottom
.gutter-vertical-lg //add large gutters top and bottom

/* horizontal */
.gutter-horizontal //add gutters left and right
.gutter-horizontal-lg //add large gutters left and right

/* top */
.gutter-top //add gutter top
.gutter-top-lg //add large gutter top

/* bottom */
.gutter-bottom //add gutter bottom
.gutter-bottom-lg //add gutter large bottom

/* left */
.gutter-left //add gutter left

/* right */
.gutter-right //add gutter right
{% endhighlight %}

<br />

Example:

{% raw %}
<h2 class='header-tertiary gutter-reset'>
  A header without margin or padding
</h2>
<div class='gutter-top-lg'>
  Content with a large margin to the header above
</div>
{% endraw %}

{% highlight html %}
<h2 class='header-tertiary gutter-reset'>
  A header without margin or padding
</h2>
<div class='gutter-top-lg'>
  Content with a large margin to the header above
</div>
{% endhighlight %}

#### Misc helpers

Simple helper classes that do what the title says:

{% highlight css %}
/* Widths */
.full-width
.max-full-width

/* Positions */
.relative
.absolute
.fixed
.left
.right
.center

/* Overflows */
.overflow-auto
.overflow-scroll
.overflow-hidden

/* Displays */
.block
.inline
.inline-block
.hide

/* Misc */
.hide-background
.pointer
.horizontal-scroll
.ellipsis
.vertical-align-top
.vertical-align-middle
.vertical-align-bottom
{% endhighlight %}

### JavaScript

BP uses jQuery v. 1.10.2 as the primary Javascript library. However, all functions are wrapped inside jQuery functions, so in case an external developer wishes to use another library, he can safely do so. Let us know if you experience any problems with this.

Scripts on the platform are minified and delivered through Rails 4's asset pipeline meaning that all scripts are available anywhere and don't need specific loading. However, this also entails that functions should be run only where they are needed by checking if the relevant DOM element is present.

Example:

{% highlight javascript %}
if($('[data-component="element"]').length) {
  runFunction();
}
{% endhighlight %}

#### Data attributes
BP JavaScript follows the patterns introduced by the Bootstrap community where DOM objects are interfaced through data-attrtibutes instead of classes and ids. This makes the relationship between scripts and markup more transparent.

**Example:**

Markup:

{% highlight html %}
  <button data-toggle="button">Button</button>
{% endhighlight %}

Javascript:

{% highlight javascript %}
$('[data-toggle="button"]').on('click', doSomething);
{% endhighlight %}

####Plugins

BP uses internal jQuery plugins to interface reusable scripts. External developers are welcome to use these plugins or beware of the namespace they occupy.

**$.checkRegex**

Simple frontend regex script that returns true or false. Use it like this: `$.checkRegex(stringToCheck, 'pattern');`

Available patterns: numberIncluded, onlyNumbers, onlyLetters, hasLetters, isEmail, isImage, onlySpaces

**$.breakpoints**

Checks the window width and returns the breakpoint as a string `xs`, `sm`, `md`, `lg`. Use it as it is, e.g.:

{% highlight javascript %}
if($.breakpoint() === 'md') {
  doSomething();
}
{% endhighlight %}

**$.isTouchDevice**

Detects if the site is accessed with a touch device. Returns true/false

**$.extractSuffix**

Splits a filename and returns the suffix as a string. For instance: `$.extractSuffix('image.png')` returns `png`.

####Testing

All plugins are unit tested with [Jasmine.js](http://jasmine.github.io/2.0/introduction.html). The testing suite is only available internally, but we strongly encourage external developers to unit test scripts.

####Components

BP extends Bootstrap's JavaScript components with a suite of features that can be initialized using data-attributes:

**Image rotator**

Easily create an image rotator by adding `data-component="rotator"` to a set of images with the following structure:

{% highlight html%}
  <div data-component="rotator">
    <ul>
      <li>
        <figure>
          <figcaption>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
{% endhighlight %}

**Modal image**

Toggle a large version of any image to open in a modal. Initiate with `data-toggle="modal-image"`and provide a path to the the large scale image in `data-image-lg="image-url">`

Example:

{% highlight html %}
<img src="image.jpg" data-toggle="modal-image" data-image-lg="image-large.jpg">
{% endhighlight %}

**Simple form validation**

The simple form validation component is, as the title indicates, useful to validate small and simple forms. To use it, add `data-regex`with a pattern (see list below) and `data-error-msg` with an error message to the input field that needs checked. On the submit button add `data-toggle="check-regex"`, and on the same DOM-level place a container with `data-toggle="alert-danger"` to hold the error messages:

Example:

{% highlight html %}
<form>
  <input
    placeholder="Telefonnummer"
    data-regex="phone"
    data-error-msg="Skal indeholde otte tal uden mellemrum">
  <div class="alert alert-danger" data-toggle="alert-danger"></div>
  <input type="submit" value="Submit" data-toggle="check-regex">
</form>
{% endhighlight %}

Available patterns:

`data-regex="phone"`: Checks if the input is a number of 8 digits without spaces

`data-regex="name"`: Checks if the input only has letters

`data-regex="email"`: Checks if the input is an email address

`data-regex="is-adult"`: Checks the difference between the current year (2014) and the input year (e.g. 1984) and whether it's more than 18 years ago

**Tooltip**

Initializes Bootstrap's Tooltip plugin `$('[data-toggle="tooltip"]').tooltip();`
