
var TARGET_URL = "https://kujirahand.com/wiki/";

var casper = require('casper').create();

casper.start(TARGET_URL,function(){
  this.echo(casper.getTitle());
});

casper.run();