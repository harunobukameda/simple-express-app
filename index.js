const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('眠い、眠い、ひたすらに眠い。');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
