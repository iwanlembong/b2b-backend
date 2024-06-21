const express = require('express');

const port = process.env.PORT || 3009;

const app = express();


module.exports = {
    app
  };

  
  app.listen(port);

console.log('API app started on port ' + port);