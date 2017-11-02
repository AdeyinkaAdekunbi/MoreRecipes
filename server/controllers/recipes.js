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
    return db.Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (recipe) {
          return recipe.update({
            name: req.body.name || recipe.name,
            description: req.body.description || recipe.description,
            additionalNote: req.body.additionalNote || recipe.additionalNote,
            ingredients: req.body.ingredients || recipe.ingredients,
          }).then(() => {
            return res.json('recipe updated');
          });
        } else {
          return res.status(404).json('Recipe not found');
        }
      }).catch(error => res.status(500).json(error.message));
  },
  deleteRecipe(req, res) {
    return db.Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (recipe) {
          if (recipe.userId !== req.AuthUser.id) {
            return res.status(400).json('no authorization to delete recipe');
          }
          return recipe.destroy().then(() => {
            return res.json('Recipe deleted successfully.');
          });
        } else {
          return res.status(404).json('Recipe was not found');
        }
      }).catch(error => res.status(500).json(error.message));
  },
  
  getRecipes(req, res) {
    return db.Recipe.findAll()
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send(error));
  },
};
