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

  it("adds a new take to `state` when add button is clicked", () => {
    shoot.find(".new-take-btn").simulate("click");

    expect(shoot.state().takes).toEqual([{ id: 1 }]);
  });
});