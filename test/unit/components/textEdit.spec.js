import TextEdit from '../../../src/components/textEdit';
import { shallow } from 'enzyme';
import React from 'react';

test('Should show a label with the text passed by prop', () => {
    const label = "label xp";

    const wrapper = shallow(<TextEdit
        label={label}>
    </TextEdit>);

    expect(wrapper.find('label').text()).toBe(label);
});

test('Should show a input with the placeholder passed by prop', () => {
    const placeholder = "placeholder xp";

    const wrapper = shallow(<TextEdit
        placeholder={placeholder}>
    </TextEdit>);

    expect(wrapper.find('input').prop("placeholder")).toBe(placeholder);
});

test('Should set prop id in label for', () => {
    const id = "id xp";

    const wrapper = shallow(<TextEdit
        id={id}>
    </TextEdit>);

    expect(wrapper.find('label').prop("for")).toBe(id);
});

test('Should set prop id in input id', () => {
    const id = "id xp";

    const wrapper = shallow(<TextEdit
        id={id}>
    </TextEdit>);

    expect(wrapper.find('input').prop("id")).toBe(id);
});