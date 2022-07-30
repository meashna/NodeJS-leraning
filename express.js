/*const express=require("express");
const app= express();
//const path=require ("path");

app.use(express.static('views'))

app.get("/",(req ,res)=>{
    res.sendFile(path.join(__dirname , "views" , "contact.html"));
});

app.get("*",(req ,res)=>{
    res.status(404).send("404")
    res.send("GOOD");
});

const PORT=process.env.PORT||5000;

app.listen(PORT,() => console.log(`Server running in ${PORT}`))*/