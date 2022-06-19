const { subtract } = require('../subtraction.js');

test('Subtract two numbers <subtract>', async () => {
    const result = await subtract(5,8);
    expect(result).toBe(-3);
})
