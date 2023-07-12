require("dotenv").config();

const config = {
    port: process.env.PORT,
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
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        applicationurl: process.env.APPLICATION_URL,
        apiurl: process.env.API_URL,
        dialect: "mssql",
        emailUser: process.env.EMAIL_USER,
        emailPassword: process.env.EMAIL_PASSWORD,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        applicationurl: process.env.APPLICATION_URL,
        apiurl: process.env.API_URL,
        dialect: "mssql",
        emailUser: process.env.EMAIL_USER,
        emailPassword: process.env.EMAIL_PASSWORD,
    },
};

export default config;