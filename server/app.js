const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('More Recipes Server');
});

app.listen(3000, () => {
  console.log('More Recipes Server listening on port 3000!');
});
