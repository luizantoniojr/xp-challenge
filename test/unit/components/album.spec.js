import Album from '../../../src/components/album';
import { shallow } from 'enzyme';
import React from 'react';

test('Should show a image with the src passed by prop', () => {
    const source = "source xp";

    const wrapper = shallow(<Album srcImage={source}></Album>);

    expect(wrapper.find('img').prop('src')).toBe(source);
});


test('Should show a image with the alt passed by prop name', () => {
    const alternate = "alt xp";

    const wrapper = shallow(<Album name={alternate}></Album>);

    expect(wrapper.find('img').prop('alt')).toBe(alternate);
});

test('Should show the album name with the name passed by prop', () => {
    const albumName = "albumName xp";

    const wrapper = shallow(<Album name={albumName}></Album>);

    expect(wrapper.find('.name').text()).toBe(albumName);
});

test('Should show the album artist with the artist passed by prop', () => {
    const artist = "artist xp";

    const wrapper = shallow(<Album artist={artist}></Album>);

    expect(wrapper.find('.artist').text()).toBe(artist);
});