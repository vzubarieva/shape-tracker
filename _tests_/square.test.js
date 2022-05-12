
import Square from '../src/js/square.js';

describe('Square', () => {

  let square;
  beforeEach(() => {
    square = new Square(4);
  });

  test("should correctly create a square object using one side", () => {
    expect(square.side).toEqual(4);
  });

  test('should correctly get the area of a square object', () => {
    expect(square.getArea()).toEqual(16);
  });
});


