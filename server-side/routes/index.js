var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('home');
});
router.get('/admin', function (req, res, next) {
    res.send('admin');
});
module.exports = router;
