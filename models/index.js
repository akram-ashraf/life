const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
require("dotenv").config()

const basename = path.basename(__filename);

const db = {};
const host_a = process.env.MYSQL_HOST;
const port_a = process.env.MYSQL_PORT;


console.log(process.env.MYSQL_USER)
const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: host_a,
    dialect: "mysql",
    port: port_a,
    freezeTableName: true,
  }
);

// loops through each file in models folder and associates them if association exists
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(async (file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // if (model.name == "user") {
    await model.sync({alter:true});
    // }
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//establishes the connection with db
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database.", `${err}`);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
