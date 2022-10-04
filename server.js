const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB"))

//routes
const routes = require('./routes/products');
app.use("/", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));