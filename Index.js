const server=require('express');
const CrudRoutes=require('../CrudOperations/Routers/crud.routes');



const app=server();
const port=process.env.PORT || 5050;

app.use('/crud',CrudRoutes);



app.listen(5050,()=>console.log(`Server Is Running On :${port}`));