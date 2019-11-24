const express = require('express')
const csv=require('csvtojson')
const ejs = require('ejs')
let csvToJson = require('convert-csv-to-json');
var path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'assets')));
//set view engine
app.set('view engine','ejs');

app.get('/', function(req,res){
    const csvFilePath='weekly1.csv'
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    res.render(__dirname+'/views/home.ejs',{tabledata:jsonObj})
})
})


app.listen(7000,function(){
    console.log("app started")
})