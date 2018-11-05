import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Shoot from '../components/Shoot';

describe("App", () => {
  it("will render Shoot", () => {
    const wrapper = shallow(<App />);
    const shoot = <Shoot />
    expect(wrapper.contains(shoot)).toEqual(true)
  });
});
