const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  console.log('Root endpoint was hit!');
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
