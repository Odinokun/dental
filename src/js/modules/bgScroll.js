module.exports = function () {

  $(document).ready(function () {
    let $element = $('#choose');
    let counter = 0;
    $(window).scroll(function () {
      let scroll = $(window).scrollTop() - ($(window).height() / 2);
      //Если скролл до конца елемента
      //let offset = $element.offset().top + $element.height();
      //Если скролл до начала елемента
      let offset = $element.offset().top

      if (scroll > offset) {
        $('#choose').addClass('active');
        counter = 1;
      } else {
        $('#choose').removeClass('active');
        counter = 0;
      }
    });
  });

};
