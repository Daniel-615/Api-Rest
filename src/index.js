const express= require('express');
const app =express();
const path=require('path')

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/index'));

const puerto=3000; 
app.listen(puerto);
console.log(`Server on port ${puerto}`);

//enviar html
app.get('/Html', (request,response)=>{
    response.sendFile(path.resolve(__dirname,'index.html'))
})
