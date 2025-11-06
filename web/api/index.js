const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send({
    message: "API is running",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
