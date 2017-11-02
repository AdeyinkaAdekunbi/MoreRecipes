
module.exports = (sequelize, DataTypes) => {
  const recipeReviews = sequelize.define('recipeReviews', {
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
    recipeid: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
      autoIncrement: true,
    },
  });
  return recipeReviews;
};
