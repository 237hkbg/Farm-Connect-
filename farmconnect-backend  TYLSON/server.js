const express = require('express'); 
const app = express(); 
 
// Middleware 
app.use(express.json()); 
 
// Import auth routes 
const authRoutes = require('./routes/auth'); 
app.use('/api/auth', authRoutes); 
 
// Test route 
app.get('/', function(req, res) { 
  res.send('FarmConnect Server is Working! ??'); 
}); 
 
const PORT = 5000; 
app.listen(PORT, function() { 
  console.log('? Server running on port ' + PORT); 
}); 
