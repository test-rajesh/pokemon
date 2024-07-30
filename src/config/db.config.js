module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "mydb",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "your_db_username",
    password: "your_db_password",
    database: "your_test_db_name",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "your_db_username",
    password: "your_db_password",
    database: "your_production_db_name",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
