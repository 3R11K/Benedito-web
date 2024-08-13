//create a express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const eventsRoutes = require('./routes/events.js');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/events', eventsRoutes);

//port
const port = process.env.PORT || 8000;

//starting a server

app.listen(port, () => {
    console.log(`App is running at ${port}`);
    }
);