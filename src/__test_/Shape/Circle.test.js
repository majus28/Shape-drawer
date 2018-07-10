import React from 'react';
import {Circle} from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Circle radius={100}/>).toJSON();
    expect(rendered).toBeTruthy();
});