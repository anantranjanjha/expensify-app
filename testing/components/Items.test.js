
import React from "react";
import { shallow } from "enzyme";
import { Item } from "../../src/components/Items";


const expense1 = {
    id: 1,
    description: 'debit',
    amount: 50000,
    note: 'gello',
    createdAt: 49,
};

test('testing React Router Component', () => {
    const wrapper = shallow(<Item expenses={expense1} />);
    expect(wrapper).toMatchSnapshot();
})