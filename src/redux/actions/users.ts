import * as types from '../types/users';

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (response: any) => ({
  type: types.FETCH_USERS_SUCCESS,
  users: response.data,
});

export const fetchUsersFailure = (e: any) => ({
  type: types.FETCH_USERS_FAILURE,
  error: e,
});

export const fetchCreateUserRequest = () => ({
  type: types.CREATE_USER_REQUEST,
});

export const fetchCreateUserFailure = (e: any) => ({
  type: types.CREATE_USER_FAILURE,
  error: e,
});

export const fetchCreateUserSuccess = (
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  avatar: string
) => ({
  type: types.CREATE_USER_SUCCESS,
  id,
  firstName,
  lastName,
  email,
  avatar,
});

export const fetchUpdateUserRequest = () => ({
  type: types.UPDATE_USER_REQUEST,
});

export const fetchUpdateUserFailure = (e: any) => ({
  type: types.UPDATE_USER_FAILURE,
  error: e,
});

export const fetchUpdateUserSuccess = (
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  avatar: string
) => ({
  type: types.UPDATE_USER_SUCCESS,
  id,
  firstName,
  lastName,
  email,
  avatar,
});

export const fetchDeleteUserRequest = () => ({
  type: types.DELETE_USER_REQUEST,
});

export const fetchDeleteUserFailure = (e: any) => ({
  type: types.DELETE_USER_FAILURE,
  error: e,
});

export const fetchDeleteUserSuccess = (userId: number) => ({
  type: types.DELETE_USER_SUCCESS,
  userId,
});
