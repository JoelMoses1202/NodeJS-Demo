/* Require statements- express,file,cors and dotenv */
let express = require("express");
let fs = require("fs");
let cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  })
);
/* Routing Require Statement*/

let route = require("./routes/buddy.router");

/* Routing using buddy and create*/
app.use("/buddy", route);
app.use("/create", (req, res) => {
  fs.writeFileSync("cdw_ace23_buddies.json", "[]");
});

/*Listen Port */
app.listen(process.env.PORT, () => {
  console.log("Listening..... to PORT "+process.env.PORT);
});
