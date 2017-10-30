import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import validation from 'express-validation';
import routes from './routes';
import dotenv from 'dotenv';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
dotenv.config();

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

app.listen(port,() => {
  console.log("Listening on port ", port);
});
let port=process.env.PORT || 1234;
export default app;
