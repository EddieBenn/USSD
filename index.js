const express = require('express');
const dotenv = require('dotenv');
const ussdRoutes = require('./routes/ussd-route');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', ussdRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on Port:: ${PORT}`);
});