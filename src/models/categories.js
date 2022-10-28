const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'category',
    underscored: true,
  });
  return CategoryTable
}

module.exports = CategorySchema;
