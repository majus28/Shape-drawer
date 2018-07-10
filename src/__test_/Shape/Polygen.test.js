import React from 'react';
import {Polygen} from '../../components';
import renderer from 'react-test-renderer';


describe('Render Polygon Shapes', () => {

    it('renders without crashing hexagon', () => {
        const rendered = renderer.create(<Polygen sideLength={100} shape={'hexagon'}/>).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders without crashing heptagon', () => {
        const rendered = renderer.create(<Polygen sideLength={100} shape={'heptagon'}/>).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders without crashing heptagon', () => {
        const rendered = renderer.create(<Polygen sideLength={100} shape={'heptagon'}/>).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders without crashing pentagon', () => {
        const rendered = renderer.create(<Polygen sideLength={100} shape={'pentagon'}/>).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders without crashing equilateral triangle', () => {
        const rendered = renderer.create(<Polygen sideLength={100} shape={'equilateral triangle'}/>).toJSON();
        expect(rendered).toBeTruthy();
    });

});

