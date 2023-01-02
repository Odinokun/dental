module.exports = function () {

  const targetInput = $('.form__input').find('input');

  $(targetInput).on('keyup', function () {
    const targetSpan = $(this).next('span');

    if (this.value.length > 0) {
      $(this).parent('.form__input').addClass('active');
    } else {
      $(this).parent('.form__input').removeClass('active')
    }
  })

};