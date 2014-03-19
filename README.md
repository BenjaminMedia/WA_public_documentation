bpp_styleguide
=============

Style guide and public documentation for websites on the Bonnier Publications Platform (bpp)

http://benjaminmedia.github.io/bpp_styleguide

The site is made with Jekyll (http://jekyllrb.com/). To start it, go to folder and run command $ jekyll serve --watch. The site now runs on http://localhost:4000

Content is edited in the _includes/content.md as markdown. The Jekyll server will translate the markdown to html on the fly when the server is running.

Use Liquid highlight to style code

{% highlight javascript %}

//javascript code

{% endhighlight %}

and Liquid raw to make untranslated code examples

{% raw %}
<div class="class-name">Some example</div>
{% endraw %}

It's possible to build the site manually running $ jekyll build. Normally that will not be necessary as Github does this automatically when pushed to the repository.

Keep the public master in branch `gh-pages` as Github will point to this location when loading the styleguide url.
