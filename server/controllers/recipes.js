import updatedRecipe from '../models/updatedRecipe';

module.exports = {
  updateRecipe(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(updatedRecipe());
  }
};
