const jsonServer = require('json-server');
const path = require('path');

const PORT = process.env.PORT || 3000;
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const app = jsonServer.create();
app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
  console.log(`JSON Server alone is running on port ${PORT}`);
});
