import Content from '../../../src/components/content';
import { shallow } from 'enzyme';
import React from 'react';

test('Should display child content', () => {
    var text = "XP";

    const wrapper = shallow(<Content><span>{text}</span></Content>);

    expect(wrapper.find('span').text()).toBe(text);
});