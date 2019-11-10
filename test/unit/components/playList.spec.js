import PlayList from '../../../src/components/playList';
import MusicTrack from '../../../src/components/musicTrack';
import { shallow } from 'enzyme';
import React from 'react';
import Sinon from 'sinon';

test('Should not display MusicTrack', () => {
    const wrapper = shallow(<PlayList></PlayList>);

    expect(wrapper.find(MusicTrack).exists()).toBeFalsy();
});

test('Should display MusicTrack', () => {

    var tracks = [
        {
            id: '123',
            track_number: '1',
            name: 'song',
            duration_ms: '12314'
        }
    ];

    const wrapper = shallow(<PlayList tracks={tracks}></PlayList>);

    expect(wrapper.find(MusicTrack).exists()).toBeTruthy();
});

test('Should play when on click MusicTrack', () => {
    var tracks = [
        {
            id: '123',
            track_number: '1',
            name: 'song',
            duration_ms: '12314'
        }
    ];

    const wrapper = shallow(<PlayList tracks={tracks}></PlayList>);
    const playListMock = Sinon.mock(wrapper.instance());
    playListMock.expects('pause').once();
    playListMock.expects('play').withArgs(tracks[0]).once();


    wrapper.find(MusicTrack).first().simulate('click');


    playListMock.verify();
    playListMock.restore();
});

test('Should clear state when on click same track', () => {
    var tracks = [
        {
            id: '123',
            track_number: '1',
            name: 'song',
            duration_ms: '12314'
        }
    ];

    const wrapper = shallow(<PlayList tracks={tracks}></PlayList>);
    wrapper.instance().setState({ trackPlaying: tracks[0].id })

    const playListMock = Sinon.mock(wrapper.instance());
    playListMock.expects('pause').once();
    playListMock.expects('setState').withArgs({ trackPlaying: null, audio: null }).once();


    wrapper.find(MusicTrack).first().simulate('click');


    playListMock.verify();
    playListMock.restore();
});