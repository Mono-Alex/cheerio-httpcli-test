
var parseString = require('xml2js').parseString;

var xml = "<item>Banana</item>";

//XMLをパースする
parseString(xml,function(err,result){
  console.log(result.item);
});