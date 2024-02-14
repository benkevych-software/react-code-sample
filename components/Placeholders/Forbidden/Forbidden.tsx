import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Heading } from '@chakra-ui/react';
import { LoginLayout } from 'core/src/layouts/Login/LoginLayout';
import { useAppDispatch } from 'core/src/redux/hooks/app-hooks';
import { logout } from 'core/src/redux/thunks/user-thunk';
import { SSOLogoutReason } from 'core/src/services/sso/types';

import styles from './Forbidden.module.scss';

export const Forbidden: React.FC = () => {
    const { t } = useTranslation('translations');
    const dispatch = useAppDispatch();
    const headerText = t('app.web.mode.forbidden');
    const logoutButtonText = t('app.logout');
    const onLogoutClick = () => {
        dispatch(logout({ logoutFromPortal: true, reason: SSOLogoutReason.USER_CLICKS_LOGOUT }));
    };

    return (
        <LoginLayout>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Heading as="h2">{headerText}</Heading>
                </div>
                <div className={styles.fields}>
                    <div className={styles.buttons}>
                        <Button variant="primary" onClick={onLogoutClick} minWidth="168px" minHeight="48px">
                            {logoutButtonText}
                        </Button>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
};
