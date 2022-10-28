module.exports = (sequelize, DataTypes) => {
  const Blog_Post = sequelize.define('Blog_Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  Blog_Post.associate = (models) => {
    Blog_Post.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users'})
  };

  return Blog_Post;
};