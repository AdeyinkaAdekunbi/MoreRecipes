import db from '../database/models/index';

module.exports = {
  createRecipe(req, res) {
    // Return Dummy Data with HTTP CREATED
    console.log(req.AuthUser);
    db.Recipe.create({
      name: req.body.name,
      description: req.body.description,
      additionalNote: req.body.additionalNote,
      ingredients: req.body.ingredients,
      userId: req.AuthUser.id
    }).then((newRecipe) => {
      res.status(201).send(newRecipe);
    });
  },
  updateRecipe(req, res) {

    // Return Dummy Data with HTTP OK
    db.Recipe.findById(req.param.id)
    res.status(200).send('I exist');
  },
  deleteRecipe(req, res) {
    // Return Dummy Data with HTTP NO CONTENT
    res.status(204).send();
  },
  getRecipes(req, res) {
    const sortBy = req.query.sort;
    const orderBy = req.query.order;

    // Check if request has sort and order parameters,
    // and return dummy upvoted data
    if (sortBy && orderBy) {
      res.status(200).send(sortedRecipes(req.query));
    } else { // Unrecognised or No parameter is passed
      res.status(200).send(allRecipes());
    }
  },
};
