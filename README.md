# Brief
> Write a frontend which uses the included calculator API for basic operations: division, multiplication, addition and subtraction. The documentation can be found below this section. No part of the calculation should be done on the frontend and It shoud be possible to use the previous operations result in the next calculation.

## Instructions
1. Fork this repository
2. Send us a link to your fork when you're done

## What we hope to see
Something simple that we can run and test. It can be statically hosted or server rendered. Use whatever **Javascript** technology you feel will be most effective.

More specifically:
- Simple, user friendly interface (not overly designed)
- **Concise** code that is **highly readable**
  - Understandable for juniors
  - Shows a clever use of fundamentals for more experienced developers

---

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
