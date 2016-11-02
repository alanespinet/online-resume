(function app(){

  var hidden = false;
  var $menu = $('#general-menu');

  $('.collapser').on('click', function(e){
    e.stopPropagation();
    if(!hidden){
      $menu.css('bottom', '-110px');
      hidden = true;
    } else {
      $menu.css('bottom', '0');
      hidden = false;
    }
  });


})();
