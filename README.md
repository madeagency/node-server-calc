# Calculator frontend challenge
> Write a frontend which uses the included calculator API for basic operations: division, multiplication, addition and subtraction (the documentation can be found below this section). No part of the calculation should be done on the frontend. It should also be possible to use the previous operation's result in the next calculation.

## Instructions
1. Fork and change this repository or create a whole new one
2. Send us a link to your solution (with instructions on how to run it locally)

It can be hosted statically or server rendered. Use whatever **Javascript** technology you feel will be most effective.

## What we hope to see
- Simple, user friendly interface (Minimal design)
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

**- or -**

**GET** `/:operation/:number1/:number2`

`:operation` can be one of `divide`, `multiply`, `add` or `subtract`

## Test
`npm test`

## Requirementss
- Written in `Babel`
- Uses `express` and `body-parser`
- `npm start` uses `nodemon`
