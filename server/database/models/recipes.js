module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.STRING,
    },
    ingredients: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.STRING,
    },
    additionalnote: {
      allowNull: true,
      autoIncrement: true,
      type: DataTypes.STRING,
    },
  createdby: {
      allowNull: true,
      autoIncrement: true,
      type: DataTypes.STRING,
      foreignKey:true,
    },
     {
    classMethods: {
      recipes.associate = (models) => {
        recipes.belongsTo(models.users, {
          foreignKey: 'createdby',
        });
      },
     
  },

  return recipes;
  ),
};
