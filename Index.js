const server=require('express');
const app=server();
require("dotenv").config();

const CrudRoutes=require('../CrudOperations/Routers/crud.routes');
const PromisesRoutes=require('../CrudOperations/Routers/Async_Await.routes');
const cb=require('../CrudOperations/Routers/callback.routes');







const port=process.env.PORT || 5051;

app.use(server.static('public'));
app.use('/css',server.static(__dirname+'public/css'));

app.set('views','./views');
app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.render('Main',{value:'hey danish this working'});
});
app.get('/about',(req,res)=>{
    
    res.render('About');
});

app.get('/home',(req,res)=>{
    res.render('main',{value:'hey danish this working'});
});





app.use('/crud',CrudRoutes);
app.use('/promise',PromisesRoutes);
app.use('/callback',cb);



app.listen(5050,()=>console.log(`Server Is Running On :${port}`));