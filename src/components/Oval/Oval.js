import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {
    Ellipse,
} from 'react-native-svg';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Oval = ({width, height, ...otherProps}) => {
    return (
        <Svg
            height={screenHeight}
            width={screenWidth}
        >
            <Ellipse
                cx={screenWidth / 2}
                cy={screenHeight / 6}
                rx={width}
                ry={height}
                stroke="#4050b5"
                strokeWidth="1"
                fill="#4050b5"
            />
        </Svg>
    );
};

export default Oval;