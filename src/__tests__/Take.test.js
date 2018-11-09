import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Take from '../components/Take';

describe("Take", () => {

  const take = shallow(<Take />);

  it("renders correctly", () => {
    expect(take).toMatchSnapshot();
  });
});