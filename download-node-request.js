//うまくいかない＞＜

var request = require('request');
var fs = require('fs');

//var url = "https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C";

var url = 'http://kujirahand.com/';
var savepath = "test2.html";

require(url).pipe(fs.createWriteStream(savepath));