const test = require('node:test');
const assert = require('node:assert/strict');

const expectedResult = 'helloWorld'

function helloWorld() {
    return 'helloWorld';
}

test('helloWorld returns helloWorld', () => {
    assert.equal(helloWorld(), expectedResult);
});
