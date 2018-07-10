import React from 'react';
import {Parallelogram} from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Parallelogram height={100} width={100}/>).toJSON();
    expect(rendered).toBeTruthy();
});