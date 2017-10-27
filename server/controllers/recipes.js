import allRecipes from '../models/allRecipes';
import sortedRecipes from '../models/sortedRecipes';

module.exports = {
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
