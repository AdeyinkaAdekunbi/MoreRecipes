module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipeReviews', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('recipeReviews');
  }
};