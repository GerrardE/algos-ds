// * You may uncomment one of these modules:
const express = require('express');

module.exports = (stepService) => {
  const REST_PORT = 8080;
  const app = express();
  // * TODO: Write the GET endpoint, using `stepService` for data access
  
  app.get('/users/:username/steps', (req, res) => {
    if((req.params.username === "") || (req.params.username === null) || (req.params.username === undefined)) {
      res.status(400).send({ error: "Username is required" })
    }

    if(typeof req.params.username !== "string") {
      res.status(400).send({ error: "Invalid username format" })
    }

    let user = stepService.get(req.params.username);
    
    if(user === undefined) {
      res.status(404).send({ error: "User doesn't exist" })
    } else {
      res.status(200).send(user)
    }
  });
  
  const server = app.listen(REST_PORT, function () {
    console.log('listening on:', REST_PORT);
  });

  return server;
};
