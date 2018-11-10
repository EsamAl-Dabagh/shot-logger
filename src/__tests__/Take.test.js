import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Take from '../components/Take';

describe("Take", () => {

  const take = shallow(<Take />);

  it("renders correctly", () => {
    expect(take).toMatchSnapshot();
  });

  it("initializes with scene, shot, takeNumber, description, goodTake, and notes in `state`", () => {
    expect(take.state()).toEqual({
      scene: "",
      shot: "",
      takeNumber: "",
      description: "",
      goodTake: false,
      notes: ""
    })
  });
});