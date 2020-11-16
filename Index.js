const server=require('express');
const CrudRoutes=require('../CrudOperations/Routers/crud.routes');
const PromisesRoutes=require('../CrudOperations/Routers/Async_Await.routes');
const cb=require('../CrudOperations/Routers/callback.routes');



const app=server();
const port=process.env.PORT || 5050;

app.use('/crud',CrudRoutes);
app.use('/promise',PromisesRoutes);
app.use('/callback',cb);



app.listen(5050,()=>console.log(`Server Is Running On :${port}`));