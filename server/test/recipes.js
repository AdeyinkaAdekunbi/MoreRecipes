import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.should();
chai.use(chaiHttp);

/**
 * Test Add Recipe
 */
describe('/POST api/recipes', () => {
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
      .post('/api/recipes')
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
      .post('/api/recipes')
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

describe('/GET api/recipes', () => {
  it('it should GET all the recipes on the platform', (done) => {
    chai.request(server)
      .get('/api/recipes')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
  });
});
