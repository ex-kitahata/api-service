import express from 'express';
import { rootHandler, helloHandler } from './routes/handlers.js';
import { addData, movieRouter, moviesRouter } from './routes/index.js';
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/hello/:name', helloHandler);
app.use('/movies/:id', movieRouter);
app.use('/movies', moviesRouter);
app.use('/', rootHandler);

app.post('/movies', addData);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});