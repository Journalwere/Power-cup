const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Add middleware, routes, and other server configurations here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
