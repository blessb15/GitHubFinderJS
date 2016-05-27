var apiKey = require('./../.env').apiKey;

exports.Git = function(){
};

exports.Git.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    var user = response;
    console.log(user);
  });
  return user;
};
