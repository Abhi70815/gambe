const express= require('express');

const mongoose =require('mongoose');
const router = require('./routes/gameRoute')
const dotenv= require('dotenv')



const app= express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("database connected"))


app.use(express.json())
app.set('view engine','ejs')


app.use(router)

app.get('/',(req,res)=>{
    res.render('addGame')
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000 ");
})
