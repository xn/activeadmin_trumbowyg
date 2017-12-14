$(document).ready( function() {
  $('.trumbowyg-textarea').each(function () {
    var options = {
      svgPath: '/assets/active_admin-trumbowyg.svg'
    };
    options = $.extend({}, options, $(this).data( 'options' ));
    $(this).trumbowyg( options );
  });
});

  $(document).on('polymorphic_has_many_form:inserted', '.polymorphic_has_many_container', function(event, fieldset) {
    return $('.trumbowyg-textarea').each(function () {
    var options = {};
    options = $.extend({}, options, $(this).data( 'options' ));
    $(this).trumbowyg( options );
  });
  });

  $(document).on('has_many_form:inserted', '.has_many_container', function(event, fieldset) {
    return $('.trumbowyg-textarea').each(function () {
    var options = {};
    options = $.extend({}, options, $(this).data( 'options' ));
    $(this).trumbowyg( options );
  });
  });