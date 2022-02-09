const express = require("express");
const app = express();

app.get("/random/:min/:max",function(req,res){
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);

    if(isNaN(min) || isNaN(max)){
        res.status(400);
        res.json({error:"Bad Request"})
        return;
    }

    const result = Math.round(Math.random()*(max-min)+min);
    res.json({result:result});
})

app.listen(3000,function(){
    console.log("app started on port 3000");
})