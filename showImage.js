//モジュールの読み込み
var client = require('cheerio-httpcli');
var URL = require('url');

//ダウンロード
var url ="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C";
var param ={};

//モジュールで.fetch(url,param,function)
client.fetch(url,param,function(err,$,res){
  $("img").each(function(idx){
    var src = $(this).attr('src');
    src =URL.resolve(url,src);
    console.log(src);
  })
})