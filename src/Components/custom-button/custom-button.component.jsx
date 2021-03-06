import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children , googleSignIn, ...otherProps}) => (
    <button className = {`${googleSignIn ? 'googleButton' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;