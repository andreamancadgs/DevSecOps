let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const port = process.env.port || 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

app.post('/add', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const total = add(a, b);
    const totalJson = {
        result: total
    }
    res.send('Result: '+ totalJson.result);
    console.log('Result: ' + totalJson.result);
});

app.get('/add', (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const total = add(num1, num2);
    const totalJson = {
        result: total
    }
    res.setHeader('Content-Type', 'application/json')
    res.json(totalJson);
    res.send('Result: '+ totalJson.result);
});

app.use('/', express.static('dist/dev-sec-ops-project'));

app.listen(port, () => {
  console.log('app listenint on port: ' , port);
})

