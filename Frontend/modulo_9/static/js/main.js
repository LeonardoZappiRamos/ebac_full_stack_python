$(document).ready(function() {
  $('form button').click(function (event) {
    event.preventDefault();

    var inputTarefa = $('#newTask').val();
    
    var li = `<li class='task'>${inputTarefa}</li>`;
    $(li).appendTo('ul');
    
    $('#newTask').val('');

    $('li').click(function () {
      $(this).addClass('del-li');
    });
  })

  $('li').click(function () {
    $(this).addClass('del-li');
  });
});