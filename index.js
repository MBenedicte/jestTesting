const express = require('express');

const app = express();

app.post('/post', (req, res) => {
  const { name, phone } = req.body;
  res.status(200).send({
    name,
    phone,
    status: 200
  });
});
app.put('/put', (req, res) => {
  const { newName, newPhone } = req.body;

  res.status(200).send({
    name: newName,
    phone: newPhone,
    status: 200
  });
});
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'app is running'
  });
});

const port = 4000;

app.listen(port, () => console.log('app is running from port ', port));
