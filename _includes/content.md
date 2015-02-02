
### Introduction

This document describes the overall design patterns of the Bonnier Publications Platform (BPP).

The heart of BPP is custom CMS White Album built with Ruby on Rails, which forms the basis of core HTML and CSS that external developers can access through an api. White Album is a “white label” CMS that most Bonnier sites use. All sites share a common core of assets, while individual skin-files enable stylesheet customization according to brand.

External partners may have different agendas and briefs, meanwhile, this guide targets projects that include extensions directly implemented into the platform and external projects that need visual coherence with a specific brand or the platform as a whole.

### Technical patterns

BPP is build with [object oriented CSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) (OOCSS) in mind. As with any object-based coding method, the purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.

Furthermore, BPP aims to follow the [code guidelines and formatting](http://mdo.github.io/code-guide/) used by the Bootstrap community.

### Visual patterns

BPP is responsive enabled by the [Bootstrap CSS-framework](http://getbootstrap.com/).

The platform is designed with a full-width mindset where each row contains “one impression”. This approach entails alternating user attention on editorial content and ads leading to an enhanced user experience and improved quality of adverts. Yet, this approach also entails a need to guide users down the site in order to keep them interested.

![Horisontal Ordering](images/fullwidth.jpg)

Most of the Bonnier products have access to quality photo material, which is utilized both off- and online. The web site visuals aim to support these images with limited color schemes and unpretentious graphics that do not steal attention from the content. This approach fits well into the content-centric web design trends that focuses on minimalism and simplicity.

### API

The API-response includes header and footer HTML, a stylesheet link tag and a JavaScript tag. Call `full` or `partial` to either get a full set of styles and scripts from WA or just the most necessary assets needed for the header and footer to work. Ask your local Bonnier developer to get API access.

The API-response will include:

* Header HTML
* Footer HTML
* CSS link tag to include WhiteAlbum styles
* JavaScript tag to include WhiteAlbum banner JavaScript (depends on jQuery) and Bootstrap scripts

Full:

* CSS: imports all styling from WA
* JS: imports banner script and all Bootstrap scripts

Partial:

* CSS: only imports styles necessary for the header. This includes vendors (Bootstrap + FontAwesome), fonts and skin styling, but not template specific styling
* JS: imports banner script and Bootstrap collapse script (necessary for the menu to work)


### Loading banners

The JavaScript tag included in the API-response will load a script for inserting banners. Place banners using the following markup where `data-banner-code="XXXX"` is the content unit of the related campaign:

{% highlight html %}
  <!-- Banners visible on desktops -->
  <div class="banner visible-md-lg" data-banner-md-lg>
      <div data-banner-code="31404" data-banner-target></div>
  </div>
  <!-- Banners visible on tablets -->
  <div class="banner visible-sm" data-banner-sm>
      <div data-banner-code="31417" data-banner-target></div>
  </div>
  <!-- Banners visible on mobiles -->
  <div class="banner visible-xs" data-banner-xs>
      <div data-banner-code="31412" data-banner-target></div>
  </div>
{% endhighlight %}

You can insert any content unit you want in the banner-code attribute.

### Header & footer

The BPP header and footer HTML contains:

* A full width banner and optional side banners (horseshoe)
* The brand logo
* magazine subscription offer to the right
* navigation menu with dropdown submenu
* footer containing background information about the publisher and links to related sites

#### Header:
![Horisontal Ordering](images/header.png)

#### Footer:
![Horisontal Ordering](images/footer.png)

#### Your area of control:
![Horisontal Ordering](images/areaofcontrol.jpg)

### Navigation

The navigation menu has drop downs to display sub pages of each section. On small displays, the menu will collapse into a button icon, which can be triggered to display a fold out menu instead.


### CSS & MARKUP

### Bootstrap

BPP is based on the CSS-framework [Twitter Bootstrap](http://getbootstrap.com/). That provides a wide range of styles ready to use. Most significantly is the Mobile First responsive grid, which defines the overall structure of the platform.

BPP does not include unused Bootstrap components. For this reason, here is a complete list of sub-libraries included on the platform:

* normalize
* print
* scaffolding
* type
* code
* grid
* tables
* forms
* buttons
* progress-bars
* pagination
* pager
* labels
* list-group
* panels
* component-animations
* alerts
* navbar
* navs
* dropdowns
* utilities
* responsive-utilities

### Grid

The BPP platform uses the 12 column [responsive grid](http://getbootstrap.com/css/#grid) provided by Bootstrap.

The grid has four general breakpoints: extra small (xs), small (sm), medium (md) and large (lg). The large breakpoint still exists in our code base though we currently don't use this, as we have to accommodate the specs from the current ad market. Horseshoe ads are still a popular media choice, because of this our websites have a maximum width of 960px (Denmark) and 980px (Norway).

In most cases these breakpoints will be effectuated as follows:

* xs:   smartphone
* sm:   tablet
* md:   13” laptop
* <s>lg:   desktop</s>

Note that Bootstrap is a Mobile First framework meaning that the xs-breakpoint is the default. This means that media query exceptions should be applied to the larger representations and not the other way around.

### Buttons
Use the [Bootstrap buttons](http://getbootstrap.com/css/#buttons) when a link needs special attention:

Button colors follow the overall site colors meaning that, for instance, the primary button has the primary brand color.

The Bootstrap buttons have been extended with a facebook styled button enabled by class `.btn-facebook` :

{{ raw }}
   <a href="#" class="btn-facebook"> Login med facebook </a>
{{ endraw }}

### Forms
Use Bootstrap’s form classes to style [forms](http://getbootstrap.com/css/#forms).

### Alerts
Bootstrap provides a collection of [alerts](http://getbootstrap.com/components/#alerts) for user feedback messages. By default, they follow the colors described in the [colors section](#colors).

### Icons
[Font Awesome](http://fontawesome.io) is implemented on BPP. Use this icon font whenever it makes sense and try to avoid images as they affect load times negatively. Also, using this font will ensure a consistent visual appearance.

### HELPERS

### Headers

Keep a clear hierarchy between different headers and text. In general, each site has a primary serif font and a primary sans-serif font, which are different from site to site. The fonts will be applied through the header- and text-classes.

All font sizes are specified in pixels (not em or pt).

Use the tags h1, h2, h3, p etc. semantically and add the equivalent classes to style headers and text. Eg. Apply `<h1>` styles with `.h1` . This is useful if semantics and styling should be separated.

Example:

{% highlight html %}
<h1 class="h1">A primary headline</h1>
<p>Some text</p>
<h2 class=".h1">A semantically secondary headline, that visually looks the same as a primary headline</h2>
{% endhighlight %}

### Text

Use the following classes to achieve different styling of `<p>` tags:

{{ raw }}
<p class="text-small gutter-top-lg">Text-small</p>
{{ endraw }}

{% highlight css %}
.text-small
{% endhighlight %}

{% highlight html %}
<p class="text-small">Text-small</p>
{% endhighlight %}

{{ raw }}
<p class="text-tiny gutter-top-lg">Text-tiny</p>
{{ endraw }}

{% highlight css %}
.text-tiny
{% endhighlight %}

{% highlight html %}
<p class="text-tiny">Text-tiny</p>
{% endhighlight %}

{{ raw }}
<p class="text-note gutter-top-lg">Text-note</p>
{{ endraw }}

{% highlight css %}
.text-note
{% endhighlight %}

{% highlight html %}
<p class="text-note">Text-note</p>
{% endhighlight %}

{{ raw }}
<p class="text-muted gutter-top-lg">Text-muted</p>
{{ endraw }}

{% highlight css %}
.text-muted
{% endhighlight %}

{% highlight html %}
<p class="text-muted">Text-muted</p>
{% endhighlight %}

{{ raw }}
<p class="text-thin gutter-top-lg">Text-thin</p>
{{ endraw }}

{% highlight css %}
.text-thin
{% endhighlight %}

{% highlight html %}
<p class="text-thin">Text-thin</p>
{% endhighlight %}

{{ raw }}
<p class="text-normal gutter-top-lg">Text-normal</p>
{{ endraw }}

{% highlight css %}
.text-normal
{% endhighlight %}

{% highlight html %}
<p class="text-normal">Text-normal</p>
{% endhighlight %}

{{ raw }}
<p class="text-bold gutter-top-lg">Text-bold</p>
{{ endraw }}

{% highlight css %}
.text-bold
{% endhighlight %}

{% highlight html %}
<p class="text-bold">Text-bold</p>
{% endhighlight %}

{{ raw }}
<p class="text-uppercase gutter-top-lg">Text-uppercase</p>
{{ endraw }}

{% highlight css %}
.text-uppercase
{% endhighlight %}

{% highlight html %}
<p class="text-uppercase">Text-uppercase</p>
{% endhighlight %}

{{ raw }}
<p class="text-italic gutter-top-lg">Text-italic</p>
{{ endraw }}

{% highlight css %}
.text-italic
{% endhighlight %}

{% highlight html %}
<p class="text-italic">Text-italic</p>
{% endhighlight %}

{{ raw }}
<p class="text-white gutter-top-lg">Text-white</p>
{{ endraw }}

{% highlight css %}
.text-white
{% endhighlight %}

{% highlight html %}
<p class="text-white">Text-white</p>
{% endhighlight %}

{{ raw }}
<p class="reset-lineheight gutter-top-lg">Reset-lineheight</p>
{{ endraw }}

{% highlight css %}
.reset-lineheight
{% endhighlight %}

{% highlight html %}
<p class="reset-lineheight">Reset-lineheight</p>
{% endhighlight %}

{{ raw }}
<p class="reset-text-color gutter-top-lg">Reset-text-color</p>
{{ endraw }}

{% highlight css %}
.reset-text-color
{% endhighlight %}

{% highlight html %}
<p class="reset-text-color">Reset-text-color</p>
{% endhighlight %}


### Wysiwyg

For wysiwyg generated text, wrap the content inside `.wysiwyg`

{% highlight html %}
<div class="wysiwyg">
  <h2>My headline</h2>
  <p>Text inserted by a WYSIWYG editor</p>
  <blockquote>Which is neatly formatted to the look and feel of an article</blockquote>
  <p>The .wysiwyg tag makes sure that all that user submitted content looks good even though the HTML code might not be.</p>
</div>
{% endhighlight %}

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

{{ raw }}
<div class="brand-color-bg gutter-top-lg" style="padding: 10px 20px;">
<div class="h3 text-white">A container with the brand color as background</div>
</div>
{{ endraw }}

### Widgets

Widgets form a central part on the BPP platform as modules that can be placed around the site and on front pages.

Widgets should be designed to span the full width of the site layout in order to follow the overall design pattern.

use `.widget` on the parent of all widgets of the site, which adds a container and a (white) background-color to the element.

{% highlight html %}
<div class="widget">
  <div class="row">
    <div class="col-md-12">
      Widget content
    </div>
  </div>
</div>
{% endhighlight %}

### Labels
Use `.content-label` on widget thumbnails and lead images if needed. The background-color and text can be changed to whatever is appropriate for the specific label. However, the placement must always be at the top in order to comply with Norwegian legislation.

{{ raw }}
<div class="relative gutter-bottom">
  <div class="content-label">ANNONCE</div>
  <img src='http://placehold.it/640x450'>
</div>
{{ endraw }}

{% highlight html %}
<div class="relative">
  <div class="content-label">ANNONCE</div>
  <img src="image.jpg" alt="image name">
</div>
{% endhighlight %}

### Gutters

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

#### Example:

{{ raw }}
<div style="border: 1px solid black; padding: 10px;" class="gutter-bottom">
  <h2 class="header-tertiary gutter-reset">
    A header without margin or padding
  </h2>
  <div class="gutter-top-lg">
    Content with a large margin to the header above
  </div>
</div>
{{ endraw }}

{% highlight html %}
<h2 class="header-tertiary gutter-reset">
  A header without margin or padding
</h2>
<div class="gutter-top-lg">
  Content with a large margin to the header above
</div>
{% endhighlight %}

### Visibility

These classes group Bootstrap’s responsive hidden-classes:

{% highlight css %}
.hidden-xs-sm
.visible-xs-sm
.hidden-md-lg
.visible-md-lg
.hidden
{% endhighlight %}

Use them like Bootstrap’s [responsive utilities](http://getbootstrap.com/css/#responsive-utilities)

### Micro helpers

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
.bp-hide // This is a temporary name, until we update Boostrap

/* Additional */
.hide-background
.pointer
.vertical-align-top
.vertical-align-middle
.vertical-align-bottom
{% endhighlight %}

### Misc helpers

{% highlight css %}
/* Vertical centering using flexbox */
.middle

/* Apply to wrapper with a nested class named .inner to create horizontal scroll effect */
.horizontal-scroll

 /* Add to text-container with set width to create ellipsis cutoff */
.ellipsis

 /* Add on image to make it grayscale */
.grayscale

{% endhighlight %}

### Caveats

White Album uses the OOCSS approach, but also has customized modules that fills up the global name space. Therefore, be careful not to overwrite any of the following modules (and related sub modules):

`.banner` `.horseshoe` `.takerover` `.gallery` `.article` `.blog` `.category` `.contestants` `.category` `.footer` `.logo` `.nav` `.navbar` `.search` `.sticky-menu` `.page` `.permission` `.polls` `.quiz` `.abo-offer` `.calendar` `.content-in-rows` `.fact-box` `.filtered-search` `.full-width-content` `.widget` `.linklist` `.media` `.video` `.mobile` `.newsletter-signup` `.rotator` `.social-share` `.standard` `.themebox` `.wg`

We motivate external partners to namespace all custom CSS with an app-specific prefix to avoid clashes `.app-classname`
