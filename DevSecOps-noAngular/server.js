const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/add', (req, res) => {
    const firstNumber = req.body.firstNumber;
    const secondNumber = req.body.secondNumber;
    const total = add(firstNumber, secondNumber);
    res.json({firstNumber, secondNumber, total});
});




