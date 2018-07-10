import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';
import {Square, Circle, Polygen, Parallelogram, Oval, Isosceles} from '../../components';

function test(canvas) {
    if (canvas) {
        canvas.props.handleCanvas(canvas);
    }
}

const sidesShape = ['first', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'equilateral triangle'];

const Shape = ({shape, sizes}) => {

    let shapes = <Text />;
    if (shape.toLowerCase() === 'circle') {
        shapes = <Circle radius={sizes.radius}/>;
    } else if (shape.toLowerCase() === 'square') {
        shapes = <Square width={sizes.length} height={sizes.length}/>;
    } else if (shape.toLowerCase() === 'rectangle') {
        shapes = <Square width={sizes.width} height={sizes.height}/>;
    } else if (shape.toLowerCase() === 'parallelogram') {
        shapes = <Parallelogram width={sizes.width} height={sizes.height}/>;
    } else if (shape.toLowerCase() === 'oval') {
        shapes = <Oval width={sizes.width} height={sizes.height}/>;
    } else if (shape.toLowerCase() === 'isosceles triangle') {
        shapes = <Isosceles width={sizes.width} height={sizes.height}/>;
    } else if (sidesShape.indexOf(shape)) {
        shapes = <Polygen sideLength={sizes.length} shape={shape}/>;
    }

    return (
        <View style={styles.style}>
            {shapes}
        </View>
    )
};

export default Shape;
