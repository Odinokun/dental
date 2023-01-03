module.exports = function () {

  $('.accordion__header').on('click', function () {
    const activeBody = $(this).next('.accordion__body');

    if ($(this).hasClass('active')) {
      $('.accordion__header').removeClass('active');
      $('.accordion__body').slideUp();
    } else {
      $('.accordion__header').removeClass('active');
      $('.accordion__body').slideUp();

      $(this).addClass('active');
      $(activeBody).slideDown();
    }
  })

};