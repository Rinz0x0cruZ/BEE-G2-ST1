// server.js
const express = require('express');
const mongoose = require('./db');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());


app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
