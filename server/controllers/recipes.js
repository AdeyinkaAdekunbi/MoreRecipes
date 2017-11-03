import db from '../database/models/index';

module.exports = {
  createRecipe(req, res) {
  // Return Data with HTTP CREATED
    db.Recipe.create({
      name: req.body.name,
      description: req.body.description,
      additionalNote: req.body.additionalNote,
      image: req.body.image,
      ingredients: req.body.ingredients,
      userId: req.AuthUser.id
    }).then((newRecipe) => {
      res.status(201).send(newRecipe);
    }).catch(error => res.status(400).send({
      message: error.errors[0].message // return the description of the first error object
    }));
  },
  updateRecipe(req, res) {
    return db.Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({ message: 'Recipe not found' });
        } else if (recipe) {
          if (recipe.userId !== req.AuthUser.id) {
            return res.status(400).json({ message: 'no authorization to modify recipe' });
          }
          return recipe.update({
            name: req.body.name || recipe.name,
            description: req.body.description || recipe.description,
            additionalNote: req.body.additionalNote || recipe.additionalNote,
            image: req.body.image || recipe.image,
            ingredients: req.body.ingredients || recipe.ingredients,
          }).then(() => res.status(200).json(recipe)
          ).catch(error => res.status(400).send({
            message: error.errors[0].message // return the description of the first error object
          }));
        }
      }).catch(error => res.status(500).json(error.message));
  },
  deleteRecipe(req, res) {
    return db.Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (recipe) {
          if (recipe.userId !== req.AuthUser.id) {
            return res.status(400).json({ message: 'no authorization to delete recipe' });
          }
          return recipe.destroy().then(() => res.status(204).json({ message: 'Recipe deleted successfully.' })
          );
        } else if (!recipe) {
          return res.status(404).json({ message: 'Recipe was not found' });
        }
      }).catch(error => res.status(500).json(error.message));
  },
  getRecipes(req, res) {
    return db.Recipe.findAll()
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send(error));
  },
};
