import * as recipeController from './controllers/recipes';
import * as reviewController from './controllers/reviews';

module.exports = (app) => {
  import * as recipeController from './controllers/recipes';

module.exports = (app) => {
  /**
   * Add A Recipe
   * @returns {object} A JSON object with the id and url of the added recipe
   * @description An API route that allows a user add a recipe to the platform
   */
  app.post('/api/recipes', recipeController.createRecipe);

  /**
   * Modify A Recipe
   * @returns {object} A JSON object with the updated recipe data
   * @description An API route that allows a user to modify a recipe on platform
   */
  app.put('/api/recipes/:recipeId', recipeController.updateRecipe);

  /**
   * Delete A Recipe
   * @description An API route that allows a user to delete a recipe
   */
  app.delete('/api/recipes/:recipeId', recipeController.deleteRecipe);  

  /**
  * Get All Recipes
  * @returns {array} A JSON array of recipes available on the platform
  * @description An API route that allows a user to get all recipes
  */
  app.get('/api/recipes', recipeController.getRecipes);

  /**
  * Post a review for recipe
  * @returns {object} A JSON object with the id and url of the review
  * @description An API route that allows a user to post review
  */
  app.post('/api/recipes/:recipeId/reviews', reviewController.createReview);

  /**
  * Get Recipes with the Most Upvotes
  * @returns  {array} A JSON array of recipes with the most upvotes
  * @description An API route for a user to get recipes with most upvotes
  */
  app.get('/api/recipes', recipeController.getMostUpvoted);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
}
};
