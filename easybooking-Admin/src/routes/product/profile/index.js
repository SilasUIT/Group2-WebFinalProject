const express = require('express');
const router = express.Router();
const profileController = require('../../../controllers/product/profile.controller');


const multer = require('multer');
const randomstring = require('randomstring');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueFileName = randomstring.generate(10) + file.originalname;
        cb(null, uniqueFileName);
    },
});

const upload = multer({ storage: storage });

router.get('/', profileController.getAll);
router.post('/update/:id', profileController.updateprofile);
router.post('/upload/:id', 
upload.fields([
  { name: 'imagecccd', maxCount: 2 }, 
  { name: 'certificate', maxCount: 2 },
]),
(err, req, res, next) => {
  if (err) {
    console.error('Multer error:', err);
    return res.status(500).send('Error uploading file');
  }
  next();
},  profileController.imageUpload);
module.exports = router;

