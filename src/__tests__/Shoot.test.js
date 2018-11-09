import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Shoot from '../components/Shoot';
import Take from '../components/Take';

describe("Shoot", () => {

  const shoot = shallow(<Shoot />);

  afterEach( () => {
    shoot.setState({
      takes: []
    })
  })

  it("renders correctly", () => {
    expect(shoot).toMatchSnapshot();
  })

  it("initializes the `state` with an empty list of takes", () => {
    expect(shoot.state().takes).toEqual([]);
  })

  describe("add new take button", () => {

    it("adds a new take to `state` when add button is clicked", () => {
      shoot.find(".new-take-btn").simulate("click");

      expect(shoot.state().takes.length).toEqual(1)

    });

    it("assigns a unique id to each take", () => {
      shoot.find(".new-take-btn").simulate("click");
      shoot.find(".new-take-btn").simulate("click");
      shoot.find(".new-take-btn").simulate("click");
      
      expect(shoot.state().takes[0].props.id).toEqual(1);
      expect(shoot.state().takes[1].props.id).toEqual(2);
      expect(shoot.state().takes[2].props.id).toEqual(3);
    });
    
    it("adds a new Take row to the 'takes' div", () => {
      shoot.find(".new-take-btn").simulate("click");
      const displayedTakes = shoot.find(".takes");

      expect(displayedTakes.children().length).toEqual(1);

    });

  });
  
});