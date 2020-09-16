export const AUTH_PERSIST = 'AUTH_PERSIST';

export function getPersistedUserAuth(token) {
  return {
    type: AUTH_PERSIST,
    payload: {token},
  };
}