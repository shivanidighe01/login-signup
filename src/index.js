var Express=require('express');
const app=Express();
const path=require('path');

//ejs file setup
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//public folder-static files setup
app.use(Express.static(path.join(__dirname, 'public')));

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
app.listen(3000,()=>
{
    console.log("port listen on 3000");
});



//