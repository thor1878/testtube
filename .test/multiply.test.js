const { multiplyTwo } = require('../multiply.js');

const { multiplyThree } = require('../multiply.js');

test('Multiply two numbers <multiplyTwo>', async () => {
    const result = await multiplyTwo(3,4);
    expect(result).toBe(12);
})
test('Multiply three numbers <multiplyThree>', async () => {
    const result = await multiplyThree(2,3,4);
    expect(result).toBe(26);
})
