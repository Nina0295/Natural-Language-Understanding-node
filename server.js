require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const credentials = require('./middleware/credentials');

const PORT = process.env.PORT || 3500;

//Queries will allow additional fields that are not defined in the schema
mongoose.set('strictQuery', false);

//Connect to MongoDB
connectDB();

//Handle options credentials check - before CORS
//and fetch cookies credentials requirement
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

//built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

//built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false}));

//routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use('/text/emotion', require('./routes/analyzeTextEmotion'));
app.use('/text/sentiment', require('./routes/analyzeTextSentiment'));
app.use('/url/emotion', require('./routes/analyzeUrlEmotion'));
app.use('/url/sentiment', require('./routes/analyzeUrlSentiment'));

app.use(verifyJWT);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
