import React from 'react';
import {Square} from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Square height={100} width={100}/>).toJSON();
    expect(rendered).toBeTruthy();
});