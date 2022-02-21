import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoute from './routes/todos.js'

const app = express();
dotenv.config();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/todos', todosRoute)

const DB_CONNECTION = process.env.DB_CONNECTION;

app.get('/', (req, res) =>{
    res.send('Welcome Server is running');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(DB_CONNECTION).then(() =>{
    app.listen(PORT);
    console.log(`Server is running on port ${PORT}`);
}).catch(err => console.log(err));
