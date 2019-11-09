import SideBar from '../../../src/components/sideBar';
import { shallow } from 'enzyme';
import React from 'react';

test('Should display a i', () => {
    const wrapper = shallow(<SideBar></SideBar>);

    expect(wrapper.find('i').exists()).toBeTruthy();
});