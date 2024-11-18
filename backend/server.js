const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const categoryRoutes = require('./Routes/categoryRoute');
const productRoutes = require('./Routes/productRoute');



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://amadoubentediallo220:amadou0000@cluster0.y8hja.mongodb.net/')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));


// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
