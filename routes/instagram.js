var express = require('express');
var router = express.Router();
var Insta = require('../models/instagram.js');
/* GET home page. */
router.post('/:tag/buscar', function(req, res, next) {
    
    var insta = new Insta();
    insta.getFormatedMediaOfTag(req.params.tag,function(err, data){
        res.write(JSON.stringify(data));
        res.end();
    });
});


module.exports = router;