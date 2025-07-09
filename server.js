const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

app.use(middlewares);

// ✅ Define custom routes *before* the JSON router
app.get('/', (req, res) => {
  res.send('JSON Server is running!');
});

// ✅ Now use the router
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
