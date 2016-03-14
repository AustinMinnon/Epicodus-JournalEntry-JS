// var Journal = require('./../js/journal.js').Journal;
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    event.preventDefault();
    var body = $('#body').val();
    var time = moment().format('MMMM Do YYYY, h:mm a');

    // var journalPost = new Journal(title, body);
      $('#journalPost').append("<li>" + title + "<p>" + time + "</p> </li> <p>" + body + "</p>");

  });
});
