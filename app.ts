import express from "express";
const app = express();

require('dotenv').config();


//Servir contenido estático
app.use(express.static('dist/roadtrip/templated-roadtrip'));


app.get('/', function (req, res) {
  res.send("Hola Super Mundo");
})

app.get('/mundo', function (req, res) {
  res.send('Menudo  World');
})


app.get('/generic', function (req, res) {  
    res.sendFile(__dirname+'/roadtrip/templated-roadtrip/generic.html')
  })
  
  app.get('/elements', function (req, res) {  
    res.sendFile(__dirname+'/roadtrip/templated-roadtrip/elements.html')
  })

app.get('*', (req,res)=>{
    console.log('*');
    
    res.sendFile(__dirname+'/public/404.html');
})
 console.log(process.env.PORT);
 
app.listen(process.env.PORT);