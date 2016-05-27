var Git = require('./../js/githubfinder.js').Git;

var displayName = function(response) {
  $('#showUser').html("<h3>" + response + "</h3><hr>");
};

var displayImg = function(response) {
  $('#showImg').html('<img src="' + response + '" width="150px" class="round"/>');
};

var displayRepos = function(response) {
  $('#showRepos').html("Public Repos: " + response + "");
};

$(document).ready(function() {
  var gitObject = new Git();
  $('#userFind').click(function() {
    var user = $('#user').val();
    var userName = gitObject.getReposName(user, displayName);
    var userImg = gitObject.getReposImg(user, displayImg);
    var userRepos = gitObject.getRepos(user, displayRepos);
  });
});
