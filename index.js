// adapted from the 'superhero database backend' example
import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js";
import { connectDB } from "./database/database.js";

const app = express();
const port = 8000;

connectDB();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes
app.use("/monsters", monsters);

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});