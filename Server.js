import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors'
//add config
const app=express();
const port=process.env.PORT || 8001 ;
const Connections=`mongodb+srv://admin1:vayze$L*8h5jUK.@cluster0.zysqch6.mongodb.net/?retryWrites=true&w=majority`



//middle wares
app.use(express.json());
app.use(Cors());


//db config
mongoose.connect(Connections,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
    
    
}). catch(error => handleError(error));

//api endpoints 
app.get('/',(req,res)=>{
    res.status(200).send("Hello ravi this will work well ")
});
app.post('/tinder/card',(req,res)=>{
    const dbcard=req.body;
    Cards.create(dbcard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});
//listner 
app.listen(port,()=> console.log(`listening on localhost : ${port}`))