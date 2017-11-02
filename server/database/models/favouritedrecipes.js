module.exports = (sequelize, DataTypes) => {
  const favouritedRecipes = sequelize.define('favouritedRecipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userid: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    recipeId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
  });
  return favouritedRecipes;
};
