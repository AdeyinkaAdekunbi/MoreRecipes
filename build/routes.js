'use strict';

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _recipes = require('./controllers/recipes');

var recipeController = _interopRequireWildcard(_recipes);

var _reviews = require('./controllers/reviews');

var reviewController = _interopRequireWildcard(_reviews);

var _updateRecipe = require('./validations/updateRecipe');

var _updateRecipe2 = _interopRequireDefault(_updateRecipe);

var _reviewRecipe = require('./validations/reviewRecipe');

var _reviewRecipe2 = _interopRequireDefault(_reviewRecipe);

var _deleteRecipe = require('./validations/deleteRecipe');

var _deleteRecipe2 = _interopRequireDefault(_deleteRecipe);

var _newRecipe = require('./validations/newRecipe');

var _newRecipe2 = _interopRequireDefault(_newRecipe);

var _userController = require('./controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _signin = require('./validations/signin');

var _signin2 = _interopRequireDefault(_signin);

var _signup = require('./validations/signup');

var _signup2 = _interopRequireDefault(_signup);

var _auth = require('./middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const userCon = new userController();
// const recipesCon = new recipeController();

module.exports = function (app) {
  /**
   * user sign up
   * @returns {object} A JSON object with a success message
   * @description An API route that allows a user register to the endpoint
   */
  app.post('/api/v1/users/signup', (0, _expressValidation2.default)(_signup2.default), _userController2.default.signup);
  /**
   * user sign in
   * @returns {object} A JSON object with a token
   * @description An API route that allows a user to login to the platform
   */
  app.post('/api/v1/users/signin', (0, _expressValidation2.default)(_signin2.default), _userController2.default.signin);
  /**
   * Add A Recipe
   * @returns {object} A JSON object with the id and name of the added recipe
   * @description An API route that allows a user add a recipe to the platform
   */
  app.post('/api/v1/recipes', _auth2.default, (0, _expressValidation2.default)(_newRecipe2.default), recipeController.createRecipe);
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
  app.put('/api/v1/recipes/:recipeId', _auth2.default, (0, _expressValidation2.default)(_updateRecipe2.default), recipeController.updateRecipe);

  /**
   * Delete A Recipe
   * @description An API route that allows a user to delete a recipe
   */
  app.delete('/api/v1/recipes/:recipeId', (0, _expressValidation2.default)(_deleteRecipe2.default), recipeController.deleteRecipe);

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
  app.post('/api/v1/recipes/:recipeId/reviews', (0, _expressValidation2.default)(_reviewRecipe2.default), reviewController.createReview);

  /**
  * Get Recipes with the Most Upvotes
  * @returns  {array} A JSON array of recipes with the most upvotes
  * @description An API route for a user to get recipes with most upvotes
  */
  app.get('/api/v1/recipes', recipeController.getRecipes);

  /**
   * @description API route to catch all unregistered GET calls
   */
  app.get('/', function (req, res) {
    return res.status(200).send({
      message: 'Welcome to More Recipes.'
    });
  });
};