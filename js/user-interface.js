var GitHubFinder = require('./githubfinder.js').GitHubFinder;

var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#userFind').click(function() {
    var user = $('#user').val();
    
    exports.getRepos = function(){
      $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    });
  });
});
