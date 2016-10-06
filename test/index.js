import fetch from 'node-fetch';
import assert from 'assert';

import '../lib/index.js';

async function assertGet() {
  let response = await fetch('http://localhost:3000/multiply/7/7')
  let result = await response.json()
  assert.equal(49, result)
}

async function assertPost() {
  let response = await fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify({
      operation: '/',
      number1: 81,
      number2: 12
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  let result = await response.json()
  assert.equal(6.75, result)
}

describe('Node Server Calculator', () => {
  it('should return 49', assertGet)
  it('should return 6.75', assertPost)
});
