const express = require('express');

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is started at port: ${PORT}!`)
});