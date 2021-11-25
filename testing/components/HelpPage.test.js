import React from "react";
import { shallow } from "enzyme";
import HelpPage from '../../src/components/HelpPage';

test('testing React Router Component',()=>{
    const wrapper=shallow(<HelpPage/>);
    expect(wrapper).toMatchSnapshot();
})