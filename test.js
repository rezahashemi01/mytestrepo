var fs = require('fs');

var dirPath = "./";
var fileName = "message.txt";
var fileContent = "hello node";
var file = dirPath + fileName;

var exists = fs.existsSync(dirPath + fileName);
if(exists)
is_file = (fs.statSync(dirPath + fileName)).isFile();

if(!exists || !is_file)
fs.writeFile(file, fileContent, 'utf8', function(err){
if(err) throw err;
console.log(file + " successfully saved!");
});