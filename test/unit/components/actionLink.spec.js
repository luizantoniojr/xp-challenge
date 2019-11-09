import ActionLink from '../../../src/components/actionLink';
import Icon from '../../../src/components/icon';
import { shallow } from 'enzyme';
import React from 'react';

test('Should display icon', () => {
    const wrapper = shallow(<ActionLink iconName="TEST"></ActionLink>);

    expect(wrapper.find(Icon).exists()).toBeTruthy();
});

test('Should display text', () => {
    const text = "TEST"
    const wrapper = shallow(<ActionLink>{text}</ActionLink>);

    expect(wrapper.text()).toBe(text);
});

test('Should calls handleClick', () => {
    var called = false;
    var handleClick = () => {
        called = true;
    };

    const wrapper = shallow(<ActionLink onClick={handleClick}></ActionLink>);

    wrapper.find('div').simulate("click");

    expect(called).toBeTruthy();
});
