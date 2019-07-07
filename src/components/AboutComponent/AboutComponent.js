import React from 'react';
import { HelloComponent } from '../HelloComponent';

export const AboutComponent = props => {
    return (
        <div>
            <h1>About Component!</h1>
            <HelloComponent />
        </div>
    );
};
