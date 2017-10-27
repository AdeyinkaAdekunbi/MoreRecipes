import allRecipes from '../models/allRecipes';

module.exports = {
  getRecipes(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(allRecipes());
  }
};
