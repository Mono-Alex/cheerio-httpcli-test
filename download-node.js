//urlにあるファイルをsavepathにダウンロードする

var url = "http://agora.ex.nii.ac.jp/earthquake/intensity/";

var savepath = "test.html";

var http = require('http');

var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url,function(res){
  res.on('end',function(){
    outfile.close();
    console.log("ok");
  });
});