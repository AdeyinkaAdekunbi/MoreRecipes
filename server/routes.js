import * as recipeController from './controllers/recipes';

module.exports = (app) => {
  /**
  * Get Recipes with the Most Upvotes
  * @returns  {array} A JSON array of recipes with the most upvotes
  * @description An API route for a user to get recipes with most upvotes
  */
  app.get('/api/recipes', recipeController.getRecipes);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
};
