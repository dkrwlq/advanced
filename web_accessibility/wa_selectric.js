/**
 * Created by Administrator on 2017-08-18.
 */


$(function(){

  $('.gnb-depth1-link').on({ /* 마우스를 올리는 대상이 같을때 사용해줄 수 있는방법 */

    'mouseenter' : function(){
      $(this).next().addClass('on');
    },

    'mouseleave' : function(){
      $(this).next().removeClass('on');
    }
  });

  $('.family-site-select').selectric();

});