const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my Node.js web app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Kamlesh");
});

app.listen(5000, () => {
  console.log("listening");
});