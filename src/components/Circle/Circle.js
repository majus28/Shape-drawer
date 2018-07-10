import React from 'react';
import Svg, {Circle as SvgCircle} from 'react-native-svg';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const Circle = ({radius, ...otherProps}) => {
    return (
        <Svg
            height="700"
            width={width}
        >
            <SvgCircle
                cx={(width /2 ) -10}
                cy={radius * 2}
                r={radius}
                fill="#4050b5"
            />
        </Svg>

    );
};

export default Circle;