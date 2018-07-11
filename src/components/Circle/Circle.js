import React from 'react';
import Svg, {Circle as SvgCircle} from 'react-native-svg';
import {Dimensions} from 'react-native';
// Get widow width
const width = Dimensions.get('window').width;

//Circle shape component
const Circle = ({radius, ...otherProps}) => {
    return (
        <Svg
            height="700"
            width={width}
        >
            <SvgCircle
                cx={(width / 2) - 10}
                cy={radius * 2}
                r={radius}
                fill="#4050b5"
            />
        </Svg>

    );
};

export default Circle;