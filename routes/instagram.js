var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var ig = require('instagram-node').instagram();
    
    
  res.render('test', { title: 'Prueba' });
});


module.exports = router;
