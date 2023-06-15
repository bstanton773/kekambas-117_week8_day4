import { Canvas, CircleContainer, Component, RightLeaningContainer } from './Widget';


const canvas = new Canvas(document.body);

const myWidget = new Component();
canvas.addWidget(myWidget);

const rightWidget = new Component();
rightWidget.shape = new RightLeaningContainer();
rightWidget.locationLeft = 6;
rightWidget.locationTop = 6;
rightWidget.shape.zIndex = 99;
canvas.addWidget(rightWidget);

const circleWidget = new Component();
circleWidget.shape = new CircleContainer();
circleWidget.locationTop = 5;
circleWidget.locationLeft = 5;
circleWidget.width = 4;
circleWidget.height = 4;
canvas.addWidget(circleWidget);
