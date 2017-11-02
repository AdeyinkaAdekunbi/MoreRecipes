'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();
_chai2.default.use(_chaiHttp2.default);

/**
 * Test Add Recipe
 */
describe('/POST api/v1/recipes', function () {
  var validRecipeData = {
    name: 'Recipe One',
    image: 'R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    ingredients: [{
      name: 'Ingredient One'
    }],
    directions: [{
      name: 'Direction One'
    }]
  };

  var invalidRecipeData = {
    name: '',
    image: '',
    ingredients: null,
    directions: null
  };

  // Add Recipe with valid data
  it('it should sucessfully add a new recipe', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/recipes').send(validRecipeData).end(function (err, res) {
      // Check that HTTP response is CREATED
      res.should.have.status(201);

      // Check response body
      res.body.should.be.a('object');

      // Check for id
      res.body.should.have.property('id');

      // Check for url
      res.body.should.have.property('url');

      done();
    });
  });

  // Add recipe with invalid data
  it('it should return bad request with an error object', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/recipes').send(invalidRecipeData).end(function (err, res) {
      // Check that HTTP response is BAD REQUEST
      res.should.have.status(400);

      // Check response body
      res.body.should.be.a('object');

      // Check that response contains statusText and value is Bad Request
      res.body.should.have.property('statusText').eql('Bad Request');

      // Check that response contains list of errors
      res.body.should.have.property('errors');
      done();
    });
  });
});

/**
 * Test Modify Recipe
 */
describe('/PUT api/v1/recipes/<recipeId>', function () {
  var validRecipeData = {
    name: 'Updated Recipe One',
    image: 'R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    ingredients: [{
      name: 'Updated Ingredient One'
    }],
    directions: [{
      name: 'Updated Direction One'
    }]
  };

  var invalidRecipeData = {
    name: '',
    image: '',
    ingredients: null,
    directions: null
  };

  // Modify Recipe with valid data
  it('it should sucessfully modify a recipe', function (done) {
    _chai2.default.request(_app2.default).put('/api/v1/recipes/1').send(validRecipeData).end(function (err, res) {
      // Check that HTTP response is OK
      res.should.have.status(200);

      // Check response body
      res.body.should.be.a('object');

      // Check for id
      res.body.should.have.property('id');
      done();
    });
  });

  // Modify Recipe with invalid data
  it('it should return bad request with an error object', function (done) {
    _chai2.default.request(_app2.default).put('/api/v1/recipes/1').send(invalidRecipeData).end(function (err, res) {
      // Check that HTTP response is BAD REQUEST
      res.should.have.status(400);

      // Check response body
      res.body.should.be.a('object');

      // Check that response contains statusText and value is Bad Request
      res.body.should.have.property('statusText').eql('Bad Request');

      // Check that response contains list of errors
      res.body.should.have.property('errors');
      done();
    });
  });
});

/**
 * Test Delete Recipe
 */
describe('/DELETE api/v1/recipes/<recipeId>', function () {
  // Delete Recipe with valid id
  it('it should sucessfully delete a recipe', function (done) {
    _chai2.default.request(_app2.default).delete('/api/v1/recipes/1').end(function (err, res) {
      // Check that HTTP response is NO CONTENT
      res.should.have.status(204);
      done();
    });
  });

  // Delete Recipe with invalid id
  it('it should return bad request with an error object', function (done) {
    _chai2.default.request(_app2.default).delete('/api/v1/recipes/one').end(function (err, res) {
      // Check that HTTP response is BAD REQUEST
      res.should.have.status(400);

      // Check response body
      res.body.should.be.a('object');

      // Check that response contains statusText and value is Bad Request
      res.body.should.have.property('statusText').eql('Bad Request');

      // Check that response contains list of errors
      res.body.should.have.property('errors');
      done();
    });
  });
});

/**
 * Test GET All Recipes
 */
describe('/GET api/v1/recipes', function () {
  it('it should GET all the recipes on the platform', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/recipes').end(function (err, res) {
      // Check that HTTP response is OK
      res.should.have.status(200);

      // Check response body
      res.body.should.be.a('array');

      // Check that number of recipies matches that of our dummy response
      res.body.length.should.be.eql(3);
      done();
    });
  });
});

/**
 * Test Add Review
 */
describe('/POST api/v1/recipes<recipeId>/reviews', function () {
  var validReviewData = {
    message: 'Review One'
  };

  var invalidvalidReviewData = {
    message: ''
  };

  // Add Review with valid data
  it('it should sucessfully add a new review', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/recipes/1/reviews').send(validReviewData).end(function (err, res) {
      // Check that HTTP response is CREATED
      res.should.have.status(201);

      // Check response body
      res.body.should.be.a('object');

      // Check for id
      res.body.should.have.property('id');

      // Check for url
      res.body.should.have.property('url');

      done();
    });
  });

  // Add Review with invalid data
  it('it should return bad request with an error object', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/recipes/1/reviews').send(invalidvalidReviewData).end(function (err, res) {
      // Check that HTTP response is BAD REQUEST
      res.should.have.status(400);

      // Check response body
      res.body.should.be.a('object');

      // Check that response contains statusText and value is Bad Request
      res.body.should.have.property('statusText').eql('Bad Request');

      // Check that response contains list of errors
      res.body.should.have.property('errors');
      done();
    });
  });

  // Add Review with invalid recipe id
  it('it should return bad request with an error object', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/recipes/one/reviews').send(validReviewData).end(function (err, res) {
      // Check that HTTP response is BAD REQUEST
      res.should.have.status(400);

      // Check response body
      res.body.should.be.a('object');

      // Check that response contains statusText and value is Bad Request
      res.body.should.have.property('statusText').eql('Bad Request');

      // Check that response contains list of errors
      res.body.should.have.property('errors');
      done();
    });
  });
});

/**
 * Test GET recipes with the most upvotes
 */
describe('/GET api/v1/recipes?sort=upvotes&order=des', function () {
  it('it should GET recipes with the most upvotes', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/recipes?sort=upvotes&order=des').end(function (err, res) {
      // Check that HTTP response is OK
      res.should.have.status(200);

      // Check response body
      res.body.should.be.a('object');

      // Check that response has sortedBy
      res.body.should.have.property('sortedBy').eql('upvotes');

      // Check that response has sortOrder
      res.body.should.have.property('sortOrder').eql('des');

      // Check that response has recipes
      res.body.should.have.property('recipes').a('array');

      // Check that number of recipies matches that of our dummy response
      res.body.recipes.length.should.be.eql(3);
      done();
    });
  });
});