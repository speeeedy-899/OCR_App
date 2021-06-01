const express = require("express");
const app = express();
const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
