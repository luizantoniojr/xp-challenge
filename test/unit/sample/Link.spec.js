import Link from '../../../src/components/sample/Link';
import { shallow } from 'enzyme';
import React from 'react';

test('Link changes the class when hovered', () => {
    const wrapper = shallow(<Link page="http://www.facebook.com">Facebook</Link>);
    wrapper.find('a').simulate('mouseEnter');

    expect(wrapper.hasClass("hovered")).toBe(true);
});