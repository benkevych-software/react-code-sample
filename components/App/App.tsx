import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { FlagProvider } from '@unleash/proxy-client-react';
import { unleashClientConfig } from 'core/src/clients/unleash/unleash-client-config';
import { AppContainerContext } from 'core/src/components/App/app-container-context';
import { AppErrorBoundary } from 'core/src/components/App/ErrorBoundary/ErrorBoundary';
import { Modals } from 'core/src/components/Modals/Modals';
import { store } from 'core/src/redux/store';

import { MainRouter } from '../../routes/main';
import { AppGuard } from '../AppGuard/AppGuard';
import { DesignProvider } from '../Providers/DesignProvider';

import styles from './App.module.scss';

export const App: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <FlagProvider startClient config={unleashClientConfig}>
            <div className={styles.wrapper} ref={wrapperRef}>
                <Provider store={store}>
                    <AppErrorBoundary>
                        <AppContainerContext.Provider value={wrapperRef}>
                            <DesignProvider>
                                <AppGuard>
                                    <>
                                        <MainRouter />
                                        <Modals />
                                    </>
                                </AppGuard>
                            </DesignProvider>
                        </AppContainerContext.Provider>
                    </AppErrorBoundary>
                </Provider>
            </div>
        </FlagProvider>
    );
};
