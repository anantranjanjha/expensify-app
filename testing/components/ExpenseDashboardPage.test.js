import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';

test('testing React Router Component', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})