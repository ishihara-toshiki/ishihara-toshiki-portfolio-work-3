//アコーディオンメニュー
$(function() {
    $('.p-qa-item__head').click(function() {
        $(this).next().slideToggle();
        // $(this).toggleClass('is-open');
    });
});


//ドロワーメニューの利用宣言
$(document).ready(function() {
    $('.drawer').drawer();
    $('.p-drawer-menu__item a').on('click', function() {
        $('.drawer').drawer('close');
    });
});

//スムーススクロール
// $(function() {
//     $('a[href^="#"]').click(function() {
//       const speed = 600;
//       let header = $('.header').innerHeight();
//       let href = $(this).attr("href");
//       let target = $(href == "#" ? "html" : href);
//       // target = $(href);
//       let position = target.offset().top - header;
//       $('html,body').animate({scrollTop: position }, speed, "swing");
//       return false;
//     });
// });

$(function(){
    $('a[href^="#"]').click(function(){
      var adjust = 0;
      var speed = 400; 
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});
