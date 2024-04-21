const express = require('express');
const leastController = require('../../../controllers/product/least.controller');
const router = express.Router();


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


router.get('/', leastController.getAll);
router.get('/detail', leastController.getForm);
router.post('/', 
  upload.fields([
    { name: 'filepond', maxCount: 3 }, 
    { name: 'vrcertificate', maxCount: 1 },
    { name: 'minsurance', maxCount: 1 },
    { name: 'image', maxCount: 1},
  ]),
  (err, req, res, next) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(500).send('Error uploading file');
    }
    next();
  }, 
  leastController.addOrUpdateItem
);
module.exports = router;    