import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Shoot from '../components/Shoot';

describe("App", () => {
  it("will render correctly", () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
