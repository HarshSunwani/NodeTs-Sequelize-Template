import express from 'express';
import upload from '../../config/multer';

const router = express.Router();

router.post('/uploadFiles', upload.array('file'), async function (req, res) {
  res.json({
    req: req.files,
  });
});

router.get('/download', (_req, res) => {
  res.download('uploadFiles');
});

export default router;
