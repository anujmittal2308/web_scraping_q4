const express = require("express");
const app = express();

const product = require("./routes/product");
const port = 3000;

app.use("/fetch", product);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
