'use strict';

var _index = require('../database/models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  createRecipe: function createRecipe(req, res) {
    // Return Dummy Data with HTTP CREATED
    console.log(req.AuthUser);
    _index2.default.Recipe.create({
      name: req.body.name,
      description: req.body.description,
      additionalNote: req.body.additionalNote,
      ingredients: req.body.ingredients,
      userId: req.AuthUser.id
    }).then(function (newRecipe) {
      res.status(201).send(newRecipe);
    });
  },
  updateRecipe: function updateRecipe(req, res) {

    // Return Dummy Data with HTTP OK

    res.status(200).send('I exist');
  },
  deleteRecipe: function deleteRecipe(req, res) {
    // Return Dummy Data with HTTP NO CONTENT
    res.status(204).send();
  },
  getRecipes: function getRecipes(req, res) {
    return _index2.default.Recipe.findAll().then(function (recipes) {
      return res.status(200).send(recipes);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  }
};