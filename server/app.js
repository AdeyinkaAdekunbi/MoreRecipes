import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

/** @returns {object} A JSON object containing the id and url of the added recipe
 * @description An API route that allows a user add a recipe to the platform
 */
app.post('/api/recipes', (req, res) => res.status(201).send({
  id: 1,
  url: '/api/recipes/1'
}));

export default app;