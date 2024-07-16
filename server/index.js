const express = require('express');
const app = express();
require('dotenv').config()
//
//app.use(express.static('dist'))
//npm run start

app.get('/' , (req, res)=>{
    res.send("hello Sushma")

})

app.get('/api/jokes' , function(req, res){
    const jokes = [
        {
            "id": 1,
            "title": "Atoms Joke",
            "content": "Why don’t scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "title": "Scarecrow Joke",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "title": "Skeletons Joke",
            "content": "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
            "id": 4,
            "title": "Spaghetti Joke",
            "content": "What do you call fake spaghetti? An impasta!"
        },
        {
            "id": 5,
            "title": "Snowman and Vampire Joke",
            "content": "What do you get when you cross a snowman and a vampire? Frostbite."
        },
        {
            "id": 6,
            "title": "Bicycle Joke",
            "content": "Why did the bicycle fall over? Because it was two-tired!"
        },
        {
            "id": 7,
            "title": "Elsa Balloon Joke",
            "content": "Why can’t you give Elsa a balloon? Because she will let it go."
        },
    ]

    res.status(200).send({msg:"read Funny jokes" , jokes})
})



app.get('/twitter' ,(req , res) =>{
    res.send("hiiiiiiiiiiiii")
})

app.listen(process.env.PORT , () =>{
    console.log(`My Backend App running  on ${process.env.PORT}`)
})

console.log("Sushma Landge")