import newRecipe from '../models/newRecipe';
import updatedRecipe from '../models/updatedRecipe';

module.exports = {
  createRecipe(req, res) {
    // Return Dummy Data with HTTP CREATED
    res.status(201).send(newRecipe());
  },
  updateRecipe(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(updatedRecipe());
  }
};
