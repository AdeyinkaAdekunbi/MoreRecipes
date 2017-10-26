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
app.get('*/*/ ', (req, res) => res.status(200).send({
  message: 'Welcome to More Recipes.'
}));

/**
 * Add A Recipe
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
 /**
* Get All Recipes
* @returns {array} A JSON array of recipes available on the platform
* @description An API route that allows a user to get all recipes on the platform
*/
app.get('/api/recipes', (req, res) => res.status(200).send([{
 id: 1,
 name: 'Recipe Name',
 image: '[base_64_string]',
 ingredients: [{
   id: 1,
   name: 'Ingredient One'
 },
 {
   id: 2,
   name: 'Ingredient Two'
 },
 {
   id: 3,
   name: 'Ingredient Three'
 }
 ],
 directions: [{
   id: 1,
   name: 'Direction One'
 },
 {
   id: 2,
   name: 'Direction Two'
 },
 {
   id: 3,
   name: 'Direction Three'
 }
 ],
 additionalNotes: '',
 upvotes: 1,
 downvotes: 0,
 favorited: false
},
{
 id: 2,
 name: 'Second Recipe Name',
 image: '[base_64_string]',
 ingredients: [{
   id: 1,
   name: 'Ingredient One'
 },
 {
   id: 2,
   name: 'Ingredient Two'
 },
 {
   id: 3,
   name: 'Ingredient Three'
 }
 ],
 directions: [{
   id: 1,
   name: 'Direction One'
 },
 {
   id: 2,
   name: 'Direction Two'
 },
 {
   id: 3,
   name: 'Direction Three'
 }
 ],
 additionalNotes: 'Second Recipe',
 upvotes: 1,
 downvotes: 0,
 favorited: false
},
{
 id: 3,
 name: 'Third Recipe Name',
 image: '[base_64_string]',
 ingredients: [{
   id: 1,
   name: 'Ingredient One'
 },
 {
   id: 2,
   name: 'Ingredient Two'
 },
 {
   id: 3,
   name: 'Ingredient Three'
 }
 ],
 directions: [{
   id: 1,
   name: 'Direction One'
 },
 {
   id: 2,
   name: 'Direction Two'
 },
 {
   id: 3,
   name: 'Direction Three'
 }
 ],
 additionalNotes: 'Third Recipe',
 upvotes: 1,
 downvotes: 0,
 favorited: false
}
]));
/**
* post a review recipe
* @returns {object} A JSON object containing the id,url and reviews of the recipe
* @description An API route that allows a user to post reviews of recipe to the platform
*/
app.post('/api/recipes/:recipeId/reviews' ,(req, res) => res.status(201).send({
 id: 1,
 url: '/api/recipes/1/reviews'
}));

/**
* Get Recipes with the Most Upvotes
* @returns  {array} A JSON array of recipes with the most upvotes
* @description An API route that allows a user to get all recipes with the most upvotes
*/
app.get('/api/recipes?sort=upvotes&order=des', (req, res) => res.status(200).send([{
 id: 2,
 name: 'Recipe Name',
 image: '[base_64_string]',
 ingredients: [{
   id: 1,
   name: 'Ingredient One'
 },
 {
   id: 2,
   name: 'Ingredient Two'
 },
 {
   id: 3,
   name: 'Ingredient Three'
 }
 ],
 directions: [{
   id: 1,
   name: 'Direction One'
 },
 {
   id: 2,
   name: 'Direction Two'
 },
 {
   id: 3,
   name: 'Direction Three'
 }
 ],
 additionalNotes: '',
 upvotes: 9,
 downvotes: 0,
 favorited: false
},
{
 id: 1,
 name: 'Second Recipe Name',
 image: '[base_64_string]',
 ingredients: [{
   id: 1,
   name: 'Ingredient One'
 },
 {
   id: 2,
   name: 'Ingredient Two'
 },
 {
   id: 3,
   name: 'Ingredient Three'
 }
 ],
 directions: [{
   id: 1,
   name: 'Direction One'
 },
 {
   id: 2,
   name: 'Direction Two'
 },
 {
   id: 3,
   name: 'Direction Three'
 }
 ],
 additionalNotes: 'Second Recipe',
 upvotes: 3,
 downvotes: 0,
 favorited: false
},
{
 id: 7,
 name: 'Third Recipe Name',
 image: '[base_64_string]',
 ingredients: [{
   id: 1,
   name: 'Ingredient One'
 },
 {
   id: 2,
   name: 'Ingredient Two'
 },
 {
   id: 3,
   name: 'Ingredient Three'
 }
 ],
 directions: [{
   id: 1,
   name: 'Direction One'
 },
 {
   id: 2,
   name: 'Direction Two'
 },
 {
   id: 3,
   name: 'Direction Three'
 }
 ],
 additionalNotes: 'Third Recipe',
 upvotes: 2,
 downvotes: 0,
 favorited: false
}
]));

export default app;
