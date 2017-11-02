'use strict';

module.exports = function () {
  var Data = {
    id: 1,
    name: 'Updated Recipe Name',
    image: '[base_64_image]',
    ingredients: [{
      id: 1,
      name: 'Updated Ingredient One'
    }, {
      id: 2,
      name: 'Updated Ingredient Two'
    }, {
      id: 3,
      name: 'Updated Ingredient Three'
    }],
    directions: [{
      id: 1,
      name: 'Updated Direction One'
    }, {
      id: 2,
      name: 'Updated Direction Two'
    }, {
      id: 3,
      name: 'Updated Direction Three'
    }],
    additionalNotes: 'Additional Notes',
    upvotes: 1,
    downvotes: 0,
    favorited: false
  };

  return Data;
};