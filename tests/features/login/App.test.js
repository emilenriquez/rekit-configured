import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../../src/features/home';

describe('login/App', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(<App />);

    expect(renderedComponent.find('.login-app').length).toBe(1);
  });
});
