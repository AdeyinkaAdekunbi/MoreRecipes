'use strict';

module.exports = function (sequelize, DataTypes) {
  var RecipeUpvote = sequelize.define('RecipeUpvote', {
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

  RecipeUpvote.associate = function (models) {
    RecipeUpvote.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'RESTRICT'
    });

    RecipeUpvote.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'RESTRICT'
    });
  };

  return RecipeUpvote;
};