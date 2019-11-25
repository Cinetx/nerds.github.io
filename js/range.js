jQuery(document).ready(function() {
  $('.upper').on('input', setFill);
  $('.lower').on('input', setFill);

  var max = $('.upper').attr('max');
  var min = $('.lower').attr('min');

  function setFill(evt) {
    var valUpper = $('.upper').val();
    var valLower = $('.lower').val();
    if (parseFloat(valLower) > parseFloat(valUpper)) {
      var trade = valLower;
      valLower = valUpper;
      valUpper = trade;
    }

    var width = valUpper * 100 / max;
    var left = valLower * 100 / max;
    $('.fill').css('left', 'calc(' + left + '%)');
    $('.fill').css('width', width - left + '%');

    // Update info
    if (parseInt(valLower) == min) {
      $('.easy-basket-lower').val('0');
    } else {
      $('.easy-basket-lower').val(parseInt(valLower));
    }
    if (parseInt(valUpper) == max) {
      $('.easy-basket-upper').val('15000');
    } else {
      $('.easy-basket-upper').val(parseInt(valUpper));
    }
    $('.histogram-list li').removeClass('ui-histogram-active');
  }

  // изменяем диапазон цен вручную

});
