import express from 'express';
import { rootHandler, helloHandler } from './routes/handlers.js';
import { jsonRouter } from './routes/jsonRouter.js';
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/hello/:name', helloHandler);
app.use('/:name/:id', jsonRouter);
app.use('/', rootHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});