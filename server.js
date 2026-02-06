const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Enable CORS with specific options if needed, or default to all
// Enable CORS explicitly for all origins
server.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

server.use(jsonServer.bodyParser);
server.use(middlewares);

// Custom routes or middleware can be added here if needed

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
