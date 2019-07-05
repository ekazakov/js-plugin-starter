import { lazy } from 'react';
export const AboutComponent = lazy(() =>
    import('./AboutComponent').then(module => ({ default: module.AboutComponent }))
);
