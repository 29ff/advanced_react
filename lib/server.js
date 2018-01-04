import express from 'express';
import config from './config';

// import data
import { data } from './testData';

// server render with React
import serverRender from 'renderer/server';

const app = express();
const PORT = process.env.PORT || config.port

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(PORT, function() {
  console.info(`Running on PORT →→→ ${PORT} ←←←`);
});
