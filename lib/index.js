import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const [ hostname, port ] = [ 'localhost', 3000 ]

function calculate(operation, x, y) {
  switch (operation) {
    case 'divide':
    case '/':
      return x / y;
    case 'multiply':
    case '*':
      return x * y;
    case 'add':
    case '+':
      return x + y;
    case 'subtract':
    case '-':
      return x - y;
  }
}

app.get('/:operation/:number1/:number2', (req, res) => {
  const { operation, number1, number2 } = req.params
  res.json(calculate(operation, parseFloat(number1), parseFloat(number2)))
})

app.post('/', (req, res) => {
  const { operation, number1, number2 } = req.body
  res.json(calculate(operation, parseFloat(number1), parseFloat(number2)))
})

app.listen(port, hostname)

console.log(`Server running at http://${hostname}:${port}/`)
