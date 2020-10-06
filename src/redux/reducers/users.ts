import * as types from '../types/users';
import IUserList from '../../models/IUserList';

interface IState {
  list: IUserList[];
  loading: boolean;
}

export const initialState: IState = {
  list: [],
  loading: false,
};

const cars = (state = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_USERS_SUCCESS:
      if (!action.users || action.users.length === 0) {
        return { ...state };
      }
      const newList = [...state.list];
      action.users.forEach((_item: any) => {
        newList.push(_item);
      });
      return {
        ...state,
        loading: false,
        list: newList,
      };
    case types.FETCH_USERS_FAILURE:
      return { ...state, loading: false, list: [] };

    case types.CREATE_USER_SUCCESS:
      return { ...state };
    case types.UPDATE_USER_SUCCESS:
      return { ...state };
    case types.DELETE_USER_SUCCESS:
      return { ...state };
    default:
      return { ...state };
  }
};

export default cars;
