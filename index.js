const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const apiV1Routes = require("./routes");

const categories = ["Food", "Coding", "Work", "Other"];

const app = express();
const port = 4000;

app.use(cors())

// app.use tells Express to execute some middleware at this stage
// of the request-response cycle.
// In this case, we're executing express.json(), a middleware that
// does a JSON.parse on the incoming request body, then sets req.body
// to the result so that later middleware (including routes) can access it.
// We do this before any routes, in case a route needs req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ info: "Journal API" });
});

app.get("/categories", (req, res) => res.send(categories));

app.use("/api/v1", apiV1Routes);

app.listen(port, () => console.log(`App running at http://localhost:${port}/`));
