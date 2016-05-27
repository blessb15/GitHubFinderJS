var Git = require('./../js/githubfinder.js').Git;

var displayData = function(response) {
  $('#showUser').text(response);
};

$(document).ready(function() {
  var gitObject = new Git();
  $('#userFind').click(function() {
    var user = $('#user').val();
    var userName = gitObject.getRepos(user, displayData);
    var userImg = gitObject.getReposImg(user, displayData);
    // $("#showImg").text("<img src='" + userImg + "'/>");
    $("#showUser").text(userName);
  });
});
