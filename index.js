const express = require('express');
const app = express();


app.post('/getData', (req, res) => {
    console.log("hello");
    console.log("req" , req);

    res.send("received data");
})

app.get("/", (req,res) => {
    console.log("welcome to the app");

    res.send("Yes its working");
})


app.listen(3000, () => {
    console.log("app is running");
})