require("dotenv").config();

const environmentVariables = {
    env: process.env.NODE_ENV,
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        applicationurl: process.env.APPLICATION_URL,
        apiurl: process.env.API_URL,
        dialect: "mssql",
        emailUser: process.env.EMAIL_USER,
        emailPassword: process.env.EMAIL_PASSWORD,
        fromEmail: process.env.FROM_EMAIL,
    },
    production: {
        username: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASS,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOST,
        applicationurl: process.env.PROD_APPLICATION_URL,
        apiurl: process.env.PROD_API_URL,
        dialect: "mssql",
        emailUser: process.env.PROD_EMAIL_USER,
        emailPassword: process.env.PROD_EMAIL_PASSWORD,
    },
};

const config = environmentVariables.env === "development"
? environmentVariables.development
: environmentVariables.production;

export const ports = environmentVariables.env === "development"
? process.env.DEV_PORT
: process.env.PROD_PORT;

export default config;