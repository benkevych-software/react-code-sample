import React, { useCallback, useEffect, useRef } from 'react';
import { AskArea } from 'core/src/components/AskArea/AskArea';
import { Status } from 'core/src/components/Status/Status';
import { useAnswers } from 'core/src/redux/hooks/answer/answer-hooks';
import { useAppSelector } from 'core/src/redux/hooks/app-hooks';
import { useRestoreLastPreview } from 'core/src/redux/hooks/preview';
import { AnnotateAnswersList } from 'core/src/components/AnnotateAnswersList/AnnotateAnswersList';
import cx from 'clsx';

import { AnnotateTags } from '../AnnotateTags/AnnotateTags';

import { ActiveCustomerProject } from './ActiveCustomerProject/ActiveCustomerProject';

import styles from './Answers.module.scss';

export const Answers: React.FC = () => {
    const { searchFocused } = useAppSelector((state) => state.answers);
    const [, { data: answersData }] = useAnswers();

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (searchFocused) {
            const endPosition = textareaRef.current?.value.length ?? 0;

            textareaRef.current?.setSelectionRange(endPosition, endPosition);
            textareaRef.current?.focus();
        } else {
            textareaRef.current?.blur();
        }
    }, [searchFocused, answersData]);

    useRestoreLastPreview({ metrics: false });

    const selectNextAnswer = useCallback(() => {
        return;
    }, []);

    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <AskArea goToAnswers={selectNextAnswer} />
                    <Status />
                    <div className={styles.headerRow}>
                        <AnnotateTags />
                        <div className={styles.spacer} />
                        <ActiveCustomerProject />
                    </div>
                </div>
            </div>

            <div className={cx(styles.body, styles.container)}>
                <AnnotateAnswersList />
            </div>
            <div className={styles.dimmer} />
        </div>
    );
};
