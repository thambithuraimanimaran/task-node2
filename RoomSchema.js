const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const createroom = new mongoose.Schema({
    Numberofseat : {type:Number,required:true},
    Amenities : {type:Array,required:true},
    PriceFor1Hour:{type:Number,required:true},
    CustomerName : {type:String},
    Date : {type:String},
    StartTime : {type:String},
    EndTime : {type:String},
    RoomID : {type:Number},
    RoomName: {type:String},
    BookedStatus : {type:Boolean,default:false}
})

const appendRoom = mongoose.model("Hall",createroom);
module.exports = {appendRoom}