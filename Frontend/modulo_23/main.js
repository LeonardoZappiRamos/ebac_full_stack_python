$(document).ready(function(){
  
  const profileName = $('h2').text();
  const cURL = `https://api.github.com/users/${profileName.split('@')[1]}`;
  
  $.ajax({url: cURL, success: function (result){
    const foto = result.avatar_url;
    const seguidores = result.followers;
    const seguindo = result.following;
    const repos = result.public_repos;

    const listKey = ["Repositórios","Seguidores", "Seguindo"];
    const listValue = [repos, seguidores, seguindo];

    const profile = $('#profile-avatar').attr("src", foto);

    const attr = $('li');
    attr.each(function(i){
      const a = $(this).html(`<h4>${listKey[i]}</h4>${listValue[i]}`);
    })
  }})
})