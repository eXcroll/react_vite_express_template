const express = require("express"),
  PORT = 5000,
  app = express();

app.get("/api/v1", (req, res) => {
  res.send("Hello, you true man!!");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
