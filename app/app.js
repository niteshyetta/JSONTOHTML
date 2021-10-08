const fs = require('fs');
try{
var jsonFile = 'file:///'+'/'+process.argv[2];
var jsonfilePathResolve =  jsonFile.replace(/\\/g, "/")

}catch(err){
    console.log('ERROR'+jsonfilePathResolve,err);
}
const htmlFile = "<head><script language='JavaScript' type='text/javascript' src='SpryData.js'></script>"+
"<script language='JavaScript' type='text/javascript' src='SpryJSONDataSet.js'></script>"+
"</head><script>	var dsExample10 = new Spry.Data.JSONDataSet('../../app/"+process.argv[2]+"', { path: 'items.item', subPaths: ['batters.batter', 'topping'] });</script>"+
"<div class='liveSample' spry:region='dsExample10'>	<table class='dataTable' border='2'>"+
"<tr><th spry:sort='id'>id</th><th spry:sort='type'>type</th><th spry:sort='name'>name</th>"+
"<th spry:sort='batters.batter.type'>batter</th><th spry:sort='topping.type'>topping</th>"+
"</tr><tr spry:repeat='dsExample10'><td>{id}</td><td>{type}</td><td>{name}</td><td>{batters.batter.type}</td>"+
"<td>{topping.type}</td></tr></table></div>";

fs.readFile(process.argv[2], 'utf-8',(err, fileData) => {
    if(err) {
        console.log('ERROR Reading JSON file '+process.argv[2])
    } else {
        try{
            const itemsData = JSON.stringify(fileData);
            
                fs.writeFile('../app/result/'+process.argv[3], htmlFile, (err) => {
                    if(err){
                        console.log('ERROR Writing file')
                    }else{
                        console.log('Done Write')
                    }
                });
            }catch(err){
            console.log('ERROR',err);
        }
    }
});
console.log('Done');

