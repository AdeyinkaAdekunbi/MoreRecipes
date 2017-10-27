import * as recipeController from './controllers/recipes';

module.exports = (app) => {
  /**
  * Get All Recipes
  * @returns {array} A JSON array of recipes available on the platform
  * @description An API route that allows a user to get all recipes
  */
  app.get('/api/recipes', recipeController.getRecipes);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
};
