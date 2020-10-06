import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUsersRequest,
  fetchCreateUserRequest,
  fetchCreateUserSuccess,
  fetchCreateUserFailure,
  fetchUpdateUserRequest,
  fetchUpdateUserSuccess,
  fetchUpdateUserFailure,
  fetchDeleteUserSuccess,
  fetchDeleteUserRequest,
  fetchDeleteUserFailure,
} from '../actions/users';

const API_ENDPOINT = 'https://reqres.in/api/users';

export const thunkFetchUsers = (uri: string) => async (dispatch: any) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await fetch(uri);
    const jsonResponse = await response.json();

    dispatch(fetchUsersSuccess(jsonResponse));
  } catch (e) {
    dispatch(fetchUsersFailure(e));
  }
};

export const thunkPostUser = (
  firstName: string,
  lastName: string,
  email: string,
  avatar: string
) => async (dispatch: any) => {
  dispatch(fetchCreateUserRequest());
  try {
    const dataModel = {
      first_name: firstName,
      last_name: lastName,
      email,
      avatar,
    };
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(dataModel),
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonResponse = await response.json();
    dispatch(
      fetchCreateUserSuccess(
        jsonResponse.id,
        firstName,
        lastName,
        email,
        avatar
      )
    );
  } catch (e) {
    dispatch(fetchCreateUserFailure(e));
  }
};

export const thunkPatchUser = (
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  avatar: string
) => async (dispatch: any) => {
  dispatch(fetchUpdateUserRequest());
  try {
    const putUri = `${API_ENDPOINT}/${id}`;
    const dataModel = {
      first_name: firstName,
      last_name: lastName,
      email,
      avatar,
    };
    await fetch(putUri, {
      method: 'PATCH',
      body: JSON.stringify(dataModel),
      headers: { 'Content-Type': 'application/json' },
    });
    dispatch(fetchUpdateUserSuccess(id, firstName, lastName, email, avatar));
  } catch (e) {
    dispatch(fetchUpdateUserFailure(e));
  }
};

export const thunkDeleteUser = (id: number) => async (dispatch: any) => {
  dispatch(fetchDeleteUserRequest());
  try {
    const deleteUri = `${API_ENDPOINT}/${id}`;
    await fetch(deleteUri, { method: 'DELETE' });
    dispatch(fetchDeleteUserSuccess(id));
  } catch (e) {
    dispatch(fetchDeleteUserFailure(e));
  }
};
