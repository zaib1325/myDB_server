const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('✅ JSON Server is running! Visit /api/Contacts');
});

// 🔥 BIND TO 0.0.0.0 (IMPORTANT FOR DEPLOYMENT)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
