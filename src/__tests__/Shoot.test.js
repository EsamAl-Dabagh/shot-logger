import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Shoot from '../components/Shoot';

describe("Shoot", () => {

  const shoot = shallow(<Shoot />);

  it("renders correctly", () => {
    expect(shoot).toMatchSnapshot();
  })

  it("initializes the `state` with an empty list of takes", () => {
    expect(shoot.state().takes).toEqual([]);
  })

  it("has button to create new take", () => {
    const button = <button className="new-take-btn">+</button>
    expect(shoot.contains(button)).toEqual(true);
  });
});