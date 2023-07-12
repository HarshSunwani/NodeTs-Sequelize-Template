import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
    destination: function (req:Request, file, cb) {
        cb(null, "uploadFiles/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload;
