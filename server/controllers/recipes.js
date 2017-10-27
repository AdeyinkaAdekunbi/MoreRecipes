import mostUpvotedRecipe from '../models/mostUpvotedRecipes';

module.exports = {
  getMostUpvoted(req, res) {
    // Return Dummy Data with HTTP OK
    res.status(200).send(mostUpvotedRecipe(req.query));
  }
};
