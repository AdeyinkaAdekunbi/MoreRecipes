import newRecipe from '../models/newRecipe';
import updatedRecipe from '../models/updatedRecipe';
import allRecipes from '../models/allRecipes';
import sortedRecipes from '../models/sortedRecipes';

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
    const sortBy = req.query.sort;
    const orderBy = req.query.order;

    // Check if request has sort and order parameters 
    // and return dummy upvoted data
    if (sortBy && orderBy) {
      res.status(200).send(sortedRecipes(req.query));
    } else { // Unrecognised or No parameter is passed
      res.status(200).send(allRecipes());
    }
  }
};
