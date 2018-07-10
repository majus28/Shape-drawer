import React from 'react';
import Canvas from 'react-native-canvas';
import {Dimensions} from 'react-native';

const lengthShapesSides = {
    'square': 4, 'hexagon': 6, 'heptagon': 7, 'octagon': 8, 'pentagon': 5, 'equilateral triangle': 3
};
const rotateAngleArray = {
    'square': 4, 'hexagon': 0, 'heptagon': 90, 'octagon': 20, 'pentagon': 60, 'equilateral triangle': 300
};
const handleCanvas = (canvas) => {
    let x = Dimensions.get('window').width;

    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.height = 600;
        canvas.width = x;

        let sideLength = canvas.props.sideLength;
        let shape = canvas.props.shape;

        ctx.fillStyle = 'purple';

        let numberOfSides = lengthShapesSides[shape];

        let size = sideLength;
        let Xcenter = size + (x / size);
        let Ycenter = size + 10;

        var rotateAngle = parseInt(rotateAngleArray[shape]);

        ctx.beginPath();
        // draw polygon
        polygon(ctx, Xcenter, Ycenter, size, numberOfSides, rotateAngle);

        ctx.strokeStyle = "#4050b5";
        ctx.fillStyle = '#4050b5';
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }
};

polygon = (ctx, x, y, radius, sides, rotateAngle) => {
    if (sides < 3) return;
    var a = (Math.PI * 2) / sides;
    ctx.translate(x, y);
    ctx.rotate(rotateAngle);
    ctx.moveTo(radius, 0);

    for (var i = 1; i < sides; i++) {
        ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
    }
    ctx.scale(1, 2);
    return ctx;
};



const Polygen = ({sideLength, shape}) => {
    return (
        <Canvas ref={handleCanvas} sideLength={sideLength} shape={shape}/>
    );
};

export default Polygen;