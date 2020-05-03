const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");


const PORT = process.env.PORT || 3000;

const app = express();

// Adding Compression
app.use(compression());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routes/api.js")(app);
require("./routes/html.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
