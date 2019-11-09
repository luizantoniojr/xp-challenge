import ActionLinkBack from '../../../src/components/actionLinkBack';
import ActionLink from '../../../src/components/actionLink';
import { shallow } from 'enzyme';
import React from 'react';
import Sinon from 'sinon';


test('Should display ActionLink', () => {
    const wrapper = shallow(<ActionLinkBack></ActionLinkBack>);

    expect(wrapper.find(ActionLink).exists()).toBeTruthy();
});

test('Should calls window.history.back', () => {
    const mockHistory = Sinon.mock(window.history);
    mockHistory.expects('back').once();
    const wrapper = shallow(<ActionLinkBack></ActionLinkBack>);

    wrapper.find(ActionLink).simulate('click');

    mockHistory.verify();
});
