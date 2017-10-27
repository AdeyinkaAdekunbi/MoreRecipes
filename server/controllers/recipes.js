import newRecipe from '../models/newRecipe';
import updatedRecipe from '../models/updatedRecipe';
import allRecipes from '../models/allRecipes';
import mostUpvotedRecipe from '../models/mostUpvotedRecipes';

module.exports = {
  createRecipe(req, res) {
    // Return Dummy Data with HTTP CREATED
    res.status(201).send(newRecipe());
  },
  updateRecipe(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(updatedRecipe());
  },
  deleteRecipe(req, res) {
    // Return Dummy Data with HTTP NO CONTENT
    res.status(204).send();
  },
  getRecipes(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(allRecipes());
  },
  getMostUpvoted(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(mostUpvotedRecipe(req.query));
  }
};
