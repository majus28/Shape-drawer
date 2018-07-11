import React from 'react';
import {ART} from 'react-native';
// set sides to shapes
const lengthShapesSides = {
    'square': 4, 'hexagon': 6, 'heptagon': 7, 'octagon': 8, 'pentagon': 5, 'equilateral triangle': 3
};

// rotation angle for shapes

const rotateAngleArray = {
    'square': 4, 'hexagon': 0, 'heptagon': 90, 'octagon': 20, 'pentagon': 60, 'equilateral triangle': 300
};

// Polygen Component
const Polygen = ({sideLength, shape, ...otherProps}) => {
    // create pointers.
    const polygon = ART.Path().move(
        sideLength * Math.cos(0),
        sideLength * Math.sin(0)
    );
    let sides = lengthShapesSides[shape];
    // handle sides pointers.
    for (let i = 1; i <= sides; i += 1) {
        polygon.line(
            sideLength * Math.cos((i * 2 * Math.PI) / sides),
            sideLength * Math.sin((i * 2 * Math.PI) / sides)
        );
    }

    polygon.close();

    return (
        <ART.Surface width={sideLength * 3} height={sideLength * 3}>
            <ART.Group x={sideLength} y={sideLength / 3}>
                <ART.Shape d={polygon} {...otherProps} />
            </ART.Group>
        </ART.Surface>
    );
};

export default Polygen;
