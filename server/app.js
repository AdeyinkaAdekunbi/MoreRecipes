import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Pass app context to our routes for route mapping
routes(app);

export default app;
