import express from "express";
const app = express();

console.clear();




app.get("/", (request, response)=>{
    response.send("Hello World!");
});

app.listen(3000,() =>{
    console.log("O servidor esta rodando...");
});