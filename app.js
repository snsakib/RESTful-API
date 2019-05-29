// Import express.js
const express = require('express');

// Use express in this app
const app = express();

// Every server needs a port to listen to.
// Declare this port here.
// We will pass the port number to the app via an environment variable later.
// That's why we are giving the app an alternative port number '3000'
const port = process.env.PORT || 3000;

// Declare some routing
// Whenever my app gets a request such as '/'
// I'll do something with that request via a callback function
// This callback function receives two parameters 'req' & 'res'
app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

// Now listen to the port
// Go to the terminal & enter 'node app.js'
// Then go to the browser and enter 'localhost://3000'
// You will see the following message on the screen 'Welcome to my API!'
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
