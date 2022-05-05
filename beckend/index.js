const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', (req, res) => {
  const URL =
    'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt';

  request(
    {
      url: URL,
      json: true,
    },
    (err, response, body) => {
      const responseEUR = body.search('EUR');
      const EURfinal = body.slice(responseEUR + 4, responseEUR + 10);
      res.send(EURfinal);
    }
  );
});

app.listen(PORT, (err) => {
  console.log(`Server is running on ${PORT}!`);
});
