module.exports = function () {

  const targetInput = $('.input').find('input');

  $(targetInput).on('keyup', function () {
    if (this.value.length > 0) {
      $(this).parent('.input').addClass('active');
    } else {
      $(this).parent('.input').removeClass('active')
    }
  })

  const targetDateInput = $('.input-date').find('input');

  $(targetDateInput).on('change', function () {
    if (this.value.length > 0) {
      $(this).parent('.input-date').addClass('active');
    } else {
      $(this).parent('.input-date').removeClass('active')
    }
  })

  const targetTextarea = $('.textarea').find('textarea');
  $(targetTextarea).on('keyup', function () {
    if (this.value.length > 0) {
      $(this).parent('.textarea').addClass('active');
    } else {
      $(this).parent('.textarea').removeClass('active')
    }
  })

};