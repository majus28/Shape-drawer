import React from 'react';
import {ScaleneTriangle} from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<ScaleneTriangle height={100} width={100}/>).toJSON();
    expect(rendered).toBeTruthy();
});