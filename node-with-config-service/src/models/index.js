const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    dialect: "mysql",
    host: config.mysql.host,
    port: config.mysql.port
  }
);

class Book extends Model {}
Book.init(
  {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    publishedDate: DataTypes.DATE
  },
  { sequelize, modelName: "book" }
);

sequelize.sync().then(async () => {
  const bookCount = await Book.count();

  if (bookCount > 0) {
    return;
  }

  Book.bulkCreate([
    {
      name: "The Book of Five Rings",
      author: "Miyamoto Musashi",
      publishedDate: new Date(1645, 0, 1)
    },
    {
      name: "The Art of War",
      author: "Sun Tzu",
      // Right, I know this was published in BC, but mysql doesn't handle that!
      publishedDate: new Date(500, 0, 1)
    },
    {
      name: "Language in Thought and Action",
      author: "S. I. Hayakawa",
      publishedDate: new Date(1949, 0, 1)
    }
  ]);
});

module.exports.Book = Book;
