var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var ig = require('instagram-node').instagram();

    ig.use({ access_token: '3231014232.1677ed0.7c68b172e604438cb5e385d8fad65b5d' });
    
    //var ans = ig.tag(tag, function(err, result, remaining, limit) {    
    //});
    
    res.write("ejemplo");
});


module.exports = router;
