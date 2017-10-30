import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import validation from 'express-validation';
import routes from './routes';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Pass app context to our routes for route mapping
routes(app);

// Ensure validation errors are returned as JSON object
app.use((err, req, res, next) => {
  // eslint sees unused variable as error
  console.info(next);
  if (err instanceof validation.ValidationError) {
    return res.status(err.status).json(err);
  }
  res.status(500);
});

app.listen(1234,() => {
  console.log("Listening on port 1234");
});

export default app;
