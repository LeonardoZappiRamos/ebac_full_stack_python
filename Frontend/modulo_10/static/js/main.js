$(document).ready(() => {


  $('#cpf').mask('000.000.000-00', {
    placeholder: "000.000.000.00",
    reverse: true,
    onComplete: () => {
      $('#cpf').addClass('marked');
      },
      onKeyPress: function(){
        $('#cpf').removeClass('marked');
      },
  });

  $('#cep').mask('00000-000', {
    placeholder: "00000-000", 
    onComplete: () => {
    $('#cep').addClass('marked');
    },
    onKeyPress: function(){
      $('#cep').removeClass('marked');
    },
  });

  $('#tell').mask('(00) 00000-0000', {
    placeholder: "(00) 00000-0000",
    onComplete: () => {
      $('#tell').addClass('marked');
    },
    onKeyPress: function(){
      $('#tell').removeClass('marked');
    },
  });

  $('form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      address: {
        required: true,
      },
    }
  });

  $('form').submit((event) => {
      event.preventDefault();

      const name = $('#name').val();
      const email = $('#email').val();
      const tell = $('#tell').val();
      const cpf = $('#cpf').val();
      const address = $('#address').val();
      const cep = $('#cep').val();

      $(console.log(`${name},${email}, ${tell}, ${cpf}, ${address}, ${cep}`));    
  });
})