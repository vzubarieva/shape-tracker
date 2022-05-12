import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './js/triangle.js';
import Rectangle from './js/rectangle.js';
import Square from './js/square.js';
import Circle from './js/circle.js';

$(function () {
  $('#triangle-checker-form').on("submit", function (event) {
    event.preventDefault();
    console.log('hello');
    const length1 = parseInt($('#length1').val());
    const length2 = parseInt($('#length2').val());
    const length3 = parseInt($('#length3').val());
    const triangle = new Triangle(length1, length2, length3);
    const response = triangle.checkType();
    $('#response').append(`<p>${response}</p>`);
  });

  $('#rectangle-area-form').on("submit", function (event) {
    event.preventDefault();
    const length1 = parseInt($('#rect-length1').val());
    const length2 = parseInt($('#rect-length2').val());
    const rectangle = new Rectangle(length1, length2);
    const response = rectangle.getArea();
    $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
  });

  $('#square-area-form').on("submit", function (event) {
    event.preventDefault();
    const length = parseInt($('#square-length').val());
    const square = new Square(length);
    const response = square.getArea();
    $('#response3').append(`<p> The area of the square is ${response}.</p>`);
  });

  $("#circle-area-form").on("submit", function (event) {
    event.preventDefault();
    const radius = parseInt($("#radius").val());
    const circle = new Circle(radius);
    const response = circle.getArea();
    $("#response5").append(`<p> The area of the circle is ${response}.</p>`);
  });
});