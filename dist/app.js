"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
require('dotenv').config();
//Servir contenido estático
app.use(express_1.default.static('dist/roadtrip/templated-roadtrip'));
app.get('/', function (req, res) {
    res.send("Hola Super Mundo");
});
app.get('/mundo', function (req, res) {
    res.send('Menudo  World');
});
app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/roadtrip/templated-roadtrip/generic.html');
});
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/roadtrip/templated-roadtrip/elements.html');
});
app.get('*', (req, res) => {
    console.log('*');
    res.sendFile(__dirname + '/public/404.html');
});
console.log(process.env.PORT);
app.listen(process.env.PORT);
//# sourceMappingURL=app.js.map