'use strict';

module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    additionalNote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'RESTRICT',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  });

  Recipe.associate = function (models) {
    Recipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'RESTRICT'
    });
  };

  return Recipe;
};