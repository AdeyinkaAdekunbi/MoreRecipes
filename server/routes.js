import validate from 'express-validation';
import * as reviewController from './controllers/reviews';
import reviewRecipe from './validations/reviewRecipe';

module.exports = (app) => {
  /**
  * Post a review for recipe
  * @returns {object} A JSON object with the id and url of the review
  * @description An API route that allows a user to post review
  */
  app.post('/api/recipes/:recipeId/reviews', validate(reviewRecipe), reviewController.createReview);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes.',
  }));
};
