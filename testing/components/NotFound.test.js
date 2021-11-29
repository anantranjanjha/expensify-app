import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from '../../src/components/NotFoundPage';

test('testing React Router Component', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})