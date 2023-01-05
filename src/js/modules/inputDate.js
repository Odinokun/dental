module.exports = function () {

  $('.input-date input').on('focus', function () {
    $(this).parent('.input-date').addClass('active');
  })
  $('.input-date input').on('blur', function () {
    if (this.value.length > 0) {
      $(this).parent('.input-date').addClass('active');
    } else {
      $(this).parent('.input-date').removeClass('active');
    }
  })
  // onfocus="(this.type = 'date')"
  // onblur="if(!this.value) this.type = 'text'"
};