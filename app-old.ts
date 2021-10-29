import http from "http";
import dotenv from "dotenv";

dotenv.config();

http.createServer((req,res)=>{
    res.write("Hola Mundo");
    res.end();
}).listen(process.env.PORT);


