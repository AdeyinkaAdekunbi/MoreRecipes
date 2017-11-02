module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('FavouriteRecipes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      recipeId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        references: {
          model: 'Recipes',
          key: 'id',
          as: 'recipeId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('FavouriteRecipes')
};
