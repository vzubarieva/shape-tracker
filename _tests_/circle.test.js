import Circle from "../src/js/circle.js";

describe("Circle", () => {
  test("should correctly create a circle object with a radius", () => {
    const circle = new Circle(5);
    expect(circle.radius).toEqual(5);
  });

  test("should correctly determine the area of the circle object", () => {
    const circle = new Circle(3);
    expect(circle.getArea()).toEqual(28.274333882308138);
  });
});