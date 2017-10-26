module.exports = () => {
  const Data = [{
    id: 1,
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
    upvotes: 1,
    downvotes: 0,
    favorited: false
  },
  {
    id: 2,
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
    upvotes: 1,
    downvotes: 0,
    favorited: false
  },
  {
    id: 3,
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
    upvotes: 1,
    downvotes: 0,
    favorited: false
  }
  ];

  return Data;
};
