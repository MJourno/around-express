const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}...`);
});
