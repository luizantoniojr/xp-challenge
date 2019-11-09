import PlayList from '../../../src/components/playList';
import { shallow } from 'enzyme';
import React from 'react';

test('Should display child content', () => {
    var text = "XP";

    const wrapper = shallow(<PlayList><span>{text}</span></PlayList>);

    expect(wrapper.find('span').text()).toBe(text);
});