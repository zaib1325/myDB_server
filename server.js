const express = require('express');
const jsonServer = require('json-server');
const app = express();
const port = process.env.PORT || 3000;
// Middleware for JSON Server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use('/api', router); // Access API at /api/Contacts, etc.
app.get('/', (req, res) => {
    res.send('Welcome to My DB Server API. Visit /api/Contacts');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});