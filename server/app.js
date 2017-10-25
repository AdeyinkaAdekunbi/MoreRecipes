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
/**
 * Modify A Recipe
 * @returns {object} A JSON object containing the updated data of the modified recipe
 * @description An API route that allows a user to modify a recipe on platform
 */
app.put('/api/recipes/:recipeId', (req, res) => res.status(200).send({
  id: 1,
  name: 'Updated Recipe Name',
  image: '[base_64_image]',
  ingredients: [{
    id: 1,
    name: 'Updated Ingredient One'
  },
  {
    id: 2,
    name: 'Updated Ingredient Two'
  },
  {
    id: 3,
    name: 'Updated Ingredient Three'
  }
  ],
  directions: [{
    id: 1,
    name: 'Updated Direction One'
  },
  {
    id: 2,
    name: 'Updated Direction Two'
  },
  {
    id: 3,
    name: 'Updated Direction Three'
  }
  ],
  additionalNotes: 'Additional Notes',
  upvotes: 1,
  downvotes: 0,
  favorited: false
}));
/**
 * Delete A Recipe
 * @description An API route that allows a user to delete a recipe from platform
 */
app.delete('/api/recipes/:recipeId', (req, res) => res.status(204).send());
export default app;