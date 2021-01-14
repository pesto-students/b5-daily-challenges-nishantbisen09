import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

describe('Object Utility', () => {
  const fruits = {
    apple: 10,
    mango: 69,
  };
  const veggies = {
    capsicum: 10,
  };
  it('Tests for util functions to behave as expexted', () => {
    expect(map(fruits, ([key, val]) => [key.toUpperCase(), val * 10])).toEqual({
      APPLE: 100,
      MANGO: 690,
    });
    expect(filter(fruits, ([, val]) => val === 10)).toEqual({ mango: 69 });
    expect(invert(fruits)).toEqual({ 10: 'apple', 69: 'mango' });
    expect(merge(veggies, fruits)).toEqual({ ...veggies, ...fruits });
    expect(all(fruits, ([, val]) => val === 10)).toBe(false);
    expect(some(fruits, ([, val]) => val === 10)).toBe(true);
  });
});
