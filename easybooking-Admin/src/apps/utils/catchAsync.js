const express = require('express');
const router = express.Router();
const { catchAsync } = require('../easybooking-Admin/src/apps/utils/catchAsync');

const someAsyncController = async (req, res) => {
    // Your asynchronous operation
    res.send('Operation completed successfully');
};

router.get('/some-path', catchAsync(someAsyncController));

module.exports = router;


const catchAsync = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
};

module.exports = {
    catchAsync,
};
try {

}
catch(err) {

}