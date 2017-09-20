// config.js
const env = process.env.NODE_ENV;

const development = {
  app: {
    port: 3001
  },
  db: {
    url: "postgres://localhost:5432/jwt-app",
    logging: false,
    force: true
  }
};

const test = {
  app: {
    port: 3001
  },
  db: {
    url: "postgres://localhost:5432/jwt-app-test",
    logging: false,
    force: false
  }
};

const production = {
  db: {
    url: process.env.DB_URL,
    logging: false,
    force: false
  }
};

const config = {
  development,
  test,
  production
};

module.exports = config[env];
