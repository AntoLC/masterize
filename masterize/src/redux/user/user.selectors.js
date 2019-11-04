import { createSelector } from 'reselect'
const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectAuthError = createSelector(
    [selectUser],
    user => user.error ? user.error.message : ''
);

export const selectSignUpError = createSelector(
    [selectUser],
    user => user.error_signUp ? user.error_signUp.message : ''
);

