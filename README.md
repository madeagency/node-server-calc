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
