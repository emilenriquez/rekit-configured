import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/home/DefaultPage';

describe('login/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {}
    };
    const renderedComponent = shallow(<DefaultPage {...props} />);

    expect(renderedComponent.find('.login-default-page').length).toBe(1);
  });
});
