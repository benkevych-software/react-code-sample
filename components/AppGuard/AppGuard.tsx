import React from 'react';
import { PreloadAnimation } from 'core/src/components/Animations/Preload/PreloadAnimation';
import { useAppInit } from 'core/src/redux/hooks/app-hooks';
import { useAppSelector } from 'core/src/redux/hooks/app-hooks';
import { useIsUnleashReady } from 'core/src/redux/hooks/is-unleash-ready';

import { Forbidden } from '../Placeholders';

import { isAllowed } from './utils';

import styles from './AppGuard.module.scss';

export type AppGuardProps = {
    children: React.ReactElement;
};

export const AppGuard: React.FC<AppGuardProps> = ({ children }) => {
    const { isUnleashReady } = useIsUnleashReady();
    const [appInitialized, error] = useAppInit();
    const { user, token } = useAppSelector((state) => state.auth);

    if (appInitialized && error) {
        throw Error('General initialization error');
    }

    if (appInitialized && !error && isUnleashReady) {
        if (token && user?.role && !isAllowed(user.role)) {
            return <Forbidden />;
        }

        return children;
    }

    return (
        <div className={styles.wrapper}>
            <PreloadAnimation />
        </div>
    );
};
