import {findShape, findValues} from "../helpers/shapes";

const number = Math.floor((Math.random() * 200) + 50);
const query = 'Draw a circle with a radius of '+number;

describe('Shape Helper', () => {
    //Get the shape name correctly
    test('get shape name correctly', () => {
        expect(findShape(query)).toEqual(['circle', {radius: number}]);
    });

});