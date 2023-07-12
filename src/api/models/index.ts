import { Sequelize } from "sequelize";
import config from "../../config/variable"

const db: any = {};

const sequelize = new Sequelize(
    config.database as string,
    config.username as string,
    config.password,
    config as object
);

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
    .authenticate()
    .then(() => {
        console.info("Database Connected successfully.");
    })
    .catch((err: any) => {
        console.error("Unable to connect to the database:", err);
    });

export default db;
export { sequelize };
