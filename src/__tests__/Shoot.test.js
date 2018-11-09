import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Shoot from '../components/Shoot';

describe("Shoot", () => {

  const shoot = shallow(<Shoot />);

  it("renders correctly", () => {
    expect(shoot).toMatchSnapshot();
  })

  it("has button to create new take", () => {
    const button = <button className="new-take-btn">+</button>
    expect(shoot.contains(button)).toEqual(true);
  });
});