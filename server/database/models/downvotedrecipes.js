module.exports = (sequelize, DataTypes) => {
  const downvotedRecipes = sequelize.define('downvotedRecipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    recipeId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return downvotedRecipes;
};
