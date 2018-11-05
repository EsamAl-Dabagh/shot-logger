import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Shoot from '../components/Shoot';

describe("Shoot", () => {
  it("has button to create new take", () => {
    const wrapper = shallow(<Shoot />);
    const button = <button className="new-take-btn">+</button>
    expect(wrapper.contains(button)).toEqual(true);
  });
});