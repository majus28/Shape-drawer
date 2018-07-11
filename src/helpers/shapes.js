//shapes with measurement data
export const shapes = {
    'isosceles triangle': [
        'height', 'width'
    ],
    'square': [
        'length'
    ],
    'scalene triangle': [
        'height', 'width'
    ],
    'parallelogram': [
        'height', 'width'
    ],
    'equilateral triangle': [
        'length'
    ],
    'pentagon': [
        'length'
    ],
    'rectangle': [
        'height', 'width'
    ],
    'hexagon': [
        'length'
    ],
    'heptagon': [
        'length'
    ],
    'octagon': [
        'length'
    ],
    'circle': [
        'radius'
    ],
    'oval': [
        'width', 'height'
    ]
};

//Get shape name and sizes from the query
export const findShape = (query) => {
    let result = strBetween(query, 'draw an', 'with') || strBetween(query, 'draw a', 'with');
    let values = findValues(result, query);
    return [result, values];
};

//Get the shape sizes from the query
export const findValues = (shape, query) => {
    let values = {};
    if (shapes.hasOwnProperty(shape)) {
        shapes[shape].forEach(function (v) {
            const regex = new RegExp(`(?:${v} of(.?) )(\\w\\S+)`, 'gim');
            const results = regex.exec(query);
            values[v] = results ? parseInt(results[2]) : null;
        });
    }
    return values;
};

//get string from given stat end string
export const strBetween = (string, start, end) => {
    // create regular expression
    const regex = new RegExp(
        `(?:${start})${end ? `(.*?)(?:${end})` : '(.*)'}`,
        'igm'
    );
    // match in string
    const results = regex.exec(string.toLowerCase());
    // return only matched word
    return (results ? results[1] || '' : '').trim();
};
