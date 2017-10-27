module.exports = (options) => {
  const Data = {
    sortedBy: options.sort,
    sortOrder: options.order,
    recipes: [{
      id: 2,
      name: 'Recipe Name',
      image: '[base_64_string]',
      ingredients: [{
        id: 1,
        name: 'Ingredient One'
      },
      {
        id: 2,
        name: 'Ingredient Two'
      },
      {
        id: 3,
        name: 'Ingredient Three'
      }
      ],
      directions: [{
        id: 1,
        name: 'Direction One'
      },
      {
        id: 2,
        name: 'Direction Two'
      },
      {
        id: 3,
        name: 'Direction Three'
      }
      ],
      additionalNotes: '',
      upvotes: 9,
      downvotes: 0,
      favorited: false
    },
    {
      id: 1,
      name: 'Second Recipe Name',
      image: '[base_64_string]',
      ingredients: [{
        id: 1,
        name: 'Ingredient One'
      },
      {
        id: 2,
        name: 'Ingredient Two'
      },
      {
        id: 3,
        name: 'Ingredient Three'
      }
      ],
      directions: [{
        id: 1,
        name: 'Direction One'
      },
      {
        id: 2,
        name: 'Direction Two'
      },
      {
        id: 3,
        name: 'Direction Three'
      }
      ],
      additionalNotes: 'Second Recipe',
      upvotes: 3,
      downvotes: 0,
      favorited: false
    },
    {
      id: 7,
      name: 'Third Recipe Name',
      image: '[base_64_string]',
      ingredients: [{
        id: 1,
        name: 'Ingredient One'
      },
      {
        id: 2,
        name: 'Ingredient Two'
      },
      {
        id: 3,
        name: 'Ingredient Three'
      }
      ],
      directions: [{
        id: 1,
        name: 'Direction One'
      },
      {
        id: 2,
        name: 'Direction Two'
      },
      {
        id: 3,
        name: 'Direction Three'
      }
      ],
      additionalNotes: 'Third Recipe',
      upvotes: 2,
      downvotes: 0,
      favorited: false
    }
    ]
  };

  return Data;
};
