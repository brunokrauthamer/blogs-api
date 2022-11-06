const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });

  CategoryTable.associate = (models) => {
    CategoryTable.hasMany(models.PostCategory, {
      foreignKey: 'category_id', as: 'posts_categories'
    });
  }

  return CategoryTable
}

module.exports = CategorySchema;
