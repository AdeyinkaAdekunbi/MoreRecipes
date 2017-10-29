import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.should();
chai.use(chaiHttp);

/**
 * Test Add Recipe
 */
describe('/POST api/v1/recipes', () => {
  const validRecipeData = {
    name: 'Recipe One',
    image: 'R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    ingredients: [{
      name: 'Ingredient One'
    }],
    directions: [{
      name: 'Direction One'
    }]
  };

  const invalidRecipeData = {
    name: '',
    image: '',
    ingredients: null,
    directions: null
  };

  // Add Recipe with valid data
  it('it should sucessfully add a new recipe', (done) => {
    chai.request(server)
      .post('/api/v1/recipes')
      .send(validRecipeData)
      .end((err, res) => {
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
  it('it should return bad request with an error object', (done) => {
    chai.request(server)
      .post('/api/v1/recipes')
      .send(invalidRecipeData)
      .end((err, res) => {
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
describe('/PUT api/v1/recipes/<recipeId>', () => {
  const validRecipeData = {
    name: 'Updated Recipe One',
    image: 'R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    ingredients: [{
      name: 'Updated Ingredient One'
    }],
    directions: [{
      name: 'Updated Direction One'
    }]
  };

  const invalidRecipeData = {
    name: '',
    image: '',
    ingredients: null,
    directions: null
  };

  // Modify Recipe with valid data
  it('it should sucessfully modify a recipe', (done) => {
    chai.request(server)
      .put('/api/v1/recipes/1')
      .send(validRecipeData)
      .end((err, res) => {
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
  it('it should return bad request with an error object', (done) => {
    chai.request(server)
      .put('/api/v1/recipes/1')
      .send(invalidRecipeData)
      .end((err, res) => {
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
describe('/DELETE api/v1/recipes/<recipeId>', () => {
  // Delete Recipe with valid id
  it('it should sucessfully delete a recipe', (done) => {
    chai.request(server)
      .delete('/api/v1/recipes/1')
      .end((err, res) => {
        // Check that HTTP response is NO CONTENT
        res.should.have.status(204);
        done();
      });
  });

  // Delete Recipe with invalid id
  it('it should return bad request with an error object', (done) => {
    chai.request(server)
      .delete('/api/v1/recipes/one')
      .end((err, res) => {
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
describe('/GET api/v1/recipes', () => {
  it('it should GET all the recipes on the platform', (done) => {
    chai.request(server)
      .get('/api/v1/recipes')
      .end((err, res) => {
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
describe('/POST api/v1/recipes<recipeId>/reviews', () => {
  const validReviewData = {
    message: 'Review One'
  };

  const invalidvalidReviewData = {
    message: ''
  };

  // Add Review with valid data
  it('it should sucessfully add a new review', (done) => {
    chai.request(server)
      .post('/api/v1/recipes/1/reviews')
      .send(validReviewData)
      .end((err, res) => {
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
  it('it should return bad request with an error object', (done) => {
    chai.request(server)
      .post('/api/v1/recipes/1/reviews')
      .send(invalidvalidReviewData)
      .end((err, res) => {
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
  it('it should return bad request with an error object', (done) => {
    chai.request(server)
      .post('/api/v1/recipes/one/reviews')
      .send(validReviewData)
      .end((err, res) => {
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
describe('/GET api/v1/recipes?sort=upvotes&order=des', () => {
  it('it should GET recipes with the most upvotes', (done) => {
    chai.request(server)
      .get('/api/v1/recipes?sort=upvotes&order=des')
      .end((err, res) => {
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
