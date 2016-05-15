var assert = require('chai').assert;
var app = require('../app');
var request = require('supertest');
var http = require('http');

describe('instagram', function() {
  it('Prueba la clase instagram', function(done){
    var Insta = require('../models/instagram.js');
    var ex = new Insta();
    var t = ex.test();
    assert(t == 4, "La clase Insta no esta funcionando");
    done();
    
  });
  it('Se obtiene la cantidad de un tag', function (done) {
      var Insta = require('../models/instagram.js');
      var ex = new Insta();
      var t = ex.getInfoOfTag("tag",function(err,data) {
        assert(data["name"] == "tag" , "El callback no funciona");
        done();        
      });
  });
  it('Se obtienen los media de un tag', function (done) {
      this.timeout(5000);
      var Insta = require('../models/instagram.js');
      var ex = new Insta();
      var t = ex.getMediaOfTag("tag",function(err,data) {
        assert(data[0] != null , "No se entrega el correcto");
        done();        
      });
  });
  it('El formato contiene el total, la version y los posts', function (done) {
      this.timeout(5000);

      var Insta = require('../models/instagram.js');
      var ex = new Insta();
      var t = ex.getFormatedMediaOfTag("tag",function(err,data) {
        assert(data["metadata"]["total"] != null , "No tiene el contador");
        assert(data["version"] != null , "No tiene la version");
        assert(data["posts"] != null , "No tiene posts");
        done();        
      });
  });
  it('Se obtiene la mayor resolucion', function (done) {
      this.timeout(5000);

      var Insta = require('../models/instagram.js');
      var ex = new Insta();
      var t = ex.getBigestResolution({
            "low_resolution": {
                "url": "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/13166783_242158072841933_235274681_n.jpg?ig_cache_key=MTI0OTUzNjk3NzgwMzQ0NTIyMQ%3D%3D.2",
                "width": 320,
                "height": 320
            },
            "thumbnail": {
                "url": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13166783_242158072841933_235274681_n.jpg?ig_cache_key=MTI0OTUzNjk3NzgwMzQ0NTIyMQ%3D%3D.2",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/t51.2885-15/e35/13166783_242158072841933_235274681_n.jpg?ig_cache_key=MTI0OTUzNjk3NzgwMzQ0NTIyMQ%3D%3D.2",
                "width": 640,
                "height": 640
            }
        });
      assert(t == "https://scontent.cdninstagram.com/t51.2885-15/e35/13166783_242158072841933_235274681_n.jpg?ig_cache_key=MTI0OTUzNjk3NzgwMzQ0NTIyMQ%3D%3D.2" , "La foto no es la maxima");
      done();        
  });
});