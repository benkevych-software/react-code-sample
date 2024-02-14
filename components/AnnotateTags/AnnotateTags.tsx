import React from 'react';
import { Tags } from 'core/src/components/Tags/Tags';
import { useAppDispatch, useAppSelector } from 'core/src/redux/hooks/app-hooks';
import { openAnnotateEditTagModal } from 'core/src/redux/slices/modals/annotate-tags-modal-slice';

export const AnnotateTags: React.FC = () => {
    const { tags } = useAppSelector((state) => state.annotateAnswers.annotate_answers);
    const dispatch = useAppDispatch();

    const handleEditTag = React.useCallback(
        (currentTagValue: string) => {
            dispatch(openAnnotateEditTagModal(currentTagValue));
        },
        [dispatch]
    );

    return <Tags tags={tags} onEditTag={handleEditTag} />;
};
