import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Take from '../components/Take';

describe("Take", () => {

  const mockRemove = jest.fn();
  const id = 1;
  const key = 1;
  const props = { key: key, id: id, removeTake: mockRemove }
  const take = shallow(<Take {...props} />);

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
    });
  });

  describe("when typing into the Scene input", () => {
    it("updates the scene in `state`", () => {
      take.find(".scene-input").simulate("change", { target: { value: "1" } });
      expect(take.state().scene).toEqual("1");
    });
  });

  describe("when typing into the Shot input", () => {
    it("updates the shot in `state`", () => {
      take.find(".shot-input").simulate("change", { target: { value: "1" } });
      expect(take.state().shot).toEqual("1");
    });
  });

  describe("when typing into the Take input", () => {
    it("updates the takeNumber in `state`", () => {
      take.find(".take-input").simulate("change", { target: { value: "1" } });
      expect(take.state().takeNumber).toEqual("1");
    });
  });

  describe("when typing into the Description input", () => {
    it("updates the description in `state`", () => {
      take.find(".desc-input").simulate("change", { target: { value: "A description" } });
      expect(take.state().description).toEqual("A description");
    });
  });

  describe("when Good Take switch is clicked", () => {
    it("updates goodTake in `state`", () => {
      take.find(".goodTake-switch").simulate("change", { target: { checked: true } });
      expect(take.state().goodTake).toBe(true);
    });
  });

  describe("when typing into the Notes input", () => {
    it("updates the notes in `state`", () => {
      take.find(".notes-input").simulate("change", { target: { value: "Some notes" } });
      expect(take.state().notes).toEqual("Some notes");
    });
  });

  describe("when clicking the remove button", () => {
    beforeEach(() => {
      take.find(".remove-btn").simulate("click");
    });

    it("calls the removeTake callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});