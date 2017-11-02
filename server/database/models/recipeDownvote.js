
module.exports = (sequelize, DataTypes) => {
  const RecipeDownvote = sequelize.define('RecipeDownvote', {
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

  RecipeDownvote.associate = (models) => {
    RecipeDownvote.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'RESTRICT',
    });

    RecipeDownvote.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'RESTRICT',
    });
  };

  return RecipeDownvote;
};
