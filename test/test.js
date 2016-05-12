var assert = require('chai').assert;
var app = require('../app');
var request = require('supertest');
var http = require('http');

describe('instagram', function() {
  it('devuelve 200', function (done) {
    http.get('http://localhost:3000/instagram/tag/buscar', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
  it('Prueba la clase instagram', function(done){
    var Insta = require('../models/instagram.js');
    var ex = new Insta();
    var t = ex.test();
    assert(t == 4, "La clase Insta no esta funcionando");
    done();
    
  });
});