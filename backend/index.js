const express = require("express");
const app = express();
const port = 5000;

const mongoDB = require("./database");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
