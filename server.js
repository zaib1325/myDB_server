const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.use(jsonServer.defaults());
app.use('/api', jsonServer.router(path.join(__dirname, 'db.json')));

app.get('/', (req, res) => {
  res.send('✅ Server is live! Visit /api/Contacts');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
