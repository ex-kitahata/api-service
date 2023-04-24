import express from 'express';
import { rootHandler, helloHandler } from './routes/handlers.js';
import { addData, movieRouter, moviesRouter } from './routes/index.js';
import bodyParser from 'body-parser';
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/test', (req, res) => {
  console.log(req.body);
  res.send("Received POST Data!");
});
//addData, moviesRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});