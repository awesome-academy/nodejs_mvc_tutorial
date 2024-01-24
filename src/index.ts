import express, { Request, Response } from 'express';
import { setupViewEngine } from './utils/view';

const app = express();
setupViewEngine(app);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'Sun Asterisk', message: 'Make awesome things that matter' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

