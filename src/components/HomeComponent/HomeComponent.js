import React from 'react';
import { HelloComponent } from '../HelloComponent';

export const HomeComponent = props => {
    return (
        <div>
            <h1>Home Component!</h1>
            <HelloComponent />
        </div>
    );
};
