$(function(){

  $('.gnb-toggle').data({ 'open' : false }).on('click', function(){

    if( $(this).data().open ){
      $('.gnb').removeClass('on');
      $(this).data({open : false});
    } else {
      $('.gnb').addClass('on');
      $(this).data({open : true});
    }

  });

});