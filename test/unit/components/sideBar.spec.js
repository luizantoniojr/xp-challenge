import SideBar from '../../../src/components/sideBar';
import Icon from '../../../src/components/icon';

import { shallow } from 'enzyme';
import React from 'react';

test('Should display a i', () => {
    const wrapper = shallow(<SideBar></SideBar>);

    expect(wrapper.find(Icon).exists()).toBeTruthy();
});