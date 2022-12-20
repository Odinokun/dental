module.exports = function () {

  $(window).scroll(function () {
    let topToDocument = window.pageYOffset || document.documentElement.scrollTop;
    let menu = document.getElementById('header');
    if (topToDocument <= 20) {
      $(menu).removeClass('on-scroll');
    } else {
      $(menu).addClass('on-scroll');
    }
  });

  let topToDocument = window.pageYOffset || document.documentElement.scrollTop;
  let menu = document.getElementById('header');
  if (topToDocument <= 20) {
    $(menu).removeClass('on-scroll');
  } else {
    $(menu).addClass('on-scroll');
  }

};