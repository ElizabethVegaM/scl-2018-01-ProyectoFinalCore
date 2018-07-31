toRegisterBtn.addEventListener('click', () => {
  welcome.classList.add('d-none');
  register.classList.remove('d-none');
});

data.addEventListener('click', () =>{
  welcome.classList.add('d-none');
  dashboard.classList.remove('d-none');
});

let $table = $('#table');
$(function() {
  $('#toolbar').find('select').change(function() {
    $table.bootstrapTable('refreshOptions', {
      exportDataType: $(this).val()
    });
  });
});

var trBoldBlue = $('table');

$(trBoldBlue).on('click', 'tr', function() {
  $(this).toggleClass('bold-blue');
});