
const express = require("express");
const mongoose = require("mongoose");
const { appendRoom } = require("./RoomSchema");

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://tamilmaran35:Arulmani%40123@cluster0.rjzmpfm.mongodb.net/")
.then(()=>{
    console.log("work started")
})

app.post("/newroom",async(req,res)=>{

    const data = req.body
    const room = await appendRoom.findOne({RoomID:data.RoomID})
    console.log(room);
    if(!room){

    
    const table = await appendRoom.create(data)

    res.json({msg:"success added",table});
    }else{
        res.json({msg:"already available"});
    }
})

app.put("/BookingRoom",async(req,res)=>{
    const data1 = req.body

    const newdata = await appendRoom.findOne({RoomID:data1.RoomID})
    
    if(newdata.BookedStatus===false){
        const data = await appendRoom.findOneAndUpdate({RoomID:data1.RoomID},data1,)
        console.log(data);
        res.json({msg:"its working properly"})
    }
   else{
        res.json({msg:"Room Already Booked"});
    }   
})

app.get("/BookedList",async(req,res)=>{
   
    const newBookeddata = await appendRoom.find({BookedStatus:true})
    console.log(newBookeddata)
    res.json({msg:"booked rooms"})

})













app.listen(5000,()=>{
    console.log("working");
})