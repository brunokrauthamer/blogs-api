module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
  });

  UserTable.associate =  (models) => {
    UserTable.hasMany(models.Blog_Post,
      { foreignKey: 'user_id', as: 'blog_posts' });
  };
  return UserTable
}