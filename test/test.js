var assert = require('chai').assert;
var app = require('../app');
var request = require('supertest');
var http = require('http');
var server = require('../lib/server.js');
var Response = require("../node_modules/express/lib/response.js");
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
  it('Se realiza el formato final', function (done) {
      this.timeout(5000);

      var Insta = require('../models/instagram.js');
      var ex = new Insta();
      var t = ex.getFormatedMediaOfTag("tag",function(err,data) {
        assert(data["metadata"]["total"] != null , "No tiene el contador");
        assert(data["version"] != null , "No tiene la version");
        assert(data["posts"] != null , "No tiene el contador");
        done();        
      });
  });

});