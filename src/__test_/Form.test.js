import React from 'react';
import Form from '../components/Form';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Form/>).toJSON();
    expect(rendered).toBeTruthy();
});