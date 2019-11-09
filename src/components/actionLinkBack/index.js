import React from 'react';

import ActionLink from '../actionLink';

const ActionLinkBack = () => (
    <ActionLink iconName="chevron-left" onClick={() => window.history.back()}>
        Voltar
    </ActionLink>
);

export default ActionLinkBack;