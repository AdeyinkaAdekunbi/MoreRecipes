
module.exports = (sequelize, DataTypes) => {
  const upvotedRecipes = sequelize.define('upvotedRecipes',id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  recipeid: {
    type: Sequelize.INTEGER,
    forignKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    forignKey: true,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return upvotedRecipes;
};