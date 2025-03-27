const express = require('express');

const router = express.Router();

const Game = require('../model/gameModel')

router.post('/addgame',async(req,res)=>{
    try{
        const {name, image,category, Url} =req.body;
       let geme= await new Game({name,image,category,Url}).save()
        res.send("Game added success");
    } catch(err){
        console.error(err.message);
    }
 
});

router.get('/games',async(req,res)=>{
    try{
      let games=  await Game.find();
      res.status(200).json(games);
    } catch(err){
        console.error(err.message);
    }
})


module.exports=router;