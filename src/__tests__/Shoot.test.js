import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Shoot from '../components/Shoot';

describe("Shoot", () => {

  const exportPDFMock = jest.fn();
  const props = { exportPDF: exportPDFMock }
  const shoot = shallow(<Shoot {...props} />);

  afterEach( () => {
    shoot.setState({
      takes: []
    })
  })

  it("renders correctly", () => {
    expect(shoot).toMatchSnapshot();
  });

  it("initializes the `state` with an empty list of takes", () => {
    expect(shoot.state().takes).toEqual([]);
  });

  it("initializes the `state` with an empty title string", () => {
    expect(shoot.state().title).toEqual("");
  });

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

  describe("delete a take button", () => {   
    beforeEach(() => {
      shoot.find(".new-take-btn").simulate("click");
      shoot.instance().removeTake(1);
    });

    it("removes the Take from `state`", () => {
      expect(shoot.state().takes).toEqual([]);
    });
  });

  describe("confirm take button", () => {
    beforeEach(() => {
      shoot.find(".new-take-btn").simulate("click");
      shoot.instance().confirmTake();
    });

    it("adds a new take to the page", () => {
      expect(shoot.state().takes.length).toEqual(2);
    });
  });

  describe("export as PDF button", () => {
    describe("when there are one or more takes", () => {
      beforeEach(() => {
        shoot.find(".new-take-btn").simulate("click");
      });

      it("exists", () => {
        expect(shoot.find(".export-pdf-btn").exists()).toBe(true);
      });

      describe("when clicked", () => {
        beforeEach(() => {
          shoot.find(".new-take-btn").simulate("click");
        });

        it("calls export method", () => {
          shoot.find(".export-pdf-btn").simulate("click");
          expect(exportPDFMock).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe("when there aren't any takes", () => {
      it("does not exist", () => {
        expect(shoot.find(".export-pdf-btn").exists()).toBe(false);
      });
    });
  });
});