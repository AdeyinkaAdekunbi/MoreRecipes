import newReview from '../models/newReview';

module.exports = {
  createReview(req, res) {
    // Return Dummy Data with HTTP CREATED
    res.status(201).send(newReview());
  }
};
