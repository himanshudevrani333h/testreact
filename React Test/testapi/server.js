const express = require("express");

let data = require("./data.json");

const server = express();

let arr =[];
let arr2=[];


// console.log(arr);

server.get("/search", function(req,res){

data.map((el)=>{
    let dup = false;
    for( let i =0; i<arr.length; i++){
        if(arr[i].animal == el.animal)
          dup = true;
    }
    if(!dup)
    arr.push(el);  
})
 res.json(arr);
})



server.get("/dashboard", function(req,res){
    res.json(data);
})

server.get("/breed", function(req,res){
data.map((el)=>{
    let dup = false;
    for( let i =0; i<arr2.length; i++){
        if(arr2[i].breed == el.breed)
          dup = true;
    }
    if(!dup)
    arr2.push(el);  
})
 res.json(arr2);
})

server.listen(4000)