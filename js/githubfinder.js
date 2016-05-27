var apiKey = require('./../.env').apiKey;

exports.Git = function(){
};

exports.Git.prototype.getRepos = function(user, displayDataFunction){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    displayDataFunction(response.name);
    console.log(response);
  }).fail(function(error){
    $('#showUser').text("Error: Not Found");
  });
};

exports.Git.prototype.getReposImg = function(user, displayDataFunction){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    displayDataFunction(response.avatar_url);
  }).fail(function(error){
    $('#showUser').text("Error: Not Found");
  });
};
