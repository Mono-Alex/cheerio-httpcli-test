
//casperオブジェクトを作成
var casper = require('casper').create();

//開始する
casper.start();

//ページを開く
casper.open('https://google.co.jp');
//casper.viewport(1600,800);
casper.userAgent('User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36');


//その後、スクショを撮影
casper.then(function(){
  casper.capture("screenshot.png");
});

//実行
casper.run();
