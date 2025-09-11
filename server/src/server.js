const express = require('express');
const cors = require('cors');
//load env variables
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', //Tighten this in production
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
}));


//Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({status: 'OK', uptime: process.uptime()});
});
// API routes would go here
app.get('/api/message', (req, res) => {
    res.json({message: 'Hello from the server!'});
});
//404 handler
app.use((req, res) => {
    res.status(404).json({message: 'Not Found'});
});
//Global error handler
app.use((err, req, res,next)=>{
    console.error('server error:', err);
    res.status(500).json({message: 'Internal Server Error'});
});
// listen on port 5000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});