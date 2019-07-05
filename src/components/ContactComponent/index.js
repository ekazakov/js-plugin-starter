import { lazy } from 'react';
export const ContactComponent = lazy(() =>
    import('./ContactComponent').then(module => ({ default: module.ContactComponent }))
);
