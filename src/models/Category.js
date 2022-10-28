const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    tableName: 'category',
    underscored: true,
  });

  CategoryTable.associate = (models) => {
    CategoryTable.hasMany(models.Post_Category, {
      foreignKey: 'category_id', as: 'posts_categories'
    });
  }

  return CategoryTable
}

module.exports = CategorySchema;
