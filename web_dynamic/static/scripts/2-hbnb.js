$(document).ready(function () {
    const amenities = {};
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  
    $('input[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenities[$(this).attr('data-id')];
      }
      $('div.amenities h4').text(Object.values(amenities).join(', '));
    });
  
    $.get(url, function (data) {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  });
