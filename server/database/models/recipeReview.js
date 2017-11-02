
module.exports = (sequelize, DataTypes) => {
  const RecipeReview = sequelize.define('RecipeReview', {
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
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  RecipeReview.associate = (models) => {
    RecipeReview.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'RESTRICT',
    });

    RecipeReview.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'RESTRICT',
    });
  };

  return RecipeReview;
};
