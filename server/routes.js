import * as recipeController from './controllers/recipes';

module.exports = (app) => {
  /**
   * Modify A Recipe
   * @returns {object} A JSON object with the updated recipe data
   * @description An API route that allows a user to modify a recipe on platform
   */
  app.put('/api/recipes/:recipeId', recipeController.updateRecipe);
  /**
   * Add A Recipe
   * @returns {object} A JSON object with the id and url of the added recipe
   * @description An API route that allows a user add a recipe to the platform
   */
  app.post('/api/recipes', recipeController.createRecipe);
  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
};
