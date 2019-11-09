import Icon from '../../../src/components/icon';
import { shallow } from 'enzyme';
import React from 'react';

test('Should not set any className', () => {
    const wrapper = shallow(<Icon></Icon>);

    expect(wrapper.find('i').prop('className').trim()).toBe("");
});

test('Should set i with correct className', () => {
    var className = "fa fa-spotify"

    const wrapper = shallow(<Icon name="spotify"></Icon>);

    expect(wrapper.find('i').prop('className')).toContain(className);
});

test('Should set i with correct size', () => {
    var className = "fa-2x"

    const wrapper = shallow(<Icon size="2"></Icon>);

    expect(wrapper.find('i').prop('className')).toContain(className);
});