import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';
import {Square, Circle, Polygen, Parallelogram, Oval, Isosceles, ScaleneTriangle} from '../../components';

const sidesShape = ['first', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'equilateral triangle'];
// check the shape and draw it return
const Shape = ({shape, sizes}) => {

    let shapes = <Text/>;
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
    } else if (shape.toLowerCase() === 'scalene triangle') {
        shapes = <ScaleneTriangle width={sizes.width} height={sizes.height}/>;
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
