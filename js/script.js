// MVとABOUTのアニメーション実装
function fadeAnime(){

$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
var elemPos = $(this).offset().top-50; //要素より、50px上の
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeUp');
}else{
$(this).removeClass('fadeUp');
}
});
}

// スクロールすると要素を表示実装
var scrollAnimationElm = document.querySelectorAll('.show-trigger');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.sa_margin != null) {
      triggerMargin = parseInt(elm.dataset.sa_margin);
    }
    if(elm.dataset.sa_trigger) {
      showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      elm.classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

$('.header_nav-lists a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-80;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});
$('.footer_nav-lists a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-80;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});
// キーを押したとき
$(window).on('keydown', function(e){
  var keyCode = e.keyCode;
  
  if(keyCode == 16 || keyCode == 44 || keyCode == 91 || keyCode == 92){
      $('img').hide();
      return false;
  }
});

// キーを離したとき
$(window).on('keyup', function(){
   $('img').show();
});