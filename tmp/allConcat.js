var rnal = require('./../js/journal.js');
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    event.preventDefault();
    var body = $('#body').val();
    var time = moment().format('MMMM Do YYYY, h:mm a');
    var output = new rnal.Journal(title,body);
    console.log(output);
      $('#journalPost').append("<li>" + title + "<p>" + time + "</p> </li> <p>" + body + "</p> <p>" + output.wordCount() + "</p>");
debugger;
  });
});




//
