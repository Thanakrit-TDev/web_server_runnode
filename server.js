const express = require('express');
const path = require('path');

const app = express();
const port = 7000;

app.use(express.static('/home/user/Desktop/web'));
app.get('*', (req, res) => {
  res.sendFile(path.join('/home/user/Desktop/web/index.html'));
});

app.listen(port, () => {
  console.log(`Flutter web app is running on http://localhost:${port}`);
});
