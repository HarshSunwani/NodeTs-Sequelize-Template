import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import routes from "../src/api/routes/routes"
import config from "../src/config/variable";
import db from "./api/models/index"

const app = express();

app.use(helmet());
app.use('/api', routes);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: config.applicationurl, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(function (req: Request, res: Response, next: NextFunction) {
    if (req.headers["x-arr-ssl"] && !req.headers["x-forwarded-proto"]) {
        req.headers["x-forwarded-proto"] = "https";
    }
    return next();
});
app.set("trust proxy", 1);
app.set("view engine", "ejs");

const port = config.port;
app.listen(port, () => {
    console.info(`Server Started at: http://localhost:${port}/api`);
});

// db.sequelize.sync().then(() => {
//     console.info("Database Synced Successfully.");
// }
// ).catch((err: any) => {
//     console.error("Unable to sync database:", err);
// });