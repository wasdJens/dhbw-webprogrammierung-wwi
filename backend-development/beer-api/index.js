import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './middlewares/logging.middleware.js';
import beerRouteController from './controllers/beer.controller.js';

const PORT = process.env.PORT || 8080;
const server = express();

// Setup Middlewares
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

// Setup Beer Controller
server.use('/api/v1', beerRouteController);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})