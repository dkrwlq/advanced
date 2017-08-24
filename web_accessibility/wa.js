/**
 * Created by Administrator on 2017-08-18.
 */


$(function(){

  var url;

  $('.gnb-depth1-link').on({ /* 마우스를 올리는 대상과 동작을 하는 대상이 같을때 사용해줄 수 있는방법 */

    'mouseenter' : function(){
      $(this).next().addClass('on');
    },

    'mouseleave' : function(){
      $(this).next().removeClass('on');
    },

    'focusin' : function(){
      $(this).next().addClass('on');
    }

  });

  $('.gnb-depth2-link').on('focusout', function(){

    // 현재 a 태그의 부모
    var $parent = $(this).parent('.gnb-depth2-item');

    // 현재 a 태그의 조상 gnb-depth2 : 해당 gnb-depth2 중에서 몇번째인지 찾기 위해서
    var $parents = $(this).parents('.gnb-depth2').find('.gnb-depth2-item');

    if( $parents.index( $parent ) == ($parents.length-1) ){

      $(this).parents('.gnb-depth2').removeClass('on');

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
  });

  $('.select-radio-label').on('click', function(){
    $('.select-design-button').text( $(this).text() ); /* text 함수와 html 함수는 내용이 없으면 넣어주고 있으면 바꿔준다. */

    $('.select-design-list').removeClass('on');
    // data 바꾸는거 꼭 해줘야함
    $('.select-design-button').data('open', 'false'); /* data 바꾸는것을 안해주면 다시 버튼을 클릭했을때 리스트가 바로 나오지 않는다. */

    //console.log( $(this).prev().attr('data-url') ); /* .prev() 는 이전것 .next() 는 다음것*/

    // 변수를 진입점 뒤에 선언해주고 저장값을 넣어주기!
    url = $(this).prev().data('url'); /*data 함수를 사용할때는 뒤에있는 url 만 써준다.*/

  });

  $('.family-site-move').on('click',function(){

    // 객체.객체프로퍼티(매개변수)
    // location 객체의 href 프로퍼티에 주소값을 넣어주면 해당 주소로 이동
    //location.href = url;

    // 사이트 이동 새창으로 열기
    window.open(url);

  });
});