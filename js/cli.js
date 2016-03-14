var journal = require('./journal.js').journal;
var prompt = require('prompt');
prompt.start();

prompt.get(['title', 'body'], function(err, result){
  console.log(' title: ' + result.title);
  console.log(' body: ' + result.body);
});
