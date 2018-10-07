var fs =require('fs');


/*
console.log("mkdirを実行します");

fs.mkdirSync("test-sync");
console.log("mkdirを完了しました");
*/

if(!fs.existsSync("test3")){
  fs.mkdirSync("test3");
  console.log("test3を作成しました");
}else{
  console.log("test3はすでにあるので作成しません")
}

