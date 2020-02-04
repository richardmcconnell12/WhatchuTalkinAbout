const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Chatkit = require("pusher-chatkit-server");

const app = express();

const chatKit = new Chatkit.default({
  instanceLocator: "v1:us1:32bb4c8e-12be-4848-af89-3496228e8147",
  key:
    "cf90c6c9-be5c-41db-a137-b6f9af327811:7f5HAvp2/cVxkwa4Q+5bDxRh3VhRM9bhiA2ZfJa0acI="
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

app.post("/users", (req, res) => {
  const { username } = req.body;

  chatKit
    .createUser({
      name: username,
      id: username
    })
    .then(() => res.sendStatus(201))
    .catch(err => {
      if (err.error_type === "services/chatkit/user_already_exists") {
        res.sendStatus(200);
      } else {
        res.status(err.statusCode).json(err);
      }
    });
});

const port = 3000;
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Running on port ", port);
  }
});
