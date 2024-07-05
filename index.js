const express = require("express")

const imgeRouter=require("./imge")
const app=express();

app.use(imgeRouter)


app.listen(20000,()=>
   console.log(`server 20000 is connected`)
);