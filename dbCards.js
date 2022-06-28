import mongoose from "mongoose";
const cardschema=mongoose.Schema({
    name:String,
    img:String
})

export default mongoose.model('cards',cardschema)