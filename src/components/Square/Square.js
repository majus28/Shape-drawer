import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
// get full width
const fullWidth = Dimensions.get('window').width;
// Square Component
const Square = ({height, width, ...otherProps}) => {
    return (
        <Svg
            height={height}
            width={fullWidth}
        >
            <Rect
                x={(fullWidth / 2) - (width / 2)}
                y="10"
                width={width}
                height={height}
                stroke="#4050b5"
                strokeWidth="1"
                fill="#4050b5"
            />
        </Svg>
    );
};

export default Square;