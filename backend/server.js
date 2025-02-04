require('dotenv').config();  
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));

app.use(express.json());


connectDB();


app.use('/api', userRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
