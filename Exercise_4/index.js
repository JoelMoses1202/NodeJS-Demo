let express = require("express");
let fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// let createRoute = require('./routes/create');
// app.use("/create", createRoute);
let readRoute = require("./routes/read");
app.use("/read", readRoute);

let addRoute = require("./routes/add");

app.use("/add", addRoute);

let updateRoute = require("./routes/update");
app.use("/update", updateRoute);
let deleteRoute = require("./routes/delete");
app.use("/delete", deleteRoute);

app.use("/create", (req, res) => {
  fs.writeFileSync("cdw_ace23_buddies.json", "[]");
});

app.listen(4000, () => {
  console.log("listen");
});
