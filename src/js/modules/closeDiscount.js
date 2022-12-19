module.exports = function () {

  $('.header__discount-close').on('click', function () {
    $('#header__discount').slideUp();
    $('.main-wrap').removeClass('main-wrap--with-discount');
  })

  window.onload = (event) => {
    if (document.querySelector("#header__discount")) {
      $('.main-wrap').addClass('main-wrap--with-discount');
    } else {
      $('.main-wrap').removeClass('main-wrap--with-discount');
    }
  };

};