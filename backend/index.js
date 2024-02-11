const express = require('express');
const app = express();
const {connectDB} = require('./config/db');
const bookRouter = require('./routes/bookRoutes');
require('dotenv').config();
const cors = require('cors');



connectDB();

//middlwares

//Allow all origins with default of cors (*)
app.use(express.json());

//Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

//Middleware for handling cors policy
app.use(cors());

const PORT = process.env.PORT || 5555
app.listen(PORT, () =>{
    console.log(`App is running successfully on port ${PORT}`);
});

//Router
app.use('/api/v1', bookRouter)


app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send("Welcome to MERN APP")
})