var Git = require('./../js/githubfinder.js').Git;

var displayName = function(response) {
  $('#showUser').html("<h3>" + response + "</h3>");
};

var displayImg = function(response) {
  $('#showImg').html('<img src="' + response + '" width="150px" class="round"/>');
};

$(document).ready(function() {
  var gitObject = new Git();
  $('#userFind').click(function() {
    var user = $('#user').val();
    var userName = gitObject.getRepos(user, displayName);
    var userImg = gitObject.getReposImg(user, displayImg);
  });
});
