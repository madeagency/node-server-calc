# node-server-calc
> Calculator as a service ➗✖️➕➖

## Install
1. `git clone https://github.com/madeagency/node-server-calc.git`
2. `npm install`

## Start (development)
`npm start`

## Start (production)
`npm run build; npm run serve`

## Usage
**POST** to `/` with the following parameters:

```
{
  operation: '*', // valid options are '/', '*', '+', '-'
  number1: 81, // any integer
  number2: 12  // any integer
}
```

**GET** `/:operation/:number1/:number2`

`:operation` can be one of `divide`, `multiply`, `add` or `subtract`

## Test
`npm test`

## Requirementss
- Written in `Babel`
- Uses `express` and `body-parser`
- `npm start` uses `nodemon`

---

### Brief
> Write a frontend which uses the calculator to do basic operations, division, multiplication, addition and subtraction. It shoud be possible to use the previous operations result in the next calculation.

### What we want
Something simple that we can run and test. Can be statically hosted or server rendered. Use whatever technology you feel most comfortable with as long as it's **Javascript**.

The solution should be simple and user friendly.

We woud like to see:
- Concise code
- Should be highly readable
- Understandable for juniors
- Clever use of fundamentals for more experienced developers
