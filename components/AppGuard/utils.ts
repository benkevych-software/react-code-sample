import { ALLOWED_USER_ROLE } from '../../app-constants';

export const isAllowed = (userRole: string) => {
    return userRole === ALLOWED_USER_ROLE;
};
