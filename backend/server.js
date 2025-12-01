//require: Node.js function to import packages 
const express = require('express'); //import express framework--> key
const cors = require('cors'); //CORS= tells express which origions (front end coming from: loacalhost:4200) its allowed to read

const exp = express();//calling express function -->srt eng
const PORT=2001;

//use: middleware
exp.use(cors()); //use-> method from express: for evry income request run it through cors first (directs it to filter)
exp.use(express.json()); //if inputs in JSON conv to javaScript 

//products 
let storage=null; //prodcust user picks =null until selected

const products =[
    {
        name: "Yellow hat",
        price: 400.56,
        image:"https://clipart-library.com/image_gallery/n1155739.jpg", //direct link: angular can load directly w/o downloade
        description:"High-quality yellow hat 💛 🎩from curious george: always stand out in a crowd 😏 (Monkey not included).",
        id:1
    },
    {
        name:"yellow tie with black dots",
        price: 250.23,
        image:"https://www.tiesplanet.com/images/van-buck-corn-yellow-navy-blue-bold-polka-dot-silk-designer-tie-p15069-37023_medium.jpg",
        description:"authentic tie 💛⚫👔  worn by the man himself 🤯🤯🤯",
        id:2

    },
    {
        name:"yellow pants + matching button down shirt",
        price: 923.99,
        image:"https://vignette.wikia.nocookie.net/curiousgeorge/images/f/f3/The_Man_with_the_Yellow_Hat.png/revision/latest?cb=20180216152313",
        description:"long sleeve, button down shirt 💛👔 + pants 💛👖(with complementary black belt) modeled by the man with the yellow hat 🤯",
        id:3

    },
    {
        name:"brown boots",
        price: 25.99,
        image:"https://i.ebayimg.com/images/g/YnUAAOSw~yRnLJwn/s-l1600.webp",
        description:"slightly used brown boots 🟫🩰",
        id:4

    },
    

];

//API endpoints 

//1.GET produts: frontend getting them from back
//send products 
exp.get('/api/products', (req, res)=>{ //response:give req:get
    console.log('Get 1...');
    res.json(products); //conv response from js->json
});

//2.POST: frontend sending data to back
//record what user picked
exp.post('/api/select-product', (req, res)=>{
    storage=req.body; //.body: built in express that stores data that cilent sends ( how express reads the data)= put in pickedPro 
    console.log('POST 2');
    res.json({message: 'product selected! 👌'});

});

//3.GET: conferm picked + sends product to front:pg2
exp.get('/api/selected-product', (req,res)=>{
    console.log('GET 3');
    if(storage){
        res.json(storage);
    }else{
        res.json({message:"no product selected 🛒"});
    }
});

//4.POST: 2.selected-> 4.ordered :pg2
//IMPORTANT: start->api->compomnet.ts->html check files in each method 
exp.post('/api/submit-order', (req, res)=>{
    const order=req.body; //puts selected product in order 
    console.log('POST 4');

    //confermation message
    res.json({message: "your item will be delivered soon! 📦 "});

});

//Start Server
exp.listen(PORT, ()=>{
    console.log('backend server running...')

});