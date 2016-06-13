var Git = require('./../js/githubfinder.js').Git;

var displayName = function(response) {
  $('#showUser').html("<h3>" + response + "</h3><hr>");
};

var displayImg = function(response) {
  $('#showImg').html('<img src="' + response + '" width="150px" class="round"/>');
};

var displayRepos = function(response) {
  var i = 0;

  while(i <= response.length - 1){
    if (response[i].description.length < 1){
      response[i].description = "not provided";
    }
    console.log(response[17].description);
    $('#showRepos').append("<h5>Name: " + response[i].name + "</h5><h5>Description: " + response[i].description + "</h5><br>");
    i++;
  }
}

$(document).ready(function() {
  var gitObject = new Git();
  $('#userFind').click(function() {
    var user = $('#user').val();
    var userName = gitObject.getReposName(user, displayName);
    var userImg = gitObject.getReposImg(user, displayImg);
    var userRepos = gitObject.getRepos(user, displayRepos);
  });
});
