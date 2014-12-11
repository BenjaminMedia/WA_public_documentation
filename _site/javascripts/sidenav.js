/* Auto creates a sidenav from h3 tags in the content */

(function ($) {

 'use strict';

  $(document).on('ready', function(){
    var $sidenav     = $('[data-page-sidenav]'),
        $content     = $('[data-page-content]'),
        $h1          = $content.find('h3'),
        count        = $h1.length,
        id           = 1;

    if(! count) {
      $sidenav.hide();
    }

    $h1.each(function(){
      var $this = $(this),
          text  = $this.text();

      $this.attr('id', 'item-' + id);

      $sidenav.append('<a id="link-' + id + '" href="#item-' + id + '" class="page-sidenav-item">' + text + '</a>');
      if(count !== id) { $sidenav.append('<div class="page-sidenav-divider"></div>'); }

      var offset = $('#item-' + id).offset().top;

      $('#link-' + id).on('click', function() {
        $('html, body').animate({
            scrollTop: offset
        }, 500);
        return false;
      });

      id++;
    });
  });

})(jQuery);
