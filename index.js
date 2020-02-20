const express = require('express');

const app = express();

app.post('/post', (req, res) => {
  const { name, phone } = req.body;
  res.status(200).send({
    id:1,
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
app.delete('/:id', (req, res) => {
  res.status(200).json({
    message: "user deleted",
    status:200
  })
})


const port = 4000;

app.listen(port, () => console.log('app is running from port ', port));
