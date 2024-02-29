import express from "express";
//for configuring env file
import dotenv from "dotenv";

//for --dirname :-because it is not include in es ie. when we use type=module in package.json 
// we need this extra setup configuration
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";

//database connection function
import dbconnect from './db/index.js';

//middleware to get data from input field
import bodyParser from "body-parser";

const app=express();

dotenv.config();

//ejs file setup
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//config public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function (req,res) {
res.render('index');
    
});
app.get("/register",function(req,res)
{
    res.render('signup');
})
app.get("/login",function(req,res)
{
    res.render('login');
})
app.get("/logout",function(req,res)
{
    res.render('logout');
})

//listen on port
dbconnect()
.then(()=>
{
    app.listen(process.env.PORT || 3000,()=>
    {
        console.log(`port listen on ${process.env.PORT}`);
    });
})
.catch((err)=>
    {
        console.log("database connection error",err);
    })



//