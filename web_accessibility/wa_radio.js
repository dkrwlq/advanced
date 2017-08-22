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

  $('.select-design-button').data('open', 'false').on('click', function(){

    if( $(this).data('open') == 'false' ){

      $(this).next().addClass('on');
      $(this).data('open', 'true');

    } else {

      $(this).next().removeClass('on');
      $(this).data('open', 'false');

    }
  });

  $('.select-design-list-item-button').on('click', function(){
    $('.select-design-button').text( $(this).text() ); /* text 함수와 html 함수는 내용이 없으면 넣어주고 있으면 바꿔준다. */

    $('.select-design-list').removeClass('on');
    $('.select-design-button').data('open', 'false'); /* data 바꾸는것을 안해주면 다시 버튼을 클릭했을때 리스트가 바로 나오지 않는다. */
  })
});