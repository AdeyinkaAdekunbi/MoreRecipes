import validate from 'express-validation';
import * as recipeController from './controllers/recipes';
import * as reviewController from './controllers/reviews';
import updateRecipe from './validations/updateRecipe';
import reviewRecipe from './validations/reviewRecipe';
import deleteRecipe from './validations/deleteRecipe';
import newRecipe from './validations/newRecipe';
import userController from './controllers/userController';
import signin from './validations/signin';
import signup from './validations/signup';
import authMiddleware from './middleware/auth';
// const userCon = new userController();
// const recipesCon = new recipeController();

module.exports = (app) => {
  /**
   * user sign up
   * @returns {object} A JSON object with a success message
   * @description An API route that allows a user register to the endpoint
   */
  app.post('/api/v1/users/signup', validate(signup), userController.signup);
  /**
   * user sign in
   * @returns {object} A JSON object with a token
   * @description An API route that allows a user to login to the platform
   */
  app.post('/api/v1/users/signin', validate(signin), userController.signin);
  /**
   * Add A Recipe
   * @returns {object} A JSON object with the id and name of the added recipe
   * @description An API route that allows a user add a recipe to the platform
   */
  app.post('/api/v1/recipes', authMiddleware, validate(newRecipe), recipeController.createRecipe);
  /**
   * Add A Recipe
   * @returns {object} A JSON object with the id and url of the added recipe
   * @description An API route that allows a user add a recipe to the platform
   */
  // app.post('/api/v1/recipes', validate(newRecipe), recipeController.createRecipe);

  /**
   * Modify A Recipe
   * @returns {object} A JSON object with the updated recipe data
   * @description An API route that allows a user to modify a recipe on platform
   */
  app.put('/api/v1/recipes/:recipeId', authMiddleware, validate(updateRecipe),
    recipeController.updateRecipe);

  /**
   * Delete A Recipe
   * @description An API route that allows a user to delete a recipe
   */
  app.delete('/api/v1/recipes/:recipeId', validate(deleteRecipe),
    recipeController.deleteRecipe);

  /**
  * Get All Recipes
  * @returns {array} A JSON array of recipes available on the platform
  * @description An API route that allows a user to get all recipes
  */
  app.get('/api/v1/recipes', recipeController.getRecipes);

  /**
  * Post a review for recipe
  * @returns {object} A JSON object with the id and url of the review
  * @description An API route that allows a user to post review
  */
  app.post('/api/v1/recipes/:recipeId/reviews', validate(reviewRecipe),
    reviewController.createReview);

  /**
  * Get Recipes with the Most Upvotes
  * @returns  {array} A JSON array of recipes with the most upvotes
  * @description An API route for a user to get recipes with most upvotes
  */
  app.get('/api/v1/recipes', recipeController.getRecipes);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
};
