const express = require('express')
const mongoose = require('mongoose')
const dotenv = require ('dotenv').config();
const cors = require('cors');

const app = express();


app.use(express.json());
//Port
const PORT = process.env.PORT  || 5500;


app.use(cors());


const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(error => console.log(error))



app.use('/', TodoItemRoute);










app.listen(PORT, () => console.log("Server connected"));