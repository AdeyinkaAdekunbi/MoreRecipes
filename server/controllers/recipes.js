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
   
    res.status(200).send('I exist');
  },
  deleteRecipe(req, res) {
    // Return Dummy Data with HTTP NO CONTENT
    res.status(204).send();
  },
  
  getRecipes(req, res) {
    return db.Recipe.findAll()
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send(error));
  },
};
