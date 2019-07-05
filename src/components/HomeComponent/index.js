import { lazy } from 'react';
export const HomeComponent = lazy(() =>
    import('./HomeComponent').then(module => ({ default: module.HomeComponent }))
);
