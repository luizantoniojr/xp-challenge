import Card from '../../../src/components/card';
import { shallow } from 'enzyme';
import React from 'react';

test('Should show a image with the src passed by prop', () => {
    const source = "source xp";

    const wrapper = shallow(<Card srcImage={source}></Card>);

    expect(wrapper.find('img').prop('src')).toBe(source);
});


test('Should show a image with the alt passed by prop title', () => {
    const alternate = "alt xp";

    const wrapper = shallow(<Card title={alternate}></Card>);

    expect(wrapper.find('img').prop('alt')).toBe(alternate);
});

test('Should show the card title with the title passed by prop', () => {
    const title = "title xp";

    const wrapper = shallow(<Card title={title}></Card>);

    expect(wrapper.find('.title').text()).toBe(title);
});

test('Should show the subtitle with the subtitle passed by prop', () => {
    const subtitle = "subtitle xp";

    const wrapper = shallow(<Card subtitle={subtitle}></Card>);

    expect(wrapper.find('.subtitle').text()).toBe(subtitle);
});