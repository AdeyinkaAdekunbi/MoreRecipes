'use strict';

module.exports = function (sequelize, DataTypes) {
  var FavouriteRecipe = sequelize.define('FavouriteRecipe', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    recipeId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  });

  FavouriteRecipe.associate = function (models) {
    FavouriteRecipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'RESTRICT'
    });

    FavouriteRecipe.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'RESTRICT'
    });
  };

  return FavouriteRecipe;
};