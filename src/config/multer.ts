import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
    destination: function (_req:Request, _file, cb) {
        cb(null, "uploadFiles/");
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload;
