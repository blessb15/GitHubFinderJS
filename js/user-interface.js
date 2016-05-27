var Git = require('./../js/githubfinder.js').Git;

$(document).ready(function() {
  var git = new Git();
  $('#userFind').click(function() {
    var user = $('#user').val();
    var newUser = git.getRepos(user);
    console.log(newUser);
    $("#showUser").text(newUser);
  });
});
