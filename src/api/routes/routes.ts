import express, { Request, Response } from 'express';
import multerRoute from './multer';

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.send("Welcome to DEMO API Integration");
});

router.use('/multer', multerRoute);

export default router;