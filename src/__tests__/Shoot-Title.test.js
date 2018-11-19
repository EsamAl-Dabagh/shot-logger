import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ShootTitle from '../components/Shoot-Title';

describe("Shoot Title", () => {
  const shootTitle = shallow(<ShootTitle />);

  it("renders correctly", () => {
    expect(shootTitle).toMatchSnapshot();
  });

  it("initializes with empty text string", () => {
    expect(shootTitle.state()).toEqual({ text: "" });
  });

  describe("when `text` is empty", () => {
    it("displays input box", () => {
      expect(shootTitle.find(".title-input").exists()).toBe(true);
    });
  });

  describe("when `text` is not empty", () => {
    beforeEach(() => {
      shootTitle.setState({ text: "Day 01" })
    });

    it("displays the title", () => {
      expect(shootTitle.find(".shoot-title").exists()).toBe(true);
    });
  });
});