$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    event.preventDefault();
    var body = $('#body').val();

    var output = journal(title, body);
    output.forEach(function(element){
      $('#journalPost').append("<li>" + element + "</li>");
    });
  });
});
