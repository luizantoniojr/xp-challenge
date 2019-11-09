import React from 'react';
import './style.css';

import Icon from '../icon';

const Button = (props) => (
    <a className="action-link">
        <div className="action-link-clickable-area" onClick={() => props.onClick()}>
            {!!props.iconName && <Icon name={props.iconName}></Icon>}
            <span>{props.children}</span>
        </div>
    </a>
);


export default Button;