require('dotenv').config();

const environmentVariables = {
  env: process.env.NODE_ENV,
  development: {
    database: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      options: {
        host: process.env.DB_HOST,
        dialect: 'mssql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
          acquire: 30000,
        },
      },
    },
    port: process.env.DEV_PORT,
    applicationurl: process.env.APPLICATION_URL,
    apiurl: process.env.API_URL,
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    fromEmail: process.env.FROM_EMAIL,
  },
  production: {
    database: {
      username: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PASS,
      database: process.env.PROD_DB_NAME,
      options: {
        host: process.env.PROD_DB_HOST,
        dialect: 'mssql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
          acquire: 30000,
        },
      },
    },
    port: process.env.PROD_PORT,
    applicationurl: process.env.PROD_APPLICATION_URL,
    apiurl: process.env.PROD_API_URL,
    emailUser: process.env.PROD_EMAIL_USER,
    emailPassword: process.env.PROD_EMAIL_PASSWORD,
  },
};

const config =
  environmentVariables.env === 'development'
    ? environmentVariables.development
    : environmentVariables.production;

export default config;
