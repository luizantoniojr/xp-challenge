import MusicTrack from '../../../src/components/musicTrack';
import { shallow } from 'enzyme';
import React from 'react';

test('Should display track number', () => {
    const wrapper = shallow(<MusicTrack number="1"></MusicTrack>);

    expect(wrapper.find('.number').text()).toBe("1.");
});

test('Should display track name', () => {
    const name = "music";
    const wrapper = shallow(<MusicTrack name={name}></MusicTrack>);

    expect(wrapper.find('.name').text()).toBe(name);
});

test('Should display track time', () => {
    const time = "3:20";
    const wrapper = shallow(<MusicTrack time={time}></MusicTrack>);

    expect(wrapper.find('.time').text()).toBe(time);
});

test('Should set className playing', () => {
    const wrapper = shallow(<MusicTrack playing></MusicTrack>);

    expect(wrapper.prop('className')).toContain("playing");
});

test('Should not set className playing', () => {
    const wrapper = shallow(<MusicTrack></MusicTrack>);

    expect(wrapper.prop('className')).not.toContain("playing");
});
