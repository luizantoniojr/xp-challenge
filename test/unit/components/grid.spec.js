import Grid from '../../../src/components/grid';
import { shallow } from 'enzyme';
import React from 'react';

test('Should show a title with the text passed by prop', () => {
    const title = "Title xp";

    const wrapper = shallow(<Grid title={title}></Grid>);

    expect(wrapper.find('h4').text()).toBe(title);
});


test('Should display child grid', () => {
    var text = "XP";

    const wrapper = shallow(<Grid><span>{text}</span></Grid>);

    expect(wrapper.find('span').text()).toBe(text);
});