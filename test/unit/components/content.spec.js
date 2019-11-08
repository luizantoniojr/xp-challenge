import Content from '../../../src/components/content';
import { shallow } from 'enzyme';
import React from 'react';

test('Deve exibir conteudo filho', () => {
    var texto = "XP";

    const wrapper = shallow(<Content><span>{texto}</span></Content>);

    expect(wrapper.find('span').text()).toBe(texto);
});