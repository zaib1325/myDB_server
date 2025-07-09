const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// ✅ Use Railway-assigned port
const PORT = process.env.PORT || 3001;

app.use(middlewares);
app.use(router);

app.get('/', (req, res) => {
  res.send('JSON Server is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
