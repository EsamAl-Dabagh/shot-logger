import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ShootTitle from '../components/Shoot-Title';

describe("Shoot Title", () => {
  const shootTitle = shallow(<ShootTitle />);

  it("renders correctly", () => {
    expect(shootTitle).toMatchSnapshot();
  });
});