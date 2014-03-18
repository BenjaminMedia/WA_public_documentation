---
Introduction
---

This document describes the overall design patterns of the White Album (WA) platform. White Album is a “white label” CMS that Benjamin Media sites are built upon. All sites share a common core of Javascript, HTML and CSS, while individual skin-files enable stylesheet customization according to brand.

External partners may have different agendas and briefs, meanwhile, this guide targets projects that include extensions directly implemented into the platform and external projects that need visual coherence with a specific brand or the platform as a whole.

### Overall patterns

The platform is made fully responsive enabled by the Twitter Bootstrap CSS-framework [Bootstrap CSS-framework](http://getbootstrap.com/).
The responsive sites follow the Mobile First paradigm meaning that the mobile adaption is the default. Preferably, the same content should be available across devices while the presentation ought to be optimized for the specific screen size.

The platform is designed with a full-width mindset where each row contains “one impression”. This approach entails alternating user attention on editorial content and ads leading to an enhanced user experience and improved quality of adverts. Yet, this approach also entails a need to guide users down the site in order to keep them interested.

![Horisontal Ordering](/images/fullwidth.jpg)

Most of the Bonnier products have access to good photo material, which is utilized both off- and online. The web site visuals aim to support these images with limited color schemes and unpretentious graphics that do not steal attention. This approach fits well into the content-centric web design trends that focuses on minimalism and simplicity.

### Header & footer

The WA header and footer, which may be imported on external sites, consists of...
A full width banner and optional side banners (horseshoe)
The brand logo - as default it will be placed to the left

* magazine subscription offer to the right
* navigation menu with dropdown submenu
* footer containing background information about the publisher and links to related sites

### Header:
![Horisontal Ordering](http://benjaminmedia.github.io/WA_public_documentation/images/header.png)

### Footer:
![Horisontal Ordering](http://benjaminmedia.github.io/WA_public_documentation/images/footer.png)

### Your area of control:
![Horisontal Ordering](http://benjaminmedia.github.io/WA_public_documentation/images/areaofcontrol.jpg)

#### Navigation

The navigation menu has drop downs to display sub pages of each section. On small displays, the menu will collapse into a button icon, which can be triggered to display a fold out menu instead.

The navigation will fixate itself to the top of the screen when the user scrolls down the site.

#### Included in `<head>`

WA uses the HTML5 doctype:

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

WA is based on the CSS-framework [Twitter Bootstrap](http://getbootstrap.com/). that provides a wide range of styles ready to use. Most significantly is the Mobile First responsive grid, which defines the overall structure of the platform.

WA does not include unused Bootstrap components. For this reason, here is a complete list of sub-libraries included and used throughout the White Album platform:

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

See the full list of available Bootstrap elements [here](https://github.com/twbs/bootstrap-sass/blob/master/vendor/assets/stylesheets/bootstrap/bootstrap.scss), and let us know if you think something more should be included

### Grid

The WA platform uses the 12 column responsive grid provided by Bootstrap.

The grid has four general breakpoints: extra small (xs), small (sm), medium (md) and large (lg). In most cases these breakpoints will be effectuated as follows:

* xs:   smartphone
* sm:   tablet portrait
* md:   13” laptop
* lg:   desktop

Note that Bootstrap is a Mobile First framework meaning that the xs-breakpoint is the default. This means that media query exceptions should be applied to the larger representations and not the other way around.

See the Bootstrap documentation on how to use the [grid classes](http://getbootstrap.com/css/#grid)

### Widgets

Widgets form a central part on the WA platform as modules that can be placed around the site and on front pages.

Widgets should be designed to span the full width of the site layout in order to follow the overall design pattern.

Use the `.widget` class on all modules, which includes the container class and a white background color.

**Example:**

{% highlight html %}
<div class='widget widget-rotator'>
  <!-- HTML code that displays a rotator -->
</div>
{% endhighlight %}

{% highlight css %}

.widget-rotator {}
{% endhighlight %}

### Headers and copy

Keep a clear hierarchy between different headers and copy. Each brand has a standard font that should be used on extensions as well to keep consistency.

The base font of copy is 16px and uses absolute pixel sizes (not ems or pt).

Use the tags h1, h2, h3, p etc. semantically and add the following classes to style headers and copy:

**Headers:**

{% highlight css %}
.header-primary
.header-secondary
.header-tertiary
.header-quaternary
{% endhighlight %}



{% highlight html %}
<h1 class=”header-primary”>A primary headline</h1>
<p>Some text</p>
<h2 class=”header-primary”>A semantically secondary headline, that visually looks the same as a primary headline</h2>
{% endhighlight %}


**Copy:**

{% highlight css %}
.copy
.copy-distinct //standard bold copy
.copy-tiny //small copy
.copy-note //small italic copy
{% endhighlight %}

{% highlight html %}
<div class=”copy”>
  <h2>My headline</h2>
  <p>Text inserted by a WYSIWYG editor</p>
  <blockquote>Which is neatly formatted to the look and feel of an article</blockquote>
  <p>The .copy tag makes sure that all that user submitted content looks good even though the HTML code might not be.</p>
</div>
{% endhighlight %}

### Colors

Most magazine sites rely on good photo material. Thus, the designer should provide images space to breath and avoid disturbing color schemes on the sites. As a rule of thumb, strictly keep the color palette to the one defined for each brand (see brand section for specifics). Each brand will have a punch color, which can be used to accentuate elements, and some brands have a secondary color as well.

The main color palette of a white label site is grayscale - only exceptions are alerts and signal colors.

The main colors of a site can be applied using the following classes:

{% highlight css %}
.brand-color //text color
.brand-color-bg //background color

.brand-danger
.brand-danger-bg

.brand-success
.brand-success-bg

.brand-warning
.brand-warning-bg
{% endhighlight %}

{% highlight html %}
<div class=”brand-color-bg”>
A container with the brand color as background
</div>
{% endhighlight %}

### CSS misc helper

#### Widget

`.widget` use this class on the parent of all widgets of the site - adds a container and a (white) background-color to the element

{% highlight html %}
<div class=”widget”>
  <div class=”row”>
    <div class=”col-md-12”>
      Widget content
    </div>
  </div>
</div>
{% endhighlight %}

#### Standard helpers

Simple helper classes that do what the title says:

{% highlight css %}
.full-width
.max-full-width
.center
.relative
.float-left
.overflow-auto
{% endhighlight %}

#### Bootstrap related

These classes group Bootstrap’s responsive hidden-classes:

{% highlight css %}
.hidden-xs-sm
.visible-xs-sm
.hidden-md-lg
.visible-md-lg
{% endhighlight %}

Use them like Bootstrap’s [responsive utilities](http://getbootstrap.com/css/#responsive-utilities)

#### Gutters

Use these gutter classes to add spacing between elements or to reset margin and padding on elements:

{% highlight css %}
/* reset */
.gutter-reset

/* vertical */
.gutter-vertical
.gutter-vertical-lg
.gutter-vertical-reset

/* horisontal */
.gutter-horisontal
.gutter-horisontal-lg
.gutter-horisontal-reset

/* top */
.gutter-top
.gutter-top-lg
.gutter-top-reset

/* bottom */
.gutter-bottom
.gutter-bottom-lg
.gutter-bottom-reset

/* right */
.gutter-right

/* left */
.gutter-left
{% endhighlight %}

{% highlight html %}
<h1 class='header-primary gutter-reset'>
  A header without margin or padding
</h1>
<div class='row gutter-top-lg'>
  Content with a large margin to the header above
</div>
{% endhighlight %}

### Buttons
Use the Bootstrap buttons when a link needs special attention:

Button colors follow the overall site colors meaning that, for instance, the primary button has the primary brand color.

See [Bootstrap/buttons](http://getbootstrap.com/css/#buttons) about how to use

### Badges
Use the `.advertorial-stamp` class to add an advertorial badge on, for instance, the article lead image:

![advertorial](http://benjaminmedia.github.io/WA_public_documentation/images/advertorial.png)

{% highlight html %}
<div class='bounding-box'>
  <div class='advertorial'>ANNONCE</div>
  <img src='image.jpg 'alt='image name'>
</div>
{% endhighlight %}

### Icons
Font Awesome is installed on WA. Use these icon fonts whenever it makes sense and try to avoid images as they affect load times negatively. Also, using these fonts will maintain a consistent visual appearance.

See [Font Awesome](http://fontawesome.io) about how to use

### Forms
Use Bootstrap’s form classes to style forms: [http://getbootstrap.com/css/#forms](http://getbootstrap.com/css/#forms)

Select the smallest height sizing class for input fields: `.input-sm`

Required form fields should always have a star * next to the title. On errors, place help text underneath the input box and a checkmark next to the input field - use `.brand-danger` or `.brand-success` to color these elements.

![form](http://benjaminmedia.github.io/WA_public_documentation/images/forminput.png)

### Alerts
Bootstrap provides a collection of alerts for user feedback messages . The colors follow the standard colors. Keep the base colors red, green and yellow, which may be toned to fit certain brand colors better.

See [Bootstrap/alerts](http://getbootstrap.com/components/#alerts) about how to use

### Brand styling (skins)

##### Woman
* Main color:     #CF0C56
* Secondary color:  #292929
* Background color:   #f8f8f8
* Main font:    Raleway
* Secondary font: Old Standard TT


##### Bobedre dk+no
* Main color:     #222222
* Secondary color:  #DF6F06
* Background color:   #ffffff
* Main font:    Helvetica
* Secondary font: none

##### Bilmagasinet
* Main color:     #c00c00
* Secondary color:  #09729F
* Background color:  #ffffff
* Main font:    Arial
* Secondary font: none

##### Boligpluss
* Main color:     #6b6496
* Secondary color:  #c6c4dc
* Background color:  #f0ede5
* Main font:    Verdana
* Secondary font: none

##### Costume + Streetstyle dk
* Main color:     #000000
* Secondary color:  #f3a5a7
* Background color:  #ffffff
* Main font:    Lato
* Secondary font: none

##### Costume + Streetstyle no
* Main color:     #000000
* Secondary color:  #f3a5a7
* Background color:  #ffffff
* Main font:    BrandonGrotesque
* Secondary font: none

##### FHM
* Main color:     #920C15
* Secondary color:  #2e629d
* Background color:  #ffffff
* Main font:    Trebuchet
* Secondary font: none

##### Magasinet Liv
* Main color:     #000000
* Secondary color:  #e40044
* Background:   pattern image
* Main font:    Droid Serif
* Secondary font: Droid Sans

##### M
* Main color:     #ea1d2c
* Secondary color:  #000000
* Background color:   #ededed
* Main font:    Helvetica
* Secondary font: none

##### Penge
* Main color:     #c00c00
* Secondary color:  #f5f5f5
* Background color:   #ffffff
* Main font:    Arial
* Secondary font: none

##### Stella
* Main color:     #333333
* Secondary color:  #E25B82
* Background color:   #ffffff
* Main font:    Droid Serif
* Secondary font: Questrial

##### Tara
* Main color:     #82002d
* Secondary color:  #E25B82
* Background color:   #fefefe
* Main font:    Tahoma
* Secondary font: None
