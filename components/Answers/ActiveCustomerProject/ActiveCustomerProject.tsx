import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProject } from 'core/src/redux/hooks/settings-hooks';

import styles from './ActiveCustomerProject.module.scss';

export const ActiveCustomerProject: React.FC = () => {
    const { t } = useTranslation('translations');
    const { project } = useProject();

    if (!project) {
        return null;
    }

    return <span className={styles.customerProject}>{t('annotate-answers.active-customer-project', { project })}</span>;
};
