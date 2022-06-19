const { sumTwo } = require('../sum.js');

const { sumThree } = require('../sum.js');

test('Sum three numbers <sumThree>', async () => {
    const result = await sumThree(1,2,3);
    expect(result).toBe(6);
})
