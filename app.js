const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));
