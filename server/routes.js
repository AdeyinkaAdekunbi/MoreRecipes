import * as recipeController from './controllers/recipes';

module.exports = (app) => {
  /**
   * Delete A Recipe
   * @description An API route that allows a user to delete a recipe
   */
  app.delete('/api/recipes/:recipeId', recipeController.deleteRecipe);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
};
