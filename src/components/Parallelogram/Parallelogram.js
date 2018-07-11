import React from 'react';
import Canvas from 'react-native-canvas';
import {Dimensions} from 'react-native';
// Draw Parallelogram with canvas
const handleCanvas = (canvas) => {
    let x = Dimensions.get('window').width;

    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.height = 600;
        canvas.width = x;

        let width = canvas.props.width;
        let height = canvas.props.height;

        var Xcenter = (width / 2);
        var Ycenter = 0;
        ctx.beginPath();
        ctx.moveTo(Xcenter, Ycenter);
        ctx.lineTo((Xcenter + width), Ycenter);
        ctx.lineTo((Xcenter + (width / 2)), (Ycenter + height));
        ctx.lineTo((Xcenter - (width / 2)), (Ycenter + height));
        ctx.lineTo(Xcenter, Ycenter);
        ctx.stroke();

        ctx.strokeStyle = "#4050b5";
        ctx.fillStyle = '#4050b5';
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }
};
// Parallelogram component
const Parallelogram = ({width, height, ...otherProps}) => {
    return (
        <Canvas ref={handleCanvas} width={width} height={height} otherProps={otherProps}/>
    );
};

export default Parallelogram;