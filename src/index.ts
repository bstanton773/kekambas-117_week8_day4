import { Canvas, Component } from './Widget';


const canvas = new Canvas(document.body);
// console.log(canvas);

const myWidget = new Component();
console.log(myWidget);

canvas.addWidget(myWidget);
console.log(canvas);
