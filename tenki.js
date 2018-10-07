

var RSS = "http://rss.weather.yahoo.co.jp/rss/days/4410.xml";

//モジュールの取り込み
var parseString = require('xml2js').parseString;
var request = require('request');

// RSSのダウンロード
request(RSS,function(err,response,body){
  if(!err && response.statusCode==200){
    analyzeRSS(body);
  }
});

// RSSを解析する
function analyzeRSS(xml){
  parseString(xml,function(err,obj){
    if(err){console.log(err);return;}
// 天気を表示
    var items = obj.rss.channel[0].item;
    for(var i in items){ 
    var item = items[i];
    console.log(item.title[0]);
  }
  });
}