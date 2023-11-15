const express = require('express')
const app = express();
const users = require('./routes/user');
app.use('./api/user',users);
app.get('/api', (req, res) => {
  res.send('Hello World!')
});
app.listen(1234);