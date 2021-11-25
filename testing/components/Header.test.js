import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

test('Testing header componnents',()=>{
    const wrapper=shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
//     const renderer= new ShallowRenderer();
//     renderer.render(<Header />);
//    expect(renderer.getRenderOutput()).toMatchSnapshot();
})