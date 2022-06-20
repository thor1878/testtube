const { square } = require('../square.js');

test('Square a negative number <square>', async () => {
    const result = await square(-4);
    expect(result).toBe(16);
})
test('Square a positive number <square>', async () => {
    const result = await square(8);
    expect(result).toBe(64);
})
