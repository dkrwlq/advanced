/**
 * Created by Administrator on 2017-08-18.
 */


$(function(){

  $('.gnb-depth1-link').on({ /* ���콺�� �ø��� ����� ������ ������� �� �ִ¹�� */

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
    $('.select-design-button').text( $(this).text() ); /* text �Լ��� html �Լ��� ������ ������ �־��ְ� ������ �ٲ��ش�. */

    $('.select-design-list').removeClass('on');
    $('.select-design-button').data('open', 'false'); /* data �ٲٴ°��� �����ָ� �ٽ� ��ư�� Ŭ�������� ����Ʈ�� �ٷ� ������ �ʴ´�. */
  })
});