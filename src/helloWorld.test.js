const expectedResult = 'helloWorld'

function helloWorld() {
    return 'helloWorld';
}

test('helloWorld returns helloWorld', () => {
  expect(helloWorld()).toBe(expectedResult);
});
