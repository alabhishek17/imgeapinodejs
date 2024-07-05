const express=require("express");
const imgeRouter=express.Router();

const Data=[
    {
        id:1,
        //   imges:"http://localhost:10000/imges/apple.png"
        imges:"https://plus.unsplash.com/premium_photo-1669144690665-17dde1269f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
    },{
        id:2,
        imges:"https://unsplash.com/photos/a-black-sports-car-parked-on-the-side-of-the-road-k_mXu9nXkdA"
    },{
        id:3,
        imges:"https://unsplash.com/photos/a-wolf-laying-in-the-snow-with-its-eyes-closed-2e2slrmmEAw"
    },{
        id:4,
        imges:"https://unsplash.com/photos/a-small-house-in-the-middle-of-a-forest-VBjC2fiTQ1s"
    },{
        id:5,
        imges:"https://unsplash.com/photos/a-tall-building-sitting-on-top-of-a-lush-green-hillside-9ljhK9vPPB0"
    },{
        id:6,
        imges:"https://unsplash.com/photos/a-row-of-bikes-parked-next-to-each-other-_z-ApjSPYRc"
    }
]



imgeRouter.get("/imges",(req,res)=>{
    const randomimgindex=Math.floor(Math.random()*Data.length)
    res.json({
        success:true,
        message:"api feach",
        result:Data[randomimgindex]
    })
})

module.exports=imgeRouter